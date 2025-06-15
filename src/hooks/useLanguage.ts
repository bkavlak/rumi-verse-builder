
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, translations } from '@/lib/i18n';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (language: Language) => set({ language }),
      t: (key: string) => {
        const { language } = get();
        const keys = key.split('.');
        let value: any = translations[language];
        
        for (const k of keys) {
          value = value?.[k];
        }
        
        return value || key;
      }
    }),
    {
      name: 'language-storage',
    }
  )
);
