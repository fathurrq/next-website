import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      new URL("https://unwavering-card-a95a991f83.media.strapiapp.com/**")
    ],
  },
};

export default nextConfig;
