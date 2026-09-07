import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import DentalMarketingClient from "./DentalMarketingClient";

export const metadata: Metadata = {
  title: "Best Dental SEO Company & Dental SEO Expert | Echo5 Digital",
  description:
    "Echo5 Digital is the best dental SEO company, using industry-specific strategies and AI-driven tools to boost visibility and patient appointments for dental practices.",
  alternates: {
    canonical: "https://echo5digital.com/industries/dental",
  },
};

const faqData = [
  {
    question: "How can SEO help my dental practice attract more patients?",
    answer:
      "SEO helps your dental practice rank higher in search engine results, making your services discoverable to patients actively searching for dental care. Through keyword optimization, local SEO, and AI-driven personalization, we increase your visibility and drive more qualified traffic to your website — turning searchers into booked appointments.",
  },
  {
    question: "What role does AI play in dental SEO?",
    answer:
      "AI enhances dental SEO through advanced tools for keyword research, content optimization, lead generation, and real-time analytics. It allows us to identify patient-focused search terms, personalize content, and continuously refine campaigns based on performance data — delivering faster, more precise results than traditional SEO alone.",
  },
  {
    question: "How does local SEO benefit dental practices?",
    answer:
      "Local SEO ensures your practice appears in local search results and on Google Maps, driving leads from potential patients searching for dental care near them. This includes Google Business Profile optimization, local citation building, and location-specific content that puts your practice on the map.",
  },
  {
    question: "How does Echo5 Digital integrate social media with dental SEO?",
    answer:
      "We integrate social media with SEO by optimizing campaigns across Facebook, Instagram, and YouTube, using AI to analyze engagement and drive targeted traffic to your website. This holistic approach reinforces your search visibility while building patient trust and brand awareness.",
  },
  {
    question: "What does Echo5 Digital's dental branding service include?",
    answer:
      "Our dental branding service includes custom website design, logo creation, and brand identity development. We work to create a brand that resonates with your target audience — building a modern, patient-friendly online presence that stands out in a competitive market.",
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
  name: "Dental SEO Services",
  description:
    "Echo5 Digital is a dental SEO company providing AI-powered keyword research, content optimization, technical SEO, local SEO, lead generation, social media, branding, and Google Ads services for dental practices.",
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
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "Digital Marketing",
  url: "https://echo5digital.com/industries/dental",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Dental Marketing", href: "/industries/dental" },
];

export default function DentalMarketingPage() {
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
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <DentalMarketingClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}