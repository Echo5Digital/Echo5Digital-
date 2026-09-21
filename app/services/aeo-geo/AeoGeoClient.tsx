"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { FocusPullHero, PrismReveal, InkReveal } from "@/components/SolutionsFX";
import { TiltCard, CountUp, ClipRow, ProcessStepsRail, ProcessStepCard } from "@/components/ScrollFX";
import {
  Bot,
  Brain,
  Search,
  FileText,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Target,
  BarChart3,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Network,
  Code2,
  Layers,
  TrendingUp,
  MessageSquare,
  Globe,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function AeoGeoClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
        className="flex items-center py-16 sm:py-20 md:min-h-screen md:min-h-[100svh] md:py-0 pt-[72px]"
        bgPositionClassName="bg-bottom"
      >
        {/* Glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Bot size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold tracking-wide font-[Inter]">
              AI Visibility Specialists
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            <PrismReveal text="Get Cited by" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="AI Answer Engines" delay={0.5} />
            </span>
          </h1>

          <p
            className="text-base md:text-xl max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital is a specialist{" "}
            <strong style={{ color: "#C084FC" }}>AEO &amp; GEO agency</strong> helping businesses
            appear in AI-generated answers on Google SGE, ChatGPT, Bing Copilot, and more — so
            your brand shows up where the new search happens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cta-audit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.6), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get a Free AEO/GEO Audit
              <ArrowRight size={18} />
            </a>
            <a
              href="#what-is-aeo-geo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Learn More
              <ChevronDown size={18} />
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { value: "AI-First", label: "Strategy" },
              { value: "3 Platforms", label: "SGE, ChatGPT, Bing" },
              { value: "National", label: "U.S. Coverage" },
              { value: "Houston, TX", label: "Primary HQ" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-xl border border-purple-500/20 backdrop-blur-sm"
                style={{ background: "rgba(124,58,237,0.12)" }}
              >
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #A855F7, #C084FC)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-xs mt-1" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll cue */}
          <motion.div
            aria-hidden="true"
            className="hidden md:flex mt-16 mx-auto w-7 h-11 rounded-full border-2 border-white/30 items-start justify-center p-1.5"
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

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ── */}
      <Section background="lavender" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8 border border-purple-300/50 relative overflow-hidden shadow-sm"
          style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(124,58,237,0.08) 100%)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7)" }}
          />
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <MessageSquare size={20} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#7C3AED", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer — What Is AEO &amp; GEO?
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#1F2333", fontFamily: "Inter, sans-serif" }}
              >
                <strong>Answer Engine Optimization (AEO)</strong> and{" "}
                <strong>Generative Engine Optimization (GEO)</strong> are content strategies that
                help businesses appear in AI-generated search answers from platforms like Google SGE,
                ChatGPT, and Bing Copilot.{" "}
                <strong>Echo5 Digital</strong> offers specialist AEO and GEO services for small and
                mid-sized businesses, using structured content, schema markup, and direct answer
                formatting to maximize AI visibility. Services are available to businesses in{" "}
                <strong>Houston, Sugar Land, Texas</strong>, and across the{" "}
                <strong>United States</strong>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHAT ARE AEO & GEO ── */}
      <Section id="what-is-aeo-geo" background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
            Education
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What Are AEO and GEO?
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            The search landscape has fundamentally changed. Here's what the new disciplines mean and
            how they differ from traditional SEO.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              label: "Traditional SEO",
              color: "#6B7280",
              description:
                "Optimizes pages to rank in the 10-blue-link results page. Focuses on keywords, backlinks, and technical signals. Still important — but no longer sufficient on its own.",
              tags: ["Rankings", "Blue Links", "Keywords"],
            },
            {
              icon: Bot,
              label: "AEO — Answer Engine Optimization",
              color: "#7C3AED",
              description:
                "Structures content so AI-powered platforms — Google AI Overviews, Bing Copilot, voice assistants — can extract and surface your answers directly to users, often above traditional results.",
              tags: ["Google SGE", "Bing Copilot", "Voice Search"],
            },
            {
              icon: Brain,
              label: "GEO — Generative Engine Optimization",
              color: "#A855F7",
              description:
                "Optimizes content to be cited or referenced by large language models like ChatGPT, Gemini, and Perplexity AI when they generate responses — ensuring your brand appears in AI-generated narratives.",
              tags: ["ChatGPT", "Gemini", "Perplexity"],
            },
          ].map((item) => (
            <div
              key={item.label}
              className="relative rounded-2xl p-6 border flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: `${item.color}40`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
              >
                <item.icon size={24} style={{ color: item.color }} />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.label}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                      border: `1px solid ${item.color}33`,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHY AEO & GEO MATTER NOW ── */}
      <Section
        background="transparent"
        spacing="lg"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side — mobile/tablet: single image */}
          <Reveal variant="right" delay={0.1} className="lg:hidden">
            <div
              className="relative overflow-hidden rounded-2xl w-full aspect-[3/2]"
              style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 12px 40px rgba(91,63,163,0.15)" }}
            >
              <img
                src="https://images.pexels.com/photos/5833758/pexels-photo-5833758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Analyzing AI search trends and answer engine optimization strategy"
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

            {/* Image 1 — top right, main AI-search visual */}
            <Reveal variant="right" delay={0.1} className="absolute top-0 right-0 w-[72%] z-30">
              <TiltCard>
                <div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2]"
                  style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 16px 40px rgba(91,63,163,0.2)" }}
                >
                  <img
                    src="https://images.pexels.com/photos/5833758/pexels-photo-5833758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Analyzing AI search trends and answer engine optimization strategy"
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
                    The Early-Mover Advantage
                  </p>
                  <p className="text-xs" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                    Brands that optimize for AI answer engines now will dominate their categories.
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            {/* Image 2 — mid left, SEO data/graphics visual */}
            <Reveal variant="left" delay={0.25} className="absolute top-[36%] left-0 w-[62%] z-20">
              <TiltCard index={1}>
                <div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[4/3]"
                  style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 16px 40px rgba(91,63,163,0.2)" }}
                >
                  <img
                    src="/search-find-view-information-data-graphic-symbol-icon-100kb.jpg"
                    alt="Data and search visibility signals used to evaluate AI answer readiness"
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
                    target={3}
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
                    AI Platforms Tracked
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            {/* Image 3 — bottom right, SEO cloud visual */}
            <Reveal variant="up" delay={0.4} className="absolute bottom-0 right-[6%] w-[48%] z-10">
              <TiltCard index={2}>
                <div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[4/3]"
                  style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 16px 40px rgba(91,63,163,0.2)" }}
                >
                  <img
                    src="/top-view-cloud-with-word-seo-80kb.jpg"
                    alt="SEO foundations that AEO and GEO strategy builds on"
                    className="w-full h-full object-cover"
                  />
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Text side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]" style={{ color: "#6B4EF0" }}>
              The Shift Is Happening Now
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Why AEO &amp; GEO Matter in 2024 &amp; Beyond
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Search behavior is undergoing its biggest transformation since Google launched. Users
              increasingly skip the blue links entirely — AI answer engines are delivering direct
              answers, and zero-click results are the new normal.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: TrendingUp,
                  text: "Google's AI Overviews now appear for millions of searches daily, often replacing the top organic results.",
                },
                {
                  icon: Globe,
                  text: "ChatGPT, Perplexity, and Gemini are becoming primary research tools for consumers and B2B buyers.",
                },
                {
                  icon: Zap,
                  text: "Voice search queries are answered by AI, not a list of links — your content must be answer-ready.",
                },
                {
                  icon: Target,
                  text: "Businesses not optimizing for AI answers risk invisibility even if they rank well in traditional SEO.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}
                  >
                    <item.icon size={16} style={{ color: "#6B4EF0" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── ECHO5 APPROACH ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
            Our Methodology
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Echo5 Digital's AEO &amp; GEO Approach
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            We use a proprietary methodology combining structured content architecture, semantic
            entity optimization, and AI-citation formatting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FileText,
              title: "Direct Answer Content",
              desc: "We craft concise, question-first content blocks designed to be extracted verbatim by AI answer engines.",
            },
            {
              icon: Code2,
              title: "Schema Markup",
              desc: "FAQPage, HowTo, Article, and Service schema are implemented to signal structure to crawlers and LLMs.",
            },
            {
              icon: Network,
              title: "Entity Optimization",
              desc: "We build topical authority and entity associations so AI systems recognize your brand as a trusted knowledge source.",
            },
            {
              icon: Star,
              title: "Authoritative Sourcing",
              desc: "Content is built with credible citations, E-E-A-T signals, and authorship markup that LLMs prioritize.",
            },
            {
              icon: Layers,
              title: "Content Format Strategy",
              desc: "We structure content as lists, tables, definitions, and Q&A — the formats AI answer engines favor.",
            },
            {
              icon: BarChart3,
              title: "SEO Integration",
              desc: "AEO and GEO are layered on top of your existing SEO strategy — amplifying results rather than replacing them.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── SERVICE FEATURES ── */}
      <Section
        background="transparent"
        spacing="lg"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#EEECFB_0%,#F7F5FD_50%,#FFFFFF_100%)]"
      >
        <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* Deliverable card bento grid */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]" style={{ color: "#6B4EF0" }}>
              Deliverables
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              AEO &amp; GEO Service Features
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Every AEO and GEO engagement includes a comprehensive set of deliverables designed to
              maximize your AI answer visibility across platforms.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Direct answer content creation for target queries",
                "FAQPage schema markup implementation",
                "Structured data audit and enhancement",
                "Entity building and knowledge graph optimization",
                "AI-citation content optimization",
                "HowTo and Step schema for process content",
                "E-E-A-T signal strengthening",
                "Topical authority content cluster development",
                "Monthly AI visibility performance reporting",
                "Integration with broader SEO and content strategy",
              ].map((feature, idx) => (
                <ClipRow
                  key={feature}
                  index={idx}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(124,58,237,0.18)" }}
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      color: "#fff",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-snug" style={{ color: "#2A2E42", fontFamily: "Inter, sans-serif" }}>
                    {feature}
                  </span>
                </ClipRow>
              ))}
            </ul>
          </div>

          {/* Tilted image frame */}
          <div className="relative hidden lg:flex items-center justify-center h-[420px]">
            <div
              aria-hidden="true"
              className="absolute w-[80%] h-[85%] rounded-[2rem]"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                transform: "rotate(6deg)",
                opacity: 0.15,
              }}
            />
            <InkReveal origin="50% 50%" className="relative w-[78%]" style={{ transform: "rotate(-4deg)" }}>
              <div
                className="relative overflow-hidden rounded-[1.75rem] w-full aspect-[4/5]"
                style={{
                  border: "1px solid rgba(124,58,237,0.25)",
                  boxShadow: "0 24px 60px rgba(91,63,163,0.28)",
                }}
              >
                <img
                  src="/3d-graph-computer-illustration-100kb.jpg"
                  alt="Structured data and AI visibility reporting dashboard for AEO and GEO deliverables"
                  className="w-full h-full object-cover"
                />
              </div>
            </InkReveal>
          </div>

          {/* Mobile/tablet fallback image */}
          <div className="lg:hidden relative rounded-2xl overflow-hidden">
            <img
              src="/3d-graph-computer-illustration-100kb.jpg"
              alt="Structured data and AI visibility reporting dashboard for AEO and GEO deliverables"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
        </div>
      </Section>

      {/* ── AEO vs SEO vs GEO COMPARISON ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-10">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
            Side-by-Side Comparison
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AEO vs SEO vs GEO
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-purple-500/20">
          <table className="w-full min-w-[600px]" style={{ fontFamily: "Inter, sans-serif" }}>
            <thead>
              <tr style={{ background: "rgba(124,58,237,0.15)", borderBottom: "1px solid rgba(124,58,237,0.25)" }}>
                <th className="text-left p-4 text-sm font-semibold" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
                  Attribute
                </th>
                <th className="text-left p-4 text-sm font-semibold" style={{ color: "#9CA3AF", fontFamily: "Space Grotesk, sans-serif" }}>
                  Traditional SEO
                </th>
                <th className="text-left p-4 text-sm font-semibold" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
                  AEO
                </th>
                <th className="text-left p-4 text-sm font-semibold" style={{ color: "#C084FC", fontFamily: "Space Grotesk, sans-serif" }}>
                  GEO
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  attr: "Primary Goal",
                  seo: "Rank in blue links",
                  aeo: "Appear as direct AI answer",
                  geo: "Be cited by LLMs",
                },
                {
                  attr: "Key Platforms",
                  seo: "Google, Bing (organic)",
                  aeo: "Google SGE, Bing Copilot, Voice",
                  geo: "ChatGPT, Gemini, Perplexity",
                },
                {
                  attr: "Content Format",
                  seo: "Long-form pages, keywords",
                  aeo: "Q&A, definitions, lists",
                  geo: "Authoritative, citable prose",
                },
                {
                  attr: "Success Metric",
                  seo: "Rankings, organic traffic",
                  aeo: "Featured in AI answers",
                  geo: "Brand citations in LLM outputs",
                },
                {
                  attr: "Schema Needed",
                  seo: "Helpful but optional",
                  aeo: "Critical (FAQ, HowTo)",
                  geo: "Important (Article, Organization)",
                },
                {
                  attr: "Timeline",
                  seo: "3–6+ months",
                  aeo: "4–8 weeks for early gains",
                  geo: "Ongoing, builds over time",
                },
              ].map((row, i) => (
                <tr
                  key={row.attr}
                  style={{
                    background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(124,58,237,0.04)",
                    borderBottom: "1px solid rgba(124,58,237,0.12)",
                  }}
                >
                  <td className="p-4 text-sm font-medium" style={{ color: "#E5E7EB" }}>
                    {row.attr}
                  </td>
                  <td className="p-4 text-sm" style={{ color: "rgba(229,231,235,0.55)" }}>
                    {row.seo}
                  </td>
                  <td className="p-4 text-sm" style={{ color: "rgba(229,231,235,0.85)" }}>
                    {row.aeo}
                  </td>
                  <td className="p-4 text-sm" style={{ color: "rgba(192,132,252,0.85)" }}>
                    {row.geo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section
        background="transparent"
        spacing="lg"
        withDivider
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_50%,#EEECFB_100%)]"
      >
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]" style={{ color: "#6B4EF0" }}>
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            How It Works — AEO/GEO Process
          </h2>
        </div>

        <ProcessStepsRail
          columns={4}
          lineColor="rgba(124,58,237,0.2)"
          fillGradient="linear-gradient(90deg, #7C3AED, #A855F7)"
          dotColor="#A855F7"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              step: "01",
              icon: Search,
              title: "Content Audit & Gap Analysis",
              desc: "We analyze your existing content, identify AI-answer gaps, and map high-priority queries where you should be appearing but aren't.",
            },
            {
              step: "02",
              icon: FileText,
              title: "Structured Content Creation",
              desc: "Our team writes direct-answer content blocks, Q&A pages, and topic clusters formatted for AI extraction and citation.",
            },
            {
              step: "03",
              icon: Code2,
              title: "Schema Implementation",
              desc: "We implement FAQPage, HowTo, Article, and Organization schema markup across your site for maximum AI crawlability.",
            },
            {
              step: "04",
              icon: BarChart3,
              title: "Performance Monitoring",
              desc: "We track AI answer appearances, citation frequency, and visibility trends — then iterate for continuous improvement.",
            },
          ].map((step, i) => (
            <ProcessStepCard key={step.step} index={i} className="relative flex flex-col items-center text-center gap-4">
              <div
                className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.14), rgba(168,85,247,0.08))",
                  border: "1px solid rgba(124,58,237,0.3)",
                  boxShadow: "0 8px 24px rgba(91,63,163,0.15)",
                }}
              >
                <step.icon size={28} style={{ color: "#7C3AED" }} />
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    color: "#fff",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  {i + 1}
                </span>
              </div>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                {step.desc}
              </p>
            </ProcessStepCard>
          ))}
        </ProcessStepsRail>
      </Section>

      {/* ── AI MARKETING EMPLOYEE CONNECTION ── */}
      <Section background="default" spacing="lg" withDivider>
        <div
          className="rounded-2xl p-8 md:p-12 relative overflow-hidden border border-purple-500/25"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
                <Zap size={14} style={{ color: "#A855F7" }} />
                <span className="text-purple-300 text-xs font-semibold tracking-wide font-[Inter]">
                  Part of the AI Marketing Employee
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                AEO &amp; GEO Built Into Your AI Growth System
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                AEO and GEO aren't standalone services at Echo5 Digital — they're core components of
                our{" "}
                <strong style={{ color: "#A855F7" }}>AI Marketing Employee</strong> model. Our
                agentic AI growth system continuously monitors AI answer opportunities, creates
                optimized content, and adjusts strategy in real time — so your AI visibility
                compounds month over month.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Automated AI answer monitoring across platforms",
                  "Continuous content optimization via AI agents",
                  "Integrated with SEO, local SEO, and paid strategy",
                  "Human-reviewed for accuracy and brand voice",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#A855F7" }} />
                    <span className="text-sm" style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/ai-marketing-employee"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Learn About AI Marketing Employee
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI Marketing Employee powering AEO and GEO optimization automatically"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 60%)" }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES ── */}
      <Section background="transparent" spacing="lg" withDivider className="relative !bg-white overflow-hidden">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-1/4 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10 mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]" style={{ color: "#6B4EF0" }}>
            Industries We Serve
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            Industries That Benefit Most from AEO &amp; GEO
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
            Businesses in high-intent, question-driven industries see the greatest AI answer
            visibility gains.
          </p>
        </div>

        <ul className="relative z-10">
          {[
            {
              name: "Healthcare",
              desc: "Patients ask AI for symptoms, treatments, and providers. AEO positions your practice in these high-stakes answers.",
              href: "/industries/healthcare",
              image: "https://images.pexels.com/photos/6812510/pexels-photo-6812510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              name: "Legal Services",
              desc: "Legal questions are among the most common AI search queries. Get your firm cited for relevant legal topics.",
              href: "/industries/law-firm-marketing",
              image: "https://images.pexels.com/photos/7876093/pexels-photo-7876093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              name: "Home Services",
              desc: "Homeowners ask AI which service provider to use. AEO and GEO put you in those answers before the call.",
              href: "/industries/home-services-marketing",
              image: "https://images.pexels.com/photos/6476577/pexels-photo-6476577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              name: "Dental",
              desc: "Dental questions — from procedures to costs — are prime AEO territory. Own the answers in your area.",
              href: "/industries/dental",
              image: "https://images.pexels.com/photos/6812434/pexels-photo-6812434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              name: "Professional Services",
              desc: "Accountants, consultants, and agencies benefit from GEO as prospects research solutions via AI chat.",
              href: "/industries/professional-services-marketing",
              image: "https://images.pexels.com/photos/8068691/pexels-photo-8068691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              name: "Local Businesses",
              desc: "Houston and Texas businesses gain early-mover advantage by claiming AI answers in local high-intent categories.",
              href: "/industries",
              image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
            },
          ].map((industry, idx) => (
            <ClipRow key={industry.name} index={idx} className="list-none border-t border-[rgba(124,58,237,0.15)] last:border-b">
              <Link
                href={industry.href}
                className="group flex items-center gap-6 md:gap-10 py-6 md:py-8"
              >
                {/* Thumbnail */}
                <div
                  className="flex-shrink-0 w-20 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24 rounded-xl md:rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105"
                  style={{ boxShadow: "0 12px 32px rgba(91,63,163,0.25)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <img
                    src={industry.image}
                    alt={`${industry.name} marketing — AEO and GEO visibility for this industry`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
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
                      {industry.name}
                    </h3>
                    <span
                      className="hidden md:flex flex-shrink-0 items-center gap-2 text-sm font-medium opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                    >
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                  <p
                    className="mt-1 max-w-xl text-sm leading-relaxed"
                    style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                  >
                    {industry.desc}
                  </p>
                </div>
              </Link>
            </ClipRow>
          ))}
        </ul>
      </Section>

      {/* ── LOCAL RELEVANCE / TRUST INDICATORS ── */}
      <Section background="gradient" spacing="lg" withDivider className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-1/3 right-[8%] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left: copy + contact card */}
          <Reveal variant="left">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
              Serving Houston &amp; Beyond
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Local &amp; National AEO/GEO Services
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Houston and Sugar Land businesses competing in high-intent local search categories —
              including healthcare, legal, home services, and professional services — stand to gain
              early-mover advantage by optimizing for AI-generated answers. Echo5 Digital's AEO and
              GEO services help Texas-based businesses appear in the AI answer results that are
              increasingly replacing traditional blue-link search results.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              We also serve clients nationally across the United States — our methodology works for
              any market, any industry.
            </p>

            <div
              className="rounded-2xl p-4 sm:p-5 space-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {[
                { icon: Phone, label: "Call us", value: "713-489-7004", href: "tel:7134897004" },
                { icon: Mail, label: "Email us", value: "hello@echo5digital.com", href: "mailto:hello@echo5digital.com" },
                { icon: MapPin, label: "Where we work", value: "Houston / Sugar Land, TX — National U.S. Coverage", href: undefined },
              ].map((item, i, arr) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 sm:gap-4 py-3 rounded-xl transition-colors duration-200 hover:bg-[rgba(139,92,246,0.1)] -mx-2 px-2"
                  style={{
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(124,58,237,0.15)" : "none",
                    cursor: item.href ? "pointer" : "default",
                  }}
                >
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.35)",
                    }}
                  >
                    <item.icon size={18} style={{ color: "#A855F7" }} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[11px] font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "rgba(168,85,247,0.8)", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-medium break-words"
                      style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right: stat grid + coverage banner */}
          <Reveal variant="right" delay={0.1} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
              {[
                { icon: MapPin, value: "Houston, TX", label: "Primary Service Area" },
                { icon: MapPin, value: "Sugar Land, TX", label: "Local Coverage" },
                { icon: Globe, value: "National", label: "U.S. Clients Served" },
                { icon: Zap, value: "AI-First", label: "Optimization Approach" },
              ].map((item, idx) => (
                <ClipRow
                  key={item.label}
                  index={idx}
                  className="list-none relative rounded-2xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 border border-purple-500/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50"
                  style={{ background: "rgba(124,58,237,0.08)" }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}
                  >
                    <item.icon size={16} className="sm:hidden" style={{ color: "#A855F7" }} />
                    <item.icon size={18} className="hidden sm:block" style={{ color: "#A855F7" }} />
                  </div>
                  <div>
                    <span
                      className="block text-base sm:text-xl font-bold"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.value}
                    </span>
                    <span className="text-xs sm:text-sm" style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}>
                      {item.label}
                    </span>
                  </div>
                </ClipRow>
              ))}
            </div>

            {/* Coverage banner */}
            <div
              className="relative rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.16), rgba(168,85,247,0.08))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 w-28 h-28 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)" }}
              />
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <TrendingUp size={20} className="sm:hidden" color="#fff" />
                <TrendingUp size={22} className="hidden sm:block" color="#fff" />
              </div>
              <p className="relative z-10 text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.85)", fontFamily: "Inter, sans-serif" }}>
                <strong style={{ color: "#E5E7EB" }}>Same methodology, any market</strong> — from
                Houston storefronts to nationwide service brands, our AEO/GEO playbook scales with you.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq" background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
            Common Questions
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            FAQ — AEO &amp; GEO Services
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: openFaq === idx ? "rgba(168,85,247,0.4)" : "rgba(124,58,237,0.2)",
                background: openFaq === idx ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0" style={{ color: "#A855F7" }}>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-6"
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section id="cta-audit" background="transparent" spacing="lg" withDivider className="!bg-[#EEECFB]">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]" style={{ color: "#6B4EF0" }}>
            Get Started
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            Get a Free AEO/GEO Audit
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-4"
            style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
          >
            Find out where your business is missing from AI-generated answers — and how Echo5
            Digital can get you there. Request your free AI visibility audit today.
          </p>
        </div>

        <ContactForm
          heading="Request Your Free AI Visibility Audit"
          subheading="Tell us about your business and we'll show you exactly where you're invisible to AI answer engines — and how to fix it."
          submitLabel="Request Free Audit"
          showAppointmentNote={true}
        />
      </Section>
    </>
  );
}