import matter from 'gray-matter';
import { BlogPost } from '@/data/portfolio';
import { Language, languages } from '@/lib/i18n';

// Load all markdown files from content folder as raw strings
const files = import.meta.glob('/src/content/blog/**/*.md', { eager: true, as: 'raw' }) as Record<string, string>;

// Helper to detect language from filename (e.g., my-post.tr.md)
const detectLang = (path: string): Language | undefined => {
  const match = path.match(/\.([a-z]{2})\.md$/);
  const lang = match?.[1] as Language | undefined;
  return (lang && (lang in languages)) ? lang : undefined;
};

// Helper to get id from filename (without language and extension)
const getIdFromPath = (path: string): string => {
  const file = path.split('/').pop() || '';
  // remove language and extension
  return file.replace(/\.[a-z]{2}\.md$/, '').replace(/\.md$/, '');
};

// Parse all files and group by id and language
interface PerLangContent {
  title: string;
  excerpt: string;
  content: string;
  frontmatter: {
    id: string;
    date: string;
    tags: string[];
    category: 'theoria' | 'praxis' | 'poiesis';
    image?: string;
  };
}

const grouped: Record<string, Partial<Record<Language, PerLangContent>>> = {};

Object.entries(files).forEach(([path, raw]) => {
  const lang = detectLang(path) || 'tr'; // default to TR if unspecified
  const parsed = matter(raw);
  const id = (parsed.data?.id as string) || getIdFromPath(path);
  if (!grouped[id]) grouped[id] = {};
  grouped[id][lang] = {
    title: String(parsed.data?.title || ''),
    excerpt: String(parsed.data?.excerpt || ''),
    content: parsed.content.trim(),
    frontmatter: {
      id,
      date: String(parsed.data?.date || ''),
      tags: Array.isArray(parsed.data?.tags) ? parsed.data.tags as string[] : [],
      category: (parsed.data?.category as any) || 'poiesis',
      image: parsed.data?.image as string | undefined,
    },
  };
});

const fallbackOrder: Language[] = ['tr', 'en', 'de'];

const pickLang = (available: Partial<Record<Language, PerLangContent>>, preferred: Language): Language => {
  if (available[preferred]) return preferred;
  for (const l of [preferred, ...fallbackOrder]) {
    if (available[l]) return l;
  }
  // default to first available
  return (Object.keys(available)[0] as Language) || 'tr';
};

export const getMarkdownBlogPosts = (language: Language = 'en'): BlogPost[] => {
  const posts: BlogPost[] = [];

  Object.entries(grouped).forEach(([id, perLang]) => {
    const chosen = pickLang(perLang, language);

    const getStr = (l: Language) => perLang[l]?.title || perLang[chosen]?.title || '';
    const getExcerpt = (l: Language) => perLang[l]?.excerpt || perLang[chosen]?.excerpt || '';
    const getContent = (l: Language) => perLang[l]?.content || perLang[chosen]?.content || '';

    const fm = perLang[chosen]!.frontmatter;

    posts.push({
      id: fm.id,
      title: {
        en: getStr('en'),
        tr: getStr('tr'),
        de: getStr('de'),
      },
      excerpt: {
        en: getExcerpt('en'),
        tr: getExcerpt('tr'),
        de: getExcerpt('de'),
      },
      content: {
        en: getContent('en'),
        tr: getContent('tr'),
        de: getContent('de'),
      },
      date: fm.date,
      tags: fm.tags,
      image: fm.image,
    });
  });

  return posts;
};

export const getBlogPostsByCategory = (category: 'theoria' | 'praxis' | 'poiesis', language: Language = 'en'): BlogPost[] => {
  const posts: BlogPost[] = [];

  Object.entries(grouped).forEach(([id, perLang]) => {
    const chosen = pickLang(perLang, language);
    const fm = perLang[chosen]!.frontmatter;
    if (fm.category !== category) return;

    const getStr = (l: Language) => perLang[l]?.title || perLang[chosen]?.title || '';
    const getExcerpt = (l: Language) => perLang[l]?.excerpt || perLang[chosen]?.excerpt || '';
    const getContent = (l: Language) => perLang[l]?.content || perLang[chosen]?.content || '';

    posts.push({
      id: fm.id,
      title: {
        en: getStr('en'),
        tr: getStr('tr'),
        de: getStr('de'),
      },
      excerpt: {
        en: getExcerpt('en'),
        tr: getExcerpt('tr'),
        de: getExcerpt('de'),
      },
      content: {
        en: getContent('en'),
        tr: getContent('tr'),
        de: getContent('de'),
      },
      date: fm.date,
      tags: fm.tags,
      image: fm.image,
    });
  });

  return posts;
};
