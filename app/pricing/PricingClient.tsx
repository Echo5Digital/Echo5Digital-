"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Zap,
  Bot,
  Users,
  BarChart3,
  Globe,
  Code2,
  Database,
  Megaphone,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

interface FaqItem {
  question: string;
  answer: string;
}

interface PricingClientProps {
  faqData: FaqItem[];
}

const plans = [
  {
    name: "Starter",
    badge: "Best for New Businesses",
    price: "$1,497",
    period: "/mo",
    description:
      "Perfect for small businesses ready to launch their AI-powered digital presence and start driving consistent leads.",
    highlight: false,
    cta: "Get Started",
    ctaHref: "/contact",
    deliverables: [
      "AI Marketing Strategy & Setup",
      "2 Marketing Channels Managed",
      "8 Content Pieces / Month",
      "Basic SEO Optimization",
      "Monthly Performance Report",
      "Email Marketing (up to 2 campaigns)",
      "Dedicated Account Manager",
      "Human Oversight Included",
    ],
    notIncluded: [
      "Google / Meta Paid Ads Management",
      "Advanced CRM Automation",
      "Custom Development Work",
      "Priority Support",
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: "$2,997",
    period: "/mo",
    description:
      "Designed for businesses ready to scale. Multi-channel execution, paid ads, and advanced content powered by AI — with a real team behind it.",
    highlight: true,
    cta: "Get Started",
    ctaHref: "/contact",
    deliverables: [
      "Everything in Starter",
      "4 Marketing Channels Managed",
      "20 Content Pieces / Month",
      "Advanced SEO + Local SEO",
      "Google Ads Management",
      "Meta Ads Management",
      "Bi-Weekly Performance Reports",
      "CRM Automation Setup",
      "Social Media Management",
      "Human Oversight Included",
    ],
    notIncluded: [
      "Custom Programming / Dev Projects",
      "Priority Support Queue",
    ],
  },
  {
    name: "Authority",
    badge: "Full-Scale Growth",
    price: "$5,497",
    period: "/mo",
    description:
      "The complete AI Marketing Employee experience. Maximum channel coverage, content velocity, and custom work — for businesses serious about market dominance.",
    highlight: false,
    cta: "Get Started",
    ctaHref: "/contact",
    deliverables: [
      "Everything in Growth",
      "All Marketing Channels Managed",
      "40+ Content Pieces / Month",
      "Full SEO Suite (Technical + Local + AEO)",
      "Google + Meta + YouTube Ads",
      "Advanced CRM & Automation",
      "Weekly Performance Reports",
      "Custom Programming (up to 10 hrs/mo)",
      "Priority Support Queue",
      "Quarterly Strategy Deep-Dive",
      "Human Oversight Included",
    ],
    notIncluded: [],
  },
];

const comparisonFeatures = [
  {
    category: "Strategy & Setup",
    features: [
      {
        name: "AI Marketing Strategy",
        starter: true,
        growth: true,
        authority: true,
      },
      {
        name: "Dedicated Account Manager",
        starter: true,
        growth: true,
        authority: true,
      },
      {
        name: "Human Oversight",
        starter: true,
        growth: true,
        authority: true,
      },
    ],
  },
  {
    category: "Content & SEO",
    features: [
      {
        name: "Content Pieces / Month",
        starter: "8",
        growth: "20",
        authority: "40+",
      },
      {
        name: "Marketing Channels Managed",
        starter: "2",
        growth: "4",
        authority: "All",
      },
      {
        name: "Basic SEO",
        starter: true,
        growth: true,
        authority: true,
      },
      {
        name: "Local SEO",
        starter: false,
        growth: true,
        authority: true,
      },
      {
        name: "Technical SEO + AEO",
        starter: false,
        growth: false,
        authority: true,
      },
    ],
  },
  {
    category: "Paid Advertising",
    features: [
      {
        name: "Google Ads Management",
        starter: false,
        growth: true,
        authority: true,
      },
      {
        name: "Meta Ads Management",
        starter: false,
        growth: true,
        authority: true,
      },
      {
        name: "YouTube Ads",
        starter: false,
        growth: false,
        authority: true,
      },
    ],
  },
  {
    category: "Automation & Development",
    features: [
      {
        name: "Email Marketing",
        starter: "2 campaigns",
        growth: "Unlimited",
        authority: "Unlimited",
      },
      {
        name: "CRM Automation Setup",
        starter: false,
        growth: true,
        authority: true,
      },
      {
        name: "Advanced CRM Automation",
        starter: false,
        growth: false,
        authority: true,
      },
      {
        name: "Custom Programming (hrs/mo)",
        starter: false,
        growth: false,
        authority: "10 hrs",
      },
    ],
  },
  {
    category: "Reporting & Support",
    features: [
      {
        name: "Performance Reports",
        starter: "Monthly",
        growth: "Bi-Weekly",
        authority: "Weekly",
      },
      {
        name: "Quarterly Strategy Session",
        starter: false,
        growth: false,
        authority: true,
      },
      {
        name: "Priority Support",
        starter: false,
        growth: false,
        authority: true,
      },
    ],
  },
];

const alaCarteServices = [
  {
    icon: Globe,
    name: "Website Design",
    description: "Custom-designed, conversion-optimized websites built to reflect your brand and drive results.",
    startingAt: "Starting at $2,500",
  },
  {
    icon: Code2,
    name: "Web Development",
    description: "Full-stack development including custom features, integrations, and performance optimization.",
    startingAt: "Starting at $3,000",
  },
  {
    icon: Database,
    name: "CRM Setup & Automation",
    description: "Full CRM implementation, pipeline build-out, and automation flows to convert and retain customers.",
    startingAt: "Starting at $1,200",
  },
  {
    icon: Megaphone,
    name: "Google Ads Management",
    description: "AI-assisted campaign creation, ongoing optimization, and transparent reporting for paid search.",
    startingAt: "Starting at $750/mo",
  },
  {
    icon: BarChart3,
    name: "SEO Audit & Strategy",
    description: "In-depth technical and content SEO audit with a prioritized action plan for organic growth.",
    startingAt: "Starting at $800",
  },
  {
    icon: Bot,
    name: "Custom AI Programming",
    description: "Bespoke AI integrations, chatbots, automation scripts, and workflow tools built for your business.",
    startingAt: "Starting at $1,500",
  },
];

const trustSignals = [
  {
    icon: Bot,
    label: "AI-Powered Execution",
    description: "Every plan runs on our proprietary AI marketing system for speed and consistency.",
  },
  {
    icon: Users,
    label: "Real Human Team",
    description: "A dedicated account manager and specialist team oversees every deliverable.",
  },
  {
    icon: Shield,
    label: "Transparent Pricing",
    description: "No hidden fees, no bloated retainers. You see exactly what you're getting.",
  },
  {
    icon: Clock,
    label: "Predictable Monthly Investment",
    description: "Flat-rate plans so you can budget confidently without scope-creep surprises.",
  },
  {
    icon: Star,
    label: "U.S.-Based Strategy",
    description: "Strategy and oversight run from Houston, Texas — not outsourced black-box delivery.",
  },
  {
    icon: Zap,
    label: "Rapid Onboarding",
    description: "Most clients are live and running within 7–10 business days of signing.",
  },
];

function CheckCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return (
      <span className="text-sm font-medium" style={{ color: "#A855F7" }}>
        {value}
      </span>
    );
  }
  return value ? (
    <Check size={18} className="mx-auto" style={{ color: "#A855F7" }} />
  ) : (
    <X size={18} className="mx-auto" style={{ color: "rgba(229,231,235,0.2)" }} />
  );
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(124,58,237,0.25)",
            background: openIndex === i
              ? "rgba(124,58,237,0.08)"
              : "rgba(255,255,255,0.03)",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
            aria-expanded={openIndex === i}
          >
            <span
              className="text-base font-semibold pr-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              {item.question}
            </span>
            <span className="flex-shrink-0" style={{ color: "#A855F7" }}>
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PricingClient({ faqData }: PricingClientProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />

      {/* Hero */}
      <Section spacing="lg" background="gradient" centered>
        <div className="relative">
          {/* Decorative glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}>
              <Sparkles size={14} />
              Transparent, Value-Based Pricing
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Real Marketing Results.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Predictable Pricing.
              </span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              No opaque retainers. No guesswork. Echo5 Digital's AI Marketing Employee plans are built around transparent, value-based pricing — so you always know exactly what you're getting and what it costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.5), 0 4px 14px rgba(124,58,237,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                View Plans <ArrowRight size={16} />
              </a>
              <a
                href="#custom-quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-purple-500/10"
                style={{
                  border: "1px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Get a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Answer Block */}
      <Section spacing="sm" background="elevated" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.4)",
              }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.85)", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital offers tiered pricing plans for its AI Marketing Employee system, each including a defined set of marketing channels, content deliverables, and reporting features. Plans are designed for small and mid-sized businesses seeking done-for-you digital marketing at a predictable monthly investment. Standalone web design, development, and programming services are also available separately. Pricing details and comparisons are available directly on the pricing page.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Marketing Employee Pricing Cards */}
      <Section id="plans" spacing="lg" background="default" maxWidth="2xl">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AI Marketing Employee Plans
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Choose the plan that fits your business stage. Every tier includes human oversight and our AI-powered marketing engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: plan.highlight
                  ? "linear-gradient(160deg, rgba(124,58,237,0.2) 0%, rgba(168,85,247,0.12) 100%)"
                  : "rgba(255,255,255,0.04)",
                border: plan.highlight
                  ? "1px solid rgba(168,85,247,0.55)"
                  : "1px solid rgba(124,58,237,0.2)",
                boxShadow: plan.highlight
                  ? "0 0 40px rgba(124,58,237,0.25), 0 8px 32px rgba(0,0,0,0.3)"
                  : "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: plan.highlight
                    ? "linear-gradient(90deg, #7C3AED, #A855F7)"
                    : "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
                }}
              />

              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: plan.highlight
                        ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                        : "rgba(124,58,237,0.2)",
                      color: "#E5E7EB",
                      border: plan.highlight
                        ? "none"
                        : "1px solid rgba(168,85,247,0.3)",
                      fontFamily: "Inter, sans-serif",
                      boxShadow: plan.highlight ? "0 0 12px rgba(124,58,237,0.4)" : "none",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 p-7 pt-8">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-4">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: plan.highlight ? "#A855F7" : "#E5E7EB",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm mb-1.5"
                    style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {plan.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#A855F7" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <X
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "rgba(229,231,235,0.2)" }}
                      />
                      <span
                        className="text-sm line-through"
                        style={{ color: "rgba(229,231,235,0.3)", fontFamily: "Inter, sans-serif" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className="block text-center py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                      : "rgba(124,58,237,0.2)",
                    color: "#fff",
                    border: plan.highlight ? "none" : "1px solid rgba(168,85,247,0.4)",
                    boxShadow: plan.highlight
                      ? "0 0 20px rgba(124,58,237,0.45), 0 4px 12px rgba(0,0,0,0.3)"
                      : "none",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm mt-8"
          style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
        >
          All prices shown in USD. Contact us for custom enterprise pricing.{" "}
          {/* Phone placeholder — verified business number */}
          <a href="tel:7134897004" className="underline hover:text-purple-400 transition-colors" style={{ color: "rgba(168,85,247,0.7)" }}>
            713-489-7004
          </a>
        </p>
      </Section>

      {/* What's Included Comparison Table */}
      <Section spacing="lg" background="elevated" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What's Included — Full Comparison
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            See exactly what each plan covers across every service dimension before you decide.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
          <table className="w-full min-w-[640px]" role="table" aria-label="Plan feature comparison">
            <thead>
              <tr style={{ background: "rgba(124,58,237,0.12)", borderBottom: "1px solid rgba(124,58,237,0.2)" }}>
                <th
                  className="text-left px-6 py-4 text-sm font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "rgba(229,231,235,0.6)", width: "40%" }}
                >
                  Feature
                </th>
                {["Starter", "Growth", "Authority"].map((plan, idx) => (
                  <th
                    key={plan}
                    className="px-4 py-4 text-center text-sm font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: idx === 1 ? "#A855F7" : "#E5E7EB",
                    }}
                  >
                    {plan}
                    {idx === 1 && (
                      <span
                        className="block text-xs font-normal mt-0.5"
                        style={{ color: "rgba(168,85,247,0.7)" }}
                      >
                        Most Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((group) => (
                <>
                  <tr
                    key={`cat-${group.category}`}
                    style={{ background: "rgba(124,58,237,0.06)", borderTop: "1px solid rgba(124,58,237,0.15)" }}
                  >
                    <td
                      colSpan={4}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.features.map((feat, fi) => (
                    <tr
                      key={feat.name}
                      style={{
                        borderBottom: "1px solid rgba(124,58,237,0.1)",
                        background: fi % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                      }}
                    >
                      <td
                        className="px-6 py-3.5 text-sm"
                        style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                      >
                        {feat.name}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <CheckCell value={feat.starter} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <CheckCell value={feat.growth} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <CheckCell value={feat.authority} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* À La Carte / Standalone Services */}
      <Section spacing="lg" background="default" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            À La Carte Services
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Need a specific service without a full plan? Purchase any of our standalone services independently — no long-term commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {alaCarteServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="flex flex-col gap-4 rounded-xl p-6 transition-all duration-300 group hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.45)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(124,58,237,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <Icon size={20} style={{ color: "#A855F7" }} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-base font-semibold mb-1.5"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    {service.startingAt}
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-center py-2.5 rounded-full transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "#A855F7",
                    border: "1px solid rgba(124,58,237,0.3)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Request This Service
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Pricing Philosophy Statement */}
      <Section spacing="lg" background="gradient" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(168,85,247,0.2)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #A855F7, transparent)" }}
          />
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 24px rgba(124,58,237,0.5)",
            }}
          >
            <Sparkles size={24} color="#fff" />
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Our Pricing Philosophy
          </h2>
          <p
            className="text-base leading-relaxed max-w-3xl mx-auto mb-6"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Traditional agencies charge premium retainers for work that takes a team of 10 and days of back-and-forth. We've replaced that inefficiency with AI — so the speed, consistency, and output quality of a full marketing department comes at a fraction of the legacy cost.
          </p>
          <p
            className="text-base leading-relaxed max-w-3xl mx-auto"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            But AI alone isn't enough. Every plan at Echo5 Digital includes human strategy, human review, and human accountability. You're not buying a tool — you're getting a team powered by one. That's why our pricing is flat, transparent, and tiered around what your business actually needs — not padded with overhead you never see.
          </p>
        </div>
      </Section>

      {/* Trust Bar */}
      <Section spacing="lg" background="elevated" maxWidth="2xl" withDivider>
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What's Behind Every Plan
          </h2>
          <p
            className="text-sm"
            style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
          >
            Real team. Real AI. Real results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.label}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(124,58,237,0.2)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                >
                  <Icon size={18} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {signal.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    {signal.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* FAQ Accordion */}
      <Section spacing="lg" background="default" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Everything you need to know before choosing a plan.
          </p>
        </div>
        <FaqAccordion items={faqData} />
        <p
          className="text-center text-sm mt-8"
          style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}
        >
          Still have questions?{" "}
          <a
            href="mailto:hello@echo5digital.com"
            className="underline hover:text-purple-400 transition-colors"
            style={{ color: "rgba(168,85,247,0.8)" }}
          >
            hello@echo5digital.com
          </a>{" "}
          or call{" "}
          {/* Verified business phone number */}
          <a
            href="tel:7134897004"
            className="underline hover:text-purple-400 transition-colors"
            style={{ color: "rgba(168,85,247,0.8)" }}
          >
            713-489-7004
          </a>
        </p>
      </Section>

      {/* CTA – Get a Custom Quote */}
      <Section id="custom-quote" spacing="lg" background="elevated" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Sparkles size={12} />
              Custom Enterprise Pricing
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Non-Standard Needs?{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's Build Your Plan.
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              If you have enterprise scope, unique channel requirements, or multi-location marketing needs that don't fit neatly into a tiered plan, reach out. We'll build a custom scope and pricing structure tailored exactly to what your business needs — no padding, no fluff.
            </p>
            <ul className="space-y-3">
              {[
                "Multi-location or franchise marketing",
                "Enterprise CRM & automation builds",
                "Dedicated development resources",
                "White-label marketing for agencies",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.25)" }}
                  >
                    <Check size={11} style={{ color: "#A855F7" }} />
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-xl" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <p
                className="text-sm font-semibold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Prefer to talk directly?
              </p>
              <p className="text-sm" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                Email:{" "}
                <a
                  href="mailto:hello@echo5digital.com"
                  className="hover:text-purple-400 transition-colors"
                  style={{ color: "#A855F7" }}
                >
                  hello@echo5digital.com
                </a>
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                Phone:{" "}
                {/* Verified business phone */}
                <a
                  href="tel:7134897004"
                  className="hover:text-purple-400 transition-colors"
                  style={{ color: "#A855F7" }}
                >
                  713-489-7004
                </a>
              </p>
            </div>
          </div>
          <div>
            <ContactForm
              heading="Get a Custom Quote"
              subheading="Tell us about your business goals and we'll put together a tailored plan with transparent pricing."
              submitLabel="Request My Custom Quote"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}