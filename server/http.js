import { Buffer } from 'node:buffer'

const ALLOWED_ORIGINS = new Set([
  'https://netzinformatique.fr',
  'https://www.netzinformatique.fr',
  'https://netzinformatique.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
])

export const MAX_BODY_BYTES = 16 * 1024

export function sendError(res, status, code, message, extra = {}) {
  return res.status(status).json({ success: false, code, message, ...extra })
}

export function prepareRequest(req, res) {
  const origin = req.headers?.origin
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Vary', 'Origin')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Allow', 'POST, OPTIONS')

  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    sendError(res, 403, 'origin_not_allowed', 'Origine non autorisée.')
    return false
  }

  if (origin) res.setHeader('Access-Control-Allow-Origin', origin)

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return false
  }

  if (req.method !== 'POST') {
    sendError(res, 405, 'method_not_allowed', 'Méthode non autorisée.')
    return false
  }

  const contentLength = Number(req.headers?.['content-length'] || 0)
  if (contentLength > MAX_BODY_BYTES) {
    sendError(res, 413, 'payload_too_large', 'La requête est trop volumineuse.')
    return false
  }

  const contentType = req.headers?.['content-type']
  if (contentType && !contentType.toLowerCase().startsWith('application/json')) {
    sendError(res, 415, 'unsupported_media_type', 'Le contenu doit être envoyé au format JSON.')
    return false
  }

  return true
}

export function parseJsonBody(req, res) {
  let body = req.body
  try {
    if (typeof body === 'string') {
      if (Buffer.byteLength(body, 'utf8') > MAX_BODY_BYTES) {
        sendError(res, 413, 'payload_too_large', 'La requête est trop volumineuse.')
        return null
      }
      body = JSON.parse(body)
    }
  } catch {
    sendError(res, 400, 'invalid_json', 'Le contenu JSON est invalide.')
    return null
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    sendError(res, 400, 'invalid_json', 'Le contenu JSON est invalide.')
    return null
  }

  return body
}

export function getClientIdentifier(req) {
  const forwarded = req.headers?.['x-vercel-forwarded-for'] || req.headers?.['x-forwarded-for']
  const firstAddress = Array.isArray(forwarded) ? forwarded[0] : String(forwarded || '').split(',')[0]
  return firstAddress?.trim() || req.socket?.remoteAddress || req.connection?.remoteAddress || 'unknown'
}
