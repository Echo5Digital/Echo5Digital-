"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  InkReveal,
  MagnetPop,
  PeelCard,
  GlowTrail,
  LavenderField,
  FocusPullHero,
  PrismReveal,
  CircleReveal,
  BlindsReveal,
  DiagonalSweep,
  FloatDrift,
} from "@/components/SolutionsFX";
import {
  Search,
  Megaphone,
  Globe,
  Code2,
  BarChart3,
  Wrench,
  Bot,
  MapPin,
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Users,
  TrendingUp,
  Shield,
  Star,
  FileText,
  Share2,
  DollarSign,
  Database,
  Monitor,
  RefreshCw,
  Building2,
  Stethoscope,
  Home,
  HardHat,
  Scale,
  Smile,
  ShoppingCart,
  Car,
  Utensils,
  GraduationCap,
  Activity,
} from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";

const aiMarketingServices = [
  {
    icon: Bot,
    title: "AI Marketing Employee",
    description:
      "Our flagship product — a continuously operating agentic AI system that manages your entire marketing stack with human oversight, across all tiers.",
    badge: "Flagship",
    href: "/ai-marketing-employee",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "AI-driven search engine optimization that audits, fixes, and grows your organic rankings month over month with technical precision.",
    badge: null,
    href: "/services/seo",
  },
  {
    icon: Brain,
    title: "AEO & GEO",
    description:
      "Answer Engine Optimization and Generative Engine Optimization — ensuring your brand appears in AI-generated answers and voice search results.",
    badge: "New",
    href: "/services/aeo-geo",
  },
  {
    icon: DollarSign,
    title: "Google Ads",
    description:
      "AI-optimized Google Ads campaigns with automated bidding, audience targeting, and conversion tracking to maximize your ROI.",
    badge: null,
    href: "/services/google-ads",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising powered by machine-learning creative testing and audience segmentation to drive leads and sales.",
    badge: null,
    href: "/services/meta-ads",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Consistent, on-brand social media management across platforms — content creation, scheduling, engagement, and analytics.",
    badge: null,
    href: "/services/social-media-marketing",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "AI-assisted content strategy and creation including blog posts, landing pages, and authority-building articles that rank and convert.",
    badge: null,
    href: "/services/content-marketing",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate local search results with Google Business Profile optimization, local citations, and hyper-targeted neighborhood SEO strategies.",
    badge: null,
    href: "/services/local-seo",
  },
];

const webDevServices = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Custom, conversion-focused website designs built to reflect your brand identity and guide visitors toward taking action.",
    badge: null,
    href: "/services/web-design",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web development using modern frameworks — fast, secure, scalable websites and web applications built for growth.",
    badge: null,
    href: "/services/web-development",
  },
  {
    icon: Code2,
    title: "Custom Programming",
    description:
      "Bespoke software solutions, APIs, integrations, and automation tools tailored to your specific business workflows.",
    badge: null,
    href: "/services/custom-programming",
  },
  {
    icon: Database,
    title: "CRM Automation",
    description:
      "Connect your CRM to your marketing stack with intelligent automation — lead routing, follow-up sequences, and pipeline management.",
    badge: null,
    href: "/services/crm-automation",
  },
  {
    icon: BarChart3,
    title: "Reporting Dashboards",
    description:
      "Real-time, custom analytics dashboards that surface the KPIs that matter, giving you full visibility into campaign performance.",
    badge: null,
    href: "/services/reporting-dashboards",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing technical upkeep — updates, security patches, performance optimization, and uptime monitoring to keep your site healthy.",
    badge: null,
    href: "/services/website-maintenance",
  },
];

