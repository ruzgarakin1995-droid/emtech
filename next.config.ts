import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/emtech',
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/emtech-store',
        permanent: false,
      },
    ];
  },

};

export default nextConfig;
