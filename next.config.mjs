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
        destination: "/services/social-media-marketing",
        permanent: true,
      },
      {
        source: "/social-media-management-company-in-houston",
        destination: "/services/social-media-marketing",
        permanent: true,
      },
      {
        source: "/website-design-company-in-houston",
        destination: "/services/web-design",
        permanent: true,
      },
      {
        source: "/influencer-marketing-agency",
        destination: "/social-media-marketing",
        permanent: true,
      },
      {
        source: "/digital-marketing-company-seo-agency",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/real-estate-seo-seo-for-realtors",
        destination: "/industries/real-estate",
        permanent: true,
      },
      {
        source: "/automotive-seo-seo-for-car-dealerships",
        destination: "/industries/automotive",
        permanent: true,
      },
      {
        source: "/best-dental-seo-company-dental-seo-expert",
        destination: "/industries/dental",
        permanent: true,
      },
      {
        source: "/law-firm-seo-seo-for-lawyers",
        destination: "/industries/law-firm-marketing",
        permanent: true,
      },
      {
        source: "/seo-for-educational-institutions-education-seo",
        destination: "/industries/education",
        permanent: true,
      },
      {
        source: "/financial-services-seo-seo-for-financial-services",
        destination: "/industries/financial-services",
        permanent: true,
      },
      {
        source: "/fashion-seo-seo-for-clothing-brand",
        destination: "/industries/fashion",
        permanent: true,
      },
      {
        source: "/seo-for-travel-industry-tourism-seo",
        destination: "/industries/travel",
        permanent: true,
      },
      {
        source: "/healthcare-seo-seo-for-hospitals",
        destination: "/industries/healthcare",
        permanent: true,
      },
      {
        source: "/ecommerce-seo-agency-retail-seo",
        destination: "/industries/ecommerce",
        permanent: true,
      },
      {
        source: "/seo-for-entertainment-companies-media-seo",
        destination: "/industries/entertainment-media",
        permanent: true,
      },
      {
        source: "/fitness-seo-gym-seo",
        destination: "/industries/fitness",
        permanent: true,
      },
      {
        source: "/seo-for-manufacturers-industrial-seo",
        destination: "/industries/manufacturing-industrial",
        permanent: true,
      },
      {
        source: "/seo-for-professional-services",
        destination: "/industries/professional-services",
        permanent: true,
      },
      {
        source: "/contact-page",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
