"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import {
  MapPin,
  TrendingUp,
  DollarSign,
  Users,
  Search,
  Target,
  Share2,
  FileText,
  Globe,
  Star,
  Bot,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Home,
  Building2,
  Zap,
  BarChart3,
  Clock,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function RealEstateMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const painPoints = [
    {
      icon: TrendingUp,
      title: "Intense Local Competition",
      description:
        "Every neighborhood has dozens of agents fighting for the same buyers and sellers. Without a strong digital presence, you're invisible when it matters most.",
    },
    {
      icon: DollarSign,
      title: "High Cost-Per-Lead on Zillow & Realtor.com",
      description:
        "Third-party portals charge premium prices for leads they also sell to your competitors. There's a smarter, more profitable way to own your pipeline.",
    },
    {
      icon: Users,
      title: "Inconsistent Lead Pipeline",
      description:
        "Feast-or-famine cycles kill momentum. Without consistent marketing, you're always chasing the next deal instead of closing the one in front of you.",
    },
    {
      icon: Star,
      title: "Weak Personal Brand Visibility",
      description:
        "Buyers and sellers choose agents they trust and recognize. If you're not showing up on Google, social media, and local searches, you're losing deals to agents who are.",
    },
  ];

  const services = [
    {
      icon: Search,
      title: "Local SEO",
      description:
        "Rank at the top of Google when buyers and sellers search for agents in your area. We optimize your website, content, and citations to dominate local search results.",
      badge: "High Impact",
    },
    {
      icon: Target,
      title: "Google Ads",
      description:
        "Capture high-intent buyers and sellers the moment they search. Our precision-targeted campaigns drive qualified traffic directly to your listings and landing pages.",
      badge: "Fast Results",
    },
    {
      icon: Share2,
      title: "Meta Ads",
      description:
        "Reach your ideal clients on Facebook and Instagram with compelling property ads, retargeting campaigns, and lead generation funnels built for real estate.",
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description:
        "Build a consistent, professional presence across all major platforms. We create content that showcases your listings, expertise, and community knowledge.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Attract organic traffic and establish authority with neighborhood guides, market reports, buyer/seller resources, and blog content optimized for search.",
    },
    {
      icon: Globe,
      title: "Web Design",
      description:
        "Convert more visitors into leads with a fast, beautiful, mobile-optimized website designed specifically for real estate professionals and their listings.",
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      description:
        "Maximize your visibility in Google Maps and local pack results. We fully optimize and manage your GBP to attract ready-to-act buyers and sellers.",
      badge: "Local Essential",
    },
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We audit your current digital presence, research your local market, and build a custom marketing roadmap tailored to your goals and target neighborhoods.",
    },
    {
      step: "02",
      title: "Campaign Build & Launch",
      description:
        "Our team sets up your SEO foundation, ad campaigns, social profiles, and content calendar — fully optimized and ready to generate leads from day one.",
    },
    {
      step: "03",
      title: "AI-Powered Execution",
      description:
        "Our AI Marketing Employee runs continuous campaigns across all channels — publishing content, adjusting bids, responding to trends, and nurturing your pipeline 24/7.",
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description:
        "We analyze performance data weekly, doubling down on what converts and refining what doesn't, so your cost-per-lead decreases and your pipeline grows.",
    },
  ];

  const results = [
    {
      metric: "3.2×",
      label: "Increase in qualified leads",
      detail: "Illustrative result for a Houston residential agent over 6 months",
      icon: TrendingUp,
    },
    {
      metric: "61%",
      label: "Reduction in cost-per-lead",
      detail: "Illustrative result vs. Zillow Premier Agent spend",
      icon: DollarSign,
    },
    {
      metric: "Top 3",
      label: "Google local pack ranking",
      detail: "Illustrative local SEO result in target Houston zip codes",
      icon: Search,
    },
    {
      metric: "4.8×",
      label: "ROI on ad spend",
      detail: "Illustrative Meta Ads performance for a Sugar Land broker",
      icon: BarChart3,
    },
  ];

  const trustStats = [
    { icon: ShieldCheck, value: "AI-First", label: "Marketing Execution" },
    { icon: Clock, value: "24/7", label: "Campaign Monitoring" },
    { icon: MapPin, value: "Houston & National", label: "Service Coverage" },
    { icon: BarChart3, value: "Multi-Channel", label: "Integrated Strategy" },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/17995530/pexels-photo-17995530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Houston Texas skyline representing Echo5 Digital's real estate marketing market"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,15,30,0.7) 0%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Home size={15} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium font-[Inter]">
              Real Estate Digital Marketing
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            More Qualified Leads.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Less Wasted Ad Spend.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital helps real estate agents, brokers, and property companies build
            consistent lead pipelines with AI-powered SEO, Google Ads, Meta Ads, social
            media, and content marketing — so you can focus on closing deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <PhoneCall size={18} />
              Book a Free Strategy Call
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-purple-300 font-semibold text-base border border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust micro-bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {["Local SEO", "Google Ads", "Meta Ads", "Social Media", "Content Marketing"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-purple-400" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER / DIRECT ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider id="quick-answer">
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base sm:text-lg text-gray-200 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital offers AI-powered digital marketing for real estate agents,
                brokers, and property companies, including local SEO, Google Ads, Meta Ads,
                social media management, and content marketing. The service is built to help
                real estate professionals build consistent lead pipelines and stronger personal
                brands online. Echo5 Digital serves real estate clients in{" "}
                <strong className="text-purple-300">Houston, Sugar Land, Texas</strong>, and
                nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRY PAIN POINTS ── */}
      <Section background="default" spacing="lg" id="pain-points" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Real Estate Marketing Problem
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Most Real Estate Marketing Fails
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Real estate is one of the most competitive industries in digital marketing. Here
            are the challenges holding agents and brokers back.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <point.icon size={22} className="text-purple-400" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2"
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

      {/* ── SERVICES ── */}
      <Section background="elevated" spacing="lg" id="services" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Real Estate Marketing Services
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Services Built for Real Estate Lead Generation
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every service is tailored specifically to the needs of real estate professionals
            — from solo agents to large brokerages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* ── AI MARKETING EMPLOYEE ── */}
      <Section background="gradient" spacing="lg" id="ai-marketing-employee" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Your Always-On Marketing Team — Powered by AI
            </h2>
            <p
              className="text-gray-300 text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our AI Marketing Employee model is like having a full marketing department
              working 24/7 — without the overhead. It continuously executes campaigns across
              SEO, paid ads, social media, and content so you never miss a lead opportunity.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Continuous SEO optimization and content publishing",
                "Automated ad campaign monitoring and bid adjustments",
                "Daily social media content creation and scheduling",
                "Real-time performance tracking and reporting",
                "Lead nurturing workflows and follow-up sequences",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <CheckCircle
                    size={18}
                    className="text-purple-400 flex-shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={17} />
              Learn About AI Marketing Employee
            </Link>
          </div>

          {/* Right visual */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/37685036/pexels-photo-37685036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Real estate agent reviewing AI-powered marketing analytics dashboard"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(10,15,30,0.4) 100%)",
              }}
            />
            {/* Floating stat card */}
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.25)" }}
                >
                  <Bot size={20} className="text-purple-400" />
                </div>
                <div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    AI runs campaigns 24/7
                  </p>
                  <p
                    className="text-gray-400 text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    So you can focus on closing deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" id="how-it-works" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            From Onboarding to Ongoing Lead Generation
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A clear, proven process that gets you from zero to a full lead pipeline —
            faster than you'd expect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < howItWorksSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.5), transparent)",
                    width: "calc(100% - 2rem)",
                    left: "calc(100% - 1rem)",
                  }}
                />
              )}

              <div
                className="relative z-10 rounded-2xl p-6 h-full border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#fff",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-base font-semibold text-white mb-2"
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

      {/* ── RESULTS / CASE STUDIES ── */}
      <Section background="elevated" spacing="lg" id="results" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Illustrative Performance
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Results Real Estate Clients Can Expect
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The figures below are illustrative performance examples to show the types of
            improvements Echo5 Digital targets for real estate clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <div
              key={result.label}
              className="rounded-2xl p-6 border text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <result.icon size={22} className="text-purple-400" />
              </div>
              <p
                className="text-4xl font-bold text-white mb-1"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {result.metric}
              </p>
              <p
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {result.label}
              </p>
              <p
                className="text-xs text-gray-500 leading-relaxed italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {result.detail}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center text-xs text-gray-600 mt-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          * All figures are illustrative examples, not guaranteed results. Actual performance
          varies based on market, budget, and strategy.
        </p>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="md" withDivider id="trust">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(124,58,237,0.15)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <stat.icon size={22} className="text-purple-400" />
              </div>
              <p
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: Building2, text: "Serving solo agents, teams & brokerages" },
            { icon: Globe, text: "Houston-based with national U.S. coverage" },
            { icon: Zap, text: "AI-powered campaigns that never sleep" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.06)",
                border: "1px solid rgba(124,58,237,0.12)",
              }}
            >
              <item.icon size={18} className="text-purple-400 flex-shrink-0" />
              <p
                className="text-sm text-gray-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" id="faq" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Frequently Asked Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Real Estate Marketing Questions Answered
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                background:
                  openFaq === index
                    ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)"
                    : "rgba(255,255,255,0.03)",
                borderColor:
                  openFaq === index
                    ? "rgba(124,58,237,0.4)"
                    : "rgba(124,58,237,0.15)",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === index}
              >
                <span
                  className="text-sm sm:text-base font-semibold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 text-purple-400 transition-transform duration-300"
                  style={{
                    transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p
                    className="text-sm text-gray-300 leading-relaxed"
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

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="lg" id="local-relevance" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/17286412/pexels-photo-17286412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Houston and Sugar Land Texas real estate neighborhood representing Echo5 Digital's local market"
              className="w-full h-72 lg:h-96 object-cover rounded-2xl"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 60%)",
              }}
            />
          </div>

          <div>
            <span
              className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Serving Houston & Sugar Land, Texas
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Dominate the Most Competitive Real Estate Markets in Texas
            </h2>
            <p
              className="text-gray-300 text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Houston and Sugar Land, Texas are among the most active real estate markets in
              the country, making local search visibility and a strong digital presence
              essential for agents and brokers. Echo5 Digital's local SEO, Google Business
              Profile management, and Houston-targeted paid ad campaigns are designed to help
              real estate professionals in the greater Houston area capture high-intent buyer
              and seller leads before the competition does.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Houston & Sugar Land targeted local SEO campaigns",
                "Google Business Profile management for local search dominance",
                "Hyper-local paid ad campaigns by neighborhood and zip code",
                "National U.S. coverage for agents outside Texas",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <MapPin size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>

            {/* NAP block */}
            <div
              className="rounded-xl p-4 border"
              style={{
                background: "rgba(124,58,237,0.08)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <p
                className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Contact Echo5 Digital
              </p>
              <div className="space-y-2 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-purple-400 flex-shrink-0" />
                  {/* Verified address */}
                  <span>Houston / Sugar Land, Texas</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={14} className="text-purple-400 flex-shrink-0" />
                  {/* Verified phone */}
                  <a
                    href="tel:7134897004"
                    className="hover:text-purple-300 transition-colors"
                  >
                    713-489-7004
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 flex-shrink-0">✉</span>
                  {/* Verified email */}
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="hover:text-purple-300 transition-colors"
                  >
                    hello@echo5digital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section background="gradient" spacing="xl" id="cta">
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            <TrendingUp size={15} className="text-purple-400" />
            <span
              className="text-purple-300 text-sm font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ready to grow your real estate business?
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Start Generating Qualified Real Estate Leads Today
          </h2>

          <p
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Book a free strategy consultation with Echo5 Digital and discover how our
            AI-powered marketing system can build you a consistent, scalable lead pipeline —
            without depending on Zillow or Realtor.com.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 30px rgba(124,58,237,0.65), 0 4px 20px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <PhoneCall size={18} />
              Book Your Free Growth Consultation
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-purple-300 font-semibold text-base border border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <p
            className="text-gray-500 text-sm mt-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            No commitment required. Free 30-minute strategy call.
          </p>
        </div>
      </Section>
    </main>
  );
}