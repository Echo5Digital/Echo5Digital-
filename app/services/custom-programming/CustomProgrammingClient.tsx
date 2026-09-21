"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FocusPullHero, PrismReveal } from "@/components/SolutionsFX";
import {
  Code2,
  Plug,
  Bot,
  Database,
  LayoutDashboard,
  Wrench,
  Network,
  ChevronDown,
  CheckCircle,
  Zap,
  Shield,
  GitBranch,
  Layers,
  Terminal,
  RefreshCw,
  Users,
  BarChart3,
  Settings,
  Clock,
  Star,
} from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

const whatWeBuild = [
  {
    icon: Wrench,
    title: "Custom Business Tools",
    description:
      "Bespoke internal applications built around your exact workflows — from client onboarding portals to operational management systems.",
    badge: "Popular",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description:
      "Connect disparate platforms and services with reliable, well-documented API integrations that keep your data flowing in real time.",
    badge: "",
  },
  {
    icon: Bot,
    title: "Automation Scripts",
    description:
      "Eliminate repetitive manual tasks with intelligent automation scripts that run on schedule or triggered by business events.",
    badge: "",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Ingest, transform, and route data from multiple sources into structured formats your team and tools can act on immediately.",
    badge: "",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description:
      "Purpose-built reporting dashboards surfacing the KPIs that matter most to your team — no bloat, no noise.",
    badge: "",
  },
  {
    icon: Settings,
    title: "Internal Tools",
    description:
      "Admin panels, CMS extensions, and operational tools that give your team superpowers without the enterprise price tag.",
    badge: "",
  },
  {
    icon: Network,
    title: "Third-Party System Integrations",
    description:
      "Seamlessly connect CRMs, marketing platforms, ERP systems, and payment gateways into a unified operational stack.",
    badge: "",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Full-stack web applications built from the ground up — scalable, secure, and aligned with your business model.",
    badge: "",
  },
];

const useCases = [
  {
    icon: RefreshCw,
    title: "Automating Manual Workflows",
    description:
      "A Houston-based services company was spending 15+ hours per week manually moving data between spreadsheets and their CRM. Echo5 Digital built a lightweight automation layer that eliminated the manual steps entirely, freeing the team for higher-value work.",
  },
  {
    icon: BarChart3,
    title: "Connecting Marketing Data Sources",
    description:
      "Marketers need unified visibility. We build data pipelines that pull from Google Ads, Meta, HubSpot, and more into a single custom dashboard — giving decision-makers a real-time view of spend and performance.",
  },
  {
    icon: LayoutDashboard,
    title: "Proprietary Reporting Dashboards",
    description:
      "Off-the-shelf analytics tools rarely show exactly what you need. We build custom dashboard applications that surface your unique KPIs, branded and deployed for internal or client-facing use.",
  },
  {
    icon: Users,
    title: "Extending CRM Functionality",
    description:
      "Need your CRM to do something it was never designed to do? We build extensions, webhooks, and middleware that make your existing tools dramatically more powerful without a full platform swap.",
  },
];

const techStack = [
  { label: "TypeScript", category: "Language" },
  { label: "Next.js 14", category: "Framework" },
  { label: "Node.js", category: "Runtime" },
  { label: "React", category: "UI" },
  { label: "MongoDB", category: "Database" },
  { label: "PostgreSQL", category: "Database" },
  { label: "REST & GraphQL", category: "APIs" },
  { label: "Webhooks", category: "Integration" },
  { label: "Vercel / AWS", category: "Deploy" },
  { label: "GitHub Actions", category: "CI/CD" },
  { label: "Tailwind CSS", category: "Styling" },
  { label: "OpenAI APIs", category: "AI" },
];

