/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(isDev ? {} : {
    basePath: '/v0-luxury-cafe-website',
    assetPrefix: '/v0-luxury-cafe-website/',
  }),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
