"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Bot,
  Brain,
  Users,
  BarChart3,
  Search,
  Megaphone,
  Globe,
  FileText,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Eye,
  RefreshCw,
  AlertCircle,
  Layers,
  Monitor,
  Shield,
  Clock,
  DollarSign,
  Star,
  Building2,
  Stethoscope,
  ShoppingBag,
  Wrench,
  Home,
  GraduationCap,
  UtensilsCrossed,
  Car,
  Dumbbell,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function AIMarketingEmployeeClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      icon: Search,
      title: "SEO + AEO",
      badge: "Foundation",
      description:
        "AI-driven search engine and answer engine optimization. Rank in Google and get cited by AI answer systems like ChatGPT, Perplexity, and Gemini.",
      href: "/pricing",
    },
    {
      icon: Megaphone,
      title: "Social Media",
      badge: "Engagement",
      description:
        "Continuous AI-generated social content, scheduling, and performance tracking across all major platforms — hands-free.",
      href: "/pricing",
    },
    {
      icon: BarChart3,
      title: "Google Ads",
      badge: "Paid Growth",
      description:
        "AI-managed Google Ads campaigns with automated bidding, copy testing, and budget optimization for maximum ROAS.",
      href: "/pricing",
    },
    {
      icon: FileText,
      title: "Content",
      badge: "Authority",
      description:
        "Blog posts, landing pages, and lead magnets created and published by AI — reviewed by our human content strategists.",
      href: "/pricing",
    },
    {
      icon: Globe,
      title: "Website Growth",
      badge: "Conversion",
      description:
        "AI-powered CRO, A/B testing, UX improvements, and technical performance tuning for your website.",
      href: "/pricing",
    },
    {
      icon: Zap,
      title: "Super Growth",
      badge: "All-In-One",
      description:
        "The complete AI Marketing Employee stack — every tier combined into one unified agentic growth engine.",
      href: "/pricing",
    },
  ];

  const industries = [
    { icon: Stethoscope, name: "Healthcare & Wellness", href: "/industries" },
    { icon: ShoppingBag, name: "eCommerce & Retail", href: "/industries" },
    { icon: Wrench, name: "Home Services", href: "/industries" },
    { icon: Building2, name: "Real Estate", href: "/industries" },
    { icon: GraduationCap, name: "Education", href: "/industries" },
    { icon: UtensilsCrossed, name: "Restaurants & Food", href: "/industries" },
    { icon: Car, name: "Automotive", href: "/industries" },
    { icon: Dumbbell, name: "Fitness & Sports", href: "/industries" },
    { icon: Globe, name: "Professional Services", href: "/industries" },
    { icon: Brain, name: "Technology & SaaS", href: "/industries" },
  ];

  const comparisonRows = [
    {
      feature: "Monthly Cost",
      ai: "$500 – $2,500",
      inhouse: "$5,000 – $12,000+",
      agency: "$3,000 – $8,000+",
    },
    {
      feature: "Setup Time",
      ai: "Days",
      inhouse: "Weeks–Months",
      agency: "Weeks",
    },
    {
      feature: "Channels Covered",
      ai: "SEO, AEO, Ads, Social, Content",
      inhouse: "Limited by headcount",
      agency: "Varies by retainer",
    },
    {
      feature: "Runs 24/7",
      ai: true,
      inhouse: false,
      agency: false,
    },
    {
      feature: "Real-time Adaptation",
      ai: true,
      inhouse: false,
      agency: false,
    },
    {
      feature: "Human Oversight",
      ai: true,
      inhouse: true,
      agency: true,
    },
    {
      feature: "Performance Dashboard",
      ai: true,
      inhouse: false,
      agency: "Sometimes",
    },
    {
      feature: "Scales Instantly",
      ai: true,
      inhouse: false,
      agency: false,
    },
  ];

  const overviewSteps = [
    {
      icon: Brain,
      title: "AI Executes",
      description:
        "Agentic AI systems run your SEO, ads, content, and social 24/7 — continuously generating, publishing, and optimizing.",
    },
    {
      icon: Eye,
      title: "Humans Supervise",
      description:
        "Echo5's expert team reviews outputs, sets strategy, and ensures brand alignment and quality before anything goes live.",
    },
    {
      icon: RefreshCw,
      title: "System Adapts",
      description:
        "Performance signals trigger automatic adjustments — the AI learns and improves every cycle.",
    },
    {
      icon: Monitor,
      title: "You See Everything",
      description:
        "Your Client Command Center gives you real-time visibility into all campaigns, metrics, and team communications.",
    },
  ];

  const performanceSteps = [
    {
      icon: AlertCircle,
      color: "#F59E0B",
      title: "Signal Detected",
      description: "AI monitors KPIs, rankings, CTR, conversion rates, and ad spend in real time.",
    },
    {
      icon: Brain,
      color: "#A855F7",
      title: "AI Analyzes",
      description: "The system identifies underperforming campaigns and generates optimization recommendations.",
    },
    {
      icon: Users,
      color: "#7C3AED",
      title: "Human Reviews",
      description: "Echo5's oversight team validates recommendations and approves strategic pivots.",
    },
    {
      icon: Zap,
      color: "#10B981",
      title: "System Adjusts",
      description: "Changes deploy automatically or with one-click approval — minimizing lag between insight and action.",
    },
  ];

  function renderCheckOrX(val: boolean | string) {
    if (val === true) {
      return <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" />;
    }
    if (val === false) {
      return (
        <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    return <span className="text-yellow-400 text-xs font-medium">{val}</span>;
  }

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
              }}
            >
              <Bot size={14} />
              Agentic AI Growth System
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Marketing Employee
              </span>{" "}
              Never Clocks Out
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Done-for-you agentic AI that continuously manages your SEO, AEO, Google Ads, social
              media, and content — with expert human oversight from Echo5 Digital's team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                }}
              >
                Explore Plans <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "2px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                }}
              >
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-lg">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            >
              <img
                src="/9105822-100kb.jpg"
                alt="AI Marketing Employee managing digital campaigns across multiple marketing channels"
                className="w-full h-72 object-cover"
              />
            </div>
            {/* Floating stat badges */}
            <div
              className="absolute -top-4 -left-4 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
                color: "#E5E7EB",
              }}
            >
              <Zap size={16} className="text-yellow-400" />
              24/7 Active
            </div>
            <div
              className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 0 20px rgba(168,85,247,0.25)",
                color: "#E5E7EB",
              }}
            >
              <TrendingUp size={16} className="text-emerald-400" />
              AI + Human Oversight
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ── */}
      <Section background="elevated" spacing="sm" id="quick-answer" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              <Bot size={20} style={{ color: "#A855F7" }} />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7" }}
              >
                Quick Answer
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#E5E7EB" }}>
                The <strong>AI Marketing Employee</strong> by Echo5 Digital is a done-for-you
                agentic AI growth system that continuously manages SEO, AEO, Google Ads, social
                media, and content marketing for small and mid-sized businesses. It combines
                AI-powered execution with human oversight and delivers results through a
                client-facing performance dashboard. It is available to businesses in Houston,
                Texas, and nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── THE PROBLEM IT SOLVES ── */}
      <Section
        background="transparent"
        spacing="lg"
        id="problem"
        withDivider
        className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6B4EF0" }}>
            The Problem
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            Marketing Is Broken for Small Businesses
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#5B5F73" }}>
            Managing modern marketing requires expertise across a dozen channels — yet most SMBs
            can't afford the team or tools to do it properly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: DollarSign,
              title: "Hiring Is Expensive",
              desc: "A full marketing team costs $80K–$200K+ per year in salaries, benefits, and tools — out of reach for most SMBs.",
            },
            {
              icon: Clock,
              title: "Agencies Move Slowly",
              desc: "Traditional agency retainers involve slow turnaround, minimal communication, and often over-promise and under-deliver.",
            },
            {
              icon: Layers,
              title: "Too Many Channels",
              desc: "SEO, AEO, Google Ads, social media, content, email — you need expertise in all of them to compete in 2025.",
            },
            {
              icon: BarChart3,
              title: "Blind Reporting",
              desc: "Most businesses don't know if their marketing is working until it's too late — no real-time visibility, no adaptive strategy.",
            },
            {
              icon: RefreshCw,
              title: "Constant Platform Changes",
              desc: "Google updates, AI search, algorithm shifts — keeping up requires constant learning that most teams don't have time for.",
            },
            {
              icon: Users,
              title: "Limited Internal Bandwidth",
              desc: "Your team is already stretched thin. Marketing is the first thing to get deprioritized when operations get busy.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#15172B",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(124,58,237,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
              >
                <item.icon size={18} style={{ color: "#A855F7" }} />
              </div>
              <h3
                className="font-semibold text-base"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS THE AI MARKETING EMPLOYEE ── */}
      <Section background="gradient" spacing="lg" id="what-is" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
              The Solution
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              What Is the AI Marketing Employee?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The AI Marketing Employee is Echo5 Digital's flagship agentic AI product — a
              fully autonomous growth system that runs your marketing around the clock, across every
              channel that matters.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Unlike traditional agency retainers where humans manually execute tasks on a
              slow cycle, our agentic AI systems operate continuously — creating content,
              optimizing ads, improving SEO rankings, engaging on social, and adapting to
              performance signals in near real-time.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              And unlike hiring in-house, you get the equivalent of a full marketing department —
              SEO specialists, ad managers, content writers, analysts — at a fraction of the cost,
              with Echo5's human team ensuring quality, strategy, and brand alignment at every step.
            </p>
            <ul className="space-y-3">
              {[
                "Operates 24/7 without downtime or holidays",
                "Covers SEO, AEO, ads, social, and content simultaneously",
                "Adapts to performance data automatically",
                "Supervised by Echo5's expert human team",
                "Transparent reporting via Client Command Center",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.25)" }}>
            <img
              src="/abc.jpeg"
              alt="Agentic AI system managing multiple marketing channels simultaneously for business growth"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>
        </div>
      </Section>

      {/* ── HUMAN OVERSIGHT WORKFLOW ── */}
      <Section background="elevated" spacing="lg" id="human-oversight" withDivider>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Human + AI Together
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Human Oversight Workflow
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AI drives the execution. Humans ensure the strategy, quality, and brand alignment.
            Here's how Echo5's oversight model works.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewSteps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
              {i < overviewSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px"
                  style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.5), transparent)" }}
                />
              )}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.35)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.2)",
                }}
              >
                <step.icon size={28} style={{ color: "#A855F7" }} />
              </div>
              <div
                className="text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.5)", color: "#fff" }}
              >
                {i + 1}
              </div>
              <h3
                className="font-semibold text-base"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── INTERNAL GROWTH SYSTEM DIAGRAM ── */}
      <Section background="default" spacing="lg" id="system-diagram" withDivider>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            How It All Fits Together
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Internal Growth System Diagram
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every layer of the AI Marketing Employee ecosystem — from AI agents to human oversight
            to your live dashboard.
          </p>
        </div>
        <div
          className="rounded-2xl p-6 md:p-10"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          {/* Layer 1: Client */}
          <div className="flex justify-center mb-6">
            <div
              className="px-6 py-3 rounded-xl font-semibold text-sm text-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                color: "#fff",
                fontFamily: "Space Grotesk, sans-serif",
                minWidth: "200px",
              }}
            >
              <Monitor size={18} className="inline mr-2" />
              Client Command Center
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <div className="w-px h-6" style={{ background: "rgba(124,58,237,0.5)" }} />
          </div>
          {/* Layer 2: Human team */}
          <div className="flex justify-center mb-6">
            <div
              className="px-6 py-3 rounded-xl font-semibold text-sm text-center"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#E5E7EB",
                fontFamily: "Space Grotesk, sans-serif",
                minWidth: "200px",
              }}
            >
              <Users size={18} className="inline mr-2 text-purple-400" />
              Echo5 Human Oversight Team
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <div className="w-px h-6" style={{ background: "rgba(124,58,237,0.5)" }} />
          </div>
          {/* Layer 3: AI Core */}
          <div className="flex justify-center mb-6">
            <div
              className="px-6 py-3 rounded-xl font-semibold text-sm text-center"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#E5E7EB",
                fontFamily: "Space Grotesk, sans-serif",
                minWidth: "200px",
              }}
            >
              <Brain size={18} className="inline mr-2 text-purple-300" />
              AI Orchestration Core
            </div>
          </div>
          {/* Branches */}
          <div className="relative flex justify-center mb-2">
            <div className="w-3/4 h-px" style={{ background: "rgba(124,58,237,0.35)" }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-2">
            {[
              { icon: Search, label: "SEO + AEO Agent" },
              { icon: Megaphone, label: "Social Media Agent" },
              { icon: BarChart3, label: "Google Ads Agent" },
              { icon: FileText, label: "Content Agent" },
              { icon: Globe, label: "Website Growth Agent" },
            ].map((agent) => (
              <div
                key={agent.label}
                className="rounded-xl p-4 flex flex-col items-center gap-2 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <agent.icon size={20} style={{ color: "#A855F7" }} />
                <span className="text-xs font-medium text-gray-300">{agent.label}</span>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center mt-2 mb-2">
            <div className="w-3/4 h-px" style={{ background: "rgba(124,58,237,0.35)" }} />
          </div>
          {/* Layer 4: Data */}
          <div className="flex justify-center mt-4">
            <div
              className="px-6 py-3 rounded-xl text-sm text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.15)",
                color: "#9CA3AF",
                fontFamily: "Space Grotesk, sans-serif",
                minWidth: "200px",
              }}
            >
              <BarChart3 size={16} className="inline mr-2" />
              Performance Data Layer &amp; Signal Detection
            </div>
          </div>
        </div>
      </Section>

      {/* ── TIERS OVERVIEW ── */}
      <Section background="elevated" spacing="lg" id="tiers" withDivider>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Choose Your Plan
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            AI Marketing Employee Tiers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with the channels that matter most, or go all-in with Super Growth. Every tier
            includes AI execution and human oversight.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Link key={tier.title} href={tier.href} className="block group no-underline">
              <Card
                title={tier.title}
                description={tier.description}
                icon={tier.icon}
                badge={tier.badge}
                variant="service"
              />
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 24px rgba(124,58,237,0.45)",
            }}
          >
            View Full Pricing <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* ── CLIENT COMMAND CENTER DASHBOARD ── */}
      <Section background="gradient" spacing="lg" id="dashboard" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Full Transparency
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Client Command Center Dashboard
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              You're never left in the dark. The Client Command Center gives you a real-time
              window into every campaign, every metric, and every action your AI Marketing
              Employee is taking on your behalf.
            </p>
            <ul className="space-y-4">
              {[
                { icon: BarChart3, label: "Live campaign performance metrics" },
                { icon: Eye, label: "Review AI-generated content before publishing" },
                { icon: Users, label: "Direct communication with Echo5's human team" },
                { icon: Shield, label: "Brand safety and compliance monitoring" },
                { icon: TrendingUp, label: "Growth trend analysis and reporting" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-gray-300 text-sm">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.25)" }}
                  >
                    <item.icon size={15} style={{ color: "#A855F7" }} />
                  </div>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(124,58,237,0.3)", boxShadow: "0 0 40px rgba(124,58,237,0.15)" }}
          >
            <img
              src="https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Client Command Center dashboard showing real-time marketing performance metrics and AI campaign data"
              className="w-full object-cover min-h-[320px]"
            />
          </div>
        </div>
      </Section>

      {/* ── PERFORMANCE RESPONSE FLOW ── */}
      <Section background="default" spacing="lg" id="performance-flow" withDivider>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Adaptive Intelligence
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Performance Response Flow
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            When performance signals shift, the system responds — automatically or with rapid
            human validation. No waiting weeks for your agency to "circle back."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceSteps.map((step, i) => (
            <div key={step.title} className="relative">
              {i < performanceSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[-50%] h-px z-0"
                  style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.5), transparent)" }}
                />
              )}
              <div
                className="relative z-10 rounded-xl p-6 flex flex-col gap-4 h-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `rgba(${step.color === "#F59E0B" ? "245,158,11" : step.color === "#A855F7" ? "168,85,247" : step.color === "#7C3AED" ? "124,58,237" : "16,185,129"},0.15)`,
                    border: `1px solid ${step.color}44`,
                  }}
                >
                  <step.icon size={24} style={{ color: step.color }} />
                </div>
                <div>
                  <div
                    className="text-xs font-bold mb-2"
                    style={{
                      color: step.color,
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    STEP {i + 1}
                  </div>
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPARISON SECTION ── */}
      <Section background="elevated" spacing="lg" id="comparison" withDivider>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            The Numbers Don't Lie
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            AI Marketing Employee vs. The Alternatives
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See why hundreds of SMBs are choosing agentic AI over expensive in-house hires or
            slow traditional agencies.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
          <table className="w-full min-w-[600px]" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(124,58,237,0.12)" }}>
                <th
                  className="text-left py-4 px-6 text-sm font-semibold"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif", borderBottom: "1px solid rgba(124,58,237,0.2)" }}
                >
                  Feature
                </th>
                <th
                  className="py-4 px-6 text-sm font-bold text-center"
                  style={{
                    color: "#A855F7",
                    fontFamily: "Space Grotesk, sans-serif",
                    borderBottom: "1px solid rgba(124,58,237,0.2)",
                    background: "rgba(124,58,237,0.15)",
                  }}
                >
                  <Bot size={16} className="inline mr-1" />
                  AI Marketing Employee
                </th>
                <th
                  className="py-4 px-6 text-sm font-semibold text-center"
                  style={{ color: "#9CA3AF", fontFamily: "Space Grotesk, sans-serif", borderBottom: "1px solid rgba(124,58,237,0.2)" }}
                >
                  In-House Team
                </th>
                <th
                  className="py-4 px-6 text-sm font-semibold text-center"
                  style={{ color: "#9CA3AF", fontFamily: "Space Grotesk, sans-serif", borderBottom: "1px solid rgba(124,58,237,0.2)" }}
                >
                  Traditional Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    borderBottom: "1px solid rgba(124,58,237,0.1)",
                  }}
                >
                  <td
                    className="py-4 px-6 text-sm font-medium"
                    style={{ color: "#E5E7EB" }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="py-4 px-6 text-sm text-center font-semibold"
                    style={{ color: "#A855F7", background: "rgba(124,58,237,0.05)" }}
                  >
                    {typeof row.ai === "boolean" ? renderCheckOrX(row.ai) : row.ai}
                  </td>
                  <td className="py-4 px-6 text-sm text-center text-gray-400">
                    {typeof row.inhouse === "boolean" ? renderCheckOrX(row.inhouse) : row.inhouse}
                  </td>
                  <td className="py-4 px-6 text-sm text-center text-gray-400">
                    {typeof row.agency === "boolean" ? renderCheckOrX(row.agency) : row.agency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" id="local" withDivider>
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            <Home size={24} style={{ color: "#A855F7" }} />
          </div>
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston, Sugar Land &amp; Businesses Nationwide
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Small and mid-sized businesses in{" "}
              <strong className="text-gray-200">Houston and Sugar Land, Texas</strong> can leverage
              the AI Marketing Employee as a cost-effective alternative to hiring an in-house
              marketing team. Echo5 Digital's local presence in the Greater Houston area means
              clients benefit from both AI-driven scale and locally knowledgeable human oversight.
              We also serve businesses nationally across the U.S.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              {/* Phone — verified fact */}
              <a
                href="tel:713-489-7004"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>📞</span>
                <span>713-489-7004</span>
              </a>
              {/* Email — verified fact */}
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>✉️</span>
                <span>hello@echo5digital.com</span>
              </a>
              {/* Address — verified fact */}
              <span className="flex items-center gap-2 text-gray-400">
                <span>📍</span>
                <span>Houston / Sugar Land, Texas</span>
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES SERVED ── */}
      <Section background="elevated" spacing="lg" id="industries" withDivider>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Who It's For
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Industries We Serve
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The AI Marketing Employee is purpose-built for small and mid-sized businesses across
            every major vertical.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl text-center transition-all duration-200 no-underline"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.2)" }}
              >
                <ind.icon size={18} style={{ color: "#A855F7" }} />
              </div>
              <span className="text-xs font-medium text-gray-300 leading-snug">{ind.name}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            View All Industries <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section background="default" spacing="lg" id="faq" withDivider>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Got Questions?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to know about how the AI Marketing Employee works.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                border: `1px solid ${openFaq === i ? "rgba(168,85,247,0.45)" : "rgba(124,58,237,0.2)"}`,
                background: openFaq === i ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.02)",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span
                  className="font-semibold text-base"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                {openFaq === i ? (
                  <ChevronUp size={18} style={{ color: "#A855F7" }} className="shrink-0" />
                ) : (
                  <ChevronDown size={18} style={{ color: "#6B7280" }} className="shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section background="gradient" spacing="lg" id="cta" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="pt-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
              Ready to Get Started?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Hire Your AI Marketing Employee Today
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Stop losing ground to competitors who are already using AI. Book a free demo
              call and see the AI Marketing Employee in action — or drop your details and
              we'll reach out within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: Star, text: "Free onboarding consultation included" },
                { icon: Shield, text: "No long-term contracts required" },
                { icon: Clock, text: "Live within days, not months" },
                { icon: Users, text: "Dedicated human oversight team from day one" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-gray-300 text-sm">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.25)" }}
                  >
                    <item.icon size={15} style={{ color: "#A855F7" }} />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.45)",
                }}
              >
                Book a Free Demo <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div>
            <ContactForm
              heading="Get Started Today"
              subheading="Tell us about your business and marketing goals. We'll respond within 24 hours."
              submitLabel="Send My Request"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}