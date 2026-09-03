import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleAdsClient from "./GoogleAdsClient";

export const metadata: Metadata = {
  title: "Google Ads Management for Small Business | Echo5 Digital",
  description:
    "Echo5 Digital manages AI-optimized Google Ads campaigns for small and mid-sized businesses in Houston, TX and nationwide. Drive qualified leads with smarter PPC management.",
  alternates: {
    canonical: "https://echo5digital.com/services/google-ads",
  },
};

const faqData = [
  {
    question: "What types of Google Ads campaigns does Echo5 Digital manage?",
    answer:
      "Echo5 Digital manages Google Search campaigns, Display campaigns, and Performance Max campaigns, tailored to each client's goals, industry, and budget.",
  },
  {
    question: "How does AI improve Google Ads performance?",
    answer:
      "Echo5 Digital's agentic AI system automates bid adjustments, monitors performance anomalies, and identifies audience refinement opportunities in real time, while human strategists guide overall campaign direction and budget allocation.",
  },
  {
    question: "What is a typical process for starting Google Ads with Echo5 Digital?",
    answer:
      "The process begins with a discovery and strategy session, followed by keyword research, campaign setup, ad copywriting, conversion tracking installation, launch, and then ongoing optimization and reporting cycles.",
  },
  {
    question: "Does Echo5 Digital manage Google Ads for national businesses or only Houston?",
    answer:
      "Echo5 Digital manages Google Ads for clients in Houston and Sugar Land, Texas as its primary market, and also serves national U.S. businesses.",
  },
  {
    question: "How do I get started with Google Ads management?",
    answer:
      "Contact Echo5 Digital at 713-489-7004, email hello@echo5digital.com, or fill out the lead form on this page to schedule a paid search consultation.",
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

export default function GoogleAdsPage() {
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
          { label: "Google Ads", href: "/services/google-ads" },
        ]}
      />
      <main>
        <GoogleAdsClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}