"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import {
  HardHat,
  TrendingUp,
  MapPin,
  Star,
  Globe,
  FileText,
  Megaphone,
  Search,
  Zap,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Users,
  BarChart2,
  Clock,
  ThumbsUp,
  Bot,
  Phone,
  Mail,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function ConstructionMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0A0F1E", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/32826199/pexels-photo-32826199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Construction workers on a job site"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.7) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Glow blobs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            transform: "translate(30%, 30%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
            }}>
            <HardHat size={16} style={{ color: "#A855F7" }} />
            <span className="text-sm font-medium" style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}>
              AI Marketing for Construction Companies
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Win More Construction{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects Online
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital delivers AI-powered SEO, Google Ads, web design, and reputation management
            built specifically for construction firms. Stop relying on word-of-mouth alone — and start
            generating consistent project leads from Google.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.6), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get Your Free Growth Plan
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "transparent",
                border: "2px solid rgba(124,58,237,0.6)",
                color: "#E5E7EB",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See How It Works
            </Link>
          </div>

          {/* Hero stats */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "3x", label: "More Leads" },
              { value: "Top 3", label: "Google Maps Rankings" },
              { value: "24/7", label: "AI Working For You" },
              { value: "TX + U.S.", label: "Service Coverage" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(90deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital provides AI-powered digital marketing for construction companies, including
                local SEO, Google Ads, web design, and content marketing. The service is designed for
                small and mid-sized construction firms that need consistent lead generation without
                managing a full in-house marketing team. Echo5 Digital serves construction businesses in
                Houston, Sugar Land, Texas, and nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRY PAIN POINTS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Common Challenges
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Marketing Problems Facing Construction Firms
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Most construction companies struggle with the same digital marketing obstacles. Sound familiar?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Inconsistent Lead Flow",
              description:
                "Project pipelines dry up between word-of-mouth referrals, causing feast-or-famine cycles that make it hard to plan growth.",
            },
            {
              icon: Search,
              title: "Low Online Visibility",
              description:
                "When homeowners and commercial clients search for contractors on Google, you're not on the first page — and competitors are stealing those clicks.",
            },
            {
              icon: Users,
              title: "Over-Reliance on Referrals",
              description:
                "Referrals are great but unpredictable. Without a digital channel generating leads, your business is vulnerable to slow periods.",
            },
            {
              icon: BarChart2,
              title: "Outcompeted by Larger Contractors",
              description:
                "Bigger firms have dedicated marketing teams. Without AI-powered tools, it's nearly impossible to match their online presence on a small-business budget.",
            },
          ].map((pain) => (
            <div
              key={pain.title}
              className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <pain.icon size={22} style={{ color: "#A855F7" }} strokeWidth={1.8} />
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

      {/* ── SERVICES FOR CONSTRUCTION ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Digital Marketing Services for Construction Companies
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Every service is tailored specifically for contractors — not generic marketing fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={MapPin}
            variant="service"
            title="Local SEO"
            description="Rank at the top of Google search results for queries like 'general contractor near me' or 'roofing company Houston.' We optimize your site, citations, and content to dominate local search."
          />
          <Card
            icon={Megaphone}
            variant="service"
            title="Google Ads"
            description="Drive immediate project inquiries with laser-targeted Google Ads campaigns. We manage bidding, ad copy, and landing pages to maximize ROI for construction keywords in your service area."
          />
          <Card
            icon={Star}
            variant="service"
            title="Google Business Profile"
            description="Your GBP listing is your digital storefront. We optimize your profile, manage reviews, post updates, and ensure your business shows up prominently on Google Maps."
          />
          <Card
            icon={Globe}
            variant="service"
            title="Web Design"
            description="A fast, mobile-first website that showcases your past projects, earns trust from potential clients, and converts visitors into quote requests — built to rank and convert."
          />
          <Card
            icon={FileText}
            variant="service"
            title="Content Marketing"
            description="Blog posts, service pages, and project spotlights that demonstrate expertise, answer homeowner questions, and attract organic traffic from Google month after month."
          />
          <Card
            icon={ThumbsUp}
            variant="service"
            title="Reputation Management"
            description="Your online reviews directly influence which contractor a client calls. We help you collect 5-star reviews and respond professionally to maintain a stellar reputation."
          />
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE OVERVIEW ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Your Dedicated AI Marketing Team — Without the Overhead
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Running a construction business is a full-time job. You shouldn't also have to manage an
              in-house marketing team. Echo5 Digital's AI Marketing Employee model acts as a dedicated
              marketing staff member for your business — continuously executing SEO, paid ads, content,
              and reputation management tasks so your pipeline stays full.
            </p>
            <ul className="space-y-4">
              {[
                "Executes ongoing SEO tasks every week without reminders",
                "Monitors and optimizes Google Ads campaigns daily",
                "Publishes content that attracts high-intent local searches",
                "Responds to reviews and manages your online reputation",
                "Reports performance in plain English — no jargon",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
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
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Bot size={16} />
              Learn About AI Marketing Employee
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered marketing dashboard for construction companies"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
              style={{
                background: "rgba(10,15,30,0.85)",
                border: "1px solid rgba(124,58,237,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  <Bot size={18} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    AI Marketing Employee
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    Always on. Always working for your construction business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            The Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            How Echo5 Digital Grows Your Construction Business
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            A clear, repeatable process built to deliver consistent project leads.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(168,85,247,0.5), transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Clock,
                title: "Discovery & Audit",
                description:
                  "We analyze your current online presence, competitors, and target service areas to identify your biggest growth opportunities.",
              },
              {
                step: "02",
                icon: FileText,
                title: "Strategy & Roadmap",
                description:
                  "We build a tailored marketing plan covering SEO, Google Ads, web, and content — prioritized for maximum lead generation impact.",
              },
              {
                step: "03",
                icon: Zap,
                title: "Launch & Execute",
                description:
                  "Our AI Marketing Employee model activates — publishing content, launching ads, and optimizing your Google Business Profile.",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Optimize & Scale",
                description:
                  "We continuously monitor performance data, refine campaigns, and scale what's working to grow your lead volume month over month.",
              },
            ].map((step, i) => (
              <div key={step.step} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                      border: "2px solid rgba(124,58,237,0.4)",
                    }}
                  >
                    <step.icon size={28} style={{ color: "#A855F7" }} strokeWidth={1.6} />
                  </div>
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      color: "#fff",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {i + 1}
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
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RESULTS / CASE STUDIES ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Client Results
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            What AI-Powered Marketing Delivers for Contractors
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
          >
            The following results are illustrative examples representing outcomes typical of our construction and home-improvement clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              badge: "Illustrative",
              company: "Houston General Contractor",
              metric: "+312%",
              metricLabel: "Organic Lead Increase",
              description:
                "After a full Local SEO campaign and Google Business Profile overhaul, a Houston-area general contractor jumped from page 4 to the top 3 Google Maps results for core service keywords.",
              image: "https://images.pexels.com/photos/8961073/pexels-photo-8961073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              imageAlt: "Houston general contractor on a commercial job site",
            },
            {
              badge: "Illustrative",
              company: "Texas Roofing Company",
              metric: "4.2x",
              metricLabel: "Google Ads ROI",
              description:
                "A roofing company in the Greater Houston area saw a 4.2x return on Google Ads spend within 90 days after Echo5 Digital restructured their campaigns and landing pages.",
              image: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              imageAlt: "Texas roofing contractor installing shingles",
            },
            {
              badge: "Illustrative",
              company: "Sugar Land Home Builder",
              metric: "#1",
              metricLabel: "Google Maps Ranking",
              description:
                "A Sugar Land custom home builder achieved the #1 Google Maps position for their primary target keyword and doubled their monthly quote requests within 6 months.",
              image: "https://images.pexels.com/photos/23930016/pexels-photo-23930016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              imageAlt: "Custom home under construction in Sugar Land Texas",
            },
          ].map((cs) => (
            <div
              key={cs.company}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(10,15,30,0.3) 0%, rgba(10,15,30,0.8) 100%)",
                  }}
                />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.75)",
                    color: "#E5E7EB",
                    border: "1px solid rgba(168,85,247,0.4)",
                  }}
                >
                  {cs.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                >
                  {cs.company}
                </p>
                <div>
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(90deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {cs.metric}
                  </span>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    {cs.metricLabel}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                >
                  {cs.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div className="text-center mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Why Construction Business Owners Trust Echo5 Digital
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: Bot, label: "AI-Powered Execution", sub: "Marketing that never stops working" },
            { icon: MapPin, label: "Houston & Texas Experts", sub: "Deep knowledge of your local market" },
            { icon: Globe, label: "National U.S. Reach", sub: "Serving contractors coast to coast" },
            { icon: Star, label: "Results-First Agency", sub: "We're measured by your lead growth" },
          ].map((trust) => (
            <div
              key={trust.label}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.15)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <trust.icon size={22} style={{ color: "#A855F7" }} strokeWidth={1.8} />
              </div>
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {trust.label}
              </p>
              <p
                className="text-xs leading-snug"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                {trust.sub}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider id="faq">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Common questions from construction company owners about digital marketing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)"}`,
                background: openFaq === index ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.03)",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-sm sm:text-base font-semibold"
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
              <div
                id={`faq-answer-${index}`}
                role="region"
                style={{
                  maxHeight: openFaq === index ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE BLOCK ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/31626703/pexels-photo-31626703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Houston Texas skyline with construction cranes"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, transparent 60%)",
              }}
            />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Serving Houston & Texas Contractors
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Built for the Houston Construction Market
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Construction companies in Houston and Sugar Land, Texas operate in a highly competitive
              local market where ranking on Google Maps and appearing in local search results directly
              drives project inquiries. Echo5 Digital's local SEO, Google Business Profile management,
              and Houston-focused Google Ads campaigns are built to help Texas-based contractors capture
              high-intent searches from homeowners and commercial clients in their service area.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Houston Metro Area & Greater Harris County",
                "Sugar Land, Fort Bend County & surrounding suburbs",
                "Katy, The Woodlands, Pearland, and beyond",
                "Statewide Texas coverage available",
              ].map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <MapPin size={16} style={{ color: "#A855F7", flexShrink: 0 }} />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            {/* NAP block — verified real info only */}
            <div
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Echo5 Digital — Houston, Texas
              </p>
              <address className="not-italic flex flex-col gap-2">
                <a
                  href="tel:713-489-7004"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  {/* Verified phone number */}
                  <Phone size={14} style={{ color: "#A855F7" }} />
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={14} style={{ color: "#A855F7" }} />
                  hello@echo5digital.com
                </a>
                <span
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
                >
                  <MapPin size={14} style={{ color: "#A855F7" }} />
                  Houston / Sugar Land, Texas
                </span>
              </address>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section background="gradient" spacing="lg">
        <div
          className="rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(168,85,247,0.1) 50%, rgba(124,58,237,0.2) 100%)",
            border: "1px solid rgba(124,58,237,0.35)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(124,58,237,0.2)",
                border: "1px solid rgba(168,85,247,0.35)",
              }}
            >
              <HardHat size={16} style={{ color: "#A855F7" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                For Construction Companies Ready to Grow
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Ready to Fill Your Project Pipeline?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Book a free strategy session with Echo5 Digital and get a custom growth plan for your
              construction business — covering SEO, Google Ads, web design, and reputation management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.65), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Get My Free Growth Plan
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:713-489-7004"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(124,58,237,0.6)",
                  color: "#E5E7EB",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {/* Verified phone number */}
                <Phone size={18} />
                713-489-7004
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}