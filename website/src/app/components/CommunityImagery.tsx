import OptimizedImage from '@/components/OptimizedImage';

interface CommunityImageProps {
  type: 'hero-background' | 'service-illustration' | 'about-team' | 'local-landmark';
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function CommunityImagery({ type, alt, className = '', priority = false }: CommunityImageProps) {
  // Placeholder images that would be appropriate for a community tech business
  // These would be replaced with actual local photography or appropriate stock images
  const imageMap = {
    'hero-background': {
      src: '/images/community/turtle-creek-river-tech.jpg',
      fallback: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1920&q=80',
      description: 'Turtle Creek river with modern technology overlay - representing local roots with modern expertise'
    },
    'service-illustration': {
      src: '/images/community/friendly-tech-support.jpg', 
      fallback: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
      description: 'Diverse group of people using technology in everyday contexts - families, seniors, small business owners'
    },
    'about-team': {
      src: '/images/community/local-tech-team.jpg',
      fallback: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      description: 'Friendly, approachable team photo in casual business attire with local community feel'
    },
    'local-landmark': {
      src: '/images/community/turtle-creek-borough.jpg',
      fallback: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      description: 'Turtle Creek borough skyline or local landmarks that residents would recognize'
    }
  };

  const imageData = imageMap[type];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <OptimizedImage
        src={imageData.fallback} // Using fallback for now - would use imageData.src when local images are available
        alt={alt}
        width={800}
        height={600}
        priority={priority}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Overlay for better text readability when used as background */}
      {type === 'hero-background' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/70 to-secondary/60" />
      )}
      
      {/* Local community indicator */}
      <div className="absolute bottom-2 right-2 opacity-75">
        <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs text-white font-medium">Local</span>
        </div>
      </div>
    </div>
  );
}

// Suggested stock images for community tech business:
// 1. Rivers/waterways with technology overlay (representing Turtle Creek)
// 2. Diverse families using computers/tablets in home settings
// 3. Seniors learning technology with patient instructor
// 4. Small business owners working on laptops in cozy shop environments
// 5. Community gathering spaces with technology integration
// 6. Friendly tech support person helping customer
// 7. Local main street or small town atmosphere
// 8. People of various ages collaborating with technology

// Unsplash search terms that would work well:
// - "community technology support"
// - "family computer help"
// - "senior citizen learning computer"
// - "small business owner laptop"
// - "friendly tech support"
// - "diverse people technology"
// - "small town main street"
// - "river community pennsylvania"