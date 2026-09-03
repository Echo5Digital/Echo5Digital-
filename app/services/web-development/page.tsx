import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
  title: "Web Development Company Houston | Echo5 Digital",
  description:
    "Echo5 Digital builds high-performance, scalable websites using Next.js, TypeScript, and Tailwind CSS for businesses in Houston, Sugar Land, and across the U.S. Fast, accessible, and marketing-ready.",
  alternates: {
    canonical: "https://echo5digital.com/services/web-development",
  },
};

const faqData = [
  {
    question: "What web development technologies does Echo5 Digital use?",
    answer:
      "Echo5 Digital builds with Next.js (App Router), TypeScript, Tailwind CSS, and MongoDB-ready architecture, deployed on Vercel for optimal performance.",
  },
  {
    question: "Are the websites Echo5 Digital builds accessible?",
    answer:
      "Yes. All builds meet WCAG 2.1 AA accessibility standards and include ARIA labels and keyboard-accessible navigation.",
  },
  {
    question: "Can Echo5 Digital integrate a CMS into my website?",
    answer:
      "Yes. Echo5 Digital builds with CMS-ready architecture so content can be managed and updated with minimal technical effort.",
  },
  {
    question: "How does web development at Echo5 Digital connect to marketing?",
    answer:
      "Every site Echo5 Digital builds is structured for SEO, AEO, and integration with the agency's AI Marketing Employee system, so your website functions as an active growth tool.",
  },
  {
    question: "Does Echo5 Digital serve clients outside of Houston?",
    answer:
      "Yes. While Echo5 Digital is based in Houston and Sugar Land, Texas, the team serves clients nationally across the United States.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
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
  serviceType: "Web Development",
  description:
    "Echo5 Digital builds high-performance, scalable websites using Next.js, TypeScript, and Tailwind CSS for businesses in Houston, Sugar Land, and across the U.S.",
  areaServed: [
    { "@type": "City", name: "Houston", containedIn: "Texas" },
    { "@type": "City", name: "Sugar Land", containedIn: "Texas" },
    { "@type": "Country", name: "United States" },
  ],
  url: "https://echo5digital.com/services/web-development",
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
  { label: "Web Development", href: "/services/web-development" },
];

export default function WebDevelopmentPage() {
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
      <WebDevelopmentClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}