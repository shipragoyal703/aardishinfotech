/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "https://aardishinfotech.in/wp-json", // change this to your WP domain
    ],
  },
};

module.exports = nextConfig;
