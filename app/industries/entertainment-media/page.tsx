import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntertainmentMediaClient from "./EntertainmentMediaClient";

export const metadata: Metadata = {
  title: "SEO for Entertainment Companies & Media SEO | Echo5 Digital",
  description:
    "Echo5 Digital provides specialized SEO services for entertainment and media brands, using audience-focused strategies and AI-driven tools to boost discoverability, engagement, and online visibility.",
  alternates: {
    canonical: "/industries/entertainment-media",
  },
};

const faqData = [
  {
    question: "Why is SEO important for the entertainment and media industry?",
    answer:
      "SEO helps entertainment and media brands reach wider audiences, stay relevant in search results, and increase engagement with their content. It ensures your productions, events, and channels are discoverable by the people actively searching for them.",
  },
  {
    question: "How can SEO help media companies attract more viewers?",
    answer:
      "SEO optimizes your content — from video descriptions to blog posts — for higher search rankings, making it easier for your target audience to discover your content through optimized keywords and local search tactics.",
  },
  {
    question: "What distinguishes Echo5 Digital's entertainment SEO services?",
    answer:
      "We offer industry-specific expertise with comprehensive strategies including audience-focused keyword research, content optimization, technical SEO, local SEO, link building, and ongoing analytics tailored to entertainment and media brands.",
  },
  {
    question: "How is SEO success measured for entertainment and media brands?",
    answer:
      "Success is measured through organic traffic growth, keyword rankings, audience engagement, and conversion rates — giving you a clear picture of how SEO is driving real business results.",
  },
  {
    question: "Does Echo5 Digital handle international SEO for media brands?",
    answer:
      "Yes. We specialize in international SEO tailored for different markets globally, helping production companies, media agencies, and content creators reach audiences across the USA, India, and beyond.",
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
  name: "Entertainment and Media SEO Services",
  description:
    "Echo5 Digital is an entertainment and media SEO company providing audience-centric keyword research, content optimization, technical SEO, local SEO, link building, and ongoing analytics for production companies, media agencies, and content creators.",
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
  serviceType: "Digital Marketing",
  url: "https://echo5digital.com/industries/entertainment-media",
};

export default function EntertainmentMediaPage() {
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
      <EntertainmentMediaClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
