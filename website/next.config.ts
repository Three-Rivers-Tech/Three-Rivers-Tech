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
  }
};

export default nextConfig;
