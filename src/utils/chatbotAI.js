/**
 * AI Chatbot Intent Recognition & Response System
 *
 * Uses keyword matching, fuzzy search, and context analysis
 * to understand user intent and provide relevant responses
 */

import { chatbotFAQ, suggestedActions } from '@/data/chatbotFAQ'

/**
 * Normalize text for comparison
 */
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .trim()
}

/**
 * Calculate similarity between two strings (Levenshtein distance)
 */
function calculateSimilarity(str1, str2) {
  const s1 = normalizeText(str1)
  const s2 = normalizeText(str2)

  const matrix = []

  for (let i = 0; i <= s2.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= s1.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        )
      }
    }
  }

  const maxLength = Math.max(s1.length, s2.length)
  const distance = matrix[s2.length][s1.length]
  return ((maxLength - distance) / maxLength) * 100
}

/**
 * Find matching FAQ by keywords
 */
function findByKeywords(userMessage, locale = 'fr') {
  const normalized = normalizeText(userMessage)
  const words = normalized.split(/\s+/)

  const scores = chatbotFAQ.map((faq) => {
    let score = 0
    let matchedKeywords = 0

    // Check keyword matches
    for (const keyword of faq.keywords) {
      const normalizedKeyword = normalizeText(keyword)

      // Exact match in message
      if (normalized.includes(normalizedKeyword)) {
        score += 10
        matchedKeywords++
      }

      // Partial match in words
      for (const word of words) {
        if (word.includes(normalizedKeyword) || normalizedKeyword.includes(word)) {
          score += 5
          matchedKeywords++
        }

        // Fuzzy match for typos
        const similarity = calculateSimilarity(word, normalizedKeyword)
        if (similarity > 75) {
          score += Math.floor(similarity / 20)
          matchedKeywords++
        }
      }
    }

    // Boost score if multiple keywords match
    if (matchedKeywords > 2) {
      score += matchedKeywords * 2
    }

    return { faq, score, matchedKeywords }
  })

  // Sort by score
  scores.sort((a, b) => b.score - a.score)

  // Return best match if score is high enough
  if (scores[0].score >= 10) {
    return scores[0].faq
  }

  return null
}

/**
 * Find matching FAQ by question similarity
 */
function findByQuestionSimilarity(userMessage, locale = 'fr') {
  let bestMatch = null
  let bestScore = 0

  for (const faq of chatbotFAQ) {
    const question = faq.question[locale] || faq.question.fr
    const similarity = calculateSimilarity(userMessage, question)

    if (similarity > bestScore && similarity > 60) {
      bestScore = similarity
      bestMatch = faq
    }
  }

  return bestMatch
}

/**
 * Analyze user intent and return appropriate response
 */
export function analyzeIntent(userMessage, locale = 'fr') {
  if (!userMessage || typeof userMessage !== 'string') {
    return null
  }

  // Try keyword matching first (faster and more accurate for short queries)
  let matchedFAQ = findByKeywords(userMessage, locale)

  // If no keyword match, try question similarity (better for full sentences)
  if (!matchedFAQ) {
    matchedFAQ = findByQuestionSimilarity(userMessage, locale)
  }

  if (matchedFAQ) {
    return {
      intent: matchedFAQ.intent,
      answer: matchedFAQ.answer[locale] || matchedFAQ.answer.fr,
      category: matchedFAQ.category,
      suggestedActions: matchedFAQ.suggestedActions || [],
      confidence: 'high',
    }
  }

  // No match found - return default response
  return {
    intent: 'unknown',
    answer: getUnknownIntentResponse(locale),
    category: 'general',
    suggestedActions: ['live_agent', 'services', 'contact'],
    confidence: 'low',
  }
}

/**
 * Get default response for unknown intents
 */
