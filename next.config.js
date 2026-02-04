/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "https://aardishinfotech.in/", // change this to your WP domain
    ],
  },
};

module.exports = nextConfig;
