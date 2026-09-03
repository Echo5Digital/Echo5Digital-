import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import HomeServicesMarketingClient from "./HomeServicesMarketingClient";

export const metadata: Metadata = {
  title: "Home Services Marketing Agency | AI Lead Generation | Echo5",
  description:
    "Echo5 Digital helps home service businesses generate more leads with AI-powered Local SEO, Google Ads, reputation management, and done-for-you digital marketing.",
  alternates: {
    canonical: "https://echo5digital.com/industries/home-services-marketing",
  },
};

const faqData = [
  {
    question: "What types of home service businesses does Echo5 Digital work with?",
    answer:
      "Echo5 Digital works with a broad range of home service businesses including HVAC, plumbing, electrical, landscaping, cleaning services, painting, pest control, and general contracting, among others.",
  },
  {
    question: "How quickly can a home service business start generating leads?",
    answer:
      "Paid advertising campaigns such as Google Ads can begin generating leads within the first few weeks of launch. Organic strategies like Local SEO build momentum over time and typically show measurable improvements within 60 to 90 days.",
  },
  {
    question: "Does Echo5 Digital offer service-area-targeted campaigns for home service companies?",
    answer:
      "Yes. Echo5 Digital builds geo-targeted Local SEO and Google Ads strategies designed to help home service businesses appear prominently in search results for the specific cities, neighborhoods, and ZIP codes they serve.",
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
  name: "Home Services Marketing — AI-Powered Lead Generation",
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
  description:
    "Echo5 Digital provides AI-powered digital marketing for home service businesses including Local SEO, Google Ads, Google Business Profile management, reputation management, and done-for-you marketing campaigns.",
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "State", name: "Texas" },
    { "@type": "Country", name: "United States" },
  ],
  url: "https://echo5digital.com/industries/home-services-marketing",
};

export default function HomeServicesMarketingPage() {
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: "Home Services Marketing", href: "/industries/home-services-marketing" },
        ]}
      />
      <main>
        <HomeServicesMarketingClient faqData={faqData} />
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}