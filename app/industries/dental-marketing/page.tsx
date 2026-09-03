import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import DentalMarketingClient from "./DentalMarketingClient";

export const metadata: Metadata = {
  title: "Dental Marketing Agency | AI-Powered Patient Growth | Echo5",
  description:
    "Echo5 Digital helps dental practices attract more patients with AI-powered Local SEO, Google Ads, reputation management, and done-for-you content marketing.",
  alternates: {
    canonical: "https://echo5digital.com/industries/dental-marketing",
  },
};

const faqData = [
  {
    question:
      "What digital marketing services does Echo5 Digital offer for dental practices?",
    answer:
      "Echo5 Digital provides dental practices with Local SEO, Google Business Profile management, Google Ads, content marketing, online reputation management, social media marketing, and custom website design and development — all executed through an AI-powered, done-for-you model with human oversight.",
  },
  {
    question: "How does AI marketing help a dental practice grow?",
    answer:
      "AI tools allow Echo5 Digital to continuously monitor search rankings, optimize ad performance, generate SEO content, and track patient-facing reviews at a speed and scale that manual marketing cannot match — all while a human team reviews and refines every output.",
  },
  {
    question: "Do you work with dental practices outside of Houston?",
    answer:
      "Yes. While Echo5 Digital has a primary presence in Houston and Sugar Land, Texas, the agency serves dental practices nationally across the United States.",
  },
];

const faqJsonLd = {
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Marketing Services",
  description:
    "Echo5 Digital provides AI-powered dental marketing services including Local SEO, Google Business Profile optimization, Google Ads, reputation management, content marketing, and custom website design for dental practices.",
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
  url: "https://echo5digital.com/industries/dental-marketing",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Dental Marketing", href: "/industries/dental-marketing" },
];

export default function DentalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <DentalMarketingClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}