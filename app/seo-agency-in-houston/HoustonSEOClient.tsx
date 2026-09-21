"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FocusPullHero, PrismReveal, LavenderField, MagnetPop, InkReveal } from "@/components/SolutionsFX";
import { BlurIn } from "@/components/ScrollFX";
import {
  Search,
  Activity,
  KeyRound,
  FileStack,
  ClipboardList,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Megaphone,
  MousePointerClick,
  HeartPulse,
  Plane,
  Smile,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface HoustonSEOClientProps {
  faqItems: FAQItem[];
}

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "SEO Agency in Houston", href: "/seo-agency-in-houston" },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, target customers, and competitive landscape in the Houston market.",
    icon: Search,
  },
  {
    step: "02",
    title: "Website Health Analysis",
    description:
      "A full technical assessment of your site — crawlability, speed, structure, and any issues holding back rankings.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Keyword Research",
    description:
      "We identify the high-performing keywords your Houston customers are actually searching for.",
    icon: KeyRound,
  },
  {
    step: "04",
    title: "Content Map Generation",
    description:
      "Strategic content planning that maps keywords and search intent to the pages that will earn rankings.",
    icon: FileStack,
  },
  {
    step: "05",
    title: "Custom Plan Of Execution",
    description:
      "A tailored, prioritized SEO roadmap built specifically around your business and market — not a generic template.",
    icon: ClipboardList,
  },
];

