/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData:
      "@import '@/styles/colors.scss';",
  },
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default nextConfig;
