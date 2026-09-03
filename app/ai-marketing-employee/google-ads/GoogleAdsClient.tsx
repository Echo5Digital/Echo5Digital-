"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Search,
  Bot,
  BarChart3,
  Target,
  Zap,
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  DollarSign,
  Clock,
  Eye,
  MousePointer,
  Shield,
  Settings,
  FileText,
  LayoutDashboard,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function GoogleAdsClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E", paddingTop: "4rem", paddingBottom: "5rem" }}
      >
        {/* Background glow blobs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Hero image background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,15,30,0.6) 0%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-600/10">
            <Bot size={14} className="text-purple-400" />
            <span
              className="text-purple-300 text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee — Google Ads Tier
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            AI-Managed Google Ads That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Drive Real Leads
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital's agentic AI continuously monitors, optimizes, and manages your
            Google Ads campaigns — so you stop wasting ad spend and start generating qualified
            leads with human strategic oversight at every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get a Free Google Ads Audit
              <ArrowRight size={18} />
            </a>
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-600/10"
              style={{
                border: "1.5px solid rgba(124,58,237,0.4)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              View All AI Tiers
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "24/7", label: "AI Monitoring" },
              { value: "Real-Time", label: "Bid Adjustments" },
              { value: "Full", label: "Campaign Setup" },
              { value: "Human", label: "Strategic Oversight" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center px-4 py-5 rounded-xl border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                <p
                  className="text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl border p-6 sm:p-8"
          style={{
            borderColor: "rgba(124,58,237,0.35)",
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                border: "1px solid rgba(168,85,247,0.35)",
              }}
            >
              <Search size={20} className="text-purple-400" />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Quick Answer
            </span>
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            What Is the AI Marketing Employee — Google Ads Tier?
          </h2>
          <p
            className="text-gray-300 leading-relaxed text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Google Ads tier of Echo5 Digital's AI Marketing Employee is a{" "}
            <strong className="text-white">done-for-you paid search management service</strong>{" "}
            for small and mid-sized businesses. It uses agentic AI to continuously manage
            campaign setup, keyword targeting, bid optimization, ad copywriting, and conversion
            tracking on Google Ads, with Echo5's human team providing strategic oversight. The
            service is available to businesses in{" "}
            <strong className="text-white">Houston, Texas, and nationally across the U.S.</strong>{" "}
            — giving local companies and growing brands a fully managed paid search engine that
            never stops working.
          </p>
        </div>
      </Section>

      {/* ── WHY GOOGLE ADS NEEDS CONSTANT OPTIMIZATION ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Problem with "Set It and Forget It"
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Why Google Ads Demands{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Continuous Optimization
            </span>
          </h2>
          <p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Google Ads is a live auction that changes every second. Campaigns launched and left
            untouched quickly become expensive and inefficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "Keyword Decay",
              desc: "High-performing keywords lose relevance as search trends shift. Without ongoing review, budgets flow to terms that no longer convert.",
            },
            {
              icon: DollarSign,
              title: "Budget Waste",
              desc: "Unmanaged campaigns attract irrelevant clicks. Negative keywords and match-type adjustments must be updated regularly to protect spend.",
            },
            {
              icon: TrendingUp,
              title: "Competitor Bidding",
              desc: "Rival businesses adjust bids constantly. Static campaigns lose impression share and quality rankings without dynamic bid management.",
            },
            {
              icon: BarChart3,
              title: "Quality Score Drift",
              desc: "Ad relevance, landing page experience, and expected click-through rates decay. Low quality scores drive up cost-per-click significantly.",
            },
            {
              icon: Target,
              title: "Audience Signal Shifts",
              desc: "Buyer behaviors and device preferences evolve. Audience targeting must adapt to match where and how your customers are searching.",
            },
            {
              icon: RefreshCw,
              title: "Algorithm Updates",
              desc: "Google's Smart Bidding and auction models change frequently. Campaigns need realignment to take advantage of new automation signals.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-lg shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={20} className="text-purple-400" />
              </div>
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 p-6 rounded-xl border text-center"
          style={{
            borderColor: "rgba(124,58,237,0.3)",
            background: "rgba(124,58,237,0.08)",
          }}
        >
          <p
            className="text-base text-gray-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <strong className="text-white">Echo5 Digital's AI Marketing Employee</strong> solves
            this by running a continuous optimization loop — monitoring, adjusting, and reporting
            around the clock so your campaigns never stagnate.
          </p>
        </div>
      </Section>

      {/* ── WHAT'S INCLUDED ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Full-Service Deliverables
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            What's Included in This Tier
          </h2>
          <p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Everything you need to run high-performing Google Ads campaigns — from setup to
            reporting — managed by AI with human oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Settings,
              title: "Campaign Setup",
              desc: "Full Google Ads account structure, campaign types (Search, Display, Performance Max), and ad group architecture built for your goals.",
            },
            {
              icon: Search,
              title: "Keyword Research",
              desc: "AI-powered keyword discovery, match type selection, and negative keyword lists to maximize relevant traffic and minimize waste.",
            },
            {
              icon: FileText,
              title: "Ad Copywriting",
              desc: "High-converting responsive search ads and headline variants crafted to match search intent and improve quality scores.",
            },
            {
              icon: Target,
              title: "Audience Targeting",
              desc: "Custom audience segments, in-market audiences, remarketing lists, and demographic layering for precision reach.",
            },
            {
              icon: DollarSign,
              title: "Bid Management",
              desc: "AI-driven Smart Bidding strategy configuration and continuous manual bid adjustments to protect ROI at every budget level.",
            },
            {
              icon: RefreshCw,
              title: "A/B Testing",
              desc: "Continuous ad variation testing to identify top-performing headlines, descriptions, and calls-to-action.",
            },
            {
              icon: MousePointer,
              title: "Conversion Tracking",
              desc: "Full Google Ads and GA4 conversion tracking setup for calls, form fills, purchases, and micro-conversions.",
            },
            {
              icon: LayoutDashboard,
              title: "Performance Reporting",
              desc: "Real-time metrics dashboard and regular reporting covering impressions, CTR, CPC, conversions, and cost-per-lead.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={18} className="text-purple-400" />
              </div>
              <h3
                className="text-base font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HOW THE AI MANAGES GOOGLE ADS ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Agentic AI + Human Intelligence
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              How the AI Manages Your Google Ads
            </h2>
            <p
              className="text-gray-400 leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's agentic AI systems operate as a tireless campaign manager —
              running analysis loops across your entire account to detect inefficiencies, test
              opportunities, and apply optimizations faster than any human team could manage
              manually. Echo5's strategists set direction, review AI outputs, and make
              higher-order decisions about budget strategy and campaign evolution.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Bot,
                  label: "Keyword Performance Monitoring",
                  desc: "AI tracks impression share, CTR, CPC, and conversion rate per keyword — pausing underperformers and scaling winners.",
                },
                {
                  icon: BarChart3,
                  label: "Quality Score Optimization",
                  desc: "Continuous ad relevance and landing page alignment signals are analyzed to keep quality scores high and CPCs low.",
                },
                {
                  icon: DollarSign,
                  label: "Bid Efficiency Analysis",
                  desc: "Bidding models are evaluated against actual conversion data, with adjustments made to protect target CPA and ROAS.",
                },
                {
                  icon: Shield,
                  label: "Human Strategic Oversight",
                  desc: "Echo5's team reviews AI findings, applies business context, and ensures campaign direction aligns with your growth goals.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                      border: "1px solid rgba(168,85,247,0.35)",
                    }}
                  >
                    <item.icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm text-gray-400 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered Google Ads monitoring dashboard showing real-time campaign analytics"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </Section>

      {/* ── OPTIMIZATION WORKFLOW ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Continuous Loop
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Google Ads Optimization Workflow
          </h2>
          <p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A repeating cycle of launch, monitor, adjust, review, and report — ensuring your
            campaigns improve continuously, not just at setup.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.6) 50%, rgba(124,58,237,0.4) 80%, transparent 95%)",
              top: "2.5rem",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {[
              {
                step: "01",
                icon: Settings,
                title: "Campaign Launch",
                desc: "AI builds full campaign structure, sets bidding strategies, and loads keyword lists and ad copy.",
              },
              {
                step: "02",
                icon: Eye,
                title: "Live Monitoring",
                desc: "Agentic AI tracks real-time signals: quality scores, impression share, conversion rates, and wasted spend.",
              },
              {
                step: "03",
                icon: Bot,
                title: "AI Adjustments",
                desc: "Automatic and semi-automatic bid changes, keyword pauses, negative additions, and ad variant rotations.",
              },
              {
                step: "04",
                icon: Shield,
                title: "Human Review",
                desc: "Echo5's strategists review AI recommendations, apply business context, and approve strategic pivots.",
              },
              {
                step: "05",
                icon: BarChart3,
                title: "Reporting",
                desc: "Performance data surfaces in your Client Command Center dashboard with clear KPIs and actionable insights.",
              },
            ].map((item, index) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-4">
                <div
                  className="relative flex items-center justify-center w-20 h-20 rounded-full border-2 shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    borderColor: "rgba(124,58,237,0.5)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.25)",
                  }}
                >
                  <item.icon size={26} className="text-purple-400" />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-white mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-gray-400 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PERFORMANCE RESPONSE FLOW ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Protecting Your Ad Spend
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Performance Response Flow
          </h2>
          <p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            When the AI detects an underperforming keyword, ad, or budget allocation, a
            structured response triggers automatically to protect your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Detection */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderColor: "rgba(124,58,237,0.25)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{
                  background: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                <AlertTriangle size={18} className="text-red-400" />
              </div>
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Signal Detection
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Keyword CTR drops below threshold",
                "CPC spikes without conversion gain",
                "Quality score declines detected",
                "Ad impression share lost to competitors",
                "Conversion rate falls on specific device or location",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "#EF4444" }}
                  />
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Response */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderColor: "rgba(124,58,237,0.25)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  border: "1px solid rgba(168,85,247,0.35)",
                }}
              >
                <Zap size={18} className="text-purple-400" />
              </div>
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Automated Response Actions
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Pause or reduce bids on underperforming keywords",
                "Reallocate budget to high-converting ad groups",
                "Add negatives to block irrelevant search terms",
                "Rotate in new ad copy variants for testing",
                "Flag anomalies for Echo5 human team review",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-purple-400 mt-0.5 shrink-0" />
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Arrow connector */}
        <div className="flex justify-center my-2" aria-hidden="true">
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full border text-sm font-medium"
            style={{
              borderColor: "rgba(124,58,237,0.3)",
              background: "rgba(124,58,237,0.08)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <RefreshCw size={14} />
            Continuous loop — detection → response → monitoring → repeat
          </div>
        </div>
      </Section>

      {/* ── RESULTS PREVIEW ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Representative Examples
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            The Kind of Results This Tier Targets
          </h2>
          <p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            These are representative outcome examples to illustrate the types of improvements
            AI-managed Google Ads optimization can achieve.{" "}
            <strong className="text-gray-300">
              Results vary by industry, budget, and market conditions.
            </strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              industry: "Home Services",
              metric: "Cost-Per-Lead",
              change: "↓ 38%",
              detail:
                "Continuous negative keyword hygiene and landing page alignment reduced wasted clicks and improved form conversion rates.",
              positive: true,
            },
            {
              industry: "Legal Services",
              metric: "Impression Share",
              change: "↑ 52%",
              detail:
                "Smart Bidding reconfiguration and budget reallocation to high-intent keywords captured more top-of-page positions.",
              positive: true,
            },
            {
              industry: "Healthcare / Clinics",
              metric: "Click-Through Rate",
              change: "↑ 64%",
              detail:
                "A/B ad copy testing identified higher-performing headlines that matched patient search intent more precisely.",
              positive: true,
            },
            {
              industry: "Professional Services",
              metric: "Wasted Spend",
              change: "↓ 45%",
              detail:
                "Irrelevant search term identification and automated negative additions dramatically reduced spend on non-converting queries.",
              positive: true,
            },
            {
              industry: "E-Commerce",
              metric: "Return on Ad Spend",
              change: "↑ 2.8x",
              detail:
                "Product-level bid adjustments and audience layering improved ROAS by concentrating budget on highest-converting product segments.",
              positive: true,
            },
            {
              industry: "Restaurants & Food",
              metric: "Qualified Leads",
              change: "↑ 3.1x",
              detail:
                "Geo-targeted local campaigns with call extensions and location bid adjustments drove more reservation and order conversions.",
              positive: true,
            },
          ].map((card) => (
            <div
              key={card.industry}
              className="p-6 rounded-xl border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold uppercase tracking-widest text-gray-500"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {card.industry}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    backgroundColor: "rgba(124,58,237,0.15)",
                    color: "#A855F7",
                    border: "1px solid rgba(168,85,247,0.25)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Representative Example
                </span>
              </div>
              <div>
                <p
                  className="text-sm text-gray-400 mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {card.metric}
                </p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {card.change}
                </p>
              </div>
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPARISON ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Why Echo5 Digital
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            AI Google Ads Management vs. Alternatives
          </h2>
          <p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            See how Echo5 Digital's AI-powered approach compares to managing campaigns yourself
            or working with a traditional PPC agency.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "rgba(124,58,237,0.25)" }}>
          <table className="w-full min-w-[640px]">
            <thead>
              <tr style={{ backgroundColor: "rgba(124,58,237,0.12)" }}>
                <th
                  className="text-left px-6 py-4 text-sm font-semibold text-gray-300"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Capability
                </th>
                <th
                  className="text-center px-6 py-4 text-sm font-semibold text-gray-300"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  DIY / In-House
                </th>
                <th
                  className="text-center px-6 py-4 text-sm font-semibold text-gray-300"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Traditional PPC Agency
                </th>
                <th
                  className="text-center px-6 py-4 text-sm font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Echo5 AI Tier
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  cap: "24/7 Campaign Monitoring",
                  diy: "✗",
                  agency: "Partial",
                  echo5: "✓",
                },
                {
                  cap: "Continuous Bid Optimization",
                  diy: "✗",
                  agency: "Monthly / Weekly",
                  echo5: "Near Real-Time",
                },
                {
                  cap: "Full Campaign Setup Included",
                  diy: "Manual",
                  agency: "✓ (High Cost)",
                  echo5: "✓",
                },
                {
                  cap: "Transparent Reporting Dashboard",
                  diy: "Self-Managed",
                  agency: "Often PDF Reports",
                  echo5: "Live Dashboard",
                },
                {
                  cap: "AI-Driven A/B Testing",
                  diy: "✗",
                  agency: "Rare",
                  echo5: "✓",
                },
                {
                  cap: "Human Strategic Oversight",
                  diy: "✓ (If You Have Expertise)",
                  agency: "✓",
                  echo5: "✓",
                },
                {
                  cap: "Cost Efficiency",
                  diy: "High Time Cost",
                  agency: "High Management Fee",
                  echo5: "Optimized",
                },
              ].map((row, i) => (
                <tr
                  key={row.cap}
                  style={{
                    backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    borderTop: "1px solid rgba(124,58,237,0.1)",
                  }}
                >
                  <td
                    className="px-6 py-4 text-sm font-medium text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {row.cap}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-center text-gray-500"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {row.diy}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-center text-gray-500"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {row.agency}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-center font-semibold text-purple-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {row.echo5}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl border p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center"
          style={{
            borderColor: "rgba(124,58,237,0.3)",
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
          }}
        >
          <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full" style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
            border: "1px solid rgba(168,85,247,0.35)",
          }}>
            <Target size={28} className="text-purple-400" />
          </div>
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Serving Houston, Sugar Land & Businesses Across the U.S.
            </h2>
            <p
              className="text-gray-400 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Houston and Sugar Land businesses running Google Ads campaigns benefit from Echo5
              Digital's local market knowledge alongside AI-driven optimization. The AI
              Marketing Employee's Google Ads tier can target geo-specific audiences in the
              Greater Houston area, helping local businesses generate qualified leads from paid
              search without managing campaigns themselves. Echo5 Digital also serves businesses
              nationally across the United States.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {/* NAP — real HTML text, verified facts only */}
              <span
                className="text-sm text-gray-400 flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
                Houston / Sugar Land, Texas
              </span>
              <span
                className="text-sm text-gray-400 flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
                <a href="tel:713-489-7004" className="hover:text-white transition-colors">
                  713-489-7004
                </a>
              </span>
              <span
                className="text-sm text-gray-400 flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
                <a
                  href="mailto:hello@echo5digital.com"
                  className="hover:text-white transition-colors"
                >
                  hello@echo5digital.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Common Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden"
              style={{
                borderColor: openFaq === index ? "rgba(168,85,247,0.45)" : "rgba(124,58,237,0.2)",
                backgroundColor: "rgba(255,255,255,0.03)",
                transition: "border-color 0.2s ease",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className="text-purple-400 shrink-0 transition-transform duration-300"
                  style={{
                    transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                style={{
                  maxHeight: openFaq === index ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <p
                  className="px-6 pb-5 text-sm text-gray-400 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section background="gradient" spacing="xl" maxWidth="xl" withDivider id="cta">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA copy */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ready to Scale Your Paid Search?
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Let AI Manage Your Google Ads —{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                While You Run Your Business
              </span>
            </h2>
            <p
              className="text-gray-400 leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's AI Marketing Employee takes full ownership of your Google Ads
              campaigns — from setup to continuous optimization — so you stop guessing and start
              generating consistent, qualified leads. Book a free demo and see how it works for
              your industry.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3 mb-8">
              <p
                className="text-sm text-gray-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Prefer to reach us directly?
              </p>
              {/* Phone — verified fact */}
              <a
                href="tel:713-489-7004"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "rgba(124,58,237,0.2)" }}>
                  <Zap size={12} className="text-purple-400" />
                </span>
                {/* Phone: verified fact — 713-489-7004 */}
                713-489-7004
              </a>
              {/* Email — verified fact */}
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "rgba(124,58,237,0.2)" }}>
                  <ArrowRight size={12} className="text-purple-400" />
                </span>
                hello@echo5digital.com
              </a>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Bot, label: "Agentic AI Optimization" },
                { icon: Shield, label: "Human Strategic Oversight" },
                { icon: BarChart3, label: "Live Performance Dashboard" },
                { icon: Clock, label: "No Long-Term Lock-In" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(168,85,247,0.25)",
                    }}
                  >
                    <item.icon size={14} className="text-purple-400" />
                  </div>
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm
            heading="Book a Free Google Ads Demo"
            subheading="Tell us about your current Google Ads setup and goals — we'll show you exactly how the AI Marketing Employee can improve your results."
            submitLabel="Send My Request"
            showAppointmentNote={true}
          />
        </div>
      </Section>
    </>
  );
}