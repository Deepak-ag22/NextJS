import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//   })
  
  
//   module.exports = withBundleAnalyzer({
//     reactStrictMode: true,
//   })
  
