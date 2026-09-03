"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Tag,
  User,
  ChevronRight,
  BookOpen,
  Zap,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  ListOrdered,
  TrendingUp,
  Brain,
  Target,
  Share2,
} from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

interface Post {
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
  heroImage: string;
  quickAnswer: string;
  tableOfContents: { id: string; label: string }[];
  relatedPosts: RelatedPost[];
}

interface BlogPostClientProps {
  post: Post;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [tocOpen, setTocOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setFormSubmitted(true);
  };

  return (
    <main>
      {/* ── Article Header / Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          {/* Category tag */}
          <div className="flex items-center gap-2 mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(124,58,237,0.2)",
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Tag size={11} />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div
            className="flex flex-wrap items-center gap-4 mb-8 text-sm"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            <span className="flex items-center gap-1.5">
              <User size={14} style={{ color: "#7C3AED" }} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} style={{ color: "#7C3AED" }} />
              {post.publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} style={{ color: "#7C3AED" }} />
              {post.readTime}
            </span>
            <button
              aria-label="Share this article"
              className="flex items-center gap-1.5 transition-colors hover:text-purple-400"
              style={{ color: "#9CA3AF" }}
            >
              <Share2 size={14} />
              Share
            </button>
          </div>

          {/* Hero image */}
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-0"
            style={{
              border: "1px solid rgba(124,58,237,0.25)",
              boxShadow: "0 0 60px rgba(124,58,237,0.15)",
            }}
          >
            <img
              src={post.heroImage}
              alt="Futuristic AI digital marketing dashboard illustrating automated campaign management"
              className="w-full object-cover"
              style={{ height: "380px" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.85) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Main content + sidebar layout ── */}
      <Section spacing="md" background="default">
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* ── Article body column ── */}
          <article className="flex-1 min-w-0">
            {/* ── Direct Answer Block ── */}
            <div
              className="rounded-2xl p-6 mb-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
                border: "1px solid rgba(124,58,237,0.35)",
                boxShadow: "0 0 40px rgba(124,58,237,0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap size={16} style={{ color: "#A855F7" }} />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                >
                  Quick Answer
                </span>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                {post.quickAnswer}
              </p>
            </div>

            {/* ── Table of Contents (mobile inline) ── */}
            <div
              className="lg:hidden rounded-2xl mb-10 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={tocOpen}
              >
                <span
                  className="flex items-center gap-2 font-semibold text-sm"
                  style={{
                    color: "#E5E7EB",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  <ListOrdered size={16} style={{ color: "#A855F7" }} />
                  Table of Contents
                </span>
                <ChevronRight
                  size={16}
                  style={{
                    color: "#A855F7",
                    transform: tocOpen ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
              {tocOpen && (
                <nav aria-label="Article sections" className="px-5 pb-5">
                  <ol className="space-y-2 list-none">
                    {post.tableOfContents.map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-center gap-2 text-sm transition-colors hover:text-purple-400 py-1"
                          style={{
                            color: "#9CA3AF",
                            fontFamily: "Inter, sans-serif",
                            textDecoration: "none",
                          }}
                        >
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{
                              background: "rgba(124,58,237,0.25)",
                              color: "#A855F7",
                            }}
                          >
                            {i + 1}
                          </span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>

            {/* ── Article Body ── */}
            <div
              className="prose-custom"
              style={{ fontFamily: "Inter, sans-serif", color: "#D1D5DB" }}
            >
              <h2
                id="what-is-ai-marketing"
                className="text-2xl font-bold mb-4 mt-10"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  scrollMarginTop: "90px",
                }}
              >
                What Is AI Marketing?
              </h2>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                AI marketing refers to the use of artificial intelligence technologies — including machine learning, natural language processing, and predictive analytics — to automate and enhance digital marketing campaigns. Rather than relying solely on human intuition, AI marketing platforms analyze vast data sets to identify patterns, predict customer behavior, and deliver hyper-personalized experiences at scale.
              </p>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                For small and mid-sized businesses, this shift is transformative. Capabilities once reserved for enterprise marketing departments with six-figure budgets are now accessible through platforms like{" "}
                <Link href="/ai-marketing-employee" style={{ color: "#A855F7", textDecoration: "underline" }}>
                  Echo5 Digital's AI Marketing Employee
                </Link>
                , which combines smart automation with expert human oversight.
              </p>

              <h2
                id="key-benefits"
                className="text-2xl font-bold mb-4 mt-10"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  scrollMarginTop: "90px",
                }}
              >
                Key Benefits for Small Businesses
              </h2>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                AI marketing delivers measurable advantages across three core dimensions for small businesses: efficiency, personalization, and insight. Here's what that looks like in practice:
              </p>

              {/* Benefit cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8 not-prose">
                {[
                  {
                    icon: <TrendingUp size={20} style={{ color: "#A855F7" }} />,
                    title: "Efficiency",
                    desc: "Automate ad bidding, content scheduling, and reporting — saving 10+ hours per week.",
                  },
                  {
                    icon: <Target size={20} style={{ color: "#A855F7" }} />,
                    title: "Precision",
                    desc: "Target micro-audiences with the right message at the right moment based on behavioral signals.",
                  },
                  {
                    icon: <Brain size={20} style={{ color: "#A855F7" }} />,
                    title: "Intelligence",
                    desc: "Predictive analytics surface high-intent leads before they ever fill out a form.",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <div className="mb-3">{b.icon}</div>
                    <h3
                      className="font-semibold text-sm mb-1"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#E5E7EB",
                      }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2
                id="ai-seo"
                className="text-2xl font-bold mb-4 mt-10"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  scrollMarginTop: "90px",
                }}
              >
                AI and SEO: A Powerful Combination
              </h2>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                Search engine optimization has been fundamentally reshaped by AI. Google's own algorithms — including RankBrain and the Helpful Content System — now use machine learning to assess content quality, user intent alignment, and topical authority. Meanwhile, AI writing and research tools help marketers produce comprehensive, semantically rich content faster than ever.
              </p>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                Echo5 Digital's{" "}
                <Link href="/services/seo" style={{ color: "#A855F7", textDecoration: "underline" }}>
                  SEO services
                </Link>{" "}
                and{" "}
                <Link href="/services/aeo-geo" style={{ color: "#A855F7", textDecoration: "underline" }}>
                  AEO & GEO optimization
                </Link>{" "}
                harness AI to identify semantic keyword clusters, optimize for answer engine citation, and build content architectures that rank in both traditional search and AI-generated answer summaries.
              </p>

              <h3
                className="text-xl font-semibold mb-3 mt-8"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  scrollMarginTop: "90px",
                }}
              >
                Answer Engine Optimization (AEO)
              </h3>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                As ChatGPT, Google AI Overviews, and Perplexity become primary research tools for consumers, being cited in AI-generated answers is the new first page. AEO involves structuring your content with direct answers, authoritative citations, clear FAQ formats, and structured data that AI systems can easily extract and attribute.
              </p>

              {/* ── Inline CTA Banner (mid-article) ── */}
              <div
                className="rounded-2xl p-6 my-10 not-prose"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(168,85,247,0.12) 100%)",
                  border: "1px solid rgba(124,58,237,0.4)",
                  boxShadow: "0 0 40px rgba(124,58,237,0.15)",
                }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                    >
                      Ready to rank in AI answers?
                    </p>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#E5E7EB",
                      }}
                    >
                      Get Your Free AEO Audit
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                    >
                      See how your current content performs against AI answer engines and what it takes to get cited.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:brightness-110"
                    style={{
                      background:
                        "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow:
                        "0 0 20px rgba(124,58,237,0.5)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Book a Free Call
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <h2
                id="google-ads"
                className="text-2xl font-bold mb-4 mt-10"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  scrollMarginTop: "90px",
                }}
              >
                Smarter Google Ads with AI
              </h2>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                Google's own advertising platform has become deeply AI-native. Performance Max campaigns, Smart Bidding, and responsive search ads all rely on machine learning to optimize delivery in real time. For small business advertisers, this means the algorithm can handle moment-to-moment bid adjustments — but human strategy is still essential to set goals, define audiences, and protect margins.
              </p>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                Our{" "}
                <Link href="/services/google-ads" style={{ color: "#A855F7", textDecoration: "underline" }}>
                  Google Ads management
                </Link>{" "}
                team combines AI automation with hands-on campaign architecture to maximize your return on ad spend. We handle keyword strategy, negative keyword lists, landing page alignment, and conversion tracking so your budget works harder.
              </p>

              <h2
                id="social-media"
                className="text-2xl font-bold mb-4 mt-10"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  scrollMarginTop: "90px",
                }}
              >
                AI-Driven Social Media Marketing
              </h2>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                Social media platforms like Meta, Instagram, and TikTok now use sophisticated AI to determine which content gets shown to which users. To win on these platforms, businesses need to feed the algorithm high-quality signals: strong creative assets, consistent posting schedules, and conversion-optimized landing pages.
              </p>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                AI tools help at every layer — from generating creative variations for A/B testing, to identifying the optimal posting windows, to analyzing which content resonates with specific audience segments. Echo5 Digital's{" "}
                <Link href="/services/social-media-marketing" style={{ color: "#A855F7", textDecoration: "underline" }}>
                  social media marketing
                </Link>{" "}
                service integrates these AI capabilities with creative strategy to grow engaged audiences that convert.
              </p>

              <h2
                id="getting-started"
                className="text-2xl font-bold mb-4 mt-10"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  scrollMarginTop: "90px",
                }}
              >
                Getting Started with AI Marketing
              </h2>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                The biggest misconception small business owners have about AI marketing is that it requires a large team or technical expertise to implement. In reality, the right agency partner handles the complexity while you focus on running your business.
              </p>
              <p className="mb-5 leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
                A practical starting point for most businesses involves three steps: (1) audit your current digital presence and conversion funnel, (2) identify the highest-leverage channels for your industry and target customer, and (3) implement AI-assisted tools for those channels while tracking measurable KPIs.
              </p>

              {/* Numbered steps */}
              <ol className="space-y-4 mb-8 not-prose list-none">
                {[
                  {
                    step: "01",
                    title: "Digital Presence Audit",
                    desc: "Evaluate your website, SEO health, ad accounts, and social profiles to identify quick wins and critical gaps.",
                  },
                  {
                    step: "02",
                    title: "Channel Prioritization",
                    desc: "Match your target customer's search and social behavior to the right marketing channels — don't spread budget thin.",
                  },
                  {
                    step: "03",
                    title: "AI-Assisted Execution",
                    desc: "Launch campaigns using AI tools for bidding, content creation, and audience segmentation, with human oversight for strategy.",
                  },
                ].map((s) => (
                  <li
                    key={s.step}
                    className="flex gap-4 items-start rounded-xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(124,58,237,0.18)",
                    }}
                  >
                    <span
                      className="text-2xl font-black flex-shrink-0 leading-none"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "rgba(168,85,247,0.4)",
                      }}
                    >
                      {s.step}
                    </span>
                    <div>
                      <h3
                        className="font-semibold mb-1 text-base"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          color: "#E5E7EB",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                        {s.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* ── End-of-article CTA Banner ── */}
              <div
                className="rounded-2xl p-8 mt-12 mb-4 not-prose text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(168,85,247,0.14) 100%)",
                  border: "1px solid rgba(124,58,237,0.45)",
                  boxShadow: "0 0 60px rgba(124,58,237,0.12)",
                }}
              >
                <Zap size={28} style={{ color: "#A855F7", margin: "0 auto 12px" }} />
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  Ready to Build Your AI Marketing Growth Engine?
                </h3>
                <p
                  className="text-sm mb-5 max-w-md mx-auto leading-relaxed"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  Echo5 Digital works with small and mid-sized businesses in Houston, Sugar Land, and across the U.S. to deploy AI-powered marketing strategies that drive real, measurable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:brightness-110"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Book a Free Strategy Call
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:brightness-110"
                    style={{
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.4)",
                      color: "#A855F7",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Explore Services
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* ── Sidebar (desktop) ── */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Desktop TOC */}
              <nav
                aria-label="Article sections"
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <h2
                  className="flex items-center gap-2 text-sm font-semibold mb-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  <ListOrdered size={15} style={{ color: "#A855F7" }} />
                  Table of Contents
                </h2>
                <ol className="space-y-1 list-none">
                  {post.tableOfContents.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2.5 text-sm py-1.5 px-2 rounded-lg transition-colors hover:text-purple-400 group"
                        style={{
                          color: "#9CA3AF",
                          fontFamily: "Inter, sans-serif",
                          textDecoration: "none",
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            background: "rgba(124,58,237,0.2)",
                            color: "#A855F7",
                          }}
                        >
                          {i + 1}
                        </span>
                        <span className="leading-snug">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Sidebar CTA */}
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.1) 100%)",
                  border: "1px solid rgba(124,58,237,0.35)",
                }}
              >
                <BookOpen size={24} style={{ color: "#A855F7", margin: "0 auto 10px" }} />
                <h3
                  className="font-bold text-sm mb-2"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  Free Marketing Consultation
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  Talk to an AI marketing expert. No obligation, just actionable insights for your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full text-xs font-semibold text-white transition-all hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.45)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Book a Free Call
                  <ChevronRight size={12} />
                </Link>
              </div>

              {/* Quick facts */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#A855F7",
                  }}
                >
                  About This Article
                </h3>
                <ul className="space-y-2 text-xs" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                  <li className="flex justify-between">
                    <span>Category</span>
                    <span style={{ color: "#E5E7EB" }}>{post.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Published</span>
                    <span style={{ color: "#E5E7EB" }}>{post.publishDate}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Read Time</span>
                    <span style={{ color: "#E5E7EB" }}>{post.readTime}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Author</span>
                    <span style={{ color: "#E5E7EB" }}>{post.author}</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ── Related Posts ── */}
      <Section spacing="md" background="elevated" withDivider>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-1 h-8 rounded-full"
              style={{ background: "linear-gradient(to bottom, #7C3AED, #A855F7)" }}
            />
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Related Articles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(168,85,247,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 40px rgba(124,58,237,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={related.image}
                    alt={`Illustration for article: ${related.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(10,15,30,0.9) 100%)",
                    }}
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(124,58,237,0.8)",
                      color: "#E5E7EB",
                      border: "1px solid rgba(168,85,247,0.4)",
                      fontFamily: "Inter, sans-serif",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {related.category}
                  </span>
                </div>
                <div className="p-5">
                  <p
                    className="text-xs mb-2"
                    style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                  >
                    {related.date}
                  </p>
                  <h3
                    className="font-semibold text-base leading-snug mb-2 group-hover:text-purple-400 transition-colors"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    {related.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {related.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold transition-colors group-hover:text-purple-300"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    Read Article <ChevronRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Author / About Echo5 Block ── */}
      <Section spacing="md" background="gradient" withDivider>
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,58,237,0.25)",
              boxShadow: "0 0 40px rgba(124,58,237,0.08)",
            }}
          >
            {/* Logo avatar */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.5)",
              }}
            >
              <Zap size={28} color="#fff" />
            </div>
            <div className="flex-1">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Written By
              </p>
              <h2
                className="text-xl font-bold mb-1"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                Echo5 Digital Team
              </h2>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital is an AI-powered digital marketing agency serving small and mid-sized businesses in Houston, Sugar Land, and across the United States. We specialize in SEO, AEO, Google Ads, social media marketing, web development, and custom programming — all enhanced by AI-driven strategy and automation.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-purple-300"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Learn More About Echo5 Digital
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Comments / Engagement CTA ── */}
      <Section spacing="lg" background="default" withDivider>
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <MessageCircle size={14} style={{ color: "#A855F7" }} />
              <span
                className="text-xs font-semibold"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Have Questions?
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Let's Talk About Your Marketing Goals
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Have a question about this article or want to explore how AI marketing could work for your business? Reach out — our team responds within 24 hours.
            </p>
          </div>

          {/* Contact info strip */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                label: "Email Us",
                value: "hello@echo5digital.com",
                href: "mailto:hello@echo5digital.com",
              },
              {
                label: "Call Us",
                // verified phone from business facts
                value: "713-489-7004",
                href: "tel:7134897004",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex flex-col items-center justify-center p-5 rounded-2xl transition-all hover:brightness-110 group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  textDecoration: "none",
                }}
              >
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                >
                  {c.label}
                </span>
                <span
                  className="text-base font-semibold group-hover:text-purple-300 transition-colors"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {c.value}
                </span>
              </a>
            ))}
          </div>

          {/* Contact form */}
          {formSubmitted ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <Zap size={32} style={{ color: "#A855F7", margin: "0 auto 12px" }} />
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                Thanks! We'll be in touch soon.
              </h3>
              <p
                className="text-sm"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                Our team typically responds within 24 hours on business days.
              </p>
            </div>
          ) : (
            <ContactForm
              heading="Send Us a Message"
              subheading="Ask a question about AI marketing or tell us about your project — we'd love to help."
              submitLabel="Send Message"
              showAppointmentNote={true}
              onSubmit={handleFormSubmit}
            />
          )}
        </div>
      </Section>
    </main>
  );
}