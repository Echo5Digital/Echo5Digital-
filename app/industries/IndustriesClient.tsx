"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { FocusPullHero, SoftFadeUp, CurtainBadge, LavenderField, MagnetPop } from "@/components/SolutionsFX";
import { BlurIn, TiltCard, CountUp, WordStagger } from "@/components/ScrollFX";
import {
  Stethoscope,
  GraduationCap,
  Scale,
  ShoppingCart,
  Car,
  Landmark,
  Shirt,
  Dumbbell,
  Plane,
  MapPin,
  Clapperboard,
  Factory,
  Brain,
  BarChart3,
  Shield,
  Users,
  Zap,
  TrendingUp,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

const industries = [
  {
    label: "Dental",
    icon: Stethoscope,
    href: "/industries/dental",
    description: "Patient acquisition, local SEO, and reputation management for dental practices.",
    badge: "Healthcare",
  },
  {
    label: "Healthcare",
    icon: Stethoscope,
    href: "/industries/healthcare",
    description: "HIPAA-aware marketing strategies that grow patient volume and trust.",
    badge: "Medical",
  },
  {
    label: "Education SEO",
    icon: GraduationCap,
    href: "/industries/education",
    description: "Enrollment-focused SEO for schools, training providers, and certification programs.",
    badge: "Education",
  },
  {
    label: "Financial Services SEO",
    icon: Landmark,
    href: "/industries/financial-services",
    description: "Compliance-focused SEO that builds trust and drives qualified traffic for banks, advisors, and lenders.",
    badge: "Finance",
  },
  {
    label: "Fashion & Apparel SEO",
    icon: Shirt,
    href: "/industries/fashion",
    description: "AI-driven SEO that elevates fashion brands and drives conversions in a competitive market.",
    badge: "Retail",
  },
  {
    label: "Fitness",
    icon: Dumbbell,
    href: "/industries/fitness",
    description: "Membership growth, class promotions, and social-first campaigns for gyms and studios.",
    badge: "Wellness",
  },
  {
    label: "Travel and Tourism SEO",
    icon: Plane,
    href: "/industries/travel",
    description: "AI-driven SEO that attracts global audiences and turns search interest into bookings.",
    badge: "Travel",
  },
  {
    label: "Real Estate",
    icon: MapPin,
    href: "/industries/real-estate",
    description: "Listing visibility, lead nurturing, and agent branding for real estate professionals.",
    badge: "Property",
  },
  {
    label: "Professional Services",
    icon: Users,
    href: "/industries/professional-services",
    description: "Authority-building content and demand generation for consultants and B2B firms.",
    badge: "B2B",
  },
  {
    label: "eCommerce",
    icon: ShoppingCart,
    href: "/industries/ecommerce",
    description: "Revenue-focused Google Shopping, Meta ads, and SEO for online stores.",
    badge: "Retail",
  },
  {
    label: "Automotive",
    icon: Car,
    href: "/industries/automotive",
    description: "Inventory promotion, local SEO, and conquest campaigns for dealerships and auto shops.",
    badge: "Auto",
  },
  {
    label: "Law Firms",
    icon: Scale,
    href: "/industries/law-firms",
    description: "Compliant, high-ROI marketing for personal injury, family, and criminal defense attorneys.",
    badge: "Legal",
  },
  {
    label: "Entertainment and Media SEO",
    icon: Clapperboard,
    href: "/industries/entertainment-media",
    description: "Audience-focused SEO that boosts discoverability for production companies, media agencies, and content creators.",
    badge: "Media",
  },
  {
    label: "Manufacturing and Industrial SEO",
    icon: Factory,
    href: "/industries/manufacturing-industrial",
    description: "B2B-focused SEO that generates qualified leads and expands market reach for manufacturers and industrial businesses.",
    badge: "Industrial",
  },
];

const whyPoints = [
  {
    icon: Shield,
    title: "Compliance-Aware Campaigns",
    description:
      "Industries like healthcare and legal have strict advertising rules. Our strategies are built with industry regulations in mind, so you grow without risk.",
  },
  {
    icon: TrendingUp,
    title: "Buyer Journey Alignment",
    description:
      "A dental patient has a different decision cycle than a roofing customer. We map your marketing to the exact journey your buyers take.",
  },
  {
    icon: BarChart3,
    title: "Competitive Intelligence",
    description:
      "We analyze your specific competitive landscape — not a generic market — to identify gaps and opportunities unique to your industry.",
  },
  {
    icon: Users,
    title: "Audience Precision",
    description:
      "Generic targeting wastes budget. We build hyper-specific audience profiles based on proven patterns from your industry vertical.",
  },
];

const aiApproachPoints = [
  {
    icon: Brain,
    title: "Agentic AI Growth System",
    description:
      "Our proprietary AI growth engine continuously analyzes campaign data, search trends, and competitor moves to recommend and execute optimizations — faster than any human team alone.",
  },
  {
    icon: Zap,
    title: "Human Oversight Model",
    description:
      "AI drives efficiency; our senior strategists provide context, creativity, and accountability. Every vertical receives a dedicated human who understands its nuances.",
  },
  {
    icon: CheckCircle,
    title: "Vertical-Specific Training Data",
    description:
      "Our AI models are trained on industry-specific performance data — meaning the recommendations for a law firm differ fundamentally from those for a fitness studio.",
  },
  {
    icon: Star,
    title: "Continuous Learning Loop",
    description:
      "Results from every campaign feed back into the system, making our strategies sharper over time. Your marketing gets smarter every month.",
  },
];

function ProcessVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="mt-14 rounded-2xl overflow-hidden relative h-60"
      style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 50px rgba(124,58,237,0.12)" }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src="https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Echo5 Digital's AI-powered marketing automation workflow across industry verticals"
        className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover"
        style={{ y }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: "linear-gradient(to right, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.5) 50%, rgba(10,15,30,0.85) 100%)",
        }}
      >
        <Reveal variant="zoom">
          <div className="text-center px-6">
            <p
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              AI That Learns Your Industry
            </p>
            <p
              className="text-sm max-w-md mx-auto"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
            >
              Our agentic system trains on vertical-specific data — so the intelligence
              powering your campaigns truly understands your market.
            </p>
          </div>
        </Reveal>
      </div>
    </motion.div>
  );
}

