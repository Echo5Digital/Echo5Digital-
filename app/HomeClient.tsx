"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import TeamSection from "@/components/TeamSection";
import IndustriesWeGrow from "@/components/IndustriesWeGrow";
import TrustedByShowcase from "@/components/TrustedByShowcase";
import { RevealMask, BlurIn, ProcessStepsRail, ProcessStepCard, DiagonalWipe, SplitClash, DropInRow } from "@/components/ScrollFX";
import {
  Bot,
  Search,
  Megaphone,
  Users,
  Zap,
  ChevronDown,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Eye,
  TrendingUp,
  Shield,
  Play,
  UserCog,
  LineChart,
  PlusCircle,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
  Building2,
  Sparkles,
  Rocket,
  XCircle,
  FileText,
  Settings,
  Globe,
  Code2,
  Target,
  ArrowUpRight,
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
    icon: Search,
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
    points: ["Rank Tracking", "Content Creation", "Backlink Building", "Technical Fixes"],
  },
  {
    title: "Social Media Marketing",
    desc: "AI-powered content, community management and paid social for every platform.",
    href: "/services/social-media-marketing",
    image: "/Social Media.png",
    badge: "Most Popular",
    icon: Megaphone,
    gradient: "linear-gradient(135deg, #6D5CF0 0%, #8B7CF6 100%)",
    points: ["Content Calendars", "Campaigns", "Analytics & Reporting", "Audience Growth"],
  },
  {
    title: "Google Ads (PPC)",
    desc: "Data-driven campaigns that maximize ROI and generate quality leads.",
    href: "/services/google-ads",
    image: "/Google Ads copy.png",
    badge: null as string | null,
    icon: Target,
    gradient: "linear-gradient(135deg, #9333EA 0%, #C084FC 100%)",
    points: ["Campaign Management", "Ad Optimization", "A/B Testing", "ROI Tracking"],
  },
  {
    title: "CRM & Automation",
    desc: "Streamline your pipeline with AI-powered CRM and automation workflows.",
    href: "/services/crm-automation",
    image: "/super growth copy.png",
    badge: "New",
    icon: Settings,
    gradient: "linear-gradient(135deg, #5B4FE8 0%, #7C6FF0 100%)",
    points: ["Pipeline Automation", "Lead Scoring", "Workflow Building", "Integrations"],
  },
  {
    title: "Web Design & Development",
    desc: "High-converting, fast and modern websites that perform.",
    href: "/services/web-design",
    image: "/dash.jpg",
    badge: null as string | null,
    icon: Globe,
    gradient: "linear-gradient(135deg, #7E3FF2 0%, #A66BF5 100%)",
    points: ["UI/UX Design", "Fast Performance", "CMS Builds", "Conversion Focused"],
  },
  {
    title: "Custom Programming",
    desc: "Bespoke software, integrations and automation tools tailored to your business.",
    href: "/services/custom-programming",
    image: "/pexels-photo-1181675-100kb.jpg",
    badge: null as string | null,
    gradient: "linear-gradient(135deg, #6B4EF0 0%, #9D7BF0 100%)",
    icon: Code2,
    points: ["Custom Software", "API Integrations", "AI Tooling", "Automation"],
  },
];

