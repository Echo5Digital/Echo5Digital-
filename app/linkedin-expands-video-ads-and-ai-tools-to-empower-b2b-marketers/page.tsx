import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "LinkedIn Expands Video Ads and AI Tools to Empower B2B Marketers - Echo5 Digital",
  description:
    "See how LinkedIn's expanded video ads and new AI-powered Accelerate tools help B2B marketers boost engagement, streamline campaigns, and improve ROI.",
  alternates: {
    canonical: "https://echo5digital.com/linkedin-expands-video-ads-and-ai-tools-to-empower-b2b-marketers/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LinkedIn Expands Video Ads and AI Tools to Empower B2B Marketers",
  datePublished: "2024-06-06T10:52:29+00:00",
  dateModified: "2024-06-06T10:59:14+00:00",
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
    "See how LinkedIn's expanded video ads and new AI-powered Accelerate tools help B2B marketers boost engagement, streamline campaigns, and improve ROI.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://echo5digital.com/linkedin-expands-video-ads-and-ai-tools-to-empower-b2b-marketers/",
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
