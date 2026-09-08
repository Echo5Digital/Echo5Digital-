import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Echo5 Digital | AI Marketing Agency in Houston, TX",
  description:
    "Echo5 Digital is a Houston-based AI-powered digital marketing and web development agency serving small and mid-sized businesses in Texas and nationwide. Learn how we work.",
  alternates: {
    canonical: "https://echo5digital.com/about-us",
  },
};

const faqData = [
  {
    question: "Where is Echo5 Digital located?",
    answer:
      "Echo5 Digital is headquartered in Houston and Sugar Land, Texas. The agency also has operations support in Kochi, Kerala, India, enabling around-the-clock execution capacity.",
  },
  {
    question: "Does Echo5 Digital work with businesses outside of Houston?",
    answer:
      "Yes. While Echo5 Digital primarily serves businesses in Houston and Sugar Land, Texas, it works with small and mid-sized businesses across the United States.",
  },
  {
    question: "How can I contact Echo5 Digital?",
    answer:
      "You can reach Echo5 Digital by email at hello@echo5digital.com or by phone at 713-489-7004.",
  },
  {
    question: "Is Echo5 Digital a fully automated agency?",
    answer:
      "No. Echo5 Digital uses agentic AI to execute marketing tasks at scale, but human strategists oversee all outputs, maintain client relationships, and guide strategy at every stage of the engagement.",
  },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Echo5 Digital | AI Marketing Agency in Houston, TX",
  description:
    "Echo5 Digital is a Houston-based AI-powered digital marketing and web development agency serving small and mid-sized businesses in Texas and nationwide.",
  url: "https://echo5digital.com/about-us",
  mainEntity: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    email: "hello@echo5digital.com",
    telephone: "713-489-7004",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston / Sugar Land",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Houston",
        containedIn: "Texas",
      },
      {
        "@type": "City",
        name: "Sugar Land",
        containedIn: "Texas",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    description:
      "AI-powered digital marketing and web development agency serving small and mid-sized businesses in Texas and nationwide.",
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <AboutClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}