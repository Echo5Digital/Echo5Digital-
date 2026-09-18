"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { TiltCard, BlurIn, ScrollProgressRail, DiagonalWipe } from "@/components/ScrollFX";
import { FocusPullHero, PrismReveal, LavenderField } from "@/components/SolutionsFX";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Mail,
  GitBranch,
  RefreshCw,
  Tag,
  Plug,
  Bot,
  Search,
  Wrench,
  FlaskConical,
  Rocket,
  TrendingUp,
  Stethoscope,
  Home,
  Scale,
  Building2,
  HardHat,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Clock,
  BarChart3,
  CheckCircle,
  Megaphone,
  Database,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function CrmAutomationClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ color: "#E5E7EB" }}>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="/woman-enjoying-her-financially-independence-while-buying-car-100kb.jpg"
        mobileSrc="/business-people-shaking-hands-meeting-room-100kb.jpg"
        className="min-h-screen flex items-center pt-[72px]"
      >
        {/* Glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Zap size={14} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
              CRM Automation Services
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <PrismReveal text="Turn Leads Into" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="Customers Automatically" delay={0.5} />
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital designs and deploys intelligent CRM automation systems that
            capture every lead, nurture prospects through your pipeline, and close deals
            with zero manual follow-up.
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
              Book a Free CRM Audit
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-full font-semibold text-sm text-white border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See How It Works
            </a>
          </div>

          {/* Scroll cue */}
          <motion.div
            aria-hidden="true"
            className="mt-16 mx-auto w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
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

      {/* ── QUICK ANSWER ── */}
      <Section background="lavender" spacing="md" withDivider>
        <BlurIn>
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, #EDE6FB 0%, #E4D9F7 100%)",
              border: "1px solid rgba(124,58,237,0.2)",
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
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#7C3AED", fontFamily: "Inter, sans-serif" }}
                >
                  Quick Answer
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                >
                  Echo5 Digital's CRM automation service connects marketing, sales, and
                  follow-up workflows so that leads captured from digital channels are
                  automatically nurtured and moved through the sales pipeline. Designed for
                  small and mid-sized businesses in Houston, Sugar Land, Texas, and
                  nationally, this service eliminates manual follow-up gaps and integrates
                  directly with Echo5 Digital's AI Marketing Employee system for a fully
                  automated growth engine.
                </p>
              </div>
            </div>
          </div>
        </BlurIn>
      </Section>

      {/* ── WHAT IS CRM AUTOMATION ── */}
      <Section background="default" spacing="lg" withDivider className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, #A855F7 45%, transparent 70%)" }}
        />

        <div className="relative grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <BlurIn>
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                What Is CRM Automation
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                  lineHeight: "1.2",
                }}
              >
                Your Sales Pipeline on{" "}
                <span style={{ color: "#A855F7" }}>Autopilot</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                CRM automation connects your marketing, sales, and customer follow-up
                workflows into a single, intelligent system — so leads are captured,
                nurtured, and converted without requiring manual effort at every step.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: Zap,
                    title: "A lead comes in",
                    description: "A form fill, ad click, or phone call instantly creates a CRM record.",
                  },
                  {
                    icon: GitBranch,
                    title: "The pipeline reacts",
                    description: "The lead is assigned to the right stage and a personalized follow-up sequence launches.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Your team steps in",
                    description: "Sales gets notified at exactly the right moment — no lead ever falls through the cracks.",
                  },
                ].map((row, i) => (
                  <BlurIn key={row.title} delay={0.1 + i * 0.1}>
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                          boxShadow: "0 0 16px rgba(124,58,237,0.4)",
                        }}
                      >
                        <row.icon size={19} color="#fff" />
                      </div>
                      <div>
                        <h3
                          className="text-base font-semibold mb-0.5"
                          style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                        >
                          {row.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                        >
                          {row.description}
                        </p>
                      </div>
                    </div>
                  </BlurIn>
                ))}
              </div>

              <div
                className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)" }}
              >
                <TrendingUp size={15} style={{ color: "#A855F7" }} />
                <span className="text-xs font-semibold" style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
                  Faster response times · fewer dropped leads · higher close rates
                </span>
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.15}>
            <TiltCard index={0}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                />
                <img
                  src="/customer-relationship-management-concept 1-100kb.jpg"
                  alt="CRM concept graphic showing connected customer loyalty, communication, database, and analytics workflows"
                  className="relative w-full rounded-2xl object-cover"
                  style={{
                    height: "420px",
                    border: "1px solid rgba(168,85,247,0.35)",
                    boxShadow: "0 24px 60px -12px rgba(91,63,163,0.5)",
                  }}
                />
                <div
                  className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md"
                  style={{ background: "rgba(10,15,30,0.75)", border: "1px solid rgba(168,85,247,0.35)" }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                  >
                    <Clock size={16} color="#fff" />
                  </div>
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: "Inter, sans-serif" }}>
                    One connected system — zero manual handoffs
                  </span>
                </div>
              </div>
            </TiltCard>
          </BlurIn>
        </div>
      </Section>

      {/* ── AUTOMATION CAPABILITIES ── */}
      <Section background="lavender" spacing="lg" withDivider className="relative overflow-hidden">
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
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "#6B4EF0",
                borderColor: "rgba(124,58,237,0.25)",
                background: "rgba(124,58,237,0.08)",
              }}
            >
              Capabilities
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              What Echo5 Digital Automates for You
            </h2>
          </BlurIn>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Lead Capture Automation",
              description:
                "Every lead from web forms, ads, landing pages, and inbound calls is automatically captured and entered into your CRM — no manual data entry required.",
              gradient: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
              accent: "#7C3AED",
            },
            {
              icon: Mail,
              title: "Email & SMS Follow-Up Sequences",
              description:
                "Personalized, timed email and SMS sequences are triggered automatically based on lead behavior, pipeline stage, and engagement signals.",
              gradient: "linear-gradient(135deg, #DB2777 0%, #F472B6 100%)",
              accent: "#DB2777",
            },
            {
              icon: GitBranch,
              title: "Pipeline Stage Automation",
              description:
                "Contacts are automatically advanced or flagged in your pipeline based on their actions — booking an appointment, opening an email, or completing a form.",
              gradient: "linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)",
              accent: "#4F46E5",
            },
            {
              icon: RefreshCw,
              title: "CRM Data Syncing",
              description:
                "Keep your CRM records clean and current with automated syncing across platforms — no more duplicate entries or stale contact data.",
              gradient: "linear-gradient(135deg, #0891B2 0%, #22D3EE 100%)",
              accent: "#0891B2",
            },
            {
              icon: Tag,
              title: "Contact Tagging & Segmentation",
              description:
                "Leads are automatically tagged and segmented by source, behavior, or interest so your team can prioritize outreach and personalize messaging.",
              gradient: "linear-gradient(135deg, #C026D3 0%, #E879F9 100%)",
              accent: "#C026D3",
            },
            {
              icon: Plug,
              title: "Marketing Platform Integrations",
              description:
                "Seamlessly connect your CRM to Google Ads, Meta Ads, SEO tools, website forms, and social platforms for a unified data flow.",
              gradient: "linear-gradient(135deg, #EA580C 0%, #FB923C 100%)",
              accent: "#EA580C",
            },
          ].map((cap, i) => (
            <TiltCard key={cap.title} index={i}>
              <div
                className="group relative h-full p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 100% 0%, ${cap.accent}59, transparent 55%), #10182B`,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 30px rgba(10,15,30,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = cap.accent;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${cap.accent}, 0 16px 40px ${cap.accent}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(10,15,30,0.25)";
                }}
              >
                {/* Glowing corner dot */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full"
                  style={{ background: cap.accent, boxShadow: `0 0 8px ${cap.accent}` }}
                />

                <div className="flex items-start gap-4 mb-5">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: cap.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <cap.icon size={18} style={{ color: cap.accent }} strokeWidth={1.8} />
                  </div>
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F1F5F9" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(226,232,240,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  {cap.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ── HOW IT CONNECTS TO AI MARKETING EMPLOYEE ── */}
      <Section background="gradient" spacing="lg" withDivider className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "radial-gradient(circle, #A855F7 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center mb-16">
          <BlurIn>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={13} />
              AI Marketing Employee Integration
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              The Missing Link in Your{" "}
              <span style={{ color: "#A855F7" }}>Growth Engine</span>
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's CRM automation isn't a standalone tool — it's a core
              component of our{" "}
              <Link
                href="/ai-marketing-employee"
                style={{ color: "#A855F7", textDecoration: "underline" }}
              >
                AI Marketing Employee
              </Link>{" "}
              system. When the two are connected, your entire lead-to-revenue pipeline
              becomes self-sustaining, with no manual handoffs between stages.
            </p>
          </BlurIn>
        </div>

        {/* Three-stage pipeline flow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-start">
            {[
              {
                stage: "AI Generates Leads",
                icon: Megaphone,
                image: "/people-analyzing-checking-finance-graphs-office-100kb.jpg",
                alt: "Team analyzing marketing performance data on a dashboard",
                point: "Ad clicks and campaign data automatically create CRM contacts.",
              },
              {
                stage: "CRM Captures & Nurtures",
                icon: Database,
                image: "/businessman-application-human-digital-business-100kb.jpg",
                alt: "Connected network of contacts representing automated lead nurturing",
                point: "AI-crafted follow-up sequences launch instantly, with lead scoring updated in real time.",
              },
              {
                stage: "Your Team Closes",
                icon: CheckCircle,
                image: "/medium-shot-people-shaking-hands-work-100kb.jpg",
                alt: "Two colleagues shaking hands after closing a deal",
                point: "Your team gets notified only when a prospect is sales-ready.",
              },
            ].map((item, i) => (
              <BlurIn key={item.stage} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Stage badge */}
                  <div
                    className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                    }}
                  >
                    <item.icon size={14} color="#fff" />
                    <span
                      className="text-xs font-bold uppercase tracking-wider text-white"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.stage}
                    </span>
                  </div>

                  <TiltCard index={i} className="w-full">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full rounded-2xl object-cover"
                        style={{
                          height: "200px",
                          border: "1px solid rgba(124,58,237,0.3)",
                          boxShadow: "0 16px 40px -10px rgba(91,63,163,0.5)",
                        }}
                      />
                      <span
                        className="absolute -top-3 -left-3 flex items-center justify-center w-9 h-9 rounded-full text-sm font-black text-white"
                        style={{
                          background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                          boxShadow: "0 4px 14px rgba(124,58,237,0.5)",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                  </TiltCard>

                  <p
                    className="text-sm leading-relaxed mt-5 px-2"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.point}
                  </p>

                  {/* Connector to next stage (desktop only, not after the last card) */}
                  {i < 2 && (
                    <div
                      aria-hidden="true"
                      className="hidden md:flex absolute top-5 -right-2 translate-x-1/2 items-center justify-center w-10 h-10 rounded-full z-10"
                      style={{
                        background: "rgba(10,15,30,0.9)",
                        border: "1px solid rgba(168,85,247,0.4)",
                      }}
                    >
                      <ChevronRight size={18} style={{ color: "#A855F7" }} />
                    </div>
                  )}
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="transparent" spacing="lg" id="how-it-works" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="a" />

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
              Our Process
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              How We Build Your CRM Automation
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              A structured, six-step process from audit to ongoing optimization — no
              surprises, just a working automation system built around your business.
            </p>
          </DiagonalWipe>
        </div>

        {/* Numbered scroll-timeline of build steps, alternating image side per step */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollProgressRail>
            <div className="space-y-16 md:space-y-24 md:pl-14">
              {[
                {
                  number: "01",
                  icon: <Search size={22} />,
                  title: "CRM Workflow Audit",
                  desc: "We start by auditing your current CRM setup, lead sources, and existing follow-up processes to identify gaps and automation opportunities.",
                  image: "/search-find-view-information-data-graphic-symbol-icon-100kb.jpg",
                  alt: "Search and audit concept graphic representing a CRM workflow review",
                  stat: { label: "Outcome", value: "Gaps Identified" },
                },
                {
                  number: "02",
                  icon: <Wrench size={22} />,
                  title: "Workflow Design",
                  desc: "Our team designs a custom automation map, covering lead capture, nurture sequences, pipeline stages, and handoff triggers specific to your business.",
                  image: "/team-reviewing-marketing-strategies-digital-screen-100kb.jpg",
                  alt: "Team reviewing marketing strategy projections on a digital screen",
                  stat: { label: "Outcome", value: "Custom Automation Map" },
                },
                {
                  number: "03",
                  icon: <Plug size={22} />,
                  title: "Integration Build",
                  desc: "We connect your CRM to your marketing channels, website forms, ad platforms, and any other tools in your stack using native integrations or custom builds.",
                  image: "/user-people-network-circuit-board-link-connection-technology-100kb.jpg",
                  alt: "Connected contact nodes representing CRM and marketing platform integrations",
                  stat: { label: "Outcome", value: "Systems Connected" },
                },
                {
                  number: "04",
                  icon: <FlaskConical size={22} />,
                  title: "Testing & QA",
                  desc: "Every workflow is tested end-to-end before going live, verifying triggers, sequences, data sync, and notifications work exactly as designed.",
                  image: "/people-office-analyzing-checking-finance-graphs-100kb.jpg",
                  alt: "Team reviewing dashboard data during workflow testing",
                  stat: { label: "Outcome", value: "Verified End-to-End" },
                },
                {
                  number: "05",
                  icon: <Rocket size={22} />,
                  title: "Launch",
                  desc: "Your automation goes live. Leads start flowing through the pipeline automatically from day one, with your team briefed on the new system.",
                  image: "/futuristic-business-scene-with-ultra-modern-ambiance-80kb.jpg",
                  alt: "Modern office scene representing the automation going live",
                  stat: { label: "Outcome", value: "Live From Day One" },
                },
                {
                  number: "06",
                  icon: <TrendingUp size={22} />,
                  title: "Ongoing Optimization",
                  desc: "We monitor performance, analyze conversion data, and continuously refine your workflows to improve lead response times and close rates over time.",
                  image: "/laptop-displaying-business-analytics-90kb.jpg",
                  alt: "Business analytics dashboard used to monitor and optimize automation performance",
                  stat: { label: "Outcome", value: "Continuously Improved" },
                },
              ].map((item, i) => (
                <BlurIn key={item.number} delay={i * 0.06}>
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
                          {item.number}
                        </span>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                            boxShadow: "0 6px 16px rgba(124,58,237,0.35)",
                          }}
                        >
                          <span style={{ color: "#fff" }}>{item.icon}</span>
                        </div>
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-relaxed mb-4"
                        style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                      >
                        {item.desc}
                      </p>
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{ background: "#EEECFB" }}
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                        >
                          {item.stat.label}:
                        </span>
                        <span
                          className="text-xs font-bold"
                          style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                        >
                          {item.stat.value}
                        </span>
                      </div>
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

      {/* ── USE CASES BY INDUSTRY ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <BlurIn>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Industry Use Cases
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              CRM Automation Across Industries
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital tailors automation workflows to the specific lead flows and
              sales cycles of each industry we serve.
            </p>
          </BlurIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Stethoscope,
              industry: "Dental & Healthcare",
              description:
                "Automate appointment booking follow-ups, patient re-engagement sequences, and new patient onboarding — reducing no-shows and keeping the chair full.",
            },
            {
              icon: Home,
              industry: "Home Services",
              description:
                "Instantly respond to quote requests with automated SMS and email, follow up on estimates, and re-engage past customers for repeat business and referrals.",
            },
            {
              icon: Scale,
              industry: "Law Firms",
              description:
                "Capture consultation requests 24/7, nurture leads with educational content, and pipeline prospects from first inquiry to retained client automatically.",
            },
            {
              icon: Building2,
              industry: "Real Estate",
              description:
                "Trigger instant property alerts, automate buyer and seller nurture sequences, and track every prospect through their journey from inquiry to closing.",
            },
            {
              icon: HardHat,
              industry: "Contractors & Trades",
              description:
                "Never miss a bid request again — automate lead capture from every channel, send instant estimates, and follow up until the job is booked.",
            },
            {
              icon: TrendingUp,
              industry: "Small & Mid-Sized Businesses",
              description:
                "Whether you're a local retailer, SaaS company, or service business, Echo5 Digital builds automation that matches your unique sales cycle and growth goals.",
            },
          ].map((item, i) => (
            <TiltCard key={item.industry} index={i}>
              <div
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(168,85,247,0.5)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 32px rgba(124,58,237,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <item.icon size={20} style={{ color: "#A855F7" }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.industry}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(229,231,235,0.65)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ── TRUST INDICATORS ── */}
      <Section background="lavender" spacing="lg" withDivider>
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Clock,
              stat: "< 5 min",
              label: "Average Lead Response Time",
              sub: "vs. 47 hours industry average",
            },
            {
              icon: BarChart3,
              stat: "3–5×",
              label: "Conversion Rate Improvement",
              sub: "Typical client outcome",
            },
            {
              icon: Users,
              stat: "100%",
              label: "Lead Capture Rate",
              sub: "No more dropped inquiries",
            },
            {
              icon: Zap,
              stat: "24/7",
              label: "Automated Follow-Up",
              sub: "Works while you sleep",
            },
          ].map((stat, i) => (
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
                  {stat.stat}
                </span>
                <span
                  className="text-sm font-semibold text-white mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {stat.label}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}
                >
                  {stat.sub}
                </span>
              </div>
            </BlurIn>
          ))}
        </div>

        {/* Case study placeholders */}
        <div>
          <BlurIn>
            <h3
              className="text-2xl font-bold text-center mb-8"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Automation in Action
            </h3>
          </BlurIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: "Home Services Company",
                result: "Reduced lead response time from 6 hours to under 3 minutes with automated SMS follow-up sequences.",
                metric: "98% contact rate on new leads",
              },
              {
                industry: "Dental Practice",
                result: "Automated appointment reminders and re-engagement campaigns filled the schedule and reduced no-shows significantly.",
                metric: "40%+ reduction in no-shows",
              },
              {
                industry: "Law Firm",
                result: "CRM automation captured and nurtured consultation requests 24/7, converting more after-hours leads into retained clients.",
                metric: "2× more after-hours conversions",
              },
            ].map((cs, i) => (
              <BlurIn key={cs.industry} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgb(147, 72, 242)",
                    boxShadow: "0 4px 16px rgba(124,58,237,0.25)",
                  }}
                >
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      color: "#fff",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {cs.industry}
                  </span>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {cs.result}
                  </p>
                  <p
                    className="text-base font-bold text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {cs.metric}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    * Representative outcome — specific results vary by client and setup.
                  </p>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="lavender" spacing="md" withDivider>
        <BlurIn>
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, #EDE6FB 0%, #E4D9F7 100%)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 16px rgba(124,58,237,0.4)",
                }}
              >
                <Building2 size={22} color="#fff" />
              </div>
              <div>
                <h2
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  Serving Houston &amp; Sugar Land, Texas Businesses
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                >
                  Businesses in Houston and Sugar Land, Texas often lose leads due to slow
                  or inconsistent follow-up. Echo5 Digital's CRM automation service helps
                  local businesses capture every lead from their digital marketing campaigns
                  and move them through an automated pipeline, improving conversion rates
                  and freeing up staff time. We also serve businesses nationally across the
                  U.S.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  <address className="not-italic" style={{ color: "#5B5F73" }}>
                    <span style={{ color: "#7C3AED", fontWeight: 600 }}>Location:</span> Houston / Sugar Land, Texas
                  </address>
                  <a
                    href="tel:713-489-7004"
                    style={{ color: "#5B5F73" }}
                    className="hover:text-[#15172B] transition-colors"
                  >
                    {/* verified phone */}
                    <span style={{ color: "#7C3AED", fontWeight: 600 }}>Phone:</span> 713-489-7004
                  </a>
                  <a
                    href="mailto:hello@echo5digital.com"
                    style={{ color: "#5B5F73" }}
                    className="hover:text-[#15172B] transition-colors"
                  >
                    <span style={{ color: "#7C3AED", fontWeight: 600 }}>Email:</span> hello@echo5digital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlurIn>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <BlurIn>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                FAQ
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Common Questions
              </h2>
            </BlurIn>
          </div>

          <div className="space-y-3" role="list">
            {faqData.map((item, index) => (
              <BlurIn key={index} delay={Math.min(index, 6) * 0.05}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)"}`,
                    background:
                      openFaq === index
                        ? "rgba(124,58,237,0.08)"
                        : "rgba(255,255,255,0.03)",
                  }}
                  role="listitem"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={openFaq === index}
                    onClick={() => toggleFaq(index)}
                  >
                    <span
                      className="text-base font-semibold"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: openFaq === index ? "#A855F7" : "#E5E7EB",
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        background:
                          openFaq === index
                            ? "rgba(124,58,237,0.3)"
                            : "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.3)",
                        color: "#A855F7",
                      }}
                    >
                      {openFaq === index ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "rgba(229,231,235,0.7)",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section background="transparent" spacing="lg" id="lead-form" withDivider className="!bg-[#EEECFB]">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: CTA copy */}
          <BlurIn className="pt-4">
            <div>
              <p
                className="text-xs font-semibold mb-5"
                style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
              >
                Let&apos;s Grow Together
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#15172B",
                  lineHeight: "1.2",
                }}
              >
                Ready to Automate Your{" "}
                <span style={{ color: "#7C3AED" }}>Lead Pipeline?</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
              >
                Book a free CRM automation consultation with the Echo5 Digital team.
                We'll audit your current setup, identify automation opportunities, and
                show you exactly how we can turn your leads into customers — automatically.
              </p>

              <div className="space-y-4">
                {[
                  "Free workflow audit included",
                  "No long-term contracts required",
                  "Serving Houston, Sugar Land, and businesses nationwide",
                  "Integrates with your existing CRM and marketing stack",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                    <span
                      className="text-sm"
                      style={{
                        color: "#15172B",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2 text-sm">
                <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>Or reach us directly:</p>
                <a href="mailto:hello@echo5digital.com" className="block" style={{ color: "#4F32D9" }}>
                  ✉️ hello@echo5digital.com
                </a>
                {/* verified phone */}
                <a href="tel:713-489-7004" className="block" style={{ color: "#4F32D9" }}>
                  📞 713-489-7004
                </a>
              </div>
            </div>
          </BlurIn>

          {/* Right: Contact Form */}
          <BlurIn delay={0.15}>
            <ContactForm
              heading="Book a CRM Automation Consultation"
              subheading="Tell us about your business and current CRM setup. We'll reach out to schedule your free audit."
              submitLabel="Request My Free CRM Audit"
              showAppointmentNote={true}
            />
          </BlurIn>
        </div>
      </Section>
    </main>
  );
}