/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["live.staticflickr.com", "i.imgur.com", "i.ytimg.com"],
  },
};

module.exports = nextConfig;
