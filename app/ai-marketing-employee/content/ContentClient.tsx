"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  FileText,
  Globe,
  Search,
  Bot,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart2,
  Calendar,
  PenTool,
  Lightbulb,
  Eye,
  Share2,
  Mail,
  Layers,
  Star,
  MapPin,
  ArrowRight,
  MessageSquare,
  BookOpen,
  Target,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ContentClientProps {
  faqData: FaqItem[];
}

export default function ContentClient({ faqData }: ContentClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Ambient glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Zap size={14} className="text-purple-400" />
            <span
              className="text-purple-400 text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee · Content Tier
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AI-Powered Content That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ranks, Answers & Converts
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Done-for-you SEO and AEO-optimized blog posts, web copy, and
            structured content — created by agentic AI, reviewed by our human
            editorial team, and published consistently for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Start Creating Content
              <ArrowRight size={18} />
            </a>
            <a
              href="#whats-included"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-400 text-base border-2 border-purple-600/50 transition-all duration-200 hover:bg-purple-600/10 hover:text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See What's Included
            </a>
          </div>

          {/* Hero image */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-purple-600/20 shadow-2xl max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered content marketing dashboard showing SEO-optimized blog posts and analytics"
              className="w-full object-cover"
              style={{ maxHeight: "420px" }}
            />
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ──────────────────── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border border-purple-500/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <MessageSquare size={20} className="text-white" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-xl sm:text-2xl font-bold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                What Is the Content Tier of the AI Marketing Employee?
              </h2>
            </div>
          </div>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#D1D5DB", fontFamily: "Inter, sans-serif" }}
          >
            The Content tier of Echo5 Digital's AI Marketing Employee is a
            done-for-you content marketing service that uses agentic AI to
            research, draft, and optimize blog posts, website copy, and
            AEO-structured content for small and mid-sized businesses. Content
            types produced include blog articles, landing page copy, service page
            descriptions, FAQ sections, email copy, social media captions, and
            content calendars. It is designed for businesses that need consistent,
            high-quality content but lack the time or resources to hire an
            in-house writing team. The AI handles research, drafting, SEO
            optimization, and AEO formatting; Echo5's human editorial team reviews
            every piece before publication to ensure accuracy, brand alignment, and
            search effectiveness. This service is available to businesses in
            Houston, Texas and nationally across the U.S.
          </p>
        </div>
      </Section>

      {/* ── WHY CONTENT IS THE FOUNDATION ───────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Case for Content
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Content Is the Foundation of Digital Growth
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Without consistent, high-quality content, no marketing channel
            reaches its potential. SEO, social media, email, and paid ads all
            depend on content — but most small businesses can't produce it at
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "SEO Demands Fresh Content",
              description:
                "Search engines reward websites that consistently publish authoritative, keyword-optimized content. Without it, your competitors outrank you — and your traffic stagnates.",
            },
            {
              icon: Bot,
              title: "AI Answer Engines Cite Content",
              description:
                "Tools like Google AI Overviews, Perplexity, and ChatGPT pull answers from well-structured web content. Businesses that publish AEO-optimized content get cited — free, high-intent exposure.",
            },
            {
              icon: Share2,
              title: "Social Media Needs a Content Engine",
              description:
                "Consistent, valuable content fuels social media engagement. Without a steady content supply, social channels go quiet and brand awareness stalls.",
            },
            {
              icon: Star,
              title: "Content Builds Brand Authority",
              description:
                "Publishing expert content positions your business as the trusted leader in your niche. Prospects who read your content arrive pre-sold on your expertise.",
            },
            {
              icon: BarChart2,
              title: "Most SMBs Can't Keep Up",
              description:
                "Hiring writers is expensive. DIY content is inconsistent. Most small businesses publish sporadically, losing compounding SEO gains to businesses that publish regularly.",
            },
            {
              icon: TrendingUp,
              title: "Content Compounds Over Time",
              description:
                "Unlike paid ads that stop the moment you stop spending, quality content continues to drive organic traffic, leads, and revenue for months and years after publication.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
      <Section id="whats-included" background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tier Deliverables
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            What's Included in the Content Tier
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Every deliverable is AI-researched, AI-drafted, and human-reviewed
            — ensuring quality, accuracy, and brand alignment at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: BookOpen,
              label: "SEO Blog Posts",
              detail:
                "Long-form, keyword-targeted articles optimized for search rankings and structured for AEO citation.",
            },
            {
              icon: Globe,
              label: "Website Copy",
              detail:
                "Home page, about page, and core service page copy written to convert visitors and rank in search.",
            },
            {
              icon: FileText,
              label: "Service Page Content",
              detail:
                "Dedicated service descriptions that answer buyer questions and target commercial-intent keywords.",
            },
            {
              icon: Target,
              label: "AEO-Structured Content",
              detail:
                "Direct answer blocks, FAQ sections, and structured formatting designed for AI answer engine citation.",
            },
            {
              icon: Share2,
              label: "Social Media Captions",
              detail:
                "Platform-adapted captions for LinkedIn, Instagram, Facebook, and more — aligned with your brand voice.",
            },
            {
              icon: Mail,
              label: "Email Copy",
              detail:
                "Nurture sequences, newsletters, and promotional emails crafted to engage subscribers and drive action.",
            },
            {
              icon: Calendar,
              label: "Content Calendar",
              detail:
                "A structured publishing schedule that ensures consistent output aligned with your SEO and business goals.",
            },
            {
              icon: Layers,
              label: "Internal Linking Structure",
              detail:
                "Strategic internal links woven into every piece to strengthen your site architecture and distribute SEO authority.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-5 rounded-xl border border-purple-600/20 transition-all duration-200 hover:border-purple-500/40"
              style={{ background: "rgba(124,58,237,0.06)" }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={18} className="text-purple-400" />
              </div>
              <div>
                <p
                  className="font-semibold text-white mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HOW THE AI CREATES CONTENT ───────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Under the Hood
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            How the AI Creates Your Content
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital's agentic AI systems handle the heavy lifting — with
            human editorial review at each critical stage to guarantee quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              icon: Lightbulb,
              title: "Topic & Keyword Research",
              description:
                "The AI analyzes your industry, competitors, and search trends to identify high-value topics and keywords aligned with your business goals.",
            },
            {
              step: "02",
              icon: Search,
              title: "SERP & AEO Analysis",
              description:
                "For each topic, the AI studies top-ranking pages, AI overview citations, and Perplexity answers to understand what search engines and AI tools want to surface.",
            },
            {
              step: "03",
              icon: PenTool,
              title: "AI Drafting",
              description:
                "Agentic AI drafts content using your brand voice guidelines, target keywords, AEO formatting rules, and internal linking strategy.",
            },
            {
              step: "04",
              icon: ShieldCheck,
              title: "Human Editorial Review",
              description:
                "Echo5's human team reviews every draft for factual accuracy, brand alignment, tone consistency, and SEO best practices before it moves forward.",
            },
            {
              step: "05",
              icon: Target,
              title: "SEO & AEO Optimization",
              description:
                "Titles, meta descriptions, heading structures, schema markup, and internal links are optimized for both traditional search and AI answer engines.",
            },
            {
              step: "06",
              icon: CheckCircle,
              title: "Final Approval & Publication",
              description:
                "Content is delivered for your review or published directly per your agreed workflow, with full version history maintained in the Client Command Center.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative p-6 rounded-xl border border-purple-600/20 transition-all duration-200 hover:border-purple-500/40 hover:-translate-y-1"
              style={{
                background: "rgba(10,15,30,0.7)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold text-purple-400 tracking-widest"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.step}
                </span>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <item.icon size={17} className="text-purple-400" />
                </div>
              </div>
              <h3
                className="font-semibold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
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

      {/* ── AEO CONTENT OPTIMIZATION CALLOUT ────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div
          className="rounded-2xl p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.08) 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <Bot size={24} className="text-white" />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-purple-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  AEO Content Optimization
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Built to Be Cited by AI Search Tools
                </h2>
              </div>
            </div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#D1D5DB", fontFamily: "Inter, sans-serif" }}
            >
              Content in this tier is specifically structured for{" "}
              <strong className="text-white">
                Answer Engine Optimization (AEO)
              </strong>{" "}
              — not just traditional SEO. That means every piece is formatted so
              that AI-powered tools like{" "}
              <strong className="text-purple-300">Google AI Overviews</strong>,{" "}
              <strong className="text-purple-300">Perplexity</strong>, and{" "}
              <strong className="text-purple-300">ChatGPT</strong> can extract,
              summarize, and cite your content directly in their answers.
            </p>
            <ul className="space-y-3">
              {[
                "Direct answer blocks that respond to specific user queries",
                "Structured formatting with H2/H3 hierarchies AI tools can parse",
                "FAQ sections with schema markup for featured snippet eligibility",
                "Concise definitions and summary paragraphs for AI extraction",
                "Schema-ready content layouts for enhanced SERP appearance",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-purple-400 flex-shrink-0 mt-0.5"
                  />
                  <span
                    className="text-sm"
                    style={{ color: "#D1D5DB", fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── CONTENT CREATION WORKFLOW ────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From Idea to Publication
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Content Creation Workflow
          </h2>
          <p
            className="max-w-2xl mx-auto text-base"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            A transparent, step-by-step process with AI-driven efficiency and
            human quality control at every checkpoint.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #7C3AED 20%, #A855F7 50%, #7C3AED 80%, transparent)",
              top: "2rem",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Lightbulb,
                step: "1",
                label: "Topic Ideation",
                description: "AI identifies high-value topics from keyword gaps and search trends.",
                type: "AI",
              },
              {
                icon: PenTool,
                step: "2",
                label: "AI Drafting",
                description: "Agentic AI writes the full draft with SEO and AEO formatting applied.",
                type: "AI",
              },
              {
                icon: Eye,
                step: "3",
                label: "Human Review",
                description: "Echo5 editors check accuracy, brand voice, and optimization quality.",
                type: "Human",
              },
              {
                icon: Target,
                step: "4",
                label: "Final Optimization",
                description: "Metadata, schema, and internal links are finalized.",
                type: "AI + Human",
              },
              {
                icon: Globe,
                step: "5",
                label: "Publication",
                description: "Content is published or delivered per your agreed schedule.",
                type: "Human",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-3">
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                  }}
                >
                  <item.icon size={24} className="text-white" />
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{
                      background: "#0A0F1E",
                      color: "#A855F7",
                      border: "1px solid #7C3AED",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <div>
                  <p
                    className="font-semibold text-white mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed mb-2"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background:
                        item.type === "Human"
                          ? "rgba(168,85,247,0.15)"
                          : item.type === "AI"
                          ? "rgba(124,58,237,0.2)"
                          : "rgba(124,58,237,0.12)",
                      color:
                        item.type === "Human"
                          ? "#C084FC"
                          : item.type === "AI"
                          ? "#A855F7"
                          : "#D8B4FE",
                      border: "1px solid rgba(168,85,247,0.3)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTENT TYPES PRODUCED ───────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Content Formats
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Content Types Produced
          </h2>
          <p
            className="max-w-2xl mx-auto text-base"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Every format you need to dominate search, engage your audience, and
            convert prospects — all under one tier.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, label: "Blog Articles" },
            { icon: Globe, label: "Landing Page Copy" },
            { icon: FileText, label: "Service Descriptions" },
            { icon: MessageSquare, label: "FAQ Sections" },
            { icon: Mail, label: "Email Newsletters" },
            { icon: Share2, label: "Social Captions" },
            { icon: Target, label: "AEO Answer Blocks" },
            { icon: Layers, label: "Topic Cluster Content" },
            { icon: Users, label: "About Page Copy" },
            { icon: Search, label: "SEO Meta Copy" },
            { icon: Calendar, label: "Content Calendars" },
            { icon: PenTool, label: "Brand Voice Guides" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-purple-600/20 transition-all duration-200 hover:border-purple-500/40 hover:-translate-y-1"
              style={{ background: "rgba(124,58,237,0.05)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={18} className="text-purple-400" />
              </div>
              <p
                className="text-sm font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── RESULTS PREVIEW ─────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-4">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Representative Outcomes
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Results Clients Experience
          </h2>
          <p
            className="max-w-2xl mx-auto text-base mb-2"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            The following are representative examples of outcomes businesses in
            this tier typically experience. Individual results vary based on
            industry, competition, and publishing frequency.
          </p>
          <p
            className="text-xs italic"
            style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}
          >
            * These figures are illustrative and representative, not guaranteed
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              metric: "+120%",
              label: "Organic Traffic",
              detail: "Average increase in organic search traffic within 6 months of consistent publication.*",
              icon: TrendingUp,
            },
            {
              metric: "3–5×",
              label: "Content Output",
              detail: "Typical increase in monthly content volume compared to DIY or sporadic posting.*",
              icon: BarChart2,
            },
            {
              metric: "AI Cited",
              label: "AEO Citations",
              detail: "Content structured for AEO has appeared in Google AI Overviews and Perplexity answers for clients.*",
              icon: Bot,
            },
            {
              metric: "Top 10",
              label: "Keyword Rankings",
              detail: "Target keyword rankings achieved for blog articles within 90 days of publication.*",
              icon: Search,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-purple-600/20 transition-all duration-200 hover:border-purple-500/40"
              style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(12px)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <item.icon size={22} className="text-white" />
              </div>
              <p
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.metric}
              </p>
              <p
                className="font-semibold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ─────────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border border-purple-500/20"
          style={{ background: "rgba(124,58,237,0.06)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Serving Houston & Sugar Land, Texas — and Businesses Nationwide
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#D1D5DB", fontFamily: "Inter, sans-serif" }}
              >
                Businesses in Houston and Sugar Land, Texas can use Echo5
                Digital's Content tier to build locally relevant content that
                ranks for Houston-area searches and positions them as trusted
                local authorities. Echo5's human team applies local market
                context to AI-generated content to ensure it resonates with
                Greater Houston audiences and supports local SEO goals. Our
                Content tier is also available to businesses across the U.S.
                who need to scale content production without hiring writers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <div className="flex items-center gap-2" style={{ color: "#9CA3AF" }}>
                  <MapPin size={14} className="text-purple-400 flex-shrink-0" />
                  {/* Address — verified fact */}
                  <span>Houston / Sugar Land, Texas</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: "#9CA3AF" }}>
                  <Mail size={14} className="text-purple-400 flex-shrink-0" />
                  {/* Email — verified fact */}
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@echo5digital.com
                  </a>
                </div>
                <div className="flex items-center gap-2" style={{ color: "#9CA3AF" }}>
                  {/* Phone — verified fact */}
                  <a
                    href="tel:7134897004"
                    className="hover:text-white transition-colors"
                  >
                    713-489-7004
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Frequently Asked Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Common Questions Answered
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: openFaq === index ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)",
                background:
                  openFaq === index
                    ? "rgba(124,58,237,0.1)"
                    : "rgba(124,58,237,0.04)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="font-semibold text-white text-base leading-snug"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-purple-400">
                  {openFaq === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-5"
                  role="region"
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#D1D5DB", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ─────────────────────────────────────── */}
      <Section id="lead-form" background="elevated" spacing="lg" withDivider>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: CTA copy */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Ready to Scale Content?
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Stop Struggling With Content. Let AI Do It For You.
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital's Content tier gives your business a consistent
                flow of SEO-optimized, AEO-structured content — without hiring
                writers, managing editors, or spending hours at a keyboard. Book
                a demo to see how it works for your industry.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "AI-researched, human-reviewed content published consistently",
                  "Structured for Google AI Overviews, Perplexity & ChatGPT citation",
                  "Brand voice alignment established during onboarding",
                  "Full content ownership — you keep everything we create",
                  "Houston-area expertise + national U.S. service",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-purple-400 flex-shrink-0 mt-0.5"
                    />
                    <span
                      className="text-sm"
                      style={{ color: "#D1D5DB", fontFamily: "Inter, sans-serif" }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Demo
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Contact form */}
            <div>
              <ContactForm
                heading="Get Your Content Engine Running"
                subheading="Tell us about your business and content goals. We'll show you how the Content tier works for your industry."
                submitLabel="Request a Demo"
                showAppointmentNote={true}
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}