import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import ArticleSchema from '@/components/common/ArticleSchema';
import SocialShare from '@/components/blog/SocialShare';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { useTranslation } from 'react-i18next';
import { posts } from '@/content/blog/posts';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('blog.postNotFound', 'Article non trouvé')}</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">
          {t('blog.backToBlog', 'Retour au blog')}
        </Link>
      </div>
    );
  }

  const postContent = post.content[i18n.language] || post.content.fr;
  const postTitle = post.title[i18n.language] || post.title.fr;
  const postExcerpt = post.excerpt[i18n.language] || post.excerpt.fr;

  return (
    <>
      <SEO 
        title={`${postTitle} | NETZ Informatique Blog`}
        description={postExcerpt}
        url={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        publishedTime={post.date}
      />
      <ArticleSchema
        title={postTitle}
        description={postExcerpt}
        image={post.image}
        datePublished={post.date}
        url={`/blog/${post.slug}`}
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to blog */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline"
            >
              <ArrowLeft size={20} />
              {t('blog.backToBlog', 'Retour au blog')}
            </Link>

            {/* Article Header */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={postTitle} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-12">
                {/* Category */}
                {post.category && (
                  <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {post.category}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {postTitle}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{new Date(post.date).toLocaleDateString(i18n.language, { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span>{post.readTime} min de lecture</span>
                    </div>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Tag size={18} />
                      <span>{post.tags.join(', ')}</span>
                    </div>
                  )}
                </div>

                {/* Social Share */}
                <div className="mb-8 pb-8 border-b">
                  <SocialShare 
                    url={`/blog/${post.slug}`}
                    title={postTitle}
                    description={postExcerpt}
                  />
                </div>

                {/* Content */}
                <div 
                  className="prose lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl"
                  dangerouslySetInnerHTML={{ __html: postContent }}
                />

                {/* Social Share (Bottom) */}
                <div className="mt-12 pt-8 border-t">
                  <p className="text-lg font-semibold mb-4">Cet article vous a plu ? Partagez-le !</p>
                  <SocialShare 
                    url={`/blog/${post.slug}`}
                    title={postTitle}
                    description={postExcerpt}
                  />
                </div>
              </div>
            </article>

            {/* Related Posts */}
            <div className="mt-16">
              <RelatedPosts 
                currentSlug={post.slug} 
                category={post.category}
                limit={3}
              />
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'Aide pour Votre Projet IT ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Notre équipe d'experts est là pour vous accompagner
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
