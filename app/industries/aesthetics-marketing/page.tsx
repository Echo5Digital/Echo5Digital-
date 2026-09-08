import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AestheticsMarketingClient from "./AestheticsMarketingClient";

export const metadata: Metadata = {
  title: "Med Spa & Aesthetics Clinic Marketing | Echo5 Digital",
  description:
    "Echo5 Digital grows med spas and aesthetic clinics with AI-powered local SEO, Google Ads, Meta Ads, social media, and reputation management designed for cosmetic practices.",
  alternates: {
    canonical: "/industries/aesthetics-marketing",
  },
};

const faqData = [
  {
    question:
      "What marketing services does Echo5 Digital provide for med spas and aesthetic clinics?",
    answer:
      "Echo5 Digital provides local SEO, Google Ads, Meta Ads, social media marketing, content marketing, Google Business Profile management, online reputation management, and web design — all tailored to aesthetics and med spa businesses.",
  },
  {
    question: "How does reputation management help aesthetic clinics?",
    answer:
      "Online reputation management from Echo5 Digital helps aesthetics practices monitor and grow their review profiles on Google and other platforms, which directly influences patient trust and local search rankings.",
  },
  {
    question:
      "Can Echo5 Digital handle marketing for multiple aesthetic service lines like Botox, laser, and injectables?",
    answer:
      "Yes. Echo5 Digital creates targeted content, SEO, and ad campaigns for individual treatment categories, helping aesthetics clinics attract high-intent patients for each specific service they offer.",
  },
  {
    question: "Do you serve aesthetics businesses outside of Houston?",
    answer:
      "Yes. Echo5 Digital serves med spas and aesthetic clinics across the United States in addition to its primary market in Houston and Sugar Land, Texas.",
  },
];

const faqJsonLd = {
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Med Spa & Aesthetics Clinic Marketing",
  description:
    "Echo5 Digital provides AI-powered digital marketing for med spas, aesthetic clinics, and cosmetic practices, covering local SEO, Google Ads, Meta Ads, social media management, and online reputation management.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    email: "hello@echo5digital.com",
    telephone: "713-489-7004",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Houston", containedIn: "Texas" },
    { "@type": "City", name: "Sugar Land", containedIn: "Texas" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "Local SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Reputation Management",
    "Google Business Profile",
    "Web Design",
  ],
};

export default function AestheticsMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main>
        <AestheticsMarketingClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}