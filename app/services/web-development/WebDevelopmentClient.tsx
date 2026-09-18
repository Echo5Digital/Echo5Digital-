"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import { FocusPullHero, PrismReveal, LavenderField } from "@/components/SolutionsFX";
import { TiltCard, DiagonalWipe, BlurIn, ScrollProgressRail } from "@/components/ScrollFX";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Plug,
  Layout,
  Zap,
  ShieldCheck,
  Smartphone,
  Eye,
  Keyboard,
  GitBranch,
  Rocket,
  Search,
  Brain,
  TrendingUp,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Home,
  ChevronDown,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface WebDevelopmentClientProps {
  faqData: FAQItem[];
}

const capabilities = [
  {
    icon: Globe,
    title: "Full-Stack Web Builds",
    description:
      "End-to-end development of marketing websites and web applications — from architecture to deployment — built for performance and scale.",
    badge: "Core Service",
  },
  {
    icon: Code2,
    title: "Next.js App Router",
    description:
      "Modern Next.js 14 App Router architecture for server components, streaming, and edge-ready deployments that load fast and rank well.",
    badge: "Modern Stack",
  },
  {
    icon: Layout,
    title: "CMS-Ready Architecture",
    description:
      "Headless CMS integrations and structured content layers so your team can update pages without touching code.",
    badge: "Flexibility",
  },
  {
    icon: Database,
    title: "MongoDB Integration",
    description:
      "Schema design, data modeling, and MongoDB Atlas integration for dynamic applications that need flexible, scalable data storage.",
    badge: "Database",
  },
  {
    icon: Plug,
    title: "API Connections",
    description:
      "Third-party API integrations — CRMs, marketing platforms, payment gateways, and custom REST/GraphQL endpoints.",
    badge: "Integrations",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Core Web Vitals optimization built into every sprint — lazy loading, image optimization, font strategy, and bundle analysis.",
    badge: "Speed",
  },
];

const techStack = [
  { name: "Next.js 14", category: "Framework", color: "#A855F7" },
  { name: "TypeScript", category: "Language", color: "#7C3AED" },
  { name: "Tailwind CSS", category: "Styling", color: "#A855F7" },
  { name: "MongoDB", category: "Database", color: "#7C3AED" },
  { name: "Vercel", category: "Deployment", color: "#A855F7" },
  { name: "Next Image", category: "Optimization", color: "#7C3AED" },
  { name: "Next Font", category: "Typography", color: "#A855F7" },
  { name: "Semantic HTML5", category: "Markup", color: "#7C3AED" },
  { name: "App Router", category: "Architecture", color: "#A855F7" },
  { name: "REST / GraphQL", category: "APIs", color: "#7C3AED" },
];

const performanceStandards = [
  {
    icon: Zap,
    title: "Core Web Vitals",
    description: "LCP, FID, CLS optimized to Google's recommended thresholds on every build.",
    image: "/3d-graph-computer-illustration-100kb.jpg",
    alt: "Holographic performance charts and metrics floating above a tablet",
  },
  {
    icon: ShieldCheck,
    title: "WCAG 2.1 AA Accessibility",
    description: "Full ARIA labeling, color contrast compliance, and screen reader testing.",
    image: "/male-female-graphic-designers-using-graphics-tablet-100kb.jpg",
    alt: "A diverse team reviewing a website build together on screen",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive",
    description: "Layouts built mobile-first with fluid breakpoints tested on real devices.",
    image: "/businessman-using-his-mobile-phone-80kb.jpg",
    alt: "A businessman browsing a responsive website layout on his mobile phone",
  },
  {
    icon: Eye,
    title: "Lazy Loading",
    description: "Images, components, and routes defer loading until needed, reducing initial payload.",
    image: "/person-sitting-bed-with-laptop-100kb.jpg",
    alt: "A website loading smoothly on a laptop in a relaxed, everyday setting",
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "Full keyboard-accessible navigation with visible focus indicators throughout.",
    image: "/crop-hands-using-laptop-office-80kb.jpg",
    alt: "Hands navigating a laptop keyboard with a data dashboard on screen",
  },
  {
    icon: Search,
    title: "SEO-Structured Markup",
    description: "Semantic HTML5, JSON-LD schema, and Open Graph tags built in by default.",
    image: "/top-view-cloud-with-word-seo-80kb.jpg",
    alt: "SEO concept graphic above a laptop keyboard on a wooden desk",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirements & Discovery",
    description:
      "We document your goals, user flows, integrations, and technical constraints before a single line of code is written.",
  },
  {
    step: "02",
    title: "Architecture Planning",
    description:
      "We define data models, routing strategy, component architecture, and third-party integrations — creating a technical blueprint.",
  },
  {
    step: "03",
    title: "Development Sprints",
    description:
      "Iterative sprints with regular demos. Each sprint delivers working, testable features aligned to your timeline.",
  },
  {
    step: "04",
    title: "QA & Accessibility Audit",
    description:
      "Cross-browser and device testing, Core Web Vitals measurement, WCAG 2.1 AA audit, and performance profiling.",
  },
  {
    step: "05",
    title: "Deployment & Handoff",
    description:
      "Vercel deployment with CI/CD pipelines, DNS configuration, and thorough documentation for your team.",
  },
];

