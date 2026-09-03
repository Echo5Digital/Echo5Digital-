"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Monitor,
  Smartphone,
  LayoutGrid,
  ShoppingBag,
  Megaphone,
  Building2,
  Palette,
  Zap,
  Shield,
  Search,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Code2,
  Globe,
  Layers,
  Cpu,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  TrendingUp,
  Award,
  Stethoscope,
  Wrench,
  Scale,
  Home,
  Truck,
  GraduationCap,
  Utensils,
  Briefcase,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${openIndex === i ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)"}`,
            borderRadius: "0.75rem",
            transition: "border-color 0.2s ease",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              className="font-semibold text-base pr-4"
            >
              {item.question}
            </span>
            <span style={{ color: "#A855F7", flexShrink: 0 }}>
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }} className="text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function WebDesignClient({ faqData }: Props) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}
      >
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
            <Zap size={14} style={{ color: "#A855F7" }} />
            <span style={{ fontFamily: "Inter, sans-serif", color: "#A855F7", fontSize: "0.8125rem", fontWeight: 600 }}>
              Premium Web Design
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Websites That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Convert Visitors
            </span>
            <br />
            Into Customers
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital designs mobile-first, brand-aligned websites for small and mid-sized businesses — engineered for Core Web Vitals, WCAG 2.1 AA accessibility, and SEO from day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.15)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 36px rgba(124,58,237,0.75), 0 6px 18px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)";
              }}
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              style={{
                background: "transparent",
                border: "2px solid rgba(124,58,237,0.5)",
                color: "#E5E7EB",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#A855F7";
                (e.currentTarget as HTMLAnchorElement).style.color = "#A855F7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#E5E7EB";
              }}
            >
              Book a Demo
            </Link>
          </div>

          {/* Hero image */}
          <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 80px rgba(124,58,237,0.2)" }}>
            <img
              src="https://images.pexels.com/photos/16323580/pexels-photo-16323580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital web design showcase — modern, conversion-focused website designs"
              className="w-full object-cover"
              style={{ maxHeight: "420px", objectPosition: "top" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.9) 100%)" }}
            />
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER ─────────────────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 16px rgba(124,58,237,0.5)" }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <h2
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#A855F7" }}
              >
                Quick Answer: What Is Echo5 Digital Web Design?
              </h2>
              <p style={{ color: "rgba(229,231,235,0.85)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed">
                Echo5 Digital offers professional web design services for small and mid-sized businesses in Houston, Sugar Land, Texas, and nationally. Every site is built mobile-first, optimized for Core Web Vitals, and designed to convert visitors into leads. Designs are brand-aligned, WCAG 2.1 AA accessible, and structured to support SEO and AI search from the start.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHAT WE DESIGN ───────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            Our Work
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What We Design
          </h2>
          <p style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            From business websites to high-converting landing pages, we craft every type of digital presence your brand needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: "Business Websites",
              description: "Professional multi-page sites for service businesses, firms, and companies — built to establish credibility and generate leads.",
              badge: "Most Popular",
            },
            {
              icon: LayoutGrid,
              title: "Service Pages",
              description: "Dedicated, SEO-optimized service pages that clearly communicate your offerings and drive qualified inquiries.",
            },
            {
              icon: Megaphone,
              title: "Landing Pages",
              description: "High-converting, campaign-specific landing pages optimized for Google Ads, Meta Ads, and organic traffic.",
            },
            {
              icon: Monitor,
              title: "Industry-Specific Sites",
              description: "Tailored websites for healthcare, legal, home services, real estate, and more — designed with your audience in mind.",
            },
            {
              icon: Smartphone,
              title: "Mobile-First Experiences",
              description: "Every design starts on mobile and expands to desktop — ensuring flawless UX across all screen sizes and devices.",
            },
            {
              icon: ShoppingBag,
              title: "Marketing-Integrated Builds",
              description: "Sites deeply integrated with SEO, Google Ads, CRM systems, and Echo5's AI Marketing Employee for unified growth.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              badge={item.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── DESIGN PHILOSOPHY ────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              Our Approach
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Design Philosophy Built for{" "}
              <span style={{ color: "#A855F7" }}>Performance</span>
            </h2>
            <p style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-6">
              We believe great design isn't just beautiful — it's strategic. Every color, layout decision, and interaction is guided by conversion psychology and brand alignment. Our process starts with understanding your business goals, then translating them into a digital experience that compels action.
            </p>
            <p style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-8">
              We combine premium UI quality with technical excellence — ensuring your site is not only visually stunning but also fast, accessible, and search-engine ready. Every pixel serves a purpose.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Mobile-First", icon: Smartphone },
                { label: "Brand-Aligned", icon: Palette },
                { label: "Conversion-Focused", icon: TrendingUp },
                { label: "UI Excellence", icon: Layers },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <Icon size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB", fontWeight: 600, fontSize: "0.875rem" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}>
            <img
              src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital design process — wireframing and UI design for brand-aligned websites"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ── KEY FEATURES & DELIVERABLES ──────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            Deliverables
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What You Get With Every Build
          </h2>
          <p style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            Every Echo5 Digital website ships with a full suite of quality standards — no shortcuts, no compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: Smartphone,
              title: "Responsive Design",
              desc: "Pixel-perfect layouts across mobile, tablet, and desktop — tested on real devices.",
            },
            {
              icon: Palette,
              title: "Brand-Consistent Visuals",
              desc: "Every design element reflects your brand identity — colors, typography, imagery, and tone.",
            },
            {
              icon: Zap,
              title: "Fast Load Times",
              desc: "Optimized assets, lazy loading, and efficient code ensure sub-second load performance.",
            },
            {
              icon: Shield,
              title: "WCAG 2.1 AA Accessibility",
              desc: "Accessible markup, color contrast, keyboard navigation, and ARIA labels built in by default.",
            },
            {
              icon: Search,
              title: "SEO-Ready Structure",
              desc: "Semantic HTML, proper heading hierarchy, meta tags, and schema markup from day one.",
            },
            {
              icon: BarChart2,
              title: "Core Web Vitals Optimization",
              desc: "LCP, FID, and CLS scores optimized to meet Google's performance thresholds for ranking.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.45)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
              >
                <Icon size={20} style={{ color: "#A855F7" }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", fontWeight: 700 }} className="text-base mb-1">
                  {title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }} className="text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TECHNOLOGY STACK ─────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            Tech Stack
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Built on Modern, Proven Technology
          </h2>
          <p style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            We use the same production-grade stack trusted by leading tech companies — delivering performance, scalability, and maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Next.js 14", detail: "App Router", icon: Globe },
            { name: "TypeScript", detail: "Type-Safe Code", icon: Code2 },
            { name: "Tailwind CSS", detail: "Utility-First Styling", icon: Layers },
            { name: "Next Image", detail: "Optimized Images", icon: Monitor },
            { name: "Next Font", detail: "Performance Fonts", icon: Cpu },
          ].map(({ name, detail, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.55)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(124,58,237,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl mb-3"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
              >
                <Icon size={22} color="#fff" />
              </div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", fontWeight: 700 }} className="text-sm mb-1">
                {name}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.5)" }} className="text-xs">
                {detail}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-5 rounded-2xl text-center"
          style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.7)" }} className="text-sm">
            <strong style={{ color: "#A855F7" }}>Deployment-ready:</strong> Optimized for Vercel with MongoDB-ready architecture, CI/CD pipelines, and edge-network performance baked in.
          </p>
        </div>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How It Works
          </h2>
          <p style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            A clear, collaborative process from first call to launch day — with no surprises.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 80%, transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We learn your goals, audience, competitors, and brand identity through a structured discovery session.",
              },
              {
                step: "02",
                title: "Design Brief",
                desc: "We document your requirements, sitemap, content strategy, and design direction in a detailed brief.",
              },
              {
                step: "03",
                title: "Wireframing",
                desc: "We create low-fidelity wireframes to map user flows, layout structures, and conversion paths.",
              },
              {
                step: "04",
                title: "Design & Revisions",
                desc: "Full visual design with your brand system applied — two revision rounds included.",
              },
              {
                step: "05",
                title: "Handoff & Launch",
                desc: "Development handoff or full build, QA, SEO review, and live deployment — ready to rank.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center relative">
                <div
                  className="flex items-center justify-center w-24 h-24 rounded-full mb-4 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "2px solid rgba(168,85,247,0.4)",
                    boxShadow: "0 0 30px rgba(124,58,237,0.2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step}
                  </span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", fontWeight: 700 }} className="text-base mb-2">
                  {title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }} className="text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INTEGRATION WITH MARKETING ───────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}>
            <img
              src="https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital marketing integration — SEO, Google Ads, and AI marketing connected to website"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              Full-Stack Marketing
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your Website as a{" "}
              <span style={{ color: "#A855F7" }}>Marketing Engine</span>
            </h2>
            <p style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-6">
              Echo5 Digital websites don't just look great — they're built to plug directly into your entire marketing ecosystem. Your new site becomes the hub for all of your growth channels.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Search, label: "SEO & AEO", desc: "Semantic structure and schema markup optimized for Google and AI search engines like ChatGPT and Perplexity." },
                { icon: Megaphone, label: "Google Ads & Meta Ads", desc: "Landing pages built to maximize Quality Score and conversion rates for paid campaigns." },
                { icon: BarChart2, label: "Content Marketing", desc: "Blog architecture, internal linking, and content hubs that drive organic traffic growth over time." },
                { icon: Cpu, label: "AI Marketing Employee", desc: "Seamlessly integrates with Echo5's AI Marketing Employee system for automated lead nurturing and reporting." },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex gap-3">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg mt-0.5"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
                  >
                    <Icon size={16} style={{ color: "#A855F7" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", fontWeight: 700 }} className="text-sm mb-0.5">
                      {label}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }} className="text-sm">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES SERVED ────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            Industries
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Industries We Serve
          </h2>
          <p style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            We bring deep industry context to every design — creating sites that resonate with your specific audience.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { icon: Stethoscope, label: "Healthcare", href: "/industries" },
            { icon: Scale, label: "Legal", href: "/industries" },
            { icon: Home, label: "Real Estate", href: "/industries" },
            { icon: Wrench, label: "Home Services", href: "/industries" },
            { icon: Truck, label: "Logistics", href: "/industries" },
            { icon: GraduationCap, label: "Education", href: "/industries" },
            { icon: Utensils, label: "Restaurants", href: "/industries" },
            { icon: Briefcase, label: "Professional Services", href: "/industries" },
            { icon: ShoppingBag, label: "E-commerce", href: "/industries" },
            { icon: Building2, label: "Finance", href: "/industries" },
          ].map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))", border: "1px solid rgba(168,85,247,0.25)" }}
              >
                <Icon size={18} style={{ color: "#A855F7" }} />
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB", fontWeight: 600, fontSize: "0.8125rem" }}>
                {label}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── TRUST INDICATORS ─────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider>
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {[
            { value: "100+", label: "Websites Launched", icon: Globe },
            { value: "98%", label: "Client Satisfaction", icon: Star },
            { value: "50+", label: "Businesses Served", icon: Users },
            { value: "3x", label: "Avg. Lead Increase", icon: TrendingUp },
          ].map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <Icon size={24} style={{ color: "#A855F7", marginBottom: "0.5rem" }} />
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Businesses Trust Echo5 Digital
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: "Results-First Design",
              desc: "Every design decision is tied to a business outcome. We don't make sites pretty — we make them profitable.",
            },
            {
              icon: Shield,
              title: "Built to Last",
              desc: "We build on modern tech stacks that scale with your business — no page-builder lock-in, no technical debt.",
            },
            {
              icon: CheckCircle2,
              title: "Transparent Process",
              desc: "Regular check-ins, shared project boards, and zero surprise invoices. You're informed at every stage.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
              >
                <Icon size={22} style={{ color: "#A855F7" }} />
              </div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", fontWeight: 700 }} className="text-base mb-2">
                {title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }} className="text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ──────────────────────────────────────────── */}
      <Section background="default" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <div className="flex items-start gap-4">
            <MapPin size={24} style={{ color: "#A855F7", flexShrink: 0, marginTop: "0.2rem" }} />
            <div>
              <h2
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston &amp; Sugar Land, Texas — and Businesses Nationwide
              </h2>
              <p style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-3">
                Echo5 Digital serves businesses in Houston and Sugar Land, Texas with web design that reflects local market needs and is built to rank in local search results. Whether you are a Houston-area service business, healthcare provider, or professional firm, Echo5 Digital creates sites designed to attract and convert your local audience.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="tel:713-489-7004"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={16} /> 713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={16} /> hello@echo5digital.com
                </a>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  <MapPin size={16} style={{ color: "#7C3AED" }} /> Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            Everything you need to know about Echo5 Digital's web design services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqData} />
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ──────────────────────────────────────────── */}
      <Section background="default" spacing="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              Get Started
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Ready for a Website That{" "}
              <span style={{ color: "#A855F7" }}>Actually Works?</span>
            </h2>
            <p style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-8">
              Tell us about your business and goals. Our team will review your current site (if you have one) and prepare a custom proposal — no commitment required.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free website audit included",
                "Custom proposal within 48 hours",
                "No long-term contracts required",
                "Houston-based team, U.S.-wide service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.8)" }} className="text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {/* Phone — real verified number */}
              <a
                href="tel:713-489-7004"
                className="flex items-center gap-3 text-base font-semibold transition-colors"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
              >
                <Phone size={18} /> 713-489-7004
              </a>
              {/* Email — real verified email */}
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-3 text-base font-semibold transition-colors"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
              >
                <Mail size={18} /> hello@echo5digital.com
              </a>
              <span
                className="flex items-center gap-3 text-sm"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                <MapPin size={16} style={{ color: "#7C3AED" }} />
                Houston / Sugar Land, Texas
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm
              heading="Get Your Free Web Design Quote"
              subheading="Tell us about your project and we'll put together a custom proposal tailored to your goals."
              submitLabel="Send My Request"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}