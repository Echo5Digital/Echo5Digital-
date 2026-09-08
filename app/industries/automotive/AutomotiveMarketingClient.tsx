"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { BlurIn, TiltCard, CountUp, ParallaxImage } from "@/components/ScrollFX";
import {
  MapPin,
  TrendingUp,
  Search,
  Share2,
  FileText,
  ChevronDown,
  ChevronUp,
  Bot,
  Zap,
  Eye,
  RefreshCw,
  ClipboardList,
  Phone,
  CheckCircle,
  Car,
  Wrench,
  Palette,
  Sparkles,
  Gauge,
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroImageScale = useTransform(heroScroll, [0, 1], [1.05, 1.2]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Search,
      title: "AI-Driven Keyword Research",
      description:
        "We conduct in-depth keyword research using advanced AI tools to identify relevant, profitable terms for automotive businesses, accounting for search patterns, seasonal trends, and location-based demand.",
      badge: "High Impact",
    },
    {
      icon: FileText,
      title: "Content Optimization for Automotive Businesses",
      description:
        "We optimize vehicle listings, service pages, blog posts, and landing pages — focusing on vehicle details and SEO best practices to engage potential customers.",
    },
    {
      icon: Gauge,
      title: "Technical SEO for Automotive Websites",
      description:
        "Site architecture optimization, loading time improvements, mobile responsiveness, and continuous performance monitoring keep your website fast, secure, and mobile-friendly.",
    },
    {
      icon: MapPin,
      title: "Local SEO for Car Dealerships",
      description:
        "Optimization of your Google Business Profile, local citations, and analysis of local search patterns to increase visibility for area-specific searches.",
      badge: "High Impact",
    },
    {
      icon: Share2,
      title: "Social Media Integration for Automotive Brands",
      description:
        "We integrate social media strategy with SEO, using AI to optimize campaigns, analyze audience behavior, and drive targeted traffic via Facebook, Instagram, and YouTube.",
    },
    {
      icon: CheckCircle,
      title: "Building Trust Through Success Stories",
      description:
        "We build trust by integrating social media with SEO and leveraging platforms to showcase success stories and reach potential customers.",
    },
    {
      icon: Palette,
      title: "Automotive Branding and Web Development",
      description:
        "Custom website design and branding services that create visually stunning, user-friendly sites with AI-enhanced experiences for competitive differentiation.",
    },
    {
      icon: TrendingUp,
      title: "Google Ads and PPC Campaigns",
      description:
        "Complementary Google Ads services using AI for real-time optimization, targeting the right audiences, and maximizing ROI on every ad dollar spent.",
      badge: "Fast Results",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Automotive Marketing",
      description:
        "AI-driven solutions including personalized vehicle recommendations, dynamic pricing strategies, and automated lead nurturing to keep buyers engaged.",
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
      numeric: 88,
      label: "of car buyers use the internet for research before making a purchase",
      context: "Source: Autotrader",
    },
    {
      numeric: 75,
      label: "of car buyers said internet research was the most helpful medium when selecting a dealership",
      context: "Source: Digital Air Strike",
    },
    {
      numeric: 76,
      label: "of people who conduct a local search visit a business within a day",
      context: "Source: Google",
    },
    {
      numeric: 20,
      label: "increase in conversion rates from AI-driven personalization",
      context: "Source: McKinsey & Company",
    },
  ];

  const trustBadges = [
    { label: "Google Partner Certified", icon: Search },
    { label: "AI-Powered Campaigns", icon: Bot },
    { label: "Houston & Sugar Land HQ", icon: MapPin },
    { label: "National U.S. Coverage", icon: TrendingUp },
    { label: "Automotive Industry Specialists", icon: Wrench },
    { label: "Multi-Channel Attribution", icon: TrendingUp },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div className="absolute inset-0" style={{ y: heroImageY, scale: heroImageScale }}>
            <img
              src="https://images.pexels.com/photos/22890762/pexels-photo-22890762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
              alt="Modern automotive dealership at night"
              className="w-full h-full object-cover opacity-50"
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.55) 0%, rgba(17,13,46,0.45) 50%, rgba(10,15,30,0.75) 100%)",
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
          <Reveal variant="zoom">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
              }}
            >
              <Car size={14} />
              Automotive SEO Experts
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
              }}
            >
              Automotive SEO &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SEO for Car Dealerships
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(229,231,235,0.72)", fontFamily: "Inter, sans-serif" }}
            >
              Drive sales with tailored SEO strategies for the automotive industry.
              Echo5 Digital specializes in automotive SEO, using industry-specific
              strategies and AI tools to help dealerships and service centers grow.
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.3}>
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
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quick Answer Block ── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <BlurIn>
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
                  The automotive market increasingly relies on digital channels —
                  consumers use search engines to find dealerships, compare prices,
                  read reviews, and book services.{" "}
                  <strong style={{ color: "#fff" }}>SEO improves your site's visibility</strong>,
                  optimizes user experience, and ensures your vehicles and services
                  are easily discoverable. Echo5 Digital serves automotive clients
                  in Houston, Sugar Land, Texas, and nationally across the U.S.
                </p>
              </div>
            </div>
          </div>
        </BlurIn>
      </Section>

      {/* ── Why SEO is Crucial ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <Reveal variant="up" className="text-center max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Why It Matters
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why SEO Is Crucial for Automotive Businesses
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            The automotive market increasingly relies on digital channels.
            Consumers use search engines to find dealerships, compare prices,
            read reviews, and book services. SEO improves site visibility,
            optimizes the user experience, and ensures your products and
            services are easily discoverable.
          </p>
        </Reveal>
      </Section>

      {/* ── Automotive SEO Strategy ── */}
      <Section
        id="services"
        background="gradient"
        spacing="lg"
        maxWidth="2xl"
        withDivider
      >
        <Reveal variant="up" className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Strategy
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Automotive SEO Strategy
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            A tailored, nine-part approach for car dealerships and service
            centers focused on driving traffic, enhancing visibility, and
            generating quality leads.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <TiltCard key={service.title} index={idx} className="h-full">
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                badge={service.badge}
                variant="service"
                className="h-full"
              />
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ── AI Marketing Employee ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
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
                ].map((item, idx) => (
                  <Reveal key={item} variant="up" delay={idx * 0.06}>
                    <div className="flex items-start gap-3">
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
                  </Reveal>
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
          </Reveal>

          <Reveal variant="right" delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]">
              <ParallaxImage
                src="https://images.pexels.com/photos/19870024/pexels-photo-19870024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI-powered marketing dashboard showing automotive campaign analytics"
                className="absolute inset-0 w-full h-full"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,15,30,0.3) 0%, rgba(124,58,237,0.15) 100%)",
                }}
              />
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
                style={{
                  background: "rgba(10,15,30,0.9)",
                  border: "1px solid rgba(124,58,237,0.35)",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.4 }}
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
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <Reveal variant="up" className="text-center mb-14">
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
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} variant="up" delay={index * 0.1}>
              <div
                className="relative flex flex-col rounded-2xl p-6 h-full"
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
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Results / Case Studies ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <Reveal variant="up" className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Industry Studies
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Why Automotive SEO Matters
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
          >
            Industry research consistently shows how car buyers discover and
            choose dealerships and service centers online.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {metrics.map((metric, idx) => (
            <Reveal key={metric.label} variant="zoom" delay={idx * 0.08}>
              <div
                className="rounded-2xl p-6 text-center h-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <CountUp
                  target={metric.numeric}
                  suffix="%"
                  className="block text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
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
            </Reveal>
          ))}
        </div>

        {/* Case Study Highlight */}
        <Reveal variant="up">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ParallaxImage
                  src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Mechanic changing a car tire at an independent auto repair shop"
                  className="absolute inset-0 w-full h-full"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
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
                  Independent Repair Shop, Regional Market
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    color: "rgba(229,231,235,0.65)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  A multi-bay repair shop struggled with near-zero Google Maps
                  visibility and an inconsistent review profile. After
                  onboarding with an AI Marketing Employee program, the shop
                  saw a significant improvement in local search rankings, a
                  higher volume of inbound calls from Google, and a 4.7-star
                  average rating maintained across platforms — all within the
                  first campaign cycle.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Local SEO",
                    "GBP Optimization",
                    "Reputation Mgmt",
                    "Google Ads",
                  ].map((tag, idx) => (
                    <Reveal key={tag} variant="zoom" delay={idx * 0.05} className="inline-block">
                      <span
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
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Trust Bar ── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <Reveal variant="up" className="text-center mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            Why Automotive Businesses Trust Echo5 Digital
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge, idx) => (
            <Reveal key={badge.label} variant="zoom" delay={idx * 0.06}>
              <div
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
            </Reveal>
          ))}
        </div>

        {/* NAP Info */}
        <Reveal variant="up" delay={0.2}>
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
              <Phone size={14} style={{ color: "#7C3AED" }} />
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
        </Reveal>
      </Section>

      {/* ── FAQ Accordion ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <Reveal variant="up" className="text-center mb-12">
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
        </Reveal>

        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <Reveal key={index} variant="up" delay={index * 0.05}>
              <div
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
            </Reveal>
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
          <Reveal variant="left">
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
                ].map((point, idx) => (
                  <Reveal key={point} variant="up" delay={idx * 0.06}>
                    <div className="flex items-center gap-3">
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
                  </Reveal>
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
          </Reveal>

          <Reveal variant="right" delay={0.1}>
            {/* Hidden UTM fields are included inside the form wrapper as data attributes for tracking */}
            <div
              data-utm-source="automotive-page"
              data-utm-medium="organic"
              data-utm-campaign="automotive"
            >
              <ContactForm
                heading="Get in Touch"
                subheading="Tell us about your auto business and we'll build a strategy tailored to your market."
                submitLabel="Get in Touch"
                showAppointmentNote={true}
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}