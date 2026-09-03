"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Star,
  TrendingUp,
  Search,
  MousePointerClick,
  FileText,
  Shield,
  Globe,
  Bot,
  ClipboardList,
  BarChart3,
  Rocket,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Zap,
  Award,
  Phone,
  Mail,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate Google Maps and local search results so patients in your area find your practice first — before your competitors.",
    badge: "High Impact",
  },
  {
    icon: Search,
    title: "Google Business Profile Optimization",
    description:
      "We fully optimize your GBP listing with accurate info, photos, services, and ongoing post management to maximize local visibility.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads Management",
    description:
      "AI-optimized paid search campaigns targeting high-intent keywords like 'dentist near me' to drive immediate new patient inquiries.",
    badge: "Fast Results",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "SEO-driven blog posts, service pages, and FAQs that position your practice as a trusted authority and rank for patient search queries.",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Automated review generation workflows, response strategies, and monitoring to build a 5-star online reputation across Google and other platforms.",
    badge: "Patient Trust",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom, conversion-optimized dental websites built to turn visitors into booked appointments — fast, mobile-first, and HIPAA-aware.",
  },
];

const challenges = [
  {
    icon: Users,
    title: "Intense Local Competition",
    description:
      "Most urban and suburban markets have multiple dental practices competing for the same patient pool. Standing out requires a strategic, AI-driven approach.",
  },
  {
    icon: TrendingUp,
    title: "High Patient Acquisition Costs",
    description:
      "Without optimized campaigns, dental practices overpay for leads. Smart targeting and AI optimization reduce cost-per-acquisition significantly.",
  },
  {
    icon: MapPin,
    title: "Google Maps Dependency",
    description:
      "Over 70% of new dental patients begin their search on Google Maps. Without a strong local SEO strategy, practices remain invisible to the highest-intent prospects.",
  },
  {
    icon: Star,
    title: "Review-Driven Decisions",
    description:
      "Patients read reviews before booking. Practices with fewer than 4.5 stars or limited reviews lose patients to competitors before any conversation begins.",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Practice Audit",
    description:
      "We conduct a comprehensive digital audit of your practice — current rankings, GBP health, website performance, ad history, and competitor analysis.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Custom Strategy",
    description:
      "Based on your goals, market, and budget, we build a tailored 90-day growth strategy covering SEO, ads, content, and reputation.",
  },
  {
    number: "03",
    icon: Bot,
    title: "AI-Powered Execution",
    description:
      "Our AI Marketing Employee begins executing campaigns, publishing content, and managing your GBP and reviews — all reviewed by our human team.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Reporting & Refinement",
    description:
      "You receive clear monthly reports showing new patient leads, ranking improvements, ad performance, and review growth — with ongoing strategy refinements.",
  },
];

const results = [
  {
    metric: "3x",
    label: "More Google Map Views",
    note: "Illustrative — results vary by market and starting point",
  },
  {
    metric: "40%",
    label: "Reduction in Cost Per Lead",
    note: "Illustrative — results vary by campaign and competition",
  },
  {
    metric: "50+",
    label: "New Patient Inquiries / Month",
    note: "Illustrative — representative of optimized dental campaigns",
  },
  {
    metric: "4.8★",
    label: "Average Review Rating Achieved",
    note: "Illustrative — based on reputation management programs",
  },
];

const trustIndicators = [
  { icon: Bot, label: "AI-Powered Execution" },
  { icon: Users, label: "Human-Reviewed Outputs" },
  { icon: Award, label: "Dental Industry Specialists" },
  { icon: Shield, label: "Privacy-Conscious Marketing" },
  { icon: MapPin, label: "Local SEO Experts" },
  { icon: BarChart3, label: "Transparent Reporting" },
];

