/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-54a964da83ba4c1e83adcceece9d2d28.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig