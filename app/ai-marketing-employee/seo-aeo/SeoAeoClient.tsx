"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Search,
  Bot,
  Globe,
  FileCode,
  MapPin,
  BarChart3,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Zap,
  Star,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Brain,
  Eye,
  RefreshCw,
  Target,
  Layers,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function SeoAeoClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Zap size={14} className="text-purple-400" />
            <span
              className="text-sm font-semibold text-purple-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee — SEO + AEO Tier
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Rank on Google.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get Cited by AI.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
          >
            Echo5 Digital's AI Marketing Employee handles your SEO <em>and</em> Answer Engine
            Optimization — continuously, automatically, and supervised by our human team. Built
            for businesses that want to be found everywhere search happens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Start the SEO+AEO Tier
              <ArrowRight size={18} />
            </a>
            <a
              href="#what-is-aeo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 text-base transition-all duration-200 hover:bg-purple-500/10"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn How It Works
            </a>
          </div>

          {/* Hero image */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered SEO and AEO dashboard showing organic ranking improvements and AI answer engine citation tracking"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))",
            borderColor: "rgba(124,58,237,0.35)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Brain size={20} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3 text-purple-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer — What Is This Tier?
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
              >
                The <strong>SEO+AEO tier</strong> of Echo5 Digital's AI Marketing Employee is a
                done-for-you service that handles traditional search engine optimization alongside{" "}
                <strong>Answer Engine Optimization (AEO)</strong> and{" "}
                <strong>Generative Engine Optimization (GEO)</strong>. It continuously manages
                on-page SEO, technical SEO, local SEO, schema markup, and AEO content structuring
                using agentic AI systems supervised by Echo5's human team. It is designed for small
                and mid-sized businesses seeking visibility on both Google and AI-powered answer
                engines.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHAT IS AEO AND WHY IT MATTERS ── */}
      <Section id="what-is-aeo" background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            AEO & GEO Education
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What Is AEO — and Why Does It Matter?
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
          >
            Search is evolving fast. Ranking on Google is no longer enough — your business needs
            to be the source AI answer engines trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Search,
              title: "Traditional SEO",
              desc: "Ranking in the blue-link results on Google, Bing, and other conventional search engines through on-page optimization, backlinks, and technical performance.",
            },
            {
              icon: Bot,
              title: "AEO — Answer Engine Optimization",
              desc: "Structuring your content so AI-powered answer engines like Google's AI Overviews, ChatGPT, and Perplexity cite your business as the authoritative source.",
            },
            {
              icon: Globe,
              title: "GEO — Generative Engine Optimization",
              desc: "Ensuring large language models and generative AI tools include your brand in generated responses — a frontier beyond traditional search rankings.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-6 border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={22} className="text-purple-400" />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderColor: "rgba(124,58,237,0.2)",
          }}
        >
          <h3
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Both Matter Together
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "AI Overviews now appear above organic results on millions of queries, capturing clicks before users ever reach your website.",
              "ChatGPT, Perplexity, and Gemini are answering commercial questions — and citing specific sources. Those sources are winning customers.",
              "Schema markup and structured content are the bridge between traditional SEO and AI citability — Echo5 builds both.",
              "Businesses that optimize for both SEO and AEO today will dominate search in the AI-first era. Those that don't will lose ground fast.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── WHAT'S INCLUDED ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Deliverables
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What's Included in the SEO+AEO Tier
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
          >
            A comprehensive, continuously managed package — not a one-time audit, but an always-on
            AI-powered marketing employee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FileCode,
              title: "On-Page SEO",
              desc: "Title tags, meta descriptions, header hierarchy, internal linking, content optimization, and image alt text — continuously refined by AI.",
              badge: "Always On",
            },
            {
              icon: Shield,
              title: "Technical SEO",
              desc: "Site speed, Core Web Vitals, crawlability, sitemap management, canonical tags, and structured data — monitored and fixed automatically.",
              badge: "Automated",
            },
            {
              icon: MapPin,
              title: "Local SEO",
              desc: "Google Business Profile optimization, local citation building, NAP consistency, and geo-targeted content for your service area.",
              badge: "Houston & Beyond",
            },
            {
              icon: Target,
              title: "Keyword Research",
              desc: "AI-driven keyword gap analysis, opportunity scoring, and competitive monitoring — updated continuously as search trends evolve.",
              badge: "AI-Driven",
            },
            {
              icon: Brain,
              title: "AEO Content Structuring",
              desc: "Content rewritten and structured to be cited by AI answer engines — concise definitions, Q&A formats, and authoritative entity signals.",
              badge: "AEO Focused",
            },
            {
              icon: Layers,
              title: "Schema Markup",
              desc: "Comprehensive JSON-LD schema implementation including Organization, LocalBusiness, FAQPage, Service, and breadcrumb schemas.",
              badge: "Schema-Rich",
            },
          ].map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              badge={item.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── HOW THE AI DOES THE WORK ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              How It Works
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              How the AI Does the Work
            </h2>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
            >
              Echo5 Digital's agentic AI systems run continuously — monitoring, analyzing, and
              implementing optimizations around the clock. Human team members review, approve, and
              refine every significant change before it goes live.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Eye,
                  title: "Continuous Keyword Monitoring",
                  desc: "AI tracks your rankings daily, identifies drops, and flags new opportunities before competitors act on them.",
                },
                {
                  icon: BarChart3,
                  title: "Content Gap Analysis",
                  desc: "The system compares your content against top-ranking competitors and AEO-cited sources, then generates a prioritized improvement roadmap.",
                },
                {
                  icon: FileCode,
                  title: "Automated Schema Generation",
                  desc: "AI writes and deploys structured data markup across your site — keeping it current as Google updates its schema guidelines.",
                },
                {
                  icon: Brain,
                  title: "AEO Content Structuring",
                  desc: "Content is automatically analyzed and restructured with AI citability in mind — clear definitions, direct answers, and entity-rich language.",
                },
                {
                  icon: Users,
                  title: "Human Review at Every Stage",
                  desc: "Echo5's team reviews AI output, approves changes, and provides strategic guidance — combining AI speed with human judgment.",
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <step.icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-purple-500/20">
            <img
              src="https://images.pexels.com/photos/9035000/pexels-photo-9035000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital's agentic AI workflow showing automated SEO tasks with human review stages"
              className="w-full h-full object-cover"
              style={{ minHeight: "420px" }}
            />
          </div>
        </div>
      </Section>

      {/* ── SEO + AEO WORKFLOW DIAGRAM ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Process
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            SEO + AEO Workflow
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
          >
            From initial audit to ongoing optimization — here's how every client engagement runs.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.5) 20%, rgba(168,85,247,0.5) 50%, rgba(124,58,237,0.5) 80%, transparent)",
              top: "2.5rem",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                label: "Site Audit",
                sublabel: "AI + Human",
                desc: "Full technical, on-page, and AEO audit to establish your baseline.",
                icon: Search,
              },
              {
                step: "02",
                label: "Strategy Build",
                sublabel: "Human-Led",
                desc: "Keyword priorities, AEO target queries, and content roadmap set by Echo5 team.",
                icon: Target,
              },
              {
                step: "03",
                label: "AI Execution",
                sublabel: "AI-Driven",
                desc: "On-page edits, schema deployment, AEO content restructuring run automatically.",
                icon: Bot,
              },
              {
                step: "04",
                label: "Human Review",
                sublabel: "Human-Led",
                desc: "Echo5 team reviews and approves all AI-generated changes before publishing.",
                icon: Eye,
              },
              {
                step: "05",
                label: "Ongoing Loop",
                sublabel: "AI + Human",
                desc: "Continuous monitoring, monthly reporting, and iterative improvements forever.",
                icon: RefreshCw,
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 border"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                        : "rgba(124,58,237,0.15)",
                    borderColor:
                      i % 2 === 0 ? "transparent" : "rgba(124,58,237,0.4)",
                    boxShadow:
                      i % 2 === 0 ? "0 0 20px rgba(124,58,237,0.5)" : "none",
                  }}
                >
                  <step.icon size={22} color={i % 2 === 0 ? "#fff" : "#A855F7"} />
                </div>
                <span
                  className="text-xs font-bold mb-1 text-purple-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  STEP {step.step}
                </span>
                <h3
                  className="font-bold text-base mb-0.5"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {step.label}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full mb-2 border border-purple-500/30 bg-purple-500/10 text-purple-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {step.sublabel}
                </span>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LOCAL SEO CALLOUT ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(124,58,237,0.3)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className="p-8 sm:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  <MapPin size={20} color="#fff" />
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest text-purple-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Local SEO
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston &amp; Sugar Land, Texas
              </h2>

              <p
                className="text-base mb-6 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
              >
                For businesses in Houston and Sugar Land, Texas, the SEO+AEO tier includes
                dedicated local SEO capabilities that help you dominate searches in the Greater
                Houston area. Echo5 Digital's Houston-based team brings local market knowledge
                that AI alone can't replicate.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Google Business Profile optimization & posting",
                  "Local citation building & NAP consistency audits",
                  "Geo-targeted content for Houston & Sugar Land",
                  "Local keyword targeting (e.g., 'near me' queries)",
                  "Houston-area competitor analysis",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-purple-400 flex-shrink-0" />
                    <span
                      className="text-sm"
                      style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* NAP — real HTML text from verified facts */}
              <address
                className="not-italic text-sm space-y-1"
                style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
              >
                <p className="flex items-center gap-2">
                  <MapPin size={13} className="text-purple-400" />
                  Houston / Sugar Land, Texas
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-purple-400 text-xs">✆</span>
                  {/* Phone from verified facts */}
                  <a
                    href="tel:7134897004"
                    className="hover:text-white transition-colors"
                  >
                    713-489-7004
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-purple-400 text-xs">✉</span>
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@echo5digital.com
                  </a>
                </p>
              </address>
            </div>

            <div className="relative min-h-[280px] lg:min-h-0">
              <img
                src="https://images.pexels.com/photos/18441165/pexels-photo-18441165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Houston, Texas downtown skyline representing Echo5 Digital's local SEO service area"
                className="w-full h-full object-cover"
                style={{ minHeight: "280px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(15,22,41,0.7), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── RESULTS PREVIEW ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Representative Outcomes
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            The Kind of Results Clients Experience
          </h2>
          <p
            className="text-sm max-w-xl mx-auto text-yellow-400/80 border border-yellow-500/20 bg-yellow-500/5 rounded-full px-4 py-2 inline-block"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ⚠ Representative examples only — individual results vary based on industry, competition,
            and starting baseline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              metric: "+140%",
              label: "Organic Traffic Growth",
              context: "Local service business, Houston TX — 6-month timeframe",
              desc: "Combining technical SEO fixes with AEO-structured content drove a significant increase in non-branded organic search traffic.",
            },
            {
              icon: Bot,
              metric: "3x",
              label: "AI Answer Engine Citations",
              context: "Professional services firm — national reach",
              desc: "Schema markup and AEO-optimized FAQ content resulted in repeated citations across Google AI Overviews and Perplexity.",
            },
            {
              icon: MapPin,
              metric: "Top 3",
              label: "Local Map Pack Rankings",
              context: "Multi-location business, Greater Houston area",
              desc: "Google Business Profile optimization and local citation cleanup pushed listings into the top 3 for primary service keywords.",
            },
          ].map((result, i) => (
            <div
              key={i}
              className="rounded-xl p-6 border flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  <result.icon size={22} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {result.metric}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {result.label}
                  </p>
                </div>
              </div>
              <p
                className="text-xs font-medium text-purple-400 border border-purple-500/20 bg-purple-500/10 rounded-full px-3 py-1 w-fit"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {result.context}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
              >
                {result.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPARISON ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Comparison
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            SEO+AEO Tier vs. Hiring a Traditional SEO Agency
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
          >
            Why settle for monthly reports when you can have a 24/7 AI-powered marketing employee?
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(124,58,237,0.3)" }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3 text-sm font-bold uppercase tracking-wider px-6 py-4 border-b border-purple-500/20"
            style={{
              background: "rgba(124,58,237,0.12)",
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            <span>Feature</span>
            <span className="text-center text-purple-300">Echo5 SEO+AEO Tier</span>
            <span className="text-center text-gray-500">Traditional SEO Agency</span>
          </div>

          {[
            ["AEO & GEO Optimization", true, false],
            ["Continuous AI Monitoring", true, false],
            ["Schema Markup Automation", true, "Manual, Infrequent"],
            ["Local SEO Included", true, "Add-On Cost"],
            ["Human Strategy + Oversight", true, true],
            ["Monthly Reporting", true, true],
            ["Keyword Research Cadence", "Weekly AI", "Monthly Manual"],
            ["Contract Flexibility", "Flexible", "Annual Lock-In"],
          ].map(([feature, echo5, agency], i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-4 text-sm border-b border-purple-500/10 last:border-0"
              style={{
                background:
                  i % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(255,255,255,0.03)",
              }}
            >
              <span
                style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
              >
                {feature as string}
              </span>
              <span className="text-center">
                {echo5 === true ? (
                  <CheckCircle size={18} className="text-purple-400 mx-auto" />
                ) : (
                  <span
                    className="text-xs font-medium text-purple-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {echo5 as string}
                  </span>
                )}
              </span>
              <span className="text-center">
                {agency === true ? (
                  <CheckCircle size={18} className="text-gray-500 mx-auto" />
                ) : agency === false ? (
                  <span className="text-gray-600 text-lg">✕</span>
                ) : (
                  <span
                    className="text-xs"
                    style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                  >
                    {agency as string}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section id="faq" background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: openFaq === i ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)",
                background:
                  openFaq === i
                    ? "rgba(124,58,237,0.08)"
                    : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200"
                onClick={() => toggleFaq(i)}
                aria-expanded={openFaq === i}
              >
                <span
                  className="font-semibold text-base pr-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                {openFaq === i ? (
                  <ChevronUp size={18} className="text-purple-400 flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section id="lead-form" background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get Started
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Start the SEO+AEO Tier Today
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}
          >
            Tell us about your business and we'll map out an SEO and AEO strategy for your market.
            Book a strategy call or submit your details below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Clock size={16} />
              Book a Strategy Call
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-purple-300 text-sm transition-all duration-200 hover:bg-purple-500/10"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Star size={16} />
              View Pricing
            </Link>
          </div>
        </div>

        <ContactForm
          heading="Start Your SEO + AEO Journey"
          subheading="Tell us about your business, your current SEO situation, and where you want to rank. We'll build the plan."
          submitLabel="Get My SEO+AEO Strategy"
          showAppointmentNote={true}
        />
      </Section>
    </>
  );
}