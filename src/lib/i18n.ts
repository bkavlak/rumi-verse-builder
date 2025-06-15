
export const languages = {
  en: 'English',
  tr: 'Türkçe'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    nav: {
      home: 'Home',
      theater: 'Theoria',
      music: 'Praxis',
      blog: 'Poetika',
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
      title: 'Theoria Portfolio',
      description: 'Exploring stories through performance'
    },
    music: {
      title: 'Praxis Portfolio', 
      description: 'Creating melodies and rhythms'
    },
    blog: {
      title: 'Poetika',
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
      theater: 'Theoria',
      music: 'Praxis',
      blog: 'Poetika',
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
      title: 'Theoria Portföyü',
      description: 'Performans aracılığıyla hikayeleri keşfetmek'
    },
    music: {
      title: 'Praxis Portföyü',
      description: 'Melodi ve ritim yaratmak'
    },
    blog: {
      title: 'Poetika',
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
