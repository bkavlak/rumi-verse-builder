
import { BlogPost } from '@/data/portfolio';
import { Language } from '@/lib/i18n';
import { markdownContent } from '@/data/markdownContent';

export const getMarkdownBlogPosts = (language: Language = 'en'): BlogPost[] => {
  const posts: BlogPost[] = [];
  
  Object.entries(markdownContent).forEach(([id, languageContent]) => {
    const content = languageContent[language] || languageContent.en;
    
    posts.push({
      id: content.frontmatter.id,
      title: {
        en: markdownContent[id].en.frontmatter.title,
        tr: markdownContent[id].tr.frontmatter.title,
        de: markdownContent[id].de?.frontmatter.title || markdownContent[id].en.frontmatter.title
      },
      excerpt: {
        en: markdownContent[id].en.frontmatter.excerpt,
        tr: markdownContent[id].tr.frontmatter.excerpt,
        de: markdownContent[id].de?.frontmatter.excerpt || markdownContent[id].en.frontmatter.excerpt
      },
      content: {
        en: markdownContent[id].en.content,
        tr: markdownContent[id].tr.content,
        de: markdownContent[id].de?.content || markdownContent[id].en.content
      },
      date: content.frontmatter.date,
      tags: content.frontmatter.tags,
      image: content.frontmatter.image
    });
  });
  
  return posts;
};

export const getBlogPostsByCategory = (category: 'theoria' | 'praxis' | 'poiesis', language: Language = 'en'): BlogPost[] => {
  return getMarkdownBlogPosts(language).filter(post => {
    const id = post.id;
    const content = markdownContent[id];
    if (!content) return false;
    
    const frontmatter = content[language]?.frontmatter || content.en.frontmatter;
    return frontmatter.category === category;
  });
};
