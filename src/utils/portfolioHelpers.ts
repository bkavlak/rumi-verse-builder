
import { PortfolioItem } from '@/data/portfolio';
import { Language } from '@/lib/i18n';
import { getBlogPostsByCategory } from './blogHelpers';

export const getPortfolioItemsByCategory = (category: 'theoria' | 'praxis', language: Language = 'en'): PortfolioItem[] => {
  const blogPosts = getBlogPostsByCategory(category, language);
  
  return blogPosts.map(post => ({
    id: post.id,
    title: post.title,
    description: post.excerpt,
    category,
    date: post.date,
    tags: post.tags,
    image: post.image,
    links: []
  }));
};
