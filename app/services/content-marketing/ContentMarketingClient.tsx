"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { DiagonalWipe, BlurIn, TiltCard } from "@/components/ScrollFX";
import { FocusPullHero, PrismReveal, LavenderField, MagnetPop } from "@/components/SolutionsFX";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Search,
  Bot,
  BarChart3,
  Calendar,
  Globe,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Brain,
  Users,
  MapPin,
  Target,
  PenTool,
  TrendingUp,
  Layout,
  Cpu,
  Shield,
  Clock,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function ContentMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeRelatedRow, setActiveRelatedRow] = useState<number | null>(null);
  const [hoveredWorkflowPanel, setHoveredWorkflowPanel] = useState<"ai" | "human" | null>(null);

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
    <main>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="/media-marketing-internet-digital-global-100kb.jpg"
        className="min-h-screen flex items-center pt-[72px]"
        overlay="linear-gradient(180deg, rgba(10,8,26,0.72) 0%, rgba(10,8,26,0.82) 55%, rgba(10,8,26,0.95) 100%)"
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
            <Sparkles size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI-Powered Content Marketing
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#E5E7EB" }}
          >
            <PrismReveal text="Content That" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Ranks, Converts, and Dominates Search" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital's AI-powered content marketing engine creates SEO-optimized blogs,
            AEO-structured copy, and authority-building content at scale — engineered to grow
            organic traffic for U.S. businesses.
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
              Get a Content Strategy
            </Link>
            <Link
              href="#services-breakdown"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore Services →
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

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="transparent" spacing="md" withDivider className="!bg-white">
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "#EEECFB",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-1"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Zap size={18} color="#fff" />
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
                What Is Content Marketing &amp; What Does Echo5 Digital Provide?
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
              >
                Content marketing is the strategic creation and distribution of valuable content —
                including blog posts, web copy, and structured articles — to attract, engage, and
                convert target audiences through organic search. Echo5 Digital provides AI-powered
                content marketing services for small and mid-sized businesses in Houston, Texas, and
                nationally across the U.S. The agency produces SEO-optimized and AEO-structured
                content designed to rank in both traditional search engines and AI answer engines.
                Content is created at scale using an agentic AI system with human editorial oversight
                to maintain quality and brand consistency.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: <Bot size={20} />, label: "Agentic AI Methodology" },
            { icon: <MapPin size={20} />, label: "Serving Houston & National U.S." },
            { icon: <CheckCircle2 size={20} />, label: "SEO + AEO Certified Strategy" },
            { icon: <Users size={20} />, label: "Human Editorial Oversight" },
            { icon: <BarChart3 size={20} />, label: "Data-Driven Content Performance" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <span style={{ color: "#A855F7" }}>{item.icon}</span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS CONTENT MARKETING ── */}
      <Section background="transparent" spacing="lg" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="a" />
        <div className="relative z-10">
          <DiagonalWipe className="max-w-2xl mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              The Foundation
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              What Is Content Marketing?
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Content marketing is the strategic practice of creating and publishing valuable,
              relevant content to attract and retain a clearly defined audience — and ultimately
              drive profitable customer action. Unlike paid ads, content marketing builds long-term
              organic authority that compounds over time. At Echo5 Digital, content marketing is the
              engine behind organic traffic growth. Every piece we produce is strategically designed
              to rank in traditional search engines, appear in AI answer engines (AEO), and drive
              real conversions for your business.
            </p>
          </DiagonalWipe>

          <div className="space-y-20 lg:space-y-28">
            {[
              {
                number: "01",
                label: "Sustained Organic Traffic",
                desc: "Content marketing drives sustained organic traffic without ongoing ad spend. Every article published becomes a compounding asset that keeps earning visibility long after it's live.",
                image: "https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                alt: "Content marketing strategy planning with SEO and organic traffic growth concepts",
              },
              {
                number: "02",
                label: "Domain Authority & Topical Relevance",
                desc: "A structured library of authoritative content builds domain authority and topical relevance, signaling to search engines that your site is a trustworthy resource in your industry.",
                image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                alt: "Echo5 Digital AI-powered content marketing platform showing analytics and content creation tools",
              },
              {
                number: "03",
                label: "SEO and AEO, Simultaneously",
                desc: "Every piece supports SEO and AEO rankings simultaneously — engineered to rank in traditional search results and to be surfaced directly inside AI answer engines.",
                image: "/search-find-view-information-data-graphic-symbol-icon-100kb.jpg",
                alt: "AI and human collaboration in content creation workflow",
              },
            ].map((item, i) => (
              <BlurIn key={item.number} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div style={{ direction: "ltr" }}>
                    <span
                      className="block text-6xl sm:text-7xl font-black mb-4"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.number}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ direction: "ltr" }}>
                    <TiltCard index={i}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full rounded-2xl object-cover"
                        style={{
                          height: "320px",
                          border: "1px solid rgba(124,58,237,0.15)",
                          boxShadow: "0 25px 60px -15px rgba(91,63,163,0.35)",
                        }}
                      />
                    </TiltCard>
                  </div>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICES BREAKDOWN ── */}
      <Section background="transparent" spacing="lg" id="services-breakdown" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="c" />
        <div className="relative z-10 text-center mb-16">
          <DiagonalWipe>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              What We Deliver
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Content Marketing Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              From long-form SEO articles to AEO-optimized landing pages, we build content ecosystems
              that grow your authority and revenue.
            </p>
          </DiagonalWipe>
        </div>

        {/* Horizontal scroll rail — drag or scroll sideways through each service */}
        <div className="relative z-10">
          {/* Edge fade hints, signaling more cards off-screen */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute left-0 top-0 bottom-6 w-16 pointer-events-none z-10"
            style={{ background: "linear-gradient(90deg, #fff 0%, transparent 100%)" }}
          />
          <div
            aria-hidden="true"
            className="hidden sm:block absolute right-0 top-0 bottom-6 w-16 pointer-events-none z-10"
            style={{ background: "linear-gradient(270deg, #fff 0%, transparent 100%)" }}
          />

          <div
            className="cm-rail flex gap-5 overflow-x-auto pb-6 px-4 sm:px-[max(1rem,calc((100vw-1280px)/2))]"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {[
              {
                icon: PenTool,
                title: "Blog Writing & SEO Articles",
                description:
                  "In-depth, research-backed blog posts optimized for target keywords. We produce authoritative content that ranks, builds trust, and drives qualified traffic to your site.",
                color: "#7C3AED",
              },
              {
                icon: Search,
                title: "SEO Content Strategy",
                description:
                  "Comprehensive keyword research, competitor gap analysis, and content roadmaps tailored to your industry. We map every piece of content to a clear traffic and conversion objective.",
                color: "#A855F7",
              },
              {
                icon: Brain,
                title: "AEO Content Optimization",
                description:
                  "Content structured with direct-answer blocks, FAQ schema, and question-targeting to appear in Google AI Overviews, ChatGPT responses, and other AI answer engines.",
                color: "#6366F1",
              },
              {
                icon: Layout,
                title: "Website Copy",
                description:
                  "Conversion-focused homepage, service page, and about page copy that communicates your value proposition clearly while supporting on-page SEO signals.",
                color: "#C026D3",
              },
              {
                icon: Target,
                title: "Landing Page Content",
                description:
                  "High-converting landing page copy designed around specific offers, campaigns, or services — with CTA placement, trust signals, and keyword optimization built in.",
                color: "#DB2777",
              },
              {
                icon: Calendar,
                title: "Content Calendars",
                description:
                  "Structured monthly or quarterly publishing plans that align content with your business goals, seasonal trends, and keyword opportunities for consistent authority growth.",
                color: "#4F46E5",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex-shrink-0 w-[260px] sm:w-[290px] rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{
                    scrollSnapAlign: "start",
                    background: "#fff",
                    border: "1px solid rgba(124,58,237,0.12)",
                    boxShadow: "0 15px 40px -20px rgba(91,63,163,0.25)",
                  }}
                >
                  {/* Colored icon panel */}
                  <div
                    className="relative h-32 flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}99)` }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px",
                      }}
                    />
                    <span
                      className="absolute top-3 left-4 text-xs font-bold"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
                    >
                      <Icon size={26} color="#fff" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      className="text-base font-bold mb-2 leading-snug"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll hint */}
          <p
            className="text-center text-xs mt-2 sm:hidden"
            style={{ color: "#9CA0B5", fontFamily: "Inter, sans-serif" }}
          >
            ← Swipe to explore →
          </p>
        </div>
        <style jsx>{`
          .cm-rail::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </Section>

      {/* ── AI CONTENT CREATION WORKFLOW ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Technology
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AI Content Creation Workflow
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Scale without sacrificing quality. Our agentic AI handles research and first drafts
            while our human editors ensure accuracy, brand voice, and editorial excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              key: "ai" as const,
              icon: Cpu,
              title: "What Our AI Does",
              items: [
                "Autonomously researches topics, analyzes SERP data, and identifies content gaps before a single word is written",
                "Generates structured, keyword-rich drafts at a volume no human team can match",
                "Optimizes drafts for both traditional SEO signals and AEO answer-engine formatting",
                "Formats content with metadata and schema markup ahead of publishing",
                "Surfaces ranking, traffic, and conversion data for monthly review",
                "Flags new keyword and content opportunities as they emerge",
              ],
              image: "/search-find-view-information-data-graphic-symbol-icon-100kb.jpg",
              imageAlt: "AI and human collaboration in content creation workflow",
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              iconGradient: "linear-gradient(135deg, #7C3AED, #A855F7)",
            },
            {
              key: "human" as const,
              icon: Users,
              title: "What Our Human Team Does",
              items: [
                "Reviews every draft for accuracy, refines brand voice, and adds authoritative insights",
                "Ensures content meets editorial quality standards before it ever goes live",
                "Leads strategy and keyword research, auditing existing content and competitor gaps",
                "Publishes content on a consistent schedule to signal freshness and authority",
                "Interprets rankings and traffic data into a clear monthly strategy review",
                "Serves as your dedicated point of contact for feedback and approvals",
              ],
              image: "https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              imageAlt: "Content marketing strategy planning with SEO and organic traffic growth concepts",
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.2)",
              iconGradient: "linear-gradient(135deg, #A855F7, #7C3AED)",
            },
          ].map((panel) => {
            const otherKey = panel.key === "ai" ? "human" : "ai";
            const isFlipped = hoveredWorkflowPanel === otherKey;
            const Icon = panel.icon;
            return (
              <div
                key={panel.key}
                onMouseEnter={() => setHoveredWorkflowPanel(panel.key)}
                onMouseLeave={() => setHoveredWorkflowPanel(null)}
                style={{ perspective: 1600 }}
              >
                <div
                  className="relative rounded-2xl transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transitionTimingFunction: "cubic-bezier(0.4, 0.1, 0.2, 1)",
                    minHeight: "480px",
                  }}
                >
                  {/* Front face — the text list */}
                  <div
                    className="absolute inset-0 rounded-2xl p-6 sm:p-8"
                    style={{
                      background: panel.background,
                      border: panel.border,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: panel.iconGradient }}
                      >
                        <Icon size={18} color="#fff" />
                      </div>
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                      >
                        {panel.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {panel.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                          <span
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Back face — image shown when the OTHER panel is hovered */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{
                      border: panel.border,
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={panel.image}
                      alt={panel.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, rgba(10,8,26,0.35) 0%, rgba(10,8,26,0.85) 100%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div
                        className="inline-flex w-10 h-10 rounded-lg items-center justify-center mb-3"
                        style={{ background: panel.iconGradient }}
                      >
                        <Icon size={18} color="#fff" />
                      </div>
                      <p
                        className="text-lg font-bold"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#fff" }}
                      >
                        {panel.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── SEO + AEO DUAL ENGINE ── */}
      <Section background="transparent" spacing="lg" withDivider className="!bg-white">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
          >
            Dual-Engine Visibility
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            Content Built for SEO and AEO
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
            We don't just write content — we engineer it to appear in both Google's traditional
            results and AI-powered answer engines like ChatGPT and Google AI Overviews.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Search size={28} />,
              platform: "Traditional SEO Content",
              color: "#1877F2",
              rationale:
                "Keyword-targeted titles, H1s, and meta descriptions; semantic keyword integration and LSI terms; internal linking architecture to distribute authority; schema markup (Article, FAQ, HowTo) for rich results; and E-E-A-T signals — expertise, experience, authority, and trust.",
            },
            {
              icon: <Bot size={28} />,
              platform: "AEO / GEO Optimization",
              color: "#E1306C",
              rationale:
                "Direct answer blocks structured for AI engine surfacing; question-and-answer content format for featured snippets; FAQPage and Speakable schema markup; concise, citation-ready responses for ChatGPT and Perplexity; and geo-targeted content for local AI answer visibility.",
            },
          ].map((item, i) => (
            <TiltCard key={item.platform} index={i}>
              <div
                className="group rounded-2xl p-6 sm:p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#EEECFB",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 45px -18px ${item.color}70`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}55`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.15)";
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}40` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  {item.platform}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                  {item.rationale}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How Content Marketing Works at Echo5 Digital
          </h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 15%, rgba(168,85,247,0.4) 85%, transparent)",
              top: "2.5rem",
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                icon: <Search size={20} />,
                title: "Strategy & Keyword Research",
                description:
                  "We audit your existing content, research competitor gaps, and identify high-value keywords aligned to your business goals and target audience.",
              },
              {
                step: "02",
                icon: <PenTool size={20} />,
                title: "Content Creation",
                description:
                  "Our agentic AI generates structured drafts while human editors craft authoritative, brand-aligned content that resonates with your audience and search algorithms.",
              },
              {
                step: "03",
                icon: <TrendingUp size={20} />,
                title: "SEO & AEO Optimization",
                description:
                  "Every piece is optimized with target keywords, schema markup, direct-answer blocks, and internal links — engineered to rank and appear in AI answer results.",
              },
              {
                step: "04",
                icon: <Globe size={20} />,
                title: "Publishing & Distribution",
                description:
                  "Content is published on a consistent schedule with proper metadata, optimized URLs, and social distribution to maximize reach and indexation speed.",
              },
              {
                step: "05",
                icon: <BarChart3 size={20} />,
                title: "Performance Review & Iteration",
                description:
                  "We monitor rankings, traffic, and conversions monthly — using data to refine strategy, update existing content, and identify new opportunities.",
              },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center gap-4">
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.35)",
                  }}
                >
                  <span style={{ color: "#A855F7" }}>{step.icon}</span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.68)", fontFamily: "Inter, sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INDUSTRY POSITIONING ── */}
      <Section background="transparent" spacing="lg" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="b" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <BlurIn>
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)" }}
              />
              <TiltCard index={0}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    border: "6px solid #fff",
                    boxShadow: "0 25px 60px -15px rgba(91,63,163,0.4)",
                    transform: "rotate(-2deg)",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Content marketing strategy planning with SEO and organic traffic growth concepts"
                    className="w-full object-cover"
                    style={{ height: "380px" }}
                  />
                </div>
              </TiltCard>

              {/* Floating "industries" chip */}
              <MagnetPop index={1} className="absolute -bottom-5 -right-4 sm:-right-8">
                <div
                  className="rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #F3F0FD)",
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
                    <Layers size={17} color="#fff" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}>
                      12+ Industries
                    </p>
                    <p className="text-xs" style={{ color: "#6B4EF0" }}>Specialized content for each</p>
                  </div>
                </div>
              </MagnetPop>
            </div>
          </BlurIn>

          <DiagonalWipe>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Industry Expertise
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Industries We{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Create Content For
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              We produce specialized content for a wide range of industries, with deep understanding
              of each sector's audience, search intent, and competitive landscape.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "Dental & Healthcare", href: "/industries/healthcare" },
                { label: "Home Services", href: "/industries/home-services" },
                { label: "Roofing & Construction", href: "/industries/construction" },
                { label: "Fitness & Wellness", href: "/industries/fitness" },
                { label: "Aesthetics & MedSpa", href: "/industries/aesthetics" },
                { label: "Real Estate", href: "/industries/real-estate" },
                { label: "Law Firms", href: "/industries/legal" },
                { label: "Automotive", href: "/industries/automotive" },
                { label: "E-Commerce", href: "/industries/ecommerce" },
                { label: "Restaurants & Food", href: "/industries" },
                { label: "Financial Services", href: "/industries" },
                { label: "Education", href: "/industries" },
              ].map((industry) => (
                <Link
                  key={industry.label}
                  href={industry.href}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:brightness-95"
                  style={{
                    background: "#EEECFB",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#6B4EF0",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </DiagonalWipe>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="transparent" spacing="md" withDivider className="!bg-white">
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{
            background: "#EEECFB",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <MapPin size={22} color="#fff" />
            </div>
          </div>
          <div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Serving Houston &amp; Sugar Land, Texas
            </h2>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital serves businesses in Houston and Sugar Land, Texas with locally relevant
              content strategies that target geo-specific keywords and support local SEO objectives.
              For Houston-area businesses looking to build online authority and attract local customers
              through content, our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Verified phone from business facts */}
              <a
                href="tel:7134897004"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
              >
                <span>📞</span>
                <span>713-489-7004</span>
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
              >
                <span>✉️</span>
                <span>hello@echo5digital.com</span>
              </a>
            </div>
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
            Complete Your Digital Strategy
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
          >
            Related Services
          </h2>
          <p className="mt-3 max-w-xl text-base" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
            Content marketing works best as part of an integrated digital strategy. Explore our
            complementary services.
          </p>
        </div>

        <div className="relative z-10">
          {[
            {
              href: "/services/seo",
              title: "SEO & AEO",
              desc: "Rank in traditional search and AI answer engines with a full-spectrum SEO and AEO strategy.",
              image: "/SEO.png",
            },
            {
              href: "/services/social-media-marketing",
              title: "Social Media Marketing",
              desc: "Amplify your content's reach with strategic social media distribution and community building.",
              image: "/Social Media.png",
            },
            {
              href: "/services/web-design",
              title: "Web Design",
              desc: "Give your content the high-converting, SEO-friendly home it deserves with a custom website.",
              image: "/dash.jpg",
            },
            {
              href: "/ai-marketing-employee",
              title: "AI Marketing Employee",
              desc: "Deploy a full-time AI marketing employee that creates, publishes, and optimizes content autonomously.",
              image: "/airobo.png",
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

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" withDivider id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Common Questions
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-4 text-base"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Everything you need to know about our content marketing services.
            </p>
          </div>

          <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  border: "1px solid rgba(124,58,237,0.22)",
                  background: openFaq === i ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.02)",
                  transition: "background 0.2s ease",
                }}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    itemProp="name"
                  >
                    {item.question}
                  </span>
                  <span style={{ color: "#A855F7", flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-hidden={openFaq !== i}
                  style={{
                    maxHeight: openFaq === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="px-5 pb-5 pt-1 text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.78)", fontFamily: "Inter, sans-serif" }}
                    itemProp="text"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LEAD FORM CTA ── */}
      <Section
        id="lead-form"
        background="transparent"
        spacing="xl"
        maxWidth="3xl"
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
              Start Growing Today
            </p>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Ready to Grow With
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-Powered Content?
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Book a free content strategy consultation and discover how Echo5 Digital can build
              a content engine that grows your organic traffic and authority.
            </p>
            <div className="space-y-2 text-sm">
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>Or reach us directly:</p>
              <a href="tel:7134897004" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
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
              heading="Book a Content Strategy Call"
              subheading="Tell us about your business and content goals. We'll get back to you within 24 hours."
              submitLabel="Request My Content Strategy"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
