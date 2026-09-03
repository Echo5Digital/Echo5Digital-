"use client";

import { useState } from "react";
import Link from "next/link";
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
  ArrowRight,
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
import Card from "@/components/Card";
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

export default function CustomProgrammingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #A855F7 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Code2 size={14} />
            Custom Programming Services
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Software Built
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Exactly for Your Business
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Off-the-shelf tools weren't built for your specific workflows. Echo5 Digital
            engineers bespoke software, API integrations, and automation solutions that solve
            your exact business problems — nothing more, nothing less.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 24px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#what-we-build"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
              style={{
                border: "1px solid rgba(124,58,237,0.5)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See What We Build
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative z-10 mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.25)" }}>
          <img
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Custom software development team working on bespoke business solutions"
            className="w-full object-cover h-64 md:h-96"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 60%)",
            }}
          />
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider id="quick-answer">
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
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
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Quick Answer
            </span>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital offers custom programming services for businesses that need bespoke
            software solutions, API integrations, automation tools, and internal business
            applications. Based in Houston and Sugar Land, Texas, the team builds tailored
            solutions using modern web technologies that connect systems, automate workflows,
            and support marketing and operational goals for U.S. clients nationwide.
          </p>
        </div>
      </Section>

      {/* ── WHAT WE BUILD ── */}
      <Section background="default" spacing="lg" id="what-we-build" withDivider>
        <div className="text-center mb-12">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeBuild.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              badge={item.badge || undefined}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── USE CASES ── */}
      <Section background="gradient" spacing="lg" withDivider id="use-cases">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Real-World Use Cases
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Custom programming delivers the most value when it solves a specific, repeatable
            business problem. Here's where clients find the biggest wins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((uc) => {
            const IconComp = uc.icon;
            return (
              <div
                key={uc.title}
                className="flex gap-5 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <IconComp size={22} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    {uc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {uc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── TECHNOLOGY & APPROACH ── */}
      <Section background="elevated" spacing="lg" withDivider id="technology">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>

          <div>
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
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" withDivider id="how-it-works">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How It Works
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            A clear, repeatable process from first conversation to final delivery — so you
            always know where your project stands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <IconComp size={18} style={{ color: "#A855F7" }} />
                  </div>
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── INTEGRATION WITH ECHO5 SYSTEMS ── */}
      <Section background="gradient" spacing="lg" withDivider id="echo5-integration">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.25)" }}>
            <img
              src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital integrated marketing and programming ecosystem"
              className="w-full object-cover h-72 md:h-80"
            />
          </div>
          <div className="order-1 lg:order-2">
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
              className="text-base leading-relaxed mb-6"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Custom programming work doesn't live in isolation at Echo5 Digital. Every solution
              we build is designed to integrate with our broader AI Marketing Employee system,
              CRM automation layer, and custom reporting dashboards — creating a fully connected
              growth stack.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "AI Marketing Employee",
                  desc: "Custom data pipelines and API connectors feed directly into the AI Marketing Employee for intelligent, automated campaign management.",
                },
                {
                  title: "CRM Automation",
                  desc: "Bespoke middleware and webhooks extend CRM functionality, triggering automations and syncing data across your entire sales stack.",
                },
                {
                  title: "Reporting Dashboards",
                  desc: "Custom-built data aggregation layers power the Echo5 reporting dashboard, giving you unified visibility across every marketing channel.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <ArrowRight
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <div>
                    <span
                      className="text-sm font-semibold"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#E5E7EB",
                      }}
                    >
                      {item.title}:{" "}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST INDICATORS ── */}
      <Section background="elevated" spacing="lg" withDivider id="trust">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Businesses Trust Echo5 Digital
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Credibility built through delivered results — not promises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustIndicators.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.metric}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mx-auto mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <IconComp size={22} style={{ color: "#A855F7" }} />
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
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  {item.metric}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}
                >
                  {item.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study Placeholder */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                Case Study
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-3"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                Houston Services Firm: 80% Reduction in Manual Data Work
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
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
                        background: "rgba(124,58,237,0.15)",
                        color: "#A855F7",
                        fontFamily: "Inter, sans-serif",
                        border: "1px solid rgba(168,85,247,0.25)",
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
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
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
                <div
                  className="text-xs"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  Reduction in manual data work
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
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
          </div>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section background="gradient" spacing="xl" withDivider id="contact">
        {/* Hidden UTM fields rendered as data attributes for tracking */}
        <input type="hidden" name="utm_source" value="" aria-hidden="true" className="sr-only" />
        <input type="hidden" name="utm_medium" value="" aria-hidden="true" className="sr-only" />
        <input type="hidden" name="utm_campaign" value="custom-programming" aria-hidden="true" className="sr-only" />
        <input type="hidden" name="page_source" value="/services/custom-programming" aria-hidden="true" className="sr-only" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA copy */}
          <div className="pt-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={14} />
              Start Your Custom Project
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Let's Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Made for You
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
            >
              Tell us about your business challenge and we'll outline a technical approach. No
              obligation, no fluff — just a straight conversation about what's possible and
              what it would take to build it.
            </p>

            <div className="space-y-4">
              {[
                "Requirements discovery call — no charge",
                "Written scope and timeline estimate",
                "U.S.-based team, Houston & Sugar Land",
                "API-first, TypeScript development",
                "Full documentation on delivery",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span
                    className="text-sm"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-5 rounded-2xl"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Prefer to reach out directly?
              </p>
              <div className="flex flex-col gap-2 mt-2">
                {/* Phone — verified fact */}
                <a
                  href="tel:713-489-7004"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  📞 713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                >
                  ✉️ hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <ContactForm
              heading="Discuss Your Custom Project"
              subheading="Describe your project and we'll get back to you within 24 hours with initial thoughts and next steps."
              submitLabel="Send Project Details"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}