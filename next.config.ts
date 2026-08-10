import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/emtech-store',
      },
    ];
  },
};

export default nextConfig;
