"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import { FocusPullHero, PrismReveal, MagnetPop, LavenderField, PeelCard, FloatDrift } from "@/components/SolutionsFX";
import { TiltCard } from "@/components/ScrollFX";
import { motion } from "framer-motion";
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
        <motion.div
          key={i}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${openIndex === i ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)"}`,
            borderRadius: "0.75rem",
            transition: "border-color 0.2s ease",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: (i % 6) * 0.06 }}
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
        </motion.div>
      ))}
    </div>
  );
}

const trustSignals = [
  {
    icon: Award,
    title: "Results-First Design",
    desc: "Every design decision is tied to a business outcome. We don't make sites pretty — we make them profitable.",
    image: "/focused-businessman-showing-corporate-graphs-presentation-using-tablet-working-company-ideas-100kb.jpg",
    alt: "Presenter holding a tablet showing bar and pie charts to colleagues",
  },
  {
    icon: Shield,
    title: "Built to Last",
    desc: "We build on modern tech stacks that scale with your business — no page-builder lock-in, no technical debt.",
    image: "/modern-equipped-computer-lab-100kb.jpg",
    alt: "Development team working on laptops with a dashboard displayed on a wall monitor",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Process",
    desc: "Regular check-ins, shared project boards, and zero surprise invoices. You're informed at every stage.",
    image: "/crop-hands-using-laptop-office-80kb.jpg",
    alt: "Close-up of hands typing on a laptop showing a project data chart",
  },
];

