import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FitnessClient from "./FitnessClient";

export const metadata: Metadata = {
  title: "Fitness SEO & Gym SEO | Echo5 Digital",
  description:
    "Echo5 Digital delivers fitness SEO, gym SEO, social media, and Google Ads strategies that fill classes and grow memberships for gyms, studios, and trainers.",
  alternates: {
    canonical: "/industries/fitness",
  },
};

const faqData = [
  {
    question: "How does SEO attract new fitness clients?",
    answer:
      "SEO puts your gym or studio in front of people actively searching for classes, trainers, or fitness options near them. By ranking for high-intent local and service keywords, you capture demand from people who are already looking to join — not just browsing.",
  },
  {
    question: "What role does social media play in fitness marketing?",
    answer:
      "Social media builds community awareness and showcases your facility, coaches, and member results. Consistent, on-brand content on Instagram and TikTok drives local discovery and keeps your gym top-of-mind between visits.",
  },
  {
    question: "How do Google Ads and organic SEO work together?",
    answer:
      "Google Ads delivers immediate traffic and trial sign-ups while SEO builds long-term, compounding visibility. Running both together means you capture ready-to-join prospects now while steadily improving organic rankings for the future.",
  },
  {
    question: "Why does branding matter for a gym or fitness studio?",
    answer:
      "A strong, consistent brand builds trust before a prospect ever visits in person. Cohesive branding across your website, social channels, and ads makes your gym feel more credible and professional than competitors with an inconsistent presence.",
  },
  {
    question: "How do you optimize a fitness website for conversions?",
    answer:
      "We focus on fast load times, mobile-first design, clear calls-to-action for trials and bookings, and frictionless sign-up forms — since the majority of fitness searches and conversions now happen on mobile devices.",
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
  name: "Fitness & Gym Digital Marketing",
  description:
    "SEO, social media, Google Ads, branding, and web development for gyms, fitness studios, and personal trainers.",
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
    "SEO",
    "Local SEO",
    "Social Media Marketing",
    "Google Ads",
    "Branding",
    "Web Development",
  ],
};

export default function FitnessPage() {
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
      <FitnessClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
