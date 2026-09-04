import type { Metadata } from "next";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Echo5 Digital – AI Marketing Agency in Houston, TX",
  description:
    "Echo5 Digital is Houston's AI-powered digital marketing agency. Done-for-you SEO, AEO, Google Ads, social media, and web development for small and mid-sized businesses.",
  alternates: {
    canonical: "https://echo5digital.com/",
  },
};

export default function HomePage() {
  const faqData = [
    {
      question: "What is Echo5 Digital?",
      answer:
        "Echo5 Digital is an AI-powered digital marketing agency based in Houston and Sugar Land, Texas. They provide done-for-you marketing services including SEO, AEO, Google Ads, social media management, content marketing, web design, and custom programming for small and mid-sized businesses.",
    },
    {
      question: "How does the AI Marketing Employee work?",
      answer:
        "The AI Marketing Employee is Echo5 Digital's agentic AI growth system that continuously executes marketing tasks — from content creation to ad optimization — under the oversight of a human team. Clients get a dedicated dashboard to monitor performance.",
    },
    {
      question: "Who does Echo5 Digital serve?",
      answer:
        "Echo5 Digital primarily serves small and mid-sized businesses in Houston, Sugar Land, and across Texas, as well as national U.S. clients across industries like dental, healthcare, home services, roofing, fitness, real estate, and more.",
    },
    {
      question: "How do I get started with Echo5 Digital?",
      answer:
        "You can book a demo or fill out the contact form on the Echo5 Digital website. You can also reach them by phone at 713-489-7004 or by email at hello@echo5digital.com.",
    },
  ];

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Echo5 Digital – AI Marketing Agency in Houston, TX",
    description:
      "Echo5 Digital is Houston's AI-powered digital marketing agency. Done-for-you SEO, AEO, Google Ads, social media, and web development for small and mid-sized businesses.",
    url: "https://echo5digital.com/",
    publisher: {
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
      <HomeHeader />
      <HomeClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}