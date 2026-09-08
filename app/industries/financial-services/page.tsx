import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinancialServicesClient from "./FinancialServicesClient";

export const metadata: Metadata = {
  title: "Financial Services SEO & SEO for Financial Services | Echo5 Digital",
  description:
    "Echo5 Digital specializes in SEO for financial services, offering tailored, compliance-focused strategies that help your firm rank higher, drive qualified traffic, and build credibility with your audience.",
  alternates: {
    canonical: "/industries/financial-services",
  },
};

const faqData = [
  {
    question: "How can SEO help my financial services firm attract more clients?",
    answer:
      "SEO helps your firm rank higher in search engine results, making it easier for potential clients to find you when they search for financial services online. This increased visibility leads to more website traffic and, ultimately, more clients.",
  },
  {
    question: "Why is compliance important in SEO for financial services?",
    answer:
      "Compliance is crucial in the financial industry to ensure that your marketing efforts adhere to industry regulations. Our SEO strategies are designed to be compliant while effectively attracting and converting clients.",
  },
  {
    question: "How does content marketing build trust in the financial sector?",
    answer:
      "Content marketing allows your firm to demonstrate expertise, transparency, and trustworthiness. By providing valuable, compliant content, you can build stronger relationships with potential clients and improve your search engine rankings.",
  },
  {
    question: "What role does local SEO play for financial institutions?",
    answer:
      "Local SEO is essential for financial services firms that serve specific geographic areas. It ensures your firm appears in local search results, helping you attract clients within your target regions.",
  },
  {
    question: "How does Echo5 Digital integrate social media with SEO for financial services?",
    answer:
      "We integrate social media with SEO by promoting your content across platforms, building backlinks, and engaging with your audience. This enhances your online presence and drives more traffic to your website.",
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
  name: "Financial Services SEO",
  description:
    "Echo5 Digital is a financial services SEO company providing compliance-focused keyword research, content marketing, technical SEO, local SEO, link building, social media, and Google Ads services for banks, credit unions, advisors, and investment firms.",
  provider: {
    "@type": "Organization",
    name: "Echo5 Digital",
    url: "https://echo5digital.com",
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
  serviceType: "Digital Marketing",
  url: "https://echo5digital.com/industries/financial-services",
};

export default function FinancialServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <FinancialServicesClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
