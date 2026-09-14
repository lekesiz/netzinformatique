export const CONSENT_STORAGE_KEY = 'netz_cookie_consent'
export const LEGACY_CONSENT_DATE_KEY = 'netz_cookie_consent_date'
export const CONSENT_CHANGED_EVENT = 'netz:consent-changed'
export const CONSENT_OPEN_EVENT = 'netz:consent-open'
export const CONSENT_SCHEMA_VERSION = 2
export const CONSENT_POLICY_REVISION = '2026-09'

export const CONSENT_CATEGORIES = Object.freeze([
  'necessary',
  'analytics',
  'functional',
  'marketing',
])

const normalizeCategories = (categories = {}) => ({
  necessary: true,
  analytics: categories.analytics === true,
  functional: categories.functional === true,
  marketing: categories.marketing === true,
})

export const getDefaultConsent = () => ({
  version: CONSENT_SCHEMA_VERSION,
  status: 'undecided',
  source: 'default',
  updatedAt: null,
  policyRevision: CONSENT_POLICY_REVISION,
  categories: normalizeCategories(),
})

const isCurrentConsent = (value) => (
  value?.version === CONSENT_SCHEMA_VERSION
  && value?.status === 'decided'
  && value?.categories
)

const migrateLegacyConsent = (value, storage) => {
  if (!value || typeof value !== 'object' || !('necessary' in value)) return null

  const legacyDate = storage.getItem(LEGACY_CONSENT_DATE_KEY)
  const parsedLegacyDate = legacyDate && !Number.isNaN(Date.parse(legacyDate))
    ? new Date(legacyDate).toISOString()
    : new Date().toISOString()

  const migrated = {
    version: CONSENT_SCHEMA_VERSION,
    status: 'decided',
    source: 'legacy-v1',
    updatedAt: parsedLegacyDate,
    policyRevision: CONSENT_POLICY_REVISION,
    categories: normalizeCategories(value),
  }

  storage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(migrated))
  storage.removeItem(LEGACY_CONSENT_DATE_KEY)
  return migrated
}

export function readConsent(storage = globalThis.localStorage) {
  if (!storage) return getDefaultConsent()

  try {
    const raw = storage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return getDefaultConsent()

    const parsed = JSON.parse(raw)
    if (isCurrentConsent(parsed)) {
      return {
        ...parsed,
        categories: normalizeCategories(parsed.categories),
      }
    }

    const migrated = migrateLegacyConsent(parsed, storage)
    if (migrated) return migrated

    storage.removeItem(CONSENT_STORAGE_KEY)
    storage.removeItem(LEGACY_CONSENT_DATE_KEY)
    return getDefaultConsent()
  } catch (error) {
    console.warn('Could not read cookie preferences:', error)
    try {
      storage.removeItem(CONSENT_STORAGE_KEY)
      storage.removeItem(LEGACY_CONSENT_DATE_KEY)
    } catch {
      // Storage can be unavailable in hardened browser modes.
    }
    return getDefaultConsent()
  }
}

export function saveConsent(categories, source = 'explicit', storage = globalThis.localStorage) {
  const consent = {
    version: CONSENT_SCHEMA_VERSION,
    status: 'decided',
    source,
    updatedAt: new Date().toISOString(),
    policyRevision: CONSENT_POLICY_REVISION,
    categories: normalizeCategories(categories),
  }

  storage?.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
  storage?.removeItem(LEGACY_CONSENT_DATE_KEY)

  globalThis.dispatchEvent?.(new CustomEvent(CONSENT_CHANGED_EVENT, {
    detail: consent,
  }))

  return consent
}

export function hasConsent(category, consent = readConsent()) {
  return consent.status === 'decided' && consent.categories?.[category] === true
}

export function openConsentPreferences(source = 'site-control') {
  globalThis.dispatchEvent?.(new CustomEvent(CONSENT_OPEN_EVENT, {
    detail: { source },
  }))
}

export function subscribeConsent(listener) {
  const onConsentChange = (event) => listener(event.detail ?? readConsent())
  const onStorage = (event) => {
    if (event.key === CONSENT_STORAGE_KEY) listener(readConsent())
  }

  globalThis.addEventListener?.(CONSENT_CHANGED_EVENT, onConsentChange)
  globalThis.addEventListener?.('storage', onStorage)

  return () => {
    globalThis.removeEventListener?.(CONSENT_CHANGED_EVENT, onConsentChange)
    globalThis.removeEventListener?.('storage', onStorage)
  }
}