function getUnknownIntentResponse(locale = 'fr') {
  const responses = {
    fr: "Je ne suis pas sûr de comprendre votre question. 🤔\n\nPourriez-vous la reformuler ? Ou choisissez une option ci-dessous :\n\n• Parler à un conseiller\n• Voir nos services\n• Nous contacter\n\nJe suis là pour vous aider !",
    en: "I'm not sure I understand your question. 🤔\n\nCould you rephrase it? Or choose an option below:\n\n• Talk to an advisor\n• See our services\n• Contact us\n\nI'm here to help!",
    de: "Ich bin mir nicht sicher, ob ich Ihre Frage verstehe. 🤔\n\nKönnten Sie sie umformulieren? Oder wählen Sie eine Option unten:\n\n• Mit einem Berater sprechen\n• Unsere Dienstleistungen ansehen\n• Kontaktieren Sie uns\n\nIch bin hier, um zu helfen!",
    tr: "Sorunuzu anladığımdan emin değilim. 🤔\n\nYeniden ifade edebilir misiniz? Veya aşağıdan bir seçenek seçin:\n\n• Bir danışmanla konuş\n• Hizmetlerimizi görün\n• Bize ulaşın\n\nYardımcı olmak için buradayım!",
  }

  return responses[locale] || responses.fr
}

/**
 * Get FAQ by ID
 */
export function getFAQById(faqId) {
  return chatbotFAQ.find((faq) => faq.id === faqId)
}

/**
 * Get suggested actions details
 */
export function getSuggestedActionsDetails(actionKeys) {
  if (!Array.isArray(actionKeys)) {
    return []
  }

  return actionKeys
    .map((key) => suggestedActions[key])
    .filter(Boolean)
}

/**
 * Track chatbot conversation for analytics
 */
export function trackChatbotEvent(eventType, data = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `chatbot_${eventType}`, {
      event_category: 'Chatbot',
      event_label: data.intent || 'unknown',
      ...data,
    })
  }
}

/**
 * Get conversation context (for maintaining conversation state)
 */
export class ConversationContext {
  constructor() {
    this.history = []
    this.currentTopic = null
    this.userInfo = {}
  }

  addMessage(role, content, intent = null) {
    this.history.push({
      role, // 'user' or 'assistant'
      content,
      intent,
      timestamp: Date.now(),
    })

    // Keep only last 10 messages
    if (this.history.length > 10) {
      this.history.shift()
    }

    if (intent) {
      this.currentTopic = intent
    }
  }

  getLastUserMessage() {
    for (let i = this.history.length - 1; i >= 0; i--) {
      if (this.history[i].role === 'user') {
        return this.history[i]
      }
    }
    return null
  }

  getConversationHistory() {
    return this.history
  }

  clear() {
    this.history = []
    this.currentTopic = null
    this.userInfo = {}
  }
}

/**
 * Smart response generator with context awareness
 */
export function generateSmartResponse(userMessage, context, locale = 'fr') {
  const result = analyzeIntent(userMessage, locale)

  // Track event
  trackChatbotEvent('message', {
    intent: result.intent,
    confidence: result.confidence,
  })

  // Add to context
  context.addMessage('user', userMessage, result.intent)
  context.addMessage('assistant', result.answer, result.intent)

  return {
    ...result,
    context: context.getConversationHistory(),
  }
}

/**
 * Check if message requires human intervention
 */
export function requiresHumanAgent(userMessage, result) {
  const urgentKeywords = [
    'urgent',
    'emergency',
    'problème grave',
    'serious problem',
    'ne fonctionne plus',
    'not working',
    'panne totale',
    'hacked',
    'piraté',
    'virus',
  ]

  const normalized = normalizeText(userMessage)

  // Check for urgent keywords
  for (const keyword of urgentKeywords) {
    if (normalized.includes(normalizeText(keyword))) {
      return true
    }
  }

  // Check if confidence is low and user is frustrated
  if (result.confidence === 'low') {
    const frustratedKeywords = ['pas compris', 'not understanding', 'help', 'aide', 'agent', 'human', 'humain']
    for (const keyword of frustratedKeywords) {
      if (normalized.includes(normalizeText(keyword))) {
        return true
      }
    }
  }

  return false
}
