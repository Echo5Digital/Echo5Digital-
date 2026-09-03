"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import {
  Search,
  MousePointerClick,
  Star,
  Globe,
  BarChart2,
  MessageCircle,
  MapPin,
  Palette,
  AlertCircle,
  TrendingUp,
  Users,
  DollarSign,
  Instagram,
  ShieldCheck,
  Bot,
  Clock,
  Zap,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  CalendarCheck,
  Award,
  PhoneCall,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

const painPoints = [
  {
    icon: Users,
    title: "Saturated Local Market",
    description:
      "Med spas and aesthetic clinics compete fiercely for the same high-value patients in every metro area. Standing out requires more than a pretty Instagram feed.",
  },
  {
    icon: DollarSign,
    title: "High Patient Acquisition Costs",
    description:
      "Running ads without a data-driven strategy drains budgets fast. Many clinics overspend on leads that never convert to booked appointments.",
  },
  {
    icon: Instagram,
    title: "Over-Dependence on Instagram",
    description:
      "Organic reach on social media keeps shrinking. Clinics relying solely on Instagram miss the high-intent patients searching on Google right now.",
  },
  {
    icon: MessageCircle,
    title: "Communicating Service Value",
    description:
      "Explaining the nuanced benefits of Botox, laser, or injectables to a skeptical audience requires strategic content — not just before/after photos.",
  },
  {
    icon: ShieldCheck,
    title: "Reputation Sensitivity",
    description:
      "One negative review can deter dozens of potential patients. Aesthetic practices need proactive reputation management to protect and grow their brand.",
  },
  {
    icon: AlertCircle,
    title: "Marketing Compliance Complexity",
    description:
      "Advertising medical and cosmetic services comes with platform restrictions and compliance nuances that require an experienced marketing partner.",
  },
];

const services = [
  {
    icon: Search,
    title: "Local SEO",
    description:
      "Dominate treatment-specific searches in your city. We optimize your website and content so patients searching 'Botox near me' or 'med spa Houston' find you first.",
    badge: "High Impact",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description:
      "Capture high-intent patients the moment they search. Our AI-optimized Google Ad campaigns drive qualified clicks that convert to booked appointments.",
    badge: "Fast Results",
  },
  {
    icon: BarChart2,
    title: "Meta Ads",
    description:
      "Reach your ideal aesthetic patient on Facebook and Instagram with visually compelling, precisely targeted ad campaigns built to maximize booking volume.",
  },
  {
    icon: Instagram,
    title: "Social Media Marketing",
    description:
      "Build a premium brand presence across social platforms. We create and manage content that showcases your expertise and keeps your audience engaged.",
  },
  {
    icon: Globe,
    title: "Content Marketing",
    description:
      "Educational blog posts, treatment guides, and video scripts that position your practice as the authority in aesthetics and drive organic traffic.",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Monitor, grow, and protect your online reviews on Google and beyond. More five-star reviews means higher local rankings and stronger patient trust.",
    badge: "Essential",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "A fully optimized GBP listing puts your clinic on the map — literally. We manage photos, posts, Q&A, and reviews to maximize local visibility.",
  },
  {
    icon: Palette,
    title: "Web Design",
    description:
      "A luxurious, conversion-optimized website that reflects the premium nature of your brand and turns visitors into appointment bookings.",
  },
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We analyze your current digital presence, competitive landscape, and patient acquisition funnel to identify the highest-leverage opportunities.",
  },
  {
    step: "02",
    title: "Custom Strategy Build",
    description:
      "Our team designs a tailored growth system — combining SEO, paid ads, content, and reputation management — aligned to your specific services and market.",
  },
  {
    step: "03",
    title: "AI-Powered Launch",
    description:
      "We deploy your campaigns, website optimizations, and content engine, with our AI Marketing Employee actively managing every channel from day one.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description:
      "Continuous data analysis, A/B testing, and performance reporting ensure your marketing gets smarter and more efficient every month.",
  },
];

const caseStudies = [
  {
    label: "Illustrative",
    title: "Houston Med Spa — 3× Booking Increase",
    metric: "+210%",
    metricLabel: "Appointment Bookings",
    description:
      "By combining Local SEO, Google Ads, and reputation management, this Houston med spa tripled their monthly appointment volume within six months.",
    tags: ["Local SEO", "Google Ads", "Reputation"],
  },
  {
    label: "Illustrative",
    title: "Sugar Land Aesthetics Clinic — 62% Lower CPL",
    metric: "-62%",
    metricLabel: "Cost Per Lead",
    description:
      "AI-optimized Meta Ads campaigns and landing page redesign slashed cost-per-lead by over half while maintaining lead quality.",
    tags: ["Meta Ads", "Web Design"],
  },
  {
    label: "Illustrative",
    title: "Cosmetic Practice — 4.9★ Reputation Score",
    metric: "4.9★",
    metricLabel: "Average Google Rating",
    description:
      "A proactive review generation and management strategy grew this practice's Google rating from 3.8 to 4.9 stars over eight months.",
    tags: ["Reputation", "GBP"],
  },
];

