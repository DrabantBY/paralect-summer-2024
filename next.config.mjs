/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: 'https://api.themoviedb.org/3',
    baseImgUrl: 'https://image.tmdb.org/t/p',
    posterSmWidth: 'w154',
    posterLgWidth: 'w300',
    totalPages: '500',
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
