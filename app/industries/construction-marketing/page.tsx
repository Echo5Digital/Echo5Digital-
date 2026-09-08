import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstructionMarketingClient from "./ConstructionMarketingClient";

export const metadata: Metadata = {
  title: "Construction Company Digital Marketing | Echo5 Digital",
  description:
    "Echo5 Digital helps construction companies in Houston and across the U.S. generate more project leads with AI-powered SEO, Google Ads, web design, and reputation management.",
  alternates: {
    canonical: "/industries/construction-marketing",
  },
};

const faqData = [
  {
    question:
      "What digital marketing services does Echo5 Digital offer for construction companies?",
    answer:
      "Echo5 Digital offers local SEO, Google Ads management, Google Business Profile optimization, web design, content marketing, and online reputation management — all tailored to the needs of construction businesses.",
  },
  {
    question:
      "How does AI-powered marketing help construction companies get more leads?",
    answer:
      "Echo5 Digital's AI Marketing Employee model continuously executes SEO, paid ads, content, and social media tasks, ensuring construction companies maintain consistent online visibility and lead flow without requiring hands-on management from the business owner.",
  },
  {
    question: "Do you work with construction companies outside of Houston?",
    answer:
      "Yes. While Echo5 Digital is based in Houston and Sugar Land, Texas, the agency serves construction companies across the United States.",
  },
  {
    question:
      "How long does it take to see results from construction company SEO?",
    answer:
      "SEO results typically build over several months, while Google Ads can generate leads more quickly. Echo5 Digital uses a combined strategy to drive both short-term and long-term growth for construction clients.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Construction Company Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    // Verified phone number
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
  },
  serviceType: "Digital Marketing",
  areaServed: [
    { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sugar Land", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "Country", name: "United States" },
  ],
  description:
    "AI-powered digital marketing for construction companies, including local SEO, Google Ads, web design, content marketing, and reputation management.",
  url: "https://echo5digital.com/industries/construction-marketing",
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

export default function ConstructionMarketingPage() {
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
      <main>
        <ConstructionMarketingClient faqData={faqData} />
      </main>
      <Footer
        // Verified contact details
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}