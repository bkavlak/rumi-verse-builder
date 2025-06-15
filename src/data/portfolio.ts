export interface PortfolioItem {
  id: string;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  category: 'theater' | 'music';
  image?: string;
  date: string;
  tags: string[];
  links?: {
    type: 'video' | 'audio' | 'website';
    url: string;
    label: {
      en: string;
      tr: string;
    };
  }[];
}

export interface BlogPost {
  id: string;
  title: {
    en: string;
    tr: string;
    de?: string;
  };
  content: {
    en: string;
    tr: string;
    de?: string;
  };
  excerpt: {
    en: string;
    tr: string;
    de?: string;
  };
  date: string;
  tags: string[];
  image?: string;
}

// Import the markdown blog posts
import { getMarkdownBlogPosts } from '@/utils/markdownLoader';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: {
      en: 'Shakespeare in the Park',
      tr: 'Parkta Shakespeare'
    },
    description: {
      en: 'A modern interpretation of classical theater in an outdoor setting',
      tr: 'Açık hava ortamında klasik tiyatronun modern yorumu'
    },
    category: 'theater',
    date: '2024-06-15',
    tags: ['classical', 'outdoor', 'shakespeare'],
    links: [
      {
        type: 'video',
        url: '#',
        label: {
          en: 'Watch Performance',
          tr: 'Performansı İzle'
        }
      }
    ]
  },
  {
    id: '2',
    title: {
      en: 'Urban Symphony',
      tr: 'Şehir Senfonisi'
    },
    description: {
      en: 'An experimental music piece blending electronic and acoustic elements',
      tr: 'Elektronik ve akustik unsurları harmanlayan deneysel bir müzik eseri'
    },
    category: 'music',
    date: '2024-05-20',
    tags: ['experimental', 'electronic', 'acoustic'],
    links: [
      {
        type: 'audio',
        url: '#',
        label: {
          en: 'Listen Now',
          tr: 'Şimdi Dinle'
        }
      }
    ]
  },
  {
    id: '3',
    title: {
      en: 'Contemporary Dance Theater',
      tr: 'Çağdaş Dans Tiyatrosu'
    },
    description: {
      en: 'A fusion of movement and storytelling through contemporary dance',
      tr: 'Çağdaş dans aracılığıyla hareket ve hikaye anlatımının füzyonu'
    },
    category: 'theater',
    date: '2024-04-10',
    tags: ['contemporary', 'dance', 'movement'],
    links: [
      {
        type: 'video',
        url: '#',
        label: {
          en: 'Watch Trailer',
          tr: 'Fragmanı İzle'
        }
      }
    ]
  }
];

export const blogPosts: BlogPost[] = getMarkdownBlogPosts();
