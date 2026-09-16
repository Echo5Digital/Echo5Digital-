/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/industries/law-firms",
        destination: "/industries/law-firm-marketing",
        permanent: true,
      },
      {
        source: "/about-us-page",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/seo-agency-in-houston",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
