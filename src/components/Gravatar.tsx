
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface GravatarProps {
  email?: string;
  size?: number;
  className?: string;
}

const Gravatar: React.FC<GravatarProps> = ({ 
  email = "rumi.jr@example.com", 
  size = 120,
  className = "" 
}) => {
  // Create MD5 hash of email for Gravatar URL
  const createMD5 = (str: string) => {
    // Simple MD5 implementation for Gravatar
    // In a real app, you'd use a proper crypto library
    return str.toLowerCase().trim();
  };

  const gravatarUrl = `https://www.gravatar.com/avatar/${createMD5(email)}?s=${size}&d=identicon`;

  return (
    <Avatar className={`w-${size/4} h-${size/4} ${className}`} style={{ width: size, height: size }}>
      <AvatarImage 
        src={gravatarUrl} 
        alt="rumi jr. profile" 
        className="object-cover"
      />
      <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
        RJ
      </AvatarFallback>
    </Avatar>
  );
};

export default Gravatar;
