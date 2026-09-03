import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import WebsiteMaintenanceClient from "./WebsiteMaintenanceClient";

export const metadata: Metadata = {
  title: "Website Maintenance Service | Echo5 Digital Houston",
  description:
    "Echo5 Digital keeps your website fast, secure, and up to date with ongoing maintenance plans for small businesses in Houston, Sugar Land, and across the U.S. Never worry about your site again.",
  alternates: {
    canonical: "https://echo5digital.com/services/website-maintenance",
  },
};

const faqData = [
  {
    question: "What does website maintenance include?",
    answer:
      "Echo5 Digital's website maintenance covers software and plugin updates, security monitoring, uptime monitoring, Core Web Vitals performance checks, backup management, content updates, and bug fixes.",
  },
  {
    question: "Can Echo5 Digital maintain a website they didn't build?",
    answer:
      "Contact Echo5 Digital to discuss maintenance for an existing site. The team conducts a site audit to assess compatibility before beginning any maintenance engagement.",
  },
  {
    question: "How often is website maintenance performed?",
    answer:
      "Maintenance tasks are performed on a scheduled basis as part of your plan. Echo5 Digital monitors sites continuously for uptime and security issues.",
  },
  {
    question: "Will website maintenance help my SEO?",
    answer:
      "Yes. Keeping your website fast, secure, and technically sound supports Core Web Vitals scores and overall site health, which are factors in search engine ranking performance.",
  },
  {
    question: "How do I report an issue with my website?",
    answer:
      "Echo5 Digital provides a defined client communication workflow as part of every maintenance plan. Reach out via email at hello@echo5digital.com or by phone at 713-489-7004 to report urgent issues.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Maintenance Service",
  description:
    "Echo5 Digital offers ongoing website maintenance services for small and mid-sized businesses in Houston, Sugar Land, Texas, and nationally. Maintenance plans cover software updates, security monitoring, uptime tracking, performance optimization, content updates, and backup management.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "City", name: "Sugar Land" },
      { "@type": "Country", name: "United States" },
    ],
  },
  serviceType: "Website Maintenance",
  url: "https://echo5digital.com/services/website-maintenance",
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

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/solutions" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
];

export default function WebsiteMaintenancePage() {
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
      <div className="bg-[#0A0F1E]">
        <Section spacing="sm" maxWidth="2xl">
          <Breadcrumbs items={breadcrumbItems} />
        </Section>
        <WebsiteMaintenanceClient faqData={faqData} />
      </div>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}