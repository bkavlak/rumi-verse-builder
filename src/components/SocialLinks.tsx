
import { Github, Linkedin, Instagram, Youtube, Camera, AtSign, Music } from 'lucide-react';

// Custom African mask icon for Capoeira
const AfricanMask = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="12" rx="7" ry="9" />
    <ellipse cx="9" cy="10" rx="1.5" ry="2" />
    <ellipse cx="15" cy="10" rx="1.5" ry="2" />
    <path d="M9 16h6" />
    <path d="M12 3v2" />
    <path d="M7 5l1 1" />
    <path d="M17 5l-1 1" />
  </svg>
);

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bkavlak',
      icon: Github
    },
    {
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/bkavlak/',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/batuhankavlakkendisi',
      icon: Instagram
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@batuhankavlakkendisi',
      icon: Youtube
    },
    {
      name: 'Pixelfed',
      url: 'https://pixelfed.social/bkavlak',
      icon: Camera
    },
    {
      name: 'Mastodon',
      url: 'https://en.osm.town/@rumijr',
      icon: AtSign
    },
    {
      name: 'Suno',
      url: 'https://suno.com/@rumijr',
      icon: Music
    },
    {
      name: 'SC Capoeira',
      url: 'https://sc-capoeira.de/de/',
      icon: AfricanMask
    }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.name}
          >
            <IconComponent className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
};
