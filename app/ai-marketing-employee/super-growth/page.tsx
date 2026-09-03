import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import SuperGrowthClient from "./SuperGrowthClient";

export const metadata: Metadata = {
  title: "Super Growth Plan | Full-Service AI Marketing – Echo5 Digital",
  description:
    "Echo5 Digital's Super Growth plan is an all-in AI marketing system covering SEO, AEO, paid ads, social, and content — one AI employee running every channel for your business.",
  alternates: {
    canonical: "https://echo5digital.com/ai-marketing-employee/super-growth",
  },
};

const faqData = [
  {
    question: "What channels does the Super Growth plan cover?",
    answer:
      "Super Growth covers SEO, AEO/GEO, Google Ads, Meta Ads, social media management, content marketing, website performance optimization, and performance reporting dashboards — all managed by Echo5 Digital's AI Marketing Employee system.",
  },
  {
    question: "How does Echo5 Digital's team stay involved in the Super Growth plan?",
    answer:
      "Human strategists at Echo5 Digital review AI-generated outputs, approve campaign decisions, monitor performance dashboards, and conduct regular strategy reviews to ensure every channel aligns with client goals.",
  },
  {
    question: "Is Super Growth suitable for a business just starting out?",
    answer:
      "Super Growth is best suited for established or growth-stage businesses with an existing online presence and budget to invest across multiple channels simultaneously. Newer businesses may be better served starting with a lower-tier plan.",
  },
  {
    question: "How is reporting delivered on the Super Growth plan?",
    answer:
      "Clients on the Super Growth plan receive access to Echo5 Digital's Client Command Center dashboard, which consolidates performance data across all active channels into a single view with regular reporting summaries.",
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
  name: "Super Growth Plan – AI Marketing Employee",
  description:
    "Echo5 Digital's Super Growth plan is an all-in AI marketing system covering SEO, AEO, Google Ads, Meta Ads, social media management, content marketing, and website optimization into a single done-for-you system.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
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
  serviceType: "AI-Powered Full-Service Digital Marketing",
  url: "https://echo5digital.com/ai-marketing-employee/super-growth",
};

export default function SuperGrowthPage() {
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
          { label: "Super Growth", href: "/ai-marketing-employee/super-growth" },
        ]}
      />
      <main>
        <SuperGrowthClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        // placeholder phone number — replace with verified number
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}