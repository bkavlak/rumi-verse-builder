
import { BlogPost, PortfolioItem } from '@/data/portfolio';
import { Language } from '@/lib/i18n';

// Re-export types and functions from the refactored modules
export type { MarkdownBlogPost } from '@/data/markdownContent';
export { getMarkdownBlogPosts, getBlogPostsByCategory } from './blogHelpers';
export { getPortfolioItemsByCategory } from './portfolioHelpers';

// This would typically use a markdown parser like remark or marked
// For now, we'll simulate loading markdown content
