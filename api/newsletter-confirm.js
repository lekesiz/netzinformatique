import { Resend } from 'resend'
import { z } from 'zod'
import { parseJsonBody, prepareRequest, sendError } from '../server/http.js'
import { verifyNewsletterToken } from '../server/newsletterToken.js'

const requestSchema = z.object({ token: z.string().min(40).max(2000) }).strict()

export default async function handler(req, res) {
  if (!prepareRequest(req, res)) return
  const body = parseJsonBody(req, res)
  if (!body) return
  const parsed = requestSchema.safeParse(body)
  if (!parsed.success) return sendError(res, 422, 'invalid_token', 'Lien de confirmation invalide.')

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return sendError(res, 503, 'newsletter_unavailable', 'Le service est temporairement indisponible.')
  const payload = verifyNewsletterToken(parsed.data.token, process.env.NEWSLETTER_TOKEN_SECRET || apiKey)
  if (!payload) return sendError(res, 410, 'expired_token', 'Ce lien est invalide ou expiré. Recommencez votre inscription.')

  try {
    const result = await new Resend(apiKey).contacts.update({ email: payload.email, unsubscribed: false })
    if (result?.error) return sendError(res, 502, 'confirmation_failed', 'La confirmation n’a pas pu être enregistrée.')
    return res.status(200).json({ success: true, message: 'Votre inscription est confirmée.' })
  } catch (error) {
    console.error('Newsletter confirmation failed', { providerError: error?.name || 'network_error' })
    return sendError(res, 502, 'confirmation_failed', 'La confirmation n’a pas pu être enregistrée.')
  }
}
