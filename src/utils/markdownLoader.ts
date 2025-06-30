
import { BlogPost } from '@/data/portfolio';

// This would typically use a markdown parser like remark or marked
// For now, we'll simulate loading markdown content
export interface MarkdownBlogPost {
  frontmatter: {
    id: string;
    title: {
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
    category: 'theoria' | 'praxis' | 'poiesis';
    image?: string;
  };
  content: string;
}

// Simulated markdown poiesis posts - in a real implementation, 
// you'd use a markdown parser to load actual .md files
const markdownBlogPosts: MarkdownBlogPost[] = [
  {
    frontmatter: {
      id: "shakespeare-modern-interpretation",
      title: {
        en: "Shakespeare in the Modern World: A Director's Perspective",
        tr: "Modern Dünyada Shakespeare: Bir Yönetmenin Bakış Açısı",
        de: "Shakespeare in der modernen Welt: Die Perspektive eines Regisseurs"
      },
      excerpt: {
        en: "Exploring how classical theoria can speak to contemporary audiences through innovative staging and interpretation",
        tr: "Yenilikçi sahneleme ve yorum yoluyla klasik tiyatronun çağdaş izleyicilere nasıl hitap edebileceğini keşfetmek",
        de: "Erforschung, wie klassisches Theoria durch innovative Inszenierung und Interpretation zeitgenössische Zuschauer ansprechen kann"
      },
      date: "2024-06-15",
      tags: ["theoria", "shakespeare", "classical", "modern interpretation"],
      category: "theoria",
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=400&fit=crop"
    },
    content: "# Shakespeare in the Modern World: A Director's Perspective\n\nWhen I first approached directing Shakespeare for contemporary audiences, I faced the eternal question that haunts every classical theoria director: How do we make 400-year-old text feel immediate and vital to modern viewers?\n\nThe answer, I discovered, lies not in abandoning the original text but in finding the universal human truths that Shakespeare embedded within his works..."
  },
  {
    frontmatter: {
      id: "dance-theoria-fusion",
      title: {
        en: "When Bodies Speak: The Art of Dance Theoria",
        tr: "Bedenler Konuştuğunda: Dans Tiyatrosu Sanatı",
        de: "Wenn Körper sprechen: Die Kunst des Tanztheaters"
      },
      excerpt: {
        en: "Exploring the powerful intersection of movement and narrative in contemporary dance theoria",
        tr: "Çağdaş dans tiyatrosunda hareket ve anlatımın güçlü kesişimini keşfetmek",
        de: "Die kraftvolle Schnittstelle von Bewegung und Erzählung im zeitgenössischen Tanztheater erkunden"
      },
      date: "2024-05-20",
      tags: ["dance", "theoria", "movement", "contemporary", "fusion"],
      category: "theoria",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=400&fit=crop"
    },
    content: "# When Bodies Speak: The Art of Dance Theoria\n\nMovement is the first language we learn. Before words, before concepts, we communicate through our bodies..."
  },
  {
    frontmatter: {
      id: "electronic-acoustic-fusion",
      title: {
        en: "Digital Heartbeats: Merging Electronic and Acoustic Worlds",
        tr: "Dijital Kalp Atışları: Elektronik ve Akustik Dünyaları Birleştirmek",
        de: "Digitale Herzschläge: Verschmelzung elektronischer und akustischer Welten"
      },
      excerpt: {
        en: "How modern technology can enhance rather than replace traditional musical expression",
        tr: "Modern teknolojinin geleneksel müzik ifadesini nasıl değiştirmek yerine geliştireceği",
        de: "Wie moderne Technologie traditionelle musikalische Ausdrucksformen verbessern statt ersetzen kann"
      },
      date: "2024-06-10",
      tags: ["electronic", "acoustic", "fusion", "technology", "composition"],
      category: "praxis",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop"
    },
    content: "# Digital Heartbeats: Merging Electronic and Acoustic Worlds\n\nThe debate between electronic and acoustic praxis has raged for decades..."
  },
  {
    frontmatter: {
      id: "rhythm-of-the-city",
      title: {
        en: "Urban Soundscapes: Finding Praxis in Metropolitan Chaos",
        tr: "Kentsel Ses Manzaraları: Metropol Kaosunda Müzik Bulmak",
        de: "Urbane Klanglandschaften: Musik im metropolitanen Chaos finden"
      },
      excerpt: {
        en: "How the sounds of city life inspire and inform my musical compositions",
        tr: "Şehir yaşamının seslerinin müzik kompozisyonlarımı nasıl ilham verdiği ve şekillendirdiği",
        de: "Wie die Klänge des Stadtlebens meine musikalischen Kompositionen inspirieren und prägen"
      },
      date: "2024-05-25",
      tags: ["urban", "field recording", "ambient", "composition", "soundscape"],
      category: "praxis",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=400&fit=crop"
    },
    content: "# Urban Soundscapes: Finding Praxis in Metropolitan Chaos\n\nEvery morning at 6:47 AM, the construction crew starts work outside my apartment..."
  },
  {
    frontmatter: {
      id: "art-and-solitude",
      title: {
        en: "The Necessary Loneliness of Creation",
        tr: "Yaratımın Gerekli Yalnızlığı",
        de: "Die notwendige Einsamkeit der Schöpfung"
      },
      excerpt: {
        en: "Why artists must learn to be alone with their work, and how solitude becomes a creative tool",
        tr: "Sanatçıların neden çalışmalarıyla yalnız kalmayı öğrenmesi gerektiği ve yalnızlığın nasıl yaratıcı bir araç haline geldiği",
        de: "Warum Künstler lernen müssen, mit ihrer Arbeit allein zu sein, und wie Einsamkeit zu einem kreativen Werkzeug wird"
      },
      date: "2024-06-05",
      tags: ["creativity", "solitude", "process", "philosophy", "reflection"],
      category: "poiesis",
      image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=400&fit=crop"
    },
    content: "# The Necessary Loneliness of Creation\n\nThere's a moment in every creative process when you must face the work alone..."
  },
  {
    frontmatter: {
      id: "artificial-intelligence-creativity",
      title: {
        en: "Human vs. Machine: What AI Teaches Us About Creativity",
        tr: "İnsan ve Makine: Yapay Zeka Yaratıcılık Hakkında Bize Ne Öğretiyor",
        de: "Mensch vs. Maschine: Was KI uns über Kreativität lehrt"
      },
      excerpt: {
        en: "Exploring how artificial intelligence challenges our understanding of creativity and artistic expression",
        tr: "Yapay zekanın yaratıcılık ve sanatsal ifade anlayışımıza nasıl meydan okuduğunu keşfetmek",
        de: "Erforschung, wie künstliche Intelligenz unser Verständnis von Kreativität und künstlerischem Ausdruck herausfordert"
      },
      date: "2024-05-30",
      tags: ["AI", "creativity", "technology", "philosophy", "future"],
      category: "poiesis",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    content: "# Human vs. Machine: What AI Teaches Us About Creativity\n\nLast month, I collaborated with an AI system on a musical composition..."
  }
];

export const getMarkdownBlogPosts = (): BlogPost[] => {
  return markdownBlogPosts.map(post => ({
    id: post.frontmatter.id,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt,
    content: {
      en: post.content,
      tr: post.content, // In a real implementation, you'd have separate content for each language
      de: post.content
    },
    date: post.frontmatter.date,
    tags: post.frontmatter.tags,
    image: post.frontmatter.image
  }));
};

export const getBlogPostsByCategory = (category: 'theoria' | 'praxis' | 'poiesis'): BlogPost[] => {
  return getMarkdownBlogPosts().filter(post => {
    const originalPost = markdownBlogPosts.find(mp => mp.frontmatter.id === post.id);
    return originalPost?.frontmatter.category === category;
  });
};
