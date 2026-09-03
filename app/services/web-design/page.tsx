import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import WebDesignClient from "./WebDesignClient";

export const metadata: Metadata = {
  title: "Professional Web Design Services | Echo5 Digital",
  description:
    "Echo5 Digital designs premium, mobile-first websites for small and mid-sized businesses in Houston, Sugar Land, and across the U.S. — built for conversions and SEO from day one.",
  alternates: {
    canonical: "https://echo5digital.com/services/web-design",
  },
};

const faqData = [
  {
    question: "What types of websites does Echo5 Digital design?",
    answer:
      "Echo5 Digital designs business websites, service-industry sites, landing pages, and marketing-integrated web properties for small and mid-sized businesses across a wide range of industries.",
  },
  {
    question: "Are Echo5 Digital websites mobile-friendly?",
    answer:
      "Yes. All websites designed by Echo5 Digital are built mobile-first and are fully responsive across devices.",
  },
  {
    question: "Do the websites come SEO-ready?",
    answer:
      "Yes. Every website is built with SEO-ready HTML structure, semantic markup, fast load performance, and Core Web Vitals optimization baked in from the start.",
  },
  {
    question: "Can Echo5 Digital design a website for my Houston-area business?",
    answer:
      "Yes. Echo5 Digital is based in Houston and Sugar Land, Texas and specializes in serving local small and mid-sized businesses as well as national U.S. clients.",
  },
  {
    question: "What technology does Echo5 Digital use to build websites?",
    answer:
      "Echo5 Digital builds websites using Next.js with the App Router, TypeScript, Tailwind CSS, and is optimized for deployment on Vercel with MongoDB-ready architecture.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Web Design Services",
  description:
    "Echo5 Digital designs premium, mobile-first websites for small and mid-sized businesses in Houston, Sugar Land, and across the U.S. — built for conversions and SEO from day one.",
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
    url: "https://echo5digital.com",
  },
  areaServed: [
    { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sugar Land", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "Web Design",
  url: "https://echo5digital.com/services/web-design",
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

export default function WebDesignPage() {
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
      <main>
        <Section spacing="sm" background="default">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/solutions" },
              { label: "Web Design", href: "/services/web-design" },
            ]}
          />
        </Section>
        <WebDesignClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}