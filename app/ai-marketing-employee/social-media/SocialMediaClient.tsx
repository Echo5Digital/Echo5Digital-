"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bot,
  Calendar,
  BarChart3,
  Hash,
  PenLine,
  CheckCircle2,
  Users,
  Clock,
  DollarSign,
  Zap,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Eye,
  Lightbulb,
  Send,
  Sparkles,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";

interface FAQItem {
  question: string;
  answer: string;
}

interface SocialMediaClientProps {
  faqData: FAQItem[];
}

export default function SocialMediaClient({ faqData }: SocialMediaClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6253568/pexels-photo-6253568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="AI-powered social media management dashboard"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,15,30,0.7) 0%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Ambient glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 mb-6"
            style={{ background: "rgba(124,58,237,0.12)" }}>
            <Sparkles size={14} style={{ color: "#A855F7" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
              AI Marketing Employee — Social Media Tier
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Your Social Media,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Managed by AI
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital&apos;s AI Marketing Employee handles content creation, scheduling, and strategy across your social platforms — with human oversight to keep your brand voice consistent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
            <Link
              href="#whats-included"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-500/10"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                color: "#E5E7EB",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See What&apos;s Included
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "5+", label: "Platforms Covered" },
              { value: "AI", label: "Content Creation" },
              { value: "Human", label: "Review & Approval" },
              { value: "Weekly", label: "Performance Reports" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <Section background="elevated" spacing="lg" withDivider id="the-problem">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            The Problem: Inconsistent Social Presence
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
            Most small businesses struggle to maintain a consistent, strategic social media presence. Here&apos;s why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Clock,
              title: "No Time to Post",
              desc: "Running a business leaves little time for daily social media content creation, scheduling, and community management.",
            },
            {
              icon: TrendingUp,
              title: "Low Engagement & Reach",
              desc: "Without a strategy, posts get lost in the noise. Inconsistent posting signals to algorithms that your brand isn't active.",
            },
            {
              icon: Lightbulb,
              title: "No Clear Strategy",
              desc: "Random posts without a content strategy fail to build brand authority, generate leads, or convert followers into customers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={22} style={{ color: "#A855F7" }} />
              </div>
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-xl p-6 md:p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <p
            className="text-lg md:text-xl font-semibold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Echo5 Digital&apos;s AI Marketing Employee eliminates all three problems — at a fraction of the cost of hiring in-house.
          </p>
        </div>
      </Section>

      {/* ── WHAT'S INCLUDED ── */}
      <Section background="default" spacing="lg" id="whats-included">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What&apos;s Included in This Tier
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
            A comprehensive, done-for-you social media management package powered by agentic AI and human expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: PenLine,
              title: "Content Creation",
              description: "AI-generated posts, graphics briefs, and copy tailored to your brand voice, audience, and goals — consistently creative, never repetitive.",
            },
            {
              icon: Calendar,
              title: "Scheduling & Publishing",
              description: "Posts are scheduled and published at optimal times for maximum reach and engagement across all covered platforms — automatically.",
            },
            {
              icon: Hash,
              title: "Hashtag Strategy",
              description: "Research-backed hashtag sets are applied to every post, improving discoverability and expanding your audience organically.",
            },
            {
              icon: Bot,
              title: "Caption Writing",
              description: "Compelling, on-brand captions written by AI and refined by our human team to drive clicks, saves, shares, and comments.",
            },
            {
              icon: Users,
              title: "Platform Management",
              description: "Multi-platform management covering Facebook, Instagram, LinkedIn, and more — one unified strategy across all channels.",
            },
            {
              icon: BarChart3,
              title: "Performance Reporting",
              description: "Detailed reports on engagement, reach, follower growth, and post performance delivered through your Client Command Center dashboard.",
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

      {/* ── HOW THE AI MANAGES ── */}
      <Section background="gradient" spacing="lg" withDivider id="how-it-works">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              How the AI Manages Your Social Media
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}>
              Echo5 Digital&apos;s agentic AI systems don&apos;t just generate random content — they operate as a structured social media workflow, from ideation to publishing, with human experts ensuring everything aligns with your brand.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Lightbulb,
                  title: "AI Generates Content Ideas",
                  desc: "The AI continuously analyzes trends, audience behavior, and industry topics to surface timely, relevant content ideas for your brand.",
                },
                {
                  icon: PenLine,
                  title: "AI Drafts Captions & Formats",
                  desc: "From short-form posts to carousel copy, the AI drafts platform-native content optimized for each channel&apos;s algorithm.",
                },
                {
                  icon: Eye,
                  title: "Human Review Ensures Brand Fit",
                  desc: "Echo5&apos;s human team reviews every piece of content before scheduling, ensuring tone, accuracy, and brand alignment.",
                },
                {
                  icon: Calendar,
                  title: "Automated Scheduling & Publishing",
                  desc: "Approved posts are automatically scheduled and published at data-backed optimal times for your audience.",
                },
                {
                  icon: BarChart3,
                  title: "Engagement Analysis & Iteration",
                  desc: "Post-publish analytics feed back into the AI system to continuously improve content performance over time.",
                },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <step.icon size={18} style={{ color: "#A855F7" }} />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital's AI system managing social media across multiple platforms"
              className="rounded-2xl w-full object-cover"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
                aspectRatio: "4/3",
              }}
            />
            <div
              className="absolute -bottom-4 -left-4 rounded-xl px-5 py-3"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 24px rgba(124,58,237,0.3)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold" style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}>
                  AI Active — Drafting Content
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PLATFORM COVERAGE ── */}
      <Section background="elevated" spacing="lg" withDivider id="platforms">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Platform Coverage
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
            The Social Media tier covers major platforms where your target audience is most active. Final platform selection is confirmed during onboarding.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Facebook, name: "Facebook", desc: "Pages & Business" },
            { icon: Instagram, name: "Instagram", desc: "Feed, Reels & Stories" },
            { icon: Linkedin, name: "LinkedIn", desc: "Company Pages" },
            { icon: Twitter, name: "X / Twitter", desc: "Posts & Threads" },
            { icon: Youtube, name: "YouTube", desc: "Shorts & Community" },
          ].map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center gap-3 p-5 rounded-xl text-center transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <platform.icon size={22} style={{ color: "#A855F7" }} />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                  {platform.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}>
                  {platform.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm mt-8"
          style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}
        >
          Additional platforms may be available. Contact Echo5 Digital to discuss your specific needs.
        </p>
      </Section>

      {/* ── CONTENT CREATION WORKFLOW ── */}
      <Section background="default" spacing="lg" id="workflow">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Content Creation Workflow
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
            A transparent, repeatable process from idea to published post — with a human oversight checkpoint at every critical stage.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div
            className="absolute left-6 top-8 bottom-8 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #7C3AED, #A855F7)" }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {[
              {
                step: "01",
                icon: Lightbulb,
                title: "Ideation",
                desc: "Echo5's AI analyzes your industry, competitors, and trending topics to generate a monthly content calendar with post ideas, themes, and formats.",
                badge: "AI-Driven",
              },
              {
                step: "02",
                icon: PenLine,
                title: "Content Drafting",
                desc: "The AI drafts captions, selects hashtag sets, and outlines visual direction for each post — optimized for each platform's algorithm.",
                badge: "AI-Driven",
              },
              {
                step: "03",
                icon: Eye,
                title: "Human Review & Approval",
                desc: "Echo5's human team reviews all drafted content for brand voice, accuracy, and quality. Clients can also review and request edits via the Client Command Center dashboard.",
                badge: "Human Oversight",
                highlight: true,
              },
              {
                step: "04",
                icon: Calendar,
                title: "Scheduling",
                desc: "Approved posts are queued and scheduled at data-backed optimal times for your specific audience segments on each platform.",
                badge: "Automated",
              },
              {
                step: "05",
                icon: Send,
                title: "Publishing",
                desc: "Content goes live automatically across all covered platforms, ensuring a consistent, professional presence without any manual effort from you.",
                badge: "Automated",
              },
              {
                step: "06",
                icon: BarChart3,
                title: "Performance Analysis",
                desc: "Engagement data is captured and analyzed post-publish. Insights feed back into the next content cycle for continuous improvement.",
                badge: "AI + Human",
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                {/* Step number / icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10"
                  style={{
                    background: step.highlight
                      ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                      : "rgba(124,58,237,0.2)",
                    border: step.highlight
                      ? "none"
                      : "1px solid rgba(124,58,237,0.4)",
                    boxShadow: step.highlight
                      ? "0 0 20px rgba(124,58,237,0.5)"
                      : "none",
                  }}
                >
                  <step.icon size={20} style={{ color: step.highlight ? "#fff" : "#A855F7" }} />
                </div>

                <div
                  className="flex-1 rounded-xl p-5"
                  style={{
                    background: step.highlight
                      ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))"
                      : "rgba(255,255,255,0.025)",
                    border: step.highlight
                      ? "1px solid rgba(124,58,237,0.4)"
                      : "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3
                      className="text-base font-semibold"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: step.highlight
                          ? "rgba(124,58,237,0.3)"
                          : "rgba(124,58,237,0.15)",
                        color: "#A855F7",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RESULTS PREVIEW ── */}
      <Section background="gradient" spacing="lg" withDivider id="results">
        <div className="text-center mb-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Results Preview
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-2" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
            The following examples represent the types of outcomes clients in this tier commonly experience.
          </p>
          <p className="text-xs" style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}>
            * Representative outcomes. Individual results vary based on industry, audience, and starting baseline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              metric: "3–5×",
              label: "Posting Consistency",
              desc: "Clients go from sporadic to consistent posting, dramatically improving algorithmic reach.",
            },
            {
              metric: "+40%",
              label: "Engagement Rate",
              desc: "AI-optimized captions and timing typically improve engagement rates on existing audiences.",
            },
            {
              metric: "10–20%",
              label: "Follower Growth",
              desc: "Strategic hashtag use and consistent content contribute to steady organic follower growth monthly.",
            },
            {
              metric: "100%",
              label: "Time Savings",
              desc: "Business owners reclaim all hours previously spent on social media management tasks.",
            },
          ].map((result) => (
            <div
              key={result.label}
              className="rounded-xl p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {result.metric}
              </div>
              <p className="text-sm font-semibold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                {result.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}>
                {result.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPARISON ── */}
      <Section background="elevated" spacing="lg" withDivider id="comparison">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AI Social Media Manager vs. Hiring In-House
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
            See why growing businesses choose Echo5 Digital&apos;s AI Social Media tier over a dedicated in-house hire.
          </p>
        </div>

        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full" style={{ fontFamily: "Inter, sans-serif" }}>
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold" style={{ color: "rgba(229,231,235,0.5)" }}>
                  Factor
                </th>
                <th
                  className="p-4 text-center text-sm font-bold rounded-tl-xl rounded-tr-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                    color: "#E5E7EB",
                    fontFamily: "Space Grotesk, sans-serif",
                    border: "1px solid rgba(124,58,237,0.4)",
                    borderBottom: "none",
                  }}
                >
                  Echo5 AI Social Media Tier
                </th>
                <th className="p-4 text-center text-sm font-semibold" style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Space Grotesk, sans-serif" }}>
                  In-House Social Media Manager
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  factor: "Monthly Cost",
                  ai: "Fraction of in-house cost",
                  inhouse: "$4,000–$6,000+ salary",
                  highlight: true,
                },
                {
                  factor: "Content Volume",
                  ai: "High volume, AI-assisted",
                  inhouse: "Limited by one person's capacity",
                  highlight: false,
                },
                {
                  factor: "Platform Coverage",
                  ai: "5+ platforms simultaneously",
                  inhouse: "Typically 2–3 managed well",
                  highlight: true,
                },
                {
                  factor: "Availability",
                  ai: "Always on, automated publishing",
                  inhouse: "Business hours, PTO, turnover",
                  highlight: false,
                },
                {
                  factor: "Performance Reporting",
                  ai: "Built-in dashboard reporting",
                  inhouse: "Manual, often inconsistent",
                  highlight: true,
                },
                {
                  factor: "Setup Time",
                  ai: "Rapid onboarding",
                  inhouse: "Weeks to hire + ramp-up time",
                  highlight: false,
                },
                {
                  factor: "Human Oversight",
                  ai: "Echo5 team review included",
                  inhouse: "Requires management overhead",
                  highlight: true,
                },
              ].map((row) => (
                <tr key={row.factor}>
                  <td
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(229,231,235,0.7)",
                      borderBottom: "1px solid rgba(124,58,237,0.1)",
                    }}
                  >
                    {row.factor}
                  </td>
                  <td
                    className="p-4 text-center text-sm font-medium"
                    style={{
                      background: row.highlight
                        ? "rgba(124,58,237,0.1)"
                        : "rgba(124,58,237,0.05)",
                      color: "#A855F7",
                      border: "1px solid rgba(124,58,237,0.25)",
                      borderTop: "none",
                    }}
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      <CheckCircle2 size={14} style={{ color: "#A855F7" }} />
                      {row.ai}
                    </span>
                  </td>
                  <td
                    className="p-4 text-center text-sm"
                    style={{
                      color: "rgba(229,231,235,0.45)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {row.inhouse}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" id="local-service">
        <div
          className="rounded-xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.06))",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <MapPin size={18} style={{ color: "#A855F7" }} />
            </div>
            <div>
              <h2
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston &amp; Sugar Land, Texas — and Businesses Nationwide
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}>
                Businesses in Houston and Sugar Land, Texas can use Echo5 Digital&apos;s AI Social Media tier to maintain a consistent, locally relevant social media presence without the overhead of an in-house social media manager. Echo5&apos;s human team applies local market awareness to ensure content resonates with Houston-area audiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                <span className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: "#7C3AED" }} />
                  {/* Address from verified facts */}
                  Houston / Sugar Land, Texas
                </span>
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} style={{ color: "#7C3AED" }} />
                  {/* Phone from verified facts */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={14} style={{ color: "#7C3AED" }} />
                  {/* Email from verified facts */}
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" withDivider id="faq">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
            Everything you need to know about Echo5 Digital&apos;s AI Social Media Management tier.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                border: openFaq === index
                  ? "1px solid rgba(124,58,237,0.5)"
                  : "1px solid rgba(124,58,237,0.2)",
                background: openFaq === index
                  ? "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.06))"
                  : "rgba(255,255,255,0.025)",
                transition: "all 0.2s ease",
              }}
            >
              <button
                className="w-full text-left p-5 flex items-center justify-between gap-4"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: openFaq === index
                      ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                      : "rgba(124,58,237,0.2)",
                  }}
                >
                  {openFaq === index
                    ? <ChevronUp size={14} color="#fff" />
                    : <ChevronDown size={14} style={{ color: "#A855F7" }} />}
                </span>
              </button>

              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-5 pb-5"
                >
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section background="gradient" spacing="xl" withDivider id="lead-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 mb-6"
              style={{ background: "rgba(124,58,237,0.12)" }}
            >
              <Zap size={13} style={{ color: "#A855F7" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
                Ready to Outsource Your Social Media?
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Let Echo5&apos;s AI Handle Your Social Media — Starting Today
            </h2>

            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}>
              Stop struggling with inconsistent posting and zero strategy. Echo5 Digital&apos;s AI Marketing Employee manages your social media end-to-end, from content creation to performance reporting — so you can focus on running your business.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Done-for-you content creation & scheduling",
                "Multi-platform management with one point of contact",
                "Human oversight ensures brand alignment",
                "Performance dashboard for full transparency",
                "Available to businesses in Houston, TX and nationwide",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                  <span className="text-sm" style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <p className="text-sm font-semibold mb-3" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Or reach us directly:
              </p>
              <div className="space-y-2">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={14} style={{ color: "#7C3AED" }} />
                  {/* Phone from verified facts */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={14} style={{ color: "#7C3AED" }} />
                  {/* Email from verified facts */}
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <ContactForm
              heading="Get Started with AI Social Media"
              subheading="Tell us about your business and social media goals. We'll reach out within 24 hours."
              submitLabel="Request a Demo"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}