const trustSignals: { value: string; label: string; numeric?: number; suffix?: string }[] = [
  { value: "14+", numeric: 14, suffix: "+", label: "Industries Served" },
  { value: "AI-First", label: "Methodology" },
  { value: "Houston & National", label: "Service Coverage" },
  { value: "100%", numeric: 100, suffix: "%", label: "Strategy Customization" },
];

export default function IndustriesClient() {
  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
        className="min-h-screen flex items-center pt-[72px]"
      >
        {/* Ambient glow orbs on top of the photo overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <CurtainBadge className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Zap size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI-Powered Industry Specialists
            </span>
          </CurtainBadge>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#F5F3FF" }}
          >
            <SoftFadeUp text="Marketing Built for" />
            <SoftFadeUp
              text="Your Industry"
              delay={0.35}
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital crafts AI-powered digital marketing strategies tailored to the
            specific buyer journeys, compliance requirements, and competitive realities of
            your industry. No generic playbooks, only precision growth.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } },
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
            >
              <Link
                href="#industries-grid"
                className="inline-block px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-200 hover:brightness-110 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explore Industries
              </Link>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
            >
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 hover:scale-105 backdrop-blur-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Book a Strategy Call
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            aria-hidden="true"
            className="mt-20 w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-white/80"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </FocusPullHero>

      {/* ── Quick Answer Block ── */}
      <Section
        background="transparent"
        spacing="md"
        withDivider
        id="quick-answer"
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="a" />
        <BlurIn className="relative z-10">
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(124,58,237,0.15)",
              boxShadow: "0 12px 40px rgba(91,63,163,0.1)",
            }}
          >
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(107,78,240,0.16), rgba(168,85,247,0.08))",
                  border: "1px solid rgba(107,78,240,0.25)",
                }}
              >
                <Zap size={22} style={{ color: "#6B4EF0" }} />
              </div>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                What Industries Does Echo5 Digital Serve?
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}
              >
                Echo5 Digital is an AI-powered digital marketing agency that serves small and
                mid-sized businesses across a wide range of industries, including{" "}
                <strong style={{ color: "#15172B" }}>
                  dental, healthcare, home services, roofing, construction, fitness, aesthetics,
                  real estate, professional services, eCommerce, automotive, and law firms
                </strong>
                . Each industry receives a customized marketing strategy built on AI-driven SEO,
                paid ads, content, and web development. The agency serves clients in{" "}
                <strong style={{ color: "#15172B" }}>Houston, Sugar Land, Texas</strong> and nationally
                across the U.S.
              </p>
            </div>
          </div>
        </BlurIn>
      </Section>

      {/* ── Industries Grid ── */}
      <Section background="default" spacing="lg" id="industries-grid">
        <Reveal variant="up" className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            14 Verticals & Growing
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Industries We Serve
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            Select your industry below to explore customized AI marketing strategies built
            specifically for your vertical's buyer behavior and competitive landscape.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <TiltCard key={industry.label} index={idx} className="h-full">
                <Link
                  href={industry.href}
                  className="group relative flex flex-col h-full p-6 rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.22)",
                    backdropFilter: "blur(12px)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 8px 40px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(168,85,247,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(124,58,237,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(124,58,237,0.22)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                >
                  {/* Top gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)",
                    }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(168,85,247,0.15))",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      <Icon size={22} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(124,58,237,0.15)",
                        border: "1px solid rgba(168,85,247,0.25)",
                        color: "#A855F7",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {industry.badge}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-200 group-hover:text-purple-300"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {industry.label}
                  </h3>

                  <p
                    className="text-sm leading-relaxed flex-1 mb-4"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(229,231,235,0.58)",
                    }}
                  >
                    {industry.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 group-hover:text-white"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    Learn More <ArrowRight size={15} />
                  </span>
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </Section>

      {/* ── Why Industry-Specific Marketing Matters ── */}
      <Section
        background="transparent"
        spacing="lg"
        withDivider
        id="why-industry-specific"
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="b" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-0 items-center">
          {/* Text side — intro (badge, heading, paragraph) */}
          <div className="order-1 lg:order-1 lg:col-start-2 lg:row-start-1">
            <BlurIn>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
                style={{
                  background: "rgba(107,78,240,0.1)",
                  border: "1px solid rgba(107,78,240,0.3)",
                  color: "#6B4EF0",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Why It Matters
              </span>
            </BlurIn>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              <WordStagger text="Why Industry-Specific Marketing" />{" "}
              <WordStagger
                text="Outperforms Generic Campaigns"
                delay={0.2}
                wordClassName="bg-clip-text text-transparent bg-[linear-gradient(135deg,#7C3AED,#A855F7)]"
              />
            </h2>
            <BlurIn delay={0.15}>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}
              >
                Generic digital marketing campaigns treat all businesses as if they operate in
                a vacuum. In reality, every industry has its own language, trust signals,
                regulatory guardrails, and conversion triggers. Applying a one-size-fits-all
                approach guarantees mediocre results at best — and wasted budget at worst.
              </p>
            </BlurIn>
          </div>

          {/* Image side — mobile/tablet: single image, sits under the paragraph */}
          <Reveal variant="right" delay={0.1} className="order-2 lg:hidden">
            <TiltCard className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-30 blur-2xl"
                style={{
                  background: "radial-gradient(circle, rgba(107,78,240,0.35) 0%, transparent 70%)",
                  transform: "scale(0.85)",
                }}
              />
              <motion.div
                className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                style={{
                  border: "1px solid rgba(124,58,237,0.2)",
                  boxShadow: "0 12px 40px rgba(91,63,163,0.15)",
                  background: "#F1EDFB",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="/focused-businessman-showing-corporate-graphs-presentation-using-tablet-working-company-ideas-100kb.jpg"
                  alt="Marketing strategist reviewing industry-tailored campaign performance data"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-5 -left-5 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  boxShadow: "0 12px 32px rgba(91,63,163,0.2)",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.4 }}
              >
                <CountUp
                  target={14}
                  suffix="+"
                  className="block text-2xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
                <p
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}
                >
                  Industry Verticals
                </p>
              </motion.div>
            </TiltCard>
          </Reveal>

          {/* Checklist cards — sits after the image on mobile, alongside the intro on desktop */}
          <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 flex flex-col gap-3">
            {whyPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <MagnetPop key={point.title} index={idx}>
                  <div
                    className="flex gap-4 items-start p-4 rounded-xl transition-colors duration-200 hover:bg-[rgba(139,92,246,0.14)]"
                    style={{
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(124,58,237,0.15)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(107,78,240,0.16), rgba(168,85,247,0.08))",
                        border: "1px solid rgba(107,78,240,0.25)",
                      }}
                    >
                      <Icon size={18} style={{ color: "#6B4EF0" }} />
                    </div>
                    <div>
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#5B5F73",
                        }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                </MagnetPop>
              );
            })}
          </div>

          {/* Image side — desktop/laptop: staggered 3-image stack */}
          <div className="hidden lg:block relative h-[620px] lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl opacity-30 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(107,78,240,0.3) 0%, transparent 70%)",
                transform: "scale(0.85)",
              }}
            />

            {/* Image 1 — top right */}
            <Reveal variant="right" delay={0.1} className="absolute top-0 right-0 w-[72%] z-30">
              <TiltCard className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "0 16px 40px rgba(91,63,163,0.2)",
                    background: "#F1EDFB",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/focused-businessman-showing-corporate-graphs-presentation-using-tablet-working-company-ideas-100kb.jpg"
                    alt="Marketing strategist reviewing industry-tailored campaign performance data"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -left-5 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 12px 32px rgba(91,63,163,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.4 }}
                >
                  <CountUp
                    target={14}
                    suffix="+"
                    className="block text-2xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}
                  >
                    Industry Verticals
                  </p>
                </motion.div>
              </TiltCard>
            </Reveal>

            {/* Image 2 — beneath, offset left */}
            <Reveal variant="up" delay={0.25} className="absolute top-[220px] left-0 w-[62%] z-20">
              <TiltCard className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "0 14px 36px rgba(91,63,163,0.18)",
                    background: "#F1EDFB",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/team-reviewing-marketing-strategies-digital-screen-100kb.jpg"
                    alt="Marketing team reviewing industry-specific campaign strategies on a digital screen"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 p-3.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 10px 28px rgba(91,63,163,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.55 }}
                >
                  <CountUp
                    target={100}
                    suffix="+"
                    className="block text-xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}
                  >
                    SMBs Served
                  </p>
                </motion.div>
              </TiltCard>
            </Reveal>

            {/* Image 3 — bottom right, beneath image 1 */}
            <Reveal variant="up" delay={0.4} className="absolute bottom-0 right-[6%] w-[54%] z-10">
              <TiltCard className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl w-full aspect-[3/2] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "0 12px 32px rgba(91,63,163,0.16)",
                    background: "#F1EDFB",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/people-office-analyzing-checking-finance-graphs-100kb.jpg"
                    alt="Office team analyzing finance and performance graphs"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 p-3.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    boxShadow: "0 10px 28px rgba(91,63,163,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.7 }}
                >
                  <p
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    24/7
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}
                  >
                    AI Monitoring
                  </p>
                </motion.div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── Our AI-Powered Approach ── */}
      <Section background="gradient" spacing="lg" id="ai-approach">
        <Reveal variant="up" className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Our Methodology
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Our AI-Powered Approach{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Across Every Industry
            </span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            Echo5 Digital's agentic AI growth system adapts intelligently to the unique
            demands of each vertical — powered by machine learning and guided by human expertise.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiApproachPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <TiltCard key={point.title} index={idx} className="h-full">
                <div
                  className="flex flex-col h-full p-6 rounded-2xl relative"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.22)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)",
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Icon size={22} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-xs font-semibold mb-2"
                    style={{ color: "rgba(168,85,247,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-base font-bold mb-3"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(229,231,235,0.6)",
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Process visual */}
        <ProcessVisual />
      </Section>

      {/* ── Local Relevance ── */}
      <Section
        background="transparent"
        spacing="md"
        withDivider
        id="local-relevance"
        className="relative !bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FD_45%,#EEECFB_100%)]"
      >
        <LavenderField variant="c" />
        <Reveal variant="zoom" className="relative z-10">
          <div
            className="rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(124,58,237,0.15)",
              boxShadow: "0 12px 40px rgba(91,63,163,0.1)",
            }}
          >
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(107,78,240,0.16), rgba(168,85,247,0.08))",
                  border: "1px solid rgba(107,78,240,0.25)",
                }}
              >
                <MapPin size={28} style={{ color: "#6B4EF0" }} />
              </div>
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                Serving Houston &amp; Sugar Land, Texas
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ fontFamily: "Inter, sans-serif", color: "#5B5F73" }}
              >
                Houston and Sugar Land, Texas are home to a diverse business ecosystem spanning
                healthcare, home services, legal, real estate, and more. Echo5 Digital's
                industry-specific marketing programs are designed to help local businesses in
                these verticals compete effectively in their local markets and beyond.
              </p>
              <div className="flex flex-wrap gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#6B4EF0" }}>📍</span>
                  {/* NAP - verified facts only */}
                  <span style={{ color: "#5B5F73" }}>Houston / Sugar Land, Texas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#6B4EF0" }}>📞</span>
                  <a
                    href="tel:7134897004"
                    style={{ color: "#5B5F73" }}
                    className="hover:text-[#15172B] transition-colors"
                  >
                    713-489-7004
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#6B4EF0" }}>✉️</span>
                  <a
                    href="mailto:hello@echo5digital.com"
                    style={{ color: "#5B5F73" }}
                    className="hover:text-[#15172B] transition-colors"
                  >
                    hello@echo5digital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Trust Bar ── */}
      <Section background="default" spacing="md" id="trust-bar">
        <Reveal variant="up" className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Built for Cross-Industry Excellence
          </h2>
          <p
            className="text-sm mt-2 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.55)" }}
          >
            Our AI-first methodology and deep vertical expertise make us the growth partner
            businesses trust across every major industry.
          </p>
        </Reveal>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {trustSignals.map((signal, idx) => (
            <Reveal key={signal.label} variant="zoom" delay={idx * 0.08}>
              <div
                className="flex flex-col items-center justify-center p-6 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.22)",
                }}
              >
                {signal.numeric !== undefined ? (
                  <CountUp
                    target={signal.numeric}
                    suffix={signal.suffix ?? ""}
                    className="block text-3xl sm:text-4xl font-bold mb-2"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                ) : (
                  <span
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {signal.value}
                  </span>
                )}
                <span
                  className="text-xs uppercase tracking-wider"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.55)" }}
                >
                  {signal.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Credibility pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "AI-Driven SEO",
            "Paid Media Management",
            "Compliance-Aware Campaigns",
            "Custom Web Development",
            "CRM & Automation",
            "Content Marketing",
            "Local SEO",
            "Reputation Management",
          ].map((pill, idx) => (
            <Reveal key={pill} variant="up" delay={idx * 0.04}>
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.28)",
                  color: "#C4B5FD",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <CheckCircle size={12} style={{ color: "#A855F7" }} />
                {pill}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── CTA Section ── */}
      <Section background="transparent" spacing="xl" maxWidth="3xl" id="cta" withDivider className="!bg-[#EEECFB]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="flex-1 lg:pt-6">
            <BlurIn>
              <div
                className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-5"
                style={{ color: "#6B4EF0" }}
              >
                Ready to Grow?
              </div>
            </BlurIn>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              <WordStagger text="Let's Build Your" />
              <br />
              <WordStagger
                text="Industry-Specific Growth Engine"
                delay={0.2}
                wordClassName="bg-clip-text text-transparent bg-[linear-gradient(135deg,#7C3AED,#A855F7)]"
              />
            </h2>
            <BlurIn delay={0.15}>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73" }}>
                Select your industry below or reach out directly. Our team will craft a
                tailored AI marketing strategy built around your specific vertical, goals, and market.
              </p>
            </BlurIn>

            <div className="space-y-4 mb-8">
              {[
                "Tailored strategy for your specific vertical",
                "No contracts, cancel anytime",
                "Results-focused — we win when you win",
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#15172B" }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* NAP */}
            <div className="space-y-2 text-sm mb-10">
              <p style={{ color: "#5B5F73" }}>Or reach us directly:</p>
              {/* Verified phone */}
              <a href="tel:7134897004" className="block" style={{ color: "#4F32D9" }}>
                📞 713-489-7004
              </a>
              <a href="mailto:hello@echo5digital.com" className="block" style={{ color: "#4F32D9" }}>
                ✉️ hello@echo5digital.com
              </a>
            </div>

            {/* Browse by Industry */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(124,58,237,0.15)",
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                Browse by Industry
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#5B5F73" }}>
                Explore tailored marketing programs built for your specific vertical.
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, idx) => (
                  <Reveal key={ind.label} variant="zoom" delay={idx * 0.02} className="inline-block">
                    <Link
                      href={ind.href}
                      className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:brightness-110"
                      style={{
                        background: "rgba(107,78,240,0.12)",
                        border: "1px solid rgba(107,78,240,0.3)",
                        color: "#6B4EF0",
                        fontFamily: "Inter, sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      {ind.label}
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Prefer to Talk */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(107,78,240,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                Prefer to Talk?
              </h3>
              <p className="text-sm mb-5" style={{ color: "#5B5F73" }}>
                Book a free 30-minute strategy call with our team. We&apos;ll review your
                industry, goals, and current marketing to identify the highest-leverage
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.35)",
                    fontFamily: "Inter, sans-serif",
                    textDecoration: "none",
                  }}
                >
                  Book a Free Strategy Call <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:7134897004"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white active:scale-95"
                  style={{
                    border: "1px solid rgba(124,58,237,0.3)",
                    color: "#15172B",
                    fontFamily: "Inter, sans-serif",
                    textDecoration: "none",
                  }}
                >
                  {/* Verified phone number */}
                  Call 713-489-7004
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full lg:sticky lg:top-24">
            <ContactForm
              heading="Tell Us About Your Business"
              subheading="Share your industry and goals — we'll build a custom AI marketing strategy tailored for you."
              submitLabel="Get My Custom Strategy"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}