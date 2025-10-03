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
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const results = allPosts.filter(post => 
      post.title[i18n.language]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt[i18n.language]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags[i18n.language]?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPosts(results);
  }, [searchTerm, i18n.language]);

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
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString(i18n.language)}</p>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{post.title[i18n.language]}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt[i18n.language]}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags[i18n.language]?.map(tag => (
                      <span key={tag} className="text-xs bg-secondary/10 text-secondary font-semibold px-2 py-1 rounded-full">{tag}</span>
                    ))}
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
