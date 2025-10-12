import React from 'react';

interface IconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

export default function Icon({ icon: IconComponent, className = 'w-12 h-12 text-primary' }: IconProps) {
  return <IconComponent className={className} />;
}
