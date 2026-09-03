"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Search,
  TrendingUp,
  FileSearch,
  Globe,
  BarChart2,
  MapPin,
  ChevronDown,
  ChevronUp,
  Bot,
  Layers,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Star,
  Phone,
  Mail,
  Building2,
  Heart,
  Home,
  Scale,
  Wrench,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOClientProps {
  faqItems: FAQItem[];
}

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "AI-assisted discovery of high-intent, low-competition keywords your target customers are actually searching for.",
  },
  {
    icon: FileSearch,
    title: "Technical SEO Audits",
    description:
      "Comprehensive crawl analysis, Core Web Vitals checks, schema validation, and site speed optimization.",
  },
  {
    icon: TrendingUp,
    title: "On-Page Optimization",
    description:
      "Optimized title tags, meta descriptions, headings, internal linking, and content structure for every page.",
  },
  {
    icon: Globe,
    title: "Content Strategy",
    description:
      "AI-powered content planning and creation that builds topical authority and answers search intent.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Google Business Profile optimization, citation building, and local landing pages for Houston, Sugar Land, and surrounding areas.",
  },
  {
    icon: BarChart2,
    title: "Reporting Dashboards",
    description:
      "Real-time visibility into rankings, traffic, and conversions through a live client dashboard.",
  },
  {
    icon: Star,
    title: "Monthly Performance Reviews",
    description:
      "Regular strategy sessions with your account team to review results, adjust tactics, and plan next steps.",
  },
  {
    icon: Layers,
    title: "Link Signals",
    description:
      "Ethical link-building campaigns and digital PR to build domain authority over time.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We audit your current website, analyze competitors, and identify technical issues and keyword gaps that are holding you back.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Our AI tools and human strategists build a custom SEO roadmap targeting your highest-impact growth opportunities.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "We implement technical fixes, optimize on-page elements, publish content, and launch link-building campaigns.",
  },
  {
    step: "04",
    title: "Monitor & Optimize",
    description:
      "Ongoing tracking of rankings, traffic, and user behavior, with AI-driven refinements to keep results compounding.",
  },
  {
    step: "05",
    title: "Report & Review",
    description:
      "Monthly reporting with transparent metrics and strategic recommendations delivered to you in plain language.",
  },
];

const industries = [
  { icon: Heart, label: "Healthcare", href: "/industries/healthcare" },
  { icon: Building2, label: "Dental", href: "/industries/dental" },
  { icon: Home, label: "Home Services", href: "/industries/home-services" },
  { icon: Scale, label: "Legal", href: "/industries/legal" },
  { icon: ShoppingBag, label: "Real Estate", href: "/industries/real-estate" },
  { icon: Wrench, label: "Contractors", href: "/industries/contractors" },
  { icon: GraduationCap, label: "Education", href: "/industries/education" },
  { icon: Globe, label: "E-Commerce", href: "/industries/ecommerce" },
];

