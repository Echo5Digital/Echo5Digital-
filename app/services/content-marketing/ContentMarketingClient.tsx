"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
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
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Users,
  MapPin,
  Phone,
  Mail,
  Target,
  PenTool,
  TrendingUp,
  BookOpen,
  Layout,
  Cpu,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

function FAQAccordion({ faqData }: { faqData: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqData.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "0.75rem",
            background: openIndex === i
              ? "rgba(124,58,237,0.08)"
              : "rgba(255,255,255,0.03)",
            transition: "background 0.2s ease",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span
              className="text-base font-semibold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              {item.question}
            </span>
            <span className="shrink-0" style={{ color: "#A855F7" }}>
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          {openIndex === i && (
            <div
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{ color: "rgba(229,231,235,0.72)", fontFamily: "Inter, sans-serif" }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ContentMarketingClient({ faqData }: Props) {
  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)" }}
        />
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Sparkles size={15} />
            AI-Powered Content Marketing
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Content That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ranks, Converts,
            </span>{" "}
            and Dominates Search
          </h1>

          <p
            className="text-lg sm:text-xl max-w-3xl leading-relaxed"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital's AI-powered content marketing engine creates SEO-optimized blogs,
            AEO-structured copy, and authority-building content at scale — engineered to grow
            organic traffic for U.S. businesses.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#lead-form"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get a Content Strategy
            </a>
            <a
              href="#services-breakdown"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
              style={{
                border: "2px solid rgba(124,58,237,0.6)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore Services
            </a>
          </div>

          {/* Hero image */}
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden mt-4"
            style={{ border: "1px solid rgba(124,58,237,0.3)", boxShadow: "0 0 60px rgba(124,58,237,0.2)" }}
          >
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital AI-powered content marketing platform showing analytics and content creation tools"
              className="w-full object-cover"
              style={{ height: "340px" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)" }}
            />
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Quick Answer
            </span>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(229,231,235,0.85)", fontFamily: "Inter, sans-serif" }}
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
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm" maxWidth="2xl" withDivider>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { icon: <Bot size={18} />, label: "Agentic AI Methodology" },
            { icon: <MapPin size={18} />, label: "Serving Houston & National U.S." },
            { icon: <CheckCircle size={18} />, label: "SEO + AEO Certified Strategy" },
            { icon: <Users size={18} />, label: "Human Editorial Oversight" },
            { icon: <BarChart3 size={18} />, label: "Data-Driven Content Performance" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: "#A855F7" }}>{item.icon}</span>
              <span
                className="text-sm font-medium"
                style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS CONTENT MARKETING ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              The Foundation
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              What Is Content Marketing?
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Content marketing is the strategic practice of creating and publishing valuable,
              relevant content to attract and retain a clearly defined audience — and ultimately
              drive profitable customer action. Unlike paid ads, content marketing builds long-term
              organic authority that compounds over time.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              At Echo5 Digital, content marketing is the engine behind organic traffic growth.
              Every piece we produce is strategically designed to rank in traditional search engines,
              appear in AI answer engines (AEO), and drive real conversions for your business.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Drives sustained organic traffic without ongoing ad spend",
                "Builds domain authority and topical relevance",
                "Supports SEO and AEO rankings simultaneously",
                "Converts readers into leads and customers",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: "#A855F7" }} />
                  <span className="text-sm" style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(124,58,237,0.3)" }}
          >
            <img
              src="https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Content marketing strategy planning with SEO and organic traffic growth concepts"
              className="w-full object-cover"
              style={{ height: "380px" }}
            />
          </div>
        </div>
      </Section>

      {/* ── CONTENT MARKETING SERVICES BREAKDOWN ── */}
      <Section id="services-breakdown" background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            What We Deliver
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Content Marketing Services
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            From long-form SEO articles to AEO-optimized landing pages, we build content ecosystems
            that grow your authority and revenue.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: PenTool,
              title: "Blog Writing & SEO Articles",
              description:
                "In-depth, research-backed blog posts optimized for target keywords. We produce authoritative content that ranks, builds trust, and drives qualified traffic to your site.",
              badge: "Core Service",
            },
            {
              icon: Search,
              title: "SEO Content Strategy",
              description:
                "Comprehensive keyword research, competitor gap analysis, and content roadmaps tailored to your industry. We map every piece of content to a clear traffic and conversion objective.",
              badge: "Strategy",
            },
            {
              icon: Brain,
              title: "AEO Content Optimization",
              description:
                "Content structured with direct-answer blocks, FAQ schema, and question-targeting to appear in Google AI Overviews, ChatGPT responses, and other AI answer engines.",
              badge: "AEO / GEO",
            },
            {
              icon: Layout,
              title: "Website Copy",
              description:
                "Conversion-focused homepage, service page, and about page copy that communicates your value proposition clearly while supporting on-page SEO signals.",
              badge: "Copywriting",
            },
            {
              icon: Target,
              title: "Landing Page Content",
              description:
                "High-converting landing page copy designed around specific offers, campaigns, or services — with CTA placement, trust signals, and keyword optimization built in.",
              badge: "Conversion",
            },
            {
              icon: Calendar,
              title: "Content Calendars",
              description:
                "Structured monthly or quarterly publishing plans that align content with your business goals, seasonal trends, and keyword opportunities for consistent authority growth.",
              badge: "Planning",
            },
          ].map((service, i) => (
            <Card
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI CONTENT CREATION WORKFLOW ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Technology
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AI Content Creation Workflow
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Scale without sacrificing quality. Our agentic AI handles research and first drafts
            while our human editors ensure accuracy, brand voice, and editorial excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(124,58,237,0.3)" }}
          >
            <img
              src="https://images.pexels.com/photos/8439099/pexels-photo-8439099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI and human collaboration in content creation workflow"
              className="w-full object-cover"
              style={{ height: "360px" }}
            />
          </div>
          <div className="flex flex-col gap-6">
            {[
              {
                icon: <Cpu size={20} />,
                title: "Agentic AI Research",
                desc: "Our AI agents autonomously research topics, analyze SERP data, and identify content gaps — building a strategic foundation before a single word is written.",
              },
              {
                icon: <FileText size={20} />,
                title: "AI-Generated Drafts at Scale",
                desc: "The AI generates structured, keyword-rich drafts optimized for both traditional SEO signals and AEO answer-engine formatting — at a volume no human team can match.",
              },
              {
                icon: <Users size={20} />,
                title: "Human Editorial Review",
                desc: "Every draft passes through our experienced editorial team who verify accuracy, refine brand voice, add authoritative insights, and ensure content meets quality standards.",
              },
              {
                icon: <Calendar size={20} />,
                title: "Scheduled Publishing",
                desc: "Content is formatted, optimized with metadata and schema markup, and published on a consistent schedule to signal freshness and authority to search engines.",
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                    color: "#A855F7",
                  }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-base mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTENT FOR SEO AND AEO ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Dual-Engine Visibility
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Content Built for SEO and AEO
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            We don't just write content — we engineer it to appear in both Google's traditional
            results and AI-powered answer engines like ChatGPT and Google AI Overviews.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <Search size={18} color="#fff" />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Traditional SEO Content
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Keyword-targeted titles, H1s, and meta descriptions",
                "Semantic keyword integration and LSI terms",
                "Internal linking architecture to distribute authority",
                "Schema markup (Article, FAQ, HowTo) for rich results",
                "E-E-A-T signals: expertise, experience, authority, trust",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#7C3AED" }} />
                  <span className="text-sm" style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #A855F7, #7C3AED)" }}
              >
                <Bot size={18} color="#fff" />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                AEO / GEO Optimization
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Direct answer blocks structured for AI engine surfacing",
                "Question-and-answer content format for featured snippets",
                "FAQPage and Speakable schema markup",
                "Concise, citation-ready responses for ChatGPT and Perplexity",
                "Geo-targeted content for local AI answer visibility",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#A855F7" }} />
                  <span className="text-sm" style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How Content Marketing Works at Echo5 Digital
          </h2>
        </div>
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-6 top-8 bottom-8 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #7C3AED, #A855F7)" }}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Keyword Research",
                desc: "We audit your existing content, research competitor gaps, and identify high-value keywords aligned to your business goals and target audience.",
                icon: <Search size={20} />,
              },
              {
                step: "02",
                title: "Content Creation",
                desc: "Our agentic AI generates structured drafts while human editors craft authoritative, brand-aligned content that resonates with your audience and search algorithms.",
                icon: <PenTool size={20} />,
              },
              {
                step: "03",
                title: "SEO & AEO Optimization",
                desc: "Every piece is optimized with target keywords, schema markup, direct-answer blocks, and internal links — engineered to rank and appear in AI answer results.",
                icon: <TrendingUp size={20} />,
              },
              {
                step: "04",
                title: "Publishing & Distribution",
                desc: "Content is published on a consistent schedule with proper metadata, optimized URLs, and social distribution to maximize reach and indexation speed.",
                icon: <Globe size={20} />,
              },
              {
                step: "05",
                title: "Performance Review & Iteration",
                desc: "We monitor rankings, traffic, and conversions monthly — using data to refine strategy, update existing content, and identify new opportunities.",
                icon: <BarChart3 size={20} />,
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6 md:pl-0">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                    color: "#fff",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  className="flex-1 rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Step {step.step}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES SERVED ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Industry Expertise
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Industries We Create Content For
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            We produce specialized content for a wide range of industries, with deep understanding
            of each sector's audience, search intent, and competitive landscape.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
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
          ].map((industry, i) => (
            <Link
              key={i}
              href={industry.href}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:brightness-110"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {industry.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* ── INTERNAL LINKS TO RELATED SERVICES ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Complete Your Digital Strategy
          </span>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Related Services
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Content marketing works best as part of an integrated digital strategy. Explore our
            complementary services.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Search size={22} />,
              title: "SEO & AEO",
              desc: "Rank in traditional search and AI answer engines with a full-spectrum SEO and AEO strategy.",
              href: "/services/seo",
            },
            {
              icon: <Globe size={22} />,
              title: "Social Media Marketing",
              desc: "Amplify your content's reach with strategic social media distribution and community building.",
              href: "/services/social-media-marketing",
            },
            {
              icon: <Layers size={22} />,
              title: "Web Design",
              desc: "Give your content the high-converting, SEO-friendly home it deserves with a custom website.",
              href: "/services/web-design",
            },
            {
              icon: <Bot size={22} />,
              title: "AI Marketing Employee",
              desc: "Deploy a full-time AI marketing employee that creates, publishes, and optimizes content autonomously.",
              href: "/ai-marketing-employee",
            },
          ].map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.25)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#A855F7",
                }}
              >
                {service.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-base mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {service.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 mt-auto" style={{ color: "#A855F7" }}>
                <span className="text-xs font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                  Learn more
                </span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" maxWidth="lg" withDivider>
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Common Questions
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Everything you need to know about our content marketing services.
          </p>
        </div>
        <FAQAccordion faqData={faqData} />
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={22} style={{ color: "#A855F7" }} />
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston & Sugar Land, Texas
              </h2>
            </div>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital serves businesses in Houston and Sugar Land, Texas with locally relevant
              content strategies that target geo-specific keywords and support local SEO objectives.
              For Houston-area businesses looking to build online authority and attract local customers
              through content, our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:713-489-7004"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={16} />
                {/* Verified business phone */}
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={16} />
                {/* Verified business email */}
                hello@echo5digital.com
              </a>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get Local Content Strategy
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>

      {/* ── LEAD FORM CTA ── */}
      <Section id="lead-form" background="gradient" spacing="xl" maxWidth="lg" withDivider>
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Start Growing Today
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Ready to Grow With AI-Powered Content?
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Book a free content strategy consultation and discover how Echo5 Digital can build
            a content engine that grows your organic traffic and authority.
          </p>
        </div>
        {/* Hidden UTM field hint (no actual hidden form inputs needed since ContactForm handles submission) */}
        <ContactForm
          heading="Book a Content Strategy Call"
          subheading="Tell us about your business and content goals. We'll get back to you within 24 hours."
          submitLabel="Request My Content Strategy"
          showAppointmentNote={true}
        />
      </Section>
    </main>
  );
}