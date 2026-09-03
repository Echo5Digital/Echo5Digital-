"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import {
  Search,
  Megaphone,
  BarChart2,
  Share2,
  FileText,
  Globe,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Brain,
  RefreshCw,
  AlertCircle,
  Target,
  Layers,
  Shield,
  Activity,
  PhoneCall,
  Mail,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function SuperGrowthClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Abstract AI-powered marketing command center"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          aria-hidden="true"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,15,30,0.6) 0%, rgba(10,15,30,0.85) 60%, #0A0F1E 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-sm">
            <Zap size={14} className="text-purple-400" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-purple-300"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI Marketing Employee — Top Tier
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Super Growth Plan
            <span
              className="block mt-1"
              style={{
                background: "linear-gradient(90deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Channel. One AI System.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital's most comprehensive AI Marketing Employee tier — combining SEO, AEO, Google Ads, Meta Ads, social media, content, and web optimization into one unified, always-on growth engine. Human strategists keep it aligned. AI makes it relentless.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Strategy Call <ArrowRight size={18} />
            </a>
            <a
              href="#deliverables"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 text-base border border-purple-500/40 bg-purple-900/10 backdrop-blur-sm hover:bg-purple-900/25 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See What's Included
            </a>
          </div>

          {/* Trust micro-stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Channels Managed", value: "8+" },
              { label: "AI-Powered", value: "100%" },
              { label: "Human Oversight", value: "Always" },
              { label: "Reporting", value: "Unified" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 p-4 rounded-xl border border-purple-800/30 bg-purple-900/10 backdrop-blur-sm"
              >
                <span
                  className="text-2xl font-bold text-purple-300"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border border-purple-600/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
          }}
          role="note"
          aria-label="Quick Answer"
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={20} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base sm:text-lg text-gray-200 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                The <strong className="text-white">Super Growth plan</strong> is Echo5 Digital's highest-tier AI Marketing Employee offering, combining SEO, AEO, Google Ads, Meta Ads, social media management, content marketing, and website optimization into a single done-for-you system. It is designed for growth-stage small and mid-sized businesses that want a fully outsourced AI-powered marketing department. Human strategists oversee every channel to ensure performance and brand alignment. Echo5 Digital serves Super Growth clients in <strong className="text-purple-300">Houston, Sugar Land, Texas</strong>, and across the United States.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FULL DELIVERABLES BREAKDOWN ── */}
      <Section id="deliverables" background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            What's Included
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Full Deliverables Breakdown
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every channel, every tactic, every touchpoint — orchestrated by your AI Marketing Employee and supervised by our human strategy team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "SEO",
              color: "#7C3AED",
              items: [
                "Technical SEO audits & fixes",
                "On-page optimization",
                "Keyword research & mapping",
                "Link-building outreach",
                "Core Web Vitals optimization",
              ],
            },
            {
              icon: Globe,
              title: "AEO / GEO",
              color: "#A855F7",
              items: [
                "Answer Engine Optimization",
                "Generative Engine Optimization",
                "Featured snippet targeting",
                "Structured data / schema markup",
                "AI-search visibility strategies",
              ],
            },
            {
              icon: Target,
              title: "Google Ads",
              color: "#7C3AED",
              items: [
                "Search & Display campaigns",
                "Performance Max campaigns",
                "Keyword bid management",
                "Ad copy testing & iteration",
                "Conversion tracking setup",
              ],
            },
            {
              icon: Megaphone,
              title: "Meta Ads",
              color: "#A855F7",
              items: [
                "Facebook & Instagram campaigns",
                "Audience targeting & retargeting",
                "Creative ad production briefs",
                "A/B split testing",
                "Pixel & CAPI integration",
              ],
            },
            {
              icon: Share2,
              title: "Social Media Management",
              color: "#7C3AED",
              items: [
                "Content calendar management",
                "AI-assisted post creation",
                "Community engagement",
                "Platform analytics review",
                "Brand voice consistency",
              ],
            },
            {
              icon: FileText,
              title: "Content Marketing",
              color: "#A855F7",
              items: [
                "Blog & article production",
                "Topic cluster strategy",
                "E-E-A-T optimization",
                "Content distribution",
                "Lead-magnet creation",
              ],
            },
            {
              icon: Globe,
              title: "Website Optimization",
              color: "#7C3AED",
              items: [
                "Landing page CRO",
                "Speed & performance tuning",
                "UX / layout improvements",
                "Heatmap & session analysis",
                "A/B testing frameworks",
              ],
            },
            {
              icon: Zap,
              title: "CRM Automation Touchpoints",
              color: "#A855F7",
              items: [
                "Lead capture flow setup",
                "Email nurture sequences",
                "Follow-up automation triggers",
                "Pipeline status syncing",
                "CRM data hygiene checks",
              ],
            },
            {
              icon: BarChart2,
              title: "Reporting Dashboards",
              color: "#7C3AED",
              items: [
                "Client Command Center access",
                "Cross-channel unified reporting",
                "Weekly performance summaries",
                "Monthly strategy reviews",
                "Custom KPI tracking",
              ],
            },
          ].map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.title}
                className="rounded-xl p-6 border border-purple-800/25 hover:border-purple-500/50 transition-all duration-300 group"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${channel.color}33, ${channel.color}18)`,
                      border: `1px solid ${channel.color}44`,
                    }}
                  >
                    <Icon size={20} style={{ color: channel.color }} strokeWidth={1.8} />
                  </div>
                  <h3
                    className="font-bold text-white text-base"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {channel.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {channel.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── AGENTIC AI GROWTH SYSTEM DIAGRAM ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            System Architecture
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Agentic AI Growth System
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            All channels operate as one connected AI-driven growth engine. Data flows between channels, performance feedback loops trigger real-time adjustments, and human strategists provide oversight at every checkpoint.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Hub */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="relative w-44 h-44 rounded-full flex flex-col items-center justify-center text-center border-2 border-purple-500/60 z-10"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(168,85,247,0.2))",
                boxShadow: "0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(124,58,237,0.2)",
              }}
            >
              <Brain size={36} className="text-purple-300 mb-2" />
              <span
                className="text-sm font-bold text-white leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                AI Marketing
                <br />
                Employee
              </span>
              <span className="text-xs text-purple-300 mt-1">Central Brain</span>
              {/* Pulse ring */}
              <div
                className="absolute inset-0 rounded-full border border-purple-400/30 animate-ping"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>

          {/* Channel Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "SEO Engine", icon: Search, desc: "Organic rankings" },
              { label: "AEO / GEO", icon: Globe, desc: "AI search visibility" },
              { label: "Google Ads", icon: Target, desc: "Paid search" },
              { label: "Meta Ads", icon: Megaphone, desc: "Social paid" },
              { label: "Social Media", icon: Share2, desc: "Organic social" },
              { label: "Content", icon: FileText, desc: "Articles & blogs" },
              { label: "Web Optim.", icon: Activity, desc: "CRO & speed" },
              { label: "CRM Flows", icon: Zap, desc: "Lead nurturing" },
            ].map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-purple-700/30 hover:border-purple-500/50 transition-all duration-200 text-center"
                  style={{ backgroundColor: "rgba(124,58,237,0.08)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(124,58,237,0.25)" }}
                  >
                    <Icon size={18} className="text-purple-300" strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-xs font-semibold text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {node.label}
                  </span>
                  <span className="text-xs text-gray-500">{node.desc}</span>
                </div>
              );
            })}
          </div>

          {/* Flow indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Activity,
                label: "Data Collection",
                desc: "All channels feed performance data into the central AI engine continuously.",
              },
              {
                icon: RefreshCw,
                label: "Feedback Loops",
                desc: "AI identifies patterns, cross-channel signals, and optimisation opportunities.",
              },
              {
                icon: Shield,
                label: "Human Oversight",
                desc: "Echo5 Digital strategists review outputs, approve decisions, and align on goals.",
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="flex items-start gap-3 p-5 rounded-xl border border-purple-700/30"
                  style={{ backgroundColor: "rgba(124,58,237,0.06)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                  >
                    <Icon size={16} color="#fff" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── PERFORMANCE RESPONSE FLOW ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Intelligent Optimization
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Performance Response Flow
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            When the system detects underperformance in any channel, it reallocates effort and signals budget shifts in near real time — this is what makes the agentic model truly intelligent.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ol className="relative space-y-0">
            {[
              {
                step: "01",
                icon: Activity,
                title: "Continuous Monitoring",
                description:
                  "The AI engine monitors KPIs across all 8+ channels around the clock — tracking CTR, conversion rates, impression share, engagement, and more in real time.",
                color: "#7C3AED",
              },
              {
                step: "02",
                icon: AlertCircle,
                title: "Underperformance Signal Detected",
                description:
                  "When a channel drops below defined performance thresholds, the system flags the anomaly and begins root-cause analysis using historical and cross-channel data.",
                color: "#A855F7",
              },
              {
                step: "03",
                icon: Brain,
                title: "AI Generates Response Plan",
                description:
                  "The AI drafts a response: reallocating effort (e.g. content focus shifts), updating ad creative briefs, adjusting keyword bids, or redistributing budget signals between channels.",
                color: "#7C3AED",
              },
              {
                step: "04",
                icon: Shield,
                title: "Human Strategist Review",
                description:
                  "Echo5 Digital's human strategists review the AI's proposed response before implementation — ensuring brand alignment and strategic sense-checking at every decision point.",
                color: "#A855F7",
              },
              {
                step: "05",
                icon: TrendingUp,
                title: "Adjustment Deployed & Tracked",
                description:
                  "The approved change is deployed. The system tracks the impact, updates the performance baseline, and the cycle continues — getting smarter with every iteration.",
                color: "#7C3AED",
              },
            ].map((step, index, arr) => {
              const Icon = step.icon;
              return (
                <li key={step.step} className="flex gap-5 pb-8 last:pb-0 relative">
                  {/* Connector line */}
                  {index < arr.length - 1 && (
                    <div
                      className="absolute left-5 top-12 bottom-0 w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(168,85,247,0.5), rgba(124,58,237,0.1))",
                      }}
                      aria-hidden="true"
                    />
                  )}
                  {/* Icon */}
                  <div
                    className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, #A855F7)`,
                      boxShadow: `0 0 16px ${step.color}55`,
                    }}
                  >
                    <Icon size={18} color="#fff" strokeWidth={2} />
                  </div>
                  {/* Content */}
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold text-purple-400 uppercase tracking-widest"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        Step {step.step}
                      </span>
                    </div>
                    <h3
                      className="text-base font-bold text-white mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm text-gray-400 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* ── WHO IT'S FOR ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Ideal Fit
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Who Super Growth Is For
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Super Growth is purpose-built for businesses that are ready to compete at full capacity — not just one channel at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/6248957/pexels-photo-6248957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Growth-stage business owner reviewing AI-powered marketing performance dashboard"
              className="w-full rounded-2xl object-cover"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 40px rgba(124,58,237,0.2)",
                aspectRatio: "4/3",
              }}
            />
          </div>

          <div className="space-y-5">
            {[
              {
                icon: TrendingUp,
                title: "Growth-Stage SMBs",
                description:
                  "Established businesses scaling from 7 to 8 figures that need every marketing lever pulled simultaneously without building an internal team.",
              },
              {
                icon: Target,
                title: "Competitive Local Markets",
                description:
                  "Houston and Sugar Land businesses in healthcare, home services, law, or real estate where ranking first — organically and in paid — is non-negotiable.",
              },
              {
                icon: Layers,
                title: "Outsourced Marketing Department",
                description:
                  "Businesses that want the output of a full-service agency at a fraction of the overhead — powered by AI and supervised by senior strategists.",
              },
              {
                icon: Globe,
                title: "National Expansion Candidates",
                description:
                  "Companies with a local stronghold looking to scale content, ads, and SEO nationally without multiplying internal headcount.",
              },
              {
                icon: Users,
                title: "Multi-Channel Operators",
                description:
                  "Businesses currently running fragmented campaigns across different vendors who want a single, unified AI-driven system for consistency and compounding results.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Icon size={18} className="text-purple-400" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold text-white mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-gray-400 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── RESULTS INDICATORS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-4">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Combined Channel Impact
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Results Indicators
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Illustrative outcomes from running all Super Growth channels simultaneously over 6–12 months.
          </p>
          {/* Disclaimer */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/20 border border-yellow-700/30 mt-2">
            <AlertCircle size={13} className="text-yellow-400" />
            <span
              className="text-xs text-yellow-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Representative / illustrative figures only — actual results vary by business, market, and investment level.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
          {[
            { metric: "3–5×", label: "Organic Traffic Growth", channel: "SEO" },
            { metric: "Top 3", label: "AI Answer Visibility", channel: "AEO/GEO" },
            { metric: "↓30%", label: "Cost Per Lead (Ads)", channel: "Google & Meta" },
            { metric: "2–4×", label: "Social Reach Expansion", channel: "Social" },
            { metric: "+60%", label: "Landing Page Conversions", channel: "Web CRO" },
            { metric: "Full", label: "Pipeline Visibility", channel: "Reporting" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-5 rounded-xl border border-purple-800/25 hover:border-purple-500/40 transition-all duration-200"
              style={{ backgroundColor: "rgba(124,58,237,0.06)" }}
            >
              <span
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.metric}
              </span>
              <span
                className="text-xs text-white font-medium mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.label}
              </span>
              <span
                className="text-xs text-purple-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.channel}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPARISON TABLE ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Tier Comparison
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Find Your Right Tier
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Compare all AI Marketing Employee tiers side by side and confirm Super Growth is the right fit for your business.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-purple-800/30">
          <table className="w-full min-w-[640px] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            <thead>
              <tr style={{ backgroundColor: "rgba(124,58,237,0.15)" }}>
                <th
                  className="text-left px-6 py-4 text-gray-300 font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Feature
                </th>
                {[
                  { name: "Starter", highlight: false },
                  { name: "Growth", highlight: false },
                  { name: "Pro Growth", highlight: false },
                  { name: "Super Growth", highlight: true },
                ].map((tier) => (
                  <th
                    key={tier.name}
                    className="px-6 py-4 text-center font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: tier.highlight ? "#A855F7" : "#E5E7EB",
                      background: tier.highlight
                        ? "rgba(124,58,237,0.2)"
                        : "transparent",
                    }}
                  >
                    {tier.name}
                    {tier.highlight && (
                      <span className="block text-xs font-normal text-purple-400 mt-0.5">
                        ★ Most Complete
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "SEO", starter: true, growth: true, pro: true, super: true },
                { feature: "AEO / GEO", starter: false, growth: false, pro: true, super: true },
                { feature: "Google Ads", starter: false, growth: true, pro: true, super: true },
                { feature: "Meta Ads", starter: false, growth: false, pro: true, super: true },
                { feature: "Social Media Management", starter: false, growth: true, pro: true, super: true },
                { feature: "Content Marketing", starter: false, growth: false, pro: true, super: true },
                { feature: "Website CRO Optimization", starter: false, growth: false, pro: false, super: true },
                { feature: "CRM Automation Touchpoints", starter: false, growth: false, pro: false, super: true },
                { feature: "Unified Reporting Dashboard", starter: false, growth: false, pro: true, super: true },
                { feature: "Human Strategy Reviews", starter: "Monthly", growth: "Monthly", pro: "Bi-weekly", super: "Weekly" },
                { feature: "Performance Response Flow", starter: false, growth: false, pro: false, super: true },
                { feature: "Channels Managed", starter: "1", growth: "3", pro: "5", super: "8+" },
              ].map((row, i) => (
                <tr
                  key={row.feature}
                  className="border-t border-purple-900/30 hover:bg-purple-900/10 transition-colors"
                  style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}
                >
                  <td className="px-6 py-4 text-gray-300 font-medium">{row.feature}</td>
                  {[row.starter, row.growth, row.pro, row.super].map((val, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 text-center"
                      style={
                        idx === 3
                          ? { backgroundColor: "rgba(124,58,237,0.08)" }
                          : {}
                      }
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <CheckCircle
                            size={18}
                            className="inline-block"
                            style={{ color: idx === 3 ? "#A855F7" : "#6B7280" }}
                          />
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span
                          className={`text-xs font-semibold ${idx === 3 ? "text-purple-300" : "text-gray-400"}`}
                        >
                          {val}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="gradient" spacing="md" withDivider>
        <div className="text-center mb-8">
          <h2
            className="text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Built on Proven Methodology
          </h2>
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital's AI-first approach is grounded in platform best practices and transparent strategy.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Google Ads", desc: "Platform Aligned", icon: Target },
            { label: "Meta Business", desc: "Platform Aligned", icon: Megaphone },
            { label: "AEO Ready", desc: "AI Search Optimized", icon: Brain },
            { label: "E-E-A-T", desc: "Content Standard", icon: Shield },
            { label: "AI-First", desc: "Echo5 Methodology", icon: Zap },
            { label: "Human Oversight", desc: "Every Channel", icon: Users },
          ].map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-purple-700/25 hover:border-purple-500/45 transition-all duration-200"
                style={{ backgroundColor: "rgba(124,58,237,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  <Icon size={18} color="#fff" strokeWidth={2} />
                </div>
                <span
                  className="text-xs font-bold text-white mb-0.5"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {badge.label}
                </span>
                <span className="text-xs text-gray-500">{badge.desc}</span>
              </div>
            );
          })}
        </div>

        {/* AI-first positioning statement */}
        <div
          className="mt-10 rounded-2xl p-6 sm:p-8 border border-purple-600/25 text-center max-w-3xl mx-auto"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
          }}
        >
          <Zap size={28} className="text-purple-400 mx-auto mb-3" />
          <p
            className="text-lg font-bold text-white mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Echo5 Digital is an AI-first digital marketing agency.
          </p>
          <p
            className="text-sm text-gray-400 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We don't bolt AI onto a traditional agency model — we design every process around AI from the ground up, with human strategists ensuring quality and strategic alignment at every touchpoint. This is why our Super Growth clients get agency-grade outcomes at a fraction of traditional overhead.
          </p>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Local Presence, National Reach
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Serving Houston, Sugar Land & Beyond
          </h2>
          <p
            className="text-gray-400 leading-relaxed mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Competitive Houston and Sugar Land businesses — such as those in healthcare, home services, law, or real estate — that need every marketing channel firing simultaneously are the ideal local candidates for Super Growth. Echo5 Digital's local presence in the Houston metro means strategy sessions can reflect regional market dynamics while the full AI system scales the work nationally if needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <address className="not-italic flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
              Houston / Sugar Land, Texas
            </address>
            <a
              href="tel:713-489-7004"
              className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <PhoneCall size={15} />
              {/* Verified business phone */}
              713-489-7004
            </a>
            <a
              href="mailto:hello@echo5digital.com"
              className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Mail size={15} />
              hello@echo5digital.com
            </a>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider id="faq">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Common Questions
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-purple-800/30 overflow-hidden transition-all duration-200"
              style={{
                backgroundColor:
                  openFaq === idx
                    ? "rgba(124,58,237,0.10)"
                    : "rgba(255,255,255,0.03)",
                borderColor:
                  openFaq === idx
                    ? "rgba(168,85,247,0.4)"
                    : "rgba(124,58,237,0.25)",
              }}
            >
              <button
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className="text-purple-400 flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openFaq === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className="px-6 pb-5"
                >
                  <p
                    className="text-sm text-gray-400 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA — BOOK A STRATEGY CALL ── */}
      <Section background="gradient" spacing="xl" withDivider id="cta">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Ready to Go All-In?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Book Your Super Growth Strategy Call
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Talk to an Echo5 Digital strategist about whether Super Growth is the right fit for your business. We'll walk through your current marketing, competitive landscape, and what the AI system would look like for your specific goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left — Book a call option */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6 border border-purple-600/30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
              }}
            >
              <PhoneCall size={28} className="text-purple-400 mb-4" />
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Book a Free Strategy Call
              </h3>
              <p
                className="text-sm text-gray-400 mb-5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                30 minutes with an Echo5 Digital AI marketing strategist. No obligation, no pitch deck — just a direct conversation about your growth goals.
              </p>
              <a
                href="tel:713-489-7004"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <PhoneCall size={16} />
                {/* Verified business phone */}
                Call 713-489-7004
              </a>
            </div>

            <div
              className="rounded-2xl p-6 border border-purple-800/25"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <h3
                className="text-base font-bold text-white mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                What to expect on the call:
              </h3>
              <ul className="space-y-3">
                {[
                  "Audit of your current marketing channels",
                  "Competitive landscape overview for your market",
                  "Custom Super Growth channel recommendation",
                  "Transparent pricing discussion",
                  "Clear next steps — no pressure",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <CheckCircle size={15} className="text-purple-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hidden fields note for developers */}
            {/* UTM source: super-growth-page | UTM medium: cta-section | UTM campaign: ai-marketing-employee */}
          </div>

          {/* Right — Contact form */}
          <div>
            <ContactForm
              heading="Send Us a Message"
              subheading="Tell us about your business and growth goals. We'll follow up within one business day."
              submitLabel="Submit Super Growth Inquiry"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}