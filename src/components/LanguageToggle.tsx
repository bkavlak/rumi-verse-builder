
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { languages, Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languageKeys = Object.keys(languages) as Language[];

  const toggleLanguage = () => {
    if (languageKeys.length === 2) {
      // If only 2 languages, toggle between them
      setLanguage(language === 'en' ? 'tr' : 'en');
    } else {
      // If more than 2 languages, show dropdown
      setIsOpen(!isOpen);
    }
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 text-sm font-medium hover:bg-primary/10 transition-colors"
      >
        <Globe className="h-4 w-4" />
        {languages[language]}
      </Button>

      {isOpen && languageKeys.length > 2 && (
        <div className="absolute top-full mt-1 right-0 bg-background border border-border rounded-md shadow-lg py-1 z-50">
          {languageKeys.map((lang) => (
            <button
              key={lang}
              onClick={() => selectLanguage(lang)}
              className={`block w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors ${
                language === lang ? 'bg-accent text-accent-foreground' : 'text-foreground'
              }`}
            >
              {languages[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
