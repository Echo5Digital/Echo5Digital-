import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing Plans | AI Marketing Employee – Echo5 Digital",
  description:
    "View Echo5 Digital's transparent pricing for AI-powered marketing plans and web services. Find the right tier for your business and see exactly what's included at every level.",
  alternates: {
    canonical: "https://echo5digital.com/pricing",
  },
};

const faqData = [
  {
    question: "Are there setup or onboarding fees?",
    answer:
      "Specific onboarding fee details are outlined on the pricing page for each plan tier. Visitors are encouraged to review the plan cards or contact Echo5 Digital directly at hello@echo5digital.com for a full cost breakdown.",
  },
  {
    question: "Can I change plans after I start?",
    answer:
      "Yes. Echo5 Digital's tiered structure is designed to allow clients to upgrade or adjust their plan as their business needs evolve. Contact the team to discuss plan transitions.",
  },
  {
    question: "Is there a long-term contract required?",
    answer:
      "Contract terms vary by plan tier and are detailed on the pricing page. Echo5 Digital encourages prospects to reach out at hello@echo5digital.com or call 713-489-7004 for specifics before committing.",
  },
  {
    question: "What if I only need one service, not a full plan?",
    answer:
      "Echo5 Digital offers à la carte standalone services including web design, development, CRM automation, and more, which can be purchased independently of the AI Marketing Employee plans.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <PricingClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}