import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Dummy blog posts data - replace with dynamic import
import { posts as allPosts } from '@/content/blog/posts';

const BlogIndex = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  
  // Normalize language code (e.g., 'en-US' -> 'en')
  const lang = i18n.language.split('-')[0];

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredPosts(allPosts);
    } else {
      const results = allPosts.filter(post => 
        post.title[lang]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt[lang]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags[lang]?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredPosts(results);
    }
  }, [searchTerm, lang]);

  return (
    <>
      <SEO 
        title={t('blog.title', 'Blog & Actualités Tech')}
        description={t('blog.description', 'Suivez nos analyses, tutoriels et actualités sur l`informatique, l`IA, la cybersécurité et le développement web.')}
        url="/blog"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('blog.title', 'Blog & Actualités Tech')}</h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('blog.description', 'Suivez nos analyses, tutoriels et actualités sur l`informatique, l`IA, la cybersécurité et le développement web.')}</p>

        <div className="relative max-w-lg mx-auto mb-12">
          <Input 
            type="text"
            placeholder={t('blog.searchPlaceholder', 'Rechercher un article...')}
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
                <div className="relative w-full h-56 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-5xl mb-3">📝</div>
                      <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
                        {new Date(post.date).toLocaleDateString(lang, { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    {post.tags[lang]?.slice(0, 1).map(tag => (
                      <span key={tag} className="inline-block text-xs bg-white/90 text-purple-700 font-bold px-3 py-1 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.title[lang]}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.excerpt[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags[lang]?.slice(1, 4).map(tag => (
                      <span key={tag} className="text-xs bg-purple-50 text-purple-700 font-medium px-3 py-1 rounded-full border border-purple-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>{t('blog.readMore', 'Lire la suite')}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">{t('blog.noArticles', 'Aucun article disponible')}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
