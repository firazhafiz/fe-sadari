import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: false, // matikan LightningCSS
  },
};

export default nextConfig;
