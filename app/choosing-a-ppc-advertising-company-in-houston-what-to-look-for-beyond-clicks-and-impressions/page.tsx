import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Choosing a PPC Advertising Company in Houston: Key Factors",
  description:
    "Discover how to choose the right PPC company in Houston by looking beyond clicks—focus on strategy, ROI, and long-term business growth.",
  alternates: {
    canonical:
      "https://echo5digital.com/choosing-a-ppc-advertising-company-in-houston-what-to-look-for-beyond-clicks-and-impressions/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Choosing a PPC Advertising Company in Houston: What to Look for Beyond Clicks and Impressions",
  datePublished: "2025-08-20",
  dateModified: "2025-08-20",
  author: {
    "@type": "Person",
    name: "Shani",
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
    "Discover how to choose the right PPC company in Houston by looking beyond clicks—focus on strategy, ROI, and long-term business growth.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://echo5digital.com/choosing-a-ppc-advertising-company-in-houston-what-to-look-for-beyond-clicks-and-impressions/",
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
