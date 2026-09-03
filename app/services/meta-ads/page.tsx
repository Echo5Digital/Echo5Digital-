import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import MetaAdsClient from "./MetaAdsClient";

export const metadata: Metadata = {
  title: "Meta Ads Management — Facebook & Instagram | Echo5 Digital",
  description:
    "Echo5 Digital manages AI-optimized Meta Ads campaigns on Facebook and Instagram for businesses in Houston, TX and across the U.S. Reach your audience and drive real results.",
  alternates: {
    canonical: "https://echo5digital.com/services/meta-ads",
  },
};

const faqData = [
  {
    question: "What does Echo5 Digital's Meta Ads management include?",
    answer:
      "Services include campaign strategy, audience segmentation, ad copywriting, creative direction, A/B testing, Meta Pixel setup, conversion tracking, retargeting campaigns, and regular performance reporting.",
  },
  {
    question: "What platforms do Meta Ads run on?",
    answer:
      "Meta Ads run across Facebook and Instagram, including placements in feeds, stories, reels, and the audience network, giving businesses broad visibility across Meta's platforms.",
  },
  {
    question: "How does AI enhance Meta Ads performance?",
    answer:
      "Echo5 Digital's agentic AI monitors audience performance signals, identifies creative fatigue, and automates testing cycles to surface winning ad combinations, while human strategists guide creative direction and budget decisions.",
  },
  {
    question: "Is Meta Ads a good fit for local Houston businesses?",
    answer:
      "Yes. Meta Ads offer powerful geo-targeting capabilities that allow Houston and Sugar Land businesses to reach potential customers within specific zip codes, cities, or radius areas on Facebook and Instagram.",
  },
  {
    question: "How can I get started with Meta Ads through Echo5 Digital?",
    answer:
      "Call 713-489-7004, email hello@echo5digital.com, or complete the lead form on this page to schedule a paid social strategy consultation.",
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

export default function MetaAdsPage() {
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
          { label: "Meta Ads", href: "/services/meta-ads" },
        ]}
      />
      <MetaAdsClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}