const trustSignals = [
  { icon: Bot, label: "AI-Powered Marketing Engine" },
  { icon: CalendarCheck, label: "Appointment-Focused Campaigns" },
  { icon: Award, label: "Aesthetics Industry Expertise" },
  { icon: TrendingUp, label: "Transparent Monthly Reporting" },
  { icon: ShieldCheck, label: "Ad Platform Compliance Guidance" },
  { icon: Clock, label: "Always-On Campaign Management" },
];

export default function AestheticsMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
        aria-label="Hero"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/11024140/pexels-photo-11024140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Elegant med spa interior showcasing a premium aesthetic clinic"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.7) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-purple-500/30 bg-purple-500/10">
            <Zap size={14} className="text-purple-400" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI-Powered Aesthetics Marketing
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Fill Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Appointment Book
            </span>{" "}
            <br className="hidden md:block" />
            with AI Marketing
          </h1>

          <p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital helps med spas, aesthetic clinics, and cosmetic practices
            attract more high-value patients with AI-powered local SEO, Google Ads,
            Meta Ads, and reputation management — all built around booking volume and
            brand prestige.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Strategy Demo
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full font-semibold text-purple-400 text-base border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUICK ANSWER ─────────────────────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8 border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            borderColor: "rgba(124,58,237,0.35)",
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
              <Zap size={18} className="text-white" />
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg text-gray-200 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital provides AI-powered digital marketing for med spas,
                aesthetic clinics, and cosmetic practices, covering local SEO, Google
                Ads, Meta Ads, social media management, and online reputation
                management. The service is designed for aesthetics businesses that
                want to increase appointment bookings and build a premium brand
                presence online. Echo5 Digital serves clients in Houston, Sugar Land,
                Texas, and across the United States.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── INDUSTRY PAIN POINTS ─────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Industry Challenges
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Aesthetics Marketing Is Uniquely Hard
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Med spas and aesthetic clinics face a distinct set of marketing
            challenges that generic agencies simply aren't equipped to handle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(168,85,247,0.45)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(124,58,237,0.2)";
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
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <point.icon size={20} className="text-purple-400" />
              </div>
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {point.title}
              </h3>
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <Section id="services" background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Marketing Built for Aesthetic Practices
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every service is designed around one goal: increasing your appointment
            bookings while building a premium brand that attracts loyal, high-value
            patients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              badge={service.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ─── AI MARKETING EMPLOYEE ────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI Marketing Employee
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Your Always-On Marketing Team — Powered by AI
            </h2>
            <p
              className="text-gray-400 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The Echo5 Digital AI Marketing Employee works 24/7 to manage content
              creation, ad optimization, SEO updates, and reputation monitoring for
              your aesthetics practice — so you can focus entirely on patient care
              and delivering exceptional results.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Continuously publishes treatment-focused SEO content",
                "Monitors and adjusts ad bids in real time for lower CPL",
                "Tracks and responds to new patient reviews automatically",
                "Generates monthly performance reports with actionable insights",
                "Keeps your Google Business Profile fresh and optimized",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-purple-400 flex-shrink-0 mt-0.5"
                  />
                  <span
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={16} />
              Learn About AI Marketing Employee
            </Link>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
              }}
            />
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered marketing dashboard displaying aesthetics clinic performance metrics"
              className="w-full h-80 md:h-96 object-cover rounded-2xl"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 40px rgba(124,58,237,0.2)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 24px rgba(124,58,237,0.3)",
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-sm font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Running 24/7 — No Days Off
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            From Onboarding to Booked Appointments
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We follow a proven four-step system to build and run a growth engine
            tailored to your aesthetic practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #7C3AED 20%, #A855F7 50%, #7C3AED 80%, transparent)",
            }}
          />

          {howItWorksSteps.map((step, index) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.5)",
                }}
              >
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {step.step}
                </span>
              </div>
              <h3
                className="text-lg font-semibold text-white mb-3"
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
          ))}
        </div>
      </Section>

      {/* ─── RESULTS / CASE STUDIES ───────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Results
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            What Growth Looks Like for Aesthetics Practices
          </h2>
          <p
            className="text-gray-400 text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The following results are illustrative of the outcomes Echo5 Digital
            marketing strategies are designed to achieve for aesthetics clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="rounded-2xl p-6 border flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 40px rgba(124,58,237,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(124,58,237,0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Illustrative badge */}
              <span
                className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  color: "#A855F7",
                  border: "1px solid rgba(168,85,247,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {cs.label}
              </span>

              {/* Metric */}
              <div className="mb-4">
                <span
                  className="text-5xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {cs.metric}
                </span>
                <p
                  className="text-sm text-gray-400 mt-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {cs.metricLabel}
                </p>
              </div>

              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {cs.title}
              </h3>
              <p
                className="text-sm text-gray-400 leading-relaxed flex-1 mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {cs.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(124,58,237,0.1)",
                      color: "#C4B5FD",
                      border: "1px solid rgba(124,58,237,0.2)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── TRUST BAR ────────────────────────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider>
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Aesthetics Owners Choose Echo5 Digital
          </h2>
          <p
            className="text-gray-400 text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We understand the unique trust and compliance factors that med spa and
            cosmetic practice owners consider when choosing a marketing partner.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl border transition-all duration-300"
              style={{
                background: "rgba(124,58,237,0.06)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(168,85,247,0.45)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(124,58,237,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(124,58,237,0.06)";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                  border: "1px solid rgba(168,85,247,0.35)",
                }}
              >
                <signal.icon size={18} className="text-purple-400" />
              </div>
              <span
                className="text-xs font-medium text-gray-300 leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Common Questions from Aesthetics Business Owners
            </h2>
            <p
              className="text-gray-400 text-base"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Answers to the most frequent questions we receive from med spa and
              aesthetic clinic owners evaluating marketing partners.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor:
                    openFaq === index
                      ? "rgba(168,85,247,0.45)"
                      : "rgba(124,58,237,0.2)",
                  background:
                    openFaq === index
                      ? "rgba(124,58,237,0.08)"
                      : "rgba(255,255,255,0.02)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="font-semibold text-white text-base leading-snug"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-purple-400">
                    {openFaq === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={openFaq !== index}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === index ? "300px" : "0px",
                  }}
                >
                  <p
                    className="px-5 pb-5 text-sm text-gray-400 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── LOCAL RELEVANCE ──────────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Serving Houston &amp; Sugar Land, Texas
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Dominate Your Local Aesthetics Market in Greater Houston
            </h2>
            <p
              className="text-gray-400 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Houston and Sugar Land, Texas have a dense concentration of med spas
              and aesthetic clinics competing for the same high-value patients. Echo5
              Digital's local SEO, Google Business Profile optimization, and
              geo-targeted paid ad campaigns help aesthetics practices in the Houston
              area rank for treatment-specific searches, build five-star reputations,
              and convert more local prospects into booked appointments.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Rank for 'med spa Houston', 'Botox Sugar Land', and more",
                "Geo-targeted Google & Meta Ads for the Houston metro area",
                "Google Business Profile optimization for local map pack dominance",
                "Review generation campaigns tailored to Texas aesthetic patients",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <MapPin size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <span
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* NAP — real HTML text only */}
            <address
              className="not-italic rounded-xl p-5 border space-y-2"
              style={{
                background: "rgba(124,58,237,0.07)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-purple-400 flex-shrink-0" />
                <span
                  className="text-sm text-gray-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Houston / Sugar Land, Texas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall size={15} className="text-purple-400 flex-shrink-0" />
                <a
                  href="tel:7134897004"
                  className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  713-489-7004
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={15} className="text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  hello@echo5digital.com
                </a>
              </div>
            </address>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/18441165/pexels-photo-18441165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Houston, Texas skyline representing Echo5 Digital's primary service area for aesthetics marketing"
              className="w-full h-72 md:h-96 object-cover"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                borderRadius: "1rem",
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(10,15,30,0.9)",
                  border: "1px solid rgba(124,58,237,0.4)",
                }}
              >
                <MapPin size={14} className="text-purple-400" />
                <span
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Houston &amp; Sugar Land, TX — Nationwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <Section background="gradient" spacing="xl" centered>
        <div
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(168,85,247,0.1) 100%)",
            border: "1px solid rgba(124,58,237,0.35)",
          }}
        >
          {/* Decorative glows */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-purple-500/30 bg-purple-500/10">
              <CalendarCheck size={14} className="text-purple-400" />
              <span
                className="text-xs font-semibold uppercase tracking-widest text-purple-400"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Book Your Free Strategy Call
              </span>
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Ready to Fill Your Calendar with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                More Appointments?
              </span>
            </h2>

            <p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Talk to an Echo5 Digital strategist and discover exactly how we'd build
              a patient acquisition engine for your med spa or aesthetic clinic.
              No pressure, just a clear growth plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 32px rgba(124,58,237,0.65), 0 4px 16px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Free Strategy Demo
              </Link>
              <a
                href="tel:7134897004"
                className="px-10 py-4 rounded-full font-semibold text-purple-400 text-base border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200 flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <PhoneCall size={16} />
                {/* Phone number displayed as real HTML text */}
                713-489-7004
              </a>
            </div>

            <p
              className="text-gray-500 text-sm mt-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Serving Houston, Sugar Land, Texas &amp; aesthetic clinics nationwide
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}