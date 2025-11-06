import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Calendar, Clock, User, Tag, Share2,
  Facebook, Twitter, Linkedin, Link as LinkIcon,
  Eye, Heart, Bookmark
} from 'lucide-react'
import { getPostBySlug, getPostsByCategory, getPostsByTag } from '../data/blogPosts'
import { formatDate, formatRelativeTime } from '../utils/formatters'
import ReadingProgressBar from '../components/blog/ReadingProgressBar'
import SocialShareButtons from '../components/blog/SocialShareButtons'
import RelatedPosts from '../components/blog/RelatedPosts'

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    // Load post data
    const postData = getPostBySlug(slug)

    if (!postData) {
      // Post not found, redirect to blog
      navigate('/blog')
      return
    }

    setPost(postData)
    setLoading(false)

    // Load related posts (same category or tags)
    const categoryPosts = getPostsByCategory(postData.category)
      .filter(p => p.id !== postData.id)
      .slice(0, 3)

    setRelatedPosts(categoryPosts)

    // Track post view
    // In production, this would be an API call
    console.log('Post viewed:', postData.slug)

    // Check if liked/bookmarked in localStorage
    const likedPosts = JSON.parse(localStorage.getItem('netz_liked_posts') || '[]')
    const bookmarkedPosts = JSON.parse(localStorage.getItem('netz_bookmarked_posts') || '[]')

    setLiked(likedPosts.includes(postData.id))
    setBookmarked(bookmarkedPosts.includes(postData.id))

    // Scroll to top
    window.scrollTo(0, 0)
  }, [slug, navigate])

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem('netz_liked_posts') || '[]')

    if (liked) {
      // Unlike
      const newLiked = likedPosts.filter(id => id !== post.id)
      localStorage.setItem('netz_liked_posts', JSON.stringify(newLiked))
      setLiked(false)
    } else {
      // Like
      likedPosts.push(post.id)
      localStorage.setItem('netz_liked_posts', JSON.stringify(likedPosts))
      setLiked(true)
    }
  }

  const handleBookmark = () => {
    const bookmarkedPosts = JSON.parse(localStorage.getItem('netz_bookmarked_posts') || '[]')

    if (bookmarked) {
      // Remove bookmark
      const newBookmarked = bookmarkedPosts.filter(id => id !== post.id)
      localStorage.setItem('netz_bookmarked_posts', JSON.stringify(newBookmarked))
      setBookmarked(false)
    } else {
      // Add bookmark
      bookmarkedPosts.push(post.id)
      localStorage.setItem('netz_bookmarked_posts', JSON.stringify(bookmarkedPosts))
      setBookmarked(true)
    }
  }

  if (loading || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  const locale = i18n.language
  const title = post.title[locale] || post.title.fr
  const excerpt = post.excerpt[locale] || post.excerpt.fr
  const content = post.content[locale] || post.content.fr

  return (
    <>
      <Helmet>
        <title>{title} - NETZ Informatique Blog</title>
        <meta name="description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={`https://netzinformatique.fr${post.coverImage}`} />
        <meta property="og:url" content={`https://netzinformatique.fr/blog/${slug}`} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={`https://netzinformatique.fr${post.coverImage}`} />
      </Helmet>

      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link
                to="/blog"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t('blog.backToBlog') || 'Retour au Blog'}</span>
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-lg transition-colors ${
                    liked
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  aria-label="Like post"
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    bookmarked
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  aria-label="Bookmark post"
                >
                  <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                </button>

                <button
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Share post"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative h-[400px] md:h-[500px] bg-gray-900"
        >
          <img
            src={post.coverImage}
            alt={title}
            className="w-full h-full object-cover opacity-80"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Article Header */}
            <div className="p-8 md:p-12">
              {/* Category Badge */}
              <Link
                to={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {post.category}
              </Link>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    {formatDate(new Date(post.publishedAt), locale)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readingTime} min</span>
                </div>

                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{post.views} vues</span>
                </div>

                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{post.likes} likes</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {post.author.role}
                  </p>
                </div>
              </div>

              {/* Social Share */}
              <SocialShareButtons
                url={`https://netzinformatique.fr/blog/${slug}`}
                title={title}
                excerpt={excerpt}
              />

              {/* Content */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none mt-12
                  prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 dark:prose-strong:text-white
                  prose-ul:text-gray-700 dark:prose-ul:text-gray-300
                  prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                  prose-blockquote:border-l-primary prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-700/50
                  prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                  prose-code:text-primary prose-code:bg-gray-100 dark:prose-code:bg-gray-700
                  prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-gray-900 prose-pre:text-gray-100
                  prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('blog.relatedPosts') || 'Articles Connexes'}
              </h2>
              <RelatedPosts posts={relatedPosts} />
            </motion.section>
          )}
        </div>
      </div>
    </>
  )
}

export default BlogPost
