/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  // allow domains for images
  images: {
    domains: ['cause-ukraine.vercel.app', 'cause-ukraine-git-main-avimehenwal.vercel.app', 'cause-ukraine-avimehenwal.vercel.app'],
  },
}

module.exports = nextConfig
