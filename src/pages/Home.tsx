
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/hooks/useLanguage';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Title and Subtitle Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-8">
            {t('home.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in animation-delay-500">
            {t('home.subtitle')}
          </p>
        </div>
      </section>

      {/* Footer with CC BY 4.0 License */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">
            {t('home.copyright')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('home.license')}{' '}
            <a 
              href="https://creativecommons.org/licenses/by/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline"
            >
              {t('home.licenseLink')}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
