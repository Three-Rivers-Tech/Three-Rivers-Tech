"use client";

import Image from "next/image";
import { useState } from "react";

interface OpenGraphPreviewProps {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName?: string;
  platform?: "facebook" | "twitter" | "linkedin";
  className?: string;
}

export default function OpenGraphPreview({
  title,
  description,
  image,
  url,
  siteName = "Three Rivers Tech",
  platform = "facebook",
  className = ""
}: OpenGraphPreviewProps) {
  const [imageError, setImageError] = useState(false);

  const platformStyles = {
    facebook: {
      container: "max-w-md border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm",
      image: "w-full h-48 object-cover",
      content: "p-3",
      url: "text-xs text-gray-500 uppercase mb-1",
      title: "text-base font-semibold text-gray-900 mb-1 line-clamp-2",
      description: "text-sm text-gray-600 line-clamp-2"
    },
    twitter: {
      container: "max-w-md border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm",
      image: "w-full h-48 object-cover",
      content: "p-3",
      url: "text-xs text-gray-500 mb-1",
      title: "text-sm font-medium text-gray-900 mb-1 line-clamp-2",
      description: "text-sm text-gray-600 line-clamp-2"
    },
    linkedin: {
      container: "max-w-md border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm",
      image: "w-full h-48 object-cover",
      content: "p-4",
      url: "text-xs text-gray-500 mb-2",
      title: "text-base font-semibold text-gray-900 mb-2 line-clamp-2",
      description: "text-sm text-gray-600 line-clamp-3"
    }
  };

  const styles = platformStyles[platform];
  const domain = new URL(url).hostname;

  return (
    <div className={`${styles.container} ${className}`}>
      {!imageError && (
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={500}
            height={250}
            className={styles.image}
            onError={() => setImageError(true)}
          />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.url}>
          {domain}
        </div>
        
        <h3 className={styles.title}>
          {title}
        </h3>
        
        <p className={styles.description}>
          {description}
        </p>
        
        {platform === "facebook" && siteName && (
          <div className="text-xs text-gray-500 mt-2">
            {siteName}
          </div>
        )}
      </div>
    </div>
  );
}

// Preview component that shows multiple platform previews
export function MultiPlatformPreview({
  title,
  description,
  image,
  url,
  siteName
}: Omit<OpenGraphPreviewProps, 'platform' | 'className'>) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Facebook Preview</h4>
        <OpenGraphPreview
          title={title}
          description={description}
          image={image}
          url={url}
          siteName={siteName}
          platform="facebook"
        />
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Twitter Preview</h4>
        <OpenGraphPreview
          title={title}
          description={description}
          image={image}
          url={url}
          siteName={siteName}
          platform="twitter"
        />
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">LinkedIn Preview</h4>
        <OpenGraphPreview
          title={title}
          description={description}
          image={image}
          url={url}
          siteName={siteName}
          platform="linkedin"
        />
      </div>
    </div>
  );
}