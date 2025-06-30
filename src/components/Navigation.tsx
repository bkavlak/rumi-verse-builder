
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/theater', key: 'nav.theater' },
    { path: '/music', key: 'nav.music' },
    { path: '/blog', key: 'nav.blog' },
    { path: '/about', key: 'nav.about' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              rumi jr.
            </Link>
            <a 
              href="https://gravatar.com/a877b3fc0ad866d11ca5a67dbf9dad22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://www.gravatar.com/avatar/a877b3fc0ad866d11ca5a67dbf9dad22?s=240&d=mp" 
                alt="Gravatar Profile" 
                className="w-8 h-8 rounded-full"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, key }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === path
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {t(key)}
              </Link>
            ))}
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, key }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 rounded-md ${
                    location.pathname === path
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground'
                  }`}
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
