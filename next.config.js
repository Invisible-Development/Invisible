/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      // {
      //   // source: '/(.*)',
      // }
    ]
  }
}

module.exports = nextConfig
