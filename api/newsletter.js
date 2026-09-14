import { Resend } from 'resend'
import { newsletterRequestSchema } from '../shared/schemas.js'
import { getClientIdentifier, parseJsonBody, prepareRequest, sendError } from '../server/http.js'
import { createDuplicateGuard, createRateLimiter, fingerprint, isLikelyAutomated } from '../server/security.js'
import { createNewsletterToken } from '../server/newsletterToken.js'

const ipLimiter = createRateLimiter({ limit: 3, windowMs: 15 * 60 * 1000 })
const emailLimiter = createRateLimiter({ limit: 3, windowMs: 24 * 60 * 60 * 1000 })
const duplicateGuard = createDuplicateGuard({ ttlMs: 10 * 60 * 1000 })

const isAlreadySubscribed = (error) => `${error?.name || ''} ${error?.message || ''} ${error?.statusCode || ''}`.toLowerCase().match(/already|exist|409/)

const confirmationEmail = (url) => `<!doctype html><html lang="fr"><body style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937"><main style="max-width:600px;margin:0 auto;padding:24px"><h1>Confirmez votre inscription</h1><p>Vous avez demandé à recevoir la newsletter de NETZ Informatique.</p><p><a href="${url}" style="display:inline-block;padding:12px 18px;background:#0369a1;color:white;text-decoration:none;border-radius:8px">Confirmer mon inscription</a></p><p>Ce lien expire dans 24 heures. Si vous n’êtes pas à l’origine de cette demande, ignorez cet email.</p></main></body></html>`

export function __resetRateLimit() {
  ipLimiter.clear(); emailLimiter.clear(); duplicateGuard.clear()
}

export default async function handler(req, res) {
  if (!prepareRequest(req, res)) return
  const body = parseJsonBody(req, res)
  if (!body) return

  const clientId = getClientIdentifier(req)
  const ipLimit = ipLimiter.check(clientId)
  if (!ipLimit.allowed) { res.setHeader('Retry-After', String(ipLimit.retryAfter)); return sendError(res, 429, 'rate_limited', 'Trop de demandes. Veuillez réessayer plus tard.') }

  const parsed = newsletterRequestSchema.safeParse(body)
  if (!parsed.success) return sendError(res, 422, 'validation_failed', 'Veuillez vérifier votre adresse email et votre accord.', { fieldErrors: parsed.error.flatten().fieldErrors })
  const data = parsed.data
  if (isLikelyAutomated(data)) return res.status(200).json({ success: true, message: 'Votre demande a été prise en compte.' })

  const emailLimit = emailLimiter.check(data.email)
  if (!emailLimit.allowed) { res.setHeader('Retry-After', String(emailLimit.retryAfter)); return sendError(res, 429, 'rate_limited', 'Trop de demandes. Veuillez réessayer plus tard.') }
  if (duplicateGuard.seen(fingerprint('newsletter', clientId, data.email))) return res.status(200).json({ success: true, message: 'Vérifiez votre boîte email pour confirmer votre inscription.' })

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID
  const fromEmail = process.env.RESEND_FROM_EMAIL
  if (!apiKey || !audienceId || !fromEmail) return sendError(res, 503, 'newsletter_unavailable', 'Le service d’inscription est temporairement indisponible.')

  try {
    const resend = new Resend(apiKey)
    const contactResult = await resend.contacts.create({ email: data.email, unsubscribed: true, audienceId })
    if (contactResult?.error && !isAlreadySubscribed(contactResult.error)) return sendError(res, 502, 'subscription_failed', 'L’inscription n’a pas pu être enregistrée. Veuillez réessayer.')

    const token = createNewsletterToken(data.email, process.env.NEWSLETTER_TOKEN_SECRET || apiKey)
    const confirmationUrl = `https://www.netzinformatique.fr/newsletter-confirmation?token=${encodeURIComponent(token)}`
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: 'Confirmez votre inscription à la newsletter NETZ',
      html: confirmationEmail(confirmationUrl),
    })
    if (emailResult?.error) return sendError(res, 502, 'confirmation_failed', 'L’email de confirmation n’a pas pu être envoyé. Veuillez réessayer.')

    return res.status(202).json({ success: true, message: 'Un email de confirmation vient de vous être envoyé. Le lien est valable 24 heures.' })
  } catch (error) {
    console.error('Newsletter opt-in failed', { providerError: error?.name || 'network_error' })
    return sendError(res, 502, 'subscription_failed', 'L’inscription n’a pas pu être enregistrée. Veuillez réessayer.')
  }
}
