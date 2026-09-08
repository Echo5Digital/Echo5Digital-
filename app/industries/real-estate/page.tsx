import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RealEstateSeoClient from "./RealEstateSeoClient";

export const metadata: Metadata = {
  title: "Real Estate SEO | SEO for Realtors | Echo5 Digital",
  description:
    "Echo5 Digital offers expert real estate SEO strategies tailored for realtors. Boost your online presence with our specialized SEO for realtors services.",
  alternates: {
    canonical: "/industries/real-estate",
  },
};

const faqData = [
  {
    question: "How can SEO help my real estate business attract more clients?",
    answer:
      "SEO helps your real estate business rank higher in search engine results, making it easier for potential clients to find you when they search for properties, real estate agents, or services online. By optimizing your site for relevant keywords, improving user experience, and using AI to personalize content, you can increase your visibility and attract more clients.",
  },
  {
    question: "What role does AI play in real estate SEO?",
    answer:
      "AI enhances real estate SEO by providing advanced tools for keyword research, content optimization, lead nurturing, and real-time analytics. AI-driven solutions help us adapt to changing market trends, target the right audience, and deliver more effective marketing strategies.",
  },
  {
    question: "How does local SEO benefit real estate agents?",
    answer:
      "Local SEO is essential for real estate agents who focus on specific geographic areas. It ensures your business appears in local search results, driving leads from potential clients searching for real estate services in your target locations.",
  },
  {
    question: "How does Echo5 Digital integrate social media with real estate SEO?",
    answer:
      "We integrate your social media strategy with SEO, using AI to optimize social media campaigns, analyze audience behavior, and drive targeted traffic to your site — turning platforms like Facebook, Instagram, and LinkedIn into lead-generating channels for your brand.",
  },
  {
    question: "What does Echo5 Digital's real estate branding service include?",
    answer:
      "Our real estate branding services include custom website design, logo creation, brand identity development, and more. We work closely with you to create a brand that resonates with your target audience and stands out in the competitive real estate market.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate SEO & SEO for Realtors",
  description:
    "Echo5 Digital specializes in Real Estate SEO, utilizing advanced strategies and AI-driven tools to boost visibility, drive traffic, and generate leads for real estate agents, brokers, and firms.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston / Sugar Land",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "713-489-7004",
    email: "sale@echo5digital.com",
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "AI-Driven Keyword Research",
    "Content Optimization for Real Estate",
    "Technical SEO for Real Estate Websites",
    "Local SEO for Real Estate Agents",
    "National SEO for Real Estate Firms",
    "Social Media Integration",
    "Real Estate Branding and Web Development",
    "Google Ads and PPC Campaigns",
    "AI-Powered Real Estate Marketing",
  ],
};

export default function RealEstateSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <RealEstateSeoClient faqData={faqData} />
      <Footer
        email="sale@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
