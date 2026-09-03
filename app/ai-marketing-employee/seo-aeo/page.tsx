import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoAeoClient from "./SeoAeoClient";

export const metadata: Metadata = {
  title: "AI SEO & AEO Marketing Employee – Echo5 Digital",
  description:
    "Echo5 Digital's AI Marketing Employee SEO+AEO tier delivers done-for-you search and answer engine optimization — continuously managed by AI with human oversight for local and national growth.",
  alternates: {
    canonical: "https://echo5digital.com/ai-marketing-employee/seo-aeo",
  },
};

const faqData = [
  {
    question: "What is the difference between SEO and AEO?",
    answer:
      "SEO (Search Engine Optimization) focuses on ranking in traditional search engine results pages like Google. AEO (Answer Engine Optimization) focuses on structuring content so that AI-powered answer engines — such as Google's AI Overviews, ChatGPT, and Perplexity — cite your business as a trusted source.",
  },
  {
    question: "What does the SEO+AEO tier include?",
    answer:
      "This tier includes on-page SEO, technical SEO, local SEO, keyword research, AEO content structuring, schema markup implementation, and continuous AI-driven optimization — all supervised by Echo5 Digital's human team.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO results typically take several months to materialize depending on competition, domain authority, and content volume. Echo5 Digital uses AI to accelerate the process, but sustainable organic growth requires consistent, ongoing effort.",
  },
  {
    question: "Does this tier include local SEO for Houston businesses?",
    answer:
      "Yes. The SEO+AEO tier includes local SEO services such as Google Business Profile optimization and locally relevant content targeting, which is particularly valuable for businesses in Houston and Sugar Land, Texas.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Marketing Employee – SEO & AEO Tier",
  description:
    "Echo5 Digital's AI Marketing Employee SEO+AEO tier delivers done-for-you search and answer engine optimization — continuously managed by AI with human oversight for local and national growth.",
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
    url: "https://echo5digital.com",
  },
  areaServed: [
    { "@type": "City", name: "Houston", containedIn: "Texas" },
    { "@type": "City", name: "Sugar Land", containedIn: "Texas" },
  ],
  serviceType: "Search Engine Optimization, Answer Engine Optimization",
  url: "https://echo5digital.com/ai-marketing-employee/seo-aeo",
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

export default function SeoAeoPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "AI Marketing Employee", href: "/ai-marketing-employee" },
    { label: "SEO & AEO", href: "/ai-marketing-employee/seo-aeo" },
  ];

  return (
    <div style={{ backgroundColor: "#0A0F1E", minHeight: "100vh", color: "#E5E7EB" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <SeoAeoClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </div>
  );
}