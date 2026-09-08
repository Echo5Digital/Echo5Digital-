import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FashionClient from "./FashionClient";

export const metadata: Metadata = {
  title: "Fashion SEO & SEO for Clothing Brands | Echo5 Digital",
  description:
    "Echo5 Digital specializes in Fashion and Apparel SEO, utilizing advanced strategies and AI-driven tools to boost your brand's visibility, drive traffic, and increase conversions in a highly competitive market.",
  alternates: {
    canonical: "/industries/fashion",
  },
};

const faqData = [
  {
    question: "How can SEO help my fashion brand stand out in a crowded market?",
    answer:
      "SEO helps your fashion brand rank higher in search engine results, making it easier for potential customers to find you when they search for products online. By optimizing your site for relevant keywords, improving user experience, and using AI to personalize content, you can increase your visibility and attract more customers.",
  },
  {
    question: "What role does AI play in fashion and apparel SEO?",
    answer:
      "AI enhances fashion SEO by providing advanced tools for keyword research, content optimization, personalization, and real-time analytics. AI-driven solutions help us adapt to changing trends, target the right audience, and deliver more effective marketing strategies.",
  },
  {
    question: "How does social media integration benefit fashion brands?",
    answer:
      "Social media is a powerful tool for building brand awareness and driving traffic to your online store. By integrating social media with your SEO strategy, we ensure that your content reaches a broader audience, engages your followers, and contributes to your overall marketing goals.",
  },
  {
    question: "What is the importance of local SEO for fashion stores?",
    answer:
      "Local SEO is essential for fashion stores that serve specific geographic areas. It ensures your store appears in local search results, driving foot traffic and attracting customers from your local community.",
  },
  {
    question: "What does Echo5 Digital's fashion branding service include?",
    answer:
      "Our fashion branding services include custom website design, logo creation, brand identity development, and more. We work closely with you to create a brand that resonates with your target audience and stands out in the competitive fashion market.",
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
  name: "Fashion & Apparel SEO",
  description:
    "Echo5 Digital is a fashion SEO company providing AI-driven keyword research, content optimization, technical SEO, e-commerce integration, local SEO, social media, branding, and Google Ads services for clothing brands and apparel retailers.",
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
  url: "https://echo5digital.com/industries/fashion",
};

export default function FashionPage() {
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
      <FashionClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
