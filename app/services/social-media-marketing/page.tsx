import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import SocialMediaMarketingClient from "./SocialMediaMarketingClient";

export const metadata: Metadata = {
  title: "Done-for-You Social Media Marketing Services | Echo5 Digital",
  description:
    "Echo5 Digital delivers AI-powered, done-for-you social media marketing for small businesses in Houston, TX and across the U.S. — content, scheduling, and community management included.",
  alternates: {
    canonical: "https://echo5digital.com/services/social-media-marketing",
  },
};

const faqData = [
  {
    question: "What does done-for-you social media marketing mean?",
    answer:
      "Done-for-you means Echo5 Digital handles every aspect of your social media presence — strategy, content creation, scheduling, and engagement — so business owners can focus on running their business.",
  },
  {
    question: "Which social media platforms does Echo5 Digital manage?",
    answer:
      "Echo5 Digital manages platforms including Facebook, Instagram, and LinkedIn, with platform selection tailored to each client's industry and target audience.",
  },
  {
    question: "How does AI assist with social media marketing?",
    answer:
      "Echo5 Digital's agentic AI system generates content ideas, drafts posts, schedules publishing, and monitors engagement data, while the human oversight team reviews content for brand accuracy and creative quality.",
  },
  {
    question: "Is social media marketing different from Meta Ads?",
    answer:
      "Yes. Social media marketing at Echo5 Digital primarily covers organic content strategy and community management, while Meta Ads is a separate paid advertising service. The two can be combined for a comprehensive social strategy.",
  },
  {
    question: "How do I start social media marketing with Echo5 Digital?",
    answer:
      "Contact Echo5 Digital at 713-489-7004, email hello@echo5digital.com, or complete the lead form on this page to schedule a social media strategy consultation.",
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

export default function SocialMediaMarketingPage() {
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
          { label: "Social Media Marketing", href: "/services/social-media-marketing" },
        ]}
      />
      <SocialMediaMarketingClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        // Verified phone number from business facts
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}