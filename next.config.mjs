/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData:
      "@import '@/styles/colors.scss';",
  },
};

export default nextConfig;
