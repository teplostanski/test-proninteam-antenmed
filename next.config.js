/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'imgix',
    path: '',
  },
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()
