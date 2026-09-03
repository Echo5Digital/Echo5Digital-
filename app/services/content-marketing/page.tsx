import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentMarketingClient from "./ContentMarketingClient";

export const metadata: Metadata = {
  title: "AI Content Marketing Services for Business Growth | Echo5 Digital",
  description:
    "Echo5 Digital creates AI-powered content marketing strategies — SEO blogs, AEO-optimized copy, and website content — to grow organic traffic for U.S. businesses.",
  alternates: {
    canonical: "https://echo5digital.com/services/content-marketing",
  },
};

const faqData = [
  {
    question: "What types of content does Echo5 Digital create?",
    answer:
      "Echo5 Digital produces blog posts, SEO-optimized articles, website copy, landing page content, and AEO-structured content designed to appear in AI answer engines and traditional search results.",
  },
  {
    question: "How does AI help with content marketing?",
    answer:
      "Echo5 Digital's agentic AI system researches topics, generates drafts, and optimizes content for SEO and AEO at scale. Human editors then review and refine content to ensure accuracy, brand voice, and quality.",
  },
  {
    question: "What is AEO content optimization?",
    answer:
      "AEO (Answer Engine Optimization) content is structured to directly answer user questions so it can be surfaced by AI-powered answer engines like Google's AI Overviews, ChatGPT, and similar tools. Echo5 Digital incorporates AEO best practices into all content strategies.",
  },
  {
    question: "Can Echo5 Digital create content for my specific industry?",
    answer:
      "Yes. Echo5 Digital creates content for a range of industries including dental, healthcare, home services, roofing, construction, fitness, aesthetics, real estate, law, automotive, and e-commerce.",
  },
  {
    question: "How do I start a content marketing program with Echo5 Digital?",
    answer:
      "Call 713-489-7004, email hello@echo5digital.com, or complete the contact form on this page to begin with a content strategy consultation.",
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

export default function ContentMarketingPage() {
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
          { label: "Content Marketing", href: "/services/content-marketing" },
        ]}
      />
      <ContentMarketingClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}