const runBusinessSteps = [
  {
    step: "01",
    title: "AI monitors",
    desc: "Tracks your connected marketing channels and flags opportunities.",
  },
  {
    step: "02",
    title: "Experts prioritize",
    desc: "Your team reviews recommendations and decides what matters most.",
  },
  {
    step: "03",
    title: "We do the work",
    desc: "Approved improvements are completed, checked, and reported to you.",
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
        <section className="hero-banner relative overflow-hidden">
          <style jsx>{`
            .hero-banner {
              background-color: #ffffff;
            }
            @media (max-width: 1023px) {
              .hero-banner {
                background-image: url("/3d-render-abstract-background-with-flowing-particles-100kb.jpg");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
              }
            }
            @media (min-width: 1024px) {
              .hero-banner {
                background-image: url("/banners.png");
                background-size: 100% auto;
                background-position: top center;
                background-repeat: no-repeat;
              }
            }
            @media (max-width: 1023px) {
              .hero-text-shadow-sm {
                text-shadow: 0 1px 6px rgba(0,0,0,0.4);
              }
              .hero-text-shadow-md {
                text-shadow: 0 1px 8px rgba(0,0,0,0.4);
              }
              .hero-text-shadow-lg {
                text-shadow: 0 2px 8px rgba(0,0,0,0.45);
              }
              .hero-text-shadow-xl {
                text-shadow: 0 2px 10px rgba(0,0,0,0.45);
              }
              .hero-text-shadow-2xl {
                text-shadow: 0 2px 12px rgba(0,0,0,0.45);
              }
            }
          `}</style>
          <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-14 md:pt-16 md:pb-20 lg:min-h-[min(41.3vw,787px)] lg:flex lg:items-center">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
              {/* Text */}
              <div className="w-full lg:w-[100%] lg:flex-shrink-0">
                <BlurIn>
                  <p
                    className="hero-text-shadow-lg text-xs font-bold uppercase mb-5 text-[rgb(135,65,240)] lg:text-[#6B4EF0]"
                    style={{ letterSpacing: "2px" }}
                  >
                    Done-For-You Marketing For Local Businesses
                  </p>
                </BlurIn>
                <h1
                  className="hero-text-shadow-2xl font-black leading-[1.05] tracking-tight mb-5 text-white lg:text-[#15172B]"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 6.5vw, 4.25rem)" }}
                >
                  <RevealMask>We Run Your</RevealMask>
                  <br />
                  <RevealMask delay={0.1}>Marketing.</RevealMask>
                </h1>
                <BlurIn delay={0.15}>
                  <p
                    className="hero-text-shadow-xl font-bold leading-snug mb-6 text-white lg:text-[rgb(148,73,242)]"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)" }}
                  >
                    AI keeps watch. Our experts take action.
                  </p>
                </BlurIn>
                <BlurIn delay={0.2}>
                  <p
                    className="hero-text-shadow-md text-lg leading-relaxed mb-9 max-w-xl text-white lg:text-[#5B5F73]"
                  >
                    Your AI Marketing Employee monitors performance and finds opportunities. Our marketing team turns them into completed work, from SEO and content to ads and website improvements.
                  </p>
                </BlurIn>
                <BlurIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base whitespace-nowrap transition-all duration-200 hover:brightness-110 active:scale-95"
                      style={{
                        background: "rgb(135, 65, 240)",
                        boxShadow: "0 8px 24px rgba(135,65,240,0.35)",
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      Book a Growth Review
                    </Link>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base whitespace-nowrap transition-all duration-200 border-white/40 text-white lg:border-[rgba(21,23,43,0.15)] lg:text-[#15172B]"
                      style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      Explore Our Plans
                    </Link>
                  </div>
                </BlurIn>
                <BlurIn delay={0.35}>
                  <p
                    className="hero-text-shadow-sm text-sm text-white lg:text-[#8B8FA3]"
                  >
                    AI-powered monitoring. Human-managed delivery.
                  </p>
                </BlurIn>
              </div>

              <div className="hidden lg:block lg:flex-1" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY (ANIMATED LOGO) — mobile only, shown above trust bar ── */}
        <div className="lg:hidden">
          <TrustedByShowcase />
        </div>

        {/* ── MARKETING WORK WE HANDLE — desktop only ─────────────────── */}
        <section className="hidden lg:block w-full">
          <div
            className="w-full px-6 py-10"
            style={{
              background: "rgba(255,255,255,0.6)",
              borderTop: "1px solid rgba(107,78,240,0.1)",
              borderBottom: "1px solid rgba(107,78,240,0.1)",
            }}
          >
            <h2
              className="text-center font-black leading-tight mb-8"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#15172B" }}
            >
              The marketing work we handle for you
            </h2>
            <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 md:gap-x-16">
              {[
                { label: "SEO & AI Search", icon: Search },
                { label: "Google Business Profile", icon: MapPin },
                { label: "Social Media", icon: Users },
                { label: "Google & Meta Ads", icon: Megaphone },
                { label: "Content Creation", icon: FileText },
                { label: "Website Improvements", icon: Settings },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-3 max-w-[130px] text-center">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 56,
                      height: 56,
                      background: "linear-gradient(135deg, rgba(107,78,240,0.12), rgba(139,92,246,0.12))",
                      border: "1px solid rgba(107,78,240,0.18)",
                    }}
                  >
                    <item.icon size={24} style={{ color: "#6B4EF0" }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#15172B" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE SERVICES ────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-10"
          style={{ backgroundImage: "url('/bg (2).png')" }}
        >
          <div className="relative flex flex-col items-center text-center gap-4 mb-12">
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

          <div className="relative max-w-[1300px] mx-auto">
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
          </div>
        </section>

        {/* ── YOU RUN YOUR BUSINESS. WE HANDLE THE MARKETING. ────────── */}
        <section className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <BlurIn>
            <h2
              className="text-center font-black leading-tight mb-16 md:mb-20"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#15172B" }}
            >
              You run your business. We handle the marketing.
            </h2>
          </BlurIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-10 max-w-5xl mx-auto">
            {runBusinessSteps.map((step, i) => (
              <BlurIn key={step.step} delay={i * 0.12}>
                <span
                  className="block font-black leading-none mb-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.25rem", color: "#C9BFF5" }}
                >
                  {step.step}
                </span>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#5B5F73" }}>
                  {step.desc}
                </p>
              </BlurIn>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <BlurIn>
            <div
              className="relative overflow-hidden rounded-[2rem] w-full px-8 py-12 md:px-14 md:py-16"
              style={{ background: "linear-gradient(135deg, #E4D9FB 0%, #DCCBFA 100%)" }}
            >
              <div
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{
                  top: "-20%",
                  right: "-8%",
                  width: "500px",
                  height: "500px",
                  background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(107,78,240,0.15) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
                <div className="lg:w-80 flex-shrink-0">
                  <BlurIn delay={0.05}>
                    <p
                      className="text-xs font-bold uppercase mb-4"
                      style={{ color: "#6B4EF0", letterSpacing: "2px" }}
                    >
                      How it works
                    </p>
                  </BlurIn>
                  <h2
                    className="font-black leading-[1.05] tracking-tight mb-4"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#15172B" }}
                  >
                    <RevealMask>A simple</RevealMask>
                    <br />
                    <RevealMask delay={0.1}>process for</RevealMask>
                    <br />
                    <RevealMask delay={0.2}>big results</RevealMask>
                  </h2>
                  <BlurIn delay={0.3}>
                    <p className="text-base leading-relaxed" style={{ color: "#4B4F63" }}>
                      We combine AI execution with expert human oversight to deliver continuous
                      growth.
                    </p>
                  </BlurIn>
                </div>

                <div className="flex-1">
                  <ProcessStepsRail
                    columns={4}
                    lineColor="rgba(107,78,240,0.3)"
                    dotColor="#6B4EF0"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                  >
                    {processSteps.map((step, i) => (
                      <ProcessStepCard key={step.step} index={i} className="relative flex flex-col gap-3">
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
                        <step.icon size={22} style={{ color: "#6B4EF0" }} />
                        <h3
                          className="text-base font-semibold"
                          style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#4B4F63" }}>
                          {step.desc}
                        </p>
                      </ProcessStepCard>
                    ))}
                  </ProcessStepsRail>
                </div>
              </div>
            </div>
          </BlurIn>
        </section>

        {/* ── INDUSTRIES WE GROW ──────────────────────────────────── */}
        <IndustriesWeGrow />

        {/* ── DARK CTA BAND ────────────────────────────────────────── */}
        <section className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
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
                  From AI systems and automation to custom software and digital growth, we
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
                  Happy Client
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
        {/* ── TRADITIONAL AGENCY VS ECHO5 DIGITAL ─────────────────────── */}
        <Section background="transparent" spacing="sm" maxWidth="3xl" withDivider className="relative !bg-[#0A0616]">
          {/* Background image (purple light-streak visual) — breaks out of Section's
              inner max-width wrapper via viewport-relative left/width so it spans full
              browser width instead of being capped at the content max-width. */}
          <div
            aria-hidden="true"
            className="absolute -top-8 -bottom-8 md:-top-12 md:-bottom-12 bg-cover bg-center bg-no-repeat"
            style={{
              left: "50%",
              width: "100vw",
              transform: "translateX(-50%)",
              backgroundImage: "url('/8a9cd2fa791497fc3d5ca01f42445d81.jpg')",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -top-8 -bottom-8 md:-top-12 md:-bottom-12"
            style={{
              left: "50%",
              width: "100vw",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(180deg, rgba(10,6,22,0.55) 0%, rgba(10,6,22,0.75) 50%, rgba(10,6,22,0.92) 100%)",
            }}
          />
          {/* Glow orbs for extra depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #A855F7 0%, transparent 70%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
          />

          {/* Content */}
          <div className="relative z-10">
            <DiagonalWipe>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-3"
                  style={{
                    color: "#D8B4FE",
                    background: "rgba(168,85,247,0.12)",
                    border: "1px solid rgba(168,85,247,0.35)",
                  }}
                >
                  THE DIFFERENCE IS CLEAR
                </div>
                <h2
                  className="font-black leading-[1.05] tracking-tight mb-3"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                    color: "#FFFFFF",
                  }}
                >
                  Traditional Agency{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #A855F7, #E9D5FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    VS
                  </span>{" "}
                  Echo5 Digital
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#C4C7D6" }}>
                  Why smart brands are replacing their agencies with Echo5&apos;s AI-powered growth system.
                </p>
              </div>
            </DiagonalWipe>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch max-w-4xl mx-auto relative">
              {/* VS badge between the two cards (desktop only) */}
              <div
                aria-hidden="true"
                className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center rounded-full font-black text-white"
                style={{
                  width: "64px",
                  height: "64px",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.1rem",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 10px 30px rgba(168,85,247,0.5), 0 0 0 6px rgba(10,6,22,0.9)",
                }}
              >
                VS
              </div>

              {/* Traditional Agency */}
              <SplitClash side="left">
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.1)" }}
                    >
                      <Users size={22} style={{ color: "#C4C7D6" }} />
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F5F3FF" }}
                    >
                      Traditional Agency
                    </h3>
                  </div>
                  <ul>
                    {[
                      "Human team with limited capacity",
                      "Slow execution, weeks to go live",
                      "Monthly vanity metric reports",
                      "Disconnected tools and platforms",
                      "No lead intelligence or attribution",
                      "AI as an afterthought",
                      "Scales by hiring more people",
                    ].map((item, i, arr) => (
                      <DropInRow
                        key={item}
                        index={i}
                        className="flex items-center gap-3 py-2.5"
                        style={{
                          borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                        }}
                      >
                        <span
                          className="flex items-center justify-center rounded-full flex-shrink-0"
                          style={{ width: "22px", height: "22px", background: "rgba(255,255,255,0.1)" }}
                        >
                          <XCircle size={14} style={{ color: "#9CA3AF" }} />
                        </span>
                        <span className="text-sm leading-relaxed" style={{ color: "#B4B7C9" }}>
                          {item}
                        </span>
                      </DropInRow>
                    ))}
                  </ul>
                </div>
              </SplitClash>

              {/* Echo5 Digital */}
              <SplitClash side="right" delay={0.1}>
                <div
                  className="rounded-2xl p-6 relative overflow-hidden h-full"
                  style={{
                    background: "linear-gradient(160deg, rgba(124,58,237,0.22) 0%, rgba(168,85,247,0.1) 100%)",
                    border: "1.5px solid rgba(168,85,247,0.5)",
                    boxShadow: "0 30px 70px rgba(124,58,237,0.35)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7, #E9D5FF)" }}
                  />
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        boxShadow: "0 6px 16px rgba(124,58,237,0.5)",
                      }}
                    >
                      <Bot size={24} style={{ color: "#fff" }} />
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFFFF" }}
                    >
                      Echo5 Digital
                    </h3>
                  </div>
                  <ul>
                    {[
                      "AI employees, unlimited capacity",
                      "Same-day execution and deployment",
                      "Real-time business intelligence dashboard",
                      "One unified AI platform for everything",
                      "Full lead pipeline, CRM & attribution",
                      "AI is the core, not a feature",
                      "Scales infinitely without headcount",
                    ].map((item, i, arr) => (
                      <DropInRow
                        key={item}
                        index={i}
                        className="flex items-center gap-3 py-2.5"
                        style={{
                          borderBottom: i < arr.length - 1 ? "1px solid rgba(168,85,247,0.2)" : "none",
                        }}
                      >
                        <span
                          className="flex items-center justify-center rounded-full flex-shrink-0"
                          style={{
                            width: "22px",
                            height: "22px",
                            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                          }}
                        >
                          <CheckCircle size={14} style={{ color: "#fff" }} />
                        </span>
                        <span className="text-sm leading-relaxed font-medium" style={{ color: "#F5F3FF" }}>
                          {item}
                        </span>
                      </DropInRow>
                    ))}
                  </ul>
                </div>
              </SplitClash>
            </div>
          </div>
        </Section>

        {/* ── AI MARKETING EMPLOYEE PRODUCT TIERS ─────────────────────── */}
        <Section background="gradient" spacing="lg" maxWidth="3xl" withDivider>
          <BlurIn>
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
          </BlurIn>
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
            ].map((tier, i) => (
              <BlurIn key={tier.name} delay={i * 0.1}>
                <div
                  className="group relative flex flex-col rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: tier.popular
                      ? "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(168,85,247,0.14) 100%)"
                      : "rgba(255,255,255,0.04)",
                    border: tier.popular
                      ? "2px solid rgba(168,85,247,0.55)"
                      : "1px solid rgba(124,58,237,0.25)",
                    boxShadow: tier.popular ? "0 0 40px rgba(124,58,237,0.3)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${tier.color}90`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = tier.popular
                      ? "0 20px 55px rgba(124,58,237,0.45)"
                      : `0 20px 45px -8px ${tier.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = tier.popular
                      ? "rgba(168,85,247,0.55)"
                      : "rgba(124,58,237,0.25)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = tier.popular
                      ? "0 0 40px rgba(124,58,237,0.3)"
                      : "none";
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
                        <CheckCircle
                          size={15}
                          className="transition-transform duration-200 group-hover:scale-125"
                          style={{ color: "#A855F7", flexShrink: 0, marginTop: 2 }}
                        />
                        <span className="text-sm" style={{ color: "#D1D5DB" }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className="w-full py-3 rounded-full text-center text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.03] block"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 0 18px rgba(124,58,237,0.4)",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </BlurIn>
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
        <Section background="default" spacing="lg" maxWidth="3xl" withDivider>
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
                closed-loop growth engine, continuously learning and improving.
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
        <Section background="transparent" spacing="lg" maxWidth="3xl" withDivider className="!bg-[#EEECFB] min-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-10 items-start">
            {/* Left intro copy */}
            <BlurIn>
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
            </BlurIn>

            {/* Right result cards */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    industry: "Dental Practice",
                    location: "Houston, TX",
                    image: "/nurse-typing-computer-making-appointments-while-dental-specialist-talking-patient-stomatology-chair-before-examination-dentist-nurse-working-together-modern-stomatological-clinic-80kb.jpg",
                    metric: "+320%",
                    metricLabel: "organic traffic",
                    desc: "After 6 months of AI-driven SEO + AEO, a local dental practice saw a dramatic increase in search visibility and new patient inquiries.",
                    tags: ["SEO", "AEO", "Local Search"],
                  },
                  {
                    industry: "Home Services Company",
                    location: "Sugar Land, TX",
                    image: "/furniture-assembly-worker-uses-laptop-consult-instructions-handyman-doing-good-job-100kb.jpg",
                    metric: "4.5×",
                    metricLabel: "Google Ads ROAS",
                    desc: "An AI-optimized Google Ads campaign for a home services company resulted in a 4.5× return on ad spend within the first 90 days.",
                    tags: ["Google Ads", "PPC"],
                  },
                  {
                    industry: "Fitness Studio",
                    location: "National",
                    image: "/friends-using-smartphones-together-outdoors-100kb.jpg",
                    metric: "+180%",
                    metricLabel: "social engagement",
                    desc: "AI-generated social content and paid social campaigns drove a 180% uplift in engagement and a measurable increase in membership sign-ups.",
                    tags: ["Social Media", "Meta Ads"],
                  },
                ].map((cs, i) => (
                  <ProcessStepCard key={cs.industry} index={i}>
                    <div
                      className="group flex flex-col rounded-2xl overflow-hidden bg-white transition-all duration-300 ease-out hover:-translate-y-1.5"
                      style={{
                        border: "1px solid rgba(107,78,240,0.15)",
                        boxShadow: "0 4px 20px rgba(79,50,217,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(79,50,217,0.2)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(107,78,240,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(79,50,217,0.08)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(107,78,240,0.15)";
                      }}
                    >
                      <div className="relative w-full aspect-[16/10] overflow-hidden">
                        <Image
                          src={cs.image}
                          alt={`${cs.industry}, ${cs.location}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
                              className="text-xs px-2.5 py-1 rounded-md font-medium transition-colors duration-300 group-hover:bg-[#6B4EF0] group-hover:text-white"
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
                  </ProcessStepCard>
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
                    { icon: Phone, label: "Phone", value: "713-489-7004", href: "tel:+17134897004" },
                    { icon: Mail, label: "Email", value: "sales@echo5digital.com", href: "mailto:sales@echo5digital.com" },
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
                      { icon: Phone, label: "Phone", value: "713-489-7004", href: "tel:+17134897004" },
                      { icon: Mail, label: "Email", value: "sales@echo5digital.com", href: "mailto:sales@echo5digital.com" },
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
        <Section background="transparent" spacing="xl" maxWidth="3xl" withDivider className="!bg-[#EEECFB]">
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
                Employee can grow your business, no commitment required.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Free 30-minute strategy demo",
                  "No contracts, cancel anytime",
                  "Results-focused, we win when you win",
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
                <a href="tel:+17134897004" className="block" style={{ color: "#4F32D9" }}>
                  📞 713-489-7004
                </a>
                <a href="mailto:sales@echo5digital.com" className="block" style={{ color: "#4F32D9" }}>
                  ✉️ sales@echo5digital.com
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
  const Icon = card.icon;

  return (
    <Link
      href={card.href}
      className="group"
      style={{
        position: "relative",
        minHeight,
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
        background: card.gradient,
        boxShadow: "0 8px 30px rgba(107,78,240,0.18)",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 20px 48px rgba(107,78,240,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(107,78,240,0.18)";
      }}
    >
      {/* AI Employee badge */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 3,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.35)",
          color: "#fff",
          fontSize: "10px",
          fontWeight: 700,
          padding: "5px 12px 5px 8px",
          borderRadius: "999px",
          letterSpacing: "0.5px",
        }}
      >
        <Icon size={12} />
        AI EMPLOYEE
      </div>

      {/* Badge */}
      {card.badge && (
        <span
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 3,
            background: "rgba(255,255,255,0.95)",
            border: "1px solid rgba(107,78,240,0.2)",
            color: "#6B4EF0",
            fontSize: "10px",
            fontWeight: 700,
            padding: "5px 12px",
            borderRadius: "999px",
            letterSpacing: "0.5px",
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
          paddingTop: 56,
          paddingRight: 64,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        <h3
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: isTall ? "1.3rem" : "1.1rem",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 10,
            maxWidth: isTall ? "100%" : "60%",
          }}
        >
          {card.title}
        </h3>

        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.5,
            marginBottom: 16,
            maxWidth: isTall ? "100%" : "60%",
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
                background: "rgba(255,255,255,0.16)",
                border: "1px solid rgba(255,255,255,0.28)",
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
            filter: "drop-shadow(0 8px 24px rgba(21,23,43,0.25))",
          }}
        />
      </div>

      {/* Arrow button */}
      <div
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          zIndex: 3,
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#fff",
          border: "1px solid rgba(107,78,240,0.15)",
          boxShadow: "0 4px 12px rgba(107,78,240,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowUpRight size={16} style={{ color: "#6B4EF0" }} />
      </div>
    </Link>
  );
}