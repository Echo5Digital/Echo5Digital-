import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import HealthcareMarketingClient from "./HealthcareMarketingClient";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency | AI-Powered Medical Marketing",
  description:
    "Echo5 Digital provides AI-powered digital marketing for healthcare providers — Local SEO, Google Ads, reputation management, and content tailored to medical practices.",
  alternates: {
    canonical: "https://echo5digital.com/industries/healthcare-marketing",
  },
};

const faqData = [
  {
    question:
      "What marketing services does Echo5 Digital offer for healthcare providers?",
    answer:
      "Echo5 Digital offers healthcare providers Local SEO, Google Business Profile optimization, Google Ads management, content marketing, online reputation management, social media marketing, and website design and development — all delivered through an AI-powered model with human team oversight.",
  },
  {
    question: "How does Echo5 Digital handle sensitive healthcare content?",
    answer:
      "Echo5 Digital approaches healthcare content creation with care for accuracy and sensitivity to the nature of medical communication. All AI-generated content is reviewed by a human team before publication. Clients are encouraged to have their clinical staff review medical claims.",
  },
  {
    question:
      "Can Echo5 Digital help a healthcare practice rank on Google Maps?",
    answer:
      "Yes. Local SEO and Google Business Profile optimization are core services that Echo5 Digital uses to help healthcare practices improve their visibility in Google's local map pack for relevant patient search queries.",
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
  name: "Healthcare Digital Marketing Services",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
  },
  serviceType: "Digital Marketing",
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "State", name: "Texas" },
    { "@type": "Country", name: "United States" },
  ],
  description:
    "AI-powered digital marketing for healthcare providers — Local SEO, Google Ads, reputation management, and content tailored to medical practices.",
  url: "https://echo5digital.com/industries/healthcare-marketing",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Healthcare Marketing", href: "/industries/healthcare-marketing" },
];

export default function HealthcareMarketingPage() {
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
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <HealthcareMarketingClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        // placeholder phone number below
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}