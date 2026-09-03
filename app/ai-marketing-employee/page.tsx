import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import AIMarketingEmployeeClient from "./AIMarketingEmployeeClient";

export const metadata: Metadata = {
  title: "AI Marketing Employee – Agentic AI Growth System | Echo5",
  description:
    "Echo5 Digital's AI Marketing Employee is a done-for-you agentic AI growth system covering SEO, AEO, ads, social, and content — with human oversight for small businesses.",
  alternates: {
    canonical: "https://echo5digital.com/ai-marketing-employee",
  },
};

const faqData = [
  {
    question: "What is the AI Marketing Employee?",
    answer:
      "The AI Marketing Employee is Echo5 Digital's flagship product — an agentic AI growth system that continuously executes marketing activities across SEO, AEO, Google Ads, social media, and content, supervised by Echo5's human team.",
  },
  {
    question: "How is this different from hiring a marketing agency?",
    answer:
      "Unlike a traditional agency that assigns account managers to manually execute tasks, the AI Marketing Employee uses agentic AI systems to run continuously, adapting to performance signals in near real-time — at a fraction of the cost of a full-service retainer or in-house hire.",
  },
  {
    question: "Do humans review the AI's work?",
    answer:
      "Yes. Echo5 Digital's human team provides oversight, strategy guidance, and quality control over all AI-driven outputs, ensuring accuracy, brand alignment, and performance.",
  },
  {
    question: "What tiers or plans are available?",
    answer:
      "The AI Marketing Employee is available in multiple tiers including SEO+AEO, Social Media, Google Ads, Content, Website Growth, and a Super Growth plan. Details and pricing are available on the pricing page.",
  },
  {
    question: "What is the client dashboard?",
    answer:
      "The Client Command Center is Echo5 Digital's reporting dashboard where clients can monitor campaign performance, review AI-generated outputs, and communicate with the human oversight team in real time.",
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
  name: "AI Marketing Employee",
  description:
    "Echo5 Digital's AI Marketing Employee is a done-for-you agentic AI growth system covering SEO, AEO, ads, social, and content — with human oversight for small businesses.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
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
    { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sugar Land", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "AI-Powered Digital Marketing",
  url: "https://echo5digital.com/ai-marketing-employee",
};

export default function AIMarketingEmployeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Marketing Employee", href: "/ai-marketing-employee" },
        ]}
      />
      <AIMarketingEmployeeClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}