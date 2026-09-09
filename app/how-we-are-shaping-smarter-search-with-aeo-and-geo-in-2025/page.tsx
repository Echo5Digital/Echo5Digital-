import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "How We Are Shaping Smarter Search with AEO and GEO in 2025",
  description:
    "In 2025, we're not chasing search trends we're engineering them. See how our custom AEO + GEO blueprint is redefining visibility, one query and one city at a time.",
  alternates: {
    canonical: "https://echo5digital.com/how-we-are-shaping-smarter-search-with-aeo-and-geo-in-2025/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How We Are Shaping Smarter Search with AEO and GEO in 2025",
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
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
    "In 2025, we're not chasing search trends we're engineering them. See how our custom AEO + GEO blueprint is redefining visibility, one query and one city at a time.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://echo5digital.com/how-we-are-shaping-smarter-search-with-aeo-and-geo-in-2025/",
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
