"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import TeamSection from "@/components/TeamSection";
import IndustriesWeGrow from "@/components/IndustriesWeGrow";
import TrustedByShowcase from "@/components/TrustedByShowcase";
import {
  Bot,
  Search,
  Globe,
  Megaphone,
  BarChart3,
  Users,
  Zap,
  ChevronDown,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Eye,
  TrendingUp,
  Shield,
  ShoppingBag,
  Play,
  UserCog,
  LineChart,
  PlusCircle,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface HomeClientProps {
  faqData: FAQItem[];
}

const coreServiceCards = [
  {
    title: "SEO & AEO",
    desc: "Rank on Google and AI search with powerful content and technical SEO.",
    href: "/services/seo",
    image: "/SEO.png",
    badge: null as string | null,
    color: "#7c3aed",
    points: ["Rank Tracking", "Content Creation", "Backlink Building", "Technical Fixes"],
  },
  {
    title: "Social Media Marketing",
    desc: "AI-powered content, community management and paid social for every platform.",
    href: "/services/social-media-marketing",
    image: "/Social Media.png",
    badge: "Most Popular",
    color: "#2563eb",
    points: ["Content Calendars", "Campaigns", "Analytics & Reporting", "Audience Growth"],
  },
  {
    title: "Google Ads (PPC)",
    desc: "Data-driven campaigns that maximize ROI and generate quality leads.",
    href: "/services/google-ads",
    image: "/Google Ads copy.png",
    badge: null as string | null,
    color: "#ea580c",
    points: ["Campaign Management", "Ad Optimization", "A/B Testing", "ROI Tracking"],
  },
  {
    title: "CRM & Automation",
    desc: "Streamline your pipeline with AI-powered CRM and automation workflows.",
    href: "/services/crm-automation",
    image: "/super growth copy.png",
    badge: "New",
    color: "#16a34a",
    points: ["Pipeline Automation", "Lead Scoring", "Workflow Building", "Integrations"],
  },
  {
    title: "Web Design & Development",
    desc: "High-converting, fast and modern websites that perform.",
    href: "/services/web-design",
    image: "/dash.jpg",
    badge: null as string | null,
    color: "#0891b2",
    points: ["UI/UX Design", "Fast Performance", "CMS Builds", "Conversion Focused"],
  },
  {
    title: "Custom Programming",
    desc: "Bespoke software, integrations and automation tools tailored to your business.",
    href: "/services/custom-programming",
    image: "/airobo.png",
    badge: null as string | null,
    color: "#9333ea",
    points: ["Custom Software", "API Integrations", "AI Tooling", "Automation"],
  },
];

const processSteps = [
  {
    step: "01",
    icon: UserCog,
    title: "Onboard & Strategize",
    desc: "We audit your brand, goals and competition, then build a custom AI growth strategy.",
  },
  {
    step: "02",
    icon: Bot,
    title: "AI Executes Daily",
    desc: "Our AI system runs content, ads, SEO and social tasks autonomously.",
  },
  {
    step: "03",
    icon: Eye,
    title: "Humans Oversee & Refine",
    desc: "Your dedicated team reviews everything and applies strategic refinements.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "You See Results",
    desc: "Track real-time KPIs in your dashboard and watch your growth compound.",
  },
];

export default function HomeClient({ faqData }: HomeClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ fontFamily: "Inter, sans-serif" }}>
      {/* ══════════════════════════════════════════════════════════════
          LIGHT THEME TOP — matches mockup
      ══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          background: "linear-gradient(180deg, #F2EFFC 0%, #F7F5FD 40%, #FFFFFF 100%)",
          color: "#1F2340",
        }}
      >
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/3519162.jpg')" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,8,26,0.55) 0%, rgba(10,8,26,0.35) 50%, rgba(10,8,26,0.65) 100%)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 md:pt-14 md:pb-24">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              {/* Text */}
              <div className="flex-1 w-full">
                <div
                  className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-6 px-4 py-2"
                  style={{
                    color: "#E9D5FF",
                    background: "rgba(255,255,255,0.15)",
                    letterSpacing: "0.5px",
                  }}
                >
                  AI-POWERED DIGITAL SOLUTIONS
                </div>
                <h1
                  className="font-black leading-[1.04] tracking-tight mb-6"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#FFFFFF" }}
                >
                  Your AI Marketing
                  <br />
                  <span style={{ color: "#D8B4FE" }}>Growth Engine</span> Is Here
                </h1>
                <p
                  className="text-lg leading-relaxed mb-8 max-w-md"
                  style={{ color: "#E5E1F0" }}
                >
                  Done-for-you SEO, AEO, Google Ads, social media, and web development — powered by agentic AI with real human oversight. Serving Houston, Sugar Land, and businesses nationwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
                      boxShadow: "0 8px 24px rgba(107,78,240,0.35)",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    Book a Free Demo <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/results"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base transition-all duration-200"
                    style={{
                      border: "2px solid rgba(255,255,255,0.4)",
                      color: "#FFFFFF",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    <span
                      className="inline-flex items-center justify-center rounded-full"
                      style={{
                        width: "22px",
                        height: "22px",
                        background: "#6B4EF0",
                      }}
                    >
                      <Play size={10} color="#fff" fill="#fff" />
                    </span>
                    View Plans
                  </Link>
                </div>

                {/* Stats row */}
                <div className="flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap gap-x-10 gap-y-4">
                  <div className="flex justify-between w-full sm:contents" style={{ maxWidth: 320 }}>
                    {[
                      { value: "300+", label: "Projects Delivered" },
                      { value: "4.8×", label: "Average ROAS" },
                      { value: "85%", label: "Clients Scale Up" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center sm:text-left">
                        <div
                          className="text-2xl font-bold"
                          style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFFFF" }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs" style={{ color: "#D8D3E8" }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center sm:text-left">
                    <div
                      className="text-2xl font-bold"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFFFF" }}
                    >
                      24/7
                    </div>
                    <div className="text-xs" style={{ color: "#D8D3E8" }}>
                      AI Monitoring
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block flex-1 w-full max-w-lg relative min-h-0 sm:min-h-[440px]">
                {/* Ambient glow rings behind everything */}
                <div
                  aria-hidden="true"
                  className="absolute rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "min(92%, 380px)",
                    aspectRatio: "1 / 1",
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, rgba(107,78,240,0.22) 0%, rgba(107,78,240,0.08) 55%, transparent 75%)",
                  }}
                />
                {/* Robot illustration */}
                <div
                  className="relative mx-auto overflow-hidden rounded-[2rem]"
                  style={{
                    width: "min(100%, 280px)",
                    aspectRatio: "1 / 1",
                    boxShadow:
                      "0 0 0 1px rgba(107,78,240,0.15), 0 30px 60px rgba(107,78,240,0.3)",
                  }}
                >
                  <Image
                    src="/airobo.png"
                    alt="AI Marketing Employee robot working at a laptop"
                    fill
                    sizes="280px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating stat card — More Traffic */}
                <div
                  className="hidden md:flex absolute items-center gap-2.5 rounded-xl px-4 py-3"
                  style={{
                    top: "2%",
                    left: "0%",
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 16px 40px rgba(31,35,64,0.15)",
                  }}
                >
                  <BarChart3 size={18} style={{ color: "#6B4EF0" }} />
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#15172B" }}>More Traffic</p>
                    <p className="text-[0.65rem]" style={{ color: "#8B8FA3" }}>Higher Rankings</p>
                  </div>
                  <ArrowRight size={12} style={{ color: "#8B8FA3" }} />
                </div>

                {/* Floating stat card — Better Leads */}
                <div
                  className="hidden md:flex absolute items-center gap-2.5 rounded-xl px-4 py-3"
                  style={{
                    top: "6%",
                    right: "-2%",
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 16px 40px rgba(31,35,64,0.15)",
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 26, height: 26, background: "rgba(107,78,240,0.12)" }}
                  >
                    <TrendingUp size={14} style={{ color: "#6B4EF0" }} />
                  </span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#15172B" }}>Better Leads</p>
                    <p className="text-[0.65rem]" style={{ color: "#8B8FA3" }}>Real Growth</p>
                  </div>
                  <ArrowRight size={12} style={{ color: "#8B8FA3" }} />
                </div>

                {/* Floating stat card — Modern Websites */}
                <div
                  className="hidden sm:flex absolute items-center gap-2.5 rounded-xl px-4 py-3"
                  style={{
                    bottom: "26%",
                    left: "-4%",
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 16px 40px rgba(31,35,64,0.15)",
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-lg"
                    style={{ width: 26, height: 26, background: "#6B4EF0" }}
                  >
                    <Globe size={14} color="#fff" />
                  </span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#15172B" }}>Modern Websites</p>
                    <p className="text-[0.65rem]" style={{ color: "#8B8FA3" }}>Built for You</p>
                  </div>
                  <ArrowRight size={12} style={{ color: "#8B8FA3" }} />
                </div>

                {/* Floating "AI Working for You" card */}
                <div
                  className="hidden sm:block absolute rounded-2xl p-5"
                  style={{
                    bottom: "-4%",
                    right: "-6%",
                    width: 230,
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(107,78,240,0.12)",
                    boxShadow: "0 20px 50px rgba(31,35,64,0.15)",
                  }}
                >
                  <p
                    className="text-xs font-semibold mb-3 flex items-center gap-1.5"
                    style={{ color: "#4F32D9" }}
                  >
                    <PlusCircle size={12} /> AI Working for You
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      "SEO Optimization",
                      "Content Creation",
                      "Ad Campaigns",
                      "Social Media",
                      "Web Development",
                    ].map((task) => (
                      <div key={task} className="flex items-center justify-between">
                        <span className="text-xs" style={{ color: "#4B4F63" }}>
                          {task}
                        </span>
                        <span
                          className="flex items-center gap-1 text-[0.65rem] font-medium"
                          style={{ color: "#16A34A" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "#16A34A" }}
                          />
                          Running
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY (ANIMATED LOGO) — mobile only, shown above trust bar ── */}
        <div className="lg:hidden">
          <TrustedByShowcase />
        </div>

        {/* ── TRUST BAR ────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div
            className="rounded-2xl px-6 py-8"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(107,78,240,0.1)",
            }}
          >
            <p
              className="text-center text-xs font-semibold uppercase tracking-widest mb-7"
              style={{ color: "#8B8FA3" }}
            >
              Trusted Platforms &amp; Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {[
                { label: "Google Ads", icon: <BarChart3 size={20} style={{ color: "#6B4EF0" }} /> },
                { label: "Meta Business", icon: <Megaphone size={20} style={{ color: "#6B4EF0" }} /> },
                { label: "WordPress", icon: <Globe size={20} style={{ color: "#6B4EF0" }} /> },
                { label: "HubSpot", icon: <Users size={20} style={{ color: "#6B4EF0" }} /> },
                { label: "OpenAI", icon: <Brain size={20} style={{ color: "#6B4EF0" }} /> },
                { label: "Semrush", icon: <Search size={20} style={{ color: "#6B4EF0" }} /> },
                { label: "Shopify", icon: <ShoppingBag size={20} style={{ color: "#6B4EF0" }} /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-medium" style={{ color: "#4B4F63" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE SERVICES ────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span
              className="inline-flex items-center gap-2 rounded-full text-xs font-semibold"
              style={{ color: "#6B4EF0", letterSpacing: "2px" }}
            >
              WHAT WE DO
            </span>
            <h2
              className="font-black leading-[1.04] tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Our Core Services
            </h2>
            <p className="max-w-xl text-base leading-relaxed" style={{ color: "#5B5F73" }}>
              AI-accelerated and human-guided solutions to grow your business online and beyond.
            </p>

          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{ gap: 16 }}
          >
            {/* card 0 — wide (col 1-2, row 1) */}
            <div className="lg:col-span-2 lg:row-start-1">
              <CoreServiceCard card={coreServiceCards[0]} size="wide" />
            </div>
            {/* card 1 — tall (col 3, row 1-2) */}
            <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2">
              <CoreServiceCard card={coreServiceCards[1]} size="tall" />
            </div>
            {/* card 2 — small (col 1, row 2) */}
            <div className="lg:col-start-1 lg:row-start-2">
              <CoreServiceCard card={coreServiceCards[2]} size="small" />
            </div>
            {/* card 3 — small (col 2, row 2) */}
            <div className="lg:col-start-2 lg:row-start-2">
              <CoreServiceCard card={coreServiceCards[3]} size="small" />
            </div>
            {/* card 4 — half (col 1-2, row 3) */}
            <div className="lg:col-span-2 lg:row-start-3">
              <CoreServiceCard card={coreServiceCards[4]} size="wide" />
            </div>
            {/* card 5 — tall (col 3, row 3) */}
            <div className="lg:col-start-3 lg:row-start-3">
              <CoreServiceCard card={coreServiceCards[5]} size="small" />
            </div>
          </div>
        </section>

        {/* ── AI MARKETING EMPLOYEE TEASER ────────────────────────── */}
        <section className="w-full pb-20">
          <div
            className="relative overflow-hidden flex items-center"
            style={{
              borderTop: "1px solid rgba(107,78,240,0.12)",
              borderBottom: "1px solid rgba(107,78,240,0.12)",
              minHeight: "50vh",
              background: "#F2EFFC",
            }}
          >
            <Image
              src="/banner.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover hidden md:block"
              aria-hidden="true"
            />
            <div className="relative w-full mx-auto py-8 md:py-14 px-5 sm:px-10 md:pl-[100px] md:pr-5">
              <div className="flex-1 max-w-xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-4"

                >
                  OUR FLAGSHIP PRODUCT
                </div>
                <h2
                  className="font-black leading-[1.04] tracking-tight mb-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.6rem, 2.6vw, 2.75rem)", color: "#15172B" }}
                >
                  Meet the AI Marketing Employee
                </h2>
                <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: "#5B5F73" }}>
                  A tireless marketing expert working for your business 24/7 — executing SEO,
                  content, ads, social media and more, with real human oversight.
                </p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {[
                    "Fully done-for-you",
                    "AI that adapts and improves",
                    "Human strategists oversee",
                    "One unified dashboard",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#3D4157" }}>
                      <CheckCircle size={16} style={{ color: "#6B4EF0" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ai-marketing-employee"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm"
                  style={{
                    background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
                    boxShadow: "0 8px 20px rgba(107,78,240,0.3)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ background: "#0A0F1E" }}>
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              top: "-10%",
              left: "50%",
              width: "900px",
              height: "600px",
              transform: "translateX(-50%)",
              background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(107,78,240,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-80 flex-shrink-0">
              <div
                className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-4"
                style={{

                  color: "#A78BFA",
                }}
              >
                HOW IT WORKS
              </div>
              <h2
                className="font-black leading-[1.04] tracking-tight mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#F5F3FF" }}
              >
                A Simple Process for Big Results
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#9CA3AF" }}>
                We combine AI execution with expert human oversight to deliver continuous
                growth.
              </p>
            </div>

            <div className="flex-1 relative">
              <div
                aria-hidden="true"
                className="hidden lg:block absolute h-px"
                style={{
                  top: "20px",
                  left: "8%",
                  right: "8%",
                  background: "rgba(107,78,240,0.25)",
                }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative flex flex-col gap-3">
                    <div
                      className="flex items-center justify-center rounded-full text-sm font-bold relative z-10"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
                        color: "#fff",
                        fontFamily: "Space Grotesk, sans-serif",
                        boxShadow: "0 6px 16px rgba(107,78,240,0.35)",
                      }}
                    >
                      {step.step}
                    </div>
                    <step.icon size={22} style={{ color: "#A78BFA" }} />
                    <h3
                      className="text-base font-semibold"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F5F3FF" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE GROW ──────────────────────────────────── */}
        <IndustriesWeGrow />

        {/* ── DARK CTA BAND ────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div
            className="rounded-3xl p-8 md:p-14 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #15172B 0%, #211A47 100%)" }}
          >
            <div
              aria-hidden="true"
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "420px",
                height: "420px",
                right: "-8%",
                bottom: "-20%",
                background: "radial-gradient(circle, rgba(107,78,240,0.35) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-lg">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#C4B5FD",
                  }}
                >
                  READY TO BUILD YOUR DIGITAL FUTURE?
                </div>
                <h2
                  className="font-black leading-[1.04] tracking-tight mb-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#fff" }}
                >
                  Let&apos;s Create Something Extraordinary
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "#B4B7C9" }}>
                  From AI systems and automation to custom software and digital growth — we
                  build technology around your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white text-sm"
                    style={{
                      background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
                      boxShadow: "0 8px 24px rgba(107,78,240,0.5)",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    Start Your Project <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm"
                    style={{
                      border: "2px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>

              <div
                className="rounded-2xl p-6 max-w-xs w-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#E5E7EB" }}>
                  &ldquo;Echo5 transformed our online presence. The results speak for
                  themselves.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#fff" }}>
                    5.0
                  </span>
                </div>
                <p className="text-xs mt-2" style={{ color: "#8B8FA3" }}>
                  — Happy Client
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DARK THEME CONTINUATION — existing detailed sections
      ══════════════════════════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
        {/* ── AI MARKETING EMPLOYEE PRODUCT TIERS ─────────────────────── */}
        <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
          <div className="text-center mb-12">
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#E5E7EB" }}
            >
              AI Marketing Employee Tiers
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
              Choose the growth level that fits your business. All plans include AI execution and human oversight.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                tagline: "SEO + AEO Foundation",
                color: "#7C3AED",
                features: [
                  "AI-driven on-page SEO",
                  "Answer Engine Optimization",
                  "Monthly content publishing",
                  "Performance dashboard",
                  "Human strategy review",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Growth",
                tagline: "SEO + Social + Google Ads",
                color: "#A855F7",
                features: [
                  "Everything in Starter",
                  "AI social media management",
                  "Google Ads management",
                  "Weekly reporting",
                  "Dedicated account manager",
                ],
                cta: "Most Popular",
                popular: true,
              },
              {
                name: "Scale",
                tagline: "Full AI Growth System",
                color: "#7C3AED",
                features: [
                  "Everything in Growth",
                  "Meta Ads management",
                  "CRM & automation setup",
                  "Custom content strategy",
                  "Priority human support",
                ],
                cta: "Go Full Scale",
                popular: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="relative flex flex-col rounded-2xl p-7"
                style={{
                  background: tier.popular
                    ? "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(168,85,247,0.14) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: tier.popular
                    ? "2px solid rgba(168,85,247,0.55)"
                    : "1px solid rgba(124,58,237,0.25)",
                  boxShadow: tier.popular ? "0 0 40px rgba(124,58,237,0.3)" : "none",
                }}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {tier.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: "#A855F7" }}>
                  {tier.tagline}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle size={15} style={{ color: "#A855F7", flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: "#D1D5DB" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="w-full py-3 rounded-full text-center text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 block"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 18px rgba(124,58,237,0.4)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  {tier.cta} →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: "#6B7280" }}>
            Full pricing and plan details available on the{" "}
            <Link href="/pricing" style={{ color: "#A855F7" }}>
              Pricing page
            </Link>
            .
          </p>
        </Section>

        {/* ── INTERNAL GROWTH SYSTEM DIAGRAM ───────────────────────────── */}
        <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-10 items-center">
            {/* Left intro copy */}
            <div>
              <div
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: "#A855F7" }}
              >
                THE ECHO5 GROWTH SYSTEM
              </div>
              <p
                className="text-2xl md:text-[1.7rem] font-semibold leading-snug"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Our AI systems, human team, and your client dashboard work together in a
                closed-loop growth engine — continuously learning and improving.
              </p>
            </div>

            {/* Right flow diagram */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-stretch">
                {[
                  {
                    label: "AI Engine",
                    sublabel: "Executes SEO, ads, content & social 24/7",
                    image: "/airobo.png",
                  },
                  {
                    label: "Human Team",
                    sublabel: "Strategists & editors review, refine, and guide all outputs",
                    image: "/people-working-html-codes-100kb.jpg",
                  },
                  {
                    label: "Client Dashboard",
                    sublabel: "Real-time KPIs, reports, and transparent performance tracking",
                    image: "/dash.jpg",
                  },
                ].map((node, i) => (
                  <div key={node.label} className="relative flex flex-col items-center text-center">
                    <div
                      className="w-full aspect-square rounded-2xl overflow-hidden mb-3 relative"
                      style={{
                        border: "1px solid rgba(168,85,247,0.35)",
                        boxShadow: "0 0 30px rgba(124,58,237,0.25)",
                      }}
                    >
                      <Image
                        src={node.image}
                        alt={node.label}
                        fill
                        sizes="(max-width: 640px) 80vw, 260px"
                        className="object-cover"
                      />
                    </div>
                    <h3
                      className="text-sm font-bold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {node.label}
                    </h3>
                    <p className="text-xs leading-relaxed max-w-[200px]" style={{ color: "#9CA3AF" }}>
                      {node.sublabel}
                    </p>

                    {i < 2 && (
                      <div
                        className="hidden sm:flex absolute items-center justify-center w-7 h-7 rounded-full z-10"
                        style={{
                          background: "#15172B",
                          border: "1px solid rgba(168,85,247,0.5)",
                          top: "calc((100% - 5.5rem) / 2 - 0.875rem)",
                          right: "-1.5rem",
                        }}
                      >
                        <ArrowRight size={14} style={{ color: "#A855F7" }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Closed-loop connector */}
              <div className="relative mt-8 hidden sm:block" style={{ height: "2.5rem" }}>
                <div
                  className="absolute left-[16.6%] right-[16.6%] top-0 border-l border-r border-b rounded-b-2xl"
                  style={{ borderColor: "rgba(168,85,247,0.4)", height: "1.5rem" }}
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                  style={{ top: "0.9rem", background: "#15172B", border: "1px solid rgba(168,85,247,0.5)" }}
                >
                  <RefreshCw size={12} style={{ color: "#A855F7" }} />
                </div>
              </div>
              <p className="text-center text-xs mt-3" style={{ color: "#9CA3AF" }}>
                Closed-loop system: every result feeds back to improve AI performance
              </p>
            </div>
          </div>
        </Section>

        {/* ── RESULTS / CASE STUDIES PREVIEW ──────────────────────────── */}
        <Section background="transparent" spacing="lg" maxWidth="2xl" withDivider className="!bg-[#EEECFB] min-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-10 items-start">
            {/* Left intro copy */}
            <div>
              <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#6B4EF0" }}>
                REPRESENTATIVE EXAMPLES
              </div>
              <h2
                className="font-black leading-[1.04] tracking-tight mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
              >
                The Types of Results We Drive
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#5B5F73" }}>
                These are representative examples of the outcomes our AI Marketing Employee system
                is designed to deliver. Results vary by business, industry, and goals.
              </p>
              <Link
                href="/results"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-105"
                style={{
                  background: "rgba(107,78,240,0.12)",
                  border: "1px solid rgba(107,78,240,0.25)",
                  color: "#4F32D9",
                }}
              >
                View All Results <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right result cards */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    industry: "Dental Practice",
                    location: "Houston, TX",
                    image: "/dental.jpg",
                    metric: "+320%",
                    metricLabel: "organic traffic",
                    desc: "After 6 months of AI-driven SEO + AEO, a local dental practice saw a dramatic increase in search visibility and new patient inquiries.",
                    tags: ["SEO", "AEO", "Local Search"],
                  },
                  {
                    industry: "Home Services Company",
                    location: "Sugar Land, TX",
                    image: "/homeservice.jpg",
                    metric: "4.5×",
                    metricLabel: "Google Ads ROAS",
                    desc: "An AI-optimized Google Ads campaign for a home services company resulted in a 4.5× return on ad spend within the first 90 days.",
                    tags: ["Google Ads", "PPC"],
                  },
                  {
                    industry: "Fitness Studio",
                    location: "National",
                    image: "/fitness.jpg",
                    metric: "+180%",
                    metricLabel: "social engagement",
                    desc: "AI-generated social content and paid social campaigns drove a 180% uplift in engagement and a measurable increase in membership sign-ups.",
                    tags: ["Social Media", "Meta Ads"],
                  },
                ].map((cs) => (
                  <div
                    key={cs.industry}
                    className="flex flex-col rounded-2xl overflow-hidden bg-white"
                    style={{
                      border: "1px solid rgba(107,78,240,0.15)",
                      boxShadow: "0 4px 20px rgba(79,50,217,0.08)",
                    }}
                  >
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={cs.image}
                        alt={`${cs.industry} — ${cs.location}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <p
                        className="text-2xl font-bold mb-0.5"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#6B4EF0" }}
                      >
                        {cs.metric}
                      </p>
                      <p className="text-sm font-semibold mb-3" style={{ color: "#6B4EF0" }}>
                        {cs.metricLabel}
                      </p>
                      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#5B5F73" }}>
                        {cs.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-md font-medium"
                            style={{
                              background: "rgba(107,78,240,0.1)",
                              color: "#4F32D9",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-6" style={{ color: "#8A8FA3" }}>
                *Representative examples. Individual results will vary based on business, budget, and market conditions.
              </p>
            </div>
          </div>
        </Section>

        {/* ── TRUSTED BY (ANIMATED LOGO) — desktop only, mobile copy shown near hero ── */}
        <div className="hidden lg:block">
          <TrustedByShowcase />
        </div>

        {/* ── HUMANS WHO RUN THE AI SECTION ────────────────────────────── */}
        <TeamSection />

        {/* ── LOCAL RELEVANCE ──────────────────────────────────────────── */}
        <section className="relative w-full">
          <div
            className="relative overflow-hidden flex items-center"
            style={{
              minHeight: "50vh",
              background: "#f4f0fd",
            }}
          >
            <Image
              src="/map.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover hidden md:block"
              aria-hidden="true"
            />
            {/* Desktop / tablet layout */}
            <div className="relative w-full py-10 md:py-14 px-6 md:px-12 hidden md:flex md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xs sm:max-w-sm">
                <h2
                  className="font-black leading-[1.04] tracking-tight mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
                >
                  Serving Houston, Sugar Land &amp; Beyond
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#3D4157" }}>
                  Echo5 Digital is based in Houston and Sugar Land, Texas, making us a trusted local
                  digital marketing partner for businesses across the Greater Houston metro. Our
                  primary service area covers Houston and Sugar Land, with national U.S. coverage
                  and operations support from Kochi, Kerala, India.
                </p>
              </div>
              <div
                className="rounded-2xl bg-white overflow-hidden flex-shrink-0 w-full max-w-[300px]"
                style={{ boxShadow: "0 20px 50px rgba(107,78,240,0.15)" }}
              >
                <address className="not-italic px-5 pt-5 pb-1">
                  {[
                    { icon: MapPin, label: "Location", value: "Houston / Sugar Land, Texas, USA", href: null },
                    { icon: Phone, label: "Phone", value: "713-489-7004", href: "tel:713-489-7004" },
                    { icon: Mail, label: "Email", value: "hello@echo5digital.com", href: "mailto:hello@echo5digital.com" },
                  ].map((row, i) => {
                    const RowIcon = row.icon;
                    const content = (
                      <div className="flex items-start gap-3 py-3.5">
                        <div
                          className="flex items-center justify-center rounded-full flex-shrink-0"
                          style={{ width: 36, height: 36, background: "rgba(107,78,240,0.1)" }}
                        >
                          <RowIcon size={15} style={{ color: "#6B4EF0" }} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold mb-0.5" style={{ color: "#8B8FA3" }}>
                            {row.label}
                          </p>
                          <p className="text-sm font-semibold" style={{ color: "#15172B" }}>
                            {row.value}
                          </p>
                        </div>
                      </div>
                    );
                    return (
                      <div key={row.label} style={i > 0 ? { borderTop: "1px solid rgba(107,78,240,0.1)" } : undefined}>
                        {row.href ? (
                          <a href={row.href} style={{ textDecoration: "none" }}>{content}</a>
                        ) : (
                          content
                        )}
                      </div>
                    );
                  })}
                </address>
                <div className="px-5 py-3.5" style={{ background: "rgba(107,78,240,0.08)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "#4B4F63" }}>
                    Delivering digital growth with local insight and global support.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="relative w-full py-8 px-5 md:hidden">
              <div
                className="rounded-3xl bg-white overflow-hidden mx-auto max-w-sm"
                style={{ boxShadow: "0 20px 50px rgba(107,78,240,0.15)" }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ width: 44, height: 44, background: "rgba(107,78,240,0.12)" }}
                    >
                      <Building2 size={20} style={{ color: "#6B4EF0" }} />
                    </div>
                    <div>
                      <h2
                        className="font-bold"
                        style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", color: "#15172B" }}
                      >
                        Let&apos;s Connect
                      </h2>
                      <div className="h-0.5 w-8 rounded-full mt-1" style={{ background: "#6B4EF0" }} />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {[
                      { icon: MapPin, label: "Location", value: "Houston / Sugar Land, Texas, USA", href: null },
                      { icon: Phone, label: "Phone", value: "713-489-7004", href: "tel:713-489-7004" },
                      { icon: Mail, label: "Email", value: "hello@echo5digital.com", href: "mailto:hello@echo5digital.com" },
                    ].map((row, i) => {
                      const RowIcon = row.icon;
                      const content = (
                        <div className="flex items-start gap-3 py-4">
                          <div
                            className="flex items-center justify-center rounded-full flex-shrink-0"
                            style={{ width: 40, height: 40, background: "rgba(107,78,240,0.1)" }}
                          >
                            <RowIcon size={17} style={{ color: "#6B4EF0" }} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold mb-0.5" style={{ color: "#8B8FA3" }}>
                              {row.label}
                            </p>
                            <p className="text-sm font-semibold" style={{ color: "#15172B" }}>
                              {row.value}
                            </p>
                          </div>
                        </div>
                      );
                      return (
                        <div key={row.label} style={i > 0 ? { borderTop: "1px solid rgba(107,78,240,0.1)" } : undefined}>
                          {row.href ? (
                            <a href={row.href} style={{ textDecoration: "none" }}>{content}</a>
                          ) : (
                            content
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="px-6 py-4" style={{ background: "rgba(107,78,240,0.08)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "#4B4F63" }}>
                    Delivering digital growth with local insight and global support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION ────────────────────────────────────────────── */}
        <Section background="elevated" spacing="lg" maxWidth="lg" withDivider>
          <div className="text-center mb-10">
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#E5E7EB" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-base" style={{ color: "#9CA3AF" }}>
              Everything you need to know about Echo5 Digital and our AI marketing approach.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: openFaq === index
                    ? "linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(168,85,247,0.08) 100%)"
                    : "rgba(255,255,255,0.03)",
                  border: openFaq === index
                    ? "1px solid rgba(168,85,247,0.4)"
                    : "1px solid rgba(124,58,237,0.22)",
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "#A855F7",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  style={{
                    maxHeight: openFaq === index ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── FINAL CTA / LEAD FORM ────────────────────────────────────── */}
        <Section background="transparent" spacing="xl" maxWidth="2xl" withDivider className="!bg-[#EEECFB]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: copy */}
            <div className="flex-1 lg:pt-6">
              <div
                className="inline-flex items-center gap-2  rounded-full text-xs font-semibold mb-5"
                style={{
                  color: "#6B4EF0",
                }}
              >
                Let&apos;s Grow Together
              </div>
              <h2
                className="font-black leading-[1.04] tracking-tight mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
              >
                Ready to Put AI
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  to Work for You?
                </span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73" }}>
                Book a free strategy demo and discover exactly how Echo5 Digital&apos;s AI Marketing
                Employee can grow your business — no commitment required.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Free 30-minute strategy demo",
                  "No contracts, cancel anytime",
                  "Results-focused — we win when you win",
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "#15172B" }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
              {/* NAP */}
              <div className="space-y-2 text-sm">
                <p style={{ color: "#5B5F73" }}>
                  Or reach us directly:
                </p>
                {/* Verified phone */}
                <a href="tel:713-489-7004" className="block" style={{ color: "#4F32D9" }}>
                  📞 713-489-7004
                </a>
                <a href="mailto:hello@echo5digital.com" className="block" style={{ color: "#4F32D9" }}>
                  ✉️ hello@echo5digital.com
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="flex-1 w-full">
              {/* Hidden UTM fields would be wired server-side; ContactForm handles the visible form */}
              <ContactForm
                heading="Book Your Free Demo"
                subheading="Tell us about your business and goals. We'll reach out within 24 hours."
                submitLabel="Send My Request"
                showAppointmentNote
              />
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

type CoreCardSize = "wide" | "tall" | "small";

function CoreServiceCard({
  card,
  size,
}: {
  card: typeof coreServiceCards[number];
  size: CoreCardSize;
}) {
  const isTall = size === "tall";
  const minHeight = isTall ? 420 : 220;

  return (
    <Link
      href={card.href}
      style={{
        position: "relative",
        minHeight,
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
        background: `linear-gradient(135deg, ${card.color}ee 0%, ${card.color}99 100%)`,
        boxShadow: `0 8px 40px ${card.color}44, 0 2px 8px rgba(0,0,0,0.15)`,
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 16px 60px ${card.color}66, 0 4px 16px rgba(0,0,0,0.2)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 40px ${card.color}44, 0 2px 8px rgba(0,0,0,0.15)`;
      }}
    >
      {/* Glassmorphism overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      {card.badge && (
        <span
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 3,
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.4)",
            color: "#fff",
            fontSize: "10px",
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: "999px",
            letterSpacing: "1px",
          }}
        >
          {card.badge === "New" ? "✦ New" : "★ " + card.badge}
        </span>
      )}

      {/* Content area */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: 8,
            display: "block",
          }}
        >
          AI Employee
        </span>

        <h3
          style={{
            fontSize: isTall ? "1.3rem" : "1.1rem",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 10,
          }}
        >
          {card.title}
        </h3>

        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.5,
            marginBottom: 16,
          }}
        >
          {card.desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          {card.points.map((point) => (
            <span
              key={point}
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: "999px",
              }}
            >
              {point}
            </span>
          ))}
        </div>
      </div>

      {/* Image — floats top-right (or full width strip on tall cards) */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: isTall ? "100%" : "45%",
          height: isTall ? "50%" : "55%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: card.image.endsWith(".jpg") ? 10 : 0,
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.3)) brightness(1.05)",
          }}
        />
      </div>
    </Link>
  );
}