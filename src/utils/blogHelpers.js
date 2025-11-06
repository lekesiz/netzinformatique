/**
 * Blog helper utilities
 * Reading time calculator, text truncation, etc.
 */

/**
 * Calculate reading time for a blog post
 * @param {string} content - The blog post content (HTML or plain text)
 * @param {number} wordsPerMinute - Average reading speed (default: 200)
 * @returns {number} Estimated reading time in minutes
 */
export function calculateReadingTime(content, wordsPerMinute = 200) {
  if (!content) return 0

  // Strip HTML tags
  const text = content.replace(/<[^>]*>/g, '')

  // Count words
  const words = text.trim().split(/\s+/).length

  // Calculate minutes
  const minutes = Math.ceil(words / wordsPerMinute)

  return Math.max(1, minutes) // Minimum 1 minute
}

/**
 * Truncate text to a specific length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum character length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 150) {
  if (!text || text.length <= maxLength) return text

  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...'
  }

  return truncated + '...'
}

/**
 * Extract plain text from HTML
 * @param {string} html - HTML content
 * @returns {string} Plain text
 */
export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '')
}

/**
 * Generate slug from title
 * @param {string} title - Post title
 * @returns {string} URL-friendly slug
 */
export function generateSlug(title) {
  if (!title) return ''

  return title
    .toLowerCase()
    .normalize('NFD') // Normalize unicode
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
}

/**
 * Format date for blog posts
 * @param {string|Date} date - Date to format
 * @param {string} locale - Locale (fr, en, de, tr)
 * @returns {string} Formatted date
 */
export function formatBlogDate(date, locale = 'fr') {
  if (!date) return ''

  const d = new Date(date)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return d.toLocaleDateString(locale, options)
}

/**
 * Get related posts based on tags/categories
 * @param {Object} currentPost - Current blog post
 * @param {Array} allPosts - All blog posts
 * @param {number} limit - Maximum number of related posts
 * @returns {Array} Related posts
 */
export function getRelatedPosts(currentPost, allPosts, limit = 3) {
  if (!currentPost || !allPosts || allPosts.length === 0) return []

  const currentTags = currentPost.tags || []
  const currentCategory = currentPost.category || ''

  // Score posts by relevance
  const scoredPosts = allPosts
    .filter(post => post.id !== currentPost.id) // Exclude current post
    .map(post => {
      let score = 0

      // Same category = +3 points
      if (post.category === currentCategory && currentCategory) {
        score += 3
      }

      // Shared tags = +1 point per tag
      const postTags = post.tags || []
      const sharedTags = postTags.filter(tag => currentTags.includes(tag))
      score += sharedTags.length

      return { post, score }
    })
    .filter(item => item.score > 0) // Only include related posts
    .sort((a, b) => b.score - a.score) // Sort by relevance
    .slice(0, limit) // Limit results
    .map(item => item.post)

  return scoredPosts
}

/**
 * Search posts by query
 * @param {Array} posts - All blog posts
 * @param {string} query - Search query
 * @returns {Array} Filtered posts
 */
export function searchPosts(posts, query) {
  if (!query || !posts || posts.length === 0) return posts

  const lowerQuery = query.toLowerCase()

  return posts.filter(post => {
    const titleMatch = post.title?.toLowerCase().includes(lowerQuery)
    const excerptMatch = post.excerpt?.toLowerCase().includes(lowerQuery)
    const contentMatch = stripHtml(post.content || '').toLowerCase().includes(lowerQuery)
    const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    const categoryMatch = post.category?.toLowerCase().includes(lowerQuery)

    return titleMatch || excerptMatch || contentMatch || tagsMatch || categoryMatch
  })
}

/**
 * Filter posts by category
 * @param {Array} posts - All blog posts
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered posts
 */
export function filterByCategory(posts, category) {
  if (!category || !posts || posts.length === 0) return posts

  return posts.filter(post => post.category === category)
}

/**
 * Filter posts by tag
 * @param {Array} posts - All blog posts
 * @param {string} tag - Tag to filter by
 * @returns {Array} Filtered posts
 */
export function filterByTag(posts, tag) {
  if (!tag || !posts || posts.length === 0) return posts

  return posts.filter(post => post.tags?.includes(tag))
}

/**
 * Paginate posts
 * @param {Array} posts - All blog posts
 * @param {number} page - Current page (1-indexed)
 * @param {number} perPage - Posts per page
 * @returns {Object} Paginated data
 */
export function paginatePosts(posts, page = 1, perPage = 10) {
  if (!posts || posts.length === 0) {
    return {
      posts: [],
      currentPage: 1,
      totalPages: 0,
      totalPosts: 0,
      hasNextPage: false,
      hasPrevPage: false
    }
  }

  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / perPage)
  const currentPage = Math.max(1, Math.min(page, totalPages))

  const startIndex = (currentPage - 1) * perPage
  const endIndex = startIndex + perPage

  const paginatedPosts = posts.slice(startIndex, endIndex)

  return {
    posts: paginatedPosts,
    currentPage,
    totalPages,
    totalPosts,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    startIndex: startIndex + 1,
    endIndex: Math.min(endIndex, totalPosts)
  }
}

/**
 * Get all unique categories from posts
 * @param {Array} posts - All blog posts
 * @returns {Array} List of unique categories
 */
export function getAllCategories(posts) {
  if (!posts || posts.length === 0) return []

  const categories = posts
    .map(post => post.category)
    .filter(Boolean) // Remove undefined/null
    .filter((category, index, array) => array.indexOf(category) === index) // Unique

  return categories.sort()
}

/**
 * Get all unique tags from posts
 * @param {Array} posts - All blog posts
 * @returns {Array} List of unique tags
 */
export function getAllTags(posts) {
  if (!posts || posts.length === 0) return []

  const allTags = posts.flatMap(post => post.tags || [])
  const uniqueTags = [...new Set(allTags)]

  return uniqueTags.sort()
}

/**
 * Get post count by category
 * @param {Array} posts - All blog posts
 * @returns {Object} Category counts
 */
export function getCategoryCounts(posts) {
  if (!posts || posts.length === 0) return {}

  return posts.reduce((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1
    }
    return acc
  }, {})
}

/**
 * Get post count by tag
 * @param {Array} posts - All blog posts
 * @returns {Object} Tag counts
 */
export function getTagCounts(posts) {
  if (!posts || posts.length === 0) return {}

  return posts.reduce((acc, post) => {
    (post.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})
}
