import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocalSEOClient from "./LocalSEOClient";

export const metadata: Metadata = {
  title: "Local SEO Services in Houston & Sugar Land | Echo5 Digital",
  description:
    "Echo5 Digital delivers AI-powered local SEO services for businesses in Houston and Sugar Land, TX. Dominate local search results and attract nearby customers.",
  alternates: {
    canonical: "https://echo5digital.com/services/local-seo",
  },
};

const faqData = [
  {
    question: "What is local SEO and how is it different from regular SEO?",
    answer:
      "Local SEO focuses on optimizing your online presence so your business appears in location-based searches and Google's local map pack, whereas general SEO targets broader, non-geographic rankings. Local SEO includes Google Business Profile optimization, local citations, and geo-targeted content.",
  },
  {
    question: "Which businesses benefit most from local SEO?",
    answer:
      "Small and mid-sized businesses that serve customers in a specific geographic area — such as those in Houston and Sugar Land, TX — benefit most from local SEO. Industries like dental, healthcare, home services, roofing, and professional services are prime candidates.",
  },
  {
    question: "Does Echo5 Digital serve businesses outside Houston?",
    answer:
      "Yes. While Echo5 Digital's primary service area is Houston and Sugar Land, Texas, the agency also serves national U.S. clients needing local SEO for their specific markets.",
  },
  {
    question: "How does AI improve local SEO performance?",
    answer:
      "Echo5 Digital uses an agentic AI system to automate local SEO audits, monitor citations, track review signals, and generate performance reports — all with human oversight to ensure strategic accuracy and quality.",
  },
  {
    question: "How do I get started with local SEO at Echo5 Digital?",
    answer:
      "You can reach Echo5 Digital by calling 713-489-7004, emailing hello@echo5digital.com, or filling out the lead form on this page to book a demo.",
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

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/solutions" },
  { label: "Local SEO", href: "/services/local-seo" },
];

export default function LocalSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <LocalSEOClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}