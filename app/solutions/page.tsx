import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Solutions | Echo5 Digital Houston",
  description:
    "Explore Echo5 Digital's full suite of AI-powered marketing, web design, development, and automation solutions for small and mid-sized businesses in Houston and nationwide.",
  alternates: {
    canonical: "https://echo5digital.com/solutions",
  },
};

const faqData = [
  {
    question: "What types of solutions does Echo5 Digital provide?",
    answer:
      "Echo5 Digital provides AI-powered digital marketing (SEO, AEO, Google Ads, Meta Ads, social media, content), web design, web development, custom programming, CRM automation, reporting dashboards, and website maintenance.",
  },
  {
    question:
      "Can Echo5 Digital handle both marketing and website development for my business?",
    answer:
      "Yes. Echo5 Digital is a full-service agency covering both marketing execution and technical web development, so clients can manage both disciplines under one roof without coordinating multiple vendors.",
  },
  {
    question: "Do I have to purchase all solutions together?",
    answer:
      "No. Echo5 Digital offers individual services as well as bundled AI Marketing Employee plans. Clients can start with a single service and scale into more comprehensive plans as their needs grow.",
  },
];

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Digital Marketing & Web Solutions | Echo5 Digital Houston",
  description:
    "Explore Echo5 Digital's full suite of AI-powered marketing, web design, development, and automation solutions for small and mid-sized businesses in Houston and nationwide.",
  url: "https://echo5digital.com/solutions",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
    areaServed: ["Houston, TX", "Sugar Land, TX", "United States"],
  },
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

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <SolutionsClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        // placeholder phone number used per business facts
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}