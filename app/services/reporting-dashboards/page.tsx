import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReportingDashboardsClient from "./ReportingDashboardsClient";

export const metadata: Metadata = {
  title: "Marketing Reporting Dashboards | Echo5 Digital",
  description:
    "Echo5 Digital builds custom marketing reporting dashboards that unify your SEO, ads, social, and CRM data into one real-time view — so Houston-area and national businesses always know what's working.",
  alternates: {
    canonical: "https://echo5digital.com/services/reporting-dashboards",
  },
};

const faqData = [
  {
    question: "What is a marketing reporting dashboard?",
    answer:
      "A marketing reporting dashboard is a centralized view that pulls data from all your marketing platforms — SEO tools, Google Ads, Meta Ads, social media, and CRM — into one place so you can track performance without switching between tools.",
  },
  {
    question: "What is the Client Command Center?",
    answer:
      "The Client Command Center is Echo5 Digital's proprietary dashboard concept that gives clients a single real-time view of all their marketing and lead generation performance metrics.",
  },
  {
    question: "Can the dashboard be customized to my business's KPIs?",
    answer:
      "Yes. Echo5 Digital designs each dashboard around the specific metrics and goals that matter most to your business, rather than using a one-size-fits-all template.",
  },
  {
    question: "How does the reporting dashboard connect to the AI Marketing Employee?",
    answer:
      "Dashboard data feeds directly into Echo5 Digital's AI Marketing Employee performance-response flow, enabling the system to identify optimization opportunities and adjust campaigns based on real results.",
  },
  {
    question: "Do I need technical knowledge to use the dashboard?",
    answer:
      "No. Echo5 Digital designs dashboards for business owners and marketing managers, not engineers, and provides training so you can interpret your data with confidence.",
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
  name: "Marketing Reporting Dashboards",
  description:
    "Echo5 Digital builds custom marketing reporting dashboards that unify your SEO, ads, social, and CRM data into one real-time view — so Houston-area and national businesses always know what's working.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston / Sugar Land",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  url: "https://echo5digital.com/services/reporting-dashboards",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/solutions" },
  { label: "Reporting Dashboards", href: "/services/reporting-dashboards" },
];

export default function ReportingDashboardsPage() {
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
      <Breadcrumbs items={breadcrumbItems} />
      <ReportingDashboardsClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}