const marketingIntegrations = [
  {
    icon: Search,
    title: "SEO & AEO Structured",
    description: "Every page ships with semantic markup, schema.org JSON-LD, and AEO-ready content blocks.",
  },
  {
    icon: Brain,
    title: "AI Marketing Employee",
    description: "Sites are built to feed Echo5's AI Marketing Employee system — unified data, unified growth.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Conversion",
    description: "Google Analytics 4, GTM, and conversion event tracking configured during development.",
  },
  {
    icon: GitBranch,
    title: "CRM Automation Ready",
    description: "Forms and lead capture connect directly to your CRM via webhook or native integration.",
  },
];

const industries = [
  { icon: Stethoscope, label: "Healthcare", href: "/industries/healthcare" },
  { icon: ShoppingBag, label: "E-Commerce", href: "/industries/ecommerce" },
  { icon: Briefcase, label: "Professional Services", href: "/industries/professional-services" },
  { icon: Home, label: "Real Estate", href: "/industries/real-estate" },
  { icon: Building2, label: "B2B & SaaS", href: "/industries/b2b-saas" },
  { icon: Rocket, label: "Startups", href: "/industries/startups" },
];

const stats = [
  { value: "100+", label: "Websites Launched" },
  { value: "98+", label: "Avg. Lighthouse Score" },
  { value: "WCAG 2.1 AA", label: "Accessibility Standard" },
  { value: "National", label: "U.S. Clients Served" },
];

