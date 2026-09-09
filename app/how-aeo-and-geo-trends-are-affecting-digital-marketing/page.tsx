import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Future of SEO: AEO and GEO Explained | Echo5 Digital",
  description:
    "Discover how AEO and GEO are transforming SEO. Learn how AI-driven search optimization shapes the future of digital marketing.",
  alternates: {
    canonical: "https://echo5digital.com/how-aeo-and-geo-trends-are-affecting-digital-marketing/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How AEO and GEO Trends Are Affecting Digital Marketing",
  datePublished: "2025-09-26",
  dateModified: "2025-09-26",
  author: {
    "@type": "Person",
    name: "Echo5-8",
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
    "Discover how AEO and GEO are transforming SEO. Learn how AI-driven search optimization shapes the future of digital marketing.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://echo5digital.com/how-aeo-and-geo-trends-are-affecting-digital-marketing/",
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