const industries = [
  { label: "Dental", icon: Smile, href: "/industries/dental" },
  { label: "Healthcare", icon: Stethoscope, href: "/industries/healthcare" },
  { label: "Home Services", icon: Home, href: "/industries/home-services" },
  { label: "Roofing", icon: HardHat, href: "/industries/roofing" },
  { label: "Law Firms", icon: Scale, href: "/industries/law-firms" },
  { label: "E-Commerce", icon: ShoppingCart, href: "/industries/ecommerce" },
  { label: "Automotive", icon: Car, href: "/industries/automotive" },
  { label: "Restaurants", icon: Utensils, href: "/industries/restaurants" },
  { label: "Education", icon: GraduationCap, href: "/industries/education" },
  { label: "Medical Practices", icon: Activity, href: "/industries/medical" },
  { label: "Real Estate", icon: Building2, href: "/industries/real-estate" },
  { label: "All Industries", icon: Layers, href: "/industries" },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Onboarding",
    description:
      "We audit your current digital presence, identify growth gaps, and align on goals during a structured onboarding session.",
    icon: Users,
  },
  {
    number: "02",
    title: "AI-Powered Strategy",
    description:
      "Our AI systems generate a data-backed strategy tailored to your market, competitors, and target audience.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Execution at Scale",
    description:
      "Agentic AI executes campaigns, creates content, manages ads, and optimizes your web presence 24/7.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Human Review & Refinement",
    description:
      "Our expert team reviews all AI outputs, applies strategic judgment, and ensures quality across every touchpoint.",
    icon: Shield,
  },
  {
    number: "05",
    title: "Reporting & Iteration",
    description:
      "You receive transparent, real-time reporting dashboards plus monthly strategy reviews to keep growth compounding.",
    icon: TrendingUp,
  },
];

const trustSignals = [
  { label: "Google Ads Partner", icon: Star },
  { label: "Meta Business Partner", icon: Star },
  { label: "AI-First Methodology", icon: Brain },
  { label: "Human-in-the-Loop QA", icon: Shield },
  { label: "Agentic AI Systems", icon: Bot },
  { label: "Real-Time Analytics", icon: BarChart3 },
  { label: "Full-Stack Development", icon: Code2 },
  { label: "Houston Based Team", icon: MapPin },
];

interface FAQItem {
  question: string;
  answer: string;
}

interface SolutionsClientProps {
  faqData: FAQItem[];
}

