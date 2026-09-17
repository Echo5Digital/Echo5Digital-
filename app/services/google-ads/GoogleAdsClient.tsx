"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { LavenderField, FloatDrift, PeelCard, FocusPullHero, PrismReveal } from "@/components/SolutionsFX";
import { TiltCard, DiagonalWipe, BlurIn, ScrollProgressRail } from "@/components/ScrollFX";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  BarChart2,
  Zap,
  Brain,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Settings,
  FileText,
  TrendingUp,
  Users,
  Eye,
  Layers,
  ShieldCheck,
  Cpu,
  RefreshCw,
  Briefcase,
  Home,
  Stethoscope,
  ShoppingBag,
  Wrench,
  Scale,
  GraduationCap,
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
  const [activeRelatedRow, setActiveRelatedRow] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pulseRelatedRow = (index: number) => {
    setActiveRelatedRow(index);
    window.setTimeout(() => {
      setActiveRelatedRow((current) => (current === index ? null : current));
    }, 900);
  };

  return (
    <>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="/crop-hands-using-laptop-office-80kb.jpg"
        className="min-h-screen flex items-center pt-[72px]"
        bgPositionClassName="bg-right sm:bg-center"
      >
        {/* Ambient glow orb on top of the photo overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Zap size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI-Powered PPC Management
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#E5E7EB" }}
          >
            <PrismReveal text="Google Ads That Convert" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Clicks Into Customers" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital combines agentic AI automation with expert human strategy to
            deliver high-performance Google Ads campaigns for small and mid-sized
            businesses in Houston, Texas and nationwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="#lead-form"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Demo
            </Link>
            <Link
              href="#how-it-works"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See How It Works →
            </Link>
          </div>

          {/* Scroll cue */}
          <motion.div
            aria-hidden="true"
            className="mt-20 w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-white/80"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </FocusPullHero>

      {/* ── QUICK ANSWER BLOCK ────────────────────────────────── */}
      <Section background="transparent" spacing="md" withDivider id="quick-answer" className="!bg-white">
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "#EEECFB",
            borderColor: "rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
              }}
            >
              <Search size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-lg sm:text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                What Is Google Ads Management?
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
              >
                Google Ads management is the ongoing strategy, setup, optimization, and
                reporting of paid search campaigns on Google to drive qualified traffic
                and leads for businesses. Echo5 Digital provides AI-assisted Google Ads
                management for small and mid-sized businesses in Houston, Sugar Land,
                Texas, and nationally across the U.S. Services include keyword research,
                ad copywriting, bid optimization, conversion tracking, and performance
                reporting. The agency uses an agentic AI system with human strategic
                oversight to maximize return on ad spend.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <Section background="default" spacing="sm" id="trust-bar">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { icon: <Brain size={16} />, label: "AI-Powered Campaigns" },
            { icon: <ShieldCheck size={16} />, label: "Certified PPC Strategists" },
            { icon: <Target size={16} />, label: "Search, Display & PMax" },
            { icon: <TrendingUp size={16} />, label: "ROI-First Approach" },
            { icon: <MapPin size={16} />, label: "Houston & Nationwide" },
            { icon: <BarChart2 size={16} />, label: "Full Conversion Tracking" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.08)",
                borderColor: "rgba(124,58,237,0.3)",
                color: "#E5E7EB",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span style={{ color: "#A855F7" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS GOOGLE ADS MANAGEMENT ────────────────────── */}
      <Section background="transparent" spacing="lg" withDivider id="what-is-google-ads" className="relative !bg-white overflow-hidden">
        <LavenderField variant="c" />

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
          <DiagonalWipe>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#6B4EF0",
                borderColor: "rgba(124,58,237,0.25)",
                background: "rgba(124,58,237,0.08)",
              }}
            >
              PPC Education
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              What Is Google Ads Management &amp; Why Does It Matter?
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed mb-4"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Google Ads (formerly Google AdWords) is Google's pay-per-click (PPC)
              advertising platform. Businesses bid on keywords, and their ads appear at
              the top of search results when users search for relevant terms. You only
              pay when someone clicks — making it one of the most cost-efficient ways to
              capture high-intent buyers.
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Without professional management, campaigns quickly drain budget on
              irrelevant clicks. Expert management ensures your ads reach the right
              people, at the right time, with the right message — maximizing return on
              ad spend (ROAS) for small and mid-sized businesses.
            </p>
          </DiagonalWipe>
        </div>

        {/* Numbered scroll-timeline of campaign types, alternating image side per step */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollProgressRail>
            <div className="space-y-16 md:space-y-24 md:pl-14">
              {[
                {
                  number: "01",
                  icon: <Search size={22} />,
                  title: "Search Campaigns",
                  desc: "Text ads placed directly on Google's search results pages, shown to people actively typing in the keywords your business wants to be found for. Because intent is already there, these clicks convert at the highest rate of any PPC format.",
                  image: "/search-find-view-information-data-graphic-symbol-icon-100kb.jpg",
                  alt: "Laptop showing a Google-style search engine results page",
                  stat: { label: "Best For", value: "High-Intent Buyers" },
                },
                {
                  number: "02",
                  icon: <Eye size={22} />,
                  title: "Display Campaigns",
                  desc: "Visual banner ads placed across millions of partner websites, apps, and video content in the Google Display Network — built for staying visible while your audience browses, reads, and researches elsewhere.",
                  image: "/team-reviewing-marketing-strategies-digital-screen-100kb.jpg",
                  alt: "Marketing team reviewing display campaign performance on a large screen",
                  stat: { label: "Best For", value: "Brand Awareness" },
                },
                {
                  number: "03",
                  icon: <Layers size={22} />,
                  title: "Performance Max",
                  desc: "Google's AI-driven campaign type that automatically finds and bids on the best-converting placements across Search, Display, YouTube, Gmail, and Maps — all from a single goal-based campaign.",
                  image: "/laptop-displaying-business-analytics-90kb.jpg",
                  alt: "Business analytics dashboard showing leads, negotiations, and signed contracts",
                  stat: { label: "Best For", value: "Cross-Channel Reach" },
                },
              ].map((item, i) => (
                <BlurIn key={item.number} delay={i * 0.08}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center ${
                      i % 2 === 1 ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    <div style={{ direction: "ltr" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-4xl font-black"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {item.number}
                        </span>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                            boxShadow: "0 6px 16px rgba(124,58,237,0.35)",
                          }}
                        >
                          <span style={{ color: "#fff" }}>{item.icon}</span>
                        </div>
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-relaxed mb-4"
                        style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                      >
                        {item.desc}
                      </p>
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{ background: "#EEECFB" }}
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                        >
                          {item.stat.label}:
                        </span>
                        <span
                          className="text-xs font-bold"
                          style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                        >
                          {item.stat.value}
                        </span>
                      </div>
                    </div>

                    <div style={{ direction: "ltr" }}>
                      <TiltCard index={i}>
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full rounded-2xl object-cover"
                          style={{
                            height: "280px",
                            border: "1px solid rgba(124,58,237,0.15)",
                            boxShadow: "0 20px 50px -12px rgba(91,63,163,0.35)",
                          }}
                        />
                      </TiltCard>
                    </div>
                  </div>
                </BlurIn>
              ))}
            </div>
          </ScrollProgressRail>
        </div>
      </Section>

      {/* ── SERVICES BREAKDOWN ────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider id="services-breakdown">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
            style={{
              color: "#A855F7",
              borderColor: "rgba(168,85,247,0.3)",
              background: "rgba(124,58,237,0.1)",
            }}
          >
            Our Google Ads Services
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Everything You Need for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Paid Search Success
            </span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            End-to-end Google Ads management from first click to closed customer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Settings,
              title: "Campaign Strategy & Setup",
              desc: "We build your account architecture from scratch — campaign types, ad groups, budget allocation, and targeting settings aligned to your goals.",
            },
            {
              icon: Search,
              title: "Keyword Research",
              desc: "Deep keyword analysis to find high-intent, cost-efficient terms your ideal customers are actively searching — and negative keywords to block wasted spend.",
            },
            {
              icon: FileText,
              title: "Ad Copywriting",
              desc: "Compelling responsive search ads, headlines, and descriptions crafted to maximize click-through rate and relevancy scores.",
            },
            {
              icon: TrendingUp,
              title: "Bid Management",
              desc: "AI-assisted and manual bid strategies to maximize conversions while keeping your cost-per-click and cost-per-acquisition on target.",
            },
            {
              icon: Users,
              title: "Audience Targeting",
              desc: "Layered audience segments including in-market audiences, remarketing lists, customer match, and lookalike targeting to reach buyers ready to convert.",
            },
            {
              icon: BarChart2,
              title: "Conversion Tracking",
              desc: "Accurate tracking of form fills, calls, purchases, and micro-conversions via Google Tag Manager and GA4 to attribute every lead to its source.",
            },
            {
              icon: Layers,
              title: "Landing Page Alignment",
              desc: "We audit and advise on landing page relevance and Quality Score optimization to reduce CPC and improve conversion rates.",
            },
            {
              icon: Eye,
              title: "Performance Reporting",
              desc: "Clear monthly reports with KPIs, spend breakdown, conversion data, and strategic recommendations so you always know where your budget is going.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.desc}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI-POWERED OPTIMIZATION ───────────────────────────── */}
      <Section background="transparent" spacing="lg" withDivider id="ai-optimization" className="!bg-white relative overflow-hidden">
        <LavenderField variant="b" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Text intro (heading + paragraph) ── */}
          <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#6B4EF0",
                borderColor: "rgba(124,58,237,0.25)",
                background: "rgba(124,58,237,0.08)",
              }}
            >
              AI + Human Intelligence
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              AI-Powered Campaign{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Optimization
              </span>
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's agentic AI system works 24/7 alongside our human
              strategists — automating the time-intensive optimizations that manual
              management misses, while keeping expert oversight at the core of every
              campaign decision.
            </p>
          </div>

          {/* ── Photo collage: three overlapping, tilting frames ── */}
          <div className="relative order-2 lg:order-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 h-[460px] sm:h-[520px]">
            <PeelCard
              index={0}
              className="absolute left-0 top-6 w-[62%] sm:w-[58%] z-10"
            >
              <TiltCard index={0}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    boxShadow: "0 30px 70px -20px rgba(91,63,163,0.45)",
                    border: "6px solid #fff",
                    transform: "rotate(-4deg)",
                  }}
                >
                  <img
                    src="/laptop-displaying-business-analytics-90kb.jpg"
                    alt="Laptop displaying real-time Google Ads business analytics dashboard"
                    className="w-full object-cover"
                    style={{ height: "320px" }}
                  />
                </div>
              </TiltCard>
            </PeelCard>

            <PeelCard
              index={1}
              className="absolute right-0 top-0 w-[52%] sm:w-[50%] z-20"
            >
              <TiltCard index={1}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    boxShadow: "0 30px 70px -18px rgba(91,63,163,0.4)",
                    border: "6px solid #fff",
                    transform: "rotate(5deg)",
                  }}
                >
                  <img
                    src="/corporate-employee-working-night-time-startup-office-90kb.jpg"
                    alt="Paid search strategist monitoring campaign performance late at night"
                    className="w-full object-cover"
                    style={{ height: "260px" }}
                  />
                </div>
              </TiltCard>
            </PeelCard>

            <PeelCard
              index={2}
              className="absolute left-[14%] sm:left-[18%] bottom-0 w-[56%] sm:w-[52%] z-30"
            >
              <TiltCard index={2}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    boxShadow: "0 30px 70px -16px rgba(91,63,163,0.5)",
                    border: "6px solid #fff",
                    transform: "rotate(3deg)",
                  }}
                >
                  <img
                    src="/person-using-laptop-table-90kb.jpg"
                    alt="Marketer reviewing keyword and bid strategy on a laptop"
                    className="w-full object-cover"
                    style={{ height: "230px" }}
                  />
                </div>
              </TiltCard>
            </PeelCard>

            {/* Floating badge */}
            <FloatDrift duration={3.8} className="absolute -top-2 right-[6%] sm:right-[10%] z-40 hidden sm:block">
              <div
                className="rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #F3F0FD)",
                  border: "1px solid rgba(124,58,237,0.18)",
                  boxShadow: "0 18px 40px -12px rgba(91,63,163,0.35)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 18px rgba(124,58,237,0.5)",
                  }}
                >
                  <Cpu size={17} color="#fff" />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}>
                    Agentic AI
                  </p>
                  <p className="text-xs" style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}>
                    Always optimizing
                  </p>
                </div>
              </div>
            </FloatDrift>

            {/* Accent glow ring behind the collage */}
            <div
              aria-hidden="true"
              className="absolute -z-10 rounded-full blur-3xl"
              style={{
                width: 340,
                height: 340,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="order-3 lg:order-3 lg:col-start-2 lg:row-start-2">
            <div className="space-y-4">
              {[
                {
                  icon: <RefreshCw size={16} />,
                  title: "Automated Bid Adjustments",
                  desc: "AI evaluates device, location, time-of-day, and audience signals to adjust bids in real time — maximizing conversions per dollar.",
                },
                {
                  icon: <Brain size={16} />,
                  title: "Audience Refinement",
                  desc: "The AI identifies high-converting audience segments and reallocates budget toward the users most likely to convert.",
                },
                {
                  icon: <TrendingUp size={16} />,
                  title: "Performance Anomaly Detection",
                  desc: "Automated alerts flag sudden CPC spikes, CTR drops, or conversion declines so issues are resolved before they impact your ROI.",
                },
                {
                  icon: <ShieldCheck size={16} />,
                  title: "Human Strategic Oversight",
                  desc: "Our paid search strategists review AI outputs, set campaign direction, approve creative, and manage budget strategy — ensuring AI serves your business goals.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #F5F3FE 0%, #EEECFB 100%)",
                    borderColor: "rgba(124,58,237,0.15)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 6px 16px rgba(124,58,237,0.35)",
                    }}
                  >
                    <span style={{ color: "#fff" }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider id="how-it-works">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
            style={{
              color: "#A855F7",
              borderColor: "rgba(168,85,247,0.3)",
              background: "rgba(124,58,237,0.1)",
            }}
          >
            The Process
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How We Launch &amp; Optimize Your Campaigns
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            A clear, structured approach from your first call to ongoing results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-6 top-8 bottom-8 w-px hidden lg:block"
            style={{ background: "linear-gradient(180deg, #7C3AED, #A855F7, transparent)" }}
          />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
            {[
              {
                step: "01",
                icon: <Search size={20} />,
                title: "Discovery & Strategy Session",
                desc: "We learn your business, goals, budget, and competitors. We audit any existing campaigns and define success metrics before spending a dollar.",
              },
              {
                step: "02",
                icon: <Target size={20} />,
                title: "Keyword Research & Audience Mapping",
                desc: "In-depth keyword analysis, search intent mapping, negative keyword lists, and audience segment planning.",
              },
              {
                step: "03",
                icon: <Settings size={20} />,
                title: "Campaign Setup & Ad Creation",
                desc: "Account structure, ad copy creation, extension setup, Quality Score optimization, and conversion tracking installation.",
              },
              {
                step: "04",
                icon: <Zap size={20} />,
                title: "Campaign Launch",
                desc: "Go-live with real-time monitoring. We watch closely in the first 48–72 hours to catch any anomalies and make immediate refinements.",
              },
              {
                step: "05",
                icon: <RefreshCw size={20} />,
                title: "AI-Driven Optimization Cycles",
                desc: "Our agentic AI runs continuous bid, audience, and placement optimizations — reviewed and directed by human strategists weekly.",
              },
              {
                step: "06",
                icon: <BarChart2 size={20} />,
                title: "Performance Reporting & Strategy Reviews",
                desc: "Monthly reports covering spend, conversions, CPC, ROAS, and strategic next steps. Regular calls to align on evolving business goals.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 rounded-2xl border"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                    }}
                  >
                    <span style={{ color: "#fff" }}>{step.icon}</span>
                  </div>
                  <span
                    className="text-xs font-bold"
                    style={{ color: "rgba(168,85,247,0.5)", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INTERNAL LINKS ────────────────────────────────────── */}
      <Section background="transparent" spacing="lg" withDivider id="related-services" className="relative !bg-white overflow-hidden">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-1/4 right-0 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B4EF0", fontFamily: "Space Grotesk, sans-serif" }}>
            Related Services
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
          >
            Explore More Echo5 Digital Services
          </h2>
        </div>

        <div className="relative z-10">
          {[
            {
              href: "/services/meta-ads",
              title: "Meta Ads",
              desc: "Facebook & Instagram paid campaigns to reach audiences at every stage of the funnel.",
              image: "https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              href: "/services/seo",
              title: "SEO Services",
              desc: "Organic search ranking to complement your paid traffic and reduce long-term acquisition costs.",
              image: "/3d-graph-computer-illustration-100kb.jpg",
            },
            {
              href: "/services/local-seo",
              title: "Local SEO",
              desc: "Dominate local search in Houston, Sugar Land, and nearby markets with geo-targeted optimization.",
              image: "https://images.pexels.com/photos/18462227/pexels-photo-18462227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              href: "/ai-marketing-employee",
              title: "AI Marketing Employee",
              desc: "An always-on AI marketing system that powers and coordinates all your digital channels.",
              image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
          ].map((link, idx) => (
            <DiagonalWipe
              key={link.title}
              delay={idx * 0.12}
              className="border-t border-[rgba(124,58,237,0.15)] last:border-b"
            >
              <Link
                href={link.href}
                className="group flex items-center gap-4 sm:gap-6 md:gap-10 py-6 md:py-8"
                onTouchStart={() => pulseRelatedRow(idx)}
              >
                <BlurIn delay={idx * 0.12 + 0.1} className="flex-shrink-0">
                  <div
                    className={`relative w-20 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 ${
                      activeRelatedRow === idx ? "-translate-y-2" : ""
                    }`}
                    style={{ boxShadow: "0 12px 32px rgba(91,63,163,0.25)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <img
                      src={link.image}
                      alt={`Team reviewing ${link.title} performance data`}
                      className="w-full h-full object-cover"
                    />
                    {/* Diagonal light sweep on hover (desktop) / tap (mobile) */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none ${
                        activeRelatedRow === idx ? "translate-x-full" : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
                      }}
                    />
                  </div>
                </BlurIn>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`font-bold tracking-tight transition-colors duration-300 group-hover:text-transparent ${
                        activeRelatedRow === idx ? "text-transparent" : ""
                      }`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                        color: "#15172B",
                        backgroundImage: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      {link.title}
                    </h3>
                    <span
                      className={`hidden md:flex flex-shrink-0 items-center gap-2 text-sm font-medium opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${
                        activeRelatedRow === idx ? "opacity-100 translate-x-0" : ""
                      }`}
                      style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                    >
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                    {link.desc}
                  </p>
                </div>
              </Link>
            </DiagonalWipe>
          ))}
        </div>
      </Section>

      {/* ── INDUSTRIES ────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider id="industries">
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
            style={{
              color: "#A855F7",
              borderColor: "rgba(168,85,247,0.3)",
              background: "rgba(124,58,237,0.1)",
            }}
          >
            Verticals We Serve
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Industries We Run Google Ads For
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            We manage paid search campaigns across a wide range of industries, with
            tailored strategies for each vertical's unique buyer journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: <Home size={22} />, label: "Home Services", href: "/industries/home-services" },
            { icon: <Stethoscope size={22} />, label: "Healthcare", href: "/industries/healthcare" },
            { icon: <ShoppingBag size={22} />, label: "E-Commerce", href: "/industries/ecommerce" },
            { icon: <Briefcase size={22} />, label: "Professional Services", href: "/industries/professional-services" },
            { icon: <Wrench size={22} />, label: "Contractors", href: "/industries/contractors" },
            { icon: <Scale size={22} />, label: "Legal", href: "/industries/legal" },
            { icon: <GraduationCap size={22} />, label: "Education", href: "/industries/education" },
            { icon: <Target size={22} />, label: "Automotive", href: "/industries/automotive" },
            { icon: <Users size={22} />, label: "Nonprofits", href: "/industries/nonprofits" },
            { icon: <TrendingUp size={22} />, label: "Finance", href: "/industries/finance" },
            { icon: <Layers size={22} />, label: "SaaS & Tech", href: "/industries/saas-tech" },
            { icon: <Zap size={22} />, label: "Restaurants", href: "/industries/restaurants" },
          ].map((industry, i) => (
            <Link key={i} href={industry.href}>
              <div
                className="flex flex-col items-center gap-3 p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.5)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.12)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(124,58,237,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.06)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <span style={{ color: "#A855F7" }}>{industry.icon}</span>
                <span
                  className="text-xs font-medium leading-tight"
                  style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                >
                  {industry.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ───────────────────────────────────── */}
      <Section background="transparent" spacing="md" withDivider id="local-service" className="!bg-white">
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "#EEECFB",
            borderColor: "rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                }}
              >
                <MapPin size={22} color="#fff" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  Serving Houston &amp; Sugar Land, Texas
                </h2>
                <p
                  className="text-sm leading-relaxed max-w-2xl"
                  style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                >
                  Echo5 Digital runs Google Ads campaigns for businesses in Houston and
                  Sugar Land, Texas, targeting geo-specific search queries to deliver
                  high-intent local leads. Houston-area businesses looking to generate
                  leads through paid search can contact us directly.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="tel:713-489-7004"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
                  >
                    <Phone size={15} />
                    {/* Verified phone number */}
                    713-489-7004
                  </a>
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
                  >
                    <Mail size={15} />
                    hello@echo5digital.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link href="#lead-form">
                <Button size="md" variant="primary" rightIcon={<ArrowRight size={16} />}>
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ─────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#A855F7",
                borderColor: "rgba(168,85,247,0.3)",
                background: "rgba(124,58,237,0.1)",
              }}
            >
              FAQ
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-base"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Everything you need to know about Google Ads management with Echo5 Digital.
            </p>
          </div>

          <div className="space-y-3" role="list">
            {faqData.map((faq, i) => (
              <div
                key={i}
                role="listitem"
                className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: openFaq === i ? "rgba(168,85,247,0.45)" : "rgba(124,58,237,0.2)",
                  background: openFaq === i ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.04)",
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className="text-sm sm:text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openFaq === i
                        ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                        : "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    {openFaq === i ? (
                      <ChevronUp size={14} color="#fff" />
                    ) : (
                      <ChevronDown size={14} style={{ color: "#A855F7" }} />
                    )}
                  </span>
                </button>

                {openFaq === i && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-5 pb-5"
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LEAD FORM CTA ─────────────────────────────────────── */}
      <Section
        background="transparent"
        spacing="xl"
        maxWidth="3xl"
        id="lead-form"
        withDivider
        className="!bg-[#EEECFB]"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="flex-1 lg:pt-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Ready to Drive More Leads
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                with Google Ads?
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Book a free paid search consultation with Echo5 Digital. We'll audit your
              current campaigns (or build one from scratch), identify growth
              opportunities, and show you exactly how AI-powered management can lower
              your cost per lead.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Free account audit for existing campaigns",
                "Custom strategy aligned to your budget",
                "AI + human management from day one",
                "Full conversion tracking setup included",
                "Transparent monthly reporting",
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>Or reach us directly:</p>
              <a href="tel:713-489-7004" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                📞 713-489-7004
              </a>
              <a href="mailto:hello@echo5digital.com" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                ✉️ hello@echo5digital.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full">
            <ContactForm
              heading="Book a Free Google Ads Demo"
              subheading="Tell us about your business and goals. We'll respond within 24 hours with a tailored paid search strategy."
              submitLabel="Request My Free Consultation"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}