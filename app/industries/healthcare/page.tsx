import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import HealthcareMarketingClient from "./HealthcareMarketingClient";

export const metadata: Metadata = {
  title: "Healthcare SEO & SEO for Hospitals | Echo5 Digital",
  description:
    "Echo5 Digital is a hospitals and healthcare SEO company helping providers attract more patients and enhance visibility in a competitive healthcare market.",
  alternates: {
    canonical: "https://echo5digital.com/industries/healthcare",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare SEO Services",
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
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "State", name: "Texas" },
    { "@type": "Country", name: "United States" },
  ],
  description:
    "Healthcare SEO and SEO for hospitals, helping providers attract more patients and enhance visibility in a competitive healthcare market.",
  url: "https://echo5digital.com/industries/healthcare",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Healthcare Marketing", href: "/industries/healthcare" },
];

export default function HealthcareMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <HealthcareMarketingClient />
      </main>
      <Footer
        email="hello@echo5digital.com"
        // placeholder phone number below
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
