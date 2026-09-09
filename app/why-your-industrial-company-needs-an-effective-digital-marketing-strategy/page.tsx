import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Boost Your Factory's Reach with Industrial Digital Marketing",
  description:
    "Unlock growth with expert industrial digital marketing services. From SEO to lead-gen, discover how factories can thrive in the digital age.",
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
    "Unlock growth with expert industrial digital marketing services. From SEO to lead-gen, discover how factories can thrive in the digital age.",
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
