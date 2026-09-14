import { createHash } from 'node:crypto'

export function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function normalizeMailSubject(value, fallback) {
  const printable = Array.from(String(value || fallback || ''))
    .map((character) => {
      const code = character.charCodeAt(0)
      return code < 32 || code === 127 ? ' ' : character
    })
    .join('')
  const normalized = printable
    .replace(/\s+/g, ' ')
    .trim()
  return normalized.slice(0, 180)
}

export function createRateLimiter({ limit, windowMs, maxKeys = 5000 }) {
  const entries = new Map()

  const prune = (now) => {
    for (const [key, timestamps] of entries) {
      const active = timestamps.filter((time) => now - time < windowMs)
      if (active.length) entries.set(key, active)
      else entries.delete(key)
    }
    while (entries.size > maxKeys) entries.delete(entries.keys().next().value)
  }

  return {
    check(key) {
      const now = Date.now()
      if (entries.size >= maxKeys) prune(now)
      const active = (entries.get(key) || []).filter((time) => now - time < windowMs)
      if (active.length >= limit) {
        const retryAfter = Math.max(1, Math.ceil((windowMs - (now - active[0])) / 1000))
        return { allowed: false, retryAfter }
      }
      active.push(now)
      entries.set(key, active)
      return { allowed: true, retryAfter: 0 }
    },
    clear() {
      entries.clear()
    },
  }
}

export function createDuplicateGuard({ ttlMs, maxKeys = 5000 }) {
  const entries = new Map()
  return {
    seen(key) {
      const now = Date.now()
      const previous = entries.get(key)
      entries.set(key, now)
      for (const [candidate, timestamp] of entries) {
        if (now - timestamp >= ttlMs || entries.size > maxKeys) entries.delete(candidate)
      }
      return previous !== undefined && now - previous < ttlMs
    },
    clear() {
      entries.clear()
    },
  }
}

export function fingerprint(...values) {
  return createHash('sha256').update(values.map((value) => String(value || '').trim().toLowerCase()).join('\u001f')).digest('hex')
}

export function isLikelyAutomated({ website, startedAt }, minimumFillTimeMs = 1500) {
  if (website?.trim()) return true
  return Boolean(startedAt && Date.now() - startedAt < minimumFillTimeMs)
}
