
import { Language } from '@/lib/i18n';

export interface MarkdownBlogPost {
  frontmatter: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    category: 'theoria' | 'praxis' | 'poiesis';
    image?: string;
  };
  content: string;
}

export const markdownContent: Record<string, Record<Language, MarkdownBlogPost>> = {
  'shakespeare-modern-interpretation': {
    en: {
      frontmatter: {
        id: "shakespeare-modern-interpretation",
        title: "Shakespeare in the Modern World: A Director's Perspective",
        excerpt: "Exploring how classical theoria can speak to contemporary audiences through innovative staging and interpretation",
        date: "2024-06-15",
        tags: ["theoria", "shakespeare", "classical", "modern interpretation"],
        category: "theoria",
        image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=400&fit=crop"
      },
      content: "# Shakespeare in the Modern World: A Director's Perspective\n\n## The Challenge of Relevance\n\nWhen I first approached directing Shakespeare for contemporary audiences, I faced the eternal question that haunts every classical theoria director: How do we make 400-year-old text feel immediate and vital to modern viewers?\n\nThe answer, I discovered, lies not in abandoning the original text but in finding the universal human truths that Shakespeare embedded within his works..."
    },
    tr: {
      frontmatter: {
        id: "shakespeare-modern-interpretation",
        title: "Modern Dünyada Shakespeare: Bir Yönetmenin Bakış Açısı",
        excerpt: "Yenilikçi sahneleme ve yorum yoluyla klasik tiyatronun çağdaş izleyicilere nasıl hitap edebileceğini keşfetmek",
        date: "2024-06-15",
        tags: ["theoria", "shakespeare", "classical", "modern interpretation"],
        category: "theoria",
        image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=400&fit=crop"
      },
      content: "# Modern Dünyada Shakespeare: Bir Yönetmenin Bakış Açısı\n\n## İlgi Çekme Sorunu\n\nÇağdaş izleyiciler için Shakespeare yönetmeye ilk yaklaştığımda, her klasik tiyatro yönetmenini rahatsız eden ebedi soruyla karşı karşıya kaldım..."
    },
    de: {
      frontmatter: {
        id: "shakespeare-modern-interpretation",
        title: "Shakespeare in der modernen Welt: Die Perspektive eines Regisseurs",
        excerpt: "Erforschung, wie klassisches Theoria durch innovative Inszenierung und Interpretation zeitgenössische Zuschauer ansprechen kann",
        date: "2024-06-15",
        tags: ["theoria", "shakespeare", "classical", "modern interpretation"],
        category: "theoria",
        image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=400&fit=crop"
      },
      content: "# Shakespeare in der modernen Welt: Die Perspektive eines Regisseurs\n\n## Die Herausforderung der Relevanz\n\nAls ich zum ersten Mal daran ging, Shakespeare für zeitgenössische Zuschauer zu inszenieren..."
    }
  },
  'dance-theoria-fusion': {
    en: {
      frontmatter: {
        id: "dance-theoria-fusion",
        title: "When Bodies Speak: The Art of Dance Theoria",
        excerpt: "Exploring the powerful intersection of movement and narrative in contemporary dance theoria",
        date: "2024-05-20",
        tags: ["dance", "theoria", "movement", "contemporary", "fusion"],
        category: "theoria",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=400&fit=crop"
      },
      content: "# When Bodies Speak: The Art of Dance Theoria\n\nMovement is the first language we learn..."
    },
    tr: {
      frontmatter: {
        id: "dance-theoria-fusion",
        title: "Bedenler Konuştuğunda: Dans Tiyatrosu Sanatı",
        excerpt: "Çağdaş dans tiyatrosunda hareket ve anlatımın güçlü kesişimini keşfetmek",
        date: "2024-05-20",
        tags: ["dance", "theoria", "movement", "contemporary", "fusion"],
        category: "theoria",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=400&fit=crop"
      },
      content: "# Bedenler Konuştuğunda: Dans Tiyatrosu Sanatı\n\nHareket öğrendiğimiz ilk dildir..."
    },
    de: {
      frontmatter: {
        id: "dance-theoria-fusion",
        title: "Wenn Körper sprechen: Die Kunst des Tanztheorias",
        excerpt: "Die kraftvolle Schnittstelle von Bewegung und Erzählung im zeitgenössischen Tanztheoria erkunden",
        date: "2024-05-20",
        tags: ["dance", "theoria", "movement", "contemporary", "fusion"],
        category: "theoria",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=400&fit=crop"
      },
      content: "# Wenn Körper sprechen: Die Kunst des Tanztheorias\n\nBewegung ist die erste Sprache, die wir lernen..."
    }
  },
  'electronic-acoustic-fusion': {
    en: {
      frontmatter: {
        id: "electronic-acoustic-fusion",
        title: "Digital Heartbeats: Merging Electronic and Acoustic Worlds",
        excerpt: "How modern technology can enhance rather than replace traditional musical expression",
        date: "2024-06-10",
        tags: ["electronic", "acoustic", "fusion", "technology", "composition"],
        category: "praxis",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop"
      },
      content: "# Digital Heartbeats: Merging Electronic and Acoustic Worlds\n\nThe debate between electronic and acoustic praxis has raged for decades..."
    },
    tr: {
      frontmatter: {
        id: "electronic-acoustic-fusion",
        title: "Dijital Kalp Atışları: Elektronik ve Akustik Dünyaları Birleştirmek",
        excerpt: "Modern teknolojinin geleneksel müzik ifadesini nasıl değiştirmek yerine geliştireceği",
        date: "2024-06-10",
        tags: ["electronic", "acoustic", "fusion", "technology", "composition"],
        category: "praxis",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop"
      },
      content: "# Dijital Kalp Atışları: Elektronik ve Akustik Dünyaları Birleştirmek\n\nElektronik ve akustik praxis arasındaki tartışma onlarca yıldır sürüyor..."
    },
    de: {
      frontmatter: {
        id: "electronic-acoustic-fusion",
        title: "Digitale Herzschläge: Verschmelzung elektronischer und akustischer Welten",
        excerpt: "Wie moderne Technologie traditionelle musikalische Ausdrucksformen verbessern statt ersetzen kann",
        date: "2024-06-10",
        tags: ["electronic", "acoustic", "fusion", "technology", "composition"],
        category: "praxis",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop"
      },
      content: "# Digitale Herzschläge: Verschmelzung elektronischer und akustischer Welten\n\nDie Debatte zwischen elektronischer und akustischer Praxis tobt seit Jahrzehnten..."
    }
  },
  'rhythm-of-the-city': {
    en: {
      frontmatter: {
        id: "rhythm-of-the-city",
        title: "Urban Soundscapes: Finding Praxis in Metropolitan Chaos",
        excerpt: "How the sounds of city life inspire and inform my musical compositions",
        date: "2024-05-25",
        tags: ["urban", "field recording", "ambient", "composition", "soundscape"],
        category: "praxis",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=400&fit=crop"
      },
      content: "# Urban Soundscapes: Finding Praxis in Metropolitan Chaos\n\nEvery morning at 6:47 AM, the construction crew starts work outside my apartment..."
    },
    tr: {
      frontmatter: {
        id: "rhythm-of-the-city",
        title: "Kentsel Ses Manzaraları: Metropol Kaosunda Müzik Bulmak",
        excerpt: "Şehir yaşamının seslerinin müzik kompozisyonlarımı nasıl ilham verdiği ve şekillendirdiği",
        date: "2024-05-25",
        tags: ["urban", "field recording", "ambient", "composition", "soundscape"],
        category: "praxis",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=400&fit=crop"
      },
      content: "# Kentsel Ses Manzaraları: Metropol Kaosunda Müzik Bulmak\n\nHer sabah 6:47'de apartmanımın dışında inşaat ekibi çalışmaya başlar..."
    },
    de: {
      frontmatter: {
        id: "rhythm-of-the-city",
        title: "Urbane Klanglandschaften: Musik im metropolitanen Chaos finden",
        excerpt: "Wie die Klänge des Stadtlebens meine musikalischen Kompositionen inspirieren und prägen",
        date: "2024-05-25",
        tags: ["urban", "field recording", "ambient", "composition", "soundscape"],
        category: "praxis",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=400&fit=crop"
      },
      content: "# Urbane Klanglandschaften: Musik im metropolitanen Chaos finden\n\nJeden Morgen um 6:47 Uhr beginnt die Baumannschaft vor meiner Wohnung zu arbeiten..."
    }
  },
  'art-and-solitude': {
    en: {
      frontmatter: {
        id: "art-and-solitude",
        title: "The Necessary Loneliness of Creation",
        excerpt: "Why artists must learn to be alone with their work, and how solitude becomes a creative tool",
        date: "2024-06-05",
        tags: ["creativity", "solitude", "process", "philosophy", "reflection"],
        category: "poiesis",
        image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=400&fit=crop"
      },
      content: "# The Necessary Loneliness of Creation\n\nThere's a moment in every creative process when you must face the work alone..."
    },
    tr: {
      frontmatter: {
        id: "art-and-solitude",
        title: "Yaratımın Gerekli Yalnızlığı",
        excerpt: "Sanatçıların neden çalışmalarıyla yalnız kalmayı öğrenmesi gerektiği ve yalnızlığın nasıl yaratıcı bir araç haline geldiği",
        date: "2024-06-05",
        tags: ["creativity", "solitude", "process", "philosophy", "reflection"],
        category: "poiesis",
        image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=400&fit=crop"
      },
      content: "# Yaratımın Gerekli Yalnızlığı\n\nHer yaratıcı süreçte çalışmayla yalnız yüzleşmek zorunda olduğunuz bir an vardır..."
    },
    de: {
      frontmatter: {
        id: "art-and-solitude",
        title: "Die notwendige Einsamkeit der Schöpfung",
        excerpt: "Warum Künstler lernen müssen, mit ihrer Arbeit allein zu sein, und wie Einsamkeit zu einem kreativen Werkzeug wird",
        date: "2024-06-05",
        tags: ["creativity", "solitude", "process", "philosophy", "reflection"],
        category: "poiesis",
        image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=400&fit=crop"
      },
      content: "# Die notwendige Einsamkeit der Schöpfung\n\nEs gibt einen Moment in jedem kreativen Prozess, in dem man der Arbeit allein gegenüberstehen muss..."
    }
  },
  'artificial-intelligence-creativity': {
    en: {
      frontmatter: {
        id: "artificial-intelligence-creativity",
        title: "Human vs. Machine: What AI Teaches Us About Creativity",
        excerpt: "Exploring how artificial intelligence challenges our understanding of creativity and artistic expression",
        date: "2024-05-30",
        tags: ["AI", "creativity", "technology", "philosophy", "future"],
        category: "poiesis",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
      },
      content: "# Human vs. Machine: What AI Teaches Us About Creativity\n\nLast month, I collaborated with an AI system on a musical composition..."
    },
    tr: {
      frontmatter: {
        id: "artificial-intelligence-creativity",
        title: "İnsan ve Makine: Yapay Zeka Yaratıcılık Hakkında Bize Ne Öğretiyor",
        excerpt: "Yapay zekanın yaratıcılık ve sanatsal ifade anlayışımıza nasıl meydan okuduğunu keşfetmek",
        date: "2024-05-30",
        tags: ["AI", "creativity", "technology", "philosophy", "future"],
        category: "poiesis",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
      },
      content: "# İnsan ve Makine: Yapay Zeka Yaratıcılık Hakkında Bize Ne Öğretiyor\n\nGeçen ay bir yapay zeka sistemiyle müzikal bir kompozisyon üzerinde işbirliği yaptım..."
    },
    de: {
      frontmatter: {
        id: "artificial-intelligence-creativity",
        title: "Mensch vs. Maschine: Was KI uns über Kreativität lehrt",
        excerpt: "Erforschung, wie künstliche Intelligenz unser Verständnis von Kreativität und künstlerischem Ausdruck herausfordert",
        date: "2024-05-30",
        tags: ["AI", "creativity", "technology", "philosophy", "future"],
        category: "poiesis",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
      },
      content: "# Mensch vs. Maschine: Was KI uns über Kreativität lehrt\n\nLetzten Monat arbeitete ich mit einem KI-System an einer musikalischen Komposition zusammen..."
    }
  }
};
