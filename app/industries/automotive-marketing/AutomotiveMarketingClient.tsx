"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  TrendingUp,
  Star,
  Search,
  BarChart2,
  Share2,
  FileText,
  Shield,
  ChevronDown,
  ChevronUp,
  Bot,
  Zap,
  Eye,
  RefreshCw,
  ClipboardList,
  CheckCircle,
  Car,
  Wrench,
  Users,
  Calendar,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function AutomotiveMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const challenges = [
    {
      icon: Search,
      title: "Hyper-Competitive Local Search",
      description:
        "Auto businesses fight for the same high-intent keywords like 'oil change near me' or 'used cars Houston.' Standing out in local search requires a precise, AI-driven strategy.",
    },
    {
      icon: Calendar,
      title: "Seasonal Demand Fluctuations",
      description:
        "Tire rotations spike in spring, A/C repairs surge in summer. Manually adjusting campaigns for seasonal shifts wastes budget — AI keeps your ads optimized year-round.",
    },
    {
      icon: Car,
      title: "Inventory & Promotion Complexity",
      description:
        "Dealerships cycle through inventory constantly. Promoting the right vehicles to the right buyers at the right moment demands dynamic ad strategies most agencies can't keep up with.",
    },
    {
      icon: Star,
      title: "Reputation Management",
      description:
        "A single negative review can cost you dozens of leads. Auto consumers read more reviews than almost any other category, making proactive reputation management non-negotiable.",
    },
  ];

  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description:
        "Dominate Google Maps and local search results for your area. We optimize your entire local SEO presence so buyers searching 'dealerships near me' find you first.",
      badge: "High Impact",
    },
    {
      icon: BarChart2,
      title: "Google Ads Management",
      description:
        "AI-optimized search and display campaigns targeting in-market auto buyers. We continuously refine bids, keywords, and ad copy to maximize your cost-per-lead.",
      badge: "Fast Results",
    },
    {
      icon: Star,
      title: "Google Business Profile",
      description:
        "A fully optimized GBP is your #1 local ranking factor. We manage photos, posts, Q&A, and review responses to keep your profile converting at peak performance.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage car buyers on Facebook, Instagram, and beyond with compelling vehicle showcases, promotions, and community content that builds brand loyalty in your market.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Authoritative blog posts, buying guides, and service tips that attract organic traffic from buyers at every stage of the customer journey — from research to purchase.",
    },
    {
      icon: Shield,
      title: "Reputation Management",
      description:
        "Monitor, respond to, and grow your reviews across Google, Yelp, and industry platforms. Turn satisfied customers into your most powerful marketing asset.",
      badge: "Essential",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Strategy Session",
      description:
        "We audit your current digital presence, identify gaps, and build a custom roadmap tailored to your dealership or shop's specific goals and market.",
    },
    {
      number: "02",
      icon: Bot,
      title: "AI-Driven Campaign Setup",
      description:
        "Our AI Marketing Employee ingests your business data, competitors, and local search landscape to configure optimized campaigns across every channel.",
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Continuous Optimization",
      description:
        "The AI monitors performance 24/7, making real-time adjustments to bids, keywords, and content — so your campaigns never go stale between agency check-ins.",
    },
    {
      number: "04",
      icon: Eye,
      title: "Human Oversight & Reporting",
      description:
        "Our specialists review AI outputs, apply strategic guidance, and deliver transparent monthly reports so you always know exactly what's working.",
    },
  ];

  const metrics = [
    {
      value: "3.2×",
      label: "Average increase in Google Maps visibility",
      context: "Illustrative result based on campaign patterns",
    },
    {
      value: "47%",
      label: "Reduction in cost-per-lead via AI bid optimization",
      context: "Illustrative result based on campaign patterns",
    },
    {
      value: "4.8★",
      label: "Average review rating maintained for automotive clients",
      context: "Illustrative result based on reputation management programs",
    },
    {
      value: "60%",
      label: "More organic traffic within 6 months of SEO onboarding",
      context: "Illustrative result based on SEO campaign data",
    },
  ];

  const trustBadges = [
    { label: "Google Partner Certified", icon: Search },
    { label: "AI-Powered Campaigns", icon: Bot },
    { label: "Houston & Sugar Land HQ", icon: MapPin },
    { label: "National U.S. Coverage", icon: TrendingUp },
    { label: "Automotive Industry Specialists", icon: Wrench },
    { label: "Multi-Channel Attribution", icon: BarChart2 },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/22890762/pexels-photo-22890762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Modern automotive dealership at night"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(17,13,46,0.85) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
            }}
          >
            <Car size={14} />
            Automotive Industry Marketing
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            AI-Powered Marketing for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Auto Businesses
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.72)", fontFamily: "Inter, sans-serif" }}
          >
            Dealerships, repair shops, and auto service centers trust Echo5
            Digital to deliver more leads, stronger reviews, and higher local
            visibility — powered by AI that never stops optimizing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Demo
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
              style={{
                border: "1px solid rgba(124,58,237,0.5)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick Answer Block ── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
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
                boxShadow: "0 0 18px rgba(124,58,237,0.5)",
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
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital is an AI-powered digital marketing agency serving
                automotive businesses including dealerships, repair shops, and
                auto service centers. We provide local SEO, Google Ads, social
                media management, and reputation management tailored to the auto
                industry. Our AI Marketing Employee model delivers continuous
                campaign optimization with human oversight. We serve clients in
                Houston, Sugar Land, Texas, and across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Industry Challenges ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Pain Points We Solve
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Automotive Marketing Challenges
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            The automotive space is one of the most competitive in local
            digital marketing. Here's what we hear from dealers and shop owners
            every day — and how we fix it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="flex gap-5 rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <challenge.icon size={22} style={{ color: "#A855F7" }} />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  {challenge.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(229,231,235,0.6)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Services for Automotive ── */}
      <Section
        id="services"
        background="gradient"
        spacing="lg"
        maxWidth="2xl"
        withDivider
      >
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Services Built for Auto Businesses
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Every service is contextualized for the automotive industry —
            not generic digital marketing copy-pasted from another vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── AI Marketing Employee ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Our Unique Model
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Meet Your AI Marketing Employee for Automotive
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{
                color: "rgba(229,231,235,0.65)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Traditional agencies set campaigns and wait until the next
              monthly call to adjust. Our AI Marketing Employee works around
              the clock — continuously scanning competitor ads, tracking
              keyword shifts, and reallocating budget in real time for your
              automotive business.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "rgba(229,231,235,0.65)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Whether you're a multi-location dealership group or a
              neighborhood shop, our model scales with you — delivering
              enterprise-grade campaign intelligence without adding headcount
              to your payroll.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "24/7 campaign monitoring across SEO, Ads & Social",
                "Automated bid adjustments tied to real-time demand signals",
                "Inventory-aware ad targeting for dealerships",
                "Competitor gap analysis updated continuously",
                "Human strategists review and guide every AI output",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(229,231,235,0.7)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 22px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.25)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={16} />
              Learn About AI Marketing Employee
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]">
            <img
              src="https://images.pexels.com/photos/19870024/pexels-photo-19870024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered marketing dashboard showing automotive campaign analytics"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,15,30,0.3) 0%, rgba(124,58,237,0.15) 100%)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
              style={{
                background: "rgba(10,15,30,0.9)",
                border: "1px solid rgba(124,58,237,0.35)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  }}
                >
                  <Bot size={18} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    AI Marketing Employee — Active
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    Optimizing 24 campaigns across 6 channels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            The Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How We Get Your Auto Business Growing
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            From first call to full campaign operation, here's exactly what
            working with Echo5 Digital looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-10 -right-3 w-6 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.5), rgba(168,85,247,0.2))",
                  }}
                />
              )}

              <span
                className="text-4xl font-bold mb-4 block"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "rgba(124,58,237,0.25)",
                  letterSpacing: "-0.03em",
                }}
              >
                {step.number}
              </span>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <step.icon size={22} style={{ color: "#A855F7" }} />
              </div>

              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(229,231,235,0.6)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Results / Case Studies ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Performance Metrics
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Results That Move the Needle
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
          >
            The following metrics are illustrative results based on campaign
            patterns observed across our automotive client programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {metric.value}
              </p>
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                {metric.label}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{
                  color: "rgba(229,231,235,0.4)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/31626721/pexels-photo-31626721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Independent auto repair shop client case study"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 60%, rgba(10,15,30,0.9) 100%)",
                }}
              />
            </div>
            <div
              className="p-8 lg:p-10 flex flex-col justify-center"
              style={{ background: "rgba(10,15,30,0.9)" }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest mb-4 inline-block"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Client Spotlight — Illustrative Example
              </span>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                Independent Repair Shop, Houston Metro
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  color: "rgba(229,231,235,0.65)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                A multi-bay repair shop in the Houston area struggled with
                near-zero Google Maps visibility and an inconsistent review
                profile. After onboarding with Echo5 Digital's AI Marketing
                Employee program, the shop saw a significant improvement in
                local search rankings, a higher volume of inbound calls from
                Google, and a 4.7-star average rating maintained across
                platforms — all within the first campaign cycle.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Local SEO",
                  "GBP Optimization",
                  "Reputation Mgmt",
                  "Google Ads",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      color: "#A855F7",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Trust Bar ── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <div className="text-center mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            Why Automotive Businesses Trust Echo5 Digital
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-3 rounded-xl p-4 text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <badge.icon size={18} style={{ color: "#A855F7" }} />
              </div>
              <p
                className="text-xs font-medium leading-tight"
                style={{
                  color: "rgba(229,231,235,0.65)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* NAP Info */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
          style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.5)" }}
        >
          <span className="flex items-center gap-2">
            <MapPin size={14} style={{ color: "#7C3AED" }} />
            Houston / Sugar Land, Texas
          </span>
          <span className="hidden sm:block" style={{ color: "rgba(124,58,237,0.4)" }}>|</span>
          {/* Phone number */}
          <a
            href="tel:713-489-7004"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Users size={14} style={{ color: "#7C3AED" }} />
            713-489-7004
          </a>
          <span className="hidden sm:block" style={{ color: "rgba(124,58,237,0.4)" }}>|</span>
          <a
            href="mailto:hello@echo5digital.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            hello@echo5digital.com
          </a>
        </div>
      </Section>

      {/* ── Local Relevance ── */}
      <Section background="default" spacing="md" maxWidth="2xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.05) 100%)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.5)",
              }}
            >
              <MapPin size={24} color="#fff" />
            </div>
            <div>
              <h2
                className="text-xl md:text-2xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                Serving Automotive Businesses Across Greater Houston
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(229,231,235,0.65)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Echo5 Digital is based in Houston and Sugar Land, Texas, making
                it a natural fit for automotive businesses throughout the greater
                Houston metro area. From dealerships along major corridors to
                independent repair shops in Sugar Land, our team understands the
                local competitive landscape and optimizes campaigns for
                Houston-area search intent and local Google Maps visibility. We
                also serve automotive clients nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ Accordion ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Common Questions
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.4)" : "rgba(124,58,237,0.2)"}`,
                background:
                  openFaq === index
                    ? "rgba(124,58,237,0.08)"
                    : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <span
                  className="font-semibold text-base"
                  style={{ color: "#E5E7EB" }}
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
                <div className="px-6 pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(229,231,235,0.65)",
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
      </Section>

      {/* ── CTA / Lead Form ── */}
      <Section
        id="contact"
        background="gradient"
        spacing="xl"
        maxWidth="xl"
        withDivider
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Get Started Today
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Ready to Accelerate Your Auto Business?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "rgba(229,231,235,0.65)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a free strategy session with our automotive marketing team.
              We'll audit your current digital presence and outline a clear
              roadmap for more leads, better reviews, and stronger local
              visibility.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "No long-term contracts required",
                "Results-focused, AI-driven execution",
                "Dedicated human account strategist",
                "Transparent monthly reporting",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(229,231,235,0.7)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-2 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {/* Phone */}
              <a
                href="tel:713-489-7004"
                className="flex items-center gap-2 hover:text-white transition-colors"
                style={{ color: "rgba(229,231,235,0.55)" }}
              >
                <span style={{ color: "#7C3AED" }}>📞</span>
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
                style={{ color: "rgba(229,231,235,0.55)" }}
              >
                <span style={{ color: "#7C3AED" }}>✉</span>
                hello@echo5digital.com
              </a>
            </div>
          </div>

          <div>
            {/* Hidden UTM fields are included inside the form wrapper as data attributes for tracking */}
            <div
              data-utm-source="automotive-page"
              data-utm-medium="organic"
              data-utm-campaign="automotive-marketing"
            >
              <ContactForm
                heading="Book a Free Demo"
                subheading="Tell us about your auto business and we'll build a strategy tailored to your market."
                submitLabel="Request Free Strategy Session"
                showAppointmentNote={true}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}