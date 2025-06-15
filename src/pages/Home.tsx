
import { Navigation } from '@/components/Navigation';
import { PortfolioCard } from '@/components/PortfolioCard';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { portfolioItems, blogPosts } from '@/data/portfolio';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Theater } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const latestPortfolio = portfolioItems.slice(0, 3);
  const latestBlog = blogPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {t('home.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            {t('home.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button asChild size="lg" className="flex items-center gap-2">
              <Link to="/theater">
                <Theater className="h-5 w-5" />
                {t('nav.theater')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex items-center gap-2">
              <Link to="/music">
                <Music className="h-5 w-5" />
                {t('nav.music')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary">
              {t('home.latestWork')}
            </h2>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link to="/theater">
                {t('home.viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPortfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary">
              {t('blog.title')}
            </h2>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link to="/blog">
                {t('home.viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlog.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Rumi Jr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
