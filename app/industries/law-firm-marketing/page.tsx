import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import LawFirmMarketingClient from "./LawFirmMarketingClient";

export const metadata: Metadata = {
  title: "Law Firm Marketing Agency | AI SEO & Ads for Attorneys",
  description:
    "Echo5 Digital delivers AI-powered SEO, Google Ads, AEO, and content marketing for law firms. Grow your caseload with done-for-you digital marketing in Houston, TX and nationwide.",
  alternates: {
    canonical: "/industries/law-firm-marketing",
  },
};

const faqData = [
  {
    question: "What marketing services does Echo5 Digital provide for law firms?",
    answer:
      "We offer SEO, Answer Engine Optimization (AEO), Local SEO, Google Ads, Google Business Profile management, content marketing, and online reputation management specifically tailored to law firms and legal practices.",
  },
  {
    question: "Can Echo5 Digital help a law firm rank in AI-generated search answers?",
    answer:
      "Yes. Our AEO and GEO services are designed to optimize your firm's content so it appears in AI-powered answer engines and generative search results, which is increasingly important for legal queries.",
  },
  {
    question: "Does Echo5 Digital serve law firms outside of Houston?",
    answer:
      "Yes. While we are based in Houston and Sugar Land, Texas, we provide law firm digital marketing services to clients across the U.S.",
  },
  {
    question: "Is the content Echo5 Digital creates for law firms compliant and professional?",
    answer:
      "All content is produced with a premium, authoritative tone appropriate for legal marketing, and our human oversight workflow ensures quality and accuracy before publication.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Law Firm Digital Marketing",
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
    { "@type": "Country", name: "United States" },
  ],
  description:
    "AI-powered SEO, Google Ads, AEO, Local SEO, and content marketing for law firms and attorneys.",
};

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

export default function LawFirmMarketingPage() {
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
      <LawFirmMarketingClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}