"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  ShoppingCart,
  TrendingUp,
  Search,
  Megaphone,
  Share2,
  FileText,
  Globe,
  BarChart3,
  Bot,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  DollarSign,
  Users,
  RefreshCw,
  MapPin,
  Mail,
  Phone,
  AlertTriangle,
  LayoutDashboard,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

const painPoints = [
  {
    icon: DollarSign,
    title: "Rising Ad Costs",
    description:
      "CPCs and CPMs keep climbing across Google and Meta, eating margins and making profitability harder to sustain.",
  },
  {
    icon: AlertTriangle,
    title: "Algorithm Dependence",
    description:
      "Sudden platform changes wipe out overnight visibility, leaving stores scrambling to recover lost ranking or reach.",
  },
  {
    icon: Search,
    title: "Low Organic Traffic",
    description:
      "Product pages fail to rank without proper SEO — meaning you pay for every visitor instead of earning them.",
  },
  {
    icon: Target,
    title: "Poor Conversion Rates",
    description:
      "Traffic comes in but doesn't convert. Weak copy, slow load times, and poor UX kill sales before checkout.",
  },
  {
    icon: FileText,
    title: "Scaling Content",
    description:
      "Writing product descriptions, blogs, and ad copy at scale is time-consuming and inconsistent without an AI-powered system.",
  },
  {
    icon: ShoppingCart,
    title: "Abandoned Carts",
    description:
      "Up to 70% of carts are abandoned. Without retargeting and automation, that revenue is left permanently on the table.",
  },
];

const services = [
  {
    icon: Search,
    title: "SEO for Ecommerce",
    description:
      "Technical SEO, keyword strategy, and product-page optimization to earn sustainable organic traffic and reduce ad dependency.",
    badge: "Organic Growth",
  },
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Performance-focused Search, Shopping, and Performance Max campaigns engineered to maximize ROAS and drive purchase-intent traffic.",
    badge: "Paid Search",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Facebook and Instagram ad campaigns with precise audience targeting, creative testing, and product catalog strategies.",
    badge: "Paid Social",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Organic social content, community management, and brand storytelling across the platforms your customers shop on.",
    badge: "Brand Building",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "AI-assisted blog posts, buying guides, and product content that drive SEO value and guide shoppers toward purchase.",
    badge: "Content Engine",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Conversion-optimized storefronts and landing pages built for speed, mobile-first UX, and higher checkout completion.",
    badge: "CRO",
  },
  {
    icon: RefreshCw,
    title: "CRM Automation",
    description:
      "Abandoned cart sequences, post-purchase flows, and lifecycle email and SMS automation that recover revenue on autopilot.",
    badge: "Retention",
  },
  {
    icon: LayoutDashboard,
    title: "Reporting Dashboards",
    description:
      "Unified analytics dashboards that surface ROAS, revenue attribution, traffic sources, and conversion data in one view.",
    badge: "Analytics",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We audit your store, ad accounts, SEO footprint, and analytics to identify quick wins and long-term growth levers.",
  },
  {
    number: "02",
    title: "Growth Plan Creation",
    description:
      "Our AI models and strategists build a custom multi-channel roadmap aligned to your revenue targets and margins.",
  },
  {
    number: "03",
    title: "Campaign Launch",
    description:
      "We deploy ads, optimize product pages, publish content, and activate automations — all within your first sprint.",
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description:
      "AI monitors performance 24/7, adjusting bids, creative, and content to compound results over time without manual delays.",
  },
  {
    number: "05",
    title: "Reporting & Scaling",
    description:
      "Monthly deep-dives and live dashboards keep you informed. As what works is identified, we scale it systematically.",
  },
];

const results = [
  {
    metric: "4.2x ROAS",
    label: "Google Ads Campaign",
    description:
      "An online apparel store scaled from 1.8x to 4.2x return on ad spend over 90 days through Shopping and Performance Max optimization.",
    tag: "Illustrative Result",
  },
  {
    metric: "+218%",
    label: "Organic Traffic Growth",
    description:
      "A home goods ecommerce brand grew organic sessions by 218% in six months following a full technical SEO and content overhaul.",
    tag: "Illustrative Result",
  },
  {
    metric: "+$340K",
    label: "Revenue Recovered",
    description:
      "A beauty brand recovered an estimated $340K in annual revenue through Meta retargeting and automated abandoned cart sequences.",
    tag: "Illustrative Result",
  },
];

