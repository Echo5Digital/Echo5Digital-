import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TravelClient from "./TravelClient";

export const metadata: Metadata = {
  title: "SEO for Travel Industry & Tourism SEO | Echo5 Digital",
  description:
    "Echo5 Digital specializes in Travel and Tourism SEO, utilizing advanced strategies and AI-driven tools to enhance your online presence, attract global audiences, and increase bookings.",
  alternates: {
    canonical: "/industries/travel",
  },
};

const faqData = [
  {
    question: "How can SEO help my travel and tourism business attract more travelers?",
    answer:
      "SEO helps your travel and tourism business rank higher in search engine results, making it easier for potential travelers to find you when they search for destinations, accommodations, or travel services online. By optimizing your site for relevant keywords, improving user experience, and using AI to personalize content, you can increase your visibility and attract more global travelers.",
  },
  {
    question: "What role does AI play in travel and tourism SEO?",
    answer:
      "AI enhances travel SEO by providing advanced tools for keyword research, content optimization, personalization, and real-time analytics. AI-driven solutions help us adapt to changing travel trends, target the right audience, and deliver more effective marketing strategies.",
  },
  {
    question: "How does local SEO benefit tourism businesses?",
    answer:
      "Local SEO is essential for tourism businesses that serve specific destinations or regions. It ensures your business appears in local search results, driving bookings from travelers searching for local experiences and services.",
  },
  {
    question: "How does Echo5 Digital integrate social media with travel and tourism SEO?",
    answer:
      "We integrate social media with SEO by optimizing your social media campaigns, using AI to analyze audience behavior, and driving targeted traffic to your website. This holistic approach ensures that your social media efforts contribute to your overall SEO strategy and attract more travelers.",
  },
  {
    question: "What does Echo5 Digital's travel branding service include?",
    answer:
      "Our travel branding services include custom website design, logo creation, brand identity development, and more. We work closely with you to create a brand that resonates with your target audience and stands out in the competitive travel market.",
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
  name: "Travel and Tourism SEO",
  description:
    "Echo5 Digital is a travel SEO company providing AI-driven keyword research, content optimization, technical SEO, e-commerce booking integration, local SEO, social media, branding, and Google Ads services for travel agencies and tourism businesses.",
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
  url: "https://echo5digital.com/industries/travel",
};

export default function TravelPage() {
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
      <TravelClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
