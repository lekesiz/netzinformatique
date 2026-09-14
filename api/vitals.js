import { webVitalSchema } from '../shared/schemas.js'
import { parseJsonBody, prepareRequest, sendError } from '../server/http.js'
import { createRateLimiter } from '../server/security.js'

const limiter = createRateLimiter({ limit: 60, windowMs: 60 * 1000 })

export default function handler(req, res) {
  if (!prepareRequest(req, res)) return
  const body = parseJsonBody(req, res)
  if (!body) return

  const parsed = webVitalSchema.safeParse(body)
  if (!parsed.success) return sendError(res, 422, 'validation_failed', 'Mesure invalide.')

  const key = `${parsed.data.route}:${parsed.data.device}`
  const limit = limiter.check(key)
  if (!limit.allowed) {
    res.setHeader('Retry-After', String(limit.retryAfter))
    return sendError(res, 429, 'rate_limited', 'Trop de mesures.')
  }

  console.info('web_vital', parsed.data)
  return res.status(202).json({ success: true })
}
