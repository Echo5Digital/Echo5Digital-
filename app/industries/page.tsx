import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | Echo5 Digital AI Marketing Agency",
  description:
    "Echo5 Digital delivers AI-powered digital marketing for dental, healthcare, home services, law firms, eCommerce, and more. Tailored strategies for your industry.",
  alternates: {
    canonical: "https://echo5digital.com/industries",
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Industries We Serve | Echo5 Digital AI Marketing Agency",
  description:
    "Echo5 Digital delivers AI-powered digital marketing for dental, healthcare, home services, law firms, eCommerce, and more. Tailored strategies for your industry.",
  url: "https://echo5digital.com/industries",
  publisher: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "713-489-7004",
      email: "hello@echo5digital.com",
      contactType: "customer service",
      areaServed: ["Houston, TX", "Sugar Land, TX", "US"],
    },
  },
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
      />
      <IndustriesClient />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}