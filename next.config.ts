import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Branded 404 for unknown URLs (the app has several root layouts, see app/global-not-found.tsx)
  experimental: { globalNotFound: true },
};

export default nextConfig;
