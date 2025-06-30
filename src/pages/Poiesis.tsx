
import { Navigation } from '@/components/Navigation';
import { BlogCard } from '@/components/BlogCard';
import { useLanguage } from '@/hooks/useLanguage';
import { getBlogPostsByCategory } from '@/utils/markdownLoader';

const Poiesis = () => {
  const { t, language } = useLanguage();

  const poiesisItems = getBlogPostsByCategory('poiesis', language);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {t('poiesis.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('poiesis.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {poiesisItems.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poiesis;
