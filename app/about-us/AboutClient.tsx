"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Brain,
  Users,
  Layers,
  ShieldCheck,
  Bot,
  Eye,
  BarChart3,
  MapPin,
  Mail,
  Phone,
  Globe,
  ChevronDown,
  ChevronUp,
  Zap,
  Target,
  Code2,
  TrendingUp,
  Cpu,
  Network,
  CheckCircle2,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function AboutClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        {/* Decorative glow orbs */}
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
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={14} />
              AI-Powered Digital Agency
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              We Are{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Echo5 Digital
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              An AI-powered digital marketing and web development agency
              headquartered in Houston and Sugar Land, Texas — built to give
              small and mid-sized businesses access to enterprise-grade
              marketing intelligence and execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Work With Us
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-white/5 active:scale-95"
                style={{
                  border: "1px solid rgba(124,58,237,0.4)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                See Our Services
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
            <img
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital team collaborating on AI-powered marketing strategies"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, transparent 60%)",
              }}
            />
            {/* Stat chips */}
            <div
              className="absolute bottom-4 left-4 flex gap-3 flex-wrap"
            >
              {[
                { label: "SMBs Served", value: "100+" },
                { label: "AI-First", value: "Always" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 rounded-xl"
                  style={{
                    background: "rgba(10,15,30,0.85)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p
                    className="text-base font-bold"
                    style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── QUICK ANSWER BLOCK ───────────────────────────────────────────── */}
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              }}
            >
              <Zap size={16} color="#fff" />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Quick Answer
            </span>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(229,231,235,0.85)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital is an AI-powered digital marketing and web
            development agency headquartered in{" "}
            <strong style={{ color: "#E5E7EB" }}>
              Houston and Sugar Land, Texas
            </strong>
            , with operations support in Kochi, Kerala, India. The agency
            serves small and mid-sized businesses locally in the Houston metro
            and nationally across the U.S. Its{" "}
            <strong style={{ color: "#E5E7EB" }}>
              AI Marketing Employee system
            </strong>{" "}
            combines agentic AI execution with human strategist oversight to
            deliver SEO, paid media, content, web design, and development
            services at scale. Echo5 Digital can be reached at{" "}
            <a
              href="mailto:hello@echo5digital.com"
              style={{ color: "#A855F7", textDecoration: "underline" }}
            >
              hello@echo5digital.com
            </a>{" "}
            or{" "}
            <a
              href="tel:7134897004"
              style={{ color: "#A855F7", textDecoration: "underline" }}
            >
              713-489-7004
            </a>
            .
          </p>
        </div>
      </Section>

      {/* ─── OUR MISSION ─────────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/38808473/pexels-photo-38808473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital's mission: making enterprise-grade AI marketing accessible to SMBs"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(10,15,30,0.3) 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Target size={14} />
              Our Mission
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Leveling the Marketing Playing Field
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              For too long, sophisticated digital marketing has been the
              exclusive domain of large enterprises with deep budgets and
              in-house teams. Echo5 Digital was founded to change that.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Our mission is to make AI-powered marketing accessible,
              accountable, and results-driven for small and mid-sized
              businesses. By combining the scale of artificial intelligence
              with the judgment of experienced human strategists, we deliver
              the kind of marketing horsepower that was once only available to
              Fortune 500 companies — now within reach of every ambitious SMB.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {[
                "Accessible AI tools for every SMB budget",
                "Accountable reporting with real performance data",
                "Strategic human oversight at every step",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(229,231,235,0.8)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── WHAT MAKES US DIFFERENT ──────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider centered>
        <div className="mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Layers size={14} />
            Our Differentiators
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            What Makes Echo5 Digital Different
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{
              color: "rgba(229,231,235,0.6)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            We're not just another agency with AI buzzwords. Our model is
            built from the ground up around four foundational pillars that
            set us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Brain,
              title: "AI-First Methodology",
              description:
                "Every campaign, content piece, and strategy is powered by agentic AI — enabling faster execution, smarter targeting, and continuous optimization at machine scale.",
            },
            {
              icon: Eye,
              title: "Human Oversight Model",
              description:
                "Experienced strategists review, guide, and validate every AI output. You get the speed of AI with the judgment of seasoned marketing professionals.",
            },
            {
              icon: Layers,
              title: "Full-Stack Capabilities",
              description:
                "From SEO and paid media to web design, development, and custom programming — Echo5 Digital handles your entire digital growth stack under one roof.",
            },
            {
              icon: ShieldCheck,
              title: "Transparent Done-For-You",
              description:
                "We handle execution so you don't have to. But you're never in the dark — transparent reporting and the Command Center dashboard keep you informed at all times.",
            },
          ].map((pillar) => (
            <Card
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ─── HOW WE WORK ─────────────────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Network size={14} />
            Our Operational Model
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            How We Work
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{
              color: "rgba(229,231,235,0.6)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            A structured three-layer model that keeps AI execution sharp,
            human oversight tight, and clients always informed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(168,85,247,0.4), transparent)",
            }}
          />

          {[
            {
              step: "01",
              icon: Bot,
              title: "AI Employees Execute",
              description:
                "Our AI Marketing Employee agents handle SEO, content creation, paid media management, social scheduling, and more — at scale, continuously, without fatigue.",
            },
            {
              step: "02",
              icon: Users,
              title: "Human Strategists Guide",
              description:
                "Experienced human strategists review AI outputs, set campaign direction, manage client relationships, and ensure every deliverable meets the highest standards.",
            },
            {
              step: "03",
              icon: BarChart3,
              title: "Command Center Visibility",
              description:
                "Clients stay informed through our Command Center dashboard — a real-time view into campaign performance, AI activity, and strategic progress.",
            },
          ].map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="relative flex items-center justify-center w-16 h-16 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <step.icon size={28} style={{ color: "#A855F7" }} />
                <span
                  className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    color: "#fff",
                    fontFamily: "Space Grotesk, sans-serif",
                    boxShadow: "0 0 12px rgba(124,58,237,0.5)",
                  }}
                >
                  {step.step}
                </span>
              </div>
              <h3
                className="text-lg font-bold"
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

      {/* ─── OUR LOCATIONS ───────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <MapPin size={14} />
              Our Locations
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Rooted in Houston. Operating Globally.
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Echo5 Digital is locally rooted in the Houston–Sugar Land
              corridor, giving us direct familiarity with the competitive
              dynamics facing businesses in the Houston metro market. Our
              operations support team in Kochi, Kerala, India, enables
              around-the-clock execution capacity — meaning your campaigns
              never sleep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  region: "Headquarters",
                  location: "Houston & Sugar Land, Texas",
                  detail: "Primary client service hub",
                  flag: "🇺🇸",
                },
                {
                  region: "Operations Support",
                  location: "Kochi, Kerala, India",
                  detail: "24/7 AI execution support",
                  flag: "🇮🇳",
                },
                {
                  region: "Primary Service Area",
                  location: "Houston Metro, Texas",
                  detail: "Local SMBs across all industries",
                  flag: "📍",
                },
                {
                  region: "National Coverage",
                  location: "United States",
                  detail: "SMBs from coast to coast",
                  flag: "🌐",
                },
              ].map((loc) => (
                <div
                  key={loc.region}
                  className="flex flex-col gap-1 p-4 rounded-xl"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <span className="text-xl">{loc.flag}</span>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    {loc.region}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {loc.location}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: "rgba(229,231,235,0.5)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {loc.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/17995530/pexels-photo-17995530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Houston, Texas skyline — home of Echo5 Digital headquarters"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,15,30,0.5) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.85)",
                border: "1px solid rgba(124,58,237,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Serving Houston &amp; Sugar Land, TX
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                Home services · Healthcare · Legal · Real Estate · And more
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── GEO COMPANY FACTS BLOCK ─────────────────────────────────────── */}
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.10) 0%, rgba(168,85,247,0.05) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <h2
            className="text-xl font-bold mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
            }}
          >
            Company Facts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {[
              {
                label: "Business Name",
                value: "Echo5 Digital",
                icon: Zap,
              },
              {
                label: "Headquarters",
                value: "Houston / Sugar Land, Texas",
                icon: MapPin,
              },
              {
                label: "Operations Support",
                value: "Kochi, Kerala, India",
                icon: Globe,
              },
              {
                label: "Phone",
                value: "713-489-7004",
                href: "tel:7134897004",
                icon: Phone,
              },
              {
                label: "Email",
                value: "hello@echo5digital.com",
                href: "mailto:hello@echo5digital.com",
                icon: Mail,
              },
              {
                label: "Service Area",
                value: "Houston, TX (primary) · National U.S.",
                icon: Globe,
              },
            ].map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5"
                  style={{
                    background: "rgba(124,58,237,0.2)",
                    border: "1px solid rgba(124,58,237,0.3)",
                  }}
                >
                  <fact.icon size={14} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                    style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                  >
                    {fact.label}
                  </p>
                  {fact.href ? (
                    <a
                      href={fact.href}
                      className="text-sm font-medium transition-colors hover:text-white"
                      style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                    >
                      {fact.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── LOCAL RELEVANCE ─────────────────────────────────────────────── */}
      <Section background="default" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <MapPin size={22} style={{ color: "#A855F7" }} />
          </div>
          <div>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston, Sugar Land, and Beyond
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital is locally rooted in Houston and Sugar Land, Texas,
              giving it direct familiarity with the competitive dynamics facing
              businesses in the Houston metro market. Local SMBs across
              industries — from home services and healthcare to law and real
              estate — can work with a nearby agency that combines local market
              knowledge with AI-scale execution. The primary service area is
              Houston and Sugar Land, Texas, with national U.S. coverage also
              available.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── HUMAN TEAM SECTION ──────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Users size={14} />
              Our Human Team
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              AI Executes. Humans Lead.
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Echo5 Digital is not a fully automated black box. Behind every
              campaign is a team of human strategists, marketing specialists,
              and technical experts who set the direction, review outputs, and
              maintain meaningful relationships with every client.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Our human team brings expertise in SEO, paid media, content
              strategy, web development, and custom programming — working
              alongside our AI systems to ensure campaigns are not just fast,
              but genuinely effective and aligned with your business goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { role: "Marketing Strategists", icon: TrendingUp },
                { role: "SEO & Content Specialists", icon: Target },
                { role: "Web Developers", icon: Code2 },
                { role: "AI Systems Engineers", icon: Cpu },
              ].map((item) => (
                <div
                  key={item.role}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <item.icon size={16} style={{ color: "#A855F7" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/7651819/pexels-photo-7651819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital's human strategists and specialists working alongside AI systems"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, transparent 50%, rgba(10,15,30,0.4) 100%)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* ─── TRUST BAR ───────────────────────────────────────────────────── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.01em",
            }}
          >
            Built on Proven Technologies &amp; Methodologies
          </h2>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
          >
            Our AI-first stack draws on industry-leading platforms and
            evidence-based marketing frameworks.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Agentic AI", sublabel: "Core execution engine", icon: Bot },
            { label: "SEO & AEO", sublabel: "Search & answer optimization", icon: Target },
            { label: "Google Ads", sublabel: "Paid media expertise", icon: TrendingUp },
            { label: "Meta Ads", sublabel: "Social paid media", icon: BarChart3 },
            { label: "Custom Dev", sublabel: "Next.js & full-stack", icon: Code2 },
            { label: "CRM Automation", sublabel: "Workflow intelligence", icon: Network },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <item.icon size={18} style={{ color: "#A855F7" }} />
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                >
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
          >
            Common questions about Echo5 Digital, our locations, and how we
            work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.4)" : "rgba(124,58,237,0.2)"}`,
                background:
                  openFaq === index
                    ? "rgba(124,58,237,0.08)"
                    : "rgba(255,255,255,0.02)",
                transition: "all 0.2s ease",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
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
                  className="shrink-0"
                  style={{ color: "#A855F7" }}
                >
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
      </Section>

      {/* ─── CTA – WORK WITH US ──────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={14} />
              Let&apos;s Work Together
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Grow Your Business with AI?
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(229,231,235,0.7)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Whether you&apos;re a Houston-area business looking for a local
              partner or an SMB anywhere in the U.S. ready to scale, Echo5
              Digital is here to help. Start a conversation — no pressure, no
              fluff.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: "#A855F7" }} />
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  hello@echo5digital.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: "#A855F7" }} />
                <a
                  href="tel:7134897004"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  713-489-7004
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} style={{ color: "#A855F7" }} />
                <span
                  className="text-sm"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  Houston &amp; Sugar Land, Texas
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 self-start px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Strategy Call
            </Link>
          </div>

          {/* Right: contact form */}
          <div>
            <ContactForm
              heading="Start the Conversation"
              subheading="Tell us about your business and goals. We'll be in touch within 24 hours."
              submitLabel="Send Message"
              showAppointmentNote
            />
          </div>
        </div>
      </Section>
    </main>
  );
}