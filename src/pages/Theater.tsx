
import { Navigation } from '@/components/Navigation';
import { PortfolioCard } from '@/components/PortfolioCard';
import { useLanguage } from '@/hooks/useLanguage';
import { portfolioItems } from '@/data/portfolio';

const Theater = () => {
  const { t } = useLanguage();

  const theaterItems = portfolioItems.filter(item => item.category === 'theater');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {t('theater.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('theater.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theaterItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theater;
