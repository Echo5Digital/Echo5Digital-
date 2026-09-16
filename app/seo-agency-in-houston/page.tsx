import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HoustonSEOClient from "./HoustonSEOClient";

export const metadata: Metadata = {
  title: "SEO Agency in Houston | Echo5 Digital",
  description:
    "Echo5 Digital is a Houston SEO agency helping local businesses grow organic traffic through keyword research, technical audits, content strategy, and custom SEO plans.",
  alternates: {
    canonical: "https://echo5digital.com/seo-agency-in-houston",
  },
};

const faqItems = [
  {
    question: "What is SEO and why does my Houston business need it?",
    answer:
      "SEO (Search Engine Optimization) is the process of improving your website so it ranks higher in organic search results. For Houston businesses, SEO means showing up when local customers search for your products or services, driving qualified traffic without paying for every click.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "Most businesses start seeing meaningful improvements in rankings and organic traffic within 3 to 6 months. Timelines vary based on your industry's competitiveness, your website's current health, and the consistency of ongoing optimization.",
  },
  {
    question: "What are the key components of an effective SEO strategy?",
    answer:
      "An effective SEO strategy combines technical site health, on-page optimization, keyword-driven content, local relevance signals, and off-site authority building — all working together so search engines see your business as the best answer to your customers' queries.",
  },
  {
    question: "Can you guarantee a #1 ranking on Google?",
    answer:
      "No ethical SEO agency can guarantee a specific ranking position, since search algorithms are constantly evolving and influenced by many factors outside any agency's control. We focus on sustainable, white-hat strategies that deliver measurable, long-term growth in visibility and traffic.",
  },
  {
    question: "Does mobile optimization affect my SEO rankings?",
    answer:
      "Yes. Google uses mobile-first indexing, meaning it primarily evaluates the mobile version of your site for ranking. A slow, poorly optimized mobile experience can significantly hurt your search visibility, so mobile performance is a core part of our technical audits.",
  },
  {
    question: "What's the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO covers everything you control directly on your website — content, title tags, headings, internal links, and site structure. Off-page SEO covers external signals like backlinks and citations that build your domain's authority and trustworthiness in the eyes of search engines.",
  },
  {
    question: "How often do you update our website's content for SEO?",
    answer:
      "Content cadence depends on your plan and industry, but most engagements include ongoing blog posts and page updates each month to keep your site fresh, target new keywords, and maintain relevance with search engines.",
  },
  {
    question: "What tools do you use to track and analyze SEO performance?",
    answer:
      "We use a combination of industry-standard platforms — including Google Search Console, Google Analytics, and enterprise-grade keyword and rank-tracking tools — paired with a live client dashboard so you can see rankings, traffic, and conversions in real time.",
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
  name: "SEO Agency in Houston",
  description:
    "Echo5 Digital is a Houston-based SEO agency providing keyword research, technical audits, content strategy, and custom SEO execution plans for local businesses.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    telephone: "713-489-7004",
    email: "sales@echo5digital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sugar Land",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "State", name: "Texas" },
  ],
  serviceType: "Search Engine Optimization",
  url: "https://echo5digital.com/seo-agency-in-houston",
};

export default function SEOAgencyHoustonPage() {
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
      <HoustonSEOClient faqItems={faqItems} />
      <Footer
        email="sales@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
