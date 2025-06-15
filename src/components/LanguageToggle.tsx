
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { languages } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-medium hover:bg-primary/10 transition-colors"
    >
      <Globe className="h-4 w-4" />
      {languages[language]}
    </Button>
  );
};
