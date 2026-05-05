/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/inm-Bio',
  assetPrefix: '/inm-Bio',
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
