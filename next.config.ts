import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.daisyui.com',
          port: '',
          pathname: '/images/stock/**',
        },
      ],
    },
};

export default nextConfig;
