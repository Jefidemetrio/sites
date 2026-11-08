/** @type {import('next').NextConfig} */

const nextConfig = {
  // Enable React Server Components
  experimental: {
    reactRoot: true,
    shouldPrintWarning: false,
  },

  // Output for Vercel/Dokploy
  output: 'standalone',

  // Image optimization
  images: {
    domains: ['dinamicos.pt', 'localhost'],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://dinamicos.pt',
    NEXT_PUBLIC_DIRECTUS_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055',
  },

  // i18n configuration
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'http://localhost:8055',
        permanent: false,
      },
    ]
  },
}

export default nextConfig