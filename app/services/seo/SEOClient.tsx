"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { FocusPullHero, PrismReveal, LavenderField, MagnetPop, InkReveal } from "@/components/SolutionsFX";
import { BlurIn, TiltCard, CountUp, TextMarquee } from "@/components/ScrollFX";
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
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="/3d-graph-computer-illustration-100kb.jpg"
        className="min-h-screen flex items-center pt-[72px]"
        overlay="linear-gradient(180deg, rgba(10,8,26,0.75) 0%, rgba(10,8,26,0.8) 45%, rgba(10,8,26,0.92) 100%)"
      >
        {/* Ambient glow orb on top of the photo overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-4xl text-center py-20">
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
            <PrismReveal text="Rank Higher." />{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Grow Faster." delay={0.3} />
            </span>{" "}
            <PrismReveal text="Win Organically." delay={0.6} />
          </h1>
          <p
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital delivers AI-powered SEO services built for small and
            mid-sized businesses. We combine cutting-edge machine intelligence
            with expert human strategy to drive sustainable organic traffic,
            leads, and revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Stat badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div
              className="px-5 py-3 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.7)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 0 24px rgba(124,58,237,0.3)",
                backdropFilter: "blur(8px)",
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
      </FocusPullHero>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ──────────────── */}
      <Section
        background="transparent"
        spacing="md"
        maxWidth="xl"
        withDivider
        className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_60%,#EEECFB_100%)]"
      >
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(224,217,250,0.75), rgba(199,188,245,0.55))",
            border: "1px solid rgba(107,78,240,0.3)",
            boxShadow: "0 12px 40px rgba(107,78,240,0.15)",
          }}
          aria-label="Quick Answer"
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
              style={{
                background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
                boxShadow: "0 0 16px rgba(107,78,240,0.4)",
              }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "#1F2340", fontFamily: "Inter, sans-serif" }}
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
              Our Methodology
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Echo5 Digital's AI-Assisted SEO Approach
            </h2>
            <p
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              We blend AI-powered analysis and automation with expert human
              oversight — giving you the speed of machine intelligence and the
              judgment of seasoned strategists.
            </p>
          </BlurIn>
        </div>

        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          ].map((item, i) => {
            const glows = [
              "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(34,211,238,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(168,85,247,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(59,130,246,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(217,119,6,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.35), transparent 55%), #10182B",
            ];
            const accents = ["#34D399", "#22D3EE", "#C084FC", "#60A5FA", "#F59E0B", "#34D399"];
            const accent = accents[i % accents.length];
            return (
              <MagnetPop key={item.title} index={i}>
                <div
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 h-full"
                  style={{
                    background: glows[i % glows.length],
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 8px 30px rgba(10,15,30,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = accent;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${accent}, 0 16px 40px ${accent}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(10,15,30,0.25)";
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full"
                    style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <item.icon size={20} style={{ color: accent }} strokeWidth={1.8} />
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#F1F5F9",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(226,232,240,0.65)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </MagnetPop>
            );
          })}
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
              The Process
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              How Our SEO Engagement Works
            </h2>
            <p
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              From initial audit to ongoing optimization, here's exactly what
              happens when you partner with Echo5 Digital for SEO.
            </p>
          </BlurIn>
        </div>

        <div className="relative z-10">
          {/* Connecting line — desktop */}
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
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#15172B",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "#5B5F73",
                        fontFamily: "Inter, sans-serif",
                      }}
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

      {/* ── AI MARKETING EMPLOYEE CONNECTION ─────────────────── */}
      <Section
        background="transparent"
        spacing="lg"
        maxWidth="xl"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="b" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-0 items-center">
          {/* Text side */}
          <div className="order-1 lg:order-1 lg:col-start-2 lg:row-start-1">
            <BlurIn>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(107,78,240,0.1)",
                  border: "1px solid rgba(107,78,240,0.3)",
                  color: "#6B4EF0",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Bot size={12} />
                AI Marketing Employee
              </span>
            </BlurIn>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
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
            <BlurIn delay={0.15}>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
              >
                SEO doesn't work in isolation — it's most powerful when it's
                connected. Echo5 Digital's AI Marketing Employee model integrates
                SEO with paid ads, social media, content marketing, and CRM
                automation into a single, unified growth engine. When your SEO
                content feeds your paid campaigns and your CRM closes the loop
                on which organic visitors convert, the results compound.
              </p>
            </BlurIn>
          </div>

          {/* Checklist cards */}
          <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 flex flex-col gap-3">
            {[
              "SEO included in relevant AI Marketing Employee plan tiers",
              "Unified data across all marketing channels",
              "AI identifies cross-channel optimization opportunities",
              "Single team, single strategy, compounding results",
            ].map((point, idx) => (
              <MagnetPop key={point} index={idx}>
                <div
                  className="flex gap-4 items-start p-4 rounded-xl transition-colors duration-200 hover:bg-[rgba(139,92,246,0.14)]"
                  style={{
                    background: "rgba(139,92,246,0.08)",
                    border: "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  <CheckCircle size={20} className="shrink-0 mt-0.5" color="#6B4EF0" />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </div>
              </MagnetPop>
            ))}
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80 mt-2"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Learn about the AI Marketing Employee
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image side — mobile/tablet: single image */}
          <Reveal variant="right" delay={0.1} className="order-2 lg:hidden">
            <TiltCard className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-30 blur-2xl"
                style={{
                  background: "radial-gradient(circle, rgba(107,78,240,0.35) 0%, transparent 70%)",
                  transform: "scale(0.85)",
                }}
              />
              <motion.div
                className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                style={{
                  border: "1px solid rgba(124,58,237,0.2)",
                  boxShadow: "0 12px 40px rgba(91,63,163,0.15)",
                  background: "#F1EDFB",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="/search-find-view-information-data-graphic-symbol-icon-100kb.jpg"
                  alt="SEO research and search engine analysis workflow"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-5 -left-5 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  boxShadow: "0 12px 32px rgba(91,63,163,0.2)",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.4 }}
              >
                <CountUp
                  target={312}
                  suffix="%"
                  className="block text-2xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
                <p className="text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}>
                  Organic Traffic Growth
                </p>
              </motion.div>
            </TiltCard>
          </Reveal>

          {/* Image side — desktop/laptop: staggered 3-image stack */}
          <div className="hidden lg:block relative h-[620px] lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl opacity-30 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(107,78,240,0.3) 0%, transparent 70%)",
                transform: "scale(0.85)",
              }}
            />

            {/* Image 1 — top right */}
            <Reveal variant="right" delay={0.1} className="absolute top-0 right-0 w-[72%] z-30">
              <TiltCard className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "0 16px 40px rgba(91,63,163,0.2)",
                    background: "#F1EDFB",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/search-find-view-information-data-graphic-symbol-icon-100kb.jpg"
                    alt="SEO research and search engine analysis workflow"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -left-5 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 12px 32px rgba(91,63,163,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.4 }}
                >
                  <CountUp
                    target={312}
                    suffix="%"
                    className="block text-2xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <p className="text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}>
                    Organic Traffic Growth
                  </p>
                </motion.div>
              </TiltCard>
            </Reveal>

            {/* Image 2 — beneath, offset left */}
            <Reveal variant="up" delay={0.25} className="absolute top-[220px] left-0 w-[62%] z-20">
              <TiltCard className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "0 14px 36px rgba(91,63,163,0.18)",
                    background: "#F1EDFB",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/african-american-freelancer-listening-podcast-being-focused-online-work-100kb.jpg"
                    alt="SEO strategist focused on client campaign performance"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 p-3.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 10px 28px rgba(91,63,163,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.55 }}
                >
                  <p
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    24/7
                  </p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}>
                    AI Monitoring
                  </p>
                </motion.div>
              </TiltCard>
            </Reveal>

            {/* Image 3 — bottom right, beneath image 1 */}
            <Reveal variant="up" delay={0.4} className="absolute bottom-0 right-[6%] w-[54%] z-10">
              <TiltCard className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "0 12px 32px rgba(91,63,163,0.16)",
                    background: "#F1EDFB",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/person-sitting-bed-with-laptop-100kb.jpg"
                    alt="Client reviewing live SEO dashboard from their AI Marketing Employee"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 p-3.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 10px 28px rgba(91,63,163,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.7 }}
                >
                  <CountUp
                    target={5}
                    suffix="+"
                    className="block text-xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <p className="text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}>
                    Channels Unified
                  </p>
                </motion.div>
              </TiltCard>
            </Reveal>
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

        <div className="mt-8 mb-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            View all industries we serve
            <ArrowRight size={15} />
          </Link>
        </div>

        <TextMarquee
          text="Check out AEO & GEO strategies"
          href="/services/aeo-geo"
          className="-mx-4 sm:-mx-6 lg:-mx-8 border-y"
          background="rgba(255,255,255,0.02)"
          borderColor="rgba(124,58,237,0.25)"
          textColor="rgba(229,231,235,0.35)"
          duration={40}
        />
      </Section>

      {/* ── TRUST INDICATORS / LOCAL RELEVANCE ───────────────── */}
      <Section
        background="transparent"
        spacing="lg"
        maxWidth="xl"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="a" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <BlurIn>
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "linear-gradient(135deg, rgba(224,217,250,0.75), rgba(199,188,245,0.55))",
                border: "1px solid rgba(107,78,240,0.3)",
                boxShadow: "0 12px 40px rgba(107,78,240,0.15)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
              >
                Service Area
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#15172B",
                }}
              >
                Serving Houston, Sugar Land &amp; the Nation
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#3F4258", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital's SEO services are particularly valuable for
                businesses in Houston and Sugar Land, Texas, where local search
                competition is high. Our local SEO capabilities help Houston-area
                businesses rank for neighborhood and city-level searches, improving
                visibility to nearby customers actively looking for their services.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#3F4258", fontFamily: "Inter, sans-serif" }}
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
                ].map((area, i) => (
                  <MagnetPop key={area} index={i}>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} color="#6B4EF0" />
                      <span
                        className="text-sm"
                        style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                      >
                        {area}
                      </span>
                    </div>
                  </MagnetPop>
                ))}
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.15}>
            <div className="flex flex-col gap-6">
              {/* Contact card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(238,236,251,0.75))",
                  border: "1px solid rgba(107,78,240,0.22)",
                  boxShadow: "0 12px 40px rgba(107,78,240,0.12)",
                }}
              >
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#15172B",
                  }}
                >
                  Get in Touch
                </h3>
                <div className="space-y-3">
                  {/* Phone — verified fact */}
                  <a
                    href="tel:7134897004"
                    className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                    style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(107,78,240,0.12)",
                        border: "1px solid rgba(107,78,240,0.25)",
                      }}
                    >
                      <Phone size={15} color="#6B4EF0" />
                    </div>
                    <span>713-489-7004</span>
                  </a>
                  {/* Email — verified fact */}
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                    style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(107,78,240,0.12)",
                        border: "1px solid rgba(107,78,240,0.25)",
                      }}
                    >
                      <Mail size={15} color="#6B4EF0" />
                    </div>
                    <span>hello@echo5digital.com</span>
                  </a>
                  {/* Address — verified fact */}
                  <div
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(107,78,240,0.12)",
                        border: "1px solid rgba(107,78,240,0.25)",
                      }}
                    >
                      <MapPin size={15} color="#6B4EF0" />
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
                ].map((badge, i) => (
                  <MagnetPop key={badge.label} index={i}>
                    <div
                      className="rounded-xl p-4 text-center h-full"
                      style={{
                        background: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(107,78,240,0.18)",
                        boxShadow: "0 6px 20px rgba(107,78,240,0.08)",
                      }}
                    >
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          color: "#15172B",
                        }}
                      >
                        {badge.label}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                      >
                        {badge.sub}
                      </p>
                    </div>
                  </MagnetPop>
                ))}
              </div>
            </div>
          </BlurIn>
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
        background="transparent"
        spacing="xl"
        maxWidth="xl"
        withDivider
        className="!bg-[#EEECFB]"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <InkReveal origin="15% 20%" className="flex-1 lg:pt-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Start Here
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                color: "#15172B",
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
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
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
                    color="#6B4EF0"
                  />
                  <span
                    className="text-sm"
                    style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
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
                    "0 0 24px rgba(124,58,237,0.35), 0 4px 14px rgba(0,0,0,0.15)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </InkReveal>

          {/* Right: form */}
          <div className="flex-1 w-full">
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