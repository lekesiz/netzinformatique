/**
 * Email validation utility
 */
export function isValidEmail(email) {
  if (!email) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Phone number validation utility (French format)
 */
export function isValidPhoneNumber(phone) {
  if (!phone) return false
  // Remove spaces and special characters
  const cleanPhone = phone.replace(/[\s.-]/g, '')
  // French phone number format (10 digits starting with 0, or +33)
  const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:\d{2}){4}$/
  return phoneRegex.test(cleanPhone)
}

/**
 * Name validation utility
 */
export function isValidName(name, minLength = 2, maxLength = 100) {
  if (!name) return false
  const trimmedName = name.trim()
  return trimmedName.length >= minLength && trimmedName.length <= maxLength
}

/**
 * Message validation utility
 */
export function isValidMessage(message, minLength = 10, maxLength = 5000) {
  if (!message) return false
  const trimmedMessage = message.trim()
  return trimmedMessage.length >= minLength && trimmedMessage.length <= maxLength
}

/**
 * Sanitize string for display (basic HTML escaping)
 */
export function sanitizeString(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone) {
  if (!phone) return ''
  const cleanPhone = phone.replace(/[\s.-]/g, '')

  // French format: 0X XX XX XX XX
  if (cleanPhone.startsWith('0') && cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(?=\d)/g, '$1 ').trim()
  }

  // International format: +33 X XX XX XX XX
  if (cleanPhone.startsWith('+33') && cleanPhone.length === 12) {
    return cleanPhone.replace(/(\+\d{2})(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5 $6')
  }

  return phone
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

/**
 * Check if string contains only alphanumeric characters and common punctuation
 */
export function isSafeString(str) {
  if (!str) return true
  // Allow letters, numbers, spaces, and common punctuation
  const safeRegex = /^[a-zA-Z0-9\s.,!?;:()\-'"\u00C0-\u017F]+$/
  return safeRegex.test(str)
}
