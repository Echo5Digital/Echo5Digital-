import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import FitnessMarketingClient from "./FitnessMarketingClient";

export const metadata: Metadata = {
  title: "Fitness Studio & Gym Digital Marketing | Echo5 Digital",
  description:
    "Echo5 Digital helps gyms, fitness studios, and personal trainers grow memberships with AI-powered social media, Google Ads, local SEO, and content marketing services.",
  alternates: {
    canonical: "/industries/fitness-marketing",
  },
};

const faqData = [
  {
    question:
      "What marketing services does Echo5 Digital offer for gyms and fitness studios?",
    answer:
      "Echo5 Digital offers social media marketing, Google Ads, Meta Ads, local SEO, Google Business Profile optimization, content marketing, and web design — all tailored to fitness businesses looking to grow memberships and bookings.",
  },
  {
    question:
      "Can AI marketing help a small fitness studio compete with large gym chains?",
    answer:
      "Yes. Echo5 Digital's AI-powered marketing system enables small fitness studios to execute consistent, high-quality marketing across multiple channels, leveling the playing field against larger competitors with bigger marketing budgets.",
  },
  {
    question:
      "How does social media marketing help fitness businesses attract new members?",
    answer:
      "Consistent, on-brand social media content builds community awareness, showcases your facility and coaches, and drives local discovery — all managed by Echo5 Digital's AI Marketing Employee model so you don't have to do it yourself.",
  },
  {
    question:
      "Does Echo5 Digital work with individual personal trainers or only studios?",
    answer:
      "Echo5 Digital works with gyms, fitness studios, and individual personal trainers who want to grow their client base through digital marketing.",
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
  name: "Fitness Studio & Gym Digital Marketing",
  description:
    "Echo5 Digital delivers AI-powered digital marketing for gyms, fitness studios, and personal trainers, including social media management, Google Ads, local SEO, and content marketing.",
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
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
    "Local SEO",
    "Google Business Profile Optimization",
    "Content Marketing",
    "Web Design",
  ],
};

export default function FitnessMarketingPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <FitnessMarketingClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}