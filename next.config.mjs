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
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/social-media-marketing-agency-in-houston",
        destination: "/social-media-marketing",
        permanent: true,
      },
      {
        source: "/website-design-company-in-houston",
        destination: "/web-design",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
