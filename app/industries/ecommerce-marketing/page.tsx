import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import EcommerceMarketingClient from "./EcommerceMarketingClient";

export const metadata: Metadata = {
  title: "Ecommerce Marketing Agency | AI-Powered Growth | Echo5 Digital",
  description:
    "Echo5 Digital helps ecommerce brands grow revenue with AI-powered Google Ads, Meta Ads, SEO, content marketing, and social media management. Serving U.S. online stores.",
  alternates: {
    canonical: "/industries/ecommerce-marketing",
  },
};

const faqData = [
  {
    question:
      "What digital marketing services does Echo5 Digital offer for ecommerce businesses?",
    answer:
      "Echo5 Digital offers Google Ads, Meta Ads, SEO, content marketing, social media marketing, web design and development, CRM automation, and reporting dashboards — all tailored to drive ecommerce traffic and revenue.",
  },
  {
    question: "How does AI-powered marketing help ecommerce brands scale?",
    answer:
      "Echo5 Digital's AI Marketing Employee model executes campaigns continuously across SEO, paid ads, content, and social media simultaneously, allowing ecommerce brands to scale their marketing output without proportionally increasing headcount or spend.",
  },
  {
    question:
      "Does Echo5 Digital manage Google Shopping and Meta product catalog ads for ecommerce?",
    answer:
      "Echo5 Digital's Google Ads and Meta Ads services cover performance-focused campaign types relevant to ecommerce, including product-focused campaigns designed to drive qualified purchase intent traffic.",
  },
  {
    question:
      "Can Echo5 Digital work with ecommerce brands outside of Houston, Texas?",
    answer:
      "Yes. Echo5 Digital serves ecommerce clients nationally across the United States, in addition to businesses based in Houston and Sugar Land, Texas.",
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
  name: "Ecommerce Digital Marketing",
  serviceType: "AI-Powered Ecommerce Marketing",
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
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  description:
    "Echo5 Digital helps ecommerce brands grow revenue with AI-powered Google Ads, Meta Ads, SEO, content marketing, and social media management.",
  url: "https://echo5digital.com/industries/ecommerce-marketing",
};

export default function EcommerceMarketingPage() {
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
      <main>
        {/* Quick Answer Block — server-rendered for AEO crawlability */}
        <Section background="elevated" spacing="sm" withDivider>
          <div
            className="rounded-2xl border border-purple-500/30 p-6 md:p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Quick Answer
            </p>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital is an AI-powered digital marketing agency that helps
              ecommerce brands increase traffic, conversions, and revenue through
              Google Ads, Meta Ads, SEO, content marketing, and social media
              management. The service is designed for small and mid-sized online
              stores that want consistent growth across multiple channels without
              managing a full in-house marketing team. Echo5 Digital is based in
              Houston, Texas, and serves ecommerce clients across the United
              States.
            </p>
          </div>
        </Section>

        {/* Client component handles all interactive sections */}
        <EcommerceMarketingClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}