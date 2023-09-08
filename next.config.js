/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
}

module.exports = {
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()
