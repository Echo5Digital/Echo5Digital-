"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Bot,
  Star,
  Camera,
  BarChart3,
  MessageSquare,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  Globe,
  Phone,
  Mail,
  TrendingUp,
  Settings,
  Users,
  FileText,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface GBPClientProps {
  faqData: FAQItem[];
}

export default function GBPClient({ faqData }: GBPClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const gbpServices = [
    {
      icon: Settings,
      title: "Profile Setup & Verification Support",
      description:
        "We handle the full setup of your Google Business Profile, including business category selection, NAP consistency, and guiding you through Google's verification process.",
      badge: "Foundation",
    },
    {
      icon: Search,
      title: "Category & Attribute Optimization",
      description:
        "Strategic selection of primary and secondary business categories and relevant attributes to maximize your visibility in local and map pack searches.",
      badge: "Visibility",
    },
    {
      icon: Camera,
      title: "Photo & Post Management",
      description:
        "Regular upload of high-quality photos and GBP posts (offers, events, updates) to keep your profile fresh, engaging, and algorithm-friendly.",
      badge: "Engagement",
    },
    {
      icon: MessageSquare,
      title: "Q&A Management",
      description:
        "Monitor and respond to customer questions on your GBP listing, ensuring accurate, brand-consistent answers that build trust with prospective customers.",
      badge: "Trust",
    },
    {
      icon: Star,
      title: "Review Monitoring & Response",
      description:
        "Track incoming reviews across your GBP listing, alert your team, and craft thoughtful responses that demonstrate your commitment to customer satisfaction.",
      badge: "Reputation",
    },
    {
      icon: BarChart3,
      title: "GBP Performance Reporting",
      description:
        "Monthly reports covering profile views, search queries, direction requests, and call clicks — giving you clear insight into your local visibility ROI.",
      badge: "Analytics",
    },
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "GBP Audit",
      description:
        "We conduct a comprehensive audit of your existing Google Business Profile, identifying gaps in completeness, category alignment, and optimization opportunities.",
      icon: Search,
    },
    {
      step: "02",
      title: "Strategy & Setup",
      description:
        "Our team builds a tailored GBP optimization strategy, updates your profile with accurate information, selects the best categories, and loads initial photos and content.",
      icon: FileText,
    },
    {
      step: "03",
      title: "AI-Assisted Automation",
      description:
        "Echo5 Digital's agentic AI system begins scheduling posts, monitoring reviews, and tracking performance — all while human oversight ensures brand accuracy.",
      icon: Bot,
    },
    {
      step: "04",
      title: "Ongoing Management",
      description:
        "We maintain consistent posting cadence, respond to reviews and Q&A, update seasonal content, and deliver monthly performance reports.",
      icon: TrendingUp,
    },
  ];

  const trustIndicators = [
    { icon: Bot, label: "AI-Powered Management" },
    { icon: MapPin, label: "Houston & Sugar Land Specialists" },
    { icon: Shield, label: "Local SEO Authority" },
    { icon: Globe, label: "Serving Businesses Nationwide" },
    { icon: Clock, label: "Ongoing Monitoring & Reporting" },
    { icon: Users, label: "AI + Human Hybrid Team" },
  ];

  const relatedServices = [
    {
      title: "Local SEO",
      description:
        "Dominate local search results beyond your GBP with a comprehensive local SEO strategy covering citations, on-page signals, and hyperlocal content.",
      href: "/services/local-seo",
      icon: MapPin,
    },
    {
      title: "SEO & AEO",
      description:
        "Strengthen your organic search presence with technical SEO and Answer Engine Optimization that positions your brand in AI-driven search results.",
      href: "/services/seo",
      icon: Search,
    },
    {
      title: "Online Reputation Management",
      description:
        "Protect and grow your brand's online reputation with proactive review management, brand monitoring, and strategic reputation recovery.",
      href: "/services/reputation-management",
      icon: Star,
    },
  ];

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        {/* Background decorative elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{
              background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <MapPin size={14} className="text-purple-400" />
              <span
                className="text-xs font-semibold text-purple-300 uppercase tracking-widest"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Google Business Profile Services
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              AI-Powered{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Google Business Profile
              </span>{" "}
              Management
            </h1>

            <p
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital optimizes and manages your Google Business Profile
              so you rank in the local map pack, attract more customers, and
              convert local searches into real revenue — powered by our
              agentic AI system and expert human oversight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:scale-105"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                }}
              >
                <Zap size={16} />
                Book a Free Demo
              </a>
              <a
                href="tel:713-489-7004"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 text-base transition-all duration-200 hover:text-white hover:bg-purple-700/20"
                style={{
                  fontFamily: "Inter, sans-serif",
                  border: "1px solid rgba(124,58,237,0.5)",
                }}
              >
                <Phone size={16} />
                {/* Phone number from verified business facts */}
                713-489-7004
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/5444631/pexels-photo-5444631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Google Business Profile listing displayed on a smartphone showing map pack results for a local Houston business"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 30px rgba(124,58,237,0.3)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <Bot size={20} color="#fff" />
              </div>
              <div>
                <p
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  AI-Driven Management
                </p>
                <p className="text-xs text-gray-400">Posts · Reviews · Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <h2
                className="text-lg font-bold text-purple-300 mb-3 uppercase tracking-wider text-sm"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </h2>
              <p
                className="text-base md:text-lg text-gray-200 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Google Business Profile management involves optimizing and maintaining
                your Google listing so your business appears prominently in local search
                results and Google Maps. Echo5 Digital provides AI-assisted Google
                Business Profile management for small and mid-sized businesses in
                Houston, Sugar Land, and across the U.S. Services include profile
                optimization, post management, review monitoring, and performance
                reporting. This service is ideal for businesses seeking stronger local
                visibility and more inbound customer inquiries.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm" maxWidth="2xl">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {trustIndicators.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <item.icon size={14} className="text-purple-400 shrink-0" />
              <span
                className="text-sm font-medium text-gray-300 whitespace-nowrap"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS GOOGLE BUSINESS PROFILE ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
              <MapPin size={13} className="text-purple-400" />
              <span
                className="text-xs font-semibold text-purple-400 uppercase tracking-widest"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                What Is GBP?
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              The Foundation of Local Search Visibility
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Google Business Profile (formerly Google My Business) is a free
              listing tool that controls how your business appears in Google Search
              and Google Maps. It's often the first touchpoint a potential customer
              has with your brand — before they ever visit your website.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              An optimized GBP listing directly influences your placement in the
              coveted{" "}
              <strong className="text-purple-300">Google Map Pack</strong> — the
              top three local business results that appear prominently in local
              searches. Businesses that appear in the map pack see dramatically
              higher click-through rates, more calls, and more foot traffic than
              those that don't.
            </p>
            <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              For Houston and Sugar Land businesses competing in dense local markets,
              a fully optimized GBP profile isn't optional — it's essential for
              customer discovery and sustained local growth.
            </p>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Google Maps local search results showing the map pack with three local business listings"
                className="w-full h-72 object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl text-center"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-2xl font-bold text-purple-400"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                #1–3
              </p>
              <p className="text-xs text-gray-400">Map Pack Positions</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── GBP SERVICES BREAKDOWN ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Settings size={13} className="text-purple-400" />
            <span
              className="text-xs font-semibold text-purple-400 uppercase tracking-widest"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Our Services
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Complete GBP Management Services
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From initial profile setup to ongoing optimization and reporting,
            Echo5 Digital covers every aspect of your Google Business Profile
            to maximize local search performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gbpServices.map((service) => (
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

      {/* ── AI-POWERED GBP MANAGEMENT ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI-powered marketing automation dashboard showing performance analytics and scheduling tools"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* AI badge overlay */}
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.92)",
                border: "1px solid rgba(124,58,237,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  <Bot size={16} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Agentic AI System Active
                  </p>
                  <p className="text-xs text-gray-400">
                    Monitoring · Scheduling · Reporting 24/7
                  </p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Bot size={13} className="text-purple-400" />
              <span
                className="text-xs font-semibold text-purple-400 uppercase tracking-widest"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                AI-Powered
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Smarter GBP Management with Agentic AI
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Echo5 Digital's proprietary agentic AI system works around the clock
              to keep your Google Business Profile optimized, active, and
              performing — tasks that would take hours of manual work each week.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: "Automated Post Scheduling",
                  desc: "AI schedules and publishes GBP posts on an optimal cadence to keep your profile fresh and visible.",
                },
                {
                  icon: Star,
                  title: "Review Monitoring & Alerts",
                  desc: "Instant alerts when new reviews arrive, with AI-drafted response suggestions reviewed by your human team.",
                },
                {
                  icon: BarChart3,
                  title: "Performance Tracking",
                  desc: "Continuous monitoring of profile views, search impressions, and customer actions with actionable insights.",
                },
                {
                  icon: Shield,
                  title: "Human Oversight for Brand Accuracy",
                  desc: "Every piece of content and every response is reviewed by our expert team to ensure it aligns with your brand voice.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <feature.icon size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {feature.title}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            <TrendingUp size={13} className="text-purple-400" />
            <span
              className="text-xs font-semibold text-purple-400 uppercase tracking-widest"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Our Process
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How Echo5 Digital Manages Your GBP
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A clear, proven workflow from initial audit to ongoing AI-human
            hybrid management — designed for results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < howItWorksSteps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                  style={{
                    background: "linear-gradient(90deg, rgba(124,58,237,0.5), rgba(168,85,247,0.2))",
                    transform: "translateX(-50%)",
                    width: "calc(100% - 3rem)",
                  }}
                />
              )}
              <div
                className="relative z-10 flex flex-col items-start p-6 h-full rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.step}
                  </span>
                </div>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <step.icon size={18} className="text-purple-400" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
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
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL IMPACT SECTION ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider id="local-impact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
              <MapPin size={13} className="text-purple-400" />
              <span
                className="text-xs font-semibold text-purple-400 uppercase tracking-widest"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Serving Houston &amp; Sugar Land, TX
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Driving Local Visibility in Competitive Texas Markets
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Echo5 Digital specializes in Google Business Profile optimization
              for businesses in{" "}
              <strong className="text-purple-300">Houston and Sugar Land, Texas</strong>{" "}
              — two of the most competitive local markets in the South. In these
              markets, appearing in Google's map pack directly drives foot traffic,
              phone calls, and inbound customer inquiries.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Whether you're a service-area business covering Greater Houston or a
              brick-and-mortar location in Sugar Land, our GBP management strategy
              is built to capture high-intent local searches and convert them into
              customers. We also serve businesses across the U.S. with the same
              AI-powered approach.
            </p>

            {/* Impact metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { metric: "Map Pack", label: "Placement Targeted" },
                { metric: "24/7", label: "AI Monitoring" },
                { metric: "Local", label: "Houston & Sugar Land Focus" },
                { metric: "National", label: "U.S. Service Coverage" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <p
                    className="text-xl font-bold text-purple-400 mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.metric}
                  </p>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* NAP — real HTML text per schema requirements */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <h3
                className="text-sm font-bold text-white mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Contact Echo5 Digital
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={14} className="text-purple-400 shrink-0" />
                  {/* Phone: verified business fact */}
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={14} className="text-purple-400 shrink-0" />
                  {/* Email: verified business fact */}
                  hello@echo5digital.com
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin size={14} className="text-purple-400 shrink-0" />
                  {/* Address: verified business fact */}
                  Houston / Sugar Land, Texas
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/18441165/pexels-photo-18441165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Aerial view of the Houston Texas skyline representing Echo5 Digital's local market coverage"
                className="w-full h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)",
                }}
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(10,15,30,0.92)",
                  border: "1px solid rgba(124,58,237,0.4)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <p
                  className="text-sm font-bold text-white mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Serving Houston &amp; Sugar Land, TX
                </p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                  Competitive local markets where map pack placement drives real
                  customer acquisition — phone calls, directions, and website visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INTERNAL LINKS TO RELATED SERVICES ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Complete Your Local Digital Presence
          </h2>
          <p
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Google Business Profile management works best as part of a broader
            local digital strategy. Explore related Echo5 Digital services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 40px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <service.icon size={20} className="text-purple-400" />
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm text-gray-400 leading-relaxed flex-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.description}
              </p>
              <div className="flex items-center gap-2 mt-4 text-purple-400 text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider id="faq">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            <MessageSquare size={13} className="text-purple-400" />
            <span
              className="text-xs font-semibold text-purple-400 uppercase tracking-widest"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              FAQ
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Common questions about Google Business Profile management answered
            by the Echo5 Digital team.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
              style={{
                background: openFaq === index
                  ? "rgba(124,58,237,0.12)"
                  : "rgba(255,255,255,0.03)",
                border: openFaq === index
                  ? "1px solid rgba(168,85,247,0.4)"
                  : "1px solid rgba(124,58,237,0.2)",
                transition: "all 0.2s ease",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span
                  className="text-base font-semibold text-white leading-snug"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <span className="text-purple-400 shrink-0 mt-0.5">
                  {openFaq === index ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-6 pb-6"
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

      {/* ── LEAD FORM CTA ── */}
      <Section background="gradient" spacing="xl" maxWidth="xl" withDivider id="lead-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side messaging */}
          <div className="lg:pt-8">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Zap size={13} className="text-purple-400" />
              <span
                className="text-xs font-semibold text-purple-400 uppercase tracking-widest"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get Started
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Ready to Dominate Your Local Map Pack?
            </h2>
            <p
              className="text-gray-400 mb-8 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Let Echo5 Digital's AI-powered GBP management team put your
              business in front of more local customers in Houston, Sugar Land,
              and beyond. Fill out the form and we'll be in touch within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free GBP audit included with consultation",
                "AI-powered automation + human expertise",
                "Transparent monthly performance reporting",
                "Serving Houston, Sugar Land & nationwide",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-purple-400 shrink-0" />
                  <span
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct contact options */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-sm font-bold text-white mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Prefer to reach out directly?
              </p>
              <div className="space-y-2">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={14} className="text-purple-400 shrink-0" />
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={14} className="text-purple-400 shrink-0" />
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {/* Hidden UTM field area — handled via JS in real implementation */}
            <input type="hidden" name="utm_source" id="utm_source" value="" />
            <input type="hidden" name="utm_medium" id="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" id="utm_campaign" value="" />
            <ContactForm
              heading="Get Your Free GBP Audit"
              subheading="Tell us about your business and local visibility goals. We'll review your Google Business Profile and recommend improvements."
              submitLabel="Request Free GBP Audit"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}