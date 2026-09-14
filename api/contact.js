import { Resend } from 'resend'
import { contactRequestSchema } from '../shared/schemas.js'
import { getClientIdentifier, parseJsonBody, prepareRequest, sendError } from '../server/http.js'
import {
  createDuplicateGuard,
  createRateLimiter,
  escapeHtml,
  fingerprint,
  isLikelyAutomated,
  normalizeMailSubject,
} from '../server/security.js'

const ipLimiter = createRateLimiter({ limit: 5, windowMs: 15 * 60 * 1000 })
const emailLimiter = createRateLimiter({ limit: 4, windowMs: 60 * 60 * 1000 })
const duplicateGuard = createDuplicateGuard({ ttlMs: 10 * 60 * 1000 })

const botAcknowledgement = (res) => res.status(200).json({
  success: true,
  message: 'Votre demande a été prise en compte.',
})

const createEmailBodies = (data, requestId) => {
  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value ?? '')]))
  const phoneTarget = String(data.phone || '').replace(/[^+\d]/g, '')
  const intent = [
    data.audience,
    data.service,
    data.offer,
    data.sector,
    data.company,
    data.scale,
    data.urgency,
    data.contactPreference,
    data.device,
    data.intervention,
    data.availability,
    data.source,
  ].filter(Boolean).join(' · ')

  return {
    html: `<!doctype html>
<html lang="fr"><body style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937">
  <main style="max-width:640px;margin:0 auto;padding:24px">
    <h1 style="color:#0f172a">Nouvelle demande de contact</h1>
    <p><strong>Référence :</strong> ${escapeHtml(requestId)}</p>
    <p><strong>Nom :</strong> ${safe.name}</p>
    <p><strong>Email :</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
    ${data.phone ? `<p><strong>Téléphone :</strong> <a href="tel:${phoneTarget}">${safe.phone}</a></p>` : ''}
    ${data.subject ? `<p><strong>Sujet :</strong> ${safe.subject}</p>` : ''}
    ${intent ? `<p><strong>Contexte :</strong> ${escapeHtml(intent)}</p>` : ''}
    <p><strong>Message :</strong></p>
    <div style="white-space:normal;padding:16px;background:#f8fafc;border-left:4px solid #0369a1">${safe.message.replace(/\r?\n/g, '<br>')}</div>
  </main>
</body></html>`,
    text: [
      'Nouvelle demande de contact',
      `Référence : ${requestId}`,
      `Nom : ${data.name}`,
      `Email : ${data.email}`,
      data.phone ? `Téléphone : ${data.phone}` : null,
      data.subject ? `Sujet : ${data.subject}` : null,
      intent ? `Contexte : ${intent}` : null,
      '',
      data.message,
    ].filter((value) => value !== null).join('\n'),
  }
}

export function __resetRateLimit() {
  ipLimiter.clear()
  emailLimiter.clear()
  duplicateGuard.clear()
}

export default async function handler(req, res) {
  if (!prepareRequest(req, res)) return

  const body = parseJsonBody(req, res)
  if (!body) return

  const clientId = getClientIdentifier(req)
  const ipLimit = ipLimiter.check(clientId)
  if (!ipLimit.allowed) {
    res.setHeader('Retry-After', String(ipLimit.retryAfter))
    return sendError(res, 429, 'rate_limited', 'Trop de demandes. Veuillez réessayer plus tard.')
  }

  const parsed = contactRequestSchema.safeParse(body)
  if (!parsed.success) {
    return sendError(res, 422, 'validation_failed', 'Veuillez vérifier les champs du formulaire.', {
      fieldErrors: parsed.error.flatten().fieldErrors,
    })
  }

  const data = parsed.data
  if (isLikelyAutomated(data)) return botAcknowledgement(res)

  const emailLimit = emailLimiter.check(data.email)
  if (!emailLimit.allowed) {
    res.setHeader('Retry-After', String(emailLimit.retryAfter))
    return sendError(res, 429, 'rate_limited', 'Trop de demandes. Veuillez réessayer plus tard.')
  }

  const duplicateKey = fingerprint('contact', clientId, data.email, data.message)
  if (duplicateGuard.seen(duplicateKey)) return botAcknowledgement(res)

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const toEmail = process.env.RESEND_TO_EMAIL || 'contact@netzinformatique.fr'
  if (!apiKey || !fromEmail || !toEmail) {
    return sendError(res, 503, 'delivery_unavailable', 'Le service de messagerie est temporairement indisponible. Veuillez nous appeler au 03 67 31 02 01.')
  }

  const requestId = globalThis.crypto?.randomUUID?.() || `contact-${Date.now().toString(36)}`
  const { html, text } = createEmailBodies(data, requestId)
  const subject = normalizeMailSubject(data.subject, `Nouveau message de ${data.name}`)

  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[NETZ Contact] ${subject}`,
      html,
      text,
    })

    if (result?.error) {
      console.error('Contact delivery rejected', {
        requestId,
        providerError: result.error.name || 'provider_error',
        statusCode: result.error.statusCode,
      })
      return sendError(res, 502, 'delivery_failed', 'Votre message n’a pas pu être envoyé. Veuillez réessayer ou nous appeler.')
    }

    return res.status(200).json({
      success: true,
      requestId,
      message: 'Votre message a été envoyé. Nous vous répondrons dès que possible.',
    })
  } catch (error) {
    console.error('Contact delivery failed', {
      requestId,
      providerError: error?.name || 'network_error',
    })
    return sendError(res, 502, 'delivery_failed', 'Votre message n’a pas pu être envoyé. Veuillez réessayer ou nous appeler.')
  }
}
