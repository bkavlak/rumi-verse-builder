
import { Github, Instagram, Youtube, AtSign, Music } from 'lucide-react';

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
      name: 'Instagram',
      url: 'https://instagram.com/rumijr42',
      icon: Instagram
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@batuhankavlakkendisi',
      icon: Youtube
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
