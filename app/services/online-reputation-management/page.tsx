import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ORMClient from "./ORMClient";

export const metadata: Metadata = {
  title: "Online Reputation Management Services | Echo5 Digital",
  description:
    "Echo5 Digital offers AI-powered online reputation management for small and mid-sized businesses — review monitoring, response management, and brand protection done for you.",
  alternates: {
    canonical: "https://echo5digital.com/services/online-reputation-management",
  },
};

const faqData = [
  {
    question: "What does online reputation management include?",
    answer:
      "Echo5 Digital's ORM service includes review monitoring across key platforms, AI-assisted review response management, review generation strategy, brand mention tracking, and coordination with Local SEO and Google Business Profile efforts to maintain a consistent and positive brand image.",
  },
  {
    question: "How does AI help with reputation management?",
    answer:
      "Echo5 Digital uses AI tools to monitor brand mentions and reviews at scale, draft professional response templates, and identify patterns in customer feedback — all reviewed and refined by a human team before action is taken.",
  },
  {
    question: "Can you remove negative reviews?",
    answer:
      "While individual reviews generally cannot be removed unless they violate platform policies, Echo5 Digital helps suppress negative content by building a stronger volume of genuine positive reviews and optimizing brand presence across authoritative channels.",
  },
  {
    question: "How long does it take to see results from ORM?",
    answer:
      "Reputation improvements are gradual and depend on starting conditions, review volume, and platform response times. Clients typically begin seeing measurable changes in review sentiment and star ratings within 60 to 90 days of consistent effort.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Reputation Management Services",
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
  description:
    "AI-powered online reputation management for small and mid-sized businesses — review monitoring, response management, review generation strategies, and brand mention tracking.",
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  url: "https://echo5digital.com/services/online-reputation-management",
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

export default function OnlineReputationManagementPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/solutions" },
    { label: "Online Reputation Management", href: "/services/online-reputation-management" },
  ];

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
      <Breadcrumbs items={breadcrumbItems} />
      <ORMClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        // placeholder phone number for display
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}