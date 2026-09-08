import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import RealEstateMarketingClient from "./RealEstateMarketingClient";

export const metadata: Metadata = {
  title: "Real Estate Digital Marketing Agency | Echo5 Digital",
  description:
    "Echo5 Digital helps real estate agents and brokers generate more qualified leads with AI-powered SEO, Google Ads, Meta Ads, social media, and content marketing services.",
  alternates: {
    canonical: "/industries/real-estate-marketing",
  },
};

const faqData = [
  {
    question: "What marketing services does Echo5 Digital offer for real estate professionals?",
    answer:
      "Echo5 Digital provides local SEO, Google Ads, Meta Ads, social media marketing, content marketing, Google Business Profile optimization, and web design — all tailored to help real estate agents and brokers generate and convert more leads.",
  },
  {
    question: "How does AI-powered marketing benefit real estate agents?",
    answer:
      "Echo5 Digital's AI Marketing Employee model handles continuous marketing execution across multiple channels, ensuring real estate professionals maintain consistent online visibility and lead flow without having to manage campaigns themselves.",
  },
  {
    question: "Can Echo5 Digital help real estate agents build a personal brand online?",
    answer:
      "Yes. Echo5 Digital creates consistent, on-brand content and social media presence that builds recognition and trust for individual agents and teams over time.",
  },
  {
    question: "Does Echo5 Digital serve real estate clients outside of Houston?",
    answer:
      "Yes. While Echo5 Digital is headquartered in Houston and Sugar Land, Texas, the agency works with real estate professionals across the United States.",
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
  name: "Real Estate Digital Marketing",
  description:
    "Echo5 Digital offers AI-powered digital marketing for real estate agents, brokers, and property companies, including local SEO, Google Ads, Meta Ads, social media management, and content marketing.",
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
    email: "hello@echo5digital.com",
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "Local SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Web Design",
    "Google Business Profile Management",
  ],
};

export default function RealEstateMarketingPage() {
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
      <RealEstateMarketingClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        // Phone placeholder — real verified number below
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}