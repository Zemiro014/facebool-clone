/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbsbox.com',
      'firebasestorage.googleapis.com'
  ],
  }
}

module.exports = nextConfig
