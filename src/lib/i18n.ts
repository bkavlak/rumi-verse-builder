
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
      description: 'To endure oneself in a state of contemplation.'
    },
    praxis: {
      title: 'Praxis', 
      description: 'It is to become part of the movements within life.'
    },
    poiesis: {
      title: 'Poiesis',
      description: 'It is to feel that you are truly alive.'
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
      description: 'Temaşa halinde kendi kendine katlanmaktır.'
    },
    praxis: {
      title: 'Praxis',
      description: 'Yaşamdaki hareketlere dahil olmaktır.'
    },
    poiesis: {
      title: 'Poiesis',
      description: 'Yaşadığını hissetmektir.'
    },
    about: {
      title: 'Hakkımda',
      description: 'Ben kimim? Nerden geldim? Bilmiyorum.'
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
      description: 'Sich selbst im Zustand der Betrachtung ertragen.'
    },
    praxis: {
      title: 'Praxis',
      description: 'Sich in die Bewegungen des Lebens einfügen.'
    },
    poiesis: {
      title: 'Poiesis',
      description: 'Zu spüren, dass man lebt.'
    },
    about: {
      title: 'Über mich',
      description: 'Erfahre mehr über meine künstlerische Reise'
    }
  }
};
