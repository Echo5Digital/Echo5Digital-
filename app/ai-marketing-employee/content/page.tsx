import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentClient from "./ContentClient";

export const metadata: Metadata = {
  title: "AI Content Marketing Service – Done-for-You | Echo5 Digital",
  description:
    "Echo5 Digital's AI Marketing Employee Content tier delivers SEO and AEO-optimized blog posts, web copy, and more — created by AI, reviewed by humans, published consistently for your business.",
  alternates: {
    canonical: "https://echo5digital.com/ai-marketing-employee/content",
  },
};

const faqData = [
  {
    question: "Who owns the content Echo5 Digital produces?",
    answer:
      "All content produced through the AI Marketing Employee Content tier is owned by the client upon delivery. You retain full rights to all written materials.",
  },
  {
    question: "How is content aligned with my brand voice?",
    answer:
      "During onboarding, Echo5 Digital's human team establishes your brand tone, voice guidelines, and content preferences. These parameters guide both the AI drafting process and human editorial review.",
  },
  {
    question: "Is the content optimized for AI answer engines like Perplexity or ChatGPT?",
    answer:
      "Yes. Content produced in this tier is specifically structured for AEO (Answer Engine Optimization), including direct answer blocks, structured formatting, and schema-ready layouts designed to improve citation likelihood by AI-powered search tools.",
  },
  {
    question: "How often is content published?",
    answer:
      "Publishing frequency depends on the plan and is agreed upon during onboarding. Echo5 Digital uses a content calendar to ensure consistent publication that aligns with your SEO and business goals.",
  },
  {
    question: "Can I request specific topics or content types?",
    answer:
      "Yes. Clients can submit topic requests and content preferences through the Client Command Center dashboard, and the human oversight team factors these into the content plan.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Marketing Employee – Content Tier",
  description:
    "Echo5 Digital's AI Marketing Employee Content tier delivers SEO and AEO-optimized blog posts, web copy, and more — created by AI, reviewed by humans, published consistently for your business.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    email: "hello@echo5digital.com",
    telephone: "713-489-7004",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sugar Land", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "AI-Powered Content Marketing",
  url: "https://echo5digital.com/ai-marketing-employee/content",
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

export default function ContentPage() {
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Marketing Employee", href: "/ai-marketing-employee" },
          { label: "Content", href: "/ai-marketing-employee/content" },
        ]}
      />
      <ContentClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}