const pricingPlans = [
  {
    name: "Basic",
    audience: "Small Businesses",
    features: [
      "20–30 Keywords",
      "Optimization of 30 pages",
      "2 Website Blog posts",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    audience: "Mid-Sized Businesses",
    features: [
      "30–50 Keywords",
      "Optimization of 50 pages",
      "4 Website Blog posts",
    ],
    highlight: true,
  },
  {
    name: "Growth",
    audience: "E-Commerce / Enterprises",
    features: [
      "50–100 Keywords",
      "Optimization of 100 pages",
      "4 Website Blog posts",
    ],
    highlight: false,
  },
];

const relatedServices = [
  {
    index: "01",
    title: "SMM",
    description: "Engage your audience and grow your brand",
    href: "/services/social-media-marketing",
    imageSrc: "/focused-businessman-showing-corporate-graphs-presentation-using-tablet-working-company-ideas-100kb.jpg",
    imageAlt: "Presenter holding a tablet with colorful graphs to seated colleagues",
    icon: Megaphone,
  },
  {
    index: "02",
    title: "Pay-Per-Click",
    description: "Maximize your ROI with efficient PPC solutions",
    href: "/services/google-ads",
    imageSrc: "/people-office-analyzing-checking-finance-graphs-100kb.jpg",
    imageAlt: "Office worker reviewing a finance infographic dashboard on a monitor",
    icon: MousePointerClick,
  },
];

const industrySolutions = [
  {
    title: "Healthcare SEO",
    href: "/industries/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Travel & Tourism SEO",
    href: "/industries/travel",
    icon: Plane,
  },
  {
    title: "Dental SEO",
    href: "/industries/dental",
    icon: Smile,
  },
];

const blogPosts = [
  {
    title: "How AEO and GEO Trends Are Affecting Digital Marketing",
    href: "/how-aeo-and-geo-trends-are-affecting-digital-marketing",
    imageSrc: "/Untitled-design-1-740x600.webp",
    imageAlt: "Business professionals analyzing digital marketing data and trends",
    date: "September 26, 2025",
  },
  {
    title: "How Social Media Management Companies Help Boost Brand Visibility?",
    href: "/how-social-media-management-companies-help-boost-brand-visibility",
    imageSrc: "/Untitled-design-740x600.webp",
    imageAlt: "Woman using a tablet surrounded by social media engagement icons representing brand visibility",
    date: "September 17, 2025",
  },
  {
    title: "Choosing a PPC Advertising Company in Houston: What to Look for Beyond Clicks and Impressions",
    href: "/choosing-a-ppc-advertising-company-in-houston-what-to-look-for-beyond-clicks-and-impressions",
    imageSrc: "/20250820_1450_PPC-Analysis-in-Houston_simple_compose_01k33cbjyrfev8hrr3ed5be3nb-740x600.webp",
    imageAlt: "Marketing team reviewing PPC campaign analytics including ROI, conversions, and growth charts",
    date: "August 20, 2025",
  },
];

export default function HoustonSEOClient({ faqItems }: HoustonSEOClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      <Breadcrumbs items={breadcrumbItems} />

      {/* ── HERO ── */}
      <FocusPullHero
        src="/3d-graph-computer-illustration-100kb.jpg"
        className="min-h-[85vh] flex items-center"
        overlay="linear-gradient(180deg, rgba(10,8,26,0.75) 0%, rgba(10,8,26,0.8) 45%, rgba(10,8,26,0.92) 100%)"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-4xl text-center py-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <MapPin size={12} />
            SEO Agency in Houston
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            <PrismReveal text="Our #1 Goal Is" />{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Your Visibility" delay={0.3} />
            </span>
          </h1>
          <p
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            As a Houston SEO agency, we're committed to boosting your online visibility
            through tailored search engine optimization services. From keyword research
            to technical audits, we craft strategies that place your business in front
            of the customers actively searching for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get A Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </FocusPullHero>

      {/* ── GROW YOUR ORGANIC TRAFFIC ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Organic Growth
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Grow Your Organic Traffic
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Investing in a dedicated team of SEO specialists means your Houston
                business gets consistent, strategic attention instead of a one-size-fits-all
                package. Our specialists monitor rankings, refine content, and adjust
                strategy month over month so your organic traffic keeps compounding.
              </p>
              <p>
                Rather than chasing short-term wins, we build the technical foundation
                and content authority that keeps your site visible for years — not just
                the next campaign cycle.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.35), 0 4px 14px rgba(0,0,0,0.15)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get A Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <img
                src="/focused-businessman-showing-corporate-graphs-presentation-using-tablet-working-company-ideas-100kb.jpg"
                alt="Houston business team reviewing organic traffic growth on a tablet"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── SEO COMPANY IN HOUSTON — 5 STEP PROCESS ── */}
      <Section
        background="transparent"
        spacing="lg"
        maxWidth="xl"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="c" />
        <div className="relative z-10 text-center mb-12">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Our Process
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              SEO Company In Houston
            </h2>
            <p
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital delivers comprehensive SEO services built around a proven,
              five-step process — designed to move your Houston business from invisible
              to unmissable in search results.
            </p>
          </BlurIn>
        </div>

        <div className="relative z-10">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(107,78,240,0.35) 20%, rgba(139,92,246,0.35) 50%, rgba(107,78,240,0.35) 80%, transparent)",
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <MagnetPop key={step.step} index={idx}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={{
                      background: "linear-gradient(135deg, #F1EDFB, #E4DBFA)",
                      border: "2px solid rgba(107,78,240,0.35)",
                      boxShadow: "0 6px 20px rgba(107,78,240,0.18)",
                    }}
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </MagnetPop>
            ))}
          </div>
        </div>
      </Section>

      {/* ── BE AT THE TOP WHEN CUSTOMERS SEARCH FOR YOU ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <img
                src="/top-view-cloud-with-word-seo-80kb.jpg"
                alt="SEO strategy concept with search visibility icons"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Why SEO Matters
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Be at the Top When Customers Search for You
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              <p>
                SEO is how your business communicates with search engines — and, by
                extension, with the customers actively looking for what you offer.
                When your site is properly optimized, Google understands exactly who
                you serve and why you're the right answer to a searcher's query.
              </p>
              <p>
                Being at the top of search results means being the business Houston
                customers find first — and first impressions in search translate
                directly into calls, form submissions, and foot traffic.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PRICING ── */}
      <Section
        background="transparent"
        spacing="lg"
        maxWidth="xl"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="b" />
        <div className="relative z-10 text-center mb-12">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Pricing
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Choose the Plan That Works for You
            </h2>
          </BlurIn>
        </div>

        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <MagnetPop key={plan.name} index={i}>
              <div
                className="relative flex flex-col h-full p-8 rounded-2xl"
                style={{
                  background: plan.highlight
                    ? "linear-gradient(160deg, #1B1440, #120C2E)"
                    : "rgba(255,255,255,0.85)",
                  border: plan.highlight
                    ? "1px solid rgba(168,85,247,0.5)"
                    : "1px solid rgba(107,78,240,0.2)",
                  boxShadow: plan.highlight
                    ? "0 16px 50px rgba(124,58,237,0.35)"
                    : "0 8px 30px rgba(107,78,240,0.1)",
                }}
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      color: "#fff",
                      fontFamily: "Inter, sans-serif",
                      boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                    }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: plan.highlight ? "#F1F5F9" : "#15172B",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: plan.highlight ? "rgba(226,232,240,0.6)" : "#5B5F73",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {plan.audience}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="shrink-0 mt-0.5"
                        color={plan.highlight ? "#A855F7" : "#6B4EF0"}
                      />
                      <span
                        className="text-sm"
                        style={{
                          color: plan.highlight ? "rgba(226,232,240,0.85)" : "#15172B",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                      : "transparent",
                    color: plan.highlight ? "#fff" : "#6B4EF0",
                    border: plan.highlight ? "none" : "1px solid rgba(107,78,240,0.4)",
                    boxShadow: plan.highlight ? "0 0 18px rgba(124,58,237,0.4)" : "none",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Get Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </MagnetPop>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How Its Working
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openFaq === index ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.45)" : "rgba(124,58,237,0.2)"}`,
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openFaq === index ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  {openFaq === index ? (
                    <ChevronUp size={16} color="#A855F7" />
                  ) : (
                    <ChevronDown size={16} color="#A855F7" />
                  )}
                </span>
              </button>
              {openFaq === index && (
                <div id={`faq-answer-${index}`} className="px-5 pb-5" role="region">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── RELATED SERVICES ── */}
      <Section
        background="transparent"
        spacing="lg"
        maxWidth="xl"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="a" />
        <div className="relative z-10 text-center mb-12">
          <BlurIn>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Related Services
            </h2>
          </BlurIn>
        </div>

        <div className="relative z-10 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {relatedServices.map((service, i) => (
            <MagnetPop key={service.title} index={i}>
              <Link
                href={service.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  border: "1px solid rgba(107,78,240,0.2)",
                  boxShadow: "0 8px 30px rgba(107,78,240,0.1)",
                }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 40%, rgba(21,23,43,0.85) 100%)",
                    }}
                  />
                  <span
                    className="absolute top-4 left-4 text-2xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    ({service.index})
                  </span>
                </div>
                <div className="p-6 bg-white flex items-center justify-between gap-3">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    color="#6B4EF0"
                  />
                </div>
              </Link>
            </MagnetPop>
          ))}
        </div>
      </Section>

      {/* ── INDUSTRY SOLUTIONS ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Industries
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Tailored SEO Solutions for Every Industry
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industrySolutions.map((industry, i) => (
            <MagnetPop key={industry.title} index={i}>
              <Link
                href={industry.href}
                className="group flex flex-col items-center gap-4 p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <industry.icon size={26} color="#A855F7" strokeWidth={1.8} />
                </div>
                <span
                  className="text-base font-semibold"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {industry.title}
                </span>
              </Link>
            </MagnetPop>
          ))}
        </div>
      </Section>

      {/* ── WEBSITE AUDIT CTA ── */}
      <Section
        background="transparent"
        spacing="lg"
        maxWidth="xl"
        withDivider
        className="relative !bg-[#EEECFB]"
      >
        <InkReveal origin="50% 20%" className="relative z-10 text-center max-w-2xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
          >
            Free Website Audit
          </p>
          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              color: "#15172B",
            }}
          >
            Need to Know the Current Status of Your Website?
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
          >
            We create value for our clients by uncovering exactly what's helping — and
            what's holding back — their website's search performance, then building a
            clear plan to fix it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 24px rgba(124,58,237,0.35), 0 4px 14px rgba(0,0,0,0.15)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Get A Free Consultation
            <ArrowRight size={18} />
          </Link>
        </InkReveal>
      </Section>

      {/* ── BLOG ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Blog
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Stay Informed with Our Digital Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 shrink-0"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            View All News
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <MagnetPop key={post.title} index={i}>
              <Link
                href={post.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl h-full transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <time
                    dateTime={post.date}
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                  >
                    {post.date}
                  </time>
                  <h3
                    className="text-base font-semibold leading-snug flex-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {post.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-2"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    Read More
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </MagnetPop>
          ))}
        </div>
      </Section>
    </main>
  );
}
