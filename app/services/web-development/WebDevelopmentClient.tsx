"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
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
  ChevronRight,
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
  },
  {
    icon: ShieldCheck,
    title: "WCAG 2.1 AA Accessibility",
    description: "Full ARIA labeling, color contrast compliance, and screen reader testing.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive",
    description: "Layouts built mobile-first with fluid breakpoints tested on real devices.",
  },
  {
    icon: Eye,
    title: "Lazy Loading",
    description: "Images, components, and routes defer loading until needed, reducing initial payload.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "Full keyboard-accessible navigation with visible focus indicators throughout.",
  },
  {
    icon: Search,
    title: "SEO-Structured Markup",
    description: "Semantic HTML5, JSON-LD schema, and Open Graph tags built in by default.",
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
      {/* ── Hero ── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Code2 size={13} />
              Web Development Services
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#E5E7EB] mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Fast, Scalable&nbsp;
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Marketing-Ready
              </span>{" "}
              Websites
            </h1>
            <p
              className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital engineers high-performance web applications using Next.js, TypeScript,
              and Tailwind CSS — built to convert, rank, and scale for businesses in Houston and
              across the U.S.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[#A855F7] text-base transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "1px solid rgba(168,85,247,0.4)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                View All Services <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            />
            <img
              src="https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Web developer building a high-performance website using modern development tools"
              className="w-full h-80 object-cover rounded-2xl relative z-10"
              style={{ border: "1px solid rgba(124,58,237,0.2)" }}
            />
          </div>
        </div>
      </Section>

      {/* ── Quick Answer / AEO Block ── */}
      <Section background="elevated" spacing="sm" maxWidth="2xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
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
              <p
                className="text-[#E5E7EB] text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital is a web development company serving businesses in Houston, Sugar Land,
                Texas, and nationally. The team builds fast, scalable web applications and marketing
                websites using Next.js, TypeScript, and Tailwind CSS, optimized for Core Web Vitals,
                WCAG 2.1 AA accessibility, and seamless integration with digital marketing systems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Development Capabilities Overview ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-14">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <Card
              key={cap.title}
              title={cap.title}
              description={cap.description}
              icon={cap.icon}
              badge={cap.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── Technology Stack ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Under the Hood
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Technology Stack
          </h2>
          <p
            className="text-[#9CA3AF] text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We use a modern, battle-tested stack chosen for performance, developer experience, and
            long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 30px rgba(124,58,237,0.3)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.25)";
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
                  color: "#9CA3AF",
                  background: "rgba(124,58,237,0.1)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Performance & Quality Standards ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Quality First
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Performance &amp; Quality Standards
            </h2>
            <p
              className="text-[#9CA3AF] text-base leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every Echo5 Digital build is measured against real-world performance benchmarks and
              accessibility standards — not just checked off a list.
            </p>
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Lighthouse performance dashboard showing high scores for a web application"
              className="rounded-xl w-full object-cover"
              style={{ border: "1px solid rgba(124,58,237,0.2)", maxHeight: "240px" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {performanceStandards.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <item.icon size={18} color="#A855F7" />
                </div>
                <h3
                  className="text-sm font-semibold text-[#E5E7EB] mb-1"
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
            ))}
          </div>
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-14">
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
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, #7C3AED, #A855F7, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center z-10"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div
                  className="flex-1 p-6 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.2)",
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
            ))}
          </div>
        </div>
      </Section>

      {/* ── Marketing Integration ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {marketingIntegrations.map((item) => (
              <div
                key={item.title}
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
            ))}
          </div>
        </div>
      </Section>

      {/* ── Local Relevance ── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(168,85,247,0.2)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Local Service Area
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Serving Houston &amp; Sugar Land, Texas
              </h2>
              <p
                className="text-[#9CA3AF] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital provides web development services to businesses in Houston and Sugar
                Land, Texas. Local companies benefit from a technically rigorous development approach
                that meets both performance and local SEO requirements, ensuring their websites are
                competitive in the Houston market.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
              >
                <CheckCircle2 size={18} color="#A855F7" className="flex-shrink-0" />
                <div>
                  <p
                    className="text-sm font-semibold text-[#E5E7EB]"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Primary Service Area
                  </p>
                  {/* Address is real text per NAP requirements */}
                  <p
                    className="text-xs text-[#9CA3AF]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Houston / Sugar Land, Texas
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
              >
                <CheckCircle2 size={18} color="#A855F7" className="flex-shrink-0" />
                <div>
                  <p
                    className="text-sm font-semibold text-[#E5E7EB]"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    National Coverage
                  </p>
                  <p
                    className="text-xs text-[#9CA3AF]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Clients served across the United States
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
              >
                <CheckCircle2 size={18} color="#A855F7" className="flex-shrink-0" />
                <div>
                  <p
                    className="text-sm font-semibold text-[#E5E7EB]"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Contact
                  </p>
                  {/* Real NAP data */}
                  <a
                    href="tel:713-489-7004"
                    className="text-xs text-[#9CA3AF] hover:text-[#A855F7] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    713-489-7004
                  </a>
                  {" · "}
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="text-xs text-[#9CA3AF] hover:text-[#A855F7] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    hello@echo5digital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Industries Served ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
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
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.label}
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
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Proven Results
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Development You Can Trust
          </h2>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-6 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <span
                className="text-3xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm text-[#9CA3AF]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
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
          ].map((cs) => (
            <div
              key={cs.metric}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Star size={16} color="#A855F7" fill="#A855F7" />
                <span
                  className="text-base font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#A855F7",
                  }}
                >
                  {cs.metric}
                </span>
              </div>
              <p
                className="text-sm font-semibold text-[#E5E7EB] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {cs.context}
              </p>
              <p
                className="text-xs text-[#9CA3AF] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {cs.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ Accordion ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
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
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqData.map((item, idx) => (
            <div
              key={idx}
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
          ))}
        </div>
      </Section>

      {/* ── CTA / Lead Form ── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl" withDivider id="lead-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA copy */}
          <div className="lg:pt-8">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Let&apos;s Build Together
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-5 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Start Your Web Development Project
            </h2>
            <p
              className="text-[#9CA3AF] text-base leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Tell us about your project and we&apos;ll respond within 24 hours with an approach
              tailored to your goals, timeline, and stack requirements.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                "Next.js + TypeScript builds",
                "WCAG 2.1 AA accessible by default",
                "Core Web Vitals optimized",
                "Marketing-ready from day one",
                "Houston-based, serving clients nationally",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={18} color="#A855F7" className="flex-shrink-0" />
                  <span
                    className="text-sm text-[#E5E7EB]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Direct Contact
              </p>
              {/* Real NAP */}
              <a
                href="tel:713-489-7004"
                className="block text-[#E5E7EB] text-sm font-medium hover:text-[#A855F7] transition-colors mb-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="block text-[#9CA3AF] text-sm hover:text-[#A855F7] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                hello@echo5digital.com
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {/* Hidden UTM fields are handled inside the form's onSubmit handler conceptually */}
            <ContactForm
              heading="Start Your Web Project"
              subheading="Tell us about your website goals, current stack, and timeline — we'll respond within 24 hours."
              submitLabel="Send Project Details"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}