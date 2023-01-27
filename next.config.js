/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbsbox.com',
      'firebasestorage.googleapis.com',
      'z-p3-scontent.fpoa12-1.fna.fbcdn.net'
  ],
  }
}

module.exports = nextConfig
