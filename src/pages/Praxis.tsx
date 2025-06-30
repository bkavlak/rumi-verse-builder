
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { getMarkdownBlogPosts } from '@/utils/markdownLoader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const Praxis = () => {
  const { t, language } = useLanguage();

  const praxisItems = getMarkdownBlogPosts(language).filter(post => {
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
              {t('praxis.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('praxis.description')}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {praxisItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{item.title[language]}</h3>
                      <Badge variant="secondary">praxis</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.excerpt[language]}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <div className="whitespace-pre-wrap">
                      {item.content[language]}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Praxis;
