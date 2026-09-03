"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Search,
  MapPin,
  Star,
  Megaphone,
  Globe,
  Bot,
  Target,
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Wrench,
  Zap,
  TrendingUp,
  Shield,
  Phone,
  Users,
  Clock,
  Award,
  ArrowRight,
  Layers,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function HomeServicesMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Search,
      title: "Local SEO",
      description:
        "Dominate Google's local pack results for high-intent searches like 'HVAC repair near me' or 'plumber in Houston.' We optimize every technical, on-page, and off-page signal to push your business to the top.",
      badge: "Core Service",
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      description:
        "A fully optimized Google Business Profile is the #1 local ranking factor. We manage your profile, posts, photos, Q&A, and categories so your business shows up when customers are ready to call.",
      badge: "Essential",
    },
    {
      icon: Megaphone,
      title: "Google Ads",
      description:
        "Precision-targeted pay-per-click campaigns built for home services. We focus on purchase-intent keywords, tight geo-targeting, and conversion-optimized landing pages to maximize your return on ad spend.",
    },
    {
      icon: Target,
      title: "Local Services Ads",
      description:
        "Google's pay-per-lead format puts verified home service businesses at the very top of search results. We help you qualify, set up, and manage LSAs to capture leads at the highest intent moment.",
    },
    {
      icon: Globe,
      title: "Content Marketing",
      description:
        "Educational, locally-relevant content that builds authority and drives organic traffic. From service-area pages to seasonal blog posts, we create content that answers homeowner questions and ranks.",
    },
    {
      icon: Star,
      title: "Reputation Management",
      description:
        "Online reviews drive buying decisions for home services. We build systems to generate consistent 5-star reviews, respond to feedback professionally, and protect your reputation across all platforms.",
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description:
        "Showcase your work, build brand trust, and stay top-of-mind with targeted social media campaigns on Facebook and Instagram, specifically designed for home service audiences.",
    },
    {
      icon: Layers,
      title: "Web Design & Development",
      description:
        "Fast, mobile-optimized websites built to convert local visitors into booked jobs. Every page is designed with local SEO, speed, and lead generation in mind from the ground up.",
    },
  ];

  const challenges = [
    {
      icon: BarChart3,
      title: "Unpredictable Seasonal Demand",
      description:
        "Home service businesses face peaks and valleys driven by weather, holidays, and economic cycles. Without a data-driven strategy, revenue becomes inconsistent and planning becomes guesswork.",
    },
    {
      icon: Target,
      title: "Hyper-Local Competition",
      description:
        "Every city has dozens of competitors bidding on the same keywords and fighting for the same Google Maps positions. Standing out requires more than just having a website.",
    },
    {
      icon: Search,
      title: "Google Local Search Dominance",
      description:
        "Over 85% of home service searches start on Google. Ranking in the local pack—the map results—is critical. Without intentional Local SEO, you're invisible to your highest-intent prospects.",
    },
    {
      icon: Star,
      title: "Reviews Drive Purchase Decisions",
      description:
        "Homeowners trust reviews as much as personal recommendations. A business with 200+ positive reviews will almost always win the click over one with 12. Reputation is revenue.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description:
        "We audit your current digital presence, analyze your local competition, and identify the highest-impact opportunities in your specific service areas.",
    },
    {
      number: "02",
      title: "Strategy & Roadmap",
      description:
        "We build a custom AI-powered marketing strategy covering Local SEO, paid ads, content, and reputation—aligned to your service areas, budget, and business goals.",
    },
    {
      number: "03",
      title: "Launch & Execution",
      description:
        "Our team handles everything: optimizing your Google Business Profile, building landing pages, launching ad campaigns, and deploying content—all done for you.",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description:
        "We monitor performance continuously, using AI-driven data analysis to optimize campaigns, improve rankings, and scale what's working to generate more qualified leads every month.",
    },
  ];

  const results = [
    {
      metric: "3x",
      label: "Increase in Qualified Leads",
      note: "Illustrative result",
      icon: TrendingUp,
    },
    {
      metric: "65%",
      label: "Reduction in Cost Per Lead",
      note: "Illustrative result",
      icon: BarChart3,
    },
    {
      metric: "Top 3",
      label: "Local Pack Rankings",
      note: "Illustrative result",
      icon: Award,
    },
    {
      metric: "4.8★",
      label: "Average Review Rating",
      note: "Illustrative result",
      icon: Star,
    },
  ];

  const trustSignals = [
    { icon: Bot, label: "AI-Powered Campaigns" },
    { icon: MapPin, label: "Local SEO Specialists" },
    { icon: Shield, label: "Transparent Reporting" },
    { icon: Clock, label: "Done-For-You Service" },
    { icon: Phone, label: "Dedicated Account Support" },
    { icon: Zap, label: "Fast Campaign Launch" },
  ];

  const serviceAreas = [
    "Houston, TX",
    "Sugar Land, TX",
    "Katy, TX",
    "The Woodlands, TX",
    "Pearland, TX",
    "Pasadena, TX",
    "Friendswood, TX",
    "Cypress, TX",
    "Spring, TX",
    "Missouri City, TX",
    "League City, TX",
    "Baytown, TX",
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6476577/pexels-photo-6476577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Home services contractor managing digital marketing on a tablet"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(17,13,46,0.9) 60%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Ambient glows */}
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Wrench size={14} className="text-purple-400" />
            <span
              className="text-sm font-medium text-purple-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AI-Powered Home Services Marketing
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            More Booked Jobs.{" "}
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
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
          >
            Echo5 Digital is the AI-powered marketing agency built for home service
            businesses. We deliver done-for-you Local SEO, Google Ads, reputation
            management, and lead generation—so you can focus on the work, not the
            marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 24px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get a Free Strategy Session
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 text-base transition-all duration-200 hover:bg-purple-500/10"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER ─────────────────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={16} color="#fff" />
            </div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Quick Answer
            </span>
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What Is Home Services Marketing?
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.8)" }}
          >
            Home services marketing refers to the digital strategies contractors and home
            service businesses use to generate leads, including Local SEO, Google Ads,
            Google Business Profile management, and online reputation building. Echo5
            Digital provides AI-powered, done-for-you marketing for home service companies,
            helping them rank higher in local search, run effective paid ad campaigns, and
            convert more online visitors into booked jobs. The agency serves home service
            businesses in Houston, Sugar Land, Texas and nationally across the U.S.
          </p>
        </div>
      </Section>

      {/* ── INDUSTRY CHALLENGES ──────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Problem
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Marketing Challenges Home Service Businesses Face
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            The home services industry is one of the most competitive local markets. Here's
            what stands between you and a full schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <Card
              key={challenge.title}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.description}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <Section id="services" background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Home Services Marketing Services
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            A complete done-for-you digital marketing stack built specifically for home
            service contractors and companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE ────────────────────────────────────── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              The Echo5 Difference
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2 mb-5 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Your AI Marketing Employee — Done For You
            </h2>
            <p
              className="text-base mb-6 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Most home service businesses don't need to hire a marketing manager,
              manage an agency retainer, or figure out which platforms to use. They need
              consistent, qualified leads showing up every month—without the overhead.
            </p>
            <p
              className="text-base mb-6 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Echo5 Digital's AI Marketing Employee model is a done-for-you system that
              handles your entire digital marketing presence: Local SEO, Google Ads, review
              generation, content publishing, and reporting—all powered by AI and managed
              by our team of specialists.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "No marketing expertise required from you",
                "AI-driven campaign optimization running 24/7",
                "Monthly performance reports with clear lead data",
                "One point of contact for all your marketing needs",
                "Scales with your business as you grow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(229,231,235,0.8)",
                    }}
                  >
                    {item}
                  </span>
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
              Learn About AI Marketing Employee
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered marketing dashboard showing home services lead generation metrics"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, transparent 60%)",
              }}
            />
            {/* Floating stat card */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
              style={{
                background: "rgba(10,15,30,0.92)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <div className="flex items-center gap-3">
                <Bot size={20} style={{ color: "#A855F7" }} />
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    AI Marketing Employee Active
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    Optimizing campaigns & generating leads 24/7
                  </p>
                </div>
                <div className="ml-auto w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SERVICE AREA TARGETING ───────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/33916728/pexels-photo-33916728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Map showing local service area targeting for Houston area home service businesses"
              className="w-full h-72 object-cover rounded-2xl"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)",
              }}
            />
            {/* Area tags overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {serviceAreas.slice(0, 6).map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(124,58,237,0.7)",
                    color: "#E5E7EB",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(168,85,247,0.4)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Geo-Targeted Strategy
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2 mb-5 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Dominate Your Service Area
            </h2>
            <p
              className="text-base mb-5 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Home service businesses live and die by their local presence. We build
              hyper-targeted geo-marketing strategies down to the city, neighborhood,
              and ZIP code level—so you show up exactly where your ideal customers are
              searching.
            </p>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              From service-area landing pages to geo-targeted Google Ads and Google
              Business Profile optimization, every campaign element is aligned to
              capture local demand in the specific markets you serve.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-sm py-1"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.7)" }}
                >
                  <MapPin size={12} style={{ color: "#A855F7", flexShrink: 0 }} />
                  {area}
                </div>
              ))}
            </div>

            <p
              className="text-xs italic"
              style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
            >
              Also serving home service businesses nationally across the U.S.
            </p>
          </div>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ──────────────────────────────────────────── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
            borderColor: "rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={20} style={{ color: "#A855F7" }} />
            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston &amp; Sugar Land, Texas
            </h2>
          </div>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.8)" }}
          >
            Home service businesses in Houston and Sugar Land, Texas operate in one of
            the most competitive local service markets in the country. Echo5 Digital
            helps Houston-area contractors and home service companies dominate local
            Google search results, build strong review profiles, and run geo-targeted
            Google Ads campaigns to capture high-intent leads in their service areas.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {/* Phone — verified fact */}
            <a
              href="tel:7134897004"
              className="flex items-center gap-2 transition-colors hover:text-white"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={15} style={{ color: "#7C3AED" }} />
              713-489-7004
            </a>
            <a
              href="mailto:hello@echo5digital.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              <Zap size={15} style={{ color: "#7C3AED" }} />
              hello@echo5digital.com
            </a>
            <span
              className="flex items-center gap-2"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              <MapPin size={15} style={{ color: "#7C3AED" }} />
              Houston / Sugar Land, Texas
            </span>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Process
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How It Works
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            From onboarding to ongoing campaign management—here's how we turn your
            marketing into a consistent lead generation machine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-start">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px z-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.5), transparent)",
                    width: "calc(100% - 3rem)",
                    left: "calc(3rem + 8px)",
                    top: "1.5rem",
                  }}
                />
              )}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 font-bold text-lg z-10 relative"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#fff",
                }}
              >
                {step.number}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Illustrative Results
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 mb-3 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            What Home Service Businesses Achieve
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.5)" }}
          >
            The following figures are illustrative indicators of the type of results
            AI-powered home services marketing can generate. Individual results vary.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => {
            const Icon = result.icon;
            return (
              <div
                key={result.label}
                className="flex flex-col items-center text-center rounded-2xl p-6 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.25)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={22} style={{ color: "#A855F7" }} />
                </div>
                <span
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {result.metric}
                </span>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {result.label}
                </p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "rgba(229,231,235,0.5)",
                    fontFamily: "Inter, sans-serif",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  {result.note}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <Section background="elevated" spacing="sm" withDivider>
        <div className="text-center mb-8">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Home Service Businesses Trust Echo5 Digital
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.label}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border"
                style={{
                  borderColor: "rgba(124,58,237,0.2)",
                  background: "rgba(124,58,237,0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={18} style={{ color: "#A855F7" }} />
                </div>
                <span
                  className="text-xs font-medium leading-tight"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
                >
                  {signal.label}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Common Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4 tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor:
                  openFaq === index
                    ? "rgba(168,85,247,0.4)"
                    : "rgba(124,58,237,0.2)",
                background:
                  openFaq === index
                    ? "rgba(124,58,237,0.08)"
                    : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200"
                aria-expanded={openFaq === index}
                style={{ cursor: "pointer", background: "transparent", border: "none" }}
              >
                <span
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
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
                <div className="px-5 pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(229,231,235,0.75)",
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

      {/* ── CTA SECTION ──────────────────────────────────────────────── */}
      <Section background="gradient" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side copy */}
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Ready to Grow?
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2 mb-5 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Get Your Free Home Services Marketing Audit
            </h2>
            <p
              className="text-base mb-6 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
            >
              Find out exactly where your home service business is leaving leads on the
              table—and how Echo5 Digital's AI-powered marketing system can help you
              capture them. No pressure, no obligation.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Free Local SEO and Google Business Profile audit",
                "Competitor analysis for your service area",
                "Personalized AI marketing strategy recommendation",
                "Clear pricing with no hidden fees",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(229,231,235,0.8)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="flex flex-col gap-3 text-sm">
              {/* Phone — verified fact */}
              <a
                href="tel:7134897004"
                className="flex items-center gap-3 transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <Phone size={14} style={{ color: "#A855F7" }} />
                </div>
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <Zap size={14} style={{ color: "#A855F7" }} />
                </div>
                hello@echo5digital.com
              </a>
              <span
                className="flex items-center gap-3"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <MapPin size={14} style={{ color: "#A855F7" }} />
                </div>
                Houston / Sugar Land, Texas
              </span>
            </div>
          </div>

          {/* Right side — contact form */}
          <div>
            <ContactForm
              heading="Request Your Free Audit"
              subheading="Tell us about your home service business and we'll build a custom marketing strategy for you."
              submitLabel="Request Free Audit"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}