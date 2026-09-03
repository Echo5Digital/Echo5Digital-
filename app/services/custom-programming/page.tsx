import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import CustomProgrammingClient from "./CustomProgrammingClient";

export const metadata: Metadata = {
  title: "Custom Programming Company Houston | Echo5 Digital",
  description:
    "Echo5 Digital builds custom software, API integrations, and business automation tools for companies in Houston, Sugar Land, and nationwide. Tailored solutions that connect your systems and accelerate growth.",
  alternates: {
    canonical: "https://echo5digital.com/services/custom-programming",
  },
};

const faqData = [
  {
    question: "What kinds of custom programming does Echo5 Digital offer?",
    answer:
      "Echo5 Digital builds custom business tools, API integrations, automation scripts, internal dashboards, and third-party system connectors tailored to each client's specific needs.",
  },
  {
    question: "Can Echo5 Digital integrate my existing software with new systems?",
    answer:
      "Yes. API-first integration is a core custom programming capability at Echo5 Digital, allowing existing tools and data sources to be connected efficiently.",
  },
  {
    question: "How does custom programming complement digital marketing?",
    answer:
      "Custom programming at Echo5 Digital often connects marketing platforms, automates reporting, extends CRM functionality, and feeds into the AI Marketing Employee system for a fully integrated growth stack.",
  },
  {
    question: "Does Echo5 Digital take on small custom programming projects?",
    answer:
      "Echo5 Digital works with small and mid-sized businesses and evaluates each project based on scope and fit. Contact the team to discuss your specific requirements.",
  },
  {
    question: "Is Echo5 Digital's custom programming team based in the U.S.?",
    answer:
      "Echo5 Digital is headquartered in Houston and Sugar Land, Texas, with operations support in Kochi, Kerala, India, enabling extended development capacity for custom projects.",
  },
];

const faqJsonLd = {
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Programming Services",
  description:
    "Echo5 Digital builds custom software, API integrations, and business automation tools for companies in Houston, Sugar Land, and nationwide.",
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
  url: "https://echo5digital.com/services/custom-programming",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/solutions" },
  { label: "Custom Programming", href: "/services/custom-programming" },
];

export default function CustomProgrammingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <CustomProgrammingClient faqData={faqData} />

        {/* Local Relevance Section — static, crawlable */}
        <Section background="elevated" spacing="md" withDivider>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston &amp; Sugar Land, Texas
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
              Echo5 Digital provides custom programming solutions to businesses in Houston and Sugar
              Land, Texas. Local businesses with unique operational needs — from custom client
              portals to marketing automation integrations — can work with Echo5 Digital's technical
              team to build solutions specifically designed for their workflows and growth objectives.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
              style={{ color: "#9CA3AF" }}
            >
              <span className="flex items-center gap-2">
                {/* Phone — verified fact */}
                <span style={{ color: "#A855F7" }}>📞</span>
                <a
                  href="tel:713-489-7004"
                  className="hover:text-white transition-colors"
                  style={{ color: "#9CA3AF" }}
                >
                  713-489-7004
                </a>
              </span>
              <span className="flex items-center gap-2">
                <span style={{ color: "#A855F7" }}>✉️</span>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="hover:text-white transition-colors"
                  style={{ color: "#9CA3AF" }}
                >
                  hello@echo5digital.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <span style={{ color: "#A855F7" }}>📍</span>
                <span>Houston / Sugar Land, Texas</span>
              </span>
            </div>
          </div>
        </Section>
      </main>
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}