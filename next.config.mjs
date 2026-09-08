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
    ];
  },
};

export default nextConfig;
