
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/data/portfolio';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const { language, t } = useLanguage();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {post.image && (
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title[language]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {post.title[language]}
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {t('blog.publishedOn')} {new Date(post.date).toLocaleDateString()}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {post.excerpt[language]}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button variant="outline" className="flex items-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {t('blog.readMore')}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
