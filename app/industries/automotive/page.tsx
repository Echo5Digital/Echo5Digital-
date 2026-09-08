import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutomotiveMarketingClient from "./AutomotiveMarketingClient";

export const metadata: Metadata = {
  title: "Automotive SEO & SEO for Car Dealerships | Echo5 Digital",
  description:
    "Echo5 Digital is an automotive SEO company using industry-specific strategies and AI-driven tools to drive sales for car dealerships and service centers.",
  alternates: {
    canonical: "/industries/automotive",
  },
};

const faqData = [
  {
    question:
      "How can SEO help my automotive business attract more customers?",
    answer:
      "SEO enables higher search rankings, making it easier for customers to discover your dealership or service center when they search for vehicles or services. Keyword optimization, improved user experience, and AI personalization all work together to increase your visibility and attract more customers.",
  },
  {
    question: "What role does AI play in automotive SEO?",
    answer:
      "AI provides keyword research, content optimization, lead nurturing, and real-time analytics tools that help us adapt to market trends and deliver more effective SEO strategies for automotive businesses.",
  },
  {
    question: "How does local SEO benefit car dealerships?",
    answer:
      "Local SEO ensures your dealership appears in location-based search results, driving leads from nearby customers who are actively searching for a car dealership or service in their area.",
  },
  {
    question:
      "How does Echo5 Digital integrate social media with automotive SEO?",
    answer:
      "We integrate social media with SEO through campaign optimization, AI-driven audience analysis, and targeted traffic generation — ensuring your social presence contributes directly to your overall SEO strategy.",
  },
  {
    question:
      "What does Echo5 Digital's automotive branding service include?",
    answer:
      "Our automotive branding service includes custom website design, logo creation, and brand identity development tailored to your target audience in a competitive automotive market.",
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
  name: "Automotive SEO Services",
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
  },
  serviceType: "SEO",
  areaServed: ["Houston, TX", "Sugar Land, TX", "United States"],
  description:
    "Automotive SEO providing AI-powered keyword research, content optimization, technical SEO, local SEO, social media integration, branding, and Google Ads services for car dealerships and service centers.",
  url: "https://echo5digital.com/industries/automotive",
};

export default function AutomotiveMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <div className="bg-[#0A0F1E] min-h-screen">
        <AutomotiveMarketingClient faqData={faqData} />
      </div>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}