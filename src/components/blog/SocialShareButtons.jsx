import { useState } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Mail, MessageCircle } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'

/**
 * Social Share Buttons Component
 * Allows users to share blog posts on social media
 *
 * @param {string} url - Post URL to share
 * @param {string} title - Post title
 * @param {string} excerpt - Post excerpt/description
 */
const SocialShareButtons = ({ url, title, excerpt }) => {
  const [copied, setCopied] = useState(false)

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-600 hover:text-white',
      bgColor: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'hover:bg-sky-500 hover:text-white',
      bgColor: 'bg-sky-100 text-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-700 hover:text-white',
      bgColor: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`,
      color: 'hover:bg-green-600 hover:text-white',
      bgColor: 'bg-green-100 text-green-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(excerpt + '\n\n' + url)}`,
      color: 'hover:bg-gray-600 hover:text-white',
      bgColor: 'bg-gray-100 text-gray-600'
    }
  ]

  const handleShare = (platform, shareUrl) => {
    // Track share event
    trackEvent('social_share', {
      platform,
      post_url: url,
      post_title: title
    })

    // Open share window
    if (platform === 'Email') {
      window.location.href = shareUrl
    } else {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)

      // Track copy event
      trackEvent('copy_link', {
        post_url: url,
        post_title: title
      })

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy link:', error)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Partager cet article :
      </span>

      <div className="flex flex-wrap items-center gap-2">
        {shareLinks.map((social) => {
          const Icon = social.icon

          return (
            <motion.button
              key={social.name}
              onClick={() => handleShare(social.name, social.url)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-colors ${social.bgColor} ${social.color}`}
              aria-label={`Share on ${social.name}`}
              title={`Share on ${social.name}`}
            >
              <Icon className="w-5 h-5" />
            </motion.button>
          )
        })}

        {/* Copy Link Button */}
        <motion.button
          onClick={handleCopyLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2.5 rounded-lg transition-all ${
            copied
              ? 'bg-green-100 text-green-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500'
          }`}
          aria-label="Copy link"
          title="Copy link"
        >
          <LinkIcon className="w-5 h-5" />
        </motion.button>

        {/* Copied Notification */}
        {copied && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="text-sm text-green-600 dark:text-green-400 font-medium"
          >
            ✓ Copié !
          </motion.span>
        )}
      </div>
    </div>
  )
}

export default SocialShareButtons
