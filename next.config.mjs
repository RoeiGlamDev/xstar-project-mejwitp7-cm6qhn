import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    optimizeCss: true, // Optimizes CSS for production
  },
  webpack: (config) => {
    // Custom webpack configurations
    return config;
  },
};

export default nextConfig;