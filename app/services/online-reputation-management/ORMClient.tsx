"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Star,
  MessageSquare,
  Search,
  TrendingUp,
  Bell,
  ShieldCheck,
  Bot,
  Users,
  BarChart3,
  ChevronDown,
  ChevronUp,
  MapPin,
  Globe,
  FileSearch,
  Settings,
  RefreshCw,
  Link2,
  CheckCircle,
  Zap,
  Eye,
  AlertCircle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ORMClientProps {
  faqData: FAQItem[];
}

export default function ORMClient({ faqData }: ORMClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        {/* Decorative orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
        />
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={14} />
              AI-Powered ORM
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#E5E7EB] mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Protect &amp; Elevate{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Brand&apos;s Reputation
              </span>
            </h1>
            <p
              className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital combines AI-powered monitoring with hands-on human expertise to manage your online reputation — so you can focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Star size={18} />
                Get a Free Reputation Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[#A855F7] text-base transition-all duration-200 hover:bg-[#7C3AED]/10"
                style={{
                  border: "2px solid #7C3AED",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <img
                src="https://images.pexels.com/photos/6326177/pexels-photo-6326177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Business owner reviewing online reputation metrics and reviews on a dashboard"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(10,15,30,0.7) 100%)",
                }}
              />
              {/* Floating stat badges */}
              <div
                className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "rgba(124,58,237,0.85)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Star size={14} fill="#facc15" color="#facc15" />
                4.9 Average Star Rating
              </div>
              <div
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#A855F7]"
                style={{
                  background: "rgba(10,15,30,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(168,85,247,0.4)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                />
                Monitoring Active
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="sm" id="quick-answer" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(168,85,247,0.25)",
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
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-[#A855F7] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-[#E5E7EB] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Online reputation management (ORM) is the practice of monitoring, influencing, and protecting a business&apos;s digital brand image across review platforms, search results, and social channels. Echo5 Digital provides AI-assisted ORM services including review monitoring, response management, review generation strategies, and brand mention tracking. This service is designed for small and mid-sized businesses that need a consistent, professional online presence without managing it in-house. Echo5 Digital serves clients in Houston, Sugar Land, Texas and nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHY REPUTATION MATTERS ── */}
      <Section background="default" spacing="lg" id="why-reputation-matters" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Business Case
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Your Online Reputation Is Your Most Valuable Asset
          </h2>
          <p
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            In today&apos;s digital-first world, your star rating and review volume directly impact whether customers choose you — or your competitor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              stat: "Local Pack",
              label: "Search Rankings",
              desc: "Google factors review quantity, recency, and rating into local search rankings. A stronger reputation means better visibility.",
            },
            {
              icon: Users,
              stat: "93%",
              label: "of buyers read reviews",
              desc: "Nearly all consumers check online reviews before making a purchase decision, particularly for local services.",
            },
            {
              icon: TrendingUp,
              stat: "Revenue Impact",
              label: "Direct Bottom Line",
              desc: "Businesses with higher star ratings consistently outperform competitors in click-through rates, calls, and conversions.",
            },
            {
              icon: ShieldCheck,
              stat: "Brand Trust",
              label: "Long-Term Value",
              desc: "A well-managed reputation builds durable trust that supports customer retention, referrals, and premium pricing.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={24} color="#A855F7" />
              </div>
              <p
                className="text-2xl font-bold text-[#A855F7] mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.stat}
              </p>
              <p
                className="text-sm font-semibold text-[#E5E7EB] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-xs text-[#9CA3AF] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── ORM SERVICES BREAKDOWN ── */}
      <Section background="elevated" spacing="lg" id="orm-services" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            ORM Services Built for Real Businesses
          </h2>
          <p
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every service is designed to work together — giving your brand a consistent, professional presence across every platform that matters.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            variant="service"
            icon={Bell}
            title="Review Monitoring"
            description="We track your reviews across Google, Yelp, Facebook, and industry-specific platforms in real time — so you're never caught off guard by new feedback."
            badge="Core Service"
          />
          <Card
            variant="service"
            icon={MessageSquare}
            title="Response Management"
            description="Professionally crafted responses to every review — positive and negative — delivered consistently to show customers and search engines you're engaged."
          />
          <Card
            variant="service"
            icon={Star}
            title="Review Generation Strategy"
            description="We build ethical, platform-compliant strategies to encourage satisfied customers to leave reviews, growing your review volume and star rating over time."
            badge="High Impact"
          />
          <Card
            variant="service"
            icon={ShieldCheck}
            title="Negative Content Suppression"
            description="Rather than chasing removal, we build positive content volume and authority so that negative results are pushed down in search engine results pages."
          />
          <Card
            variant="service"
            icon={Eye}
            title="Brand Mention Tracking"
            description="We monitor web mentions of your brand name across news, blogs, forums, and social media — catching reputation risks before they escalate."
          />
          <Card
            variant="service"
            icon={BarChart3}
            title="Reputation Reporting"
            description="Regular reporting gives you clear visibility into review trends, sentiment shifts, and reputation health — with actionable recommendations each cycle."
            badge="Included"
          />
        </div>
      </Section>

      {/* ── AI-POWERED ORM ADVANTAGE ── */}
      <Section background="gradient" spacing="lg" id="ai-advantage" withDivider>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our Edge
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI Monitoring. Human Judgment. Better Outcomes.
            </h2>
            <p
              className="text-[#9CA3AF] leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Managing reputation manually across dozens of platforms isn&apos;t scalable. Echo5 Digital uses AI tools to handle the heavy lifting — then applies human expertise to ensure every action is strategic, on-brand, and effective.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: Bot,
                  title: "AI-Scale Monitoring",
                  desc: "Automated scanning of review platforms and the web for brand mentions 24/7 — no missed reviews, no delayed alerts.",
                },
                {
                  icon: MessageSquare,
                  title: "AI-Drafted, Human-Refined Responses",
                  desc: "AI generates professional response drafts; our team reviews and personalizes every response before it goes live.",
                },
                {
                  icon: BarChart3,
                  title: "Pattern Recognition in Feedback",
                  desc: "AI identifies recurring themes in customer feedback, helping you surface product/service insights alongside reputation data.",
                },
                {
                  icon: Users,
                  title: "Human Oversight at Every Step",
                  desc: "No fully automated actions — a real team reviews every response, escalates sensitive situations, and adapts strategy based on results.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <item.icon size={18} color="#A855F7" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-[#E5E7EB] mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm text-[#9CA3AF] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <img
                src="https://images.pexels.com/photos/15863000/pexels-photo-15863000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI-powered dashboard monitoring brand mentions and online reviews at scale"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(124,58,237,0.15), transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" id="how-it-works" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            How We Build Your Reputation
          </h2>
          <p
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A clear, proven process from day one — no guesswork, no vague timelines.
          </p>
        </div>
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 80%, transparent)",
              top: "2.5rem",
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                icon: FileSearch,
                title: "Reputation Audit",
                desc: "We assess your current review landscape, brand search results, and mentions to establish a baseline.",
              },
              {
                step: "02",
                icon: Settings,
                title: "Set Up Monitoring",
                desc: "AI monitoring tools are configured across all relevant platforms for real-time alerts and tracking.",
              },
              {
                step: "03",
                icon: MessageSquare,
                title: "Response Protocols",
                desc: "We develop on-brand response frameworks for both positive feedback and negative reviews.",
              },
              {
                step: "04",
                icon: Star,
                title: "Review Generation",
                desc: "Ethical review generation campaigns are launched to build review volume and improve star ratings.",
              },
              {
                step: "05",
                icon: RefreshCw,
                title: "Report & Refine",
                desc: "Regular reporting cycles surface insights and guide ongoing strategy improvements.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                  }}
                >
                  <item.icon size={28} color="#fff" />
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: "#0A0F1E",
                      border: "2px solid #7C3AED",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {idx + 1}
                  </span>
                </div>
                <p
                  className="text-base font-semibold text-[#E5E7EB] mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-sm text-[#9CA3AF] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INTEGRATION WITH OTHER SERVICES ── */}
      <Section background="elevated" spacing="lg" id="integrations" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Connected Strategy
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            ORM Works Best as Part of a Unified Brand Strategy
          </h2>
          <p
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Online reputation management amplifies every other digital marketing investment you make.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin,
              title: "Local SEO",
              href: "/services/local-seo",
              desc: "Review signals are a direct local ranking factor. Strong ORM reinforces your Local SEO performance by improving review quantity, recency, and response rate.",
              connection: "Reviews → Local Rankings",
            },
            {
              icon: Globe,
              title: "Google Business Profile",
              href: "/services/local-seo",
              desc: "Your GBP is the front door for local customers. ORM ensures your profile is consistently managed, your reviews are responded to, and your rating stays competitive.",
              connection: "GBP Engagement → Trust",
            },
            {
              icon: Link2,
              title: "Content Marketing",
              href: "/services/seo",
              desc: "Positive content assets — blog posts, case studies, press mentions — help suppress negative search results and build brand authority over time.",
              connection: "Content → SERP Suppression",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={22} color="#A855F7" />
              </div>
              <h3
                className="text-lg font-semibold text-[#E5E7EB] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-[#9CA3AF] leading-relaxed mb-4 flex-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-[#A855F7]"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(168,85,247,0.25)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item.connection}
                </span>
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-[#7C3AED] hover:text-[#A855F7] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" id="local-service" withDivider>
        <div
          className="rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.07))",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <div
            className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 20px rgba(124,58,237,0.4)",
            }}
          >
            <MapPin size={24} color="#fff" />
          </div>
          <div>
            <h2
              className="text-xl font-bold text-[#E5E7EB] mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Serving Houston &amp; Sugar Land, Texas — and Beyond
            </h2>
            <p
              className="text-[#9CA3AF] leading-relaxed text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Local businesses in Houston and Sugar Land, Texas depend heavily on Google reviews and local search reputation to attract nearby customers. Echo5 Digital&apos;s ORM service helps Houston-area small and mid-sized businesses monitor their online presence, respond to reviews professionally, and build a stronger local brand reputation that supports their Local SEO and Google Business Profile performance.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span
                className="text-xs font-medium px-3 py-1 rounded-full text-[#E5E7EB]"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                📍 Houston, TX
              </span>
              <span
                className="text-xs font-medium px-3 py-1 rounded-full text-[#E5E7EB]"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                📍 Sugar Land, TX
              </span>
              <span
                className="text-xs font-medium px-3 py-1 rounded-full text-[#E5E7EB]"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                🌐 National U.S.
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="elevated" spacing="md" id="trust-bar" withDivider>
        <div className="text-center mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[#A855F7]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Why Echo5 Digital
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: Bot,
              label: "AI-Assisted Monitoring",
              desc: "24/7 automated coverage across platforms",
            },
            {
              icon: Users,
              label: "Human-Led Strategy",
              desc: "Real team oversight on every action",
            },
            {
              icon: ShieldCheck,
              label: "Ethical Practices Only",
              desc: "Platform-compliant methods, no shortcuts",
            },
            {
              icon: BarChart3,
              label: "Transparent Reporting",
              desc: "Clear metrics delivered on a regular cadence",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <item.icon size={20} color="#A855F7" />
              </div>
              <p
                className="text-sm font-semibold text-[#E5E7EB] mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-xs text-[#9CA3AF]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        {/* NAP — real HTML text, never in image */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#9CA3AF]" style={{ fontFamily: "Inter, sans-serif" }}>
          <a href="tel:713-489-7004" className="flex items-center gap-2 hover:text-[#A855F7] transition-colors">
            {/* Phone number */}
            <CheckCircle size={14} color="#7C3AED" />
            <span>713-489-7004</span>
          </a>
          <a href="mailto:hello@echo5digital.com" className="flex items-center gap-2 hover:text-[#A855F7] transition-colors">
            <CheckCircle size={14} color="#7C3AED" />
            <span>hello@echo5digital.com</span>
          </a>
          <span className="flex items-center gap-2">
            <CheckCircle size={14} color="#7C3AED" />
            <span>Houston / Sugar Land, Texas</span>
          </span>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" id="faq" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            FAQs
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Common Questions About ORM
          </h2>
          <p
            className="text-[#9CA3AF] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Everything you need to know before getting started.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: openFaq === idx
                  ? "1px solid rgba(168,85,247,0.5)"
                  : "1px solid rgba(124,58,237,0.2)",
                background: openFaq === idx
                  ? "rgba(124,58,237,0.08)"
                  : "rgba(255,255,255,0.03)",
              }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span
                  className="text-base font-semibold text-[#E5E7EB]"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: openFaq === idx
                      ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                      : "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  {openFaq === idx ? (
                    <ChevronUp size={16} color="#fff" />
                  ) : (
                    <ChevronDown size={16} color="#A855F7" />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openFaq === idx ? "300px" : "0px",
                }}
              >
                <p
                  className="px-6 pb-6 text-sm text-[#9CA3AF] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA SECTION ── */}
      <Section background="gradient" spacing="xl" id="cta" withDivider>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 50%, transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <AlertCircle size={13} />
              Free Reputation Audit
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB] tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Find Out What the Internet Is Saying About Your Business
            </h2>
            <p
              className="text-[#9CA3AF] text-lg leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book a free reputation audit and strategy call. We&apos;ll review your current review profile, brand mentions, and local search presence — and show you exactly where you stand and how to improve.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Full review profile analysis",
                "Brand mention scan across the web",
                "Local SEO & GBP reputation check",
                "Personalized improvement roadmap",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-[#E5E7EB]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <CheckCircle size={16} color="#A855F7" className="flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-[#9CA3AF]" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="flex items-center gap-1">
                <CheckCircle size={13} color="#7C3AED" />
                No commitment required
              </span>
              <span className="hidden sm:block">·</span>
              <span className="flex items-center gap-1">
                <CheckCircle size={13} color="#7C3AED" />
                Response within 24 hours
              </span>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <ContactForm
              heading="Get Your Free Reputation Audit"
              subheading="Tell us your business name and website, and we'll take a look at your current online reputation."
              submitLabel="Request Free Audit"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}