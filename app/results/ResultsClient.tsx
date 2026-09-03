"use client";

import { useState } from "react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import {
  TrendingUp,
  Users,
  BarChart2,
  Star,
  Bot,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Zap,
  Target,
  Activity,
  Globe,
} from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

const caseStudies = [
  {
    industry: "Dental",
    tag: "Healthcare",
    challenge: "Low new-patient volume and poor Google Maps visibility in a competitive local market.",
    solution: "Local SEO + Google Ads + AI-driven content strategy targeting high-intent dental keywords.",
    result: "+180% new patient inquiries (representative outcome)*",
    metric: "+180%",
    metricLabel: "New Patient Inquiries",
    image: "https://images.pexels.com/photos/38055773/pexels-photo-38055773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    industry: "Roofing",
    tag: "Home Services",
    challenge: "Seasonal demand spikes with inconsistent lead flow and high cost-per-lead from ads.",
    solution: "Meta Ads retargeting + CRM automation + AI-optimized ad creatives.",
    result: "Cost-per-lead reduced by ~40%, lead volume up ~220% YoY (representative outcome)*",
    metric: "-40%",
    metricLabel: "Cost Per Lead",
    image: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    industry: "Law Firm",
    tag: "Professional Services",
    challenge: "No structured content presence, minimal organic traffic, high reliance on referrals.",
    solution: "AEO/GEO content strategy + authority link building + AI Marketing Employee deployment.",
    result: "+310% organic traffic growth in 6 months (representative outcome)*",
    metric: "+310%",
    metricLabel: "Organic Traffic",
    image: "https://images.pexels.com/photos/8112154/pexels-photo-8112154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    industry: "Aesthetics / Med Spa",
    tag: "Healthcare",
    challenge: "Low social media engagement and difficulty converting followers into booked appointments.",
    solution: "Social Media Marketing + Meta Ads + AI-personalized email sequences.",
    result: "3.8x ROAS on ad spend, +150% booking rate (representative outcome)*",
    metric: "3.8x",
    metricLabel: "Return on Ad Spend",
    image: "https://images.pexels.com/photos/11024140/pexels-photo-11024140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    industry: "HVAC / Home Services",
    tag: "Home Services",
    challenge: "Poor local search rankings and limited digital presence outside word-of-mouth.",
    solution: "Local SEO + Google Business Profile optimization + AI-generated review strategy.",
    result: "Top-3 Google Maps ranking achieved in primary service area (representative outcome)*",
    metric: "Top 3",
    metricLabel: "Google Maps Ranking",
    image: "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    industry: "Real Estate",
    tag: "Professional Services",
    challenge: "High competition for buyer/seller leads with low conversion on existing website.",
    solution: "Web redesign + Google Ads + AI chatbot lead qualifier deployed on-site.",
    result: "+95% qualified lead conversion rate improvement (representative outcome)*",
    metric: "+95%",
    metricLabel: "Lead Conversion Rate",
    image: "https://images.pexels.com/photos/8815820/pexels-photo-8815820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    industry: "Fitness Studio",
    tag: "Health & Wellness",
    challenge: "High member churn and difficulty attracting new memberships post-pandemic.",
    solution: "CRM automation + Meta Ads + AI-personalized retention email campaigns.",
    result: "Member retention improved by +60%, new sign-ups up +130% (representative outcome)*",
    metric: "+130%",
    metricLabel: "New Memberships",
    image: "https://images.pexels.com/photos/11075080/pexels-photo-11075080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    industry: "E-Commerce",
    tag: "E-Commerce",
    challenge: "Flat online sales and high cart abandonment rate despite steady traffic.",
    solution: "AI Marketing Employee + email automation + Google Shopping Ads optimization.",
    result: "+200% revenue growth in 90 days (representative outcome)*",
    metric: "+200%",
    metricLabel: "Revenue Growth",
    image: "https://images.pexels.com/photos/7289707/pexels-photo-7289707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const industryOutcomes = [
  {
    vertical: "Healthcare & Dental",
    icon: Activity,
    outcomes: [
      "Increased new patient acquisition through targeted local SEO",
      "AI-driven reputation management and review generation",
      "HIPAA-conscious content strategy for organic and paid channels",
    ],
    color: "#7C3AED",
  },
  {
    vertical: "Home Services",
    icon: Target,
    outcomes: [
      "Reduced cost-per-lead through AI-optimized bidding strategies",
      "Seasonal campaign automation for peak demand periods",
      "Google Maps and Local Pack dominance in service areas",
    ],
    color: "#A855F7",
  },
  {
    vertical: "Professional Services",
    icon: BarChart2,
    outcomes: [
      "Authority-building content strategy for competitive niches",
      "AEO/GEO optimization to capture AI-powered search results",
      "LinkedIn and organic social for B2B credibility",
    ],
    color: "#7C3AED",
  },
  {
    vertical: "E-Commerce & Retail",
    icon: TrendingUp,
    outcomes: [
      "Google Shopping and Meta catalog ad management",
      "AI-powered email segmentation and cart recovery",
      "Conversion rate optimization through behavioral analytics",
    ],
    color: "#A855F7",
  },
  {
    vertical: "Health, Fitness & Wellness",
    icon: Star,
    outcomes: [
      "Member retention campaigns via CRM automation",
      "Social-first paid ad strategies for new member acquisition",
      "AI content calendar for consistent brand presence",
    ],
    color: "#7C3AED",
  },
  {
    vertical: "Real Estate & Construction",
    icon: Globe,
    outcomes: [
      "High-intent lead generation through paid search",
      "AI chatbot qualifiers embedded in landing pages",
      "Local market domination through targeted geo campaigns",
    ],
    color: "#A855F7",
  },
];

const deliverySteps = [
  {
    icon: Bot,
    title: "AI Marketing Employee",
    description:
      "Our proprietary AI system handles content creation, ad optimization, reporting, and lead nurturing — running 24/7 across every channel.",
  },
  {
    icon: ShieldCheck,
    title: "Human Oversight Layer",
    description:
      "Every AI output is reviewed, refined, and approved by our strategists before going live, ensuring brand alignment and campaign integrity.",
  },
  {
    icon: Target,
    title: "Data-Driven Targeting",
    description:
      "We use first-party data, behavioral signals, and AI-powered audience modeling to reach the right buyers at the right moment.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description:
      "Campaigns are monitored and optimized in real-time — budget reallocation, creative refresh, and bid adjustments happen automatically.",
  },
];

const allTags = ["All", "Healthcare", "Home Services", "Professional Services", "E-Commerce", "Health & Wellness"];

export default function ResultsClient({ faqData }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.tag === activeFilter);

  return (
    <main>
      {/* ── Hero ── */}
      <Section background="gradient" spacing="xl" centered>
        <div className="relative z-10">
          {/* Ambient orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)" }}
          />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              <Zap size={13} /> Verified Client Outcomes
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", lineHeight: 1.1 }}
            >
              Real Results,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real Growth
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl max-w-2xl"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
            >
              Echo5 Digital's AI-powered marketing system delivers measurable outcomes for small and
              mid-sized businesses across Houston, Sugar Land, Texas, and the U.S. Explore representative
              client results by industry below.
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
            >
              * All metrics are representative client outcomes. Individual results vary. Echo5 Digital does not guarantee specific results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="#case-studies"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                View Case Studies <ArrowRight size={16} />
              </Link>
              <Link
                href="#book-demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "1px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Quick Answer ── */}
      <Section background="elevated" spacing="sm" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              <Zap size={18} style={{ color: "#A855F7" }} />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital's Results page showcases client outcomes across industries including dental,
                home services, roofing, and professional services. The agency uses an AI Marketing Employee
                model backed by human oversight to deliver measurable growth in traffic, leads, and revenue
                for small and mid-sized businesses in Houston, Sugar Land, Texas, and nationally.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Stats Bar ── */}
      <Section background="default" spacing="md" withDivider>
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            At a Glance
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Agency-Wide Performance Metrics
          </h2>
          <p
            className="text-sm mt-2"
            style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}
          >
            * Representative / placeholder metrics. Verified figures updated periodically.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "150+", label: "Campaigns Managed*", icon: BarChart2 },
            { value: "12+", label: "Industries Served*", icon: Globe },
            { value: "94%", label: "Client Retention Rate*", icon: Users },
            { value: "3.5x", label: "Avg. Reported ROAS*", icon: TrendingUp },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
              >
                <stat.icon size={22} style={{ color: "#A855F7" }} />
              </div>
              <p
                className="text-3xl font-bold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Case Study Grid ── */}
      <Section background="elevated" spacing="lg" id="case-studies" withDivider>
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Case Studies
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Client Outcomes by Industry
          </h2>
          <p
            className="text-sm max-w-xl mx-auto mb-2"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Filter by vertical to find outcomes most relevant to your business.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(229,231,235,0.35)", fontFamily: "Inter, sans-serif" }}
          >
            * All results are representative client outcomes. Individual results vary.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter case studies by industry">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                background:
                  activeFilter === tag
                    ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                    : "rgba(124,58,237,0.1)",
                color: activeFilter === tag ? "#fff" : "#A855F7",
                border:
                  activeFilter === tag
                    ? "1px solid transparent"
                    : "1px solid rgba(124,58,237,0.3)",
                boxShadow: activeFilter === tag ? "0 0 16px rgba(124,58,237,0.4)" : "none",
              }}
              aria-pressed={activeFilter === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((cs) => (
            <article
              key={cs.industry}
              className="flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(124,58,237,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cs.image}
                  alt={`${cs.industry} case study – client outcome`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(10,15,30,0.2) 0%, rgba(10,15,30,0.85) 100%)" }}
                />
                {/* Metric badge */}
                <div
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl text-center"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.6)",
                  }}
                >
                  <p className="text-lg font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {cs.metric}
                  </p>
                  <p className="text-xs text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>
                    {cs.metricLabel}
                  </p>
                </div>
                {/* Industry tag */}
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(10,15,30,0.7)",
                    border: "1px solid rgba(168,85,247,0.4)",
                    color: "#A855F7",
                    fontFamily: "Inter, sans-serif",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {cs.industry}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "rgba(168,85,247,0.7)", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Challenge
                  </p>
                  <p className="text-sm" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
                    {cs.challenge}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "rgba(168,85,247,0.7)", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Solution
                  </p>
                  <p className="text-sm" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
                    {cs.solution}
                  </p>
                </div>
                <div
                  className="rounded-xl p-4 mt-auto"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Result*
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
                    {cs.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16" style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}>
            No case studies found for this filter. Try another category.
          </p>
        )}
      </Section>

      {/* ── Industry Outcomes Breakdown ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            By Vertical
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Industry Outcomes Breakdown
          </h2>
          <p
            className="text-base mt-3 max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Find your industry and see the specific proof points and strategies relevant to your growth goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryOutcomes.map((io) => (
            <div
              key={io.vertical}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(168,85,247,0.28)" }}
                >
                  <io.icon size={20} style={{ color: "#A855F7" }} />
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {io.vertical}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {io.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}>
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: "#A855F7" }}
                      aria-hidden="true"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How We Deliver Results ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Methodology
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How We Deliver Results
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            The outcomes above are powered by Echo5 Digital's AI Marketing Employee model — a combination
            of intelligent automation and expert human oversight that runs continuously across every channel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverySteps.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <step.icon size={18} style={{ color: "#A855F7" }} />
                </div>
                <span
                  className="text-xs font-bold"
                  style={{ color: "rgba(168,85,247,0.5)", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="text-base font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/ai-marketing-employee"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 20px rgba(124,58,237,0.45)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Learn About AI Marketing Employee <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ── Trust Indicators ── */}
      <Section background="default" spacing="md" withDivider>
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Serving Local & National
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Trust Indicators
          </h2>
        </div>

        {/* Service Area Callout */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            <MapPin size={26} style={{ color: "#A855F7" }} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-lg font-bold mb-1"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston, Sugar Land, Texas & the U.S.
            </h3>
            <p
              className="text-sm"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital primarily serves businesses in{" "}
              <strong style={{ color: "#E5E7EB" }}>Houston and Sugar Land, Texas</strong>, with results
              reflecting campaigns run for local and regional clients across the greater Houston metro area.
              National U.S. clients across multiple industries are also represented.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0 text-center md:text-right">
            {/* Phone — verified */}
            <a
              href="tel:7134897004"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={15} style={{ color: "#7C3AED" }} />
              {/* verified phone */}
              713-489-7004
            </a>
            {/* Email — verified */}
            <a
              href="mailto:hello@echo5digital.com"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              <Mail size={15} style={{ color: "#7C3AED" }} />
              hello@echo5digital.com
            </a>
          </div>
        </div>

        {/* Partner / Credential Badges (placeholder labels) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "Google Partner",
            "Meta Business Partner",
            "HubSpot Certified",
            "Semrush Agency",
            "AI-Powered",
            "U.S. Based Team",
          ].map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
                minHeight: "80px",
              }}
            >
              <ShieldCheck size={20} style={{ color: "#A855F7" }} />
              <span
                className="text-xs font-medium"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
        <p
          className="text-xs text-center mt-4"
          style={{ color: "rgba(229,231,235,0.3)", fontFamily: "Inter, sans-serif" }}
        >
          * Partner badges are representative placeholders and should be replaced with verified credentials.
        </p>
      </Section>

      {/* ── FAQ ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              FAQs
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: openFaq === idx ? "1px solid rgba(168,85,247,0.45)" : "1px solid rgba(124,58,237,0.2)",
                  transition: "border-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === idx}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  )}
                </button>
                {openFaq === idx && (
                  <div
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA – Book a Demo ── */}
      <Section background="gradient" spacing="xl" id="book-demo" withDivider>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, #A855F7 50%, transparent 70%)" }}
        />
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center justify-between">
          {/* Left copy */}
          <div className="flex-1 max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Ready to Grow?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", lineHeight: 1.15 }}
            >
              See What Echo5 Digital Can Do for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Business
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Book a free strategy demo and we'll walk you through exactly how our AI Marketing Employee
              model can be applied to your industry, your market, and your goals — with no obligation.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Free 30-minute strategy session",
                "AI-powered audit of your current digital presence",
                "Tailored growth roadmap for your industry",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(168,85,247,0.35)" }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: "#A855F7" }} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {/* NAP */}
            <div className="flex flex-col gap-2">
              <a
                href="tel:7134897004"
                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={15} style={{ color: "#7C3AED" }} />
                {/* verified phone */}
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={15} style={{ color: "#7C3AED" }} />
                hello@echo5digital.com
              </a>
            </div>
          </div>

          {/* Right – Contact Form */}
          <div className="flex-1 w-full max-w-lg">
            <ContactForm
              heading="Book Your Free Demo"
              subheading="Tell us about your business and goals. We'll be in touch within 24 hours."
              submitLabel="Request Free Demo"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}