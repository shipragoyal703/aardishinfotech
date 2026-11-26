
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.aardishinfotech.in",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value:
              '<https://aardishinfotech.in/sitemap.xml>; rel="sitemap"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
