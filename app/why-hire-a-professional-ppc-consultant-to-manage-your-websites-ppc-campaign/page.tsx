import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Why Hire A Professional PPC Consultant to Manage Your Website's PPC Campaign? | Echo5 Digital Blog",
  description:
    "Running PPC in-house is more than picking keywords. Here's what a professional PPC consultant actually brings to your campaign that's hard to replicate internally.",
  alternates: {
    canonical:
      "https://echo5digital.com/why-hire-a-professional-ppc-consultant-to-manage-your-websites-ppc-campaign/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Hire A Professional PPC Consultant to Manage Your Website's PPC Campaign?",
  datePublished: "2024-06-06",
  dateModified: "2024-06-06",
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
    "Running PPC in-house is more than picking keywords. Here's what a professional PPC consultant actually brings to your campaign that's hard to replicate internally.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://echo5digital.com/why-hire-a-professional-ppc-consultant-to-manage-your-websites-ppc-campaign/",
  },
};

export default function ArticlePage() {
  return (
    <div style={{ backgroundColor: "#0A0F1E", minHeight: "100vh" }}>
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
    </div>
  );
}
