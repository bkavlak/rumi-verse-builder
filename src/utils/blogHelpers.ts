import { BlogPost } from '@/data/portfolio';
import { Language, languages } from '@/lib/i18n';

// Load all markdown files as raw strings at build time
const files = import.meta.glob('/src/content/blog/**/*.md', {
  eager: true,
  as: 'raw',
}) as Record<string, string>;

// Detect language from filename suffix (e.g., my-post.tr.md)
const detectLang = (path: string): Language | undefined => {
  const match = path.match(/\.([a-z]{2})\.md$/);
  const lang = match?.[1] as Language | undefined;
  return lang && (lang in languages) ? lang : undefined;
};

// Extract base id from filename (without language and extension)
const getIdFromPath = (path: string): string => {
  const file = path.split('/').pop() || '';
  return file.replace(/\.[a-z]{2}\.md$/, '').replace(/\.md$/, '');
};

// Minimal frontmatter parser for our simple YAML subset
// Supports keys: id, title, excerpt, date, tags (array), category, image
const parseFrontmatter = (raw: string): { fm: any; content: string } => {
  if (!raw.startsWith('---')) return { fm: {}, content: raw.trim() };
  // Find closing --- on its own line
  const closingIndex = raw.indexOf('\n---');
  if (closingIndex === -1) return { fm: {}, content: raw.trim() };

  const header = raw.slice(3, closingIndex).trim();
  const after = raw.slice(closingIndex + 4); // skip "\n---"
  const contentStart = after.indexOf('\n');
  const body = contentStart >= 0 ? after.slice(contentStart + 1) : after;

  const fm: any = {};
  header.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    // Arrays like: ["a", "b"] or ['a', 'b']
    if (value.startsWith('[')) {
      const inside = value.replace(/^\[/, '').replace(/\]$/, '');
      const arr = inside
        .split(',')
        .map((s) => s.trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1'))
        .filter(Boolean);
      fm[key] = arr;
    } else {
      value = value.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
      fm[key] = value;
    }
  });

  if (!Array.isArray(fm.tags)) fm.tags = [];
  return { fm, content: body.trim() };
};

// Group parsed markdown by id and language
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
  const { fm, content } = parseFrontmatter(raw);
  const id = (fm?.id as string) || getIdFromPath(path);
  if (!id) return;
  if (!grouped[id]) grouped[id] = {};

  grouped[id][lang] = {
    title: String(fm?.title || ''),
    excerpt: String(fm?.excerpt || ''),
    content,
    frontmatter: {
      id,
      date: String(fm?.date || ''),
      tags: Array.isArray(fm?.tags) ? (fm.tags as string[]) : [],
      category: (fm?.category as 'theoria' | 'praxis' | 'poiesis') || 'poiesis',
      image: (fm?.image as string | undefined) || undefined,
    },
  };
});

const fallbackOrder: Language[] = ['tr', 'en', 'de'];
const pickLang = (available: Partial<Record<Language, PerLangContent>>, preferred: Language): Language => {
  if (available[preferred]) return preferred;
  for (const l of [preferred, ...fallbackOrder]) {
    if (available[l]) return l;
  }
  return (Object.keys(available)[0] as Language) || 'tr';
};

export const getMarkdownBlogPosts = (language: Language = 'en'): BlogPost[] => {
  const posts: BlogPost[] = [];

  Object.entries(grouped).forEach(([id, perLang]) => {
    const chosen = pickLang(perLang, language);
    const fm = perLang[chosen]!.frontmatter;

    const getStr = (l: Language) => perLang[l]?.title || perLang[chosen]?.title || '';
    const getExcerpt = (l: Language) => perLang[l]?.excerpt || perLang[chosen]?.excerpt || '';
    const getContent = (l: Language) => perLang[l]?.content || perLang[chosen]?.content || '';

    posts.push({
      id: fm.id,
      title: { en: getStr('en'), tr: getStr('tr'), de: getStr('de') },
      excerpt: { en: getExcerpt('en'), tr: getExcerpt('tr'), de: getExcerpt('de') },
      content: { en: getContent('en'), tr: getContent('tr'), de: getContent('de') },
      date: fm.date,
      tags: fm.tags,
      image: fm.image,
    });
  });

  return posts;
};

export const getBlogPostsByCategory = (
  category: 'theoria' | 'praxis' | 'poiesis',
  language: Language = 'en'
): BlogPost[] => {
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
      title: { en: getStr('en'), tr: getStr('tr'), de: getStr('de') },
      excerpt: { en: getExcerpt('en'), tr: getExcerpt('tr'), de: getExcerpt('de') },
      content: { en: getContent('en'), tr: getContent('tr'), de: getContent('de') },
      date: fm.date,
      tags: fm.tags,
      image: fm.image,
    });
  });

  return posts;
};
