import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfessionalServicesClient from "./ProfessionalServicesClient";

export const metadata: Metadata = {
  title: "SEO for Professional Services | Echo5 Digital",
  description:
    "Echo5 Digital delivers SEO strategies built for professional services firms — legal, financial, consulting, healthcare, real estate, and more — to build trust and generate qualified leads.",
  alternates: {
    canonical: "/industries/professional-services",
  },
};

const faqData = [
  {
    question: "How does SEO attract clients for professional services firms?",
    answer:
      "SEO puts your firm in front of prospects actively searching for the specific services you offer. By ranking for high-intent, trust-driven search terms, you capture demand from people who are already evaluating firms in your field.",
  },
  {
    question: "What role does local SEO play for professional services?",
    answer:
      "Local SEO ensures your firm shows up in the Google Map Pack and local search results when nearby prospects search for your services — critical since a large share of local searches lead to a visit or contact within a day.",
  },
  {
    question: "What are the benefits of content optimization?",
    answer:
      "Optimized, authoritative content builds trust with prospective clients while signaling expertise to search engines. Firms that publish regular, well-optimized content consistently generate more qualified leads than those that don't.",
  },
  {
    question: "Why is technical SEO important for a professional services website?",
    answer:
      "Technical SEO ensures your site loads quickly, is easy to crawl, and works well on mobile devices — removing barriers that would otherwise prevent your content from ranking, regardless of how strong that content is.",
  },
  {
    question: "How does social media integrate with SEO for professional services?",
    answer:
      "A consistent social media presence reinforces credibility and drives additional touchpoints with prospects, complementing organic search visibility and strengthening your overall digital trust signals.",
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
  name: "SEO for Professional Services",
  description:
    "SEO, content optimization, local SEO, technical SEO, and link building strategies for professional services firms including legal, financial, consulting, and healthcare.",
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
  serviceType: ["SEO", "Local SEO", "Technical SEO", "Content Marketing", "Link Building"],
};

export default function ProfessionalServicesPage() {
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
      <ProfessionalServicesClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
