"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
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
  ArrowRight,
  Clock,
  BarChart3,
  CheckCircle,
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
    <main>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/29506609/pexels-photo-29506609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="CRM automation pipeline dashboard"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(124,58,237,0.15) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Zap size={13} />
            CRM Automation Services
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              lineHeight: "1.1",
            }}
          >
            Turn Leads Into Customers{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Automatically
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(229,231,235,0.7)",
              lineHeight: "1.7",
            }}
          >
            Echo5 Digital designs and deploys intelligent CRM automation systems that
            capture every lead, nurture prospects through your pipeline, and close deals
            — without a single manual follow-up.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free CRM Audit <ArrowRight size={18} />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
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
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
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
      </Section>

      {/* ── WHAT IS CRM AUTOMATION ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              CRM automation is the process of connecting your marketing, sales, and
              customer follow-up workflows into a single, intelligent system — so that
              leads are captured, nurtured, and converted without requiring manual effort
              at every step.
            </p>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              When a prospect fills out a form, clicks an ad, or calls your business,
              CRM automation instantly assigns them to the right pipeline stage, triggers
              a personalized follow-up sequence, and notifies your sales team at exactly
              the right moment — all without anyone lifting a finger.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              The result: faster response times, fewer dropped leads, and a measurable
              improvement in your close rate.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/12932575/pexels-photo-12932575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Automated CRM sales funnel workflow diagram"
              className="w-full rounded-2xl object-cover"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, transparent 60%, rgba(124,58,237,0.15) 100%)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* ── AUTOMATION CAPABILITIES ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Capabilities
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What Echo5 Digital Automates for You
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Lead Capture Automation",
              description:
                "Every lead from web forms, ads, landing pages, and inbound calls is automatically captured and entered into your CRM — no manual data entry required.",
            },
            {
              icon: Mail,
              title: "Email & SMS Follow-Up Sequences",
              description:
                "Personalized, timed email and SMS sequences are triggered automatically based on lead behavior, pipeline stage, and engagement signals.",
            },
            {
              icon: GitBranch,
              title: "Pipeline Stage Automation",
              description:
                "Contacts are automatically advanced or flagged in your pipeline based on their actions — booking an appointment, opening an email, or completing a form.",
            },
            {
              icon: RefreshCw,
              title: "CRM Data Syncing",
              description:
                "Keep your CRM records clean and current with automated syncing across platforms — no more duplicate entries or stale contact data.",
            },
            {
              icon: Tag,
              title: "Contact Tagging & Segmentation",
              description:
                "Leads are automatically tagged and segmented by source, behavior, or interest so your team can prioritize outreach and personalize messaging.",
            },
            {
              icon: Plug,
              title: "Marketing Platform Integrations",
              description:
                "Seamlessly connect your CRM to Google Ads, Meta Ads, SEO tools, website forms, and social platforms for a unified data flow.",
            },
          ].map((cap) => (
            <Card
              key={cap.title}
              title={cap.title}
              description={cap.description}
              icon={cap.icon}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── HOW IT CONNECTS TO AI MARKETING EMPLOYEE ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <img
              src="https://images.pexels.com/photos/18275926/pexels-photo-18275926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI Marketing Employee connected to CRM automation pipeline"
              className="w-full rounded-2xl object-cover"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
              }}
            />
          </div>
          <div className="order-1 md:order-2">
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
              className="text-base leading-relaxed mb-5"
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
              system, an agentic AI growth engine designed to run marketing, nurture
              leads, and drive revenue for small businesses.
            </p>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              When CRM automation is connected to the AI Marketing Employee, your entire
              lead-to-revenue pipeline becomes self-sustaining: AI runs your ads and SEO
              to generate leads, CRM automation captures and nurtures those leads, and
              your sales team only steps in when a prospect is sales-ready.
            </p>
            <div className="space-y-3">
              {[
                "Ad clicks automatically create CRM contacts",
                "AI-crafted follow-up sequences launch instantly",
                "Lead scoring and pipeline updates happen in real time",
                "Your team gets notified only when action is needed",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(229,231,235,0.75)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" id="how-it-works" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Our Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How We Build Your CRM Automation
          </h2>
        </div>

        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(124,58,237,0.5) 20%, rgba(168,85,247,0.5) 80%, transparent)",
            }}
          />

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {[
              {
                step: "01",
                icon: Search,
                title: "CRM Workflow Audit",
                description:
                  "We start by auditing your current CRM setup, lead sources, and existing follow-up processes to identify gaps and automation opportunities.",
              },
              {
                step: "02",
                icon: Wrench,
                title: "Workflow Design",
                description:
                  "Our team designs a custom automation map — covering lead capture, nurture sequences, pipeline stages, and handoff triggers specific to your business.",
              },
              {
                step: "03",
                icon: Plug,
                title: "Integration Build",
                description:
                  "We connect your CRM to your marketing channels, website forms, ad platforms, and any other tools in your stack using native integrations or custom builds.",
              },
              {
                step: "04",
                icon: FlaskConical,
                title: "Testing & QA",
                description:
                  "Every workflow is tested end-to-end before going live — verifying triggers, sequences, data sync, and notifications work exactly as designed.",
              },
              {
                step: "05",
                icon: Rocket,
                title: "Launch",
                description:
                  "Your automation goes live. Leads start flowing through the pipeline automatically from day one, with your team briefed on the new system.",
              },
              {
                step: "06",
                icon: TrendingUp,
                title: "Ongoing Optimization",
                description:
                  "We monitor performance, analyze conversion data, and continuously refine your workflows to improve lead response times and close rates over time.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`relative flex gap-5 items-start ${
                  idx % 2 === 0 ? "md:pr-12" : "md:pl-12 md:mt-16"
                }`}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.4)",
                  }}
                >
                  <item.icon size={20} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "rgba(168,85,247,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    Step {item.step}
                  </span>
                  <h3
                    className="text-lg font-semibold mt-1 mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.title}
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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── USE CASES BY INDUSTRY ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
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
          ].map((item) => (
            <div
              key={item.industry}
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
          ))}
        </div>
      </Section>

      {/* ── TRUST INDICATORS ── */}
      <Section background="gradient" spacing="lg" withDivider>
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
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl p-6"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 16px rgba(124,58,237,0.4)",
                }}
              >
                <stat.icon size={18} color="#fff" />
              </div>
              <p
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.stat}
              </p>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {stat.label}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Case study placeholders */}
        <div>
          <h3
            className="text-2xl font-bold text-center mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Automation in Action
          </h3>
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
            ].map((cs) => (
              <div
                key={cs.industry}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "#A855F7",
                    border: "1px solid rgba(168,85,247,0.3)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {cs.industry}
                </span>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: "rgba(229,231,235,0.7)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {cs.result}
                </p>
                <p
                  className="text-base font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#A855F7",
                  }}
                >
                  {cs.metric}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(229,231,235,0.35)", fontFamily: "Inter, sans-serif" }}
                >
                  * Representative outcome — specific results vary by client and setup.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
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
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston &amp; Sugar Land, Texas Businesses
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                Businesses in Houston and Sugar Land, Texas often lose leads due to slow
                or inconsistent follow-up. Echo5 Digital's CRM automation service helps
                local businesses capture every lead from their digital marketing campaigns
                and move them through an automated pipeline, improving conversion rates
                and freeing up staff time. We also serve businesses nationally across the
                U.S.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <address className="not-italic" style={{ color: "rgba(229,231,235,0.6)" }}>
                  <span style={{ color: "#A855F7" }}>Location:</span> Houston / Sugar Land, Texas
                </address>
                <a
                  href="tel:713-489-7004"
                  style={{ color: "rgba(229,231,235,0.6)" }}
                  className="hover:text-white transition-colors"
                >
                  {/* verified phone */}
                  <span style={{ color: "#A855F7" }}>Phone:</span> 713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  style={{ color: "rgba(229,231,235,0.6)" }}
                  className="hover:text-white transition-colors"
                >
                  <span style={{ color: "#A855F7" }}>Email:</span> hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
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
          </div>

          <div className="space-y-3" role="list">
            {faqData.map((item, index) => (
              <div
                key={index}
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
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section background="elevated" spacing="lg" id="lead-form" withDivider>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: CTA copy */}
          <div className="pt-4">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1 rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Rocket size={13} />
              Get Started
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                lineHeight: "1.2",
              }}
            >
              Ready to Automate Your{" "}
              <span style={{ color: "#A855F7" }}>Lead Pipeline?</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
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
                  <CheckCircle size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(229,231,235,0.75)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl" style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.07)" }}>
              <p className="text-sm" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                <span style={{ color: "#A855F7", fontWeight: 600 }}>Email: </span>
                <a href="mailto:hello@echo5digital.com" className="hover:text-white transition-colors">
                  hello@echo5digital.com
                </a>
              </p>
              <p className="text-sm mt-2" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                {/* verified phone */}
                <span style={{ color: "#A855F7", fontWeight: 600 }}>Phone: </span>
                <a href="tel:713-489-7004" className="hover:text-white transition-colors">
                  713-489-7004
                </a>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <ContactForm
              heading="Book a CRM Automation Consultation"
              subheading="Tell us about your business and current CRM setup. We'll reach out to schedule your free audit."
              submitLabel="Request My Free CRM Audit"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}