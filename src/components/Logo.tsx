
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/db1627ba-4089-435c-8ec5-4a6da7cf2a00.png" 
        alt="GCLX General Trading" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </Link>
  );
};

export default Logo;