export default function SolutionsClient({ faqData }: SolutionsClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ─── HERO — full-bleed background image that racks into focus on load ─── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
        className="min-h-screen flex items-center pt-[72px]"
      >
        {/* Ambient glow orbs on top of the photo overlay */}
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
              Full Capability Stack
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em" }}
          >
            <PrismReveal text="AI-Powered Solutions" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Built for Growth" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital delivers a complete stack of AI-powered marketing, web development,
            and custom programming solutions — all engineered around measurable business
            outcomes, not vanity metrics.
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
              Find Your Solution
            </Link>
            <Link
              href="/ai-marketing-employee"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee →
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

      {/* ─── QUICK ANSWER BLOCK (light lavender) ─── */}
      <Section background="transparent" spacing="md" maxWidth="2xl" withDivider className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_60%,#EEECFB_100%)] relative">
        <LavenderField variant="a" />
        <InkReveal origin="8% 40%" className="relative">
          <div
            className="rounded-2xl p-6 md:p-8 border"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(238,236,251,0.75))",
              borderColor: "rgba(107,78,240,0.22)",
              boxShadow: "0 12px 40px rgba(107,78,240,0.12)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
                  boxShadow: "0 0 16px rgba(107,78,240,0.4)",
                }}
              >
                <Zap size={18} color="#fff" />
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#6B4EF0", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Quick Answer
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#1F2340", fontFamily: "Inter, sans-serif" }}
                >
                  Echo5 Digital offers a comprehensive suite of AI-powered solutions spanning
                  digital marketing, SEO, AEO, paid advertising, social media, web design, web
                  development, custom programming, and CRM automation. Its flagship{" "}
                  <Link href="/ai-marketing-employee" className="underline underline-offset-2" style={{ color: "#6B4EF0" }}>
                    AI Marketing Employee
                  </Link>{" "}
                  product bundles these capabilities into done-for-you growth plans managed by
                  agentic AI with human oversight. Echo5 Digital serves small and mid-sized
                  businesses in Houston, Sugar Land, Texas, and nationally across the U.S.
                </p>
              </div>
            </div>
          </div>
        </InkReveal>
      </Section>

      {/* ─── SOLUTIONS GRID – AI MARKETING ─── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <GlowTrail className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <TrendingUp size={14} className="text-purple-400" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI Marketing Solutions
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Marketing That Runs on{" "}
            <span style={{ color: "#A855F7" }}>Artificial Intelligence</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            From SEO to paid media, our AI-powered marketing solutions operate continuously
            — generating traffic, leads, and revenue while you focus on running your business.
          </p>
        </GlowTrail>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {aiMarketingServices.map((service, i) => (
            <MagnetPop key={service.title} index={i}>
              <Link
                href={service.href}
                className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-[0.75rem]"
                aria-label={`Learn more about ${service.title}`}
              >
                <Card
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  badge={service.badge ?? undefined}
                  variant="service"
                />
              </Link>
            </MagnetPop>
          ))}
        </div>
      </Section>

      {/* ─── SOLUTIONS GRID – WEB & DEVELOPMENT (light lavender) ─── */}
      <Section background="transparent" spacing="lg" maxWidth="2xl" withDivider className="!bg-[linear-gradient(180deg,#EEECFB_0%,#F7F5FD_50%,#FFFFFF_100%)] relative">
        <LavenderField variant="b" />
        <GlowTrail className="mb-12 relative">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border" style={{ borderColor: "rgba(107,78,240,0.25)", background: "rgba(107,78,240,0.08)" }}>
            <Code2 size={14} style={{ color: "#6B4EF0" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#6B4EF0" }}
            >
              Web & Development Solutions
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#1F2340" }}
          >
            Build, Automate &{" "}
            <span style={{ color: "#6B4EF0" }}>Scale Your Tech Stack</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
          >
            From custom-coded websites to CRM integrations and reporting dashboards — our
            development team builds the digital infrastructure that powers your growth engine.
          </p>
        </GlowTrail>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {webDevServices.map((service, i) => {
            const palette = [
              { accent: "#6B4EF0", wash: "rgba(107,78,240,0.1)" },
              { accent: "#C026D3", wash: "rgba(192,38,212,0.1)" },
              { accent: "#0891B2", wash: "rgba(8,145,178,0.1)" },
              { accent: "#DB2777", wash: "rgba(219,39,119,0.1)" },
              { accent: "#7C3AED", wash: "rgba(124,58,237,0.1)" },
              { accent: "#059669", wash: "rgba(5,150,105,0.1)" },
            ][i % 6];
            return (
              <PeelCard key={service.title} index={i}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  style={{
                    background: `linear-gradient(160deg, rgba(255,255,255,0.9), ${palette.wash})`,
                    border: `1px solid ${palette.accent}2E`,
                    boxShadow: `0 4px 20px ${palette.accent}14`,
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${palette.accent}30, ${palette.accent}14)`,
                      border: `1px solid ${palette.accent}40`,
                    }}
                  >
                    <service.icon size={22} style={{ color: palette.accent }} strokeWidth={1.8} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1F2340" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                  >
                    {service.description}
                  </p>
                </Link>
              </PeelCard>
            );
          })}
        </div>
      </Section>

      {/* ─── AI EMPLOYEE PRODUCT OVERVIEW ─── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <InkReveal origin="20% 50%">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Bot size={14} className="text-purple-400" />
              <span
                className="text-xs font-semibold uppercase tracking-widest text-purple-400"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                AI Marketing Employee
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              One Unified System.{" "}
              <span style={{ color: "#A855F7" }}>Every Channel. Always On.</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Rather than purchasing siloed services from multiple vendors, Echo5 Digital&apos;s
              AI Marketing Employee bundles SEO, AEO, paid ads, social media, content, and
              reporting into a single continuously operating growth system — with a dedicated
              human team verifying quality at every step.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Done-for-you execution across all marketing channels",
                "Agentic AI that adapts in real time to market signals",
                "Human strategists reviewing and refining outputs weekly",
                "Scalable tiers to match your business stage and budget",
                "Unified reporting dashboard for complete transparency",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.5), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore AI Marketing Employee
              <ArrowRight size={16} />
            </Link>
          </InkReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED, #A855F7)",
              }}
            />
            <BlindsReveal
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI Marketing Employee system managing multiple marketing channels simultaneously"
              className="relative rounded-2xl border border-purple-400/30"
              imgClassName="w-full h-80 object-cover"
            />

            {/* Floating stat badges */}
            <FloatDrift
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl border shadow-xl"
              style={{
                backgroundColor: "#0A0F1E",
                borderColor: "rgba(124,58,237,0.4)",
                boxShadow: "0 0 20px rgba(124,58,237,0.3)",
              }}
              duration={3.2}
            >
              <div className="flex items-center gap-2">
                <Zap size={16} style={{ color: "#A855F7" }} />
                <span
                  className="text-sm font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  24/7 AI Execution
                </span>
              </div>
            </FloatDrift>

            <FloatDrift
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl border shadow-xl"
              style={{
                backgroundColor: "#0A0F1E",
                borderColor: "rgba(124,58,237,0.4)",
                boxShadow: "0 0 20px rgba(124,58,237,0.3)",
              }}
              duration={3.8}
              delay={0.6}
            >
              <div className="flex items-center gap-2">
                <Users size={16} style={{ color: "#A855F7" }} />
                <span
                  className="text-sm font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  Human QA Oversight
                </span>
              </div>
            </FloatDrift>
          </div>
        </div>
      </Section>

      {/* ─── INDUSTRIES SERVED STRIP ─── */}
      <Section background="default" spacing="md" maxWidth="2xl" withDivider>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Building2 size={14} className="text-purple-400" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Industries Served
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Vertical Expertise{" "}
            <span style={{ color: "#A855F7" }}>Across Every Sector</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital brings deep industry knowledge to every campaign, tailoring strategies
            to the unique competitive dynamics of your market.
          </p>
        </div>

        <DiagonalSweep
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Diverse industry professionals collaborating on a growth strategy"
          className="rounded-2xl border border-purple-500/20 mb-10"
          imgClassName="w-full h-56 md:h-64 object-cover"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <MagnetPop key={industry.label} index={i}>
                <Link
                  href={industry.href}
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(124,58,237,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(168,85,247,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      "rgba(124,58,237,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 4px 20px rgba(124,58,237,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(124,58,237,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-xs font-semibold text-center leading-tight"
                    style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                  >
                    {industry.label}
                  </span>
                </Link>
              </MagnetPop>
            );
          })}
        </div>
      </Section>

      {/* ─── HOW ECHO5 DIGITAL WORKS (light lavender) ─── */}
      <Section background="transparent" spacing="lg" maxWidth="2xl" withDivider className="!bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_50%,#EEECFB_100%)] relative">
        <LavenderField variant="c" />
        <GlowTrail className="text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border" style={{ borderColor: "rgba(107,78,240,0.25)", background: "rgba(107,78,240,0.08)" }}>
            <RefreshCw size={14} style={{ color: "#6B4EF0" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#6B4EF0" }}
            >
              How It Works
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#1F2340" }}
          >
            From Onboarding to{" "}
            <span style={{ color: "#6B4EF0" }}>Compounding Growth</span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
          >
            Our five-phase operational model gives you confidence in the process — from day
            one discovery through ongoing AI execution and transparent reporting.
          </p>
        </GlowTrail>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            const palette = [
              { accent: "#6B4EF0" },
              { accent: "#C026D3" },
              { accent: "#0891B2" },
              { accent: "#DB2777" },
              { accent: "#059669" },
            ][i % 5];
            return (
              <MagnetPop key={step.number} index={i} className="flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative"
                  style={{
                    background: `linear-gradient(135deg, ${palette.accent}29, ${palette.accent}14)`,
                    border: `1px solid ${palette.accent}45`,
                    boxShadow: `0 4px 20px ${palette.accent}1F`,
                  }}
                >
                  <Icon size={28} style={{ color: palette.accent }} strokeWidth={1.6} />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${palette.accent}, #8B5CF6)`,
                      color: "#fff",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.65rem",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1F2340" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                >
                  {step.description}
                </p>
              </MagnetPop>
            );
          })}
        </div>
      </Section>

      {/* ─── LOCAL RELEVANCE ─── */}
      <Section background="default" spacing="md" maxWidth="2xl" withDivider>
        <InkReveal
          origin="90% 50%"
          className="rounded-2xl p-6 md:p-8 border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <MapPin size={22} color="#fff" />
            </div>
            <div>
              <h2
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston, Sugar Land & Businesses Nationwide
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                Small and mid-sized businesses throughout Houston and Sugar Land can access
                Echo5 Digital&apos;s full range of solutions locally, from web design and local SEO
                to Google Ads and CRM automation. The agency&apos;s Texas base means it understands
                the Houston metro competitive environment while also being equipped to serve
                national clients at scale.
              </p>
              <div className="flex flex-wrap gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                  style={{ color: "#E5E7EB" }}
                >
                  <span style={{ color: "#A855F7" }}>📞</span>
                  {/* verified phone */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                  style={{ color: "#E5E7EB" }}
                >
                  <span style={{ color: "#A855F7" }}>✉</span>
                  hello@echo5digital.com
                </a>
                <span className="flex items-center gap-2" style={{ color: "#E5E7EB" }}>
                  <span style={{ color: "#A855F7" }}>📍</span>
                  Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>
        </InkReveal>
      </Section>

      {/* ─── TRUST BAR ─── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Built on{" "}
            <span style={{ color: "#A855F7" }}>Technical Credibility</span>
          </h2>
          <p
            className="text-sm"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Our AI-first methodology is backed by platform partnerships, proven frameworks,
            and rigorous quality control.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustSignals.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <MagnetPop
                key={signal.label}
                index={i}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={18} style={{ color: "#A855F7" }} />
                </div>
                <span
                  className="text-xs font-semibold text-center leading-tight"
                  style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                >
                  {signal.label}
                </span>
              </MagnetPop>
            );
          })}
        </div>
      </Section>

      {/* ─── FAQ (light lavender) ─── */}
      <Section background="transparent" spacing="lg" maxWidth="2xl" withDivider className="!bg-[linear-gradient(180deg,#EEECFB_0%,#F7F5FD_50%,#FFFFFF_100%)] relative">
        <LavenderField variant="b" />
        <div className="max-w-3xl mx-auto relative">
          <GlowTrail className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#1F2340" }}
            >
              Frequently Asked{" "}
              <span style={{ color: "#6B4EF0" }}>Questions</span>
            </h2>
          </GlowTrail>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <PeelCard
                key={index}
                index={index}
                className="rounded-xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: openFaq === index
                    ? "rgba(107,78,240,0.4)"
                    : "rgba(107,78,240,0.18)",
                  backgroundColor: openFaq === index
                    ? "rgba(107,78,240,0.08)"
                    : "rgba(255,255,255,0.6)",
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-xl"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1F2340" }}
                  >
                    {item.question}
                  </span>
                  <span className="flex-shrink-0" style={{ color: "#6B4EF0" }}>
                    {openFaq === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5"
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "#5B5F73",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </PeelCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA – FIND YOUR SOLUTION ─── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Messaging */}
          <InkReveal origin="15% 20%">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Zap size={14} className="text-purple-400" />
              <span
                className="text-xs font-semibold uppercase tracking-widest text-purple-400"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get Started
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Find the Right{" "}
              <span style={{ color: "#A855F7" }}>Solution for Your Business</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Tell us about your business, your goals, and where you&apos;re at today. Our team
              will review your situation and recommend the right plan — whether that&apos;s a
              single service, an AI Marketing Employee bundle, or a full custom engagement.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Search,
                  title: "Marketing Audit",
                  desc: "Get a free review of your current digital presence",
                },
                {
                  icon: Globe,
                  title: "Website Review",
                  desc: "Identify conversion and technical improvement opportunities",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Strategy",
                  desc: "Receive a tailored roadmap for your business stage",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      <Icon size={18} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm mb-0.5"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{
                          color: "rgba(229,231,235,0.6)",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </InkReveal>

          {/* Right: Contact Form */}
          <InkReveal origin="85% 30%" delay={0.1}>
            <ContactForm
              heading="Find Your Solution"
              subheading="Describe your business and goals — we'll recommend the right plan."
              submitLabel="Get My Recommendation"
              showAppointmentNote={true}
            />
          </InkReveal>
        </div>
      </Section>
    </main>
  );
}