const processSteps = [
  {
    step: "01",
    title: "Requirements Discovery",
    description:
      "We start by deeply understanding your business problem, existing systems, and success criteria through structured discovery sessions.",
    icon: Users,
  },
  {
    step: "02",
    title: "Scoping & Architecture",
    description:
      "We define deliverables, timelines, and the technical architecture — ensuring alignment before a single line of code is written.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Development happens in focused sprints with regular check-ins. You see progress early and can provide feedback throughout.",
    icon: Terminal,
  },
  {
    step: "04",
    title: "QA & Testing",
    description:
      "Rigorous quality assurance including unit tests, integration tests, and real-world scenario testing before any handoff.",
    icon: Shield,
  },
  {
    step: "05",
    title: "Delivery & Deployment",
    description:
      "Clean handoff with full documentation, deployment to your preferred environment, and a walkthrough for your team.",
    icon: Zap,
  },
  {
    step: "06",
    title: "Ongoing Support",
    description:
      "Optional retainer or support packages to keep your custom solution maintained, updated, and performing as your business evolves.",
    icon: RefreshCw,
  },
];

const trustIndicators = [
  {
    icon: Star,
    metric: "Custom Builds Delivered",
    value: "50+",
    note: "Across Houston, Sugar Land & national clients",
  },
  {
    icon: Clock,
    metric: "Average Project Turnaround",
    value: "2–6 Weeks",
    note: "Depending on scope and complexity",
  },
  {
    icon: Shield,
    metric: "U.S.-Based Team",
    value: "Houston, TX",
    note: "With extended dev capacity from Kochi, India",
  },
  {
    icon: CheckCircle,
    metric: "Client Satisfaction",
    value: "100%",
    note: "On-scope, on-time delivery focus",
  },
];

const ecosystemItems = [
  {
    icon: Bot,
    title: "AI Marketing Employee",
    desc: "Custom data pipelines and API connectors feed directly into the AI Marketing Employee for intelligent, automated campaign management.",
    image: "/user-people-network-circuit-board-link-connection-technology-100kb.jpg",
    alt: "Abstract network diagram connecting linked user profile icons",
  },
  {
    icon: Database,
    title: "CRM Automation",
    desc: "Bespoke middleware and webhooks extend CRM functionality, triggering automations and syncing data across your entire sales stack.",
    image: "/3d-graph-computer-illustration-100kb.jpg",
    alt: "Illustrated hand touching floating holographic bar and line charts",
  },
  {
    icon: LayoutDashboard,
    title: "Reporting Dashboards",
    desc: "Custom-built data aggregation layers power the Echo5 reporting dashboard, giving you unified visibility across every marketing channel.",
    image: "/dash.jpg",
    alt: "Dashboard interface showing balance, earnings, and investment growth chart",
  },
];

