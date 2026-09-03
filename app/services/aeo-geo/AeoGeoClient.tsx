"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
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
  Building2,
  Stethoscope,
  Scale,
  Home,
  Wrench,
  Briefcase,
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
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="AI-powered answer engine optimization visualization"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.85) 0%, rgba(17,13,46,0.75) 50%, rgba(10,15,30,0.9) 100%)",
            }}
          />
        </div>

        {/* Glow orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Bot size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold tracking-wide font-[Inter]">
              AI Visibility Specialists
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Get Cited by{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Answer Engines
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital is a specialist{" "}
            <strong style={{ color: "#A855F7" }}>AEO &amp; GEO agency</strong> helping businesses
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 text-base border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Learn More
              <ChevronDown size={18} />
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "AI-First", label: "Strategy" },
              { value: "3 Platforms", label: "SGE, ChatGPT, Bing" },
              { value: "National", label: "U.S. Coverage" },
              { value: "Houston, TX", label: "Primary HQ" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-xl border border-purple-500/20"
                style={{ background: "rgba(124,58,237,0.08)" }}
              >
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-xs mt-1" style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8 border border-purple-500/30 relative overflow-hidden"
          style={{ background: "rgba(124,58,237,0.07)" }}
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
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer — What Is AEO &amp; GEO?
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
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
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
              The Shift Is Happening Now
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Why AEO &amp; GEO Matter in 2024 &amp; Beyond
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
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
                    style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <item.icon size={16} style={{ color: "#A855F7" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5833758/pexels-photo-5833758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Analyzing AI search trends and answer engine optimization strategy"
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
              style={{ background: "rgba(10,15,30,0.85)", border: "1px solid rgba(124,58,237,0.3)", backdropFilter: "blur(12px)" }}
            >
              <p className="text-sm font-semibold text-purple-300 mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                The Early-Mover Advantage
              </p>
              <p className="text-xs" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
                Brands that optimize for AI answer engines now will dominate their categories as AI
                search becomes the default.
              </p>
            </div>
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
      <Section background="default" spacing="lg" withDivider>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
              Deliverables
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              AEO &amp; GEO Service Features
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Every AEO and GEO engagement includes a comprehensive set of deliverables designed to
              maximize your AI answer visibility across platforms.
            </p>
            <ul className="space-y-3">
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
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                  <span className="text-sm" style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Creating AI-optimized structured content for answer engines"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,15,30,0.85) 100%)" }}
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
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How It Works — AEO/GEO Process
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #7C3AED, #A855F7, #7C3AED, transparent)" }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={step.step} className="relative flex flex-col items-center text-center gap-4">
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.4)",
                    boxShadow: "0 0 24px rgba(124,58,237,0.3)",
                  }}
                >
                  <step.icon size={28} style={{ color: "#A855F7" }} />
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
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
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
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
            Industries We Serve
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Industries That Benefit Most from AEO &amp; GEO
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Businesses in high-intent, question-driven industries see the greatest AI answer
            visibility gains.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Stethoscope,
              name: "Healthcare",
              desc: "Patients ask AI for symptoms, treatments, and providers. AEO positions your practice in these high-stakes answers.",
              href: "/industries/healthcare",
            },
            {
              icon: Scale,
              name: "Legal Services",
              desc: "Legal questions are among the most common AI search queries. Get your firm cited for relevant legal topics.",
              href: "/industries/legal",
            },
            {
              icon: Home,
              name: "Home Services",
              desc: "Homeowners ask AI which service provider to use. AEO and GEO put you in those answers before the call.",
              href: "/industries/home-services",
            },
            {
              icon: Stethoscope,
              name: "Dental",
              desc: "Dental questions — from procedures to costs — are prime AEO territory. Own the answers in your area.",
              href: "/industries/dental",
            },
            {
              icon: Briefcase,
              name: "Professional Services",
              desc: "Accountants, consultants, and agencies benefit from GEO as prospects research solutions via AI chat.",
              href: "/industries/professional-services",
            },
            {
              icon: Building2,
              name: "Local Businesses",
              desc: "Houston and Texas businesses gain early-mover advantage by claiming AI answers in local high-intent categories.",
              href: "/industries",
            },
          ].map((industry) => (
            <Link key={industry.name} href={industry.href} className="group block">
              <div
                className="h-full rounded-2xl p-6 border border-purple-500/20 flex flex-col gap-4 transition-all duration-300 group-hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.45)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(124,58,237,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(168,85,247,0.3)" }}
                >
                  <industry.icon size={22} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {industry.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                    {industry.desc}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-purple-400 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE / TRUST INDICATORS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
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

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <Phone size={18} style={{ color: "#A855F7" }} />
                </div>
                {/* placeholder: verified business phone */}
                <a
                  href="tel:7134897004"
                  className="text-base font-medium hover:text-purple-400 transition-colors"
                  style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                >
                  713-489-7004
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <Mail size={18} style={{ color: "#A855F7" }} />
                </div>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-base font-medium hover:text-purple-400 transition-colors"
                  style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                >
                  hello@echo5digital.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <MapPin size={18} style={{ color: "#A855F7" }} />
                </div>
                <address
                  className="text-base not-italic"
                  style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                >
                  Houston / Sugar Land, Texas — National U.S. Coverage
                </address>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "Houston, TX", label: "Primary Service Area" },
              { value: "Sugar Land, TX", label: "Local Coverage" },
              { value: "National", label: "U.S. Clients Served" },
              { value: "AI-First", label: "Optimization Approach" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 flex flex-col gap-2 border border-purple-500/20"
                style={{ background: "rgba(124,58,237,0.08)" }}
              >
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.value}
                </span>
                <span className="text-sm" style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
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
      <Section id="cta-audit" background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 font-[Inter]">
            Get Started
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Get a Free AEO/GEO Audit
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-4"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
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