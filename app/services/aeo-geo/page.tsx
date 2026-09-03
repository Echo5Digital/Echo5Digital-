import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import AeoGeoClient from "./AeoGeoClient";

export const metadata: Metadata = {
  title: "AEO & GEO Agency – AI Answer Optimization | Echo5 Digital",
  description:
    "Echo5 Digital is a specialist AEO and GEO agency helping businesses get cited in AI-generated answers on Google SGE, ChatGPT, and Bing. Serving Houston, TX and nationally.",
  alternates: {
    canonical: "https://echo5digital.com/services/aeo-geo",
  },
};

const faqData = [
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "Answer Engine Optimization (AEO) is the practice of structuring website content so that AI-powered search platforms — such as Google's AI Overviews, Bing Copilot, and voice assistants — can extract and surface your business's information as a direct answer to user queries.",
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the practice of optimizing content to be cited or referenced by large language models (LLMs) like ChatGPT, Google Gemini, and Perplexity AI when they generate responses to user questions.",
  },
  {
    question: "How is AEO different from traditional SEO?",
    answer:
      "Traditional SEO focuses on ranking in the standard list of search results (blue links). AEO focuses on getting your content selected as the direct answer shown by AI search engines, which often appears above or instead of traditional results.",
  },
  {
    question: "Does Echo5 Digital offer AEO and GEO alongside SEO?",
    answer:
      "Yes. Echo5 Digital offers AEO and GEO as part of a comprehensive AI-powered digital marketing strategy that complements traditional SEO rather than replacing it.",
  },
  {
    question: "Which industries benefit most from AEO and GEO?",
    answer:
      "Industries where consumers frequently ask specific questions — such as healthcare, dental, legal, home services, and professional services — tend to see the greatest benefit from AEO and GEO, as these are the query types AI answer engines most commonly respond to.",
  },
  {
    question: "Is AEO and GEO available to businesses outside of Houston?",
    answer:
      "Yes. Echo5 Digital provides AEO and GEO services to clients nationally across the United States, in addition to its primary service area of Houston and Sugar Land, Texas.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AEO & GEO Services – Answer Engine Optimization & Generative Engine Optimization",
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
  serviceType: "Digital Marketing",
  description:
    "Echo5 Digital offers specialist AEO and GEO services helping businesses appear in AI-generated answers on Google SGE, ChatGPT, and Bing Copilot through structured content, schema markup, and direct answer formatting.",
  areaServed: [
    { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sugar Land", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "Country", name: "United States" },
  ],
  url: "https://echo5digital.com/services/aeo-geo",
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

export default function AeoGeoPage() {
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
        <Section spacing="sm" background="default">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/solutions" },
              { label: "AEO & GEO", href: "/services/aeo-geo" },
            ]}
          />
        </Section>
        <AeoGeoClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}