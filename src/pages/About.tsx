
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { SocialLinks } from '@/components/SocialLinks';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('about.description')}
            </p>
            
            {/* Social Links */}
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
