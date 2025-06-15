
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PortfolioItem } from '@/data/portfolio';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, Play, Volume2 } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const { language } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'audio':
        return <Volume2 className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {item.image && (
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.title[language]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {item.title[language]}
          </CardTitle>
          <Badge variant="secondary" className="ml-2">
            {item.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date(item.date).toLocaleDateString()}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {item.description[language]}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {item.links && item.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.links.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(link.url, '_blank')}
              >
                {getIcon(link.type)}
                {link.label[language]}
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