export default function DentalMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        {/* Background decorative elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #A855F7 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={12} />
              AI-Powered Dental Marketing
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Grow Your Dental Practice with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-Powered Marketing
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital is a specialist dental marketing agency that uses
              artificial intelligence to attract more patients, dominate local
              search, and build an unbeatable online reputation — all done for
              you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Phone size={16} />
                Book a Free Strategy Call
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "2px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/6812434/pexels-photo-6812434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Modern dental practice reception area with smiling staff"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.85) 100%)",
                }}
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(10,15,30,0.9)",
                  border: "1px solid rgba(124,58,237,0.35)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  }}
                >
                  <TrendingUp size={18} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Patient Growth on Autopilot
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    AI + Human expertise, done for you
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
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <h2
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer: What Is Dental Marketing?
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "rgba(229,231,235,0.85)", fontFamily: "Inter, sans-serif" }}
              >
                Dental marketing encompasses the digital strategies dental
                practices use to attract new patients, including Local SEO,
                Google Ads, review management, and content marketing.{" "}
                <strong style={{ color: "#E5E7EB" }}>Echo5 Digital</strong>{" "}
                provides AI-powered, done-for-you dental marketing services
                tailored to the competitive nature of local dental markets.
                Services include Google Business Profile optimization, paid ads
                management, reputation management, and custom website design.
                Echo5 Digital serves dental practices in{" "}
                <strong style={{ color: "#E5E7EB" }}>
                  Houston, Sugar Land, Texas
                </strong>{" "}
                and nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── DENTAL INDUSTRY CHALLENGES ── */}
      <Section background="default" spacing="lg" withDivider id="challenges">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            The Landscape
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Dental Marketing Is Different
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Dental practices face a unique set of marketing challenges that
            require specialized, hyper-local strategies — not generic agency
            playbooks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={22} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── DENTAL MARKETING SERVICES ── */}
      <Section background="elevated" spacing="lg" withDivider id="services">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Dental Marketing Services That Drive Results
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Every service is designed specifically for dental practices and
            executed through our AI-powered, done-for-you model.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              variant="service"
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
            />
          ))}
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE ── */}
      <Section background="gradient" spacing="lg" withDivider id="ai-employee">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.15)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI-powered marketing automation dashboard showing dental practice analytics"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={12} />
              AI Marketing Employee
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your Practice's Dedicated AI Marketing Team
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's AI Marketing Employee model gives your dental
              practice a full-time, always-on marketing presence without the
              overhead of hiring in-house staff. Our AI continuously monitors
              your rankings, publishes content, manages your reviews, and
              optimizes your ad spend — while our human team oversees every
              output for quality and compliance.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Continuous keyword ranking monitoring and optimization",
                "Automated review request workflows for new patients",
                "Weekly GBP posts to maintain local search visibility",
                "AI-drafted blog content reviewed by human editors",
                "Real-time ad performance optimization",
                "Monthly strategy calls and transparent reporting",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                >
                  <CheckCircle
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={15} />
              Learn About the AI Marketing Employee
            </Link>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" withDivider id="how-it-works">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            The Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How We Grow Your Dental Practice
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            A clear, four-step process from day one to ongoing growth.
          </p>
        </div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 80%, transparent)",
              top: "2.5rem",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.4)",
                      boxShadow: "0 0 24px rgba(124,58,237,0.2)",
                    }}
                  >
                    <Icon size={28} style={{ color: "#A855F7" }} />
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        color: "#fff",
                        fontFamily: "Space Grotesk, sans-serif",
                        boxShadow: "0 0 10px rgba(124,58,237,0.5)",
                      }}
                    >
                      {step.number.replace("0", "")}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
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
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── RESULTS SECTION ── */}
      <Section background="elevated" spacing="lg" withDivider id="results">
        <div className="text-center mb-4">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Results
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What Dental Practices Can Achieve
          </h2>
        </div>

        {/* Disclaimer */}
        <p
          className="text-center text-xs mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
        >
          * The following indicators are illustrative and representative of
          results achievable through optimized dental marketing programs.
          Individual results vary based on market, starting point, and campaign
          scope.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result) => (
            <div
              key={result.label}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="text-4xl sm:text-5xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {result.metric}
              </div>
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {result.label}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(229,231,235,0.35)", fontFamily: "Inter, sans-serif" }}
              >
                {result.note}
              </p>
            </div>
          ))}
        </div>

        {/* Case study placeholder */}
        <div
          className="rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/3952136/pexels-photo-3952136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Dental practice owner reviewing marketing growth results"
            className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
          />
          <div>
            <p
              className="text-base leading-relaxed mb-2"
              style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
            >
              <em>
                "Our new patient calls doubled within 90 days. The team handled
                everything — our Google profile, reviews, and ads — and we
                finally started showing up at the top of Google Maps."
              </em>
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              — Dental Practice Owner, Houston, TX
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "rgba(229,231,235,0.35)", fontFamily: "Inter, sans-serif" }}
            >
              * Illustrative testimonial — representative of client experiences
            </p>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="md" withDivider id="trust">
        <div className="text-center mb-8">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            Why Dental Practices Choose Echo5 Digital
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustIndicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 py-5 px-3 rounded-xl text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.18)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <Icon size={18} style={{ color: "#A855F7" }} />
                </div>
                <p
                  className="text-xs font-semibold leading-snug"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="elevated" spacing="lg" withDivider id="local">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <MapPin size={12} />
              Serving Houston &amp; Sugar Land, TX
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Dominating Local Dental Search in Houston &amp; Sugar Land
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Dental practices in Houston and Sugar Land, Texas compete in a
              dense local market where Google Maps rankings and online reviews
              directly influence patient decisions. Echo5 Digital helps local
              dental practices dominate local search results, build strong
              reputations on Google, and convert more website visitors into
              booked appointments through targeted AI-driven marketing
              strategies.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <address className="not-italic flex items-center gap-2 text-sm" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                <MapPin size={15} style={{ color: "#7C3AED" }} />
                Houston / Sugar Land, Texas (Primary Service Area)
              </address>
              {/* Phone number — verified from business facts */}
              <a
                href="tel:7134897004"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={15} style={{ color: "#7C3AED" }} />
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={15} style={{ color: "#7C3AED" }} />
                hello@echo5digital.com
              </a>
            </div>

            <p
              className="text-sm"
              style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
            >
              Also serving dental practices nationally across the United States.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/18441165/pexels-photo-18441165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Houston Texas skyline representing local dental marketing service area"
              className="w-full h-64 object-cover rounded-2xl"
              style={{
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "0 0 40px rgba(124,58,237,0.1)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider id="faq">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Everything dental practice owners need to know about working with
            Echo5 Digital.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
              style={{
                border: openFaq === index
                  ? "1px solid rgba(168,85,247,0.5)"
                  : "1px solid rgba(124,58,237,0.2)",
                background: openFaq === index
                  ? "rgba(124,58,237,0.08)"
                  : "rgba(255,255,255,0.02)",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: openFaq === index
                      ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                      : "rgba(124,58,237,0.15)",
                    color: "#fff",
                  }}
                >
                  {openFaq === index ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} style={{ color: "#A855F7" }} />
                  )}
                </span>
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6"
                  role="region"
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA SECTION ── */}
      <Section background="gradient" spacing="xl" withDivider id="cta">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* CTA Text */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Rocket size={12} />
              Free Strategy Session
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Ready to Attract More Dental Patients?
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Book a free dental marketing strategy session with Echo5 Digital.
              We'll audit your current digital presence, identify gaps, and show
              you exactly how to grow your patient base — with no obligation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                <CheckCircle size={16} style={{ color: "#A855F7" }} />
                Free, no-obligation audit
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                <CheckCircle size={16} style={{ color: "#A855F7" }} />
                No long-term contract required
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}>
                <CheckCircle size={16} style={{ color: "#A855F7" }} />
                Done-for-you execution
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Phone — verified */}
              <a
                href="tel:7134897004"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={15} />
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={15} />
                hello@echo5digital.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none">
            {/* Hidden UTM fields note: in a real integration, add hidden inputs for utm_source, utm_medium, utm_campaign */}
            <ContactForm
              heading="Book Your Free Dental Marketing Strategy Call"
              subheading="Tell us about your practice and goals — we'll get back to you within 24 hours."
              submitLabel="Request My Free Strategy Session"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}