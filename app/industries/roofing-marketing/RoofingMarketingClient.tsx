"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Search,
  MapPin,
  Star,
  Globe,
  BarChart2,
  Megaphone,
  Layout,
  Bot,
  Zap,
  CloudLightning,
  Target,
  ClipboardList,
  Rocket,
  RefreshCcw,
  FileText,
  ChevronDown,
  ChevronUp,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

const challenges = [
  {
    icon: CloudLightning,
    title: "Storm-Chaser Competition",
    description:
      "After every major weather event, out-of-town contractors flood local markets, aggressively undercutting established local roofers. Standing out requires a dominant, always-on digital presence.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal Lead Spikes",
    description:
      "Roofing demand surges unpredictably after storms and during spring/fall seasons. Most roofers miss these windows because their marketing can't scale fast enough to capture the spike.",
  },
  {
    icon: MapPin,
    title: "Local Search & Maps Dominance",
    description:
      "The majority of roofing leads begin with a Google search and a map pack click. If your company isn't in the top 3 results for your service area, you're invisible to high-intent buyers.",
  },
  {
    icon: Target,
    title: "Crowded Google Ads Market",
    description:
      "Roofing is one of the most competitive and expensive categories in Google Ads. Without expert bid management and AI-driven optimization, budgets are wasted on low-intent clicks.",
  },
];

const services = [
  {
    icon: Search,
    title: "Local SEO for Roofers",
    description:
      "Rank your roofing business for high-intent keywords like 'roof replacement near me' and 'roofing contractor Houston' through technical SEO, on-page optimization, and local citation building.",
    badge: "Core Service",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Fully optimize and actively manage your GBP listing to dominate the local map pack, improve review scores, and capture leads directly from Google Search and Maps.",
    badge: "High Impact",
  },
  {
    icon: BarChart2,
    title: "Google Ads Management",
    description:
      "AI-assisted campaign management targeting roofing keywords with precision — from emergency roof repair to full replacement — with smart bidding to maximize cost per lead.",
    badge: "Paid Media",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "SEO-driven blog posts, service pages, and landing pages that establish your authority, attract organic traffic, and convert visitors into roofing leads.",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Monitor, respond to, and generate 5-star reviews across Google, Yelp, and industry directories to build the trust homeowners need before hiring a roofer.",
    badge: "Trust Builder",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Consistent branded content across Facebook, Instagram, and Nextdoor to stay top-of-mind in your community and drive referral-quality awareness.",
  },
  {
    icon: Layout,
    title: "Custom Website Design",
    description:
      "Fast-loading, mobile-first roofing websites built to convert visitors into leads with clear CTAs, trust signals, photo galleries, and integrated lead capture forms.",
    badge: "Conversion Focused",
  },
  {
    icon: Globe,
    title: "Online Visibility Audit",
    description:
      "A complete audit of your current digital footprint — website, listings, reviews, ads, and competitors — to identify the fastest path to more roofing leads.",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Discovery & Audit",
    description:
      "We analyze your current website, local rankings, Google Ads history, reputation, and competitor landscape to identify gaps and opportunities.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy Development",
    description:
      "We build a custom roofing marketing roadmap tailored to your service areas, seasonal patterns, and growth goals — with clear KPIs from day one.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Campaign Launch",
    description:
      "All channels go live: optimized GBP listing, Google Ads campaigns, SEO content deployment, and reputation management workflows activated.",
  },
  {
    number: "04",
    icon: RefreshCcw,
    title: "Ongoing Optimization",
    description:
      "AI tools continuously monitor performance, adjust bids, flag review responses, and surface content opportunities — with human oversight on every decision.",
  },
  {
    number: "05",
    icon: FileText,
    title: "Reporting & Insights",
    description:
      "Transparent monthly reports covering leads generated, cost per lead, ranking improvements, review growth, and campaign ROI — no vanity metrics.",
  },
];

const trustSignals = [
  { icon: Bot, label: "AI-Powered Optimization" },
  { icon: Shield, label: "Human Oversight on Every Campaign" },
  { icon: MapPin, label: "Houston & Texas Roofing Market Expertise" },
  { icon: Users, label: "National Roofing Contractor Clients" },
  { icon: Zap, label: "Done-For-You Marketing Model" },
  { icon: TrendingUp, label: "Full-Funnel Lead Generation" },
];

