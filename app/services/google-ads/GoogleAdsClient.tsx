"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <Section background="gradient" spacing="xl" id="hero">
        {/* Background grid decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-6 lg:gap-8">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border"
            style={{
              background: "rgba(124,58,237,0.15)",
              borderColor: "rgba(168,85,247,0.4)",
              color: "#A855F7",
            }}
          >
            <Zap size={12} />
            AI-Powered PPC Management
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Google Ads That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Convert Clicks
            </span>{" "}
            Into Customers
          </h1>

          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital combines agentic AI automation with expert human strategy to
            deliver high-performance Google Ads campaigns for small and mid-sized
            businesses in Houston, Texas and nationwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="#lead-form">
              <Button size="lg" variant="primary" rightIcon={<ArrowRight size={18} />}>
                Book a Free Demo
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative mt-8 w-full max-w-4xl rounded-2xl overflow-hidden border border-purple-800/30 shadow-2xl shadow-purple-900/40">
            <img
              src="https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Google Ads campaign dashboard showing performance analytics and conversion metrics"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.9) 100%)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider id="quick-answer">
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            borderColor: "rgba(168,85,247,0.3)",
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
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-lg sm:text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                What Is Google Ads Management?
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
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
      <Section background="gradient" spacing="lg" withDivider id="what-is-google-ads">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#A855F7",
                borderColor: "rgba(168,85,247,0.3)",
                background: "rgba(124,58,237,0.1)",
              }}
            >
              PPC Education
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              What Is Google Ads Management &amp; Why Does It Matter?
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed mb-5"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Google Ads (formerly Google AdWords) is Google's pay-per-click (PPC)
              advertising platform. Businesses bid on keywords, and their ads appear at
              the top of search results when users search for relevant terms. You only
              pay when someone clicks — making it one of the most cost-efficient ways to
              capture high-intent buyers.
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Without professional management, campaigns quickly drain budget on
              irrelevant clicks. Expert management ensures your ads reach the right
              people, at the right time, with the right message — maximizing return on
              ad spend (ROAS) for small and mid-sized businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Search size={20} />,
                  title: "Search Campaigns",
                  desc: "Text ads on Google's search results pages targeting active buyers.",
                },
                {
                  icon: <Eye size={20} />,
                  title: "Display Campaigns",
                  desc: "Visual banner ads across millions of websites in the Google Display Network.",
                },
                {
                  icon: <Layers size={20} />,
                  title: "Performance Max",
                  desc: "AI-driven campaigns across Search, Display, YouTube, Gmail and Maps.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 border"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    borderColor: "rgba(124,58,237,0.25)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <span style={{ color: "#A855F7" }}>{item.icon}</span>
                  </div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Small business owner reviewing Google Ads search campaign results on a laptop"
              className="w-full rounded-2xl object-cover"
              style={{
                height: "420px",
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            />
            <div
              className="absolute -bottom-4 -left-4 rounded-xl p-4 border shadow-xl hidden sm:block"
              style={{
                background: "#0D1226",
                borderColor: "rgba(168,85,247,0.3)",
                minWidth: "180px",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Avg. Click Quality
              </p>
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                High-Intent
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                Buyers actively searching
              </p>
            </div>
          </div>
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
      <Section background="gradient" spacing="lg" withDivider id="ai-optimization">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered marketing automation dashboard with real-time campaign optimization signals"
              className="w-full rounded-2xl object-cover"
              style={{
                height: "400px",
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 rounded-xl p-3 border shadow-xl hidden sm:flex items-center gap-3"
              style={{
                background: "#0D1226",
                borderColor: "rgba(168,85,247,0.3)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                }}
              >
                <Cpu size={16} color="#fff" />
              </div>
              <div>
                <p
                  className="text-xs font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  Agentic AI
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
                >
                  Always optimizing
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#A855F7",
                borderColor: "rgba(168,85,247,0.3)",
                background: "rgba(124,58,237,0.1)",
              }}
            >
              AI + Human Intelligence
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              AI-Powered Campaign Optimization
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's agentic AI system works 24/7 alongside our human
              strategists — automating the time-intensive optimizations that manual
              management misses, while keeping expert oversight at the core of every
              campaign decision.
            </p>

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
                  className="flex gap-4 p-4 rounded-xl border"
                  style={{
                    background: "rgba(124,58,237,0.06)",
                    borderColor: "rgba(124,58,237,0.2)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <span style={{ color: "#A855F7" }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
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

      {/* ── INTERNAL LINKS ────────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider id="related-services">
        <div className="text-center mb-8">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Related Digital Marketing Services
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Google Ads works best as part of a complete digital strategy. Explore our
            complementary services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              label: "Meta Ads",
              href: "/services/meta-ads",
              desc: "Facebook & Instagram paid campaigns to reach audiences at every stage of the funnel.",
              icon: <Target size={20} />,
            },
            {
              label: "SEO Services",
              href: "/services/seo",
              desc: "Organic search ranking to complement your paid traffic and reduce long-term acquisition costs.",
              icon: <TrendingUp size={20} />,
            },
            {
              label: "Local SEO",
              href: "/services/local-seo",
              desc: "Dominate local search in Houston, Sugar Land, and nearby markets with geo-targeted optimization.",
              icon: <MapPin size={20} />,
            },
            {
              label: "AI Marketing Employee",
              href: "/ai-marketing-employee",
              desc: "An always-on AI marketing system that powers and coordinates all your digital channels.",
              icon: <Brain size={20} />,
            },
          ].map((service, i) => (
            <Link key={i} href={service.href} className="group">
              <div
                className="h-full p-5 rounded-xl border transition-all duration-300 group-hover:-translate-y-1"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.5)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(124,58,237,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <span style={{ color: "#A855F7" }}>{service.icon}</span>
                </div>
                <h3
                  className="text-base font-semibold mb-2 flex items-center gap-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {service.label}
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#A855F7" }}
                  />
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ───────────────────────────────────── */}
      <Section background="gradient" spacing="md" withDivider id="local-service">
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(168,85,247,0.25)",
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
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  Serving Houston &amp; Sugar Land, Texas
                </h2>
                <p
                  className="text-sm leading-relaxed max-w-2xl"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
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
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    <Phone size={15} />
                    {/* Verified phone number */}
                    713-489-7004
                  </a>
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
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
      <Section background="gradient" spacing="xl" withDivider id="lead-form">
        {/* Hidden UTM fields note: UTM values are typically passed via query params
            and captured via JS; the ContactForm component handles form state */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side: CTA copy */}
          <div className="lg:pt-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#A855F7",
                borderColor: "rgba(168,85,247,0.3)",
                background: "rgba(124,58,237,0.1)",
              }}
            >
              Get Started
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Ready to Drive More Leads with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Google Ads?
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Book a free paid search consultation with Echo5 Digital. We'll audit your
              current campaigns (or build one from scratch), identify growth
              opportunities, and show you exactly how AI-powered management can lower
              your cost per lead.
            </p>

            <div className="space-y-4">
              {[
                { icon: <CheckCircle size={16} />, text: "Free account audit for existing campaigns" },
                { icon: <CheckCircle size={16} />, text: "Custom strategy aligned to your budget" },
                { icon: <CheckCircle size={16} />, text: "AI + human management from day one" },
                { icon: <CheckCircle size={16} />, text: "Full conversion tracking setup included" },
                { icon: <CheckCircle size={16} />, text: "Transparent monthly reporting" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ color: "#A855F7" }}>{item.icon}</span>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(124,58,237,0.2)" }}>
              <p
                className="text-sm mb-3"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                Or reach us directly:
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={15} />
                  {/* Verified phone number */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={15} />
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Contact form */}
          <div>
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