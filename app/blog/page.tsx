import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import GetInTouchMarquee from "@/components/GetInTouchMarquee";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "AI Marketing Insights & Tips | Echo5 Digital Blog",
  description:
    "Explore Echo5 Digital's blog for expert insights on AI marketing, SEO, AEO, Google Ads, social media, and digital growth strategies for small and mid-sized businesses.",
  alternates: {
    canonical: "https://echo5digital.com/blog",
  },
};

const faqData = [
  {
    question: "What topics does the Echo5 Digital blog cover?",
    answer:
      "The blog covers AI marketing, SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Google Ads, social media marketing, content strategy, web design, CRM automation, and digital growth for small and mid-sized businesses.",
  },
  {
    question: "Who writes the Echo5 Digital blog?",
    answer:
      "Blog content is produced by the Echo5 Digital team, which combines AI-assisted content creation with human editorial oversight to ensure accuracy and quality.",
  },
];

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Echo5 Digital Blog",
  description:
    "Expert insights on AI marketing, SEO, AEO, Google Ads, social media, and digital growth strategies for small and mid-sized businesses.",
  url: "https://echo5digital.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "713-489-7004",
      email: "hello@echo5digital.com",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Main interactive blog content */}
      <BlogClient faqData={faqData} />

      {/* Local Relevance Section */}
      <Section
        background="transparent"
        spacing="md"
        withDivider
        className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1F2340" }}
          >
            Serving Houston, Sugar Land & Texas Businesses
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(31,35,64,0.7)", fontFamily: "Inter, sans-serif" }}>
            Many Echo5 Digital blog posts address digital marketing challenges relevant to businesses in Houston, Sugar
            Land, and Texas more broadly — including local SEO tactics, Google Business Profile optimization, and
            strategies suited to competitive Texas markets. Our content is built to help Texas-based SMBs grow their
            online presence with real, actionable advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{ color: "rgba(31,35,64,0.6)", fontFamily: "Inter, sans-serif" }}>
            <span className="flex items-center gap-2">
              {/* Phone — verified fact */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {/* verified phone */}
              <a href="tel:7134897004" style={{ color: "rgba(31,35,64,0.6)" }}>713-489-7004</a>
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:hello@echo5digital.com" style={{ color: "rgba(31,35,64,0.6)" }}>hello@echo5digital.com</a>
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Houston / Sugar Land, Texas
            </span>
          </div>
        </div>
      </Section>

      <GetInTouchMarquee />

      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}