export default function WebDevelopmentClient({ faqData }: WebDevelopmentClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
      {/* ── Hero — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1920"
        mobileSrc="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=900"
        className="min-h-screen flex items-center pt-[72px]"
        bgPositionClassName="bg-right sm:bg-center"
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
            <Code2 size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Web Development Services
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#E5E7EB" }}
          >
            <PrismReveal text="Fast, Scalable" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Marketing-Ready Websites" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital engineers high-performance web applications using Next.js, TypeScript,
            and Tailwind CSS, built to convert, rank, and scale for businesses in Houston and
            across the U.S.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="#lead-form"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Start Your Project
            </Link>
            <Link
              href="/solutions"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View All Services →
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

      {/* ── Quick Answer / AEO Block ── */}
      <Section background="transparent" spacing="md" maxWidth="2xl" withDivider className="!bg-white">
        <BlurIn>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "#EEECFB",
              border: "1px solid rgba(124,58,237,0.15)",
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
                  style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                >
                  Quick Answer
                </p>
                <h2
                  className="text-lg sm:text-xl font-bold mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  What Is Web Development &amp; What Does Echo5 Digital Provide?
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                >
                  Echo5 Digital is a web development company serving businesses in Houston, Sugar Land,
                  Texas, and nationally. The team builds fast, scalable web applications and marketing
                  websites using Next.js, TypeScript, and Tailwind CSS, optimized for Core Web Vitals,
                  WCAG 2.1 AA accessibility, and seamless integration with digital marketing systems.
                </p>
              </div>
            </div>
          </div>
        </BlurIn>
      </Section>

      {/* ── Development Capabilities Overview ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-14">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              What We Build
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Development Capabilities
            </h2>
            <p
              className="text-[#9CA3AF] text-base max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              From simple marketing sites to complex full-stack applications — built with the same
              technical rigor and performance standards every time.
            </p>
          </BlurIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <TiltCard key={cap.title} index={i}>
              <Card
                title={cap.title}
                description={cap.description}
                icon={cap.icon}
                badge={cap.badge}
                variant="service"
              />
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ── Technology Stack ── */}
      <Section background="lavender" spacing="lg" maxWidth="2xl" withDivider className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C4B5FD 0%, #E9D5FF 45%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C4B5FD 0%, #E9D5FF 45%, transparent 70%)" }}
        />

        <div className="relative text-center mb-14">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#7C3AED", fontFamily: "Inter, sans-serif" }}
            >
              Under the Hood
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Technology Stack
            </h2>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              We use a modern, battle-tested stack chosen for performance, developer experience, and
              long-term maintainability.
            </p>
          </BlurIn>
        </div>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, i) => (
            <BlurIn key={tech.name} delay={(i % 5) * 0.06}>
              <div
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl text-center bg-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(124,58,237,0.15)",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 36px rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(124,58,237,0.08)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.15)";
                }}
              >
                <span
                  className="text-base font-bold"
                  style={{ color: tech.color, fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {tech.name}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    color: "#7C3AED",
                    background: "rgba(124,58,237,0.08)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tech.category}
                </span>
              </div>
            </BlurIn>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-14">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              The Process
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              How It Works
            </h2>
            <p
              className="text-[#9CA3AF] text-base max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A structured, transparent process from kickoff to launch — no surprises, just
              consistent delivery.
            </p>
          </BlurIn>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <ScrollProgressRail>
            <div className="flex flex-col gap-8 md:pl-14">
              {processSteps.map((step, idx) => (
                <BlurIn key={step.step} delay={idx * 0.08}>
                  <div className="relative flex gap-6 items-start">
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div
                      className="flex-1 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(124,58,237,0.2)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.5)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(124,58,237,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <h3
                        className="text-lg font-semibold text-[#E5E7EB] mb-2"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-[#9CA3AF] text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </BlurIn>
              ))}
            </div>
          </ScrollProgressRail>
        </div>
      </Section>

      {/* ── Performance & Quality Standards ── */}
      <Section background="transparent" spacing="lg" maxWidth="2xl" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="b" />

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
          <DiagonalWipe>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#6B4EF0",
                borderColor: "rgba(124,58,237,0.25)",
                background: "rgba(124,58,237,0.08)",
              }}
            >
              Quality First
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Performance &amp; Quality Standards
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Every Echo5 Digital build is measured against real-world performance benchmarks and
              accessibility standards — not just checked off a list.
            </p>
          </DiagonalWipe>
        </div>

        {/* Numbered scroll-timeline of quality standards, alternating image side per step */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollProgressRail>
            <div className="space-y-16 md:space-y-24 md:pl-14">
              {performanceStandards.map((item, i) => (
                <BlurIn key={item.title} delay={i * 0.06}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center ${
                      i % 2 === 1 ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    <div style={{ direction: "ltr" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-4xl font-black"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                            boxShadow: "0 6px 16px rgba(124,58,237,0.35)",
                          }}
                        >
                          <item.icon size={20} color="#fff" />
                        </div>
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div style={{ direction: "ltr" }}>
                      <TiltCard index={i}>
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full rounded-2xl object-cover"
                          style={{
                            height: "280px",
                            border: "1px solid rgba(124,58,237,0.15)",
                            boxShadow: "0 20px 50px -12px rgba(91,63,163,0.35)",
                          }}
                        />
                      </TiltCard>
                    </div>
                  </div>
                </BlurIn>
              ))}
            </div>
          </ScrollProgressRail>
        </div>
      </Section>

      {/* ── Marketing Integration ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <BlurIn>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Unified Growth
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Built for Marketing Integration
              </h2>
              <p
                className="text-[#9CA3AF] text-base leading-relaxed mb-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Development at Echo5 Digital doesn&apos;t happen in isolation. Every website is
                engineered to connect directly with our SEO, AEO, content strategy, and AI Marketing
                Employee ecosystem — turning your site into an active, measurable growth engine.
              </p>
              <Link
                href="/ai-marketing-employee"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explore AI Marketing Employee <ArrowRight size={15} />
              </Link>
            </div>
          </BlurIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {marketingIntegrations.map((item, i) => (
              <BlurIn key={item.title} delay={0.1 + i * 0.08}>
                <div
                  className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <item.icon size={18} color="#A855F7" />
                  </div>
                  <h3
                    className="text-sm font-bold text-[#E5E7EB] mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs text-[#9CA3AF] leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Local Relevance ── */}
      <Section background="lavender" spacing="md" maxWidth="2xl" withDivider>
        <BlurIn>
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #EDE6FB 0%, #E4D9F7 100%)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#7C3AED", fontFamily: "Inter, sans-serif" }}
                >
                  Local Service Area
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  Serving Houston &amp; Sugar Land, Texas
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                >
                  Echo5 Digital provides web development services to businesses in Houston and Sugar
                  Land, Texas. Local companies benefit from a technically rigorous development approach
                  that meets both performance and local SEO requirements, ensuring their websites are
                  competitive in the Houston market.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <BlurIn delay={0.1}>
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "rgb(147, 72, 242)", boxShadow: "0 4px 16px rgba(124,58,237,0.25)" }}
                  >
                    <CheckCircle2 size={18} color="#FFFFFF" className="flex-shrink-0" />
                    <div>
                      <p
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        Primary Service Area
                      </p>
                      {/* Address is real text per NAP requirements */}
                      <p
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}
                      >
                        Houston / Sugar Land, Texas
                      </p>
                    </div>
                  </div>
                </BlurIn>
                <BlurIn delay={0.18}>
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "rgb(147, 72, 242)", boxShadow: "0 4px 16px rgba(124,58,237,0.25)" }}
                  >
                    <CheckCircle2 size={18} color="#FFFFFF" className="flex-shrink-0" />
                    <div>
                      <p
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        National Coverage
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}
                      >
                        Clients served across the United States
                      </p>
                    </div>
                  </div>
                </BlurIn>
                <BlurIn delay={0.26}>
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "rgb(147, 72, 242)", boxShadow: "0 4px 16px rgba(124,58,237,0.25)" }}
                  >
                    <CheckCircle2 size={18} color="#FFFFFF" className="flex-shrink-0" />
                    <div>
                      <p
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        Contact
                      </p>
                      {/* Real NAP data */}
                      <a
                        href="tel:713-489-7004"
                        className="text-xs transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}
                      >
                        713-489-7004
                      </a>
                      {" · "}
                      <a
                        href="mailto:hello@echo5digital.com"
                        className="text-xs transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}
                      >
                        hello@echo5digital.com
                      </a>
                    </div>
                  </div>
                </BlurIn>
              </div>
            </div>
          </div>
        </BlurIn>
      </Section>

      {/* ── Industries Served ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Industry Expertise
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Industries We Build For
            </h2>
            <p
              className="text-[#9CA3AF] text-base max-w-xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Domain knowledge shapes every technical decision — from architecture to content strategy.
            </p>
          </BlurIn>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {industries.map((industry, i) => (
            <BlurIn key={industry.label} delay={(i % 6) * 0.05}>
              <Link
                href={industry.href}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 30px rgba(124,58,237,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(168,85,247,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(124,58,237,0.2)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <industry.icon size={20} color="#A855F7" />
                </div>
                <span
                  className="text-sm font-medium text-[#E5E7EB] group-hover:text-[#A855F7] transition-colors"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {industry.label}
                </span>
              </Link>
            </BlurIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#A855F7]"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            View all industries <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      {/* ── Trust Indicators / Stats ── */}
      <Section background="lavender" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#7C3AED", fontFamily: "Inter, sans-serif" }}
            >
              Proven Results
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Development You Can Trust
            </h2>
          </BlurIn>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <BlurIn key={stat.label} delay={i * 0.08}>
              <div
                className="flex flex-col items-center justify-center p-6 rounded-2xl text-center"
                style={{
                  background: "rgb(147, 72, 242)",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.25)",
                }}
              >
                <span
                  className="text-3xl font-bold mb-2 text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            </BlurIn>
          ))}
        </div>

        {/* Case Study Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              metric: "3.2× Faster Load",
              context: "E-commerce migration to Next.js App Router",
              detail: "Rebuilt a legacy PHP storefront with Next.js 14, cutting LCP from 6.8s to 2.1s.",
            },
            {
              metric: "WCAG 2.1 AA Certified",
              context: "Healthcare portal accessibility upgrade",
              detail: "Full accessibility audit and remediation, achieving compliance for a regulated healthcare client.",
            },
            {
              metric: "98 Lighthouse Score",
              context: "B2B SaaS marketing site",
              detail: "Delivered a marketing site with perfect performance, accessibility, and SEO scores at launch.",
            },
          ].map((cs, i) => (
            <BlurIn key={cs.metric} delay={i * 0.1}>
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgb(147, 72, 242)",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.25)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star size={16} color="#FFFFFF" fill="#FFFFFF" />
                  <span
                    className="text-base font-bold text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {cs.metric}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold text-white mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {cs.context}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}
                >
                  {cs.detail}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </Section>

      {/* ── FAQ Accordion ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <BlurIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Common Questions
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </BlurIn>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqData.map((item, idx) => (
            <BlurIn key={idx} delay={Math.min(idx, 6) * 0.05}>
              <div
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  border: openFaq === idx ? "1px solid rgba(168,85,247,0.45)" : "1px solid rgba(124,58,237,0.2)",
                  background: openFaq === idx ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.03)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  onClick={() => toggleFaq(idx)}
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
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background:
                        openFaq === idx
                          ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                          : "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <ChevronDown
                      size={16}
                      color={openFaq === idx ? "#fff" : "#A855F7"}
                      className="transition-transform duration-300"
                      style={{ transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === idx ? "300px" : "0px",
                    opacity: openFaq === idx ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-6">
                    <div
                      className="h-px w-full mb-5"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(124,58,237,0.4), transparent)",
                      }}
                    />
                    <p
                      className="text-sm text-[#9CA3AF] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </BlurIn>
          ))}
        </div>
      </Section>

      {/* ── CTA / Lead Form ── */}
      <Section background="transparent" spacing="xl" maxWidth="3xl" withDivider className="!bg-[#EEECFB]" id="lead-form">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: CTA copy */}
          <BlurIn className="flex-1 lg:pt-6">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-5"
                style={{ color: "#6B4EF0" }}
              >
                Let&apos;s Build Together
              </div>
              <h2
                className="font-black leading-[1.04] tracking-tight mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
              >
                Start Your Web
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Development Project
                </span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73" }}>
                Tell us about your project and we&apos;ll respond within 24 hours with an approach
                tailored to your goals, timeline, and stack requirements.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Next.js + TypeScript builds",
                  "WCAG 2.1 AA accessible by default",
                  "Core Web Vitals optimized",
                  "Marketing-ready from day one",
                  "Houston-based, serving clients nationally",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "#15172B" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* NAP */}
              <div className="space-y-2 text-sm">
                <p style={{ color: "#5B5F73" }}>Or reach us directly:</p>
                <a href="tel:713-489-7004" className="block" style={{ color: "#4F32D9" }}>
                  📞 713-489-7004
                </a>
                <a href="mailto:hello@echo5digital.com" className="block" style={{ color: "#4F32D9" }}>
                  ✉️ hello@echo5digital.com
                </a>
              </div>
            </div>
          </BlurIn>

          {/* Right: Contact Form */}
          <BlurIn className="flex-1 w-full" delay={0.15}>
            <ContactForm
              heading="Start Your Web Project"
              subheading="Tell us about your website goals, current stack, and timeline — we'll respond within 24 hours."
              submitLabel="Send Project Details"
              showAppointmentNote={true}
            />
          </BlurIn>
        </div>
      </Section>
    </main>
  );
}