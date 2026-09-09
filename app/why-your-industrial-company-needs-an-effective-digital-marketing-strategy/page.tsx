import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Why Your Industrial Company Needs an Effective Digital Marketing Strategy | Echo5 Digital Blog",
  description:
    "Industrial buyers already research online before calling a sales rep. Here's why manufacturing, fabrication, and logistics companies can't afford to skip digital marketing.",
  alternates: {
    canonical:
      "https://echo5digital.com/why-your-industrial-company-needs-an-effective-digital-marketing-strategy/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Your Industrial Company Needs an Effective Digital Marketing Strategy",
  datePublished: "2025-07-24",
  dateModified: "2025-07-24",
  author: {
    "@type": "Person",
    name: "shani",
  },
  publisher: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://echo5digital.com/logo.png",
    },
  },
  description:
    "Industrial buyers already research online before calling a sales rep. Here's why manufacturing, fabrication, and logistics companies can't afford to skip digital marketing.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://echo5digital.com/why-your-industrial-company-needs-an-effective-digital-marketing-strategy/",
  },
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <ArticleClient />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
