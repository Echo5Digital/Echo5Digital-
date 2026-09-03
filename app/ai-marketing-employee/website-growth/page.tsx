import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import WebsiteGrowthClient from "./WebsiteGrowthClient";

export const metadata: Metadata = {
  title: "Website Growth Plan | AI Marketing Employee – Echo5 Digital",
  description:
    "Echo5 Digital's Website Growth tier uses AI-powered SEO, AEO, and content production to grow your organic traffic and leads — done for you, with human oversight.",
  alternates: {
    canonical: "https://echo5digital.com/ai-marketing-employee/website-growth",
  },
};

const faqData = [
  {
    question: "What does the Website Growth plan include?",
    answer:
      "The Website Growth plan includes AI-powered SEO and AEO optimization, regular content production, on-page technical improvements, website health monitoring, and monthly performance reporting — all executed by Echo5 Digital's agentic AI system with human oversight.",
  },
  {
    question: "How is Website Growth different from the lower-tier plans?",
    answer:
      "Website Growth adds a more comprehensive content and SEO scope compared to entry-level tiers, incorporating ongoing AEO content, broader keyword targeting, and deeper technical SEO work. The Super Growth tier above it adds paid media and social channels.",
  },
  {
    question: "How long before I see results from the Website Growth plan?",
    answer:
      "Organic SEO and content results typically develop over three to six months as search engines index and rank new content. Echo5 Digital provides monthly reporting so you can track progress from the first month.",
  },
  {
    question: "Do I need to provide content or manage anything myself?",
    answer:
      "No. The Website Growth plan is a done-for-you service. Echo5 Digital's AI employee handles content creation, optimization, and publishing, with human strategists reviewing outputs before they go live.",
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
  name: "Website Growth Plan – AI Marketing Employee",
  description:
    "Echo5 Digital's Website Growth tier uses AI-powered SEO, AEO, and content production to grow your organic traffic and leads — done for you, with human oversight.",
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
  serviceType: "AI-Powered Digital Marketing",
  url: "https://echo5digital.com/ai-marketing-employee/website-growth",
};

export default function WebsiteGrowthPage() {
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Marketing Employee", href: "/ai-marketing-employee" },
          { label: "Website Growth", href: "/ai-marketing-employee/website-growth" },
        ]}
      />
      <WebsiteGrowthClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}