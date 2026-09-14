import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto'
import { Buffer } from 'node:buffer'

const keyFor = (secret) => createHash('sha256').update(secret).digest()

export function createNewsletterToken(email, secret) {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', keyFor(secret), iv)
  const payload = JSON.stringify({ email, expires: Date.now() + 24 * 60 * 60 * 1000 })
  const encrypted = Buffer.concat([cipher.update(payload, 'utf8'), cipher.final()])
  return Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString('base64url')
}

export function verifyNewsletterToken(token, secret) {
  try {
    const value = Buffer.from(token, 'base64url')
    const decipher = createDecipheriv('aes-256-gcm', keyFor(secret), value.subarray(0, 12))
    decipher.setAuthTag(value.subarray(12, 28))
    const payload = JSON.parse(Buffer.concat([decipher.update(value.subarray(28)), decipher.final()]).toString('utf8'))
    if (!payload.email || payload.expires < Date.now()) return null
    return payload
  } catch {
    return null
  }
}
