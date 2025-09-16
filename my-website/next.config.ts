import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // enables `next export`
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
