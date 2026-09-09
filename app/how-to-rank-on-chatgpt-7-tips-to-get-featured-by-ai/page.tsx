import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "How to Rank on ChatGPT: 7 Tips to Get Featured by AI | Echo5 Digital Blog",
  description:
    "AI-driven search is changing how businesses get discovered. Here are 7 practical ways to make your content more likely to be referenced in ChatGPT's answers.",
  alternates: {
    canonical: "https://echo5digital.com/how-to-rank-on-chatgpt-7-tips-to-get-featured-by-ai/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Rank on ChatGPT: 7 Tips to Get Featured by AI",
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
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
    "AI-driven search is changing how businesses get discovered. Here are 7 practical ways to make your content more likely to be referenced in ChatGPT's answers.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://echo5digital.com/how-to-rank-on-chatgpt-7-tips-to-get-featured-by-ai/",
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
