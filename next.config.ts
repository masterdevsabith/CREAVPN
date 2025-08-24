import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["dynamic-media-cdn.tripadvisor.com", "nordvpn.com"], // ✅ add your domain here
  },
};

export default nextConfig;
