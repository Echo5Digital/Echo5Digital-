import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Echo5 Digital",
  description:
    "See how Echo5 Digital's AI-powered marketing system drives real outcomes for small and mid-sized businesses in Houston, Sugar Land, Texas, and across the U.S.",
  alternates: {
    canonical: "https://echo5digital.com/results",
  },
};

const faqData = [
  {
    question: "What kinds of businesses are featured in Echo5 Digital's case studies?",
    answer:
      "Echo5 Digital works with small and mid-sized businesses across a range of industries including dental, healthcare, home services, roofing, construction, fitness, aesthetics, real estate, professional services, e-commerce, automotive, and law firms.",
  },
  {
    question: "Are the results shown on this page guaranteed?",
    answer:
      "Results shown are representative client outcomes and are clearly labeled as such. Individual results vary based on industry, budget, competition, and campaign specifics. Echo5 Digital does not guarantee specific outcomes.",
  },
  {
    question: "Does Echo5 Digital serve clients outside of Houston and Sugar Land?",
    answer:
      "Yes. While Echo5 Digital's primary service area is Houston and Sugar Land, Texas, the agency also works with national U.S. clients across multiple industries.",
  },
];

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Client Results & Case Studies | Echo5 Digital",
  description:
    "See how Echo5 Digital's AI-powered marketing system drives real outcomes for small and mid-sized businesses in Houston, Sugar Land, Texas, and across the U.S.",
  url: "https://echo5digital.com/results",
  publisher: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "713-489-7004",
      email: "hello@echo5digital.com",
      areaServed: ["Houston, TX", "Sugar Land, TX", "United States"],
    },
  },
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

export default function ResultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <ResultsClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        // placeholder phone — replace with verified number if different
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}