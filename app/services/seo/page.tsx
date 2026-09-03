import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOClient from "./SEOClient";

export const metadata: Metadata = {
  title: "SEO Services for Small Businesses | Echo5 Digital",
  description:
    "Echo5 Digital delivers AI-powered SEO services for small and mid-sized businesses in Houston, Sugar Land, TX, and nationwide. Drive organic traffic, leads, and growth.",
  alternates: {
    canonical: "https://echo5digital.com/services/seo",
  },
};

const faqItems = [
  {
    question: "What does Echo5 Digital's SEO service include?",
    answer:
      "Echo5 Digital's SEO service includes keyword research, technical SEO audits, on-page optimization, content strategy and creation, local SEO, and performance reporting through a client dashboard.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing meaningful improvements in organic rankings and traffic within 3 to 6 months, depending on competition, website history, and the consistency of optimization efforts.",
  },
  {
    question: "Does Echo5 Digital offer SEO for local Houston businesses?",
    answer:
      "Yes. Echo5 Digital specializes in local SEO for businesses in Houston, Sugar Land, and the surrounding Texas area, helping them rank for location-specific searches and attract nearby customers.",
  },
  {
    question: "Is SEO included in the AI Marketing Employee plans?",
    answer:
      "Yes. SEO is a core component of Echo5 Digital's AI Marketing Employee model, and it is included in relevant plan tiers alongside other digital marketing channels.",
  },
  {
    question: "Do you also offer AEO and GEO alongside SEO?",
    answer:
      "Yes. Echo5 Digital offers Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) as complementary services to traditional SEO, helping businesses appear in AI-generated search answers and featured responses.",
  },
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceSchemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  description:
    "Echo5 Digital provides AI-powered SEO services designed to improve search engine rankings, drive organic traffic, and generate leads for small and mid-sized businesses.",
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
    { "@type": "State", name: "Texas" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "Search Engine Optimization",
  url: "https://echo5digital.com/services/seo",
};

export default function SEOPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/solutions" },
    { label: "SEO Services", href: "/services/seo" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }}
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <SEOClient faqItems={faqItems} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}