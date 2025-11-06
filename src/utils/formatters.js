/**
 * Date and Number Formatting Utilities
 * Multi-language support for FR, EN, DE, TR
 */

/**
 * Format date according to locale
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale (fr, en, de, tr)
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 */
export function formatDate(date, locale = 'fr', options = {}) {
  if (!date) return ''

  const d = new Date(date)

  if (isNaN(d.getTime())) {
    console.error('Invalid date:', date)
    return ''
  }

  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    ...defaultOptions,
    ...options
  })

  return formatter.format(d)
}

/**
 * Format date in short format
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale
 * @returns {string} Short formatted date (e.g., "12/01/2025")
 */
export function formatDateShort(date, locale = 'fr') {
  return formatDate(date, locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

/**
 * Format date with time
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale
 * @returns {string} Formatted date with time
 */
export function formatDateTime(date, locale = 'fr') {
  return formatDate(date, locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Format date with time (short)
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale
 * @returns {string} Short formatted date with time
 */
export function formatDateTimeShort(date, locale = 'fr') {
  return formatDate(date, locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Format time only
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale
 * @returns {string} Formatted time
 */
export function formatTime(date, locale = 'fr') {
  if (!date) return ''

  const d = new Date(date)

  if (isNaN(d.getTime())) {
    console.error('Invalid date:', date)
    return ''
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit'
  })

  return formatter.format(d)
}

/**
 * Format relative time (e.g., "2 hours ago", "in 3 days")
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale
 * @returns {string} Relative time string
 */
export function formatRelativeTime(date, locale = 'fr') {
  if (!date) return ''

  const d = new Date(date)

  if (isNaN(d.getTime())) {
    console.error('Invalid date:', date)
    return ''
  }

  const now = new Date()
  const diffMs = d.getTime() - now.getTime()
  const diffSec = Math.round(diffMs / 1000)
  const diffMin = Math.round(diffSec / 60)
  const diffHour = Math.round(diffMin / 60)
  const diffDay = Math.round(diffHour / 24)
  const diffWeek = Math.round(diffDay / 7)
  const diffMonth = Math.round(diffDay / 30)
  const diffYear = Math.round(diffDay / 365)

  // Use Intl.RelativeTimeFormat if available
  if (typeof Intl.RelativeTimeFormat !== 'undefined') {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

    if (Math.abs(diffYear) >= 1) {
      return rtf.format(diffYear, 'year')
    } else if (Math.abs(diffMonth) >= 1) {
      return rtf.format(diffMonth, 'month')
    } else if (Math.abs(diffWeek) >= 1) {
      return rtf.format(diffWeek, 'week')
    } else if (Math.abs(diffDay) >= 1) {
      return rtf.format(diffDay, 'day')
    } else if (Math.abs(diffHour) >= 1) {
      return rtf.format(diffHour, 'hour')
    } else if (Math.abs(diffMin) >= 1) {
      return rtf.format(diffMin, 'minute')
    } else {
      return rtf.format(diffSec, 'second')
    }
  }

  // Fallback for older browsers
  const unit = Math.abs(diffYear) >= 1 ? 'year'
    : Math.abs(diffMonth) >= 1 ? 'month'
    : Math.abs(diffWeek) >= 1 ? 'week'
    : Math.abs(diffDay) >= 1 ? 'day'
    : Math.abs(diffHour) >= 1 ? 'hour'
    : Math.abs(diffMin) >= 1 ? 'minute'
    : 'second'

  const value = unit === 'year' ? diffYear
    : unit === 'month' ? diffMonth
    : unit === 'week' ? diffWeek
    : unit === 'day' ? diffDay
    : unit === 'hour' ? diffHour
    : unit === 'minute' ? diffMin
    : diffSec

  const absValue = Math.abs(value)
  const past = value < 0

  const translations = {
    fr: {
      year: past ? `il y a ${absValue} an${absValue > 1 ? 's' : ''}` : `dans ${absValue} an${absValue > 1 ? 's' : ''}`,
      month: past ? `il y a ${absValue} mois` : `dans ${absValue} mois`,
      week: past ? `il y a ${absValue} semaine${absValue > 1 ? 's' : ''}` : `dans ${absValue} semaine${absValue > 1 ? 's' : ''}`,
      day: past ? `il y a ${absValue} jour${absValue > 1 ? 's' : ''}` : `dans ${absValue} jour${absValue > 1 ? 's' : ''}`,
      hour: past ? `il y a ${absValue} heure${absValue > 1 ? 's' : ''}` : `dans ${absValue} heure${absValue > 1 ? 's' : ''}`,
      minute: past ? `il y a ${absValue} minute${absValue > 1 ? 's' : ''}` : `dans ${absValue} minute${absValue > 1 ? 's' : ''}`,
      second: past ? `il y a ${absValue} seconde${absValue > 1 ? 's' : ''}` : `dans ${absValue} seconde${absValue > 1 ? 's' : ''}`
    },
    en: {
      year: past ? `${absValue} year${absValue > 1 ? 's' : ''} ago` : `in ${absValue} year${absValue > 1 ? 's' : ''}`,
      month: past ? `${absValue} month${absValue > 1 ? 's' : ''} ago` : `in ${absValue} month${absValue > 1 ? 's' : ''}`,
      week: past ? `${absValue} week${absValue > 1 ? 's' : ''} ago` : `in ${absValue} week${absValue > 1 ? 's' : ''}`,
      day: past ? `${absValue} day${absValue > 1 ? 's' : ''} ago` : `in ${absValue} day${absValue > 1 ? 's' : ''}`,
      hour: past ? `${absValue} hour${absValue > 1 ? 's' : ''} ago` : `in ${absValue} hour${absValue > 1 ? 's' : ''}`,
      minute: past ? `${absValue} minute${absValue > 1 ? 's' : ''} ago` : `in ${absValue} minute${absValue > 1 ? 's' : ''}`,
      second: past ? `${absValue} second${absValue > 1 ? 's' : ''} ago` : `in ${absValue} second${absValue > 1 ? 's' : ''}`
    },
    de: {
      year: past ? `vor ${absValue} Jahr${absValue > 1 ? 'en' : ''}` : `in ${absValue} Jahr${absValue > 1 ? 'en' : ''}`,
      month: past ? `vor ${absValue} Monat${absValue > 1 ? 'en' : ''}` : `in ${absValue} Monat${absValue > 1 ? 'en' : ''}`,
      week: past ? `vor ${absValue} Woche${absValue > 1 ? 'n' : ''}` : `in ${absValue} Woche${absValue > 1 ? 'n' : ''}`,
      day: past ? `vor ${absValue} Tag${absValue > 1 ? 'en' : ''}` : `in ${absValue} Tag${absValue > 1 ? 'en' : ''}`,
      hour: past ? `vor ${absValue} Stunde${absValue > 1 ? 'n' : ''}` : `in ${absValue} Stunde${absValue > 1 ? 'n' : ''}`,
      minute: past ? `vor ${absValue} Minute${absValue > 1 ? 'n' : ''}` : `in ${absValue} Minute${absValue > 1 ? 'n' : ''}`,
      second: past ? `vor ${absValue} Sekunde${absValue > 1 ? 'n' : ''}` : `in ${absValue} Sekunde${absValue > 1 ? 'n' : ''}`
    },
    tr: {
      year: past ? `${absValue} yıl önce` : `${absValue} yıl sonra`,
      month: past ? `${absValue} ay önce` : `${absValue} ay sonra`,
      week: past ? `${absValue} hafta önce` : `${absValue} hafta sonra`,
      day: past ? `${absValue} gün önce` : `${absValue} gün sonra`,
      hour: past ? `${absValue} saat önce` : `${absValue} saat sonra`,
      minute: past ? `${absValue} dakika önce` : `${absValue} dakika sonra`,
      second: past ? `${absValue} saniye önce` : `${absValue} saniye sonra`
    }
  }

  return translations[locale]?.[unit] || `${value} ${unit}`
}

/**
 * Format number according to locale
 * @param {number} number - Number to format
 * @param {string} locale - Locale
 * @param {Object} options - Intl.NumberFormat options
 * @returns {string} Formatted number
 */
export function formatNumber(number, locale = 'fr', options = {}) {
  if (number === null || number === undefined || isNaN(number)) {
    return ''
  }

  const formatter = new Intl.NumberFormat(locale, options)
  return formatter.format(number)
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @param {string} locale - Locale
 * @param {string} currency - Currency code (EUR, USD, GBP, TRY)
 * @returns {string} Formatted currency
 */
export function formatCurrency(amount, locale = 'fr', currency = 'EUR') {
  return formatNumber(amount, locale, {
    style: 'currency',
    currency
  })
}

/**
 * Format percentage
 * @param {number} value - Value to format (0.15 = 15%)
 * @param {string} locale - Locale
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted percentage
 */
export function formatPercent(value, locale = 'fr', decimals = 0) {
  return formatNumber(value, locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
}

/**
 * Format file size
 * @param {number} bytes - Size in bytes
 * @param {string} locale - Locale
 * @returns {string} Formatted file size (e.g., "1.5 MB")
 */
export function formatFileSize(bytes, locale = 'fr') {
  if (bytes === 0) return '0 B'

  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return formatNumber(bytes / Math.pow(k, i), locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }) + ' ' + sizes[i]
}

/**
 * Format phone number (French format)
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 */
export function formatPhoneNumber(phone) {
  if (!phone) return ''

  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')

  // French format: +33 X XX XX XX XX
  if (cleaned.startsWith('33')) {
    const match = cleaned.match(/^(33)(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/)
    if (match) {
      return `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]} ${match[6]}`
    }
  }

  // French format: 0X XX XX XX XX
  const match = cleaned.match(/^0(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/)
  if (match) {
    return `0${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`
  }

  return phone
}

/**
 * Format duration (milliseconds to human readable)
 * @param {number} ms - Duration in milliseconds
 * @param {string} locale - Locale
 * @returns {string} Formatted duration
 */
export function formatDuration(ms, locale = 'fr') {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  const labels = {
    fr: { day: 'j', hour: 'h', minute: 'min', second: 's' },
    en: { day: 'd', hour: 'h', minute: 'min', second: 's' },
    de: { day: 'T', hour: 'Std', minute: 'Min', second: 'Sek' },
    tr: { day: 'g', hour: 's', minute: 'dk', second: 'sn' }
  }

  const l = labels[locale] || labels.fr

  if (days > 0) {
    return `${days}${l.day} ${hours % 24}${l.hour}`
  } else if (hours > 0) {
    return `${hours}${l.hour} ${minutes % 60}${l.minute}`
  } else if (minutes > 0) {
    return `${minutes}${l.minute} ${seconds % 60}${l.second}`
  } else {
    return `${seconds}${l.second}`
  }
}

/**
 * Format postal code (French format)
 * @param {string} postalCode - Postal code
 * @returns {string} Formatted postal code
 */
export function formatPostalCode(postalCode) {
  if (!postalCode) return ''

  const cleaned = postalCode.replace(/\D/g, '')

  // French format: XXXXX
  if (cleaned.length === 5) {
    return cleaned
  }

  return postalCode
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncate(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text

  return text.substring(0, maxLength).trim() + '...'
}

/**
 * Capitalize first letter
 * @param {string} text - Text to capitalize
 * @returns {string} Capitalized text
 */
export function capitalize(text) {
  if (!text) return ''

  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Format business hours
 * @param {string} start - Start time (HH:MM)
 * @param {string} end - End time (HH:MM)
 * @param {string} locale - Locale
 * @returns {string} Formatted business hours
 */
export function formatBusinessHours(start, end, locale = 'fr') {
  const separator = locale === 'en' ? '-' : '-'
  return `${start}${separator}${end}`
}
