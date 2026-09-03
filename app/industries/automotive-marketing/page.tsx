import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import AutomotiveMarketingClient from "./AutomotiveMarketingClient";

export const metadata: Metadata = {
  title: "Automotive Marketing Agency | AI-Powered Campaigns",
  description:
    "Echo5 Digital helps auto dealerships and repair shops grow with AI-powered SEO, Google Ads, social media, and reputation management. Serving Houston, TX and nationwide.",
  alternates: {
    canonical: "/industries/automotive-marketing",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Automotive Marketing", href: "/industries/automotive-marketing" },
];

const faqData = [
  {
    question:
      "What digital marketing services does Echo5 Digital offer automotive businesses?",
    answer:
      "Echo5 Digital offers local SEO, Google Ads management, Google Business Profile optimization, social media marketing, content marketing, and online reputation management — all tailored to automotive dealerships and service businesses.",
  },
  {
    question: "How does AI marketing help automotive businesses?",
    answer:
      "AI-driven tools continuously monitor keyword rankings, ad performance, and competitor activity, enabling faster optimizations and more consistent lead generation than traditional manual management.",
  },
  {
    question:
      "Does Echo5 Digital work with automotive businesses outside Houston?",
    answer:
      "Yes. While Echo5 Digital is headquartered in Houston and Sugar Land, Texas, we serve automotive clients nationally across the U.S.",
  },
  {
    question: "How quickly can an automotive business get started?",
    answer:
      "After an initial strategy session, Echo5 Digital can typically onboard a new automotive client and begin campaign execution within a short ramp-up period aligned to the chosen service tier.",
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
  name: "Automotive Digital Marketing",
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
  serviceType: "Digital Marketing",
  areaServed: ["Houston, TX", "Sugar Land, TX", "United States"],
  description:
    "AI-powered digital marketing for automotive dealerships and repair shops including local SEO, Google Ads, social media, and reputation management.",
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
        <Section spacing="sm" maxWidth="2xl">
          <Breadcrumbs items={breadcrumbItems} />
        </Section>
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