import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import GBPClient from "./GBPClient";

export const metadata: Metadata = {
  title: "Google Business Profile Management | Echo5 Digital Houston",
  description:
    "Echo5 Digital manages and optimizes Google Business Profiles for Houston and Sugar Land businesses. Boost your local map pack visibility with AI-powered GBP management.",
  alternates: {
    canonical: "https://echo5digital.com/services/google-business-profile",
  },
};

const faqData = [
  {
    question: "What does Google Business Profile management include?",
    answer:
      "Echo5 Digital's GBP management includes profile setup, category and attribute optimization, photo and post management, Q&A monitoring, review tracking, and regular performance reporting.",
  },
  {
    question: "Why is Google Business Profile important for local businesses?",
    answer:
      "Your Google Business Profile is often the first thing potential customers see in local search results and Google Maps. An optimized profile increases visibility, builds trust, and drives calls, directions, and website visits.",
  },
  {
    question: "Can Echo5 Digital help if my Google Business Profile is already set up?",
    answer:
      "Yes. Echo5 Digital can audit an existing profile, identify optimization gaps, and take over ongoing management to improve your local search performance.",
  },
  {
    question: "How does AI assist with Google Business Profile management?",
    answer:
      "Echo5 Digital's agentic AI system helps automate GBP post scheduling, review response alerts, and performance monitoring, while the human oversight team ensures all content and responses align with your brand.",
  },
  {
    question: "How do I get started with GBP management?",
    answer:
      "Contact Echo5 Digital at 713-489-7004, email hello@echo5digital.com, or complete the lead form on this page to schedule a consultation.",
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

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/solutions" },
          { label: "Google Business Profile", href: "/services/google-business-profile" },
        ]}
      />
      <GBPClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}