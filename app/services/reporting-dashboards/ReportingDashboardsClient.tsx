"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  BarChart3,
  TrendingUp,
  Globe,
  Target,
  Users,
  DollarSign,
  Layers,
  Eye,
  BrainCircuit,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Zap,
  Database,
  RefreshCw,
  BookOpen,
  MonitorDot,
  ShieldCheck,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

const dashboardMetrics = [
  {
    icon: TrendingUp,
    title: "SEO Rankings & Organic Traffic",
    description:
      "Track keyword positions, organic sessions, click-through rates, and search visibility over time.",
  },
  {
    icon: DollarSign,
    title: "Ad Spend & ROAS",
    description:
      "Monitor Google Ads and Meta Ads spend, impressions, clicks, conversions, and return on ad spend in one view.",
  },
  {
    icon: Users,
    title: "Social Engagement Metrics",
    description:
      "Reach, impressions, follower growth, engagement rate, and top-performing content across all social channels.",
  },
  {
    icon: Target,
    title: "Lead Pipeline & CRM Data",
    description:
      "See new leads, pipeline stages, close rates, and revenue attribution directly tied to marketing efforts.",
  },
  {
    icon: Globe,
    title: "Web Traffic & Behavior",
    description:
      "GA4 sessions, bounce rate, top pages, user journeys, and goal completions at a glance.",
  },
  {
    icon: BarChart3,
    title: "Conversion Events",
    description:
      "Track form fills, calls, purchases, and micro-conversions across every funnel stage and channel.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Database,
    title: "Data Source Audit",
    description:
      "We inventory every platform you use — Google Ads, Meta, GA4, CRM, SEO tools — and map the data flows.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Dashboard Design",
    description:
      "We design a custom layout aligned to your KPIs, brand style, and the decisions you need to make daily.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Integration & Build",
    description:
      "We connect all data sources via APIs and build your live dashboard with automated refresh cycles.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testing & QA",
    description:
      "Every data point is validated against source platforms to ensure accuracy before go-live.",
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Client Training",
    description:
      "We walk you through your dashboard so you can read your data, spot trends, and act with confidence.",
  },
];

const trustStats = [
  { value: "100%", label: "Data Accuracy Guarantee" },
  { value: "Real-Time", label: "Dashboard Refresh Rate" },
  { value: "10+", label: "Platforms Integrated" },
  { value: "24/7", label: "Dashboard Availability" },
];

