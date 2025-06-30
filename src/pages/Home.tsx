
import { Navigation } from '@/components/Navigation';
import { PortfolioCard } from '@/components/PortfolioCard';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/hooks/useLanguage';
import { portfolioItems, blogPosts } from '@/data/portfolio';
import { Link } from 'react-router-dom';
import { ArrowRight, Theater, Music, BookOpen } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const theaterItems = portfolioItems.filter(item => item.category === 'theater').slice(0, 3);
  const musicItems = portfolioItems.filter(item => item.category === 'music').slice(0, 3);
  const latestBlog = blogPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="theoria" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theoria" className="flex items-center gap-2">
                <Theater className="h-4 w-4" />
                {t('home.theoria')}
              </TabsTrigger>
              <TabsTrigger value="praxis" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                {t('home.praxis')}
              </TabsTrigger>
              <TabsTrigger value="poetika" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {t('home.poetika')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="theoria" className="mt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('theoria.title')}
                </h2>
                <p className="text-muted-foreground mb-6">{t('theoria.description')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {theaterItems.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="flex items-center gap-2 mx-auto">
                  <Link to="/theater">
                    {t('home.viewAll')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="praxis" className="mt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('praxis.title')}
                </h2>
                <p className="text-muted-foreground mb-6">{t('praxis.description')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {musicItems.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="flex items-center gap-2 mx-auto">
                  <Link to="/music">
                    {t('home.viewAll')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="poetika" className="mt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('poetika.title')}
                </h2>
                <p className="text-muted-foreground mb-6">{t('poetika.description')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestBlog.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="flex items-center gap-2 mx-auto">
                  <Link to="/blog">
                    {t('home.viewAll')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer with CC BY 4.0 License */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">
            © 2024 Rumi Jr. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            This work is licensed under a{' '}
            <a 
              href="https://creativecommons.org/licenses/by/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline"
            >
              Creative Commons Attribution 4.0 International License
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
