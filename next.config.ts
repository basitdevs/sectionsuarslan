import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.prod.website-files.com",
        protocol: "https",
      },
      {
        hostname: "frontdeskdallas.com",
        protocol: "https",
      },
      {
        hostname: "makrasstoas.gr",
        protocol: "https",
      },
      {
        hostname: "cdn.brookfieldresidential.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
