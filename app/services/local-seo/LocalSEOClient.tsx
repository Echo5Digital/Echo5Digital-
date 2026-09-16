"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { FocusPullHero, PrismReveal } from "@/components/SolutionsFX";
import { TiltCard, CountUp, ProcessStepsRail, ProcessStepCard, ClipRow } from "@/components/ScrollFX";
import {
  MapPin,
  Search,
  Star,
  Building2,
  Link2,
  FileText,
  Bot,
  ClipboardList,
  BarChart3,
  Shield,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Eye,
  RefreshCw,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function LocalSEOClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/18462227/pexels-photo-18462227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
        className="min-h-screen flex items-center pt-[72px]"
      >
        {/* Glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <MapPin size={14} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
              Houston &amp; Sugar Land, Texas
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <PrismReveal text="Dominate Local Search" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="in Houston & Sugar Land" delay={0.5} />
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital delivers AI-powered local SEO services that put your business
            at the top of Google's map pack and local results — so nearby customers find
            you first, not your competitors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#lead-form"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Demo
            </a>
            <a
              href="#what-is-local-seo"
              className="px-8 py-4 rounded-full font-semibold text-sm text-white border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Learn More
            </a>
          </div>

          {/* Scroll cue */}
          <motion.div
            aria-hidden="true"
            className="mt-16 mx-auto w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
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

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="transparent" spacing="md" id="quick-answer" className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_60%,#EEECFB_100%)]">
        <div
          className="rounded-2xl p-6 md:p-8 border shadow-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(124,58,237,0.08) 100%)",
            borderColor: "rgba(168,85,247,0.35)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Search size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#7C3AED", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#1F2333", fontFamily: "Inter, sans-serif" }}
              >
                Local SEO is the practice of optimizing a business's online presence to rank in
                geographically relevant searches and Google's local map pack. Echo5 Digital
                provides AI-powered local SEO services for small and mid-sized businesses in
                Houston, Sugar Land, and across Texas. Services include Google Business Profile
                optimization, local citation management, geo-targeted keyword strategy, and
                local link building. Echo5 Digital serves both local Texas clients and national
                U.S. businesses.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm" withDivider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <MapPin size={20} className="text-purple-400" />,
              label: "Primary Service Area",
              value: "Houston & Sugar Land, TX",
            },
            {
              icon: <Globe size={20} className="text-purple-400" />,
              label: "Also Available",
              value: "Nationwide U.S. Clients",
            },
            {
              icon: <Bot size={20} className="text-purple-400" />,
              label: "Methodology",
              value: "AI-Powered + Human Oversight",
            },
            {
              icon: <Star size={20} className="text-purple-400" />,
              label: "Client Focus",
              value: "SMBs & Mid-Market Businesses",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
              >
                {item.icon}
              </div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                {item.label}
              </p>
              <p className="text-sm font-semibold" style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS LOCAL SEO ── */}
      <Section
        background="transparent"
        spacing="lg"
        id="what-is-local-seo"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6B4EF0", fontFamily: "Space Grotesk, sans-serif" }}>
              Understanding Local SEO
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
            >
              What Is Local SEO &amp; Why Does It Matter?
            </h2>
            <div className="space-y-4" style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}>
              <p className="text-base leading-relaxed">
                Local SEO is a specialized branch of search engine optimization that focuses on
                helping businesses appear prominently when people search for products or services
                near them — for example, "dentist near me" or "roofing company Houston."
              </p>
              <p className="text-base leading-relaxed">
                Unlike general SEO, which competes for national or global rankings, local SEO
                targets Google's local map pack, Google Business Profile listings, and
                geo-targeted organic results. It's designed specifically for businesses that
                serve customers in a defined geographic area.
              </p>
              <p className="text-base leading-relaxed">
                For small and mid-sized businesses in Houston and Sugar Land, local SEO is one
                of the highest-ROI digital marketing strategies available — putting your business
                in front of customers exactly when they're ready to buy, visit, or call.
              </p>
            </div>
          </div>

          {/* Image side — mobile/tablet: single image */}
          <Reveal variant="right" delay={0.1} className="lg:hidden">
            <div
              className="relative overflow-hidden rounded-2xl w-full aspect-[3/2]"
              style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 12px 40px rgba(91,63,163,0.15)" }}
            >
              <img
                src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Local business owner reviewing Google local search rankings on a laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Image side — desktop: staggered 3-image collage */}
          <div className="hidden lg:block relative h-[560px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl opacity-30 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(107,78,240,0.3) 0%, transparent 70%)",
                transform: "scale(0.85)",
              }}
            />

            {/* Image 1 — top right, Google search on laptop */}
            <Reveal variant="right" delay={0.1} className="absolute top-0 right-0 w-[72%] z-30">
              <TiltCard>
                <div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2]"
                  style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 16px 40px rgba(91,63,163,0.2)" }}
                >
                  <img
                    src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Local business owner reviewing Google local search rankings on a laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -left-5 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 12px 32px rgba(91,63,163,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#7C3AED" }}>
                    Local Map Pack Visibility
                  </p>
                  <p className="text-xs" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                    93% of local searches result in a map pack display.
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            {/* Image 2 — mid left, team reviewing performance data */}
            <Reveal variant="left" delay={0.25} className="absolute top-[36%] left-0 w-[62%] z-20">
              <TiltCard index={1}>
                <div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[4/3]"
                  style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 16px 40px rgba(91,63,163,0.2)" }}
                >
                  <img
                    src="/team-reviewing-marketing-strategies-digital-screen-100kb.jpg"
                    alt="Marketing team reviewing local SEO performance data on a digital screen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 12px 32px rgba(91,63,163,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <CountUp
                    target={93}
                    suffix="%"
                    className="block text-xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <p className="text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}>
                    Searches Show Map Pack
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            {/* Image 3 — bottom right, ROI/performance dashboard review */}
            <Reveal variant="up" delay={0.4} className="absolute bottom-0 right-[6%] w-[48%] z-10">
              <TiltCard index={2}>
                <div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[4/3]"
                  style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 16px 40px rgba(91,63,163,0.2)" }}
                >
                  <img
                    src="/20250820_1450_PPC-Analysis-in-Houston_simple_compose_01k33cbjyrfev8hrr3ed5be3nb-740x600.webp"
                    alt="Houston marketing team analyzing local campaign performance and ROI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── CORE LOCAL SEO SERVICES ── */}
      <Section
        background="transparent"
        spacing="lg"
        id="services"
        withDivider
        className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_50%,#EEECFB_100%)]"
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6B4EF0", fontFamily: "Space Grotesk, sans-serif" }}>
            What We Deliver
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
          >
            Core Local SEO Services
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
            A comprehensive suite of local SEO strategies built to put your Houston or Sugar
            Land business at the top of every relevant local search.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: "Google Business Profile Optimization",
              description:
                "We fully optimize your GBP listing — categories, attributes, photos, posts, Q&A, and service areas — to maximize map pack visibility and click-through rates.",
              badge: "High Impact",
              accent: "#34D399",
            },
            {
              icon: Link2,
              title: "Local Citation Building",
              description:
                "We build and audit consistent NAP citations across directories like Yelp, YellowPages, and industry-specific platforms to reinforce your local authority.",
              badge: "Authority",
              accent: "#22D3EE",
            },
            {
              icon: Search,
              title: "Geo-Targeted Keyword Strategy",
              description:
                "We identify high-intent, location-specific keywords for Houston and Sugar Land, then integrate them into your site architecture, content, and metadata.",
              badge: "Foundation",
              accent: "#A855F7",
            },
            {
              icon: Globe,
              title: "Local Link Building",
              description:
                "We earn backlinks from locally relevant Houston and Sugar Land sources — chambers of commerce, local news, and industry directories — to boost domain authority.",
              badge: "Growth",
              accent: "#60A5FA",
            },
            {
              icon: FileText,
              title: "On-Page Local Signals",
              description:
                "We embed schema markup, geo-tagged content, and local landing pages that tell search engines exactly where you serve and what you offer.",
              badge: "Technical",
              accent: "#FB923C",
            },
            {
              icon: Star,
              title: "Review Generation & Management",
              description:
                "We implement review request workflows to grow your Google ratings and monitor review sentiment, helping you build trust with local searchers.",
              badge: "Trust",
              accent: "#34D399",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl p-6 gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(160deg, ${service.accent}26 0%, #12162A 45%)`,
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 12px 32px rgba(31,23,66,0.18)",
              }}
            >
              {/* Status dot */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-4 w-2 h-2 rounded-full"
                style={{ background: service.accent, boxShadow: `0 0 8px 2px ${service.accent}99` }}
              />

              <div className="flex items-start justify-between gap-3">
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${service.accent}55` }}
                >
                  <service.icon size={20} style={{ color: service.accent }} strokeWidth={1.8} />
                </div>
              </div>

              <span
                className="inline-flex self-start text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  color: service.accent,
                  border: `1px solid ${service.accent}55`,
                  background: `${service.accent}1A`,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {service.badge}
              </span>

              <h3
                className="text-lg font-semibold leading-snug"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F3F4F6", letterSpacing: "-0.01em" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── AI-POWERED ADVANTAGE ── */}
      <Section background="gradient" spacing="lg" id="ai-advantage" withDivider>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/32026165/pexels-photo-32026165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered local SEO analytics dashboard showing automated audit and citation monitoring"
              className="w-full h-72 md:h-96 object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,15,30,0.5) 0%, transparent 60%)",
              }}
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Bot size={14} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
                AI-Powered
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              The Echo5 Digital AI Advantage
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
              Our agentic AI system supercharges every local SEO workflow — from automated
              technical audits to real-time citation monitoring — while experienced strategists
              ensure every decision meets your business goals.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: <ClipboardList size={16} className="text-purple-400" />,
                  title: "Automated Local SEO Audits",
                  desc: "AI continuously scans your local presence for gaps, inconsistencies, and opportunities — flagging issues before they hurt rankings.",
                },
                {
                  icon: <Eye size={16} className="text-purple-400" />,
                  title: "Citation Monitoring",
                  desc: "Real-time tracking across hundreds of directories to detect and correct NAP inconsistencies that erode local authority.",
                },
                {
                  icon: <Star size={16} className="text-purple-400" />,
                  title: "Review Signal Tracking",
                  desc: "Automated monitoring of review velocity, sentiment, and response times across Google and other platforms.",
                },
                {
                  icon: <BarChart3 size={16} className="text-purple-400" />,
                  title: "Performance Reporting",
                  desc: "AI-generated reports surfacing ranking movement, map pack appearances, and call/direction metrics with human-curated strategic insights.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section
        background="transparent"
        spacing="lg"
        id="how-it-works"
        withDivider
        className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_50%,#EEECFB_100%)]"
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6B4EF0", fontFamily: "Space Grotesk, sans-serif" }}>
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
          >
            How It Works
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
            A proven, step-by-step process that combines AI execution with human strategic
            oversight to deliver consistent local ranking improvements.
          </p>
        </div>
        <ProcessStepsRail
          columns={4}
          lineColor="rgba(124,58,237,0.2)"
          fillGradient="linear-gradient(90deg, #7C3AED, #A855F7)"
          dotColor="#A855F7"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              step: "01",
              icon: <Users size={20} style={{ color: "#7C3AED" }} />,
              title: "Discovery & Onboarding",
              desc: "We learn your business, competitive landscape, and goals. AI audits your existing local presence for a baseline.",
            },
            {
              step: "02",
              icon: <Search size={20} style={{ color: "#7C3AED" }} />,
              title: "Strategy & Keyword Mapping",
              desc: "Human strategists build a geo-targeted keyword plan and identify the highest-value local opportunities for Houston and Sugar Land.",
            },
            {
              step: "03",
              icon: <Zap size={20} style={{ color: "#7C3AED" }} />,
              title: "AI-Driven Implementation",
              desc: "Our agentic AI executes citation building, on-page optimization, GBP updates, and schema markup — with expert review at every step.",
            },
            {
              step: "04",
              icon: <TrendingUp size={20} style={{ color: "#7C3AED" }} />,
              title: "Monitor, Report & Improve",
              desc: "Continuous AI monitoring surfaces ranking changes and opportunities. Monthly human-curated reports keep you informed and in control.",
            },
          ].map((item, i) => (
            <ProcessStepCard
              key={i}
              index={i}
              className="relative flex flex-col p-6 rounded-2xl border border-[rgba(124,58,237,0.25)] bg-[#F1EDFB]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.14), rgba(168,85,247,0.08))",
                  border: "1px solid rgba(124,58,237,0.3)",
                }}
              >
                {item.icon}
              </div>
              <span
                className="text-xs font-bold mb-2"
                style={{ color: "#7C3AED", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Step {item.step}
              </span>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "#15172B", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </ProcessStepCard>
          ))}
        </ProcessStepsRail>
      </Section>

      {/* ── SERVICE AREA COVERAGE ── */}
      <Section background="default" spacing="lg" id="service-area" withDivider>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            Where We Serve
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Service Area Coverage
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            Echo5 Digital's local SEO services are specifically designed for businesses in
            Houston and Sugar Land, Texas. We also serve national U.S. clients needing
            geo-targeted local SEO for their markets.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <MapPin size={24} className="text-purple-400" />,
              area: "Houston, Texas",
              description:
                "Our primary market. We specialize in helping Houston businesses dominate local search across all major Houston neighborhoods and districts.",
              highlight: true,
            },
            {
              icon: <MapPin size={24} className="text-purple-400" />,
              area: "Sugar Land, Texas",
              description:
                "Deep expertise in Sugar Land's competitive local market, helping businesses capture nearby Fort Bend County customers actively searching online.",
              highlight: true,
            },
            {
              icon: <Globe size={24} className="text-purple-400" />,
              area: "National U.S. Availability",
              description:
                "While Texas is our home, Echo5 Digital delivers local SEO services to clients across the United States — any city, any market.",
              highlight: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl border"
              style={{
                background: item.highlight
                  ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)"
                  : "rgba(255,255,255,0.03)",
                borderColor: item.highlight
                  ? "rgba(124,58,237,0.4)"
                  : "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.area}
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

        {/* Local Relevance / NAP */}
        <div
          className="mt-10 p-6 rounded-2xl border"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderColor: "rgba(124,58,237,0.2)",
          }}
        >
          <h3
            className="text-base font-bold mb-3"
            style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Serving Houston &amp; Sugar Land Businesses
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            Echo5 Digital's local SEO services are specifically designed for businesses in
            Houston and Sugar Land, Texas, helping them appear prominently when nearby
            customers search for products or services. The agency's primary service area
            covers Houston and Sugar Land, TX, with national U.S. availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            <address className="not-italic flex items-center gap-2" style={{ color: "#9CA3AF" }}>
              <MapPin size={14} className="text-purple-400 flex-shrink-0" />
              <span>Houston / Sugar Land, Texas</span>
            </address>
            <a
              href="tel:713-489-7004"
              className="flex items-center gap-2 hover:text-white transition-colors"
              style={{ color: "#9CA3AF" }}
            >
              <Shield size={14} className="text-purple-400 flex-shrink-0" />
              <span>713-489-7004</span>
            </a>
            <a
              href="mailto:hello@echo5digital.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
              style={{ color: "#9CA3AF" }}
            >
              <RefreshCw size={14} className="text-purple-400 flex-shrink-0" />
              <span>hello@echo5digital.com</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── INTERNAL LINKS ── */}
      <Section background="transparent" spacing="lg" withDivider className="relative !bg-white overflow-hidden">
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

        <ul className="relative z-10">
          {[
            {
              href: "/services/google-business-profile",
              title: "Google Business Profile",
              desc: "Full GBP optimization and management to maximize map pack visibility and local credibility.",
            },
            {
              href: "/services/seo",
              title: "SEO & AEO",
              desc: "Broader search engine optimization and answer engine optimization to grow organic visibility across Google and AI search.",
              image: "/focused-businessman-showing-corporate-graphs-presentation-using-tablet-working-company-ideas-100kb.jpg",
            },
            {
              href: "/services/content-marketing",
              title: "Content Marketing",
              desc: "AI-assisted content strategies that build local authority and drive qualified traffic to your Houston or Sugar Land business.",
            },
          ].map((link, idx) => (
            <ClipRow key={link.title} index={idx} className="list-none border-t border-[rgba(124,58,237,0.15)] last:border-b">
              <Link href={link.href} className="group flex items-center gap-6 md:gap-10 py-6 md:py-8">
                {link.image && (
                  <div
                    className="hidden sm:block flex-shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-xl md:rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105"
                    style={{ boxShadow: "0 12px 32px rgba(91,63,163,0.25)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <img
                      src={link.image}
                      alt={`Team reviewing ${link.title} performance data`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className="font-bold tracking-tight transition-colors duration-300 group-hover:text-transparent"
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
                      className="hidden md:flex flex-shrink-0 items-center gap-2 text-sm font-medium opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
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
            </ClipRow>
          ))}
        </ul>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="gradient" spacing="lg" id="faq" withDivider>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            Common Questions
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Local SEO FAQ
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            Answers to the most common questions about local SEO and how Echo5 Digital
            can help your Houston or Sugar Land business grow.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: openFaq === index ? "rgba(168,85,247,0.45)" : "rgba(124,58,237,0.22)",
                background:
                  openFaq === index
                    ? "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)"
                    : "rgba(255,255,255,0.03)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-all duration-200"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span
                  className="text-sm md:text-base font-semibold pr-4"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0" style={{ color: "#A855F7" }}>
                  {openFaq === index ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-5 pb-5"
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── LEAD FORM CTA ── */}
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
              Get Started Today
            </p>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Book Your Free
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Local SEO Demo
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Ready to dominate local search in Houston and Sugar Land? Fill out the form and
              our team will respond within 24 hours — no commitment required.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Free local SEO strategy walkthrough",
                "No contracts, cancel anytime",
                "Results-focused — we win when you win",
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
              heading="Book Your Free Demo"
              subheading="Tell us about your business and we'll show you exactly how Echo5 Digital can help you dominate local search in Houston and Sugar Land, TX."
              submitLabel="Book My Free Demo"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}