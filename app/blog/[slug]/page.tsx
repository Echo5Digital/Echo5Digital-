import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: "[Post Title] | Echo5 Digital Blog",
    description:
      "[Post-specific meta description drawn from the article's direct answer block — unique per post, 140-160 characters.]",
    alternates: {
      canonical: `https://echo5digital.com/blog/${params.slug}`,
    },
  };
}

// Sample post data — in production this would be fetched from a CMS/DB by slug
const samplePost = {
  title: "How AI is Transforming Digital Marketing for Small Businesses",
  category: "AI Marketing",
  publishDate: "June 12, 2025",
  readTime: "8 min read",
  author: "Echo5 Digital Team",
  heroImage: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  quickAnswer:
    "AI is transforming digital marketing by automating repetitive tasks, personalizing content at scale, and delivering data-driven insights that help small and mid-sized businesses compete with larger enterprises. Tools like AI-powered ad optimization, chatbots, and predictive analytics allow businesses to reduce marketing costs while improving targeting accuracy and ROI. Echo5 Digital harnesses these AI capabilities to build smarter growth engines for Houston-area businesses and clients across the U.S.",
  tableOfContents: [
    { id: "what-is-ai-marketing", label: "What Is AI Marketing?" },
    { id: "key-benefits", label: "Key Benefits for Small Businesses" },
    { id: "ai-seo", label: "AI and SEO: A Powerful Combination" },
    { id: "google-ads", label: "Smarter Google Ads with AI" },
    { id: "social-media", label: "AI-Driven Social Media Marketing" },
    { id: "getting-started", label: "Getting Started with AI Marketing" },
  ],
  relatedPosts: [
    {
      slug: "what-is-aeo-answer-engine-optimization",
      title: "What Is AEO? Answer Engine Optimization Explained",
      category: "AEO & GEO",
      date: "May 28, 2025",
      excerpt:
        "Answer Engine Optimization (AEO) ensures your content is cited by AI tools like ChatGPT and Google AI Overviews. Learn how to structure content for AI citation.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      slug: "local-seo-guide-houston-businesses",
      title: "The Complete Local SEO Guide for Houston Businesses",
      category: "Local SEO",
      date: "May 15, 2025",
      excerpt:
        "Rank higher in Google Maps and local search results. This guide covers Google Business Profile optimization, local citations, and review strategies for Houston SMBs.",
      image: "https://images.pexels.com/photos/15353653/pexels-photo-15353653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      slug: "google-ads-roi-small-business",
      title: "Maximizing Google Ads ROI for Small Business Owners",
      category: "Google Ads",
      date: "April 30, 2025",
      excerpt:
        "Learn how to structure campaigns, choose the right bidding strategies, and use negative keywords to stretch your ad budget further and drive more qualified leads.",
      image: "https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: samplePost.title,
  datePublished: "2025-06-12",
  dateModified: "2025-06-12",
  author: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
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
    "AI is transforming digital marketing by automating repetitive tasks, personalizing content at scale, and delivering data-driven insights that help small and mid-sized businesses compete with larger enterprises.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://echo5digital.com/blog/how-ai-is-transforming-digital-marketing",
  },
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: samplePost.title, href: `/blog/${params.slug}` },
  ];

  return (
    <div style={{ backgroundColor: "#0A0F1E", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <Section spacing="sm" background="default">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>
      <BlogPostClient post={samplePost} />
      <Footer
        email="hello@echo5digital.com"
        // placeholder — replace with verified number
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </div>
  );
}