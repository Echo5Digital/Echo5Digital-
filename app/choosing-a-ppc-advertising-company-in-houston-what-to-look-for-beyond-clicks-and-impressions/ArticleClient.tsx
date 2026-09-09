"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag, User, ChevronDown, ChevronUp } from "lucide-react";
import Section from "@/components/Section";

const faqs = [
  {
    question: "How much should I budget for PPC advertising in Houston?",
    answer:
      "Your budget should reflect your industry, the level of competition you're up against, and your specific business goals. A capable PPC Advertising Company Houston will assess your market and suggest investment levels aligned with the returns you can realistically expect.",
  },
  {
    question: "How long before I see results from PPC campaigns?",
    answer:
      "Early signals can show up within the first few days, but real optimization comes from 30-90 days of gathered data and testing. A trustworthy agency will set honest expectations about how long meaningful performance gains actually take.",
  },
  {
    question: "Should I choose a local Houston agency or work with a national firm?",
    answer:
      "A Houston-based agency tends to bring sharper insight into local market conditions, while a national firm may offer wider-ranging expertise. The better choice comes down to relevant industry experience and a track record of real results, not just location.",
  },
  {
    question: "What's the difference between PPC management fees and ad spend?",
    answer:
      "Ad spend is the money paid directly to platforms like Google to run your ads, while management fees cover the agency's work: strategy, optimization, and reporting. Knowing both pieces separately helps you evaluate the true total cost.",
  },
  {
    question: "How do I know if my current PPC company is performing well?",
    answer:
      "Look past clicks and impressions and focus on lead quality, conversion rates, and overall ROI. A strong agency should be able to clearly show you how their work is actually affecting your bottom line.",
  },
];

