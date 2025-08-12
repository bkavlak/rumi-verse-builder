import { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { getMarkdownBlogPosts } from '@/utils/markdownLoader';
import { Calendar, ArrowLeft } from 'lucide-react';

const PoiesisPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const location = useLocation();
  const categorySlug = location.pathname.split('/')[1] || 'poiesis';
  const backAction = language === 'tr' ? 'geri' : language === 'de' ? 'zurück' : 'back';
  const backLabel = `${categorySlug}.${backAction}`;

  const post = useMemo(() => {
    const posts = getMarkdownBlogPosts(language);
    return posts.find((p) => p.id === id);
  }, [id, language]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title[language]} | Poiesis`;
    }
  }, [post, language]);

  const dateString = useMemo(() => {
    if (!post?.date) return '';
    const d = new Date(post.date);
    if (isNaN(d.getTime())) return post.date;
    try {
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return post.date;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">{t('poiesis.noPosts')}</p>
            <Button variant="outline" onClick={() => navigate(-1)} className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> {t('common.back') || 'Back'}
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/poiesis" aria-label={`${backLabel}`} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> {backLabel}
            </Link>
          </div>

          <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">{post.title[language]}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {t('poiesis.publishedOn')} {dateString}
            </div>
          </header>

          {post.image && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={`${post.title[language]} cover image`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <article className="leading-7 text-foreground">
            <pre className="whitespace-pre-wrap font-sans text-base">{post.content[language]}</pre>
          </article>

          {post.tags?.length ? (
            <aside className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
              ))}
            </aside>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default PoiesisPost;
