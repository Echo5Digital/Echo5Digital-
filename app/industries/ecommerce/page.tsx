import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcommerceClient from "./EcommerceClient";

export const metadata: Metadata = {
  title: "Ecommerce SEO Agency & Retail SEO | Echo5 Digital",
  description:
    "Echo5 Digital is an e-commerce SEO agency delivering AI-powered SEO, technical optimization, and conversion strategies for online stores and retailers on Shopify, WooCommerce, Magento, and BigCommerce.",
  alternates: {
    canonical: "/industries/ecommerce",
  },
};

const faqData = [
  {
    question: "Which e-commerce platforms does Echo5 Digital specialize in?",
    answer:
      "We specialize in Shopify, WooCommerce, Magento, and BigCommerce, along with custom e-commerce solutions for retailers with unique technical requirements.",
  },
  {
    question: "How does AI enhance e-commerce SEO and marketing?",
    answer:
      "AI powers our keyword research, content optimization, product recommendations, and dynamic pricing strategies — enabling faster execution and more personalized shopper experiences at scale than manual methods alone.",
  },
  {
    question: "Why is custom shopping cart development important?",
    answer:
      "A checkout experience built specifically around your product catalog and customer flow reduces cart abandonment and increases conversion rates compared to a generic, unoptimized template.",
  },
  {
    question: "How does POS system integration work with an online store?",
    answer:
      "We design and integrate point-of-sale systems that unify inventory, orders, and customer data across your online store and physical locations, so operations stay consistent everywhere you sell.",
  },
  {
    question: "Does Echo5 Digital offer a free consultation?",
    answer:
      "Yes. We offer a free consultation to review your current store, identify the highest-impact SEO and conversion opportunities, and outline a strategy tailored to your platform and goals.",
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
  name: "E-commerce & Retail SEO",
  description:
    "AI-powered SEO, technical optimization, custom development, and conversion strategies for e-commerce stores and retail businesses.",
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
    "Technical SEO",
    "Local SEO",
    "Google Ads",
    "Web Development",
    "E-commerce Development",
  ],
};

export default function EcommercePage() {
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
      <EcommerceClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
