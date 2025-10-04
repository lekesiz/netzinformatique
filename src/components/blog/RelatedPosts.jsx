import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { posts } from '@/content/blog/posts'

const RelatedPosts = ({ currentSlug, category, limit = 3 }) => {
  const { i18n } = useTranslation()

  // Filter posts by same category, exclude current post
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)

  // If not enough posts in same category, fill with other posts
  if (relatedPosts.length < limit) {
    const otherPosts = posts
      .filter(post => post.slug !== currentSlug && post.category !== category)
      .slice(0, limit - relatedPosts.length)
    relatedPosts.push(...otherPosts)
  }

  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t">
      <h2 className="text-3xl font-bold mb-8">Articles Connexes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map(post => (
          <Link 
            key={post.slug} 
            to={`/blog/${post.slug}`}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover-lift">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title[i18n.language]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {post.category}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title[i18n.language]}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt[i18n.language]}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  Lire l'article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts
