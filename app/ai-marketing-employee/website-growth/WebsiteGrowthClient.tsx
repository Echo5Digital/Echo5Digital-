"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Search,
  FileText,
  Activity,
  BarChart2,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Users,
  Star,
  Bot,
  Eye,
  RefreshCcw,
  Layers,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function WebsiteGrowthClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0A0F1E", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/27141314/pexels-photo-27141314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="AI-powered website growth dashboard"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(17,13,46,0.85) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Bot size={14} className="text-purple-400" />
            <span className="text-purple-300 text-xs font-semibold uppercase tracking-widest">
              AI Marketing Employee — Mid-Tier Plan
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Website Growth Plan
            <span
              className="block mt-2"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7, #C084FC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Organic Traffic. Done For You.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital's AI-powered SEO, Answer Engine Optimization, and content production system working
            around the clock — with human strategists ensuring every output aligns with your business goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Demo <ArrowRight size={18} />
            </a>
            <a
              href="#whats-included"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 text-base border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See What's Included
            </a>
          </div>

          {/* Quick trust stats */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Done-For-You", icon: CheckCircle },
              { label: "Human Oversight", icon: Eye },
              { label: "Monthly Reports", icon: BarChart2 },
              { label: "AI-First Engine", icon: Bot },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)" }}
                >
                  <Icon size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-300 text-xs font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(124,58,237,0.35)",
            boxShadow: "0 0 40px rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={16} color="#fff" />
            </div>
            <span
              className="text-purple-400 text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Quick Answer
            </span>
          </div>
          <p
            className="text-gray-200 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The <strong className="text-white">Website Growth plan</strong> is a tier within Echo5 Digital's{" "}
            <strong className="text-white">AI Marketing Employee system</strong> designed for small and mid-sized
            businesses that need consistent organic growth. It combines AI-driven SEO, Answer Engine Optimization,
            content production, and website performance monitoring into a single{" "}
            <strong className="text-white">done-for-you service</strong>. Human strategists oversee every output to
            ensure quality and alignment with business goals. Echo5 Digital serves clients in{" "}
            <strong className="text-white">Houston, Sugar Land, Texas</strong>, and nationally across the U.S.
          </p>
        </div>
      </Section>

      {/* ── WHAT'S INCLUDED ── */}
      <Section id="whats-included" background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            Complete Deliverables
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            What's Included
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Every component of the Website Growth plan works together as an integrated system — no gaps, no guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "AI-Powered SEO",
              description:
                "Comprehensive keyword research, on-page optimization, meta data, internal linking, and technical SEO improvements executed by our agentic AI system.",
              badge: "Core",
            },
            {
              icon: Bot,
              title: "Answer Engine Optimization (AEO)",
              description:
                "Content structured to appear in AI-generated answers, featured snippets, and voice search results — positioning your brand as the authoritative source.",
              badge: "Core",
            },
            {
              icon: FileText,
              title: "Content Production",
              description:
                "Regular blog articles, landing page copy, and FAQs written by AI and reviewed by human strategists to match your brand voice and target keywords.",
              badge: "Ongoing",
            },
            {
              icon: Globe,
              title: "On-Page Optimization",
              description:
                "Continuous refinement of existing pages — headers, schema markup, image alt text, page speed — to maximize search engine visibility.",
              badge: "Ongoing",
            },
            {
              icon: Activity,
              title: "Website Health Monitoring",
              description:
                "Automated crawls detect broken links, indexing issues, Core Web Vitals regressions, and security flags before they impact rankings.",
              badge: "24/7",
            },
            {
              icon: BarChart2,
              title: "Performance Reporting",
              description:
                "Monthly reports covering organic sessions, keyword rankings, page speed scores, and conversion trends with plain-English commentary.",
              badge: "Monthly",
            },
          ].map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            The Process
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Five stages. Continuous iteration. Human oversight at every step.
          </p>
        </div>

        <div className="relative">
          {/* Connector line desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(168,85,247,0.5), transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                icon: Search,
                title: "Audit",
                description: "AI audits your site's technical health, keyword gaps, and competitor landscape.",
                oversight: "Human strategist reviews audit findings",
              },
              {
                step: "02",
                icon: Target,
                title: "Optimize",
                description: "On-page fixes, schema markup, and meta improvements are applied automatically.",
                oversight: "Human approves priority changes",
              },
              {
                step: "03",
                icon: FileText,
                title: "Publish",
                description: "AI drafts SEO and AEO content; human editors review before it goes live.",
                oversight: "Human reviews all content",
              },
              {
                step: "04",
                icon: BarChart2,
                title: "Measure",
                description: "Rankings, organic traffic, and Core Web Vitals are tracked in real time.",
                oversight: "Monthly report delivered to client",
              },
              {
                step: "05",
                icon: RefreshCcw,
                title: "Iterate",
                description: "Data from the previous cycle informs the next round of optimizations.",
                oversight: "Strategy reviewed quarterly",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.4)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.2)",
                    }}
                  >
                    <item.icon size={28} className="text-purple-400" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.description}
                </p>
                <div
                  className="w-full px-3 py-2 rounded-lg text-xs text-purple-300"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", fontFamily: "Inter, sans-serif" }}
                >
                  👁 {item.oversight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RESULTS INDICATORS ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-4">
          <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            Illustrative Metrics
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Results Indicators
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
            The following metrics represent the types of improvements clients typically work toward. Results vary by industry, competition, and starting baseline.
          </p>
          <span
            className="inline-block text-xs px-3 py-1 rounded-full border"
            style={{
              color: "#A855F7",
              borderColor: "rgba(168,85,247,0.35)",
              background: "rgba(124,58,237,0.08)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            ⚠ Illustrative only — not guaranteed outcomes
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: "Organic Sessions", direction: "↑", range: "30–120%", timeframe: "over 6 months", icon: TrendingUp, color: "#A855F7" },
            { metric: "Keyword Rankings", direction: "↑", range: "50–200", timeframe: "new positions tracked", icon: Search, color: "#7C3AED" },
            { metric: "Page Speed Score", direction: "↑", range: "80–95", timeframe: "target Core Web Vitals", icon: Zap, color: "#A855F7" },
            { metric: "Lead Inquiries", direction: "↑", range: "20–60%", timeframe: "from organic sources", icon: Target, color: "#7C3AED" },
          ].map((item) => (
            <div
              key={item.metric}
              className="flex flex-col items-center text-center p-6 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: item.color }}
              >
                {item.direction} {item.range}
              </div>
              <div className="text-white font-semibold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {item.metric}
              </div>
              <div className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                {item.timeframe}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPARISON STRIP ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            Plan Comparison
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Find the Right Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Website Growth sits in the middle of the AI Marketing Employee stack — more comprehensive than entry-level, focused on organic before adding paid channels.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-5 text-gray-400 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  Feature
                </th>
                {[
                  { name: "Starter", highlight: false },
                  { name: "Website Growth", highlight: true },
                  { name: "Super Growth", highlight: false },
                ].map((plan) => (
                  <th
                    key={plan.name}
                    className="py-4 px-5 text-center text-sm font-semibold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: plan.highlight ? "#A855F7" : "#E5E7EB",
                      background: plan.highlight ? "rgba(124,58,237,0.1)" : "transparent",
                      borderRadius: plan.highlight ? "0.75rem 0.75rem 0 0" : undefined,
                    }}
                  >
                    {plan.highlight && (
                      <span className="block text-xs text-purple-400 font-normal mb-1 uppercase tracking-widest">
                        ← You Are Here
                      </span>
                    )}
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Technical SEO", starter: "Basic", growth: "Comprehensive", super: "Comprehensive" },
                { feature: "Keyword Targeting", starter: "Narrow", growth: "Broad", super: "Broad" },
                { feature: "AEO Content", starter: "—", growth: "✓ Included", super: "✓ Included" },
                { feature: "Content Production", starter: "Limited", growth: "Regular", super: "High Volume" },
                { feature: "Website Health Monitoring", starter: "—", growth: "✓ 24/7", super: "✓ 24/7" },
                { feature: "Paid Media (Google/Meta Ads)", starter: "—", growth: "—", super: "✓ Included" },
                { feature: "Social Media Channels", starter: "—", growth: "—", super: "✓ Included" },
                { feature: "Monthly Reporting", starter: "Basic", growth: "Full", super: "Full + Custom" },
                { feature: "Human Oversight", starter: "✓", growth: "✓", super: "✓" },
              ].map((row, i) => (
                <tr
                  key={row.feature}
                  style={{ borderTop: "1px solid rgba(124,58,237,0.15)" }}
                >
                  <td
                    className="py-4 px-5 text-gray-300 text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="py-4 px-5 text-center text-sm text-gray-500"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {row.starter}
                  </td>
                  <td
                    className="py-4 px-5 text-center text-sm font-medium"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#A855F7",
                      background: "rgba(124,58,237,0.07)",
                    }}
                  >
                    {row.growth}
                  </td>
                  <td
                    className="py-4 px-5 text-center text-sm text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {row.super}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 24px rgba(124,58,237,0.45)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Start with Website Growth <ArrowRight size={16} />
          </a>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-purple-300 text-sm border border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            View All Plans
          </Link>
        </div>
      </Section>

      {/* ── IDEAL CLIENT PROFILE ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Who It's For
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Built for Established SMBs Ready to Grow Organically
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              The Website Growth plan is designed for small and mid-sized businesses that already have an online presence but struggle to generate consistent organic traffic and leads. You've built the business — now you need the visibility to match.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              This plan is ideal if you're spending too much time running your business to manage an internal marketing team, you've tried SEO before but didn't see sustained results, or you want a predictable, done-for-you system that grows your website while you focus on serving customers.
            </p>

            <ul className="space-y-3">
              {[
                "Houston & Sugar Land area businesses seeking local search visibility",
                "National SMBs competing in mid-range keyword categories",
                "Service businesses, professional practices, and e-commerce brands",
                "Companies without an in-house marketing or content team",
                "Businesses transitioning from paid-only traffic to organic growth",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Small business owner reviewing organic growth analytics"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, transparent 60%)",
                border: "1px solid rgba(124,58,237,0.35)",
              }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 p-4 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.85)",
                border: "1px solid rgba(124,58,237,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  <Users size={16} color="#fff" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Serving Houston, Sugar Land & Nationally
                  </p>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    Echo5 Digital — AI-powered growth, locally rooted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.04) 100%)",
            borderColor: "rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))", border: "1px solid rgba(168,85,247,0.4)" }}
            >
              <Globe size={22} className="text-purple-400" />
            </div>
            <div>
              <h2
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Serving Houston, Sugar Land &amp; Businesses Across the U.S.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Houston and Sugar Land small businesses looking to grow organic search visibility without hiring an
                in-house marketing team are the primary audience for this plan. Echo5 Digital is locally based,
                giving Houston-area clients the benefit of a nearby team that understands the regional competitive
                landscape while also serving national U.S. clients remotely.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {/* Phone — real number from verified facts */}
                <a
                  href="tel:7134897004"
                  className="inline-flex items-center gap-2 text-purple-300 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="text-purple-500">📞</span>
                  {/* Verified phone */}
                  713-489-7004
                </a>
                {/* Email — real from verified facts */}
                <a
                  href="mailto:hello@echo5digital.com"
                  className="inline-flex items-center gap-2 text-purple-300 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="text-purple-500">✉</span>
                  hello@echo5digital.com
                </a>
                {/* Address — real from verified facts */}
                <span className="inline-flex items-center gap-2 text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="text-purple-500">📍</span>
                  Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="md" withDivider>
        <div className="text-center mb-8">
          <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
            Why Trust Echo5 Digital
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: Bot, label: "AI-First Methodology" },
            { icon: Eye, label: "Human Oversight" },
            { icon: Shield, label: "Transparent Reporting" },
            { icon: Clock, label: "Always-On Monitoring" },
            { icon: Layers, label: "Full-Stack Capability" },
            { icon: Star, label: "Results-Driven Focus" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-4 rounded-xl border text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
              >
                <Icon size={18} className="text-purple-400" />
              </div>
              <span className="text-gray-300 text-xs font-medium leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Methodology badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Agentic AI Execution",
            "E-E-A-T Aligned Content",
            "Core Web Vitals Optimized",
            "Schema Markup Specialists",
            "AEO / GEO Ready",
            "Local SEO Expertise",
          ].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-purple-300 border"
              style={{
                borderColor: "rgba(124,58,237,0.35)",
                background: "rgba(124,58,237,0.1)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <CheckCircle size={12} className="text-purple-400" />
              {badge}
            </span>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            Common Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: openFaq === index ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.25)",
                background: openFaq === index ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                {openFaq === index ? (
                  <ChevronUp size={20} className="text-purple-400 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA – BOOK A DEMO ── */}
      <Section id="cta" background="gradient" spacing="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <span className="inline-block text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Get Started Today
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Ready to Grow Your Organic Traffic?
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              Book a free discovery call to see how the Website Growth plan can deliver consistent SEO, content, and
              performance improvements — without you lifting a finger. Our team will assess your current site and
              outline a tailored roadmap.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "No long-term contracts required",
                "Onboarding within 5 business days",
                "First report delivered within 30 days",
                "Cancel or upgrade anytime",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Direct contact */}
            <div
              className="p-5 rounded-xl border"
              style={{
                background: "rgba(124,58,237,0.08)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-3 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                Prefer to reach out directly?
              </p>
              <div className="space-y-2">
                <a
                  href="tel:7134897004"
                  className="flex items-center gap-2 text-purple-300 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>📞</span>
                  {/* Verified phone */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 text-purple-300 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>✉</span>
                  hello@echo5digital.com
                </a>
                <span className="flex items-center gap-2 text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span>📍</span>
                  Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm
              heading="Book a Website Growth Demo"
              subheading="Tell us about your business and we'll show you exactly how the Website Growth plan can increase your organic traffic and leads."
              submitLabel="Request My Free Demo"
              showAppointmentNote={true}
            />
            {/* Hidden tier tag for tracking */}
            {/* data-tier="website-growth" data-utm-campaign="website-growth-page" */}
          </div>
        </div>
      </Section>
    </main>
  );
}