// Illustrative result indicators — clearly labeled as illustrative
const results = [
  {
    metric: "3x",
    label: "Increase in Organic Leads",
    note: "Illustrative result — actual results vary by market and budget",
  },
  {
    metric: "Top 3",
    label: "Local Map Pack Rankings",
    note: "Illustrative result — actual results vary by market and budget",
  },
  {
    metric: "40%",
    label: "Reduction in Cost Per Lead",
    note: "Illustrative result — actual results vary by market and budget",
  },
  {
    metric: "4.8★",
    label: "Average Review Score Achieved",
    note: "Illustrative result — actual results vary by market and budget",
  },
];

export default function RoofingMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        {/* Decorative glow blobs */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          }}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={13} />
              AI-Powered Roofing Marketing
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              More Roofing Leads.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Less Guesswork.
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Echo5 Digital is an AI-powered digital marketing agency specializing
              in roofing contractors. We help you dominate local search, run
              high-converting Google Ads, and build the reputation that wins more
              jobs — done for you, every month.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 28px rgba(124,58,237,0.6), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Phone size={16} />
                Book a Free Strategy Call
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "2px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                See Our Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {["Local SEO", "Google Ads", "Reputation Mgmt", "Done-For-You"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-sm"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    <CheckCircle size={14} style={{ color: "#A855F7" }} />
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden hidden lg:block">
            <img
              src="https://images.pexels.com/photos/34019842/pexels-photo-34019842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Roofing contractor reviewing digital marketing results on a tablet"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, transparent 60%)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md"
              style={{
                background: "rgba(10,15,30,0.85)",
                border: "1px solid rgba(124,58,237,0.35)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                  }}
                >
                  <Bot size={20} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    AI Marketing Employee Active
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    Optimizing your campaigns 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider id="quick-answer">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-1"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.45)",
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
              <h2
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                What Is Roofing Digital Marketing?
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.8)" }}
              >
                Roofing marketing includes the digital strategies roofing contractors use to
                generate residential and commercial leads, primarily through Local SEO, Google
                Ads, Google Business Profile, and online reputation management. Echo5 Digital
                delivers AI-powered, done-for-you roofing marketing services that help
                contractors rank higher in local search, run high-intent paid ad campaigns,
                and build the online reputation needed to win more jobs. The agency serves
                roofing companies in Houston, Sugar Land, Texas and nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ROOFING INDUSTRY CHALLENGES ── */}
      <Section background="default" spacing="lg" withDivider id="challenges">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Industry Challenges
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Roofing Marketing Is Uniquely Difficult
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            Roofing contractors face marketing challenges that most generic agencies
            simply don't understand. Here's what makes the roofing vertical so competitive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <item.icon size={22} style={{ color: "#A855F7" }} strokeWidth={1.8} />
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── ROOFING MARKETING SERVICES ── */}
      <Section background="elevated" spacing="lg" withDivider id="services">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Roofing Marketing Services That Drive Leads
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            Every service is delivered through our AI-powered, done-for-you model — so
            you stay focused on roofing while we fill your pipeline.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <Card
              key={svc.title}
              title={svc.title}
              description={svc.description}
              icon={svc.icon}
              badge={svc.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE ── */}
      <Section background="gradient" spacing="lg" withDivider id="ai-employee">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered marketing dashboard showing roofing campaign analytics and lead generation metrics"
              className="w-full h-[420px] object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, transparent 60%)",
              }}
            />
          </div>

          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={13} />
              AI Marketing Employee
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your Full-Time Marketing Team — Without the Payroll
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              The Echo5 Digital AI Marketing Employee model gives roofing companies
              consistent, professional marketing execution every month — without the
              cost of hiring, training, and managing an in-house team.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "AI-driven Google Ads bid optimization running 24/7",
                "Automated review monitoring and response workflows",
                "Continuous local SEO improvements and content publishing",
                "Competitor rank tracking and gap analysis",
                "Human strategists reviewing every major decision",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.8)" }}
                >
                  <CheckCircle
                    size={17}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 22px rgba(124,58,237,0.55)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={15} />
              Learn About Our AI Model
            </Link>
          </div>
        </div>
      </Section>

      {/* ── STORM SEASON & GEO-TARGETING ── */}
      <Section background="default" spacing="lg" withDivider id="storm-strategy">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <CloudLightning size={13} />
              Storm Season Strategy
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Built for Storm Season. Ready Year-Round.
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Houston and the greater Sugar Land, Texas area experience frequent severe
              weather events that create high-demand periods for roofing contractors. Echo5
              Digital helps local roofing companies maintain strong year-round visibility in
              Google search and Maps, and can support rapid campaign adjustments during storm
              seasons to capture high-intent leads across Harris County and surrounding areas.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Our geo-targeted campaign architecture allows us to activate specific ZIP codes,
              expand radius targeting, and increase ad spend in real time — so when a major
              storm hits your service area, your company is the first name homeowners see.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "ZIP-Code Level Targeting" },
                { icon: Zap, label: "Rapid Campaign Scaling" },
                { icon: Target, label: "High-Intent Keyword Focus" },
                { icon: RefreshCcw, label: "Real-Time Bid Adjustments" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <item.icon size={18} style={{ color: "#A855F7" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4170461/pexels-photo-4170461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Residential neighborhood with storm-damaged roofs requiring roofing contractor services in Houston, Texas"
              className="w-full h-[440px] object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,15,30,0.4) 0%, rgba(124,58,237,0.2) 100%)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="elevated" spacing="lg" withDivider id="how-it-works">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How We Launch Your Roofing Marketing
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            A clear, repeatable process from your first call to ongoing growth — no
            guesswork, no handoffs to junior staff.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 80%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.18)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 relative"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                  }}
                >
                  <step.icon size={22} color="#fff" strokeWidth={1.8} />
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "#0A0F1E",
                      border: "1px solid rgba(168,85,247,0.5)",
                      color: "#A855F7",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.65rem",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RESULTS SECTION ── */}
      <Section background="default" spacing="lg" withDivider id="results">
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Indicative Results
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What Roofing Clients Can Expect
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.55)" }}
          >
            The figures below are illustrative indicators based on campaign goals
            and industry benchmarks — not guaranteed outcomes. Actual results vary
            by market, budget, and competition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r) => (
            <div
              key={r.metric}
              className="p-6 rounded-2xl text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-4xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {r.metric}
              </p>
              <p
                className="text-sm font-semibold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {r.label}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.4)" }}
              >
                {r.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="elevated" spacing="md" withDivider id="trust">
        <div className="text-center mb-8">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Roofing Contractors Trust Echo5 Digital
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <signal.icon size={18} style={{ color: "#A855F7" }} strokeWidth={1.8} />
              </div>
              <p
                className="text-xs font-medium leading-snug"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
              >
                {signal.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="gradient" spacing="md" withDivider id="local">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-1"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.45)",
              }}
            >
              <MapPin size={18} color="#fff" />
            </div>
            <div>
              <h2
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston, Sugar Land & Roofing Contractors Nationwide
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.8)" }}
              >
                Houston and the greater Sugar Land, Texas area experience frequent severe
                weather events that create high-demand periods for roofing contractors. Echo5
                Digital helps local roofing companies maintain strong year-round visibility in
                Google search and Maps, and can support rapid campaign adjustments during storm
                seasons to capture high-intent leads across Harris County and surrounding areas.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={15} style={{ color: "#A855F7" }} />
                  {/* Phone number — verified fact */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={15} style={{ color: "#A855F7" }} />
                  hello@echo5digital.com
                </a>
                <span
                  className="flex items-center gap-2"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <MapPin size={15} style={{ color: "#A855F7" }} />
                  Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Roofing Marketing Questions Answered
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.45)" : "rgba(124,58,237,0.2)"}`,
                  background:
                    openFaq === index
                      ? "rgba(124,58,237,0.08)"
                      : "rgba(255,255,255,0.02)",
                }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-base font-semibold leading-snug"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.question}
                  </span>
                  <span className="flex-shrink-0" style={{ color: "#A855F7" }}>
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
                    className="px-6 pb-5"
                    role="region"
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(229,231,235,0.75)",
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

      {/* ── CTA SECTION ── */}
      <Section background="elevated" spacing="lg" withDivider id="cta">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Rocket size={13} />
              Free Marketing Audit
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Get Your Free Roofing Marketing Audit
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Tell us about your roofing business and we'll analyze your current digital
              presence — local rankings, Google Ads, reviews, and website — then show you
              exactly where leads are being lost and how to get them back.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "No contracts required to get started",
                "Full audit delivered within 48 hours",
                "Custom strategy tailored to your service area",
                "Works for residential and commercial roofers",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.8)" }}
                >
                  <CheckCircle size={16} style={{ color: "#A855F7" }} className="flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Prefer to talk directly?
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={14} style={{ color: "#A855F7" }} />
                  {/* Phone — verified fact */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={14} style={{ color: "#A855F7" }} />
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm
              heading="Request Your Free Audit"
              subheading="Tell us about your roofing business and service area — we'll review your digital presence and show you how to generate more leads."
              submitLabel="Get My Free Roofing Audit"
              showAppointmentNote
            />
          </div>
        </div>
      </Section>
    </main>
  );
}