function TrustSignalsList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ borderTop: "1px solid rgba(124,58,237,0.25)" }}>
      {trustSignals.map(({ icon: Icon, title, desc, image, alt }, i) => {
        const isActive = activeIndex === i;
        return (
          <motion.div
            key={title}
            className="group relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 py-10 md:py-12 cursor-pointer"
            style={{ borderBottom: "1px solid rgba(124,58,237,0.25)" }}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
          >
            {/* Thumbnail — always visible on mobile, expands into the row on hover on desktop */}
            <div className="sm:hidden overflow-hidden rounded-2xl flex-shrink-0 w-full h-48" style={{ border: "1px solid rgba(168,85,247,0.3)" }}>
              <img src={image} alt={alt} className="w-full h-full object-cover" />
            </div>
            <div
              className="hidden sm:block overflow-hidden rounded-2xl flex-shrink-0 transition-all duration-500 ease-out h-36 md:h-40"
              style={{
                width: isActive ? 220 : 0,
                border: isActive ? "1px solid rgba(168,85,247,0.3)" : "none",
                boxShadow: isActive ? "0 20px 45px -15px rgba(91,63,163,0.5)" : "none",
              }}
            >
              <img
                src={image}
                alt={alt}
                className="w-[220px] h-full object-cover"
                style={{ transform: isActive ? "scale(1)" : "scale(1.15)", transition: "transform 0.6s ease-out" }}
              />
            </div>

            <div
              className="flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0 transition-all duration-300"
              style={{
                background: isActive
                  ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                  : "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <Icon size={26} style={{ color: isActive ? "#fff" : "#A855F7" }} />
            </div>

            <div className="min-w-0">
              <h3
                className="font-bold transition-all duration-300 mb-3"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: isActive ? "#A855F7" : "#E5E7EB",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h3>
              <p
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }}
                className="text-base md:text-lg leading-relaxed max-w-xl"
              >
                {desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function WebDesignClient({ faqData }: Props) {
  return (
    <>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="/friendly-smiling-diverse-male-colleagues-having-pleasant-conversation-work-100kb.jpg"
        mobileSrc="/male-female-graphic-designers-using-graphics-tablet-100kb.jpg"
        className="min-h-screen flex items-center pt-[72px]"
        bgPositionClassName="bg-[position:center_30%] sm:bg-center"
        overlay="linear-gradient(180deg, rgba(10,8,26,0.75) 0%, rgba(10,8,26,0.82) 55%, rgba(10,8,26,0.95) 100%)"
      >
        {/* Ambient glow orb on top of the photo overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Zap size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Premium Web Design
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#E5E7EB" }}
          >
            <PrismReveal text="Websites That Convert" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Visitors Into Customers" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital designs mobile-first, brand-aligned websites for small and mid-sized
            businesses — engineered for Core Web Vitals, WCAG 2.1 AA accessibility, and SEO from
            day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book a Demo →
            </Link>
          </div>

          {/* Scroll cue */}
          <motion.div
            aria-hidden="true"
            className="mt-20 w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-white/80"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </FocusPullHero>

      {/* ── QUICK ANSWER ─────────────────────────────────────────────── */}
      <Section background="lavender" spacing="md" withDivider>
        <motion.div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, #EDE6FB 0%, #E4D9F7 100%)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#6D28D9" }}
              >
                Quick Answer: What Is Echo5 Digital Web Design?
              </h2>
              <p style={{ color: "rgba(30,23,56,0.85)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed">
                Echo5 Digital offers professional web design services for small and mid-sized businesses in Houston, Sugar Land, Texas, and nationally. Every site is built mobile-first, optimized for Core Web Vitals, and designed to convert visitors into leads. Designs are brand-aligned, WCAG 2.1 AA accessible, and structured to support SEO and AI search from the start.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── WHAT WE DESIGN ───────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

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
          ].map((item, i) => (
            <MagnetPop key={item.title} index={i} className="h-full">
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                badge={item.badge}
                variant="service"
                className="h-full"
              />
            </MagnetPop>
          ))}
        </div>
      </Section>

      {/* ── DESIGN PHILOSOPHY ────────────────────────────────────────── */}
      <Section background="lavender" spacing="lg" withDivider className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C4B5FD 0%, #E9D5FF 45%, transparent 70%)" }}
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: "rgba(124,58,237,0.1)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              Our Approach
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1E1738" }}
            >
              Design Philosophy Built for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Performance
              </span>
            </h2>
            <p style={{ color: "rgba(30,23,56,0.75)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-6">
              We believe great design isn't just beautiful — it's strategic. Every color, layout decision, and interaction is guided by conversion psychology and brand alignment. Our process starts with understanding your business goals, then translating them into a digital experience that compels action.
            </p>
            <p style={{ color: "rgba(30,23,56,0.75)", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-8">
              We combine premium UI quality with technical excellence — ensuring your site is not only visually stunning but also fast, accessible, and search-engine ready. Every pixel serves a purpose.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Mobile-First", icon: Smartphone },
                { label: "Brand-Aligned", icon: Palette },
                { label: "Conversion-Focused", icon: TrendingUp },
                { label: "UI Excellence", icon: Layers },
              ].map(({ label, icon: Icon }, i) => (
                <MagnetPop key={label} index={i}>
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ border: "1px solid rgba(124,58,237,0.18)", boxShadow: "0 4px 14px rgba(124,58,237,0.08)" }}
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
                      style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                    >
                      <Icon size={16} color="#fff" />
                    </div>
                    <span style={{ fontFamily: "Inter, sans-serif", color: "#1E1738", fontWeight: 600, fontSize: "0.875rem" }}>
                      {label}
                    </span>
                  </div>
                </MagnetPop>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-white"
            style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 20px 50px rgba(124,58,237,0.18)" }}
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital design process — wireframing and UI design for brand-aligned websites"
              className="w-full h-80 object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 60%, rgba(124,58,237,0.12) 100%)" }}
            />
          </motion.div>
        </div>
      </Section>

      {/* ── KEY FEATURES & DELIVERABLES ──────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

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
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── TECHNOLOGY STACK ─────────────────────────────────────────── */}
      <Section background="lavender" spacing="lg" withDivider className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #DDD6FE 0%, #EDE9FE 45%, transparent 70%)" }}
        />
        <motion.div
          className="relative text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.1)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.25)" }}
          >
            Tech Stack
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1E1738" }}
          >
            Built on Modern, Proven Technology
          </h2>
          <p style={{ color: "rgba(30,23,56,0.65)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            We use the same production-grade stack trusted by leading tech companies — delivering performance, scalability, and maintainability.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Next.js 14", detail: "App Router", icon: Globe },
            { name: "TypeScript", detail: "Type-Safe Code", icon: Code2 },
            { name: "Tailwind CSS", detail: "Utility-First Styling", icon: Layers },
            { name: "Next Image", detail: "Optimized Images", icon: Monitor },
            { name: "Next Font", detail: "Performance Fonts", icon: Cpu },
          ].map(({ name, detail, icon: Icon }, i) => (
            <motion.div
              key={name}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(124,58,237,0.15)",
                boxShadow: "0 4px 16px rgba(124,58,237,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.4)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.15)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(124,58,237,0.08)";
              }}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: (i % 5) * 0.08 }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl mb-3"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
              >
                <Icon size={22} color="#fff" />
              </div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1E1738", fontWeight: 700 }} className="text-sm mb-1">
                {name}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(30,23,56,0.55)" }} className="text-xs">
                {detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative mt-8 p-5 rounded-2xl text-center bg-white"
          style={{ border: "1px solid rgba(124,58,237,0.18)", boxShadow: "0 4px 16px rgba(124,58,237,0.08)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(30,23,56,0.75)" }} className="text-sm">
            <strong style={{ color: "#7C3AED" }}>Deployment-ready:</strong> Optimized for Vercel with MongoDB-ready architecture, CI/CD pipelines, and edge-network performance baked in.
          </p>
        </motion.div>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) — draws in left to right on scroll */}
          <motion.div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 80%, transparent)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
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
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              >
                <motion.div
                  className="flex items-center justify-center w-24 h-24 rounded-full mb-4 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "2px solid rgba(168,85,247,0.4)",
                    boxShadow: "0 0 30px rgba(124,58,237,0.2)",
                  }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.12 + 0.1 }}
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
                </motion.div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", fontWeight: 700 }} className="text-base mb-2">
                  {title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }} className="text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INTEGRATION WITH MARKETING ───────────────────────────────── */}
      <Section background="transparent" spacing="lg" withDivider className="!bg-white relative overflow-hidden">
        <LavenderField variant="b" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Text intro (heading + paragraph) ── */}
          <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#6B4EF0",
                borderColor: "rgba(124,58,237,0.25)",
                background: "rgba(124,58,237,0.08)",
              }}
            >
              Full-Stack Marketing
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Your Website as a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Marketing Engine
              </span>
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital websites don't just look great — they're built to plug
              directly into your entire marketing ecosystem. Your new site becomes
              the hub for all of your growth channels.
            </p>
          </div>

          {/* ── Photo collage: three overlapping, tilting frames ── */}
          <div className="relative order-2 lg:order-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 h-[460px] sm:h-[520px]">
            <PeelCard
              index={0}
              className="absolute left-0 top-6 w-[62%] sm:w-[58%] z-10"
            >
              <TiltCard index={0}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    boxShadow: "0 30px 70px -20px rgba(91,63,163,0.45)",
                    border: "6px solid #fff",
                    transform: "rotate(-4deg)",
                  }}
                >
                  <img
                    src="/laptop-displaying-business-analytics-90kb.jpg"
                    alt="Laptop displaying website and marketing performance analytics"
                    className="w-full object-cover"
                    style={{ height: "320px" }}
                  />
                </div>
              </TiltCard>
            </PeelCard>

            <PeelCard
              index={1}
              className="absolute right-0 top-0 w-[52%] sm:w-[50%] z-20"
            >
              <TiltCard index={1}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    boxShadow: "0 30px 70px -18px rgba(91,63,163,0.4)",
                    border: "6px solid #fff",
                    transform: "rotate(5deg)",
                  }}
                >
                  <img
                    src="/team-reviewing-marketing-strategies-digital-screen-100kb.jpg"
                    alt="Marketing team reviewing campaign strategy on a digital screen"
                    className="w-full object-cover"
                    style={{ height: "260px" }}
                  />
                </div>
              </TiltCard>
            </PeelCard>

            <PeelCard
              index={2}
              className="absolute left-[14%] sm:left-[18%] bottom-0 w-[56%] sm:w-[52%] z-30"
            >
              <TiltCard index={2}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    boxShadow: "0 30px 70px -16px rgba(91,63,163,0.5)",
                    border: "6px solid #fff",
                    transform: "rotate(3deg)",
                  }}
                >
                  <img
                    src="/people-office-analyzing-checking-finance-graphs-100kb.jpg"
                    alt="Marketers analyzing traffic and conversion graphs"
                    className="w-full object-cover"
                    style={{ height: "230px" }}
                  />
                </div>
              </TiltCard>
            </PeelCard>

            {/* Floating badge */}
            <FloatDrift duration={3.8} className="absolute -top-2 right-[6%] sm:right-[10%] z-40 hidden sm:block">
              <div
                className="rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #F3F0FD)",
                  border: "1px solid rgba(124,58,237,0.18)",
                  boxShadow: "0 18px 40px -12px rgba(91,63,163,0.35)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 18px rgba(124,58,237,0.5)",
                  }}
                >
                  <Cpu size={17} color="#fff" />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}>
                    Growth Hub
                  </p>
                  <p className="text-xs" style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}>
                    Always connected
                  </p>
                </div>
              </div>
            </FloatDrift>

            {/* Accent glow ring behind the collage */}
            <div
              aria-hidden="true"
              className="absolute -z-10 rounded-full blur-3xl"
              style={{
                width: 340,
                height: 340,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="order-3 lg:order-3 lg:col-start-2 lg:row-start-2">
            <div className="space-y-4">
              {[
                { icon: Search, label: "SEO & AEO", desc: "Semantic structure and schema markup optimized for Google and AI search engines like ChatGPT and Perplexity." },
                { icon: Megaphone, label: "Google Ads & Meta Ads", desc: "Landing pages built to maximize Quality Score and conversion rates for paid campaigns." },
                { icon: BarChart2, label: "Content Marketing", desc: "Blog architecture, internal linking, and content hubs that drive organic traffic growth over time." },
                { icon: Cpu, label: "AI Marketing Employee", desc: "Seamlessly integrates with Echo5's AI Marketing Employee system for automated lead nurturing and reporting." },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="group flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #F5F3FE 0%, #EEECFB 100%)",
                    borderColor: "rgba(124,58,237,0.15)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 6px 16px rgba(124,58,237,0.35)",
                    }}
                  >
                    <Icon size={16} color="#fff" />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {label}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES SERVED ────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

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
          ].map(({ icon: Icon, label, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: (i % 5) * 0.06 }}
            >
              <Link
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
            </motion.div>
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
          ].map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
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
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            Why Echo5
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Businesses Trust Echo5 Digital
          </h2>
          <p style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }} className="max-w-2xl mx-auto text-base">
            The fundamentals we never compromise on, no matter the project size.
          </p>
        </motion.div>

        <TrustSignalsList />
      </Section>

      {/* ── LOCAL RELEVANCE ──────────────────────────────────────────── */}
      <Section background="transparent" spacing="md" withDivider className="!bg-white">
        <motion.div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "#EEECFB",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-start gap-4">
            <MapPin size={24} style={{ color: "#7C3AED", flexShrink: 0, marginTop: "0.2rem" }} />
            <div>
              <h2
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                Serving Houston &amp; Sugar Land, Texas — and Businesses Nationwide
              </h2>
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }} className="text-base leading-relaxed mb-3">
                Echo5 Digital serves businesses in Houston and Sugar Land, Texas with web design that reflects local market needs and is built to rank in local search results. Whether you are a Houston-area service business, healthcare provider, or professional firm, Echo5 Digital creates sites designed to attract and convert your local audience.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="tel:+17134897004"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={16} /> 713-489-7004
                </a>
                <a
                  href="mailto:sales@echo5digital.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={16} /> sales@echo5digital.com
                </a>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                >
                  <MapPin size={16} style={{ color: "#7C3AED" }} /> Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqData} />
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ──────────────────────────────────────────── */}
      <Section
        background="transparent"
        spacing="xl"
        maxWidth="3xl"
        withDivider
        className="!bg-[#EEECFB]"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            className="flex-1 lg:pt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Ready for a Website
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That Actually Works?
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Tell us about your business and goals. Our team will review your current site (if
              you have one) and prepare a custom proposal — no commitment required.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Free website audit included",
                "Custom proposal within 48 hours",
                "No long-term contracts required",
                "Houston-based team, U.S.-wide service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>Or reach us directly:</p>
              <a href="tel:+17134897004" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                📞 713-489-7004
              </a>
              <a href="mailto:sales@echo5digital.com" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                ✉️ sales@echo5digital.com
              </a>
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                📍 Houston / Sugar Land, Texas
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <ContactForm
              heading="Get Your Free Web Design Quote"
              subheading="Tell us about your project and we'll put together a custom proposal tailored to your goals."
              submitLabel="Send My Request"
              showAppointmentNote={true}
            />
          </motion.div>
        </div>
      </Section>
    </>
  );
}