const trustStats = [
  { value: "Multi-Channel", label: "AI-Driven Execution" },
  { value: "U.S.-Based", label: "Strategy & Management" },
  { value: "24/7", label: "Campaign Monitoring" },
  { value: "Full-Funnel", label: "Coverage: Ads + SEO + Content" },
];

export default function EcommerceMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        <div className="relative">
          {/* Background glow orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #A855F7 0%, #7C3AED 50%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(168,85,247,0.35)",
                  color: "#A855F7",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                <ShoppingCart size={14} />
                AI-Powered Ecommerce Marketing
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                Grow Your Online Store{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Faster With AI
                </span>
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
                style={{
                  color: "rgba(229,231,235,0.75)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Echo5 Digital helps ecommerce brands drive more traffic,
                increase conversions, and scale revenue — through AI-powered
                Google Ads, Meta Ads, SEO, content marketing, and social media
                management. No in-house team required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow:
                      "0 0 24px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.3)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Get Your Growth Plan
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/ai-marketing-employee"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
                  style={{
                    border: "2px solid rgba(124,58,237,0.5)",
                    color: "#A855F7",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(124,58,237,0.3)",
                  boxShadow: "0 0 60px rgba(124,58,237,0.2)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/36598869/pexels-photo-36598869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Ecommerce marketing dashboard showing revenue growth and analytics"
                  className="w-full h-72 lg:h-96 object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)",
                  }}
                />
                {/* Floating stat badge */}
                <div
                  className="absolute bottom-4 left-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(10,15,30,0.85)",
                    border: "1px solid rgba(124,58,237,0.4)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <TrendingUp size={20} style={{ color: "#A855F7" }} />
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{
                        color: "#E5E7EB",
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      Multi-Channel Growth
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(229,231,235,0.6)" }}
                    >
                      Ads · SEO · Content · Social
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRY PAIN POINTS ── */}
      <Section background="elevated" spacing="lg" withDivider id="pain-points">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Common Challenges
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            Ecommerce Marketing Problems We Solve
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(229,231,235,0.65)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Online store owners face a gauntlet of marketing obstacles that
            drain budget and stall growth. Here's what Echo5 Digital is
            built to fix.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <Icon size={18} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(229,231,235,0.6)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── SERVICES GRID ── */}
      <Section background="default" spacing="lg" withDivider id="services">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            Ecommerce Marketing Services
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(229,231,235,0.65)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Every service is engineered to drive ecommerce revenue — from
            first click to repeat purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              badge={service.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE OVERVIEW ── */}
      <Section background="gradient" spacing="lg" withDivider id="ai-employee">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 50px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI Marketing Employee managing ecommerce campaigns across multiple channels"
                className="w-full h-72 lg:h-80 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(10,15,30,0.6) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              <Bot size={14} />
              AI Marketing Employee
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Your Always-On Marketing Team — Powered by AI
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Echo5 Digital's AI Marketing Employee model runs continuous,
              multi-channel ecommerce marketing so you don't have to. While you
              focus on product, inventory, and fulfillment, our AI executes
              across ads, SEO, content, and social — simultaneously and
              without downtime.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {[
                "Continuous campaign optimization across Google & Meta",
                "Automated content creation and publishing at scale",
                "Real-time SEO monitoring and product-page improvements",
                "Social media posting and engagement management",
                "24/7 performance tracking with no manual reporting lag",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{
                    color: "rgba(229,231,235,0.8)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 20px rgba(124,58,237,0.5), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn About AI Marketing Employee
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="elevated" spacing="lg" withDivider id="how-it-works">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            From Onboarding to Ongoing Growth
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(229,231,235,0.65)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            A clear, structured process from day one — built to get your
            ecommerce store growing as fast as possible.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 10%, rgba(168,85,247,0.4) 50%, rgba(124,58,237,0.4) 90%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center lg:items-center"
              >
                {/* Step number circle */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "2px solid rgba(124,58,237,0.5)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.2)",
                  }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#A855F7",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-base font-semibold mb-2"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(229,231,235,0.6)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RESULTS / CASE STUDIES ── */}
      <Section background="default" spacing="lg" withDivider id="results">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Results
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            Ecommerce Growth in Action
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{
              color: "rgba(229,231,235,0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            The following results are illustrative of the outcomes our
            approach is designed to deliver. Individual results may vary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.metric}
              className="relative flex flex-col p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(168,85,247,0.7), transparent)",
                }}
              />

              <span
                className="text-xs font-semibold uppercase tracking-widest mb-4 self-start px-3 py-1 rounded-full"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  color: "#A855F7",
                  border: "1px solid rgba(168,85,247,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {result.tag}
              </span>

              <p
                className="text-5xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {result.metric}
              </p>

              <p
                className="text-sm font-semibold mb-3"
                style={{
                  color: "#E5E7EB",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {result.label}
              </p>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(229,231,235,0.6)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="elevated" spacing="md" withDivider id="trust">
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Ecommerce Brands Choose Echo5 Digital
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            Built for Online Store Growth
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <span
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs md:text-sm"
                style={{
                  color: "rgba(229,231,235,0.6)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: Zap,
              text: "AI-powered execution across all major marketing channels simultaneously",
            },
            {
              icon: Users,
              text: "Dedicated U.S.-based strategy team that understands ecommerce growth",
            },
            {
              icon: BarChart3,
              text: "Transparent dashboards with real-time ROAS and revenue attribution data",
            },
            {
              icon: Globe,
              text: "Full-funnel coverage from awareness ads to post-purchase retention",
            },
            {
              icon: RefreshCw,
              text: "No long-term lock-in — flexible engagements built for growing brands",
            },
            {
              icon: CheckCircle,
              text: "Serving ecommerce brands across the U.S. from our Houston, Texas base",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <Icon
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#A855F7" }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(229,231,235,0.75)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider id="faq">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            Common Questions from Ecommerce Brands
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqData.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen
                    ? "1px solid rgba(168,85,247,0.45)"
                    : "1px solid rgba(124,58,237,0.2)",
                  background: isOpen
                    ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)"
                    : "rgba(255,255,255,0.03)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
                    style={{
                      background: isOpen
                        ? "rgba(124,58,237,0.3)"
                        : "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    {isOpen ? (
                      <ChevronUp size={16} style={{ color: "#A855F7" }} />
                    ) : (
                      <ChevronDown size={16} style={{ color: "#A855F7" }} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-5"
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "rgba(229,231,235,0.7)",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider id="local">
        <div
          className="flex flex-col md:flex-row items-center gap-8 rounded-2xl p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div
            className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
              border: "1px solid rgba(168,85,247,0.3)",
              boxShadow: "0 0 20px rgba(124,58,237,0.2)",
            }}
          >
            <MapPin size={28} style={{ color: "#A855F7" }} />
          </div>

          <div className="text-center md:text-left flex-1">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Serving Houston, Texas — and Ecommerce Brands Nationwide
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Echo5 Digital is headquartered in Houston and Sugar Land, Texas
              and serves ecommerce businesses both locally and nationally across
              the U.S. Texas-based online store owners benefit from working with
              a local agency that understands regional market dynamics while also
              delivering national-scale digital marketing strategy and execution.
            </p>

            {/* NAP — real HTML text, not image */}
            <address
              className="not-italic flex flex-col sm:flex-row gap-4 flex-wrap justify-center md:justify-start"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <a
                href="tel:713-489-7004"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.7)" }}
              >
                <Phone size={14} style={{ color: "#A855F7" }} />
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.7)" }}
              >
                <Mail size={14} style={{ color: "#A855F7" }} />
                hello@echo5digital.com
              </a>
              <span
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "rgba(229,231,235,0.7)" }}
              >
                <MapPin size={14} style={{ color: "#A855F7" }} />
                Houston / Sugar Land, Texas
              </span>
            </address>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section background="gradient" spacing="xl" id="cta">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              <TrendingUp size={14} />
              Ready to Scale Your Store?
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Let's Build Your Ecommerce{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Revenue Engine
              </span>
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Schedule a free revenue growth consultation with our team. We'll
              review your current marketing, identify the highest-impact
              opportunities, and show you exactly how Echo5 Digital can help
              your online store grow — across every channel, powered by AI.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Free store & marketing audit included",
                "Custom multi-channel growth plan created for you",
                "No long-term contracts required",
                "U.S.-based strategy team — Houston, TX HQ",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{
                    color: "rgba(229,231,235,0.8)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <CheckCircle
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: "#A855F7" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 24px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Get My Free Growth Plan
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:713-489-7004"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "2px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Phone size={16} />
                713-489-7004
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <ContactForm
              heading="Start Growing Today"
              subheading="Tell us about your store and goals — we'll get back to you within 24 hours with a plan."
              submitLabel="Request My Growth Plan"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}