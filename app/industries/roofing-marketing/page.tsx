import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import RoofingMarketingClient from "./RoofingMarketingClient";

export const metadata: Metadata = {
  title: "Roofing Marketing Agency | AI Lead Generation for Roofers",
  description:
    "Echo5 Digital helps roofing companies generate consistent leads with AI-powered Local SEO, Google Ads, reputation management, and done-for-you digital marketing.",
  alternates: {
    canonical: "https://echo5digital.com/industries/roofing-marketing",
  },
};

const faqData = [
  {
    question:
      "What digital marketing services does Echo5 Digital offer for roofing companies?",
    answer:
      "Echo5 Digital provides roofing companies with Local SEO, Google Business Profile optimization, Google Ads management, content marketing, social media marketing, online reputation management, and custom website design — all delivered through an AI-powered, done-for-you model with human oversight.",
  },
  {
    question: "How does AI marketing help a roofing company get more leads?",
    answer:
      "AI tools allow Echo5 Digital to continuously optimize Google Ads bids and targeting, monitor and respond to reviews, generate SEO content for roofing service pages, and track competitor visibility — enabling faster and more precise adjustments than manual marketing alone.",
  },
  {
    question:
      "Can Echo5 Digital help a roofing company compete during storm season?",
    answer:
      "Yes. Echo5 Digital builds flexible, geo-targeted campaigns that can be scaled and adjusted to capture storm-related demand in specific ZIP codes and service areas as weather events occur.",
  },
  {
    question: "Do you work with roofing companies outside of Houston?",
    answer:
      "Yes. While Echo5 Digital is based in Houston and Sugar Land, Texas, the agency works with roofing contractors nationally across the United States.",
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
  name: "Roofing Marketing Agency | AI Lead Generation for Roofers",
  description:
    "Echo5 Digital helps roofing companies generate consistent leads with AI-powered Local SEO, Google Ads, reputation management, and done-for-you digital marketing.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston / Sugar Land",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "Digital Marketing for Roofing Companies",
  url: "https://echo5digital.com/industries/roofing-marketing",
};

export default function RoofingMarketingPage() {
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
      <RoofingMarketingClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}