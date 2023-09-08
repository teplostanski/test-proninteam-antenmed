/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
}

//module.exports = {
//  images: {
//    unoptimized: true,
//  },
//}

module.exports = {
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()
