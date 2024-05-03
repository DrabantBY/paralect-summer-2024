/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: 'https://api.themoviedb.org/3',
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

export default nextConfig;