export default function SEOClient({ faqItems }: SEOClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        {/* Decorative glow orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={12} />
              AI-Powered SEO Services
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Rank Higher.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Grow Faster.
              </span>{" "}
              Win Organically.
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital delivers AI-powered SEO services built for small and
              mid-sized businesses. We combine cutting-edge machine intelligence
              with expert human strategy to drive sustainable organic traffic,
              leads, and revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Free SEO Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#seo-audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  color: "#A855F7",
                  border: "2px solid rgba(124,58,237,0.5)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Get a Free Audit
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI-powered SEO analytics dashboard showing organic traffic growth"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Floating stat badge */}
            <div
              className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 0 24px rgba(124,58,237,0.3)",
              }}
            >
              <p
                className="text-xs font-medium mb-0.5"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Organic Traffic
              </p>
              <p
                className="text-2xl font-bold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                +312%
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ──────────────── */}
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
          aria-label="Quick Answer"
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital provides AI-powered SEO services designed to
                improve search engine rankings, drive organic traffic, and
                generate leads for small and mid-sized businesses. Services
                include keyword research, technical SEO, on-page optimization,
                content strategy, and local SEO. Echo5 Digital serves businesses
                in Houston, Sugar Land, Texas, and across the United States.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHAT IS SEO ──────────────────────────────────────── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              The Basics
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              What Is Search Engine Optimization?
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Search Engine Optimization (SEO) is the practice of improving
                your website's visibility in organic (non-paid) search engine
                results. When someone searches Google for a product or service
                you offer, SEO determines whether your business appears at the
                top — or gets buried on page 5.
              </p>
              <p>
                Unlike paid advertising, SEO builds sustainable visibility that
                compounds over time. A well-optimized website continues
                attracting qualified visitors 24/7 without a per-click cost,
                making it one of the highest-ROI digital marketing investments
                for small and mid-sized businesses.
              </p>
              <p>
                SEO encompasses technical site health, on-page content quality,
                local relevance signals, and off-site authority — all working
                together to tell search engines your business is the best answer
                for your customers' queries.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/6961857/pexels-photo-6961857.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Small business owner reviewing SEO rankings and organic search results on a laptop"
                className="w-full h-72 object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-xs"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                Avg. click-through rate
              </p>
              <p
                className="text-xl font-bold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#A855F7",
                }}
              >
                #1 result: 27.6%
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ECHO5 APPROACH ───────────────────────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Methodology
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Echo5 Digital's AI-Assisted SEO Approach
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            We blend AI-powered analysis and automation with expert human
            oversight — giving you the speed of machine intelligence and the
            judgment of seasoned strategists.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Bot,
              title: "AI-Driven Analysis",
              description:
                "Our AI tools process thousands of ranking signals, competitor data, and search trends in seconds — surfacing insights that would take weeks manually.",
            },
            {
              icon: FileSearch,
              title: "Technical SEO",
              description:
                "We identify and fix crawlability issues, page speed bottlenecks, schema markup gaps, duplicate content, and mobile usability problems.",
            },
            {
              icon: Target,
              title: "On-Page Optimization",
              description:
                "Every page is optimized for search intent — from title tags and headers to internal linking structure and content depth.",
            },
            {
              icon: Globe,
              title: "Content Strategy",
              description:
                "We build topical authority clusters using AI-assisted research and human editorial quality control to earn rankings that last.",
            },
            {
              icon: Layers,
              title: "Link Signals",
              description:
                "White-hat link acquisition through digital PR, partnerships, and content marketing to strengthen your domain's authority profile.",
            },
            {
              icon: CheckCircle,
              title: "Human Oversight",
              description:
                "Every AI-generated recommendation is reviewed and refined by our senior SEO strategists before implementation — quality is never automated away.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={20} color="#A855F7" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-semibold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(229,231,235,0.65)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SEO FEATURES LIST ────────────────────────────────── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            What's Included
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            SEO Service Deliverables
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Every Echo5 Digital SEO engagement includes a full suite of
            deliverables designed to move the needle on organic search performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <Card
              key={feature.title}
              variant="service"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            The Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How Our SEO Engagement Works
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            From initial audit to ongoing optimization, here's exactly what
            happens when you partner with Echo5 Digital for SEO.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 50%, rgba(124,58,237,0.4) 80%, transparent)",
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="flex flex-col items-center text-center gap-4">
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center shrink-0 z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "2px solid rgba(124,58,237,0.5)",
                    boxShadow: "0 0 24px rgba(124,58,237,0.3)",
                    backgroundColor: "#0A0F1E",
                  }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE CONNECTION ─────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={12} />
              AI Marketing Employee
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              SEO as Part of Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Marketing Engine
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{
                color: "rgba(229,231,235,0.75)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              SEO doesn't work in isolation — it's most powerful when it's
              connected. Echo5 Digital's AI Marketing Employee model integrates
              SEO with paid ads, social media, content marketing, and CRM
              automation into a single, unified growth engine.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "rgba(229,231,235,0.75)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              When your SEO content feeds your paid campaigns, your paid data
              informs keyword strategy, and your CRM closes the loop on which
              organic visitors convert — the results compound. That's the AI
              Marketing Employee difference.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "SEO included in relevant AI Marketing Employee plan tiers",
                "Unified data across all marketing channels",
                "AI identifies cross-channel optimization opportunities",
                "Single team, single strategy, compounding results",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    color="#A855F7"
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(229,231,235,0.75)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Learn about the AI Marketing Employee
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 50px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/38547/office-freelancer-computer-business-38547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Integrated AI marketing ecosystem showing SEO connected to multiple digital channels"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES SERVED ────────────────────────────────── */}
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
            SEO for Your Industry
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital builds industry-specific SEO strategies that speak the
            language of your customers and the algorithms that rank you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.label}
              href={industry.href}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <industry.icon size={22} color="#A855F7" strokeWidth={1.8} />
              </div>
              <span
                className="text-xs font-medium leading-tight"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                {industry.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            View all industries we serve
            <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      {/* ── TRUST INDICATORS / LOCAL RELEVANCE ───────────────── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Service Area
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Serving Houston, Sugar Land &amp; the Nation
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{
                color: "rgba(229,231,235,0.75)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Echo5 Digital's SEO services are particularly valuable for
              businesses in Houston and Sugar Land, Texas, where local search
              competition is high. Our local SEO capabilities help Houston-area
              businesses rank for neighborhood and city-level searches, improving
              visibility to nearby customers actively looking for their services.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "rgba(229,231,235,0.75)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              We also serve businesses nationwide across the United States,
              delivering the same AI-powered SEO methodology regardless of your
              location or market size.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Houston, TX — Primary Market",
                "Sugar Land, TX — Primary Market",
                "Texas Statewide Coverage",
                "National U.S. Clients Served",
              ].map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <MapPin size={16} color="#A855F7" />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(229,231,235,0.75)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Contact card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                Get in Touch
              </h3>
              <div className="space-y-3">
                {/* Phone — verified fact */}
                <a
                  href="tel:7134897004"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Phone size={15} color="#A855F7" />
                  </div>
                  <span>713-489-7004</span>
                </a>
                {/* Email — verified fact */}
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Mail size={15} color="#A855F7" />
                  </div>
                  <span>hello@echo5digital.com</span>
                </a>
                {/* Address — verified fact */}
                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <MapPin size={15} color="#A855F7" />
                  </div>
                  <span>Houston / Sugar Land, Texas</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "AI-Powered Strategy", sub: "Machine + Human Expertise" },
                { label: "Transparent Reporting", sub: "Live Client Dashboards" },
                { label: "AEO & GEO Ready", sub: "AI Answer Engine Optimized" },
                { label: "No Lock-In Contracts", sub: "Month-to-Month Flexibility" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    {badge.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {badge.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
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
            Frequently Asked Questions About SEO
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openFaq === index
                  ? "rgba(124,58,237,0.1)"
                  : "rgba(255,255,255,0.03)",
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
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openFaq === index
                      ? "rgba(124,58,237,0.3)"
                      : "rgba(124,58,237,0.1)",
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
                <div
                  id={`faq-answer-${index}`}
                  className="px-5 pb-5"
                  role="region"
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(229,231,235,0.75)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA – GET AN SEO AUDIT ───────────────────────────── */}
      <Section
        id="seo-audit"
        background="gradient"
        spacing="xl"
        maxWidth="xl"
        withDivider
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Start Here
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Get Your Free{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SEO Audit
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{
                color: "rgba(229,231,235,0.75)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Discover exactly what's holding your website back from page one.
              Our team will analyze your site's technical health, keyword
              opportunities, and competitive landscape — and deliver a clear
              action plan at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Full technical SEO audit of your website",
                "Keyword gap analysis vs. your top competitors",
                "Local SEO opportunity assessment (Houston / Sugar Land)",
                "Actionable recommendations delivered within 48 hours",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    color="#A855F7"
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(229,231,235,0.75)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div>
            <ContactForm
              heading="Request Your Free SEO Audit"
              subheading="Tell us about your website and goals. We'll reach out within 24 hours with your custom audit."
              submitLabel="Request My Free Audit"
              showAppointmentNote
            />
          </div>
        </div>
      </Section>
    </main>
  );
}