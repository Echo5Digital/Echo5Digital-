"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Dumbbell,
  TrendingUp,
  Users,
  Calendar,
  BarChart2,
  Search,
  Globe,
  Megaphone,
  Star,
  MapPin,
  Bot,
  Zap,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Target,
  RefreshCcw,
  CloudSun,
  Award,
  Clock,
  DollarSign,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function FitnessMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ─── HERO ─── */}
      <Section background="gradient" spacing="xl" maxWidth="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
              }}
            >
              <Dumbbell size={14} />
              Fitness Industry Marketing
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-0.03em",
                color: "#E5E7EB",
              }}
            >
              Grow Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Gym Memberships
              </span>{" "}
              with AI Marketing
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital delivers AI-powered digital marketing built for gyms, fitness studios, and personal trainers. Drive more class bookings, reduce member churn, and dominate local search — without managing marketing yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
                style={{
                  border: "1px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                View All Services
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.25) 0%, transparent 70%)",
              }}
            />
            <img
              src="https://images.pexels.com/photos/11075077/pexels-photo-11075077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Modern gym fitness studio interior with exercise equipment"
              className="w-full h-[480px] object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            />
            {/* Floating stat cards */}
            <div
              className="absolute -bottom-6 -left-6 px-5 py-4 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(10,15,30,0.92)",
                border: "1px solid rgba(124,58,237,0.4)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <TrendingUp size={18} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                  +3x Membership Leads
                </p>
                <p className="text-xs" style={{ color: "#A855F7" }}>Illustrative result</p>
              </div>
            </div>
            <div
              className="absolute -top-6 -right-6 px-5 py-4 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(10,15,30,0.92)",
                border: "1px solid rgba(124,58,237,0.4)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                <Bot size={18} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                  AI-Powered 24/7
                </p>
                <p className="text-xs" style={{ color: "#A855F7" }}>Always on marketing</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── QUICK ANSWER / DIRECT ANSWER BLOCK ─── */}
      <Section background="elevated" spacing="sm" maxWidth="2xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital delivers AI-powered digital marketing for gyms, fitness studios, and personal trainers, including social media management, Google Ads, local SEO, and content marketing. The service is built for fitness businesses that want to grow memberships and class bookings without managing marketing in-house. Echo5 Digital serves fitness clients in Houston, Sugar Land, Texas, and across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── INDUSTRY PAIN POINTS ─── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Common Challenges
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
          >
            The Real Challenges Fitness Businesses Face
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Running a gym or studio is demanding enough. Marketing shouldn't be a second full-time job.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: RefreshCcw,
              title: "High Member Churn",
              description:
                "Keeping members engaged and renewing is a constant battle. Without a retention marketing strategy, you're always starting over.",
            },
            {
              icon: CloudSun,
              title: "Seasonal Demand Swings",
              description:
                "January brings a rush, summer slows everything down. Unpredictable revenue makes planning and staffing extremely difficult.",
            },
            {
              icon: Instagram,
              title: "Social Media Overload",
              description:
                "You know you need to post consistently, but finding time to create quality content between classes and coaching is near impossible.",
            },
            {
              icon: Target,
              title: "Crowded Local Market",
              description:
                "Big gym chains and boutique studios are all competing for the same local members. Standing out requires a smarter strategy.",
            },
          ].map((pain) => (
            <div
              key={pain.title}
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <pain.icon size={20} style={{ color: "#A855F7" }} />
              </div>
              <h3
                className="text-base font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {pain.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── SERVICES FOR FITNESS BUSINESSES ─── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
          >
            Marketing Built for Fitness Businesses
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Every service is designed to drive memberships, class bookings, and local discovery for your gym or studio.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            variant="service"
            icon={Instagram}
            title="Social Media Marketing"
            description="Consistent, on-brand content across Instagram, Facebook, and TikTok that showcases your facility, coaches, and community — without you lifting a finger."
            badge="High Impact"
          />
          <Card
            variant="service"
            icon={BarChart2}
            title="Google Ads"
            description="Targeted pay-per-click campaigns that capture high-intent searches like 'gym near me' and 'fitness studio Houston' to drive qualified membership inquiries."
            badge="Fast Results"
          />
          <Card
            variant="service"
            icon={Search}
            title="Local SEO"
            description="Rank higher in local search results so people searching for gyms and fitness studios in your area find you first — organically and for free."
          />
          <Card
            variant="service"
            icon={Megaphone}
            title="Meta Ads (Facebook & Instagram)"
            description="Geo-targeted ad campaigns that reach potential members in your local area with compelling offers, free trial promotions, and class previews."
          />
          <Card
            variant="service"
            icon={Globe}
            title="Google Business Profile"
            description="Fully optimized GBP management that keeps your listing accurate, generates reviews, and maximizes your presence in Google Maps and local pack results."
            badge="Local Authority"
          />
          <Card
            variant="service"
            icon={TrendingUp}
            title="Content Marketing & Web Design"
            description="Conversion-focused websites and SEO content that tell your brand story, answer member questions, and turn visitors into booked trial classes."
          />
        </div>
      </Section>

      {/* ─── AI MARKETING EMPLOYEE OVERVIEW ─── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI Marketing Employee
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
            >
              Your Gym's Marketing — Handled by AI
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's AI Marketing Employee acts as a dedicated, always-on marketing team member for your fitness business. It continuously manages your social media content, ad campaigns, email sequences, and local SEO — so you can focus on coaching members and running your studio.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Daily social media content creation and scheduling",
                "Automated ad campaign optimization for Google and Meta",
                "Consistent review generation and GBP management",
                "Performance reporting with actionable insights",
                "Ongoing content updates to keep your brand fresh and relevant",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn About AI Marketing Employee
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/39219660/pexels-photo-39219660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Personal trainer using digital marketing technology to manage gym business"
              className="w-full h-[420px] object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(10,15,30,0.5) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl px-5 py-4 flex items-center gap-4"
              style={{
                background: "rgba(10,15,30,0.9)",
                border: "1px solid rgba(124,58,237,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Bot size={28} style={{ color: "#A855F7", flexShrink: 0 }} />
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  AI Marketing Employee Active
                </p>
                <p className="text-xs" style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}>
                  Managing 6 channels simultaneously — 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
          >
            From Onboarding to Membership Growth
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            A clear, proven path designed around fitness business marketing timelines and goals.
          </p>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 80%, transparent)" }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Users,
                title: "Discovery Call",
                description: "We learn your goals, target members, competitive landscape, and current marketing situation.",
                timeline: "Day 1",
              },
              {
                step: "02",
                icon: Target,
                title: "Strategy & Setup",
                description: "We build your custom fitness marketing strategy and set up all ad accounts, social profiles, and tracking.",
                timeline: "Week 1–2",
              },
              {
                step: "03",
                icon: Zap,
                title: "AI Launch",
                description: "Campaigns go live, content starts publishing, and your AI Marketing Employee begins continuous optimization.",
                timeline: "Week 2–3",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Grow & Optimize",
                description: "Monthly reporting, ongoing campaign tuning, and scaling what's working to maximize membership growth.",
                timeline: "Month 1+",
              },
            ].map((step, i) => (
              <div key={step.step} className="flex flex-col items-center text-center gap-4">
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                  }}
                >
                  <step.icon size={22} color="#fff" />
                </div>
                <div
                  className="text-xs font-bold"
                  style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Step {step.step}
                </div>
                <h3
                  className="text-base font-bold"
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
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    color: "#A855F7",
                  }}
                >
                  <Clock size={12} />
                  {step.timeline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── RESULTS / CASE STUDIES ─── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-4">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Performance Snapshots
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
          >
            What Results Look Like for Fitness Clients
          </h2>
          <p
            className="text-base max-w-xl mx-auto mb-2"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            The performance cards below are illustrative examples of the type of results fitness businesses can achieve with AI-powered marketing.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            *All figures are illustrative and not guaranteed. Individual results will vary.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: Users,
              label: "Membership Leads",
              metric: "+187%",
              detail: "Increase in monthly membership inquiries",
              context: "Boutique fitness studio — Google Ads + Local SEO",
            },
            {
              icon: DollarSign,
              label: "Cost Per Lead",
              metric: "-42%",
              detail: "Reduction in paid ad cost-per-lead",
              context: "Independent gym — Meta Ads optimization",
            },
            {
              icon: Star,
              label: "Google Reviews",
              metric: "+94",
              detail: "New 5-star Google reviews generated",
              context: "Personal training studio — GBP management",
            },
            {
              icon: Calendar,
              label: "Class Bookings",
              metric: "+3.1x",
              detail: "Increase in online class sign-ups",
              context: "Yoga & pilates studio — social media + content",
            },
            {
              icon: TrendingUp,
              label: "Social Reach",
              metric: "+220%",
              detail: "Organic social reach growth in 90 days",
              context: "CrossFit box — AI social media management",
            },
            {
              icon: Search,
              label: "Local Search Rankings",
              metric: "Top 3",
              detail: "Ranked in Google Maps local pack",
              context: "Gym chain — local SEO campaign",
            },
          ].map((result) => (
            <div
              key={result.label}
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <result.icon size={18} style={{ color: "#A855F7" }} />
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    color: "#A855F7",
                    border: "1px solid rgba(124,58,237,0.25)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Illustrative
                </span>
              </div>
              <p
                className="text-3xl font-bold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {result.metric}
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {result.detail}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}
              >
                {result.context}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── TRUST BAR ─── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Choose Echo5 Digital
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
          >
            A Marketing Partner Built for Fitness Owners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Bot,
              stat: "AI-Powered",
              label: "Always-On Marketing System",
              description: "Technology that works continuously, not just during business hours.",
            },
            {
              icon: Globe,
              stat: "Multi-Channel",
              label: "Unified Presence",
              description: "Google, Meta, local search, and social media — all coordinated seamlessly.",
            },
            {
              icon: Award,
              stat: "Fitness-Focused",
              label: "Industry Expertise",
              description: "Marketing strategies built specifically for gyms, studios, and trainers.",
            },
            {
              icon: BarChart2,
              stat: "Transparent",
              label: "Monthly Reporting",
              description: "Clear metrics tied to membership growth, not vanity numbers.",
            },
          ].map((trust) => (
            <div
              key={trust.stat}
              className="rounded-xl p-6 flex flex-col items-center text-center gap-3"
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
              >
                <trust.icon size={22} color="#fff" />
              </div>
              <p
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#A855F7" }}
              >
                {trust.stat}
              </p>
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {trust.label}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
              >
                {trust.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ACCORDION ─── */}
      <Section background="default" spacing="lg" maxWidth="xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
          >
            Fitness Marketing Questions, Answered
          </h2>
        </div>
        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                border: openFaq === index ? "1px solid rgba(168,85,247,0.45)" : "1px solid rgba(124,58,237,0.2)",
                background: openFaq === index ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.025)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
                style={{ cursor: "pointer", background: "transparent", border: "none" }}
              >
                <span
                  className="text-sm md:text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: "#A855F7",
                    flexShrink: 0,
                    transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5">
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

      {/* ─── LOCAL RELEVANCE BLOCK ─── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} style={{ color: "#A855F7" }} />
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Serving Houston & Sugar Land, TX
              </p>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
            >
              Helping Houston-Area Fitness Businesses Win Locally
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Fitness businesses in Houston and Sugar Land, Texas compete for local members searching for gyms and studios nearby. Echo5 Digital's local SEO, Google Business Profile management, and geo-targeted Google Ads and Meta Ads campaigns help Houston-area fitness studios appear prominently in local search results and social feeds, driving more membership inquiries and class sign-ups.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Local SEO strategies targeting Houston & Sugar Land fitness searches",
                "Google Maps optimization to dominate the local pack",
                "Geo-targeted Google Ads reaching members within your service radius",
                "Facebook & Instagram ads targeting local fitness-interested audiences",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: "#7C3AED" }} />
                {/* Phone number from verified facts */}
                <a
                  href="tel:7134897004"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  713-489-7004
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: "#7C3AED" }} />
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  hello@echo5digital.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} style={{ color: "#7C3AED" }} />
                <span
                  className="text-sm"
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/36661495/pexels-photo-36661495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Houston Texas skyline representing Echo5 Digital's local fitness marketing service area"
              className="w-full h-[380px] object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl px-5 py-4"
              style={{
                background: "rgba(10,15,30,0.9)",
                border: "1px solid rgba(124,58,237,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Fitness Businesses Locally & Nationwide
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
              >
                Houston · Sugar Land · Texas · Across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Ready to Grow?
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em", color: "#E5E7EB" }}
            >
              Start Growing Your Fitness Business Today
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Join fitness studios, gyms, and personal trainers who trust Echo5 Digital to manage their marketing and grow their memberships. Book a free discovery call and find out what AI-powered marketing can do for your business.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: CheckCircle, text: "Free marketing audit & strategy call" },
                { icon: CheckCircle, text: "No long-term contracts required" },
                { icon: CheckCircle, text: "Dedicated AI Marketing Employee for your studio" },
                { icon: CheckCircle, text: "Transparent monthly reporting" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon size={18} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm
              heading="Book Your Free Fitness Marketing Call"
              subheading="Tell us about your gym or studio and we'll show you exactly how AI marketing can grow your memberships."
              submitLabel="Book a Free Discovery Call"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}