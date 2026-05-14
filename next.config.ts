import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'r2-worker.mikelmm1999.workers.dev',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
