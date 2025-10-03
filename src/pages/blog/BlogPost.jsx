import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import { useTranslation } from 'react-i18next';
import { posts } from '@/content/blog/posts';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>{t('blog.postNotFound', 'Article non trouvé')}</div>;
  }

  const postContent = post.content[i18n.language] || post.content.fr;

  return (
    <>
      <SEO 
        title={post.title[i18n.language]}
        description={post.excerpt[i18n.language]}
        url={`/blog/${post.slug}`}
        image={post.image}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="flex items-center gap-2 text-primary font-semibold mb-8 hover:underline">
            <ArrowLeft size={20} />
            {t('blog.backToBlog', 'Retour au blog')}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title[i18n.language]}</h1>
          <p className="text-muted-foreground mb-4">{new Date(post.date).toLocaleDateString(i18n.language)}</p>
          <img src={post.image} alt={post.title[i18n.language]} className="w-full rounded-lg mb-8" />

          <div 
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: postContent }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
