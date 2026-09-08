import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ManufacturingIndustrialClient from "./ManufacturingIndustrialClient";

export const metadata: Metadata = {
  title: "SEO for Manufacturers & Industrial SEO | Echo5 Digital",
  description:
    "Echo5 Digital offers tailored SEO services for the manufacturing and industrial sectors, helping businesses enhance search rankings, generate qualified B2B leads, and expand market reach.",
  alternates: {
    canonical: "/industries/manufacturing-industrial",
  },
};

const faqData = [
  {
    question: "How does SEO attract more clients for manufacturers?",
    answer:
      "Higher search rankings make it easier for potential B2B clients to find you, increasing website traffic and qualified leads.",
  },
  {
    question: "What's social media's role in industrial SEO?",
    answer:
      "Platforms like LinkedIn connect with decision-makers through strategic content and campaigns.",
  },
  {
    question: "How do Google Ads complement organic SEO?",
    answer:
      "Paid ads provide immediate visibility while organic strategies build long-term presence.",
  },
  {
    question: "Why is branding important for industrial companies?",
    answer:
      "Strong branding differentiates your company and builds client trust.",
  },
  {
    question: "How is conversion optimization handled?",
    answer:
      "Design prioritizes user experience, speed, and mobile optimization.",
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
  name: "Manufacturing and Industrial SEO Services",
  description:
    "Echo5 Digital is a manufacturing and industrial SEO company providing keyword research, content optimization, technical SEO, local SEO, link building, social media management, Google Ads, branding, and ongoing optimization for manufacturers and industrial businesses.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "Digital Marketing",
  url: "https://echo5digital.com/industries/manufacturing-industrial",
};

export default function ManufacturingIndustrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <ManufacturingIndustrialClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