function EcosystemList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ borderTop: "1px solid rgba(124,58,237,0.25)" }}>
      {ecosystemItems.map(({ icon: Icon, title, desc, image, alt }, i) => {
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

export default function CustomProgrammingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800"
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
            <Code2 size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Custom Programming Services
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#E5E7EB" }}
          >
            <PrismReveal text="Software Built" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Exactly for Your Business" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Off-the-shelf tools weren't built for your specific workflows. Echo5 Digital
            engineers bespoke software, API integrations, and automation solutions that solve
            your exact business problems — nothing more, nothing less.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Discuss Your Project
            </a>
            <a
              href="#what-we-build"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See What We Build
            </a>
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

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="lavender" spacing="md" withDivider id="quick-answer">
        <motion.div
          className="max-w-3xl mx-auto rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #EDE6FB 0%, #E4D9F7 100%)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              }}
            >
              <Zap size={16} color="#fff" />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#6D28D9", fontFamily: "Inter, sans-serif" }}
            >
              Quick Answer
            </span>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(30,23,56,0.85)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital offers custom programming services for businesses that need bespoke
            software solutions, API integrations, automation tools, and internal business
            applications. Based in Houston and Sugar Land, Texas, the team builds tailored
            solutions using modern web technologies that connect systems, automate workflows,
            and support marketing and operational goals for U.S. clients nationwide.
          </p>
        </motion.div>
      </Section>

      {/* ── WHAT WE BUILD ── */}
      <Section background="default" spacing="lg" id="what-we-build" withDivider>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What We Build
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            From lightweight automation scripts to full-stack business applications, Echo5
            Digital's custom programming scope covers a broad range of technical challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeBuild.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                className="relative p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.1 }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <IconComp size={20} style={{ color: "#A855F7" }} />
                  </div>
                  {item.badge && (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── USE CASES ── */}
      <Section background="lavender" spacing="lg" withDivider id="use-cases" className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C4B5FD 0%, #E9D5FF 45%, transparent 70%)" }}
        />
        <motion.div
          className="relative text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            Real-World Use Cases
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
          >
            Custom programming delivers the most value when it solves a specific, repeatable
            business problem. Here's where clients find the biggest wins.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((uc, i) => {
            const IconComp = uc.icon;
            return (
              <motion.div
                key={uc.title}
                className="flex gap-5 p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
                >
                  <IconComp size={22} color="#fff" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                  >
                    {uc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                  >
                    {uc.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── TECHNOLOGY & APPROACH ── */}
      <Section background="elevated" spacing="lg" withDivider id="technology">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Technology &amp; Approach
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital applies a modern, API-first development methodology to every
              custom project. We build with TypeScript for type safety and maintainability,
              Next.js for full-stack web applications, and MongoDB-ready architecture for
              flexible data modeling. Every system we build is designed to integrate — not
              operate in isolation.
            </p>
            <ul className="space-y-3">
              {[
                "API-first design for maximum integration flexibility",
                "TypeScript throughout for reliability and maintainability",
                "Modular architecture that grows with your business",
                "Security-conscious development practices by default",
                "Full documentation delivered with every project",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <h3
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Our Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="flex flex-col gap-0.5 px-4 py-2 rounded-xl"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.25)",
                  }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: "#E5E7EB",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {tech.label}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}
                  >
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="lavender" spacing="lg" withDivider id="how-it-works">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            How It Works
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
          >
            A clear, repeatable process from first conversation to final delivery — so you
            always know where your project stands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => {
            const IconComp = step.icon;
            const glows = [
              "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(34,211,238,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(168,85,247,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(59,130,246,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(217,119,6,0.35), transparent 55%), #10182B",
              "radial-gradient(circle at 100% 0%, rgba(236,72,153,0.35), transparent 55%), #10182B",
            ];
            const accents = ["#34D399", "#22D3EE", "#C084FC", "#60A5FA", "#F59E0B", "#F472B6"];
            const accent = accents[i % accents.length];
            return (
              <motion.div
                key={step.step}
                className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: glows[i % glows.length],
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 30px rgba(10,15,30,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = accent;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${accent}, 0 16px 40px ${accent}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(10,15,30,0.25)";
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full"
                  style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
                />
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: accent }}
                  >
                    {step.step}
                  </span>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <IconComp size={18} style={{ color: accent }} strokeWidth={1.8} />
                  </div>
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F1F5F9" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(226,232,240,0.65)", fontFamily: "Inter, sans-serif" }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── INTEGRATION WITH ECHO5 SYSTEMS ── */}
      <Section background="gradient" spacing="lg" withDivider id="echo5-integration">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Layers size={14} />
            The Echo5 Ecosystem
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Integrated with the Full Echo5 Stack
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Custom programming work doesn't live in isolation at Echo5 Digital. Every solution
            we build is designed to integrate with our broader AI Marketing Employee system,
            CRM automation layer, and custom reporting dashboards — creating a fully connected
            growth stack.
          </p>
        </motion.div>

        <EcosystemList />
      </Section>

      {/* ── TRUST INDICATORS ── */}
      <Section background="lavender" spacing="lg" withDivider id="trust" className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C4B5FD 0%, #E9D5FF 45%, transparent 70%)" }}
        />
        <motion.div
          className="relative text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            Why Businesses Trust Echo5 Digital
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
          >
            Credibility built through delivered results — not promises.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustIndicators.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.metric}
                className="text-center p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 4px 16px rgba(124,58,237,0.08)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
                >
                  <IconComp size={22} color="#fff" />
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.value}
                </div>
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  {item.metric}
                </div>
                <div className="text-xs" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                  {item.note}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Case Study Placeholder */}
        <motion.div
          className="relative rounded-2xl p-8 md:p-10 bg-white"
          style={{ border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 4px 16px rgba(124,58,237,0.08)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  color: "#7C3AED",
                  fontFamily: "Inter, sans-serif",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                Case Study
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                Houston Services Firm: 80% Reduction in Manual Data Work
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
              >
                A Sugar Land-based professional services company engaged Echo5 Digital to
                automate their client onboarding process. By building a custom integration
                between their intake form, CRM, and billing system, we eliminated 15+ hours
                of weekly manual data entry and reduced onboarding errors by over 90%.
              </p>
              <div className="flex flex-wrap gap-2">
                {["CRM Integration", "Automation", "API Development", "Houston Client"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(124,58,237,0.1)",
                        color: "#7C3AED",
                        fontFamily: "Inter, sans-serif",
                        border: "1px solid rgba(124,58,237,0.25)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="md:w-48 shrink-0">
              <div
                className="rounded-xl p-5 text-center"
                style={{ background: "linear-gradient(135deg, #EDE6FB 0%, #E4D9F7 100%)", border: "1px solid rgba(124,58,237,0.2)" }}
              >
                <div
                  className="text-4xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  80%
                </div>
                <div className="text-xs" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                  Reduction in manual data work
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-base"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Common questions about custom programming projects with Echo5 Digital.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)"}`,
                  background:
                    openFaq === index
                      ? "rgba(124,58,237,0.08)"
                      : "rgba(255,255,255,0.02)",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: (index % 6) * 0.06 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className="text-sm md:text-base font-semibold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: openFaq === index ? "#A855F7" : "#E5E7EB",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "#A855F7",
                      transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: openFaq === index ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div className="px-6 pb-5">
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section background="transparent" spacing="xl" maxWidth="3xl" withDivider id="contact" className="!bg-[#EEECFB]">
        {/* Hidden UTM fields rendered as data attributes for tracking */}
        <input type="hidden" name="utm_source" value="" aria-hidden="true" className="sr-only" />
        <input type="hidden" name="utm_medium" value="" aria-hidden="true" className="sr-only" />
        <input type="hidden" name="utm_campaign" value="custom-programming" aria-hidden="true" className="sr-only" />
        <input type="hidden" name="page_source" value="/services/custom-programming" aria-hidden="true" className="sr-only" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: CTA copy */}
          <motion.div
            className="flex-1 lg:pt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold mb-5"
              style={{ color: "#6B4EF0" }}
            >
              Start Your Custom Project
            </div>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Let's Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Made for You
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73" }}>
              Tell us about your business challenge and we'll outline a technical approach. No
              obligation, no fluff — just a straight conversation about what's possible and
              what it would take to build it.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Requirements discovery call — no charge",
                "Written scope and timeline estimate",
                "U.S.-based team, Houston & Sugar Land",
                "API-first, TypeScript development",
                "Full documentation on delivery",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#15172B" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* NAP */}
            <div className="space-y-2 text-sm">
              <p style={{ color: "#5B5F73" }}>Or reach us directly:</p>
              <a href="tel:+17134897004" className="block" style={{ color: "#4F32D9" }}>
                📞 713-489-7004
              </a>
              <a href="mailto:sales@echo5digital.com" className="block" style={{ color: "#4F32D9" }}>
                ✉️ sales@echo5digital.com
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <ContactForm
              heading="Discuss Your Custom Project"
              subheading="Describe your project and we'll get back to you within 24 hours with initial thoughts and next steps."
              submitLabel="Send Project Details"
              showAppointmentNote={true}
            />
          </motion.div>
        </div>
      </Section>
    </>
  );
}