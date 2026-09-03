"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Search,
  Star,
  Building2,
  Link2,
  FileText,
  Bot,
  ClipboardList,
  BarChart3,
  Shield,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Eye,
  RefreshCw,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function LocalSEOClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
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
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/18462227/pexels-photo-18462227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Houston Texas city skyline at night"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(17,13,46,0.88) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            <MapPin size={14} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
              Houston &amp; Sugar Land, Texas
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Dominate{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Local Search
            </span>{" "}
            in Houston &amp; Sugar Land
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital delivers AI-powered local SEO services that put your business
            at the top of Google's map pack and local results — so nearby customers find
            you first, not your competitors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#lead-form"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Demo
            </a>
            <a
              href="#what-is-local-seo"
              className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-purple-500/10"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" id="quick-answer">
        <div
          className="rounded-2xl p-6 md:p-8 border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            borderColor: "rgba(124,58,237,0.35)",
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
              <Search size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Local SEO is the practice of optimizing a business's online presence to rank in
                geographically relevant searches and Google's local map pack. Echo5 Digital
                provides AI-powered local SEO services for small and mid-sized businesses in
                Houston, Sugar Land, and across Texas. Services include Google Business Profile
                optimization, local citation management, geo-targeted keyword strategy, and
                local link building. Echo5 Digital serves both local Texas clients and national
                U.S. businesses.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm" withDivider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <MapPin size={20} className="text-purple-400" />,
              label: "Primary Service Area",
              value: "Houston & Sugar Land, TX",
            },
            {
              icon: <Globe size={20} className="text-purple-400" />,
              label: "Also Available",
              value: "Nationwide U.S. Clients",
            },
            {
              icon: <Bot size={20} className="text-purple-400" />,
              label: "Methodology",
              value: "AI-Powered + Human Oversight",
            },
            {
              icon: <Star size={20} className="text-purple-400" />,
              label: "Client Focus",
              value: "SMBs & Mid-Market Businesses",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
              >
                {item.icon}
              </div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                {item.label}
              </p>
              <p className="text-sm font-semibold" style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS LOCAL SEO ── */}
      <Section background="gradient" spacing="lg" id="what-is-local-seo" withDivider>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
              Understanding Local SEO
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              What Is Local SEO &amp; Why Does It Matter?
            </h2>
            <div className="space-y-4" style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF" }}>
              <p className="text-base leading-relaxed">
                Local SEO is a specialized branch of search engine optimization that focuses on
                helping businesses appear prominently when people search for products or services
                near them — for example, "dentist near me" or "roofing company Houston."
              </p>
              <p className="text-base leading-relaxed">
                Unlike general SEO, which competes for national or global rankings, local SEO
                targets Google's local map pack, Google Business Profile listings, and
                geo-targeted organic results. It's designed specifically for businesses that
                serve customers in a defined geographic area.
              </p>
              <p className="text-base leading-relaxed">
                For small and mid-sized businesses in Houston and Sugar Land, local SEO is one
                of the highest-ROI digital marketing strategies available — putting your business
                in front of customers exactly when they're ready to buy, visit, or call.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Local business owner reviewing Google local search rankings on a laptop"
              className="w-full h-72 md:h-96 object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.85)",
                border: "1px solid rgba(124,58,237,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Local Map Pack Visibility
              </p>
              <p className="text-xs" style={{ color: "#9CA3AF" }}>
                93% of local searches result in a map pack display — be there when it counts.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CORE LOCAL SEO SERVICES ── */}
      <Section background="elevated" spacing="lg" id="services" withDivider>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            What We Deliver
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Core Local SEO Services
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            A comprehensive suite of local SEO strategies built to put your Houston or Sugar
            Land business at the top of every relevant local search.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: "Google Business Profile Optimization",
              description:
                "We fully optimize your GBP listing — categories, attributes, photos, posts, Q&A, and service areas — to maximize map pack visibility and click-through rates.",
              badge: "High Impact",
            },
            {
              icon: Link2,
              title: "Local Citation Building",
              description:
                "We build and audit consistent NAP citations across directories like Yelp, YellowPages, and industry-specific platforms to reinforce your local authority.",
            },
            {
              icon: Search,
              title: "Geo-Targeted Keyword Strategy",
              description:
                "We identify high-intent, location-specific keywords for Houston and Sugar Land, then integrate them into your site architecture, content, and metadata.",
            },
            {
              icon: Globe,
              title: "Local Link Building",
              description:
                "We earn backlinks from locally relevant Houston and Sugar Land sources — chambers of commerce, local news, and industry directories — to boost domain authority.",
            },
            {
              icon: FileText,
              title: "On-Page Local Signals",
              description:
                "We embed schema markup, geo-tagged content, and local landing pages that tell search engines exactly where you serve and what you offer.",
            },
            {
              icon: Star,
              title: "Review Generation & Management",
              description:
                "We implement review request workflows to grow your Google ratings and monitor review sentiment, helping you build trust with local searchers.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              variant="service"
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
            />
          ))}
        </div>
      </Section>

      {/* ── AI-POWERED ADVANTAGE ── */}
      <Section background="gradient" spacing="lg" id="ai-advantage" withDivider>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/32026165/pexels-photo-32026165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered local SEO analytics dashboard showing automated audit and citation monitoring"
              className="w-full h-72 md:h-96 object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,15,30,0.5) 0%, transparent 60%)",
              }}
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Bot size={14} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
                AI-Powered
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              The Echo5 Digital AI Advantage
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
              Our agentic AI system supercharges every local SEO workflow — from automated
              technical audits to real-time citation monitoring — while experienced strategists
              ensure every decision meets your business goals.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: <ClipboardList size={16} className="text-purple-400" />,
                  title: "Automated Local SEO Audits",
                  desc: "AI continuously scans your local presence for gaps, inconsistencies, and opportunities — flagging issues before they hurt rankings.",
                },
                {
                  icon: <Eye size={16} className="text-purple-400" />,
                  title: "Citation Monitoring",
                  desc: "Real-time tracking across hundreds of directories to detect and correct NAP inconsistencies that erode local authority.",
                },
                {
                  icon: <Star size={16} className="text-purple-400" />,
                  title: "Review Signal Tracking",
                  desc: "Automated monitoring of review velocity, sentiment, and response times across Google and other platforms.",
                },
                {
                  icon: <BarChart3 size={16} className="text-purple-400" />,
                  title: "Performance Reporting",
                  desc: "AI-generated reports surfacing ranking movement, map pack appearances, and call/direction metrics with human-curated strategic insights.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="elevated" spacing="lg" id="how-it-works" withDivider>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            How It Works
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            A proven, step-by-step process that combines AI execution with human strategic
            oversight to deliver consistent local ranking improvements.
          </p>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 15%, rgba(168,85,247,0.4) 85%, transparent)",
              top: "2.5rem",
            }}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: <Users size={20} className="text-purple-400" />,
                title: "Discovery & Onboarding",
                desc: "We learn your business, competitive landscape, and goals. AI audits your existing local presence for a baseline.",
              },
              {
                step: "02",
                icon: <Search size={20} className="text-purple-400" />,
                title: "Strategy & Keyword Mapping",
                desc: "Human strategists build a geo-targeted keyword plan and identify the highest-value local opportunities for Houston and Sugar Land.",
              },
              {
                step: "03",
                icon: <Zap size={20} className="text-purple-400" />,
                title: "AI-Driven Implementation",
                desc: "Our agentic AI executes citation building, on-page optimization, GBP updates, and schema markup — with expert review at every step.",
              },
              {
                step: "04",
                icon: <TrendingUp size={20} className="text-purple-400" />,
                title: "Monitor, Report & Improve",
                desc: "Continuous AI monitoring surfaces ranking changes and opportunities. Monthly human-curated reports keep you informed and in control.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col p-6 rounded-2xl border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.25)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-xs font-bold mb-2"
                  style={{ color: "#7C3AED", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Step {item.step}
                </span>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICE AREA COVERAGE ── */}
      <Section background="default" spacing="lg" id="service-area" withDivider>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            Where We Serve
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Service Area Coverage
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            Echo5 Digital's local SEO services are specifically designed for businesses in
            Houston and Sugar Land, Texas. We also serve national U.S. clients needing
            geo-targeted local SEO for their markets.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <MapPin size={24} className="text-purple-400" />,
              area: "Houston, Texas",
              description:
                "Our primary market. We specialize in helping Houston businesses dominate local search across all major Houston neighborhoods and districts.",
              highlight: true,
            },
            {
              icon: <MapPin size={24} className="text-purple-400" />,
              area: "Sugar Land, Texas",
              description:
                "Deep expertise in Sugar Land's competitive local market, helping businesses capture nearby Fort Bend County customers actively searching online.",
              highlight: true,
            },
            {
              icon: <Globe size={24} className="text-purple-400" />,
              area: "National U.S. Availability",
              description:
                "While Texas is our home, Echo5 Digital delivers local SEO services to clients across the United States — any city, any market.",
              highlight: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl border"
              style={{
                background: item.highlight
                  ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)"
                  : "rgba(255,255,255,0.03)",
                borderColor: item.highlight
                  ? "rgba(124,58,237,0.4)"
                  : "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.area}
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

        {/* Local Relevance / NAP */}
        <div
          className="mt-10 p-6 rounded-2xl border"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderColor: "rgba(124,58,237,0.2)",
          }}
        >
          <h3
            className="text-base font-bold mb-3"
            style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Serving Houston &amp; Sugar Land Businesses
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            Echo5 Digital's local SEO services are specifically designed for businesses in
            Houston and Sugar Land, Texas, helping them appear prominently when nearby
            customers search for products or services. The agency's primary service area
            covers Houston and Sugar Land, TX, with national U.S. availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            <address className="not-italic flex items-center gap-2" style={{ color: "#9CA3AF" }}>
              <MapPin size={14} className="text-purple-400 flex-shrink-0" />
              <span>Houston / Sugar Land, Texas</span>
            </address>
            <a
              href="tel:713-489-7004"
              className="flex items-center gap-2 hover:text-white transition-colors"
              style={{ color: "#9CA3AF" }}
            >
              <Shield size={14} className="text-purple-400 flex-shrink-0" />
              <span>713-489-7004</span>
            </a>
            <a
              href="mailto:hello@echo5digital.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
              style={{ color: "#9CA3AF" }}
            >
              <RefreshCw size={14} className="text-purple-400 flex-shrink-0" />
              <span>hello@echo5digital.com</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── INTERNAL LINKS ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            Related Services
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Explore More Echo5 Digital Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              href: "/services/google-business-profile",
              title: "Google Business Profile",
              desc: "Full GBP optimization and management to maximize map pack visibility and local credibility.",
              icon: <Building2 size={18} className="text-purple-400" />,
            },
            {
              href: "/services/seo",
              title: "SEO & AEO",
              desc: "Broader search engine optimization and answer engine optimization to grow organic visibility across Google and AI search.",
              icon: <Search size={18} className="text-purple-400" />,
            },
            {
              href: "/services/content-marketing",
              title: "Content Marketing",
              desc: "AI-assisted content strategies that build local authority and drive qualified traffic to your Houston or Sugar Land business.",
              icon: <FileText size={18} className="text-purple-400" />,
            },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="group flex flex-col p-5 rounded-xl border transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.22)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.22)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(168,85,247,0.25)" }}
              >
                {link.icon}
              </div>
              <h3
                className="text-base font-bold mb-1.5 group-hover:text-purple-400 transition-colors"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {link.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              >
                {link.desc}
              </p>
              <div className="flex items-center gap-1 mt-3 text-xs font-medium" style={{ color: "#A855F7" }}>
                Learn more <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="gradient" spacing="lg" id="faq" withDivider>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            Common Questions
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Local SEO FAQ
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            Answers to the most common questions about local SEO and how Echo5 Digital
            can help your Houston or Sugar Land business grow.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: openFaq === index ? "rgba(168,85,247,0.45)" : "rgba(124,58,237,0.22)",
                background:
                  openFaq === index
                    ? "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)"
                    : "rgba(255,255,255,0.03)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-all duration-200"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span
                  className="text-sm md:text-base font-semibold pr-4"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0" style={{ color: "#A855F7" }}>
                  {openFaq === index ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-5 pb-5"
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── LEAD FORM CTA ── */}
      <Section background="elevated" spacing="lg" id="lead-form" withDivider>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}>
            Get Started Today
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Book Your Free Local SEO Demo
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-2" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
            Ready to dominate local search in Houston and Sugar Land? Fill out the form below
            or contact us directly — our team will respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            <a
              href="tel:713-489-7004"
              className="flex items-center gap-2 hover:text-white transition-colors"
              style={{ color: "#A855F7" }}
            >
              <CheckCircle size={14} />
              <span>713-489-7004</span>
            </a>
            <a
              href="mailto:hello@echo5digital.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
              style={{ color: "#A855F7" }}
            >
              <CheckCircle size={14} />
              <span>hello@echo5digital.com</span>
            </a>
          </div>
        </div>

        {/* Hidden UTM fields via a wrapper form note */}
        <ContactForm
          heading="Start Ranking Locally"
          subheading="Tell us about your business and we'll show you exactly how Echo5 Digital can help you dominate local search in Houston and Sugar Land, TX."
          submitLabel="Book My Free Demo"
          showAppointmentNote={true}
        />
      </Section>
    </main>
  );
}