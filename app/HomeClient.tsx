"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import {
  Bot,
  Search,
  Globe,
  Megaphone,
  BarChart3,
  Code2,
  Users,
  Zap,
  ChevronDown,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Eye,
  TrendingUp,
  Layers,
  Shield,
  Smile,
  Home,
  HeartPulse,
  Wrench,
  Building2,
  Dumbbell,
  Landmark,
  UtensilsCrossed,
  ShoppingBag,
  Car,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface HomeClientProps {
  faqData: FAQItem[];
}

export default function HomeClient({ faqData }: HomeClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)",
          minHeight: "100vh",
        }}
      >
        {/* Ambient glow blobs */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
              }}
            >
              <Zap size={12} />
              AI-Powered Digital Marketing Agency · Houston, TX
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your AI Marketing
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Growth Engine
              </span>
              <br />
              Is Here.
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: "#9CA3AF" }}
            >
              Done-for-you SEO, AEO, Google Ads, social media, and web development — powered by
              agentic AI with real human oversight. Serving Houston, Sugar Land, and businesses
              nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.3)",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Book a Free Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "2px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                View Plans
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 w-full max-w-lg">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 60px rgba(124,58,237,0.35)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/29506609/pexels-photo-29506609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI-powered digital marketing dashboard for Echo5 Digital clients"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER ─────────────────────────────────────────────── */}
      <Section background="elevated" spacing="sm" maxWidth="2xl">
        <div
          className="rounded-xl border px-6 py-4"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <p className="text-sm" style={{ color: "#A855F7", fontWeight: 600, marginBottom: "0.25rem" }}>
            Quick Answer
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#D1D5DB" }}>
            Echo5 Digital is an AI-powered digital marketing agency headquartered in Houston and Sugar Land,
            Texas. They offer done-for-you marketing services including SEO, AEO, Google Ads, social media,
            content, and web development, powered by an agentic AI growth system with human oversight. They
            serve small and mid-sized businesses in Houston, across Texas, and nationally.
          </p>
        </div>
      </Section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <Section background="elevated" spacing="sm" maxWidth="2xl" withDivider>
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "#6B7280" }}
        >
          Trusted Platforms &amp; Technologies We Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { label: "Google Ads", icon: <BarChart3 size={22} style={{ color: "#A855F7" }} /> },
            { label: "Meta Business", icon: <Megaphone size={22} style={{ color: "#A855F7" }} /> },
            { label: "WordPress", icon: <Globe size={22} style={{ color: "#A855F7" }} /> },
            { label: "HubSpot", icon: <Users size={22} style={{ color: "#A855F7" }} /> },
            { label: "OpenAI", icon: <Brain size={22} style={{ color: "#A855F7" }} /> },
            { label: "Semrush", icon: <Search size={22} style={{ color: "#A855F7" }} /> },
            { label: "Shopify", icon: <ShoppingBag size={22} style={{ color: "#A855F7" }} /> },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-5 py-3 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {item.icon}
              <span className="text-sm font-medium" style={{ color: "#9CA3AF" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <Section background="default" spacing="md" maxWidth="2xl">
        {/* Representative placeholders — not verified client data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "300+", label: "Campaigns Launched", note: "representative" },
            { value: "4.8×", label: "Average ROAS", note: "representative" },
            { value: "85%", label: "Clients Who Scale Up", note: "representative" },
            { value: "24/7", label: "AI Monitoring", note: "" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center rounded-2xl py-8 px-4"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.22)",
              }}
            >
              <span
                className="text-4xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </span>
              <span className="text-sm font-medium" style={{ color: "#D1D5DB" }}>
                {stat.label}
              </span>
              {stat.note && (
                <span className="text-xs mt-1" style={{ color: "#6B7280" }}>
                  ({stat.note})
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS THE AI MARKETING EMPLOYEE ───────────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
              }}
            >
              <Bot size={12} /> Flagship Product
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Meet the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Marketing Employee
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
              Imagine having a tireless marketing expert working for your business around the clock —
              executing SEO, creating content, optimizing ads, and engaging on social media — all while
              your human Echo5 team supervises every move. That&apos;s our AI Marketing Employee.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Fully done-for-you — no learning curve",
                "Agentic AI that acts, adapts, and improves daily",
                "Human strategists overseeing every output",
                "One unified dashboard to track all results",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: "#A855F7", flexShrink: 0, marginTop: 2 }} />
                  <span className="text-sm" style={{ color: "#D1D5DB" }}>
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
                boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              Learn More <ArrowRight size={15} />
            </Link>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(168,85,247,0.25)",
                boxShadow: "0 0 50px rgba(124,58,237,0.3)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/8294650/pexels-photo-8294650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Illustration of an AI marketing employee executing digital marketing tasks"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How It Works
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            A simple 4-step process that combines agentic AI execution with expert human oversight to
            deliver continuous, compounding growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Onboard & Strategize",
              desc: "We audit your brand, goals, and competition, then build your custom AI growth strategy.",
              icon: <Brain size={24} style={{ color: "#A855F7" }} />,
            },
            {
              step: "02",
              title: "AI Executes Daily",
              desc: "Our agentic AI system runs content, ads, SEO, and social tasks autonomously every day.",
              icon: <Bot size={24} style={{ color: "#A855F7" }} />,
            },
            {
              step: "03",
              title: "Humans Oversee & Refine",
              desc: "Your dedicated Echo5 team reviews every output, applies strategic refinements, and ensures quality.",
              icon: <Eye size={24} style={{ color: "#A855F7" }} />,
            },
            {
              step: "04",
              title: "You See Results",
              desc: "Monitor real-time KPIs in your personal dashboard and watch your growth compound month over month.",
              icon: <TrendingUp size={24} style={{ color: "#A855F7" }} />,
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              {i < 3 && (
                <div
                  className="hidden lg:flex absolute top-10 -right-3 z-10 items-center justify-center w-6 h-6 rounded-full"
                  style={{ background: "rgba(124,58,237,0.3)" }}
                >
                  <ChevronRight size={14} style={{ color: "#A855F7" }} />
                </div>
              )}
              <div
                className="text-xs font-bold mb-4 px-2 py-1 rounded-full w-fit"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  color: "#A855F7",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {item.step}
              </div>
              <div className="mb-3">{item.icon}</div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Our Core Services
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            Every service is AI-accelerated and human-guided for maximum impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <Search size={22} style={{ color: "#A855F7" }} />,
              title: "SEO & AEO",
              desc: "Rank on Google and answer engine results with AI-optimized content strategies and technical SEO.",
              href: "/services/seo",
            },
            {
              icon: <Megaphone size={22} style={{ color: "#A855F7" }} />,
              title: "Google Ads (PPC)",
              desc: "Data-driven paid search campaigns that maximize ROI and scale your leads predictably.",
              href: "/services/google-ads",
            },
            {
              icon: <Globe size={22} style={{ color: "#A855F7" }} />,
              title: "Social Media Marketing",
              desc: "AI-powered content calendars, community management, and paid social for every major platform.",
              href: "/services/social-media-marketing",
            },
            {
              icon: <Code2 size={22} style={{ color: "#A855F7" }} />,
              title: "Web Design & Development",
              desc: "High-converting, fast, accessible websites and web apps built with modern technologies.",
              href: "/services/web-design",
            },
            {
              icon: <Users size={22} style={{ color: "#A855F7" }} />,
              title: "CRM & Automation",
              desc: "Streamline your sales pipeline with AI-powered CRM setup, automation flows, and lead nurturing.",
              href: "/services/crm-automation",
            },
            {
              icon: <Layers size={22} style={{ color: "#A855F7" }} />,
              title: "Custom Programming",
              desc: "Bespoke software, integrations, APIs, and automation tools tailored to your business logic.",
              href: "/services/custom-programming",
            },
          ].map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.22)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                {service.icon}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#9CA3AF" }}>
                {service.desc}
              </p>
              <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "#A855F7" }}>
                Learn more <ChevronRight size={13} />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-purple-900/20"
            style={{
              border: "2px solid rgba(124,58,237,0.4)",
              color: "#A855F7",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            View All Solutions <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE PRODUCT TIERS ─────────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AI Marketing Employee Tiers
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            Choose the growth level that fits your business. All plans include AI execution and human oversight.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              tagline: "SEO + AEO Foundation",
              color: "#7C3AED",
              features: [
                "AI-driven on-page SEO",
                "Answer Engine Optimization",
                "Monthly content publishing",
                "Performance dashboard",
                "Human strategy review",
              ],
              cta: "Get Started",
              popular: false,
            },
            {
              name: "Growth",
              tagline: "SEO + Social + Google Ads",
              color: "#A855F7",
              features: [
                "Everything in Starter",
                "AI social media management",
                "Google Ads management",
                "Weekly reporting",
                "Dedicated account manager",
              ],
              cta: "Most Popular",
              popular: true,
            },
            {
              name: "Scale",
              tagline: "Full AI Growth System",
              color: "#7C3AED",
              features: [
                "Everything in Growth",
                "Meta Ads management",
                "CRM & automation setup",
                "Custom content strategy",
                "Priority human support",
              ],
              cta: "Go Full Scale",
              popular: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-2xl p-7"
              style={{
                background: tier.popular
                  ? "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(168,85,247,0.14) 100%)"
                  : "rgba(255,255,255,0.04)",
                border: tier.popular
                  ? "2px solid rgba(168,85,247,0.55)"
                  : "1px solid rgba(124,58,237,0.25)",
                boxShadow: tier.popular ? "0 0 40px rgba(124,58,237,0.3)" : "none",
              }}
            >
              {tier.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  Most Popular
                </div>
              )}
              <h3
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {tier.name}
              </h3>
              <p className="text-sm mb-6" style={{ color: "#A855F7" }}>
                {tier.tagline}
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle size={15} style={{ color: "#A855F7", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm" style={{ color: "#D1D5DB" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="w-full py-3 rounded-full text-center text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 block"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 18px rgba(124,58,237,0.4)",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {tier.cta} →
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-6" style={{ color: "#6B7280" }}>
          Full pricing and plan details available on the{" "}
          <Link href="/pricing" style={{ color: "#A855F7" }}>
            Pricing page
          </Link>
          .
        </p>
      </Section>

      {/* ── INDUSTRIES GRID ──────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Industries We Serve
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            We tailor AI marketing strategies for the unique needs of each industry.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { label: "Dental & Orthodontics", icon: <Smile size={22} style={{ color: "#A855F7" }} />, href: "/industries/dental" },
            { label: "Healthcare", icon: <HeartPulse size={22} style={{ color: "#A855F7" }} />, href: "/industries/healthcare" },
            { label: "Home Services", icon: <Home size={22} style={{ color: "#A855F7" }} />, href: "/industries/home-services" },
            { label: "Roofing & Construction", icon: <Wrench size={22} style={{ color: "#A855F7" }} />, href: "/industries/roofing" },
            { label: "Fitness & Wellness", icon: <Dumbbell size={22} style={{ color: "#A855F7" }} />, href: "/industries/fitness" },
            { label: "Real Estate", icon: <Building2 size={22} style={{ color: "#A855F7" }} />, href: "/industries/real-estate" },
            { label: "Legal Services", icon: <Landmark size={22} style={{ color: "#A855F7" }} />, href: "/industries/legal" },
            { label: "Restaurants & Food", icon: <UtensilsCrossed size={22} style={{ color: "#A855F7" }} />, href: "/industries/restaurants" },
            { label: "Automotive", icon: <Car size={22} style={{ color: "#A855F7" }} />, href: "/industries/automotive" },
            { label: "E-Commerce", icon: <ShoppingBag size={22} style={{ color: "#A855F7" }} />, href: "/industries/ecommerce" },
            { label: "Professional Services", icon: <Shield size={22} style={{ color: "#A855F7" }} />, href: "/industries" },
            { label: "Retail & Consumer", icon: <Star size={22} style={{ color: "#A855F7" }} />, href: "/industries" },
          ].map((ind) => (
            <Link
              key={ind.label}
              href={ind.href}
              className="group flex flex-col items-center text-center gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                {ind.icon}
              </div>
              <span className="text-xs font-semibold leading-snug" style={{ color: "#D1D5DB" }}>
                {ind.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-purple-900/20"
            style={{
              border: "2px solid rgba(124,58,237,0.4)",
              color: "#A855F7",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            View All Industries <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ── INTERNAL GROWTH SYSTEM DIAGRAM ───────────────────────────── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            The Echo5 Growth System
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            Our AI systems, human team, and your client dashboard work together in a closed-loop
            growth engine — continuously learning and improving.
          </p>
        </div>
        <div className="relative flex flex-col items-center gap-0">
          {/* Diagram nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {[
              {
                label: "AI Engine",
                sublabel: "Executes SEO, ads, content & social 24/7",
                icon: <Bot size={28} style={{ color: "#A855F7" }} />,
                glow: true,
              },
              {
                label: "Human Team",
                sublabel: "Strategists & editors review, refine, and guide all outputs",
                icon: <Users size={28} style={{ color: "#A855F7" }} />,
                glow: false,
              },
              {
                label: "Client Dashboard",
                sublabel: "Real-time KPIs, reports, and transparent performance tracking",
                icon: <BarChart3 size={28} style={{ color: "#A855F7" }} />,
                glow: false,
              },
            ].map((node, i) => (
              <div key={node.label} className="relative flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "2px solid rgba(168,85,247,0.4)",
                    boxShadow: node.glow ? "0 0 30px rgba(124,58,237,0.4)" : "none",
                  }}
                >
                  {node.icon}
                </div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {node.label}
                </h3>
                <p className="text-xs leading-relaxed max-w-xs" style={{ color: "#9CA3AF" }}>
                  {node.sublabel}
                </p>
                {/* Arrow between nodes on md+ */}
                {i < 2 && (
                  <div
                    className="hidden md:flex absolute top-10 -right-3 items-center justify-center w-6 h-6 rounded-full"
                    style={{ background: "rgba(124,58,237,0.2)", right: "-1.5rem" }}
                  >
                    <ArrowRight size={13} style={{ color: "#A855F7" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom connector label */}
          <div
            className="mt-8 px-6 py-3 rounded-full text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(168,85,247,0.1))",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#D1D5DB",
            }}
          >
            🔄 Closed-loop system: every result feeds back to improve AI performance
          </div>
        </div>
      </Section>

      {/* ── RESULTS / CASE STUDIES PREVIEW ──────────────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
            }}
          >
            Representative Examples
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            The Types of Results We Drive
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            These are representative examples of the outcomes our AI Marketing Employee system is
            designed to deliver. Results vary by business, industry, and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              industry: "Dental Practice",
              location: "Houston, TX",
              metric: "+320% organic traffic",
              desc: "After 6 months of AI-driven SEO + AEO, a local dental practice saw a dramatic increase in search visibility and new patient inquiries.",
              tags: ["SEO", "AEO", "Local Search"],
            },
            {
              industry: "Home Services Company",
              location: "Sugar Land, TX",
              metric: "4.5× Google Ads ROAS",
              desc: "An AI-optimized Google Ads campaign for a home services company resulted in a 4.5× return on ad spend within the first 90 days.",
              tags: ["Google Ads", "PPC"],
            },
            {
              industry: "Fitness Studio",
              location: "National",
              metric: "+180% social engagement",
              desc: "AI-generated social content and paid social campaigns drove a 180% uplift in engagement and a measurable increase in membership sign-ups.",
              tags: ["Social Media", "Meta Ads"],
            },
          ].map((cs) => (
            <div
              key={cs.industry}
              className="flex flex-col rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(124,58,237,0.2)", color: "#A855F7" }}>
                  {cs.industry}
                </span>
                <span className="text-xs" style={{ color: "#6B7280" }}>{cs.location}</span>
              </div>
              <p
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {cs.metric}
              </p>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#9CA3AF" }}>
                {cs.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(168,85,247,0.2)",
                      color: "#D1D5DB",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-6" style={{ color: "#6B7280" }}>
          *Representative examples. Individual results will vary based on business, budget, and market conditions.
        </p>
        <div className="text-center mt-4">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-110 text-white"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 18px rgba(124,58,237,0.4)",
            }}
          >
            View All Results <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ── HUMAN TEAM SECTION ───────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(168,85,247,0.2)",
                boxShadow: "0 0 40px rgba(124,58,237,0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/8154578/pexels-photo-8154578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="The Echo5 Digital human team of strategists and marketers overseeing AI-driven campaigns"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
              }}
            >
              <Shield size={12} /> Human Accountability
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              AI Does the Work.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Humans Hold the Wheel.
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
              Every campaign, every piece of content, and every ad dollar is supervised by a real
              strategist on our team. We combine the speed and scale of AI with the judgment,
              creativity, and accountability of experienced marketing professionals.
            </p>
            <ul className="space-y-3">
              {[
                "Dedicated human account manager for every client",
                "Strategic oversight on all AI-generated content",
                "Transparent communication and regular check-ins",
                "Ethical AI use — no black-box decision-making",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={17} style={{ color: "#A855F7", flexShrink: 0, marginTop: 2 }} />
                  <span className="text-sm" style={{ color: "#D1D5DB" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ──────────────────────────────────────────── */}
      <Section background="default" spacing="md" maxWidth="2xl">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <h2
            className="text-2xl font-bold mb-3 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Serving Houston, Sugar Land &amp; Beyond
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#9CA3AF" }}>
            Echo5 Digital is based in Houston and Sugar Land, Texas, making us a trusted local digital
            marketing partner for businesses across the Greater Houston metro. Our primary service area
            covers Houston and Sugar Land, with national U.S. coverage and operations support from
            Kochi, Kerala, India.
          </p>
          <address className="not-italic flex flex-col sm:flex-row flex-wrap gap-4 text-sm">
            <span style={{ color: "#D1D5DB" }}>
              📍 <strong>Location:</strong> Houston / Sugar Land, Texas
            </span>
            {/* Phone verified fact */}
            <a href="tel:713-489-7004" style={{ color: "#D1D5DB", textDecoration: "none" }}>
              📞 <strong>Phone:</strong> 713-489-7004
            </a>
            <a href="mailto:hello@echo5digital.com" style={{ color: "#D1D5DB", textDecoration: "none" }}>
              ✉️ <strong>Email:</strong> hello@echo5digital.com
            </a>
          </address>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ────────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" maxWidth="lg" withDivider>
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base" style={{ color: "#9CA3AF" }}>
            Everything you need to know about Echo5 Digital and our AI marketing approach.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openFaq === index
                  ? "linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(168,85,247,0.08) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: openFaq === index
                  ? "1px solid rgba(168,85,247,0.4)"
                  : "1px solid rgba(124,58,237,0.22)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "#A855F7",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                style={{
                  maxHeight: openFaq === index ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA / LEAD FORM ────────────────────────────────────── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl" withDivider>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="flex-1 lg:pt-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
              }}
            >
              <Zap size={12} /> Let&apos;s Grow Together
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Ready to Put AI
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                to Work for You?
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9CA3AF" }}>
              Book a free strategy demo and discover exactly how Echo5 Digital&apos;s AI Marketing
              Employee can grow your business — no commitment required.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Free 30-minute strategy demo",
                "No contracts, cancel anytime",
                "Results-focused — we win when you win",
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#D1D5DB" }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
            {/* NAP */}
            <div className="space-y-2 text-sm">
              <p style={{ color: "#9CA3AF" }}>
                Or reach us directly:
              </p>
              {/* Verified phone */}
              <a href="tel:713-489-7004" className="block" style={{ color: "#A855F7" }}>
                📞 713-489-7004
              </a>
              <a href="mailto:hello@echo5digital.com" className="block" style={{ color: "#A855F7" }}>
                ✉️ hello@echo5digital.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full">
            {/* Hidden UTM fields would be wired server-side; ContactForm handles the visible form */}
            <ContactForm
              heading="Book Your Free Demo"
              subheading="Tell us about your business and goals. We'll reach out within 24 hours."
              submitLabel="Send My Request"
              showAppointmentNote
            />
          </div>
        </div>
      </Section>
    </main>
  );
}