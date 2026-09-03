import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import CrmAutomationClient from "./CrmAutomationClient";

export const metadata: Metadata = {
  title: "CRM Automation Services for Small Business | Echo5 Digital",
  description:
    "Echo5 Digital sets up and manages CRM automation for small and mid-sized businesses in Houston, Sugar Land, and across the U.S. — turning leads into customers with automated follow-up and pipeline workflows.",
  alternates: {
    canonical: "https://echo5digital.com/services/crm-automation",
  },
};

const faqData = [
  {
    question: "What is CRM automation and why does my business need it?",
    answer:
      "CRM automation connects your marketing and sales processes so leads are automatically captured, followed up with, and tracked through your pipeline — reducing manual work and improving conversion rates.",
  },
  {
    question: "What CRM platforms does Echo5 Digital work with?",
    answer:
      "Contact Echo5 Digital directly to discuss CRM platform compatibility for your specific setup. The team designs automation workflows tailored to the systems you use.",
  },
  {
    question: "How does CRM automation integrate with digital marketing?",
    answer:
      "Echo5 Digital connects CRM automation to your lead generation channels — Google Ads, social media, SEO, and web forms — so every lead flows into an automated follow-up sequence without manual intervention.",
  },
  {
    question: "How long does it take to set up CRM automation?",
    answer:
      "Setup timelines vary by complexity. Echo5 Digital conducts a workflow audit first and then provides a scoped timeline before implementation begins.",
  },
  {
    question: "Can CRM automation work alongside the AI Marketing Employee?",
    answer:
      "Yes. CRM automation is designed to integrate with Echo5 Digital's AI Marketing Employee system, creating a connected pipeline from ad click to closed lead.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM Automation Services",
  serviceType: "CRM Automation",
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
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "State", name: "Texas" },
    { "@type": "Country", name: "United States" },
  ],
  description:
    "Echo5 Digital sets up and manages CRM automation for small and mid-sized businesses in Houston, Sugar Land, and across the U.S. — turning leads into customers with automated follow-up and pipeline workflows.",
  url: "https://echo5digital.com/services/crm-automation",
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

export default function CrmAutomationPage() {
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/solutions" },
          { label: "CRM Automation", href: "/services/crm-automation" },
        ]}
      />
      <CrmAutomationClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        // placeholder: verified phone from business facts
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}