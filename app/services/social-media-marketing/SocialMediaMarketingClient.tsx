"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Bot,
  Calendar,
  BarChart3,
  Users,
  Hash,
  Megaphone,
  Target,
  Layers,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  FileText,
  TrendingUp,
  Search,
  MousePointerClick,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function SocialMediaMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, #7C3AED 0%, #A855F7 40%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Bot size={15} />
            AI-Powered Social Media Marketing
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Done-for-You{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Social Media Marketing
            </span>{" "}
            That Grows Your Brand
          </h1>

          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital's AI-powered, fully managed social media service handles
            your content strategy, creation, scheduling, and community engagement —
            so you can focus on running your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Demo
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore Services
            </Link>
          </div>

          <div className="w-full max-w-4xl rounded-2xl overflow-hidden mt-4 shadow-2xl"
            style={{ border: "1px solid rgba(124,58,237,0.25)" }}>
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered social media marketing dashboard showing analytics and content scheduling"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(168,85,247,0.25)",
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
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-lg sm:text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                What Is Social Media Marketing &amp; What Does Echo5 Digital Provide?
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
              >
                Social media marketing is the strategic creation, publishing, and management of content
                across social platforms to build brand awareness, engage audiences, and drive business
                growth. Echo5 Digital provides AI-powered, done-for-you social media marketing for
                small and mid-sized businesses in Houston, Sugar Land, Texas, and nationally across the
                U.S. Services include content strategy, AI-assisted post creation, scheduling, community
                engagement, and performance reporting. The fully managed model means business owners
                receive a complete social media presence without handling it themselves.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Bot size={20} />, label: "AI-Powered Content" },
            { icon: <Shield size={20} />, label: "Done-for-You Model" },
            { icon: <Globe size={20} />, label: "U.S. & Local Coverage" },
            { icon: <Clock size={20} />, label: "Consistent Publishing" },
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

      {/* ── WHAT IS SOCIAL MEDIA MARKETING ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              What Is It?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Social Media Marketing, Explained Simply
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Social media marketing encompasses three core disciplines: <strong style={{ color: "#E5E7EB" }}>organic content strategy</strong>, <strong style={{ color: "#E5E7EB" }}>community management</strong>, and <strong style={{ color: "#E5E7EB" }}>paid social advertising</strong>. Together, these create a comprehensive approach to building and sustaining a brand's presence across social platforms.
              </p>
              <p>
                Organic content strategy involves crafting and publishing valuable posts that speak to your audience's interests, questions, and needs — without paid promotion. Done consistently, this builds brand awareness, earns trust, and turns followers into customers.
              </p>
              <p>
                Community management means actively engaging with your audience: responding to comments, answering DMs, acknowledging mentions, and participating in conversations that matter to your brand. It transforms a passive audience into an active community.
              </p>
              <p>
                For businesses looking to accelerate results, paid social integrates targeted advertising into the mix, amplifying content to precisely defined audiences and driving measurable lead generation and sales.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(124,58,237,0.25)" }}>
            <img
              src="https://images.pexels.com/photos/8511933/pexels-photo-8511933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Business owner reviewing social media marketing analytics and content performance"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ── SERVICES BREAKDOWN ── */}
      <Section background="default" spacing="lg" id="services" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Social Media Marketing Services Breakdown
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Every component of your social media presence, handled by our AI-augmented expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Platform Strategy",
              description:
                "We identify which social platforms best serve your industry, target audience, and business goals — then build a tailored strategy for each.",
            },
            {
              icon: Calendar,
              title: "Content Calendar Development",
              description:
                "A structured monthly content calendar keeps your brand publishing consistently, with planned themes, campaigns, and key dates aligned to your goals.",
            },
            {
              icon: Bot,
              title: "AI-Assisted Content Creation",
              description:
                "Our agentic AI generates post drafts, captions, and content ideas at scale, reviewed and refined by our human creative team for brand accuracy.",
            },
            {
              icon: Clock,
              title: "Post Scheduling",
              description:
                "Posts are scheduled at optimal times for maximum reach and engagement on each platform, removing the daily burden from your team.",
            },
            {
              icon: MessageCircle,
              title: "Community Engagement",
              description:
                "We monitor comments, respond to messages, and engage with your audience to build real relationships and foster an active community around your brand.",
            },
            {
              icon: Hash,
              title: "Hashtag Strategy",
              description:
                "Data-driven hashtag research and strategy expands organic reach, improves discoverability, and connects your content with the right audiences.",
            },
            {
              icon: BarChart3,
              title: "Analytics & Reporting",
              description:
                "Monthly performance reports cover reach, engagement, follower growth, and content insights — so you always know what's working and what's next.",
            },
            {
              icon: Megaphone,
              title: "Paid Social Integration",
              description:
                "Seamlessly integrate boosted posts and paid social campaigns alongside organic content for a unified, high-impact social media strategy.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI WORKFLOW ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            How Our AI Works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Echo5 Digital's AI Social Media Management Workflow
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Our agentic AI system works continuously — while our human creative team ensures every piece of content reflects your brand with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Tasks */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <Bot size={18} color="#fff" />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                What Our AI Does
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Generates content ideas based on industry trends and audience behavior",
                "Drafts post captions, headlines, and hashtag sets at scale",
                "Schedules content for optimal publish times on each platform",
                "Monitors engagement metrics and flags performance anomalies",
                "Analyzes competitor content patterns and audience response data",
                "Surfaces insights for content calendar refinement each month",
              ].map((item, i) => (
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

          {/* Human Oversight */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #A855F7, #7C3AED)" }}
              >
                <Users size={18} color="#fff" />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                What Our Human Team Does
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Reviews and refines all AI-generated content for tone, accuracy, and brand voice",
                "Provides creative direction, visual storytelling, and campaign concepting",
                "Ensures brand alignment across every post, caption, and response",
                "Manages community engagement with empathy and strategic intent",
                "Interprets analytics and delivers actionable monthly strategy reviews",
                "Serves as your dedicated point of contact for feedback and approvals",
              ].map((item, i) => (
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
        </div>
      </Section>

      {/* ── PLATFORMS ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Platform Coverage
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Social Platforms Echo5 Digital Manages
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Platform selection is tailored to each client's industry, audience, and goals — not every business needs every platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Facebook size={28} />,
              platform: "Facebook",
              color: "#1877F2",
              rationale:
                "The largest social network by active users, Facebook is essential for local business visibility, community building, event promotion, and targeted paid advertising through Meta's ad platform. Ideal for B2C businesses reaching broad demographics in Houston and beyond.",
            },
            {
              icon: <Instagram size={28} />,
              platform: "Instagram",
              color: "#E1306C",
              rationale:
                "Instagram's visual-first format makes it powerful for brand storytelling, product showcasing, and reaching younger, highly engaged audiences. Stories, Reels, and carousel posts give businesses diverse content formats to maintain a dynamic, consistent presence.",
            },
            {
              icon: <Linkedin size={28} />,
              platform: "LinkedIn",
              color: "#0A66C2",
              rationale:
                "LinkedIn is the premier platform for B2B marketing, professional service firms, and thought leadership. It connects businesses with decision-makers, builds industry authority, and drives high-quality lead generation for service-based companies.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.22)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: `${item.color}18`, border: `1px solid ${item.color}40` }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.platform}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(229,231,235,0.72)", fontFamily: "Inter, sans-serif" }}
              >
                {item.rationale}
              </p>
            </div>
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
            How It Works: From Onboarding to Results
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
                title: "Onboarding & Brand Audit",
                description:
                  "We learn your business, voice, goals, and competitive landscape. A thorough brand audit establishes baseline positioning and platform presence.",
              },
              {
                step: "02",
                icon: <FileText size={20} />,
                title: "Content Strategy",
                description:
                  "We develop a tailored content strategy covering platform selection, content pillars, posting frequency, and campaign themes aligned to your goals.",
              },
              {
                step: "03",
                icon: <Bot size={20} />,
                title: "AI Content Creation",
                description:
                  "Our agentic AI drafts posts, captions, and hashtag sets. The human team reviews, refines, and approves every piece before it's scheduled.",
              },
              {
                step: "04",
                icon: <Calendar size={20} />,
                title: "Publishing & Engagement",
                description:
                  "Content goes live on schedule. Our team monitors engagement, responds to comments, and manages your community in real time.",
              },
              {
                step: "05",
                icon: <TrendingUp size={20} />,
                title: "Monthly Performance Review",
                description:
                  "Each month, you receive a performance report with reach, engagement, and growth data, plus a strategic review and next-month plan.",
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

      {/* ── DONE-FOR-YOU POSITIONING ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(124,58,237,0.25)" }}>
            <img
              src="https://images.pexels.com/photos/15467755/pexels-photo-15467755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Business owner freed from social media management tasks by a professional done-for-you service"
              className="w-full h-72 object-cover"
            />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Fully Managed
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              You Focus on Your Business. We Handle Social Media. Entirely.
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Most business owners know they need a consistent social media presence — but
              creating content, scheduling posts, responding to comments, and tracking results
              takes hours every week. Echo5 Digital's done-for-you model removes that burden
              completely.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "No more scrambling to find post ideas",
                "No more inconsistent publishing schedules",
                "No more ignored comment sections",
                "No more guessing what's working",
                "Just a professional, growing social presence — on autopilot",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={17} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
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
              Get Started Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.22)",
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
              <Globe size={22} color="#fff" />
            </div>
          </div>
          <div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston, Sugar Land &amp; Businesses Across the U.S.
            </h2>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's social media marketing services help Houston and Sugar Land businesses
              maintain a consistent, professional presence on social platforms and engage local
              audiences effectively. Businesses in the Houston metropolitan area can reach Echo5
              Digital to get started with done-for-you social media management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Verified phone from business facts */}
              <a
                href="tel:7134897004"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <span>📞</span>
                <span>713-489-7004</span>
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <span>✉️</span>
                <span>hello@echo5digital.com</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INTERNAL LINKS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Related Services
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Explore More Echo5 Digital Services
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Combine social media marketing with these services for a complete digital growth strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Megaphone size={22} />,
              label: "Meta Ads",
              description: "Paid social advertising on Facebook and Instagram to amplify reach and drive conversions.",
              href: "/services/meta-ads",
            },
            {
              icon: <FileText size={22} />,
              label: "Content Marketing",
              description: "SEO-driven blog content, articles, and resources that attract and educate your ideal audience.",
              href: "/services/content-marketing",
            },
            {
              icon: <MousePointerClick size={22} />,
              label: "Google Ads",
              description: "Pay-per-click campaigns targeting high-intent searchers ready to take action.",
              href: "/services/google-ads",
            },
            {
              icon: <Bot size={22} />,
              label: "AI Marketing Employee",
              description: "A fully autonomous AI marketing employee managing campaigns, content, and reporting for your business.",
              href: "/ai-marketing-employee",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#A855F7",
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
              <div
                className="inline-flex items-center gap-1 text-xs font-semibold mt-auto"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Learn more <ArrowRight size={13} />
              </div>
            </Link>
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
              FAQ
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
              Common questions about Echo5 Digital's social media marketing services.
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
      <Section background="gradient" spacing="xl" withDivider id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Ready for a Done-for-You Social Media Presence?
            </h2>
            <p
              className="max-w-xl mx-auto text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Fill out the form below or call us at{" "}
              {/* Verified phone from business facts */}
              <a
                href="tel:7134897004"
                className="font-semibold hover:text-white transition-colors"
                style={{ color: "#A855F7" }}
              >
                713-489-7004
              </a>{" "}
              to schedule your free social media strategy consultation with Echo5 Digital.
            </p>
          </div>

          {/* Hidden UTM / source field context */}
          {/* UTM fields are handled server-side; form collects name, email, phone, message */}
          <ContactForm
            heading="Book a Social Media Demo"
            subheading="Tell us about your business and social media goals. We'll respond within 24 hours with a tailored strategy overview."
            submitLabel="Send My Request"
            showAppointmentNote={true}
          />
        </div>
      </Section>
    </main>
  );
}