export default function ReportingDashboardsClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Decorative glows */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <MonitorDot size={15} className="text-purple-400" />
              <span
                className="text-xs font-semibold text-purple-300 uppercase tracking-widest"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Client Command Center
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              All Your Marketing Data.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Real-Time View.
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Stop toggling between Google Ads, Meta, GA4, and your CRM. Echo5
              Digital builds custom reporting dashboards that unify every
              marketing signal into a single, live command center — so you
              always know what's driving growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#demo-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Request a Dashboard Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-500/10"
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

          <div className="relative z-10 hidden lg:block">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.25)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/38984817/pexels-photo-38984817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Echo5 Digital marketing reporting dashboard showing real-time KPIs and charts"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.85) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(10,15,30,0.8)", backdropFilter: "blur(8px)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                    Live Data • Auto-refreshing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER ── */}
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            border: "1px solid rgba(124,58,237,0.3)",
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital's reporting dashboard service consolidates marketing
                performance data from SEO, Google Ads, Meta Ads, social media, and
                CRM platforms into a single, real-time{" "}
                <strong style={{ color: "#A855F7" }}>Client Command Center</strong>.
                Designed for small and mid-sized businesses in Houston, Sugar Land,
                Texas, and across the U.S., these custom dashboards give business
                owners clear visibility into what is driving growth and where to
                optimize.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── THE PROBLEM WITH FRAGMENTED DATA ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              The Problem
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your Marketing Data Is Scattered — And That's Costing You
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Most businesses run campaigns across Google Ads, Meta Ads, GA4,
              HubSpot, and multiple SEO tools — but each platform tells only part
              of the story. Without a unified view, you're making decisions based
              on incomplete data, wasting budget on what isn't working, and missing
              the signals that would tell you what to scale.
            </p>
            <ul className="space-y-3">
              {[
                "Hours wasted toggling between platforms every week",
                "Conflicting data leads to poor budget decisions",
                "No single source of truth for leadership reporting",
                "Attribution gaps mean credit goes to the wrong channels",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </span>
                  <span style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }} className="text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              The Unified Dashboard Solution
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Eye, text: "One login, every metric in a single dashboard" },
                { icon: RefreshCw, text: "Real-time data pulled automatically from all platforms" },
                { icon: Target, text: "Clear attribution showing which channels drive revenue" },
                { icon: TrendingUp, text: "Trend visualization that reveals what's actually working" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))" }}
                  >
                    <Icon size={16} className="text-purple-400" />
                  </div>
                  <span style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }} className="text-sm">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── WHAT OUR DASHBOARDS INCLUDE ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Dashboard Coverage
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Every Metric That Moves Your Business
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital dashboards unify data from across your entire marketing
            stack — no tool left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardMetrics.map((metric) => (
            <Card
              key={metric.title}
              variant="service"
              icon={metric.icon}
              title={metric.title}
              description={metric.description}
            />
          ))}
        </div>
      </Section>

      {/* ── CLIENT COMMAND CENTER ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/32026165/pexels-photo-32026165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital Client Command Center — a single real-time marketing performance dashboard"
              className="w-full h-72 object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full"
              style={{ background: "rgba(10,15,30,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <MonitorDot size={14} className="text-purple-400" />
              <span className="text-xs font-semibold text-purple-300" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Client Command Center™
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Proprietary Platform
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your Client Command Center
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              The Client Command Center is Echo5 Digital's proprietary dashboard
              concept — a single real-time view of every marketing and lead
              generation performance metric your business depends on. Instead of
              waiting for a monthly PDF report, you see live data the moment you
              log in.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Real-time data refresh — no stale monthly reports",
                "One secure login for you and your team",
                "Custom KPI widgets tailored to your goals",
                "Mobile-friendly so you can check performance anywhere",
                "White-labeled and branded to your business",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-purple-400 flex-shrink-0" />
                  <span style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }} className="text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="#demo-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See a Live Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── CUSTOM REPORTING CAPABILITIES ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Built for Your Business
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Custom Dashboards, Not Cookie-Cutter Templates
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Every Echo5 Digital dashboard is designed around your specific goals,
            KPIs, and the decisions your team makes — not a generic one-size-fits-all
            report.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "KPI-Aligned Design",
              description:
                "We start with a discovery session to map your most important business metrics — then build every dashboard widget around those goals.",
            },
            {
              icon: Layers,
              title: "Multi-Channel Unification",
              description:
                "Whether you run 2 channels or 10, we pull every data source into a cohesive, logical layout that tells a clear performance story.",
            },
            {
              icon: BrainCircuit,
              title: "Actionable Insights",
              description:
                "Dashboards aren't just for looking — Echo5 Digital configures alert thresholds and trend indicators so you always know when to act.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={20} className="text-purple-400" />
              </div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section id="how-it-works" background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            From Scattered Data to Live Dashboard
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Our proven five-step process takes you from disconnected tools to a
            fully unified reporting environment.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[2.25rem] top-8 bottom-8 w-px"
            style={{ background: "linear-gradient(to bottom, #7C3AED, rgba(168,85,247,0.1))" }}
          />

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col lg:flex-row gap-5 lg:gap-8 items-start rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.18)",
                }}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl z-10"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                  }}
                >
                  <step.icon size={20} color="#fff" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Step {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INTEGRATION WITH AI MARKETING EMPLOYEE ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI-Powered Optimization
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Dashboards That Feed Your AI Marketing Employee
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's reporting dashboards don't just display data — they
              power decisions. Dashboard data feeds directly into the AI Marketing
              Employee's performance-response flow, enabling the system to
              automatically identify optimization opportunities and adjust your
              campaigns based on real, live results.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "AI reads your dashboard data and surfaces actionable insights",
                "Performance drops trigger automatic diagnostic alerts",
                "Budget reallocation recommendations based on live ROAS data",
                "Closed-loop reporting from spend to revenue to optimization",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BrainCircuit size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <span style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }} className="text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Learn About the AI Marketing Employee
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 50px rgba(124,58,237,0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI Marketing Employee analyzing dashboard data for automated campaign optimization"
                className="w-full h-72 object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(10,15,30,0.8) 100%)",
                }}
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 rounded-xl p-4 z-10"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <BrainCircuit size={14} className="text-purple-400" />
                <span className="text-xs font-semibold text-purple-300" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  AI Insight Detected
                </span>
              </div>
              <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                ROAS on Google Search up 34% — <br />reallocating Meta budget automatically
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST INDICATORS ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Clients Trust Echo5 Digital
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Reporting Built on Accuracy & Transparency
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            We believe every business deserves honest reporting — not vanity metrics
            or inflated numbers. Every dashboard we build is validated, documented,
            and tied directly to business outcomes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-3xl md:text-4xl font-bold mb-2"
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
                className="text-sm"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Case study references */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Houston E-Commerce Client",
              result:
                "Unified 6 platforms into one dashboard — identified underperforming Meta campaigns within the first week, reducing wasted ad spend by an estimated 28%.",
              tag: "Retail / E-Commerce",
            },
            {
              title: "Sugar Land Service Business",
              result:
                "Replaced 4 separate tools with a single Client Command Center. Owner now reviews complete performance in under 10 minutes each morning.",
              tag: "Local Services",
            },
          ].map((study) => (
            <div
              key={study.title}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Star size={14} className="text-yellow-400" />
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "#A855F7",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {study.tag}
                </span>
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {study.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                {/* Placeholder case study reference — replace with real client data when available */}
                {study.result}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
          >
            <MapPin size={22} color="#fff" />
          </div>
          <div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston, Sugar Land &amp; Businesses Across the U.S.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Houston and Sugar Land business owners running digital marketing
              campaigns across multiple channels often struggle to understand
              overall performance. Echo5 Digital's reporting dashboards give local
              businesses a unified, real-time view of all marketing activity so
              decisions are based on clear data rather than scattered reports.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
              <a
                href="tel:713-489-7004"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Call Echo5 Digital at 713-489-7004"
              >
                <Phone size={14} className="text-purple-400" />
                {/* Verified phone number */}
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Email Echo5 Digital"
              >
                <Mail size={14} className="text-purple-400" />
                hello@echo5digital.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-purple-400" />
                Houston / Sugar Land, Texas
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section background="elevated" spacing="lg" maxWidth="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Dashboard Questions Answered
          </h2>
        </div>

        <div className="space-y-3" role="list">
          {faqData.map((item, index) => (
            <div
              key={item.question}
              role="listitem"
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.4)" : "rgba(124,58,237,0.2)"}`,
                background:
                  openFaq === index
                    ? "rgba(124,58,237,0.08)"
                    : "rgba(255,255,255,0.03)",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-purple-500/5"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span
                  className="text-base font-semibold pr-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 text-purple-400 transition-transform duration-300"
                  style={{
                    transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                style={{
                  maxHeight: openFaq === index ? "500px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section id="demo-form" background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              See Your Business Data in One Dashboard
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Request a dashboard demo and see how Echo5 Digital can unify your
              marketing performance data into a single, live Client Command Center
              — built around your goals, not a generic template.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Free dashboard consultation — no obligation",
                "We audit your current data sources at no charge",
                "Live demo of a dashboard built for your industry",
                "Serving Houston, Sugar Land, TX and businesses nationwide",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-purple-400 flex-shrink-0" />
                  <span style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }} className="text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-sm font-semibold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Contact Echo5 Digital
              </p>
              <div className="space-y-2">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  aria-label="Call Echo5 Digital at 713-489-7004"
                >
                  <Phone size={14} className="text-purple-400" />
                  {/* Verified business phone */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  aria-label="Email Echo5 Digital at hello@echo5digital.com"
                >
                  <Mail size={14} className="text-purple-400" />
                  hello@echo5digital.com
                </a>
                <span className="flex items-center gap-2 text-sm" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                  <MapPin size={14} className="text-purple-400" />
                  Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm
              heading="Request a Dashboard Demo"
              subheading="Tell us about your marketing stack and we'll show you what a unified dashboard could look like for your business."
              submitLabel="Request My Dashboard Demo"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}