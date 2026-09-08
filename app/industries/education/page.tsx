import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EducationClient from "./EducationClient";

export const metadata: Metadata = {
  title: "SEO for Educational Institutions & Education SEO | Echo5 Digital",
  description:
    "Echo5 Digital specializes in Education SEO, using targeted strategies and AI-driven tools to increase your institution's online visibility, drive student enrollment, and build your reputation as a leader in education.",
  alternates: {
    canonical: "/industries/education",
  },
};

const faqData = [
  {
    question: "How can SEO help my educational institution attract more students?",
    answer:
      "SEO helps your educational institution rank higher in search engine results, making it easier for prospective students to find you when they search for schools, colleges, or programs online. By optimizing your site for relevant keywords, improving user experience, and using AI to personalize content, you can increase your visibility and attract more students.",
  },
  {
    question: "What role does AI play in education SEO?",
    answer:
      "AI enhances education SEO by providing advanced tools for keyword research, content optimization, lead generation, and real-time analytics. AI-driven solutions help us adapt to changing student behaviors, target the right audience, and deliver more effective marketing strategies.",
  },
  {
    question: "How does local SEO benefit schools and colleges?",
    answer:
      "Local SEO is essential for educational institutions that rely on students from specific geographic areas. It ensures your institution appears in local search results, driving leads from prospective students searching for education opportunities near them.",
  },
  {
    question: "How does Echo5 Digital integrate social media with education SEO?",
    answer:
      "We integrate social media with SEO by optimizing your social media campaigns, using AI to analyze audience engagement, and driving targeted traffic to your website. This holistic approach ensures that your social media efforts contribute to your overall SEO strategy and attract more students.",
  },
  {
    question: "What does Echo5 Digital's school branding service include?",
    answer:
      "Our school branding services include custom website design, logo creation, brand identity development, and more. We work closely with you to create a brand that resonates with your target audience and stands out in the competitive education market.",
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
  name: "Education SEO Services",
  description:
    "Echo5 Digital is an education SEO company providing AI-powered keyword research, content optimization, technical SEO, local SEO, lead generation, social media, branding, and Google Ads services for schools, colleges, and educational institutions.",
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
  url: "https://echo5digital.com/industries/education",
};

export default function EducationPage() {
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
      <EducationClient faqData={faqData} />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}
