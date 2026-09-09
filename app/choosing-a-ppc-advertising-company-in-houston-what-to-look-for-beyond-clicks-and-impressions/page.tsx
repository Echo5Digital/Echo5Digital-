import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Choosing a PPC Advertising Company in Houston | Echo5 Digital Blog",
  description:
    "Not all clicks are created equal. Learn what separates effective Houston PPC agencies from those focused on vanity metrics, and what to look for beyond clicks and impressions.",
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
    "Not all clicks are created equal. Learn what separates effective Houston PPC agencies from those focused on vanity metrics, and what to look for beyond clicks and impressions.",
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
