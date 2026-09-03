import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import SocialMediaClient from "./SocialMediaClient";

export const metadata: Metadata = {
  title: "AI Social Media Management for Small Business | Echo5",
  description:
    "Echo5 Digital's AI Marketing Employee manages your social media done-for-you — content creation, scheduling, and strategy across platforms, with human oversight and performance tracking.",
  alternates: {
    canonical: "https://echo5digital.com/ai-marketing-employee/social-media",
  },
};

const faqData = [
  {
    question: "Which social media platforms does this tier cover?",
    answer:
      "The Social Media tier covers major platforms relevant to your business. Specific platform coverage is confirmed during onboarding based on where your target audience is most active.",
  },
  {
    question: "Who creates the social media content?",
    answer:
      "Echo5 Digital's agentic AI systems draft content ideas, captions, and post formats. Echo5's human team then reviews and approves content before it is scheduled and published.",
  },
  {
    question: "Can I provide input or approve posts before they go live?",
    answer:
      "Yes. The client oversight workflow allows you to review and provide feedback on content through the Client Command Center dashboard before posts are published.",
  },
  {
    question: "How is social media performance measured?",
    answer:
      "Performance metrics such as engagement rates, reach, and follower growth are tracked and reported through Echo5 Digital's client dashboard, giving you visibility into how your social presence is growing.",
  },
];

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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Social Media Management – Echo5 Digital",
  description:
    "Echo5 Digital's AI Marketing Employee Social Media tier is a done-for-you social media management service for small and mid-sized businesses. It uses agentic AI to handle content creation, scheduling, caption writing, and performance reporting across major social platforms, with human oversight to ensure brand consistency.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    telephone: "713-489-7004",
    email: "hello@echo5digital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "Social Media Management",
  url: "https://echo5digital.com/ai-marketing-employee/social-media",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "AI Marketing Employee", href: "/ai-marketing-employee" },
  { label: "Social Media", href: "/ai-marketing-employee/social-media" },
];

export default function AISocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Quick Answer Block */}
      <Section background="elevated" spacing="sm" withDivider>
        <div
          className="rounded-xl border border-purple-500/30 p-5 md:p-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
          }}
          role="note"
          aria-label="Quick Answer"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Quick Answer
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
            The Social Media tier of Echo5 Digital&apos;s AI Marketing Employee is a done-for-you social media management service for small and mid-sized businesses. It uses agentic AI to handle content creation, scheduling, caption writing, and performance reporting across major social platforms, with human oversight to ensure brand consistency. It is available to businesses in Houston, Texas, and nationally across the U.S.
          </p>
        </div>
      </Section>

      <SocialMediaClient faqData={faqData} />

      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}