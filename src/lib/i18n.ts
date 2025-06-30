
export const languages = {
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    nav: {
      home: 'Home',
      theater: 'Theoria',
      music: 'Praxis',
      blog: 'Poiesis',
      about: 'About'
    },
    home: {
      title: 'A stranger',
      subtitle: 'Artist, Performer, Creator',
      description: 'Welcome stranger!',
      latestWork: 'Latest Work',
      viewAll: 'View All',
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis'
    },
    theoria: {
      title: 'Theoria Portfolio',
      description: 'Exploring stories through performance'
    },
    praxis: {
      title: 'Praxis Portfolio', 
      description: 'Creating melodies and rhythms'
    },
    poiesis: {
      title: 'Poiesis',
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
      blog: 'Poiesis',
      about: 'Hakkında'
    },
    home: {
      title: 'Bir yabancı',
      subtitle: 'Sanatçı, Performansçı, Yaratıcı',
      description: 'Hoş geldin yabancı!',
      latestWork: 'Son Çalışmalar',
      viewAll: 'Tümünü Gör',
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis'
    },
    theoria: {
      title: 'Theoria Portföyü',
      description: 'Performans aracılığıyla hikayeleri keşfetmek'
    },
    praxis: {
      title: 'Praxis Portföyü',
      description: 'Melodi ve ritim yaratmak'
    },
    poiesis: {
      title: 'Poiesis',
      description: 'Sanat ve yaşam üzerine düşünceler ve yansımalar',
      readMore: 'Devamını Oku',
      publishedOn: 'Yayınlanma tarihi'
    },
    about: {
      title: 'Hakkımda',
      description: 'Sanatsal yolculuğum hakkında daha fazla bilgi'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      theater: 'Theoria',
      music: 'Praxis',
      blog: 'Poiesis',
      about: 'Über mich'
    },
    home: {
      title: 'Ein Fremder',
      subtitle: 'Künstler, Performer, Schöpfer',
      description: 'Willkommen Fremder!',
      latestWork: 'Neueste Arbeiten',
      viewAll: 'Alle anzeigen',
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis'
    },
    theoria: {
      title: 'Theoria Portfolio',
      description: 'Geschichten durch Performance erkunden'
    },
    praxis: {
      title: 'Praxis Portfolio',
      description: 'Melodien und Rhythmen erschaffen'
    },
    poiesis: {
      title: 'Poiesis',
      description: 'Gedanken und Reflexionen über Kunst und Leben',
      readMore: 'Mehr lesen',
      publishedOn: 'Veröffentlicht am'
    },
    about: {
      title: 'Über mich',
      description: 'Erfahre mehr über meine künstlerische Reise'
    }
  }
};
