
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
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis',
      about: 'About'
    },
    home: {
      title: 'Hey, stranger!',
      subtitle: "We've been waiting for you.",
      description: 'Welcome stranger!',
      latestWork: 'Latest Work',
      viewAll: 'View All',
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis',
      copyright: '© 2025 rumi jr. all rights are for human.',
      license: 'This work is licensed under a',
      licenseLink: 'Creative Commons Attribution 4.0 International License'
    },
    theoria: {
      title: 'Theoria',
      description: 'Exploring stories through performance'
    },
    praxis: {
      title: 'Praxis', 
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
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis',
      about: 'Hakkında'
    },
    home: {
      title: 'Hoş geldin, Yabancı!',
      subtitle: 'Biz de seni bekliyorduk.',
      description: 'Hoş geldin yabancı!',
      latestWork: 'Son Çalışmalar',
      viewAll: 'Tümünü Gör',
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis',
      copyright: '© 2025 rumi jr. tüm haklar insanlığa aittir.',
      license: 'Bu eser',
      licenseLink: 'Creative Commons Atıf 4.0 Uluslararası Lisansı'
    },
    theoria: {
      title: 'Theoria',
      description: 'Performans aracılığıyla hikayeleri keşfetmek'
    },
    praxis: {
      title: 'Praxis',
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
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis',
      about: 'Über mich'
    },
    home: {
      title: 'Herzlich willkommen, Fremder!',
      subtitle: 'Wir haben schon auf dich gewartet.',
      description: 'Willkommen Fremder!',
      latestWork: 'Neueste Arbeiten',
      viewAll: 'Alle anzeigen',
      theoria: 'Theoria',
      praxis: 'Praxis',
      poiesis: 'Poiesis',
      copyright: '© 2025 rumi jr. alle Rechte gehören der Menschheit.',
      license: 'Dieses Werk ist lizenziert unter einer',
      licenseLink: 'Creative Commons Namensnennung 4.0 International Lizenz'
    },
    theoria: {
      title: 'Theoria',
      description: 'Geschichten durch Performance erkunden'
    },
    praxis: {
      title: 'Praxis',
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
