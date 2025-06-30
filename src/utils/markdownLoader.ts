
import { BlogPost, PortfolioItem } from '@/data/portfolio';
import { Language } from '@/lib/i18n';

export type { MarkdownBlogPost } from '@/data/markdownContent';
export { getMarkdownBlogPosts, getBlogPostsByCategory } from './blogHelpers';
export { getPortfolioItemsByCategory } from './portfolioHelpers';
