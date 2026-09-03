import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleAdsClient from "./GoogleAdsClient";

export const metadata: Metadata = {
  title: "AI Google Ads Management for Small Business | Echo5 Digital",
  description:
    "Echo5 Digital's AI Marketing Employee manages Google Ads done-for-you — continuous keyword optimization, bid management, and performance reporting with human strategic oversight.",
  alternates: {
    canonical: "https://echo5digital.com/ai-marketing-employee/google-ads",
  },
};

const faqData = [
  {
    question: "Does Echo5 Digital manage Google Ads campaigns from scratch?",
    answer:
      "Yes. The Google Ads tier includes full campaign setup, keyword research, ad copy creation, audience targeting, and ongoing optimization — whether you are starting fresh or transferring an existing campaign.",
  },
  {
    question: "How does AI improve Google Ads performance?",
    answer:
      "Echo5 Digital's agentic AI systems continuously monitor keyword performance, quality scores, bidding efficiency, and conversion data, making near-real-time adjustments to minimize wasted spend and improve return on ad spend.",
  },
  {
    question: "Is ad spend included in the management fee?",
    answer:
      "No. Ad spend is paid directly to Google and is separate from Echo5 Digital's management fee. Your budget and spend level are discussed during onboarding.",
  },
  {
    question: "How do I track the performance of my Google Ads?",
    answer:
      "Performance data is available through Echo5 Digital's Client Command Center dashboard, where you can review impressions, clicks, conversions, cost-per-lead, and other key metrics in real time.",
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
  name: "AI Google Ads Management for Small Business",
  description:
    "Echo5 Digital's AI Marketing Employee manages Google Ads done-for-you — continuous keyword optimization, bid management, and performance reporting with human strategic oversight.",
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
  serviceType: "Google Ads Management",
  url: "https://echo5digital.com/ai-marketing-employee/google-ads",
};

export default function GoogleAdsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "AI Marketing Employee", href: "/ai-marketing-employee" },
    { label: "Google Ads", href: "/ai-marketing-employee/google-ads" },
  ];

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
      <div className="bg-[#0A0F1E]">
        <Section spacing="sm" maxWidth="2xl">
          <Breadcrumbs items={breadcrumbItems} />
        </Section>
        <GoogleAdsClient faqData={faqData} />
      </div>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}