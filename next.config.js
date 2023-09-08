/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
}
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()
