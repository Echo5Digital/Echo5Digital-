import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProfessionalServicesClient from "./ProfessionalServicesClient";

export const metadata: Metadata = {
  title: "Professional Services Marketing Agency | Echo5 Digital",
  description:
    "Echo5 Digital helps accountants, consultants, financial advisors, and professional service firms grow with AI-powered SEO, content marketing, Google Ads, and CRM automation.",
  alternates: {
    canonical: "/industries/professional-services-marketing",
  },
};

const faqData = [
  {
    question: "What types of professional service businesses does Echo5 Digital work with?",
    answer:
      "Echo5 Digital works with accountants, financial advisors, consultants, insurance agencies, HR firms, staffing companies, and other professional service businesses that sell expertise and want to attract more qualified clients online.",
  },
  {
    question: "How does content marketing help professional service firms?",
    answer:
      "High-quality content positions professional service firms as trusted authorities in their field, improves organic search rankings, and attracts clients who are already researching solutions — making it one of the most effective long-term channels for this industry.",
  },
  {
    question: "What is AEO and why does it matter for professional services?",
    answer:
      "Answer Engine Optimization (AEO) helps professional service firms appear as direct answers in AI-powered search tools and featured snippets, capturing high-intent prospects who are asking specific questions that your firm can answer.",
  },
  {
    question: "Can Echo5 Digital integrate with my firm's existing CRM?",
    answer:
      "Echo5 Digital offers CRM automation services designed to streamline lead capture and follow-up workflows, and can work with common CRM platforms to improve your firm's client acquisition process.",
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
  name: "Professional Services Digital Marketing",
  description:
    "Echo5 Digital provides AI-powered digital marketing for professional service firms including accountants, consultants, financial advisors, and insurance agencies. Services include SEO, AEO/GEO, content marketing, Google Ads, web design, and CRM automation.",
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
  serviceType: [
    "SEO",
    "AEO/GEO",
    "Local SEO",
    "Content Marketing",
    "Google Ads",
    "Web Design",
    "CRM Automation",
    "Reporting Dashboards",
  ],
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Professional Services Marketing", href: "/industries/professional-services-marketing" },
];

export default function ProfessionalServicesMarketingPage() {
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
      <ProfessionalServicesClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        // placeholder phone — replace with verified number
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}