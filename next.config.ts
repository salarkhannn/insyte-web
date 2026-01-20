import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Consistent trailing slash behavior
  trailingSlash: false,
  
  // React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
  
  // Production optimizations
  poweredByHeader: false,
};

export default nextConfig;

