import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Echo5 Digital | Houston AI Marketing Agency",
  description:
    "Get in touch with Echo5 Digital at 713-489-7004 or hello@echo5digital.com. Serving Houston, Sugar Land, TX businesses and national clients with AI-powered marketing.",
  alternates: {
    canonical: "https://echo5digital.com/contact",
  },
};

const faqData = [
  {
    question: "How can I contact Echo5 Digital?",
    answer:
      "You can reach Echo5 Digital by phone at 713-489-7004, by email at hello@echo5digital.com, or by submitting the contact form on this page.",
  },
  {
    question: "What areas does Echo5 Digital serve?",
    answer:
      "Echo5 Digital primarily serves businesses in Houston and Sugar Land, Texas. The agency also works with clients nationally across the United States.",
  },
  {
    question: "What should I expect after submitting a contact form?",
    answer:
      "After submitting the form, a member of the Echo5 Digital team will follow up to learn more about your business goals and recommend the right services or AI Marketing Employee plan.",
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

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Echo5 Digital",
  url: "https://echo5digital.com/contact",
  description:
    "Get in touch with Echo5 Digital for AI-powered digital marketing, web development, and custom programming services in Houston and Sugar Land, Texas.",
  mainEntity: {
    "@type": "Organization",
    name: "Echo5 Digital",
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
    areaServed: [
      { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Sugar Land", containedInPlace: { "@type": "State", name: "Texas" } },
      { "@type": "Country", name: "United States" },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <ContactClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}