import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "How Social Media Management Companies Help Boost Brand Visibility? | Echo5 Digital Blog",
  description:
    "See how professional social media management turns scattered posting into a strategic system that grows reach, engagement, and revenue for Houston businesses.",
  alternates: {
    canonical: "https://echo5digital.com/how-social-media-management-companies-help-boost-brand-visibility/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Social Media Management Companies Help Boost Brand Visibility?",
  datePublished: "2025-09-17",
  dateModified: "2025-09-17",
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
    "See how professional social media management turns scattered posting into a strategic system that grows reach, engagement, and revenue for Houston businesses.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://echo5digital.com/how-social-media-management-companies-help-boost-brand-visibility/",
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
