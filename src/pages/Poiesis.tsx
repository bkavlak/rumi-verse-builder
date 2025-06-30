
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { getMarkdownBlogPosts } from '@/utils/markdownLoader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Poiesis = () => {
  const { t, language } = useLanguage();

  const poiesisItems = getMarkdownBlogPosts(language).filter(post => {
    const postId = post.id;
    return postId === 'under-construction';
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {t('poiesis.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('poiesis.description')}
            </p>
          </div>

          {poiesisItems.length > 0 && (
            <Tabs defaultValue={poiesisItems[0].id} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {poiesisItems.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className="flex items-center gap-2">
                    {item.title[language]}
                    <Badge variant="secondary" className="text-xs">poiesis</Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {poiesisItems.map((item) => (
                <TabsContent key={item.id} value={item.id} className="mt-6">
                  <div className="border rounded-lg p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-semibold mb-2">{item.title[language]}</h2>
                      <p className="text-muted-foreground mb-4">{item.excerpt[language]}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <div className="whitespace-pre-wrap">
                        {item.content[language]}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>
    </div>
  );
};

export default Poiesis;