export default function ArticleClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── Article Header / Hero — full-bleed banner image with rounded corners ── */}
      <section
        className="relative w-full overflow-hidden rounded-3xl"
        style={{ backgroundColor: "#0A0F1E", height: "800px", maxHeight: "80vh" }}
      >
        <img
          src="/20250820_1450_PPC-Analysis-in-Houston_simple_compose_01k33cbjyrfev8hrr3ed5be3nb-740x600.webp"
          alt="Marketing team reviewing PPC campaign analytics including ROI, conversions, and growth charts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,8,26,0.15) 0%, rgba(10,8,26,0.35) 55%, rgba(10,8,26,0.85) 100%)" }}
        />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-2 mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Tag size={11} />
              Digital Marketing
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#fff", letterSpacing: "-0.02em", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
          >
            Choosing a PPC Advertising Company in Houston: What to Look for Beyond Clicks and Impressions
          </h1>

          <div
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif" }}
          >
            <span className="flex items-center gap-1.5">
              <User size={14} style={{ color: "#C4A0FA" }} />
              Shani
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} style={{ color: "#C4A0FA" }} />
              August 20, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} style={{ color: "#C4A0FA" }} />
              7 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <Section spacing="md" background="default">
        <article className="max-w-5xl mx-auto prose-custom" style={{ fontFamily: "Inter, sans-serif", color: "#D1D5DB" }}>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Marcus watched his Google Ads dashboard with growing frustration. The numbers looked impressive on paper thousands of clicks, soaring impression counts, and colorful charts that painted a picture of digital success. Yet his phone wasn&apos;t ringing with qualified leads, and his Houston-based HVAC company&apos;s revenue remained stagnant despite spending thousands on pay-per-click campaigns.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            This scenario plays out daily across Houston&apos;s business landscape. Business owners get dazzled by vanity metrics while their actual goals, qualified leads, increased sales, and meaningful ROI remain elusive. The harsh reality is that not all clicks are created equal, and choosing the wrong PPC Advertising Company Houston can drain your budget faster than Texas summer heat drains your air conditioning.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Understanding what separates truly effective digital advertising agencies from those focused solely on surface-level metrics could be the difference between business growth and budget depletion.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Understanding Houston&apos;s Competitive Digital Landscape
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Houston&apos;s economy presents unique challenges and opportunities for businesses investing in pay-per-click advertising. As the nation&apos;s fourth-largest city, Houston hosts everything from energy corporations to local restaurants, creating an incredibly diverse and competitive digital marketplace.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The energy sector&apos;s dominance means higher cost-per-click rates across many industries, as oil and gas companies compete aggressively for digital real estate. Local businesses often find themselves priced out of competitive keywords unless they work with agencies that understand how to navigate these market dynamics strategically.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A quality PPC Advertising Company in Houston recognizes these local nuances and develops campaigns that account for Houston&apos;s unique economic ecosystem. They understand seasonal trends affecting different industries, from hurricane season&apos;s impact on home services to oil price fluctuations affecting B2B services.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Beyond Surface-Level Metrics: What Really Matters
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            While clicks and impressions provide basic performance indicators, they tell an incomplete story about campaign effectiveness. Experienced Houston PPC agencies focus on metrics that directly correlate with business growth and profitability.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Conversion tracking forms the foundation of meaningful campaign assessment. Quality agencies implement sophisticated tracking systems that monitor not just form submissions or phone calls, but actual business outcomes. They track which keywords, ads, and landing pages generate paying customers versus tire-kickers.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Cost per acquisition (CPA) provides more valuable insights than cost per click because it measures the actual investment required to gain a new customer. A campaign generating expensive clicks might still deliver profitable results if those clicks convert at high rates.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Customer lifetime value (CLV) analysis separates exceptional agencies from average ones. The best Houston PPC firms help clients understand that acquiring a customer worth $5,000 over their lifetime justifies higher acquisition costs than acquiring someone worth $200.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Strategic Approach to Campaign Development
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Top-tier Houston digital advertising agencies begin with a comprehensive business analysis rather than jumping straight into keyword research. They investigate your customer journey, competitive landscape, and unique value proposition before launching any campaigns.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Audience segmentation plays a crucial role in campaign success. Effective agencies create detailed buyer personas based on your actual customer data, not generic demographics. They understand that Houston&apos;s diverse population requires nuanced messaging strategies.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Landing page optimization receives equal attention to ad creation. The best agencies recognize that driving traffic to poorly converting pages wastes advertising spend. They either create optimized landing pages or provide detailed recommendations for improving existing ones.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Technical Expertise and Platform Mastery
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Professional pay-per-click management requires deep technical knowledge across multiple advertising platforms. Google Ads mastery extends beyond basic campaign setup to include advanced features like Smart Bidding strategies, audience layering, and attribution modeling.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Microsoft Advertising (formerly Bing Ads) often provides lower competition and higher-value prospects, particularly in B2B markets common throughout Houston. Experienced agencies leverage this platform strategically rather than treating it as a Google afterthought.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Social media advertising integration becomes increasingly important as consumer behavior evolves. Quality Houston PPC companies coordinate efforts across Google, Facebook, LinkedIn, and other platforms to create cohesive customer experiences.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Communication and Reporting Standards
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Transparent reporting distinguishes professional agencies from those hiding behind confusing jargon and vanity metrics. Quality PPC Advertising Company Houston partners provide regular, understandable reports that connect advertising activities directly to business outcomes.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Regular strategy meetings ensure campaigns evolve with changing business needs and market conditions. The best agencies schedule monthly reviews to discuss performance, upcoming opportunities, and strategic adjustments.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Response time matters when issues arise. Houston&apos;s fast-paced business environment demands agencies that respond quickly to questions and implement changes promptly when market conditions shift.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Industry Experience and Local Knowledge
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Vertical expertise can significantly impact campaign performance. An agency experienced in Houston&apos;s medical center understands healthcare advertising regulations, while those familiar with the energy sector know industry-specific terminology and buyer behavior patterns.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Local market knowledge extends beyond geographic targeting. Understanding Houston traffic patterns, major employers, demographic distributions, and cultural nuances helps create more effective campaigns.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Case studies from similar businesses provide insight into an agency&apos;s actual capabilities. Request specific examples of how they&apos;ve helped businesses like yours achieve measurable growth through paid advertising.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Budget Management and Growth Planning
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Ethical budget management separates trustworthy agencies from those focused solely on maximizing their management fees. Quality firms help determine appropriate advertising budgets based on business goals, competitive landscape, and expected returns.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Scalability planning ensures your advertising efforts can grow with your business. The best Houston PPC agencies design campaigns that perform efficiently at various budget levels rather than requiring massive investments to function properly.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Testing methodologies demonstrate scientific approach to campaign optimization. Professional agencies conduct controlled experiments to identify improvement opportunities rather than making changes based on hunches.
          </p>

          {/* ── FAQs ── */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            FAQs
          </h2>
          <div className="flex flex-col gap-3 mb-6 not-prose">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: openFaq === idx ? "1px solid rgba(168,85,247,0.45)" : "1px solid rgba(124,58,237,0.2)",
                  transition: "border-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === idx}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  )}
                </button>
                {openFaq === idx && (
                  <div
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </Section>
    </main>
  );
}
