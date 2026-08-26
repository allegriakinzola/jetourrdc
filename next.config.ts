import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/gamme", destination: "/modeles", permanent: true },
      { source: "/gamme/:path*", destination: "/modeles/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
