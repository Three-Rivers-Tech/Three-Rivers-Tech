"use client";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp, FaTelegram, FaLink, FaCheck } from "react-icons/fa";
import { generateSocialSharingUrls } from "@/lib/social-metadata";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function SocialShare({ 
  url, 
  title, 
  description, 
  className = "",
  showLabels = false,
  size = "md"
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  
  const sharingUrls = generateSocialSharingUrls(url, title, description);
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base", 
    lg: "w-12 h-12 text-lg"
  };

  const iconSize = size === "sm" ? 16 : size === "md" ? 20 : 24;

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: sharingUrls.facebook,
      color: "hover:bg-blue-600 hover:text-white",
      ariaLabel: `Share on Facebook: ${title}`
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: sharingUrls.twitter,
      color: "hover:bg-sky-500 hover:text-white",
      ariaLabel: `Share on Twitter: ${title}`
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: sharingUrls.linkedin,
      color: "hover:bg-blue-700 hover:text-white",
      ariaLabel: `Share on LinkedIn: ${title}`
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: sharingUrls.email,
      color: "hover:bg-gray-600 hover:text-white",
      ariaLabel: `Share via email: ${title}`
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: sharingUrls.whatsapp,
      color: "hover:bg-green-500 hover:text-white",
      ariaLabel: `Share on WhatsApp: ${title}`
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      url: sharingUrls.telegram,
      color: "hover:bg-blue-500 hover:text-white",
      ariaLabel: `Share on Telegram: ${title}`
    }
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${sizeClasses[size]} 
            flex items-center justify-center 
            bg-background-secondary border border-border rounded-lg 
            transition-all duration-200 
            ${platform.color}
            ${showLabels ? 'px-3 gap-2' : ''}
          `}
          aria-label={platform.ariaLabel}
          title={`Share on ${platform.name}`}
        >
          <platform.icon size={iconSize} />
          {showLabels && (
            <span className="text-sm font-medium">{platform.name}</span>
          )}
        </a>
      ))}
      
      <button
        onClick={handleCopyLink}
        className={`
          ${sizeClasses[size]} 
          flex items-center justify-center 
          bg-background-secondary border border-border rounded-lg 
          transition-all duration-200 
          hover:bg-primary hover:text-white
          ${showLabels ? 'px-3 gap-2' : ''}
          ${copied ? 'bg-green-500 text-white' : ''}
        `}
        aria-label={`Copy link: ${title}`}
        title="Copy link"
      >
        {copied ? <FaCheck size={iconSize} /> : <FaLink size={iconSize} />}
        {showLabels && (
          <span className="text-sm font-medium">
            {copied ? 'Copied!' : 'Copy Link'}
          </span>
        )}
      </button>
    </div>
  );
}

// Compact version for inline sharing
export function InlineSocialShare({ url, title, description }: Omit<SocialShareProps, 'className' | 'showLabels' | 'size'>) {
  return (
    <SocialShare 
      url={url} 
      title={title} 
      description={description}
      size="sm"
      className="inline-flex"
    />
  );
}

// Full-featured version with labels
export function DetailedSocialShare({ url, title, description }: Omit<SocialShareProps, 'className' | 'showLabels' | 'size'>) {
  return (
    <div className="bg-background-secondary rounded-lg p-4 border border-border">
      <h3 className="text-lg font-semibold mb-3">Share this page</h3>
      <SocialShare 
        url={url} 
        title={title} 
        description={description}
        showLabels={true}
        size="md"
        className="justify-center"
      />
    </div>
  );
}