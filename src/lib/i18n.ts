
export const languages = {
  en: 'English',
  tr: 'Türkçe'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    nav: {
      home: 'Home',
      theater: 'Theater',
      music: 'Music',
      blog: 'Blog',
      about: 'About'
    },
    home: {
      title: 'Rumi Jr.',
      subtitle: 'Artist, Performer, Creator',
      description: 'Welcome to my artistic journey through theater and music',
      latestWork: 'Latest Work',
      viewAll: 'View All'
    },
    theater: {
      title: 'Theater Portfolio',
      description: 'Exploring stories through performance'
    },
    music: {
      title: 'Music Portfolio', 
      description: 'Creating melodies and rhythms'
    },
    blog: {
      title: 'Blog',
      description: 'Thoughts and reflections on art and life',
      readMore: 'Read More',
      publishedOn: 'Published on'
    },
    about: {
      title: 'About Me',
      description: 'Learn more about my artistic journey'
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      theater: 'Tiyatro',
      music: 'Müzik',
      blog: 'Blog',
      about: 'Hakkında'
    },
    home: {
      title: 'Rumi Jr.',
      subtitle: 'Sanatçı, Performansçı, Yaratıcı',
      description: 'Tiyatro ve müzik aracılığıyla sanatsal yolculuğuma hoş geldiniz',
      latestWork: 'Son Çalışmalar',
      viewAll: 'Tümünü Gör'
    },
    theater: {
      title: 'Tiyatro Portföyü',
      description: 'Performans aracılığıyla hikayeleri keşfetmek'
    },
    music: {
      title: 'Müzik Portföyü',
      description: 'Melodi ve ritim yaratmak'
    },
    blog: {
      title: 'Blog',
      description: 'Sanat ve yaşam üzerine düşünceler ve yansımalar',
      readMore: 'Devamını Oku',
      publishedOn: 'Yayınlanma tarihi'
    },
    about: {
      title: 'Hakkımda',
      description: 'Sanatsal yolculuğum hakkında daha fazla bilgi'
    }
  }
};
