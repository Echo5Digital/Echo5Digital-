"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { FocusPullHero, PrismReveal, LavenderField, MagnetPop } from "@/components/SolutionsFX";
import { DiagonalWipe, BlurIn } from "@/components/ScrollFX";
import {
  Target,
  Users,
  Zap,
  BarChart3,
  RefreshCw,
  Eye,
  Cpu,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Megaphone,
  ShoppingBag,
  Stethoscope,
  Home,
  Utensils,
  GraduationCap,
  Dumbbell,
  Car,
  MapPin,
  Phone,
  Mail,
  Globe,
  Layers,
  PenTool,
  FlaskConical,
  RotateCcw,
  FileText,
  BrainCircuit,
  Search,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function MetaAdsClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const audienceVisualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: audienceScroll } = useScroll({
    target: audienceVisualRef,
    offset: ["start end", "end start"],
  });
  const audienceImageY = useSpring(useTransform(audienceScroll, [0, 1], [-36, 36]), {
    stiffness: 90,
    damping: 20,
  });
  const audienceRotate = useSpring(useTransform(audienceScroll, [0, 0.5, 1], [-2, 0, 2]), {
    stiffness: 90,
    damping: 20,
  });
  const chipScale = useTransform(audienceScroll, [0.15, 0.4], [0.85, 1]);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeRelatedRow, setActiveRelatedRow] = useState<number | null>(null);
  const pulseRelatedRow = (index: number) => {
    setActiveRelatedRow(index);
    window.setTimeout(() => {
      setActiveRelatedRow((current) => (current === index ? null : current));
    }, 900);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
        className="min-h-screen flex items-center pt-[72px]"
      >
        {/* Ambient glow orb on top of the photo overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Cpu size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI-Powered Paid Social Advertising
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#E5E7EB" }}
          >
            <PrismReveal text="Meta Ads That Convert" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="on Facebook & Instagram" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital combines agentic AI with human-led creative strategy to deliver
            precision-targeted Meta Ads campaigns that grow your business — without wasting your
            budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#lead-form"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Demo
            </a>
            <a
              href="#how-it-works"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See How It Works →
            </a>
          </div>

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

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="transparent" spacing="md" maxWidth="xl" withDivider className="!bg-white">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "#EEECFB",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Zap size={20} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
              >
                Meta Ads management encompasses the strategy, creation, targeting, optimization, and
                reporting of paid advertising campaigns on Facebook and Instagram. Echo5 Digital
                provides AI-assisted Meta Ads management for small and mid-sized businesses in Houston,
                Sugar Land, Texas, and nationally across the U.S. Services include audience research,
                ad creative direction, A/B testing, pixel tracking, retargeting, and performance
                reporting. The agency uses an agentic AI system combined with human strategic oversight
                to improve targeting precision and return on ad spend.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm" maxWidth="2xl" withDivider>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { icon: <Cpu size={18} />, label: "AI-Powered Paid Social" },
            { icon: <Globe size={18} />, label: "Facebook & Instagram Coverage" },
            { icon: <Target size={18} />, label: "Precision Audience Targeting" },
            { icon: <BarChart3 size={18} />, label: "Full Funnel Reporting" },
            { icon: <MapPin size={18} />, label: "Houston, TX & Nationwide" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span style={{ color: "#A855F7" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS META ADS MANAGEMENT ── */}
      <Section background="transparent" spacing="lg" maxWidth="xl" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="a" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <DiagonalWipe>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              What Is Meta Ads Management?
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
            >
              Paid Social That Reaches the Right People
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Meta Ads are paid advertisements delivered across Facebook and Instagram — two of the
                world's most powerful social platforms with billions of active users. Through Meta's
                advanced advertising system, businesses can place targeted ads in feeds, stories,
                reels, and the audience network.
              </p>
              <p>
                What sets Meta Ads apart is their unmatched targeting capability. You can reach people
                based on demographics, interests, behaviors, lookalike audiences, and custom audiences
                built from your own customer data — making it possible to put your message in front of
                exactly the right person at the right moment.
              </p>
              <p>
                Professional Meta Ads management is critical because the platform's complexity — from
                campaign architecture and creative strategy to pixel configuration and bid optimization
                — can quickly lead to wasted spend without expert oversight. Echo5 Digital brings
                both AI-powered efficiency and human strategic judgment to ensure every dollar works
                harder.
              </p>
            </div>
          </DiagonalWipe>

          {/* Angled image panel with a clean stat row beneath */}
          <BlurIn delay={0.15}>
            <div ref={audienceVisualRef} className="relative mx-auto w-full max-w-md" style={{ perspective: 1000 }}>
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
              />
              <motion.div
                className="relative overflow-hidden"
                style={{
                  height: "340px",
                  border: "1px solid rgba(124,58,237,0.15)",
                  boxShadow: "0 25px 60px -15px rgba(91,63,163,0.4)",
                  clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
                  rotate: audienceRotate,
                }}
              >
                <motion.img
                  src="/user-people-network-circuit-board-link-connection-technology-100kb.jpg"
                  alt="Network of connected audience profiles representing Meta Ads targeting"
                  className="w-full object-cover"
                  style={{ height: "calc(100% + 72px)", marginTop: -36, y: audienceImageY }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 55%, rgba(21,23,43,0.55) 100%)" }}
                />
              </motion.div>

              {/* Verified-reach chip, pinned neatly to one corner */}
              <motion.div
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 8px 20px -6px rgba(91,63,163,0.35)",
                  scale: chipScale,
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#7C3AED" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#7C3AED" }} />
                </span>
                <span className="text-xs font-semibold" style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}>
                  Live audience targeting
                </span>
              </motion.div>

              {/* Clean stat row beneath the image */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { icon: <Users size={16} />, value: "3B+", label: "Users on Meta" },
                  { icon: <Target size={16} />, value: "100+", label: "Targeting signals" },
                  { icon: <RefreshCw size={16} />, value: "24/7", label: "AI optimization" },
                ].map((stat, i) => (
                  <MagnetPop key={stat.label} index={i}>
                    <div
                      className="rounded-xl p-3 text-center"
                      style={{ background: "#EEECFB" }}
                    >
                      <span className="inline-flex items-center justify-center mb-1" style={{ color: "#7C3AED" }}>
                        {stat.icon}
                      </span>
                      <p className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}>
                        {stat.value}
                      </p>
                      <p className="text-[11px] leading-tight" style={{ color: "#6B4EF0" }}>
                        {stat.label}
                      </p>
                    </div>
                  </MagnetPop>
                ))}
              </div>
            </div>
          </BlurIn>
        </div>
      </Section>

      {/* ── META ADS SERVICES BREAKDOWN ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            What's Included
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Full-Service Meta Ads Management
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-base"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            From campaign strategy to performance reporting, we handle every layer of your paid
            social presence on Facebook and Instagram.
          </p>
        </div>

        {(() => {
          const services = [
            {
              icon: Target,
              title: "Campaign Strategy",
              description:
                "Custom campaign architecture aligned to your business goals — awareness, lead gen, retargeting, or ecommerce conversions.",
            },
            {
              icon: Users,
              title: "Audience Research & Segmentation",
              description:
                "Deep audience profiling using interest targeting, custom audiences, lookalikes, and behavioral data to reach your ideal customers.",
            },
            {
              icon: PenTool,
              title: "Creative Direction & Ad Copywriting",
              description:
                "Compelling ad creatives and copy crafted to stop the scroll, communicate value, and drive action across all Meta placements.",
            },
            {
              icon: FlaskConical,
              title: "A/B Testing",
              description:
                "Systematic split testing of audiences, creatives, headlines, and CTAs to continuously surface the highest-performing combinations.",
            },
            {
              icon: Eye,
              title: "Pixel Setup & Conversion Tracking",
              description:
                "Full Meta Pixel installation, event configuration, and Conversions API integration to accurately attribute results and optimize campaigns.",
            },
            {
              icon: RotateCcw,
              title: "Retargeting Campaigns",
              description:
                "Re-engage website visitors, video viewers, and social engagers with tailored retargeting sequences designed to convert warm audiences.",
            },
            {
              icon: BarChart3,
              title: "Performance Reporting",
              description:
                "Clear, actionable monthly reports covering reach, engagement, cost-per-result, ROAS, and strategic recommendations for the next cycle.",
            },
            {
              icon: Layers,
              title: "Full-Funnel Campaign Management",
              description:
                "Coordinated campaigns spanning awareness, consideration, and conversion stages to move audiences through your entire marketing funnel.",
            },
          ];

          return (
            <div className="flex flex-col divide-y" style={{ borderColor: "rgba(124,58,237,0.15)" }}>
              {services.map((service, i) => {
                const isActive = activeService === i;
                const Icon = service.icon;
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(i)}
                    onMouseEnter={() => setActiveService(i)}
                    className="group text-left w-full py-5 sm:py-6 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-5 sm:gap-8">
                      <span
                        className="flex-shrink-0 text-xl sm:text-2xl font-black transition-colors duration-300"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          color: isActive ? "#A855F7" : "rgba(229,231,235,0.25)",
                          width: "2ch",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div
                        className="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all duration-300"
                        style={{
                          background: isActive
                            ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                            : "rgba(124,58,237,0.1)",
                          boxShadow: isActive ? "0 8px 20px -6px rgba(124,58,237,0.5)" : "none",
                        }}
                      >
                        <Icon size={20} color={isActive ? "#fff" : "#A855F7"} />
                      </div>

                      <h3
                        className="flex-1 text-lg sm:text-xl font-bold transition-colors duration-300"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          color: isActive ? "#fff" : "#E5E7EB",
                        }}
                      >
                        {service.title}
                      </h3>

                      <ArrowRight
                        size={20}
                        className="flex-shrink-0 hidden sm:block transition-transform duration-300"
                        style={{
                          color: "#A855F7",
                          transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                        }}
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p
                            className="text-sm sm:text-base leading-relaxed pt-3 sm:pt-4 pl-[3.75rem] sm:pl-[6.25rem] pr-4 sm:pr-12"
                            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                          >
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          );
        })()}
      </Section>

      {/* ── AI-POWERED AUDIENCE AND CREATIVE OPTIMIZATION ── */}
      <Section background="transparent" spacing="lg" maxWidth="xl" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="b" />
        <div className="relative z-10">
          <DiagonalWipe className="max-w-3xl mx-auto text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#6B4EF0",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <BrainCircuit size={14} />
              Agentic AI + Human Strategy
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
            >
              AI-Powered Audience &amp; Creative Optimization
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Echo5 Digital's agentic AI continuously monitors your Meta Ads campaigns — analyzing
              audience performance signals, detecting creative fatigue, and automating A/B testing
              cycles, while human strategists maintain creative direction and overall campaign strategy.
            </p>
          </DiagonalWipe>

          {/* Full-bleed dark spotlight panel with a live AI scan overlay */}
          <BlurIn delay={0.1}>
            <div className="relative">
              {/* Mobile: badge pinned straddling the panel's top-right corner */}
              <div
                aria-hidden="true"
                className="absolute z-20 -right-3 -top-6 sm:hidden"
              >
                <motion.span
                  className="absolute rounded-full"
                  style={{ width: 72, height: 72, left: "50%", top: "50%", marginLeft: -36, marginTop: -36, border: "1px solid rgba(168,85,247,0.6)" }}
                  animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute rounded-full"
                  style={{ width: 72, height: 72, left: "50%", top: "50%", marginLeft: -36, marginTop: -36, border: "1px solid rgba(168,85,247,0.6)" }}
                  animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
                />
                <div
                  className="relative w-[72px] h-[72px] rounded-full overflow-hidden"
                  style={{ border: "3px solid #fff", boxShadow: "0 0 36px rgba(124,58,237,0.75)" }}
                >
                  <img
                    src="https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                    alt="Facebook and Instagram apps representing Meta Ads platforms being monitored"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Desktop: larger badge, vertically centered on the panel's right side */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute z-20 right-[10%] top-1/2 -translate-y-1/2"
              >
                <motion.span
                  className="absolute rounded-full"
                  style={{ width: 90, height: 90, left: "50%", top: "50%", marginLeft: -45, marginTop: -45, border: "1px solid rgba(168,85,247,0.6)" }}
                  animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute rounded-full"
                  style={{ width: 90, height: 90, left: "50%", top: "50%", marginLeft: -45, marginTop: -45, border: "1px solid rgba(168,85,247,0.6)" }}
                  animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
                />
                <div
                  className="relative w-[90px] h-[90px] rounded-full overflow-hidden"
                  style={{ border: "2px solid rgba(255,255,255,0.85)", boxShadow: "0 0 40px rgba(124,58,237,0.7)" }}
                >
                  <img
                    src="https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                    alt="Facebook and Instagram apps representing Meta Ads platforms being monitored"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="relative rounded-[2rem] overflow-hidden"
                style={{ minHeight: "460px", boxShadow: "0 40px 90px -25px rgba(21,23,43,0.5)" }}
              >
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600"
                  alt="AI system analyzing a network of audience data points for Meta Ads targeting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(115deg, rgba(10,8,26,0.92) 0%, rgba(21,15,46,0.75) 45%, rgba(10,8,26,0.55) 100%)" }}
                />

              {/* Content overlaid on the panel */}
              <div className="relative z-10 flex flex-col h-full p-8 sm:p-10 md:p-12" style={{ minHeight: "460px" }}>
                <div className="max-w-lg mb-10 pr-20 sm:pr-28">
                  <p
                    className="text-sm font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#C4B5FD", fontFamily: "Inter, sans-serif" }}
                  >
                    Always watching, always tuning
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}>
                    The AI identifies which audience segments are responding, flags underperforming ad
                    sets for review, and recommends budget reallocation in real time.
                  </p>
                </div>

                <div className="mt-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                  {[
                    { icon: <Users size={18} />, title: "Audience Scoring", desc: "Signal monitoring" },
                    { icon: <RefreshCw size={18} />, title: "Fatigue Detection", desc: "Rotation triggers" },
                    { icon: <FlaskConical size={18} />, title: "A/B Automation", desc: "Test cycle AI" },
                    { icon: <CheckCircle size={18} />, title: "Human Oversight", desc: "Strategy & budget" },
                  ].map((item, i) => (
                    <MagnetPop key={item.title} index={i} className="h-full">
                      <div
                        className="h-full flex flex-col p-4 rounded-2xl"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                      >
                        <span style={{ color: "#C4B5FD" }}>{item.icon}</span>
                        <p className="text-sm font-bold mt-2 leading-snug" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#fff" }}>
                          {item.title}
                        </p>
                        <p className="text-xs mt-auto pt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </MagnetPop>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </BlurIn>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      {(() => {
        const processSteps = [
          {
            icon: <Search size={20} />,
            title: "Audience Strategy",
            desc: "We research your ideal customer profiles, analyze competitors, and build a targeting framework across demographics, interests, and custom audiences.",
            image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          {
            icon: <PenTool size={20} />,
            title: "Creative Development",
            desc: "Our team crafts ad copy, creative briefs, and visual direction tailored to each campaign objective and audience segment.",
            image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          {
            icon: <Megaphone size={20} />,
            title: "Campaign Launch",
            desc: "Campaigns go live with pixel tracking, conversion events, and full Meta Ads Manager configuration in place from day one.",
            image: "https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          {
            icon: <FlaskConical size={20} />,
            title: "Testing & Optimization",
            desc: "AI-assisted A/B testing cycles run continuously, with underperforming elements paused and winning combinations scaled.",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          {
            icon: <FileText size={20} />,
            title: "Monthly Reporting",
            desc: "You receive clear performance reports with ROAS, CPR, audience insights, and strategic recommendations for the next period.",
            image: "https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
        ];

        return (
          <Section id="how-it-works" background="transparent" spacing="lg" maxWidth="xl" withDivider className="relative !bg-white overflow-hidden">
            <LavenderField variant="c" />
            <div className="relative z-10">
              <DiagonalWipe className="text-center mb-12">
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                >
                  Our Process
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
                >
                  How We Launch &amp; Optimize Your Meta Ads
                </h2>
              </DiagonalWipe>

              <BlurIn delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch">
                  {/* Left: click-to-expand step list */}
                  <div className="flex flex-col gap-3">
                    {processSteps.map((step, i) => {
                      const isActive = activeStep === i;
                      return (
                        <button
                          key={step.title}
                          onClick={() => setActiveStep(i)}
                          className="text-left rounded-2xl transition-all duration-300 overflow-hidden"
                          style={{
                            background: isActive ? "#EEECFB" : "transparent",
                            border: isActive ? "1px solid rgba(124,58,237,0.25)" : "1px solid transparent",
                          }}
                        >
                          <div className="flex items-center gap-4 p-4 sm:p-5">
                            <div
                              className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl font-bold transition-all duration-300"
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                background: isActive
                                  ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                                  : "#F5F3FE",
                                color: isActive ? "#fff" : "#7C3AED",
                                boxShadow: isActive ? "0 8px 20px -6px rgba(124,58,237,0.5)" : "none",
                              }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3
                              className="flex-1 text-base sm:text-lg font-semibold"
                              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                            >
                              {step.title}
                            </h3>
                            <span style={{ color: isActive ? "#7C3AED" : "#B9B2E0" }}>
                              {step.icon}
                            </span>
                          </div>
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <p
                                  className="text-sm leading-relaxed px-4 sm:px-5 pb-5 pl-[3.75rem] sm:pl-[4.25rem]"
                                  style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                                >
                                  {step.desc}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right: matching photo for the active step */}
                  <div className="relative min-h-[280px] lg:min-h-0 rounded-[2rem] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeStep}
                        src={processSteps[activeStep].image}
                        alt={`Visual representing the ${processSteps[activeStep].title} step`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </AnimatePresence>
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, transparent 50%, rgba(21,23,43,0.75) 100%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(6px)" }}
                      >
                        Step {String(activeStep + 1).padStart(2, "0")} of {String(processSteps.length).padStart(2, "0")}
                      </div>
                      <p
                        className="text-xl sm:text-2xl font-bold mt-3"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#fff" }}
                      >
                        {processSteps[activeStep].title}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurIn>
            </div>
          </Section>
        );
      })()}

      {/* ── INDUSTRIES ── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Industry Expertise
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Industries We Run Meta Ads For
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-base"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            We bring vertical-specific audience knowledge and creative strategy to every industry we
            serve.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { icon: <ShoppingBag size={22} />, label: "E-Commerce & Retail", href: "/industries" },
            { icon: <Stethoscope size={22} />, label: "Healthcare & Wellness", href: "/industries" },
            { icon: <Home size={22} />, label: "Real Estate", href: "/industries" },
            { icon: <Utensils size={22} />, label: "Restaurants & Food", href: "/industries" },
            { icon: <GraduationCap size={22} />, label: "Education & Coaching", href: "/industries" },
            { icon: <Dumbbell size={22} />, label: "Fitness & Beauty", href: "/industries" },
            { icon: <Car size={22} />, label: "Automotive", href: "/industries" },
            { icon: <TrendingUp size={22} />, label: "Professional Services", href: "/industries" },
          ].map((industry, i) => (
            <Link
              key={i}
              href={industry.href}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl transition-all duration-200 group"
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.2)",
                color: "#E5E7EB",
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div style={{ color: "#A855F7" }}>{industry.icon}</div>
              <span className="text-sm font-medium" style={{ color: "#E5E7EB" }}>
                {industry.label}
              </span>
              <ArrowRight size={14} style={{ color: "#A855F7" }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </Section>

      {/* ── INTERNAL LINKS TO RELATED SERVICES ── */}
      <Section background="transparent" spacing="lg" maxWidth="xl" withDivider className="relative !bg-white overflow-hidden">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-1/4 right-0 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B4EF0", fontFamily: "Space Grotesk, sans-serif" }}>
            Related Services
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
          >
            Pair Meta Ads With Our Full Digital Stack
          </h2>
        </div>

        <div className="relative z-10">
          {[
            {
              href: "/services/google-ads",
              title: "Google Ads",
              desc: "Capture high-intent search traffic alongside your Meta social campaigns for full-funnel paid media coverage.",
              image: "https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              href: "/services/social-media-marketing",
              title: "Social Media Marketing",
              desc: "Complement paid Meta Ads with organic social strategy to build community and sustain long-term brand awareness.",
              image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              href: "/services/content-marketing",
              title: "Content Marketing",
              desc: "Fuel your Meta Ads with high-quality content that educates, attracts, and converts your target audience.",
              image: "https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
              href: "/ai-marketing-employee",
              title: "AI Marketing Employee",
              desc: "Our agentic AI marketing system works alongside your team to automate tasks, optimize campaigns, and accelerate growth.",
              image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
          ].map((link, idx) => (
            <DiagonalWipe
              key={link.title}
              delay={idx * 0.12}
              className="border-t border-[rgba(124,58,237,0.15)] last:border-b"
            >
              <Link
                href={link.href}
                className="group flex items-center gap-4 sm:gap-6 md:gap-10 py-6 md:py-8"
                onTouchStart={() => pulseRelatedRow(idx)}
              >
                <BlurIn delay={idx * 0.12 + 0.1} className="flex-shrink-0">
                  <div
                    className={`relative w-20 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 ${
                      activeRelatedRow === idx ? "-translate-y-2" : ""
                    }`}
                    style={{ boxShadow: "0 12px 32px rgba(91,63,163,0.25)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <img
                      src={link.image}
                      alt={`Team reviewing ${link.title} performance data`}
                      className="w-full h-full object-cover"
                    />
                    {/* Diagonal light sweep on hover (desktop) / tap (mobile) */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none ${
                        activeRelatedRow === idx ? "translate-x-full" : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
                      }}
                    />
                  </div>
                </BlurIn>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`font-bold tracking-tight transition-colors duration-300 group-hover:text-transparent ${
                        activeRelatedRow === idx ? "text-transparent" : ""
                      }`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                        color: "#15172B",
                        backgroundImage: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      {link.title}
                    </h3>
                    <span
                      className={`hidden md:flex flex-shrink-0 items-center gap-2 text-sm font-medium opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${
                        activeRelatedRow === idx ? "opacity-100 translate-x-0" : ""
                      }`}
                      style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                    >
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                    {link.desc}
                  </p>
                </div>
              </Link>
            </DiagonalWipe>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="transparent" spacing="md" maxWidth="xl" withDivider className="!bg-white">
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{
            background: "#EEECFB",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex-shrink-0">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.45)",
              }}
            >
              <MapPin size={24} color="#fff" />
            </div>
          </div>
          <div className="flex-1">
            <h2
              className="text-xl md:text-2xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Serving Houston &amp; Sugar Land, Texas
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital creates and manages Meta Ads campaigns for businesses in Houston and Sugar
              Land, Texas, helping local brands reach targeted audiences on Facebook and Instagram
              within their geographic market. Houston-area businesses can contact Echo5 Digital to
              explore paid social advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Phone number — verified fact */}
              <a
                href="tel:+17134897004"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={16} />
                713-489-7004
              </a>
              {/* Email — verified fact */}
              <a
                href="mailto:sales@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={16} />
                sales@echo5digital.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            FAQs
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Meta Ads Questions, Answered
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                border: openFaq === i ? "1px solid rgba(168,85,247,0.45)" : "1px solid rgba(124,58,237,0.2)",
                background: openFaq === i ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.05)",
              }}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === i}
                style={{ cursor: "pointer", background: "transparent", border: "none" }}
              >
                <span
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0" style={{ color: "#A855F7" }}>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === i && (
                <div
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── LEAD FORM CTA ── */}
      <Section
        id="lead-form"
        background="transparent"
        spacing="xl"
        maxWidth="3xl"
        withDivider
        className="!bg-[#EEECFB]"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="flex-1 lg:pt-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Get Started Today
            </p>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Ready to Launch
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                High-Converting Meta Ads?
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Whether you're running your first Facebook campaign or looking to scale an existing
              paid social program, Echo5 Digital delivers AI-powered Meta Ads management that drives
              measurable results for businesses in Houston, Texas, and across the U.S.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Free paid social strategy consultation",
                "Custom audience and campaign recommendations",
                "No long-term contracts required",
                "Transparent reporting and clear communication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#6B4EF0", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>Or reach us directly:</p>
              <a href="tel:+17134897004" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                📞 713-489-7004
              </a>
              <a href="mailto:sales@echo5digital.com" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                ✉️ sales@echo5digital.com
              </a>
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                📍 Houston / Sugar Land, Texas
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full">
            <ContactForm
              heading="Get Your Free Meta Ads Strategy"
              subheading="Tell us about your business and goals — we'll build a custom paid social plan for you."
              submitLabel="Request My Free Strategy"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}