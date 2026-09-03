"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        <div className="relative">
          {/* Background image overlay */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-20 pointer-events-none">
            <img
              src="https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Meta Ads on Facebook and Instagram"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #0A0F1E 100%)",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center gap-6 pt-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(124,58,237,0.2)",
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Cpu size={14} />
              AI-Powered Paid Social Advertising
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.03em",
              }}
            >
              Meta Ads That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Convert
              </span>
              <br />
              on Facebook &amp; Instagram
            </h1>

            <p
              className="text-lg md:text-xl max-w-3xl leading-relaxed"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital combines agentic AI with human-led creative strategy to deliver
              precision-targeted Meta Ads campaigns that grow your business — without wasting your
              budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.4)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
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
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
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
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              What Is Meta Ads Management?
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Paid Social That Reaches the Right People
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
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
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-96">
            <img
              src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Meta Ads management dashboard showing Facebook and Instagram campaign performance"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, transparent 60%)",
              }}
            />
          </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
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
          ].map((service, i) => (
            <Card
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI-POWERED AUDIENCE AND CREATIVE OPTIMIZATION ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital AI system optimizing Meta Ads audiences and creative performance"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, transparent 70%)",
              }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "rgba(124,58,237,0.2)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <BrainCircuit size={14} />
              Agentic AI + Human Strategy
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              AI-Powered Audience &amp; Creative Optimization
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Echo5 Digital's agentic AI continuously monitors your Meta Ads campaigns — analyzing
                audience performance signals, detecting creative fatigue before it erodes results, and
                automating A/B testing cycles to surface the highest-performing ad combinations faster
                than manual management allows.
              </p>
              <p>
                The AI identifies which audience segments are responding, flags underperforming ad sets
                for review, and recommends budget reallocation — all while human strategists maintain
                creative direction, messaging integrity, and overall campaign strategy.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Automated audience signal monitoring and scoring",
                "Creative fatigue detection and rotation triggers",
                "AI-driven A/B test cycle automation",
                "Underperforming ad set flagging and alerts",
                "Human oversight of creative and budget decisions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                  <span style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section id="how-it-works" background="elevated" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            How We Launch &amp; Optimize Your Meta Ads
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                icon: <Search size={22} style={{ color: "#A855F7" }} />,
                title: "Audience Strategy",
                desc: "We research your ideal customer profiles, analyze competitors, and build a targeting framework across demographics, interests, and custom audiences.",
              },
              {
                step: "02",
                icon: <PenTool size={22} style={{ color: "#A855F7" }} />,
                title: "Creative Development",
                desc: "Our team crafts ad copy, creative briefs, and visual direction tailored to each campaign objective and audience segment.",
              },
              {
                step: "03",
                icon: <Megaphone size={22} style={{ color: "#A855F7" }} />,
                title: "Campaign Launch",
                desc: "Campaigns go live with pixel tracking, conversion events, and full Meta Ads Manager configuration in place from day one.",
              },
              {
                step: "04",
                icon: <FlaskConical size={22} style={{ color: "#A855F7" }} />,
                title: "Testing & Optimization",
                desc: "AI-assisted A/B testing cycles run continuously, with underperforming elements paused and winning combinations scaled.",
              },
              {
                step: "05",
                icon: <FileText size={22} style={{ color: "#A855F7" }} />,
                title: "Monthly Reporting",
                desc: "You receive clear performance reports with ROAS, CPR, audience insights, and strategic recommendations for the next period.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-2xl z-10 relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.35)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.2)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      color: "#fff",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {step.step}
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
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

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
      <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
        <div className="text-center mb-8">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Explore Related Services
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Pair Meta Ads With Our Full Digital Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              href: "/services/google-ads",
              icon: <Search size={20} style={{ color: "#A855F7" }} />,
              title: "Google Ads",
              desc: "Capture high-intent search traffic alongside your Meta social campaigns for full-funnel paid media coverage.",
            },
            {
              href: "/services/social-media-marketing",
              icon: <Megaphone size={20} style={{ color: "#A855F7" }} />,
              title: "Social Media Marketing",
              desc: "Complement paid Meta Ads with organic social strategy to build community and sustain long-term brand awareness.",
            },
            {
              href: "/services/content-marketing",
              icon: <FileText size={20} style={{ color: "#A855F7" }} />,
              title: "Content Marketing",
              desc: "Fuel your Meta Ads with high-quality content that educates, attracts, and converts your target audience.",
            },
            {
              href: "/ai-marketing-employee",
              icon: <BrainCircuit size={20} style={{ color: "#A855F7" }} />,
              title: "AI Marketing Employee",
              desc: "Our agentic AI marketing system works alongside your team to automate tasks, optimize campaigns, and accelerate growth.",
            },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex flex-col gap-3 p-5 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.2)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.14)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                {link.icon}
              </div>
              <div>
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {link.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {link.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium mt-auto" style={{ color: "#A855F7" }}>
                Learn more <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" maxWidth="xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
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
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston &amp; Sugar Land, Texas
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital creates and manages Meta Ads campaigns for businesses in Houston and Sugar
              Land, Texas, helping local brands reach targeted audiences on Facebook and Instagram
              within their geographic market. Houston-area businesses can contact Echo5 Digital to
              explore paid social advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Phone number — verified fact */}
              <a
                href="tel:7134897004"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={16} />
                713-489-7004
              </a>
              {/* Email — verified fact */}
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={16} />
                hello@echo5digital.com
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
      <Section id="lead-form" background="gradient" spacing="xl" maxWidth="xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="pt-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{
                background: "rgba(124,58,237,0.2)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={13} />
              Get Started Today
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Ready to Launch High-Converting Meta Ads?
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Whether you're running your first Facebook campaign or looking to scale an existing
              paid social program, Echo5 Digital delivers AI-powered Meta Ads management that drives
              measurable results for businesses in Houston, Texas, and across the U.S.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Free paid social strategy consultation",
                "Custom audience and campaign recommendations",
                "No long-term contracts required",
                "Transparent reporting and clear communication",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={17} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-sm font-semibold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Contact Us Directly
              </p>
              <div className="space-y-2">
                {/* Phone — verified fact */}
                <a
                  href="tel:7134897004"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone size={15} style={{ color: "#A855F7" }} />
                  713-489-7004
                </a>
                {/* Email — verified fact */}
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={15} style={{ color: "#A855F7" }} />
                  hello@echo5digital.com
                </a>
                <p
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <MapPin size={15} style={{ color: "#A855F7" }} />
                  Houston / Sugar Land, Texas
                </p>
              </div>
            </div>
          </div>

          <div>
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