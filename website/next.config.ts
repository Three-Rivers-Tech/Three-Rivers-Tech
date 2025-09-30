import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration for Cloudflare Pages static export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Fix turbopack workspace root warning
  turbopack: {
    root: __dirname
  },
  // Disable linting during builds (existing linting issues in other files)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Note: Headers don't work with static export, they should be configured at the hosting level
};

export default nextConfig;
