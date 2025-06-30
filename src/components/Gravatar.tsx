
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface GravatarProps {
  size?: number;
  className?: string;
}

const Gravatar: React.FC<GravatarProps> = ({ 
  size = 120,
  className = "" 
}) => {
  const gravatarUrl = `https://www.gravatar.com/avatar/a877b3fc0ad866d11ca5a67dbf9dad22?s=${size}&d=mp`;

  return (
    <Avatar className={`${className}`} style={{ width: size, height: size }}>
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
