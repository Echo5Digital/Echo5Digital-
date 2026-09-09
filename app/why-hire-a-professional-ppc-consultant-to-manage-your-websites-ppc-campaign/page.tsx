import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Why Hire a Professional PPC Consultant for Your Website's PPC Campaigns?",
  description:
    "Discover the benefits of hiring a professional PPC consultant to manage your website's PPC campaigns. Learn how expert management can optimize ad spend, improve ROI, and drive targeted traffic to your site.",
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
    "Discover the benefits of hiring a professional PPC consultant to manage your website's PPC campaigns. Learn how expert management can optimize ad spend, improve ROI, and drive targeted traffic to your site.",
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
