"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import {
  ChevronDown,
  Search,
  MapPin,
  FileText,
  MonitorSmartphone,
  Bot,
  BarChart3,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Shield,
  Clock,
  Target,
  MessageSquare,
  Database,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function ProfessionalServicesClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <Section background="gradient" spacing="xl" id="hero">
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
            transform: "translate(-20%, 20%)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left copy */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={14} />
              AI-Powered Marketing for Professional Services
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Win More Clients.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Build Real Authority.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "rgba(229,231,235,0.72)", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital helps accountants, consultants, financial advisors, and insurance
              agencies generate consistent client inquiries through AI-powered SEO, content
              marketing, Google Ads, and CRM automation — without the overhead of a full marketing
              team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book a Free Strategy Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/solutions"
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

            {/* Social proof pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
              {["Accountants", "Financial Advisors", "Consultants", "Insurance Agencies", "HR Firms"].map(
                (label) => (
                  <span
                    key={label}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(168,85,247,0.25)",
                      color: "rgba(229,231,235,0.65)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right hero image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/8068691/pexels-photo-8068691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Professional services marketing team reviewing growth analytics dashboard"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)",
                }}
              />
              {/* Floating stat badge */}
              <div
                className="absolute bottom-4 left-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(10,15,30,0.85)",
                  border: "1px solid rgba(168,85,247,0.4)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <TrendingUp size={20} style={{ color: "#A855F7" }} />
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    3–5× More Qualified Leads
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    Illustrative result for professional services clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" id="quick-answer" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
            border: "1px solid rgba(168,85,247,0.3)",
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
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital provides AI-powered digital marketing for professional service firms
                including accountants, consultants, financial advisors, and insurance agencies.
                Services include SEO, AEO/GEO, content marketing, Google Ads, web design, and CRM
                automation — all designed to build authority and generate consistent client
                inquiries. Echo5 Digital serves professional service businesses in Houston, Sugar
                Land, Texas, and across the United States.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRY PAIN POINTS ── */}
      <Section background="default" spacing="lg" id="pain-points" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Industry Challenges
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Why Professional Service Firms Struggle Online
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Sound familiar? These are the most common barriers keeping professional service firms
            from consistent digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: AlertCircle,
              title: "Hard to Differentiate Online",
              desc: "Most professional service websites look the same — generic messaging, stock imagery, and no clear reason why a prospect should choose you over the next firm on the list.",
            },
            {
              icon: Users,
              title: "Over-Reliance on Referrals",
              desc: "Referrals are valuable but unpredictable. Firms that depend entirely on word-of-mouth have no scalable, controllable pipeline for new client acquisition.",
            },
            {
              icon: TrendingUp,
              title: "Underinvestment in Digital",
              desc: "Many professional service firms reinvest profits into operations rather than marketing, leaving digital channels untapped while competitors capture online demand.",
            },
            {
              icon: Shield,
              title: "Compliance & Sensitivity",
              desc: "Content around financial, legal, and HR topics must be handled carefully. Generic marketing tactics can create risk or undermine professional credibility.",
            },
            {
              icon: FileText,
              title: "Low Content Output",
              desc: "Partners and principals are billable-hour focused — not writers. Producing consistent, high-quality thought leadership content rarely happens without a system.",
            },
            {
              icon: Search,
              title: "Invisible in Local Search",
              desc: "When ideal clients search for accountants, advisors, or consultants near them, most firms simply don't appear — because local SEO and Google Business optimization have been neglected.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <item.icon size={20} style={{ color: "#A855F7" }} />
              </div>
              <h3
                className="text-base font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section background="gradient" spacing="lg" id="services" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Services
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Marketing Built for Professional Service Firms
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Every service is designed to build authority, generate qualified client inquiries, and
            give your firm a measurable edge in your market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              title: "SEO",
              badge: "Authority",
              description:
                "Rank for the terms your ideal clients search when they need your expertise. We build technical, on-page, and off-page SEO strategies that compound over time.",
            },
            {
              icon: Zap,
              title: "AEO / GEO",
              badge: "AI Search",
              description:
                "Get your firm surfaced in AI-powered search tools and featured snippets. Answer Engine Optimization captures high-intent prospects asking the exact questions you can solve.",
            },
            {
              icon: MapPin,
              title: "Local SEO",
              badge: "Local Clients",
              description:
                "Dominate local search results and Google Maps so nearby businesses find your firm first. Includes Google Business Profile management and local citation building.",
            },
            {
              icon: FileText,
              title: "Content Marketing",
              badge: "Thought Leadership",
              description:
                "We create authoritative blog posts, guides, and resources that build trust with prospects and signal expertise to search engines — consistently, without burdening your team.",
            },
            {
              icon: Target,
              title: "Google Ads",
              badge: "Paid Search",
              description:
                "Capture decision-ready leads with highly targeted Google Ads campaigns optimized for cost-per-acquisition. Pay for results, not impressions.",
            },
            {
              icon: MonitorSmartphone,
              title: "Web Design",
              badge: "Credibility",
              description:
                "A professionally designed website that builds immediate trust, communicates your value proposition clearly, and converts visitors into consultation requests.",
            },
            {
              icon: Database,
              title: "CRM Automation",
              badge: "Follow-Up",
              description:
                "Automate lead capture, follow-up sequences, and nurture workflows so no prospect falls through the cracks — especially important for professional services' longer sales cycles.",
            },
            {
              icon: BarChart3,
              title: "Reporting Dashboards",
              badge: "Visibility",
              description:
                "Real-time dashboards showing exactly what's working — traffic, leads, cost per acquisition, and pipeline contribution — so you can make data-driven marketing decisions.",
            },
          ].map((svc) => (
            <Card
              key={svc.title}
              title={svc.title}
              description={svc.description}
              icon={svc.icon}
              badge={svc.badge}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE OVERVIEW ── */}
      <Section background="elevated" spacing="lg" id="ai-employee" withDivider>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Enterprise-Level Marketing Execution — Without the Hiring Overhead
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Most professional service firms can't justify hiring a full marketing team — a
              strategist, SEO specialist, content writer, ad manager, and analyst all at once. The
              Echo5 Digital AI Marketing Employee model gives you exactly that capability, powered
              by AI and managed by our team of experts, at a fraction of the cost.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Full-stack marketing strategy tailored to your firm's niche and goals",
                "AI-assisted content production at scale — blog posts, landing pages, ad copy",
                "Automated reporting so you always know your ROI",
                "Proactive campaign optimization without waiting on a slow agency",
                "One point of contact who understands your industry, not a revolving team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#7C3AED" }} />
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn About the AI Marketing Employee
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 50px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/37685036/pexels-photo-37685036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI marketing employee dashboard showing automated workflows and analytics"
                className="w-full h-72 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { label: "Services Included", value: "8+" },
                { label: "Channels Managed", value: "Unified" },
                { label: "vs. In-House Team", value: "60% Less" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-4 rounded-xl"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                >
                  <span
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#A855F7" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" id="how-it-works" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            From Onboarding to Client Inquiries
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            We designed this process specifically around professional services' longer consideration
            cycles and trust-based sales environments.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px"
            style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7, #7C3AED)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Discovery Call",
                desc: "We learn your firm's specialty, target client profile, competitive landscape, and growth goals. No cookie-cutter templates.",
              },
              {
                step: "02",
                icon: Target,
                title: "Strategy Build",
                desc: "We build a 90-day marketing strategy covering SEO, content, ads, and automation — tailored to your niche and local market.",
              },
              {
                step: "03",
                icon: Zap,
                title: "Launch & Execute",
                desc: "Campaigns go live: website optimization, content publishing, Google Ads, and CRM automation activated in parallel.",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Optimize & Scale",
                desc: "Monthly reporting calls, continuous optimization, and strategic expansion as your pipeline fills with qualified prospects.",
              },
            ].map((phase) => (
              <div key={phase.step} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.4)",
                      boxShadow: "0 0 24px rgba(124,58,237,0.2)",
                    }}
                  >
                    <phase.icon size={26} style={{ color: "#A855F7" }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      color: "#fff",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {phase.step}
                  </span>
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {phase.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RESULTS / CASE STUDIES ── */}
      <Section background="gradient" spacing="lg" id="results" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Illustrative Results
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            The Kind of Growth Professional Service Firms Achieve
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
          >
            These cards represent illustrative outcomes based on the types of results professional
            service clients experience. Individual results vary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              firm: "Regional Accounting Firm",
              location: "Houston, TX",
              metric: "+214%",
              metricLabel: "Organic Traffic Growth",
              detail:
                "After 6 months of SEO and content marketing, organic search became the firm's #1 source of new client inquiries — surpassing referrals for the first time.",
              tag: "SEO + Content",
            },
            {
              firm: "Independent Financial Advisory",
              location: "Sugar Land, TX",
              metric: "–52%",
              metricLabel: "Cost Per Qualified Lead",
              detail:
                "Google Ads campaign restructuring and landing page optimization cut cost-per-acquisition in half while improving lead quality scores.",
              tag: "Google Ads",
            },
            {
              firm: "Management Consulting Practice",
              location: "National, USA",
              metric: "3.8×",
              metricLabel: "Pipeline from Digital Channels",
              detail:
                "AEO and long-form content strategy positioned the firm as a go-to resource in AI-powered search, generating qualified inbound leads from across the U.S.",
              tag: "AEO / GEO",
            },
          ].map((cs) => (
            <div
              key={cs.firm}
              className="flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.2)",
                    color: "#A855F7",
                    border: "1px solid rgba(168,85,247,0.3)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {cs.tag}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                >
                  Illustrative
                </span>
              </div>

              <div
                className="text-4xl font-bold mb-1"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {cs.metric}
              </div>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {cs.metricLabel}
              </p>
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                {cs.detail}
              </p>
              <div className="flex items-center gap-2">
                <MapPin size={13} style={{ color: "#7C3AED" }} />
                <span
                  className="text-xs"
                  style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}
                >
                  {cs.firm} · {cs.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="elevated" spacing="md" id="trust" withDivider>
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Why Decision-Makers Trust Echo5 Digital
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            {
              icon: Shield,
              title: "Industry-Aware Strategy",
              desc: "We understand compliance sensitivity, trust-based selling, and the nuanced content needs of professional service firms.",
            },
            {
              icon: Bot,
              title: "AI-Powered Execution",
              desc: "AI speeds up content production, keyword research, and campaign optimization — giving you more output without more budget.",
            },
            {
              icon: Clock,
              title: "Transparent Reporting",
              desc: "You get clear, jargon-free monthly reports showing exactly what's happening with your marketing investment.",
            },
            {
              icon: Star,
              title: "Results-Focused Approach",
              desc: "We measure success by qualified client inquiries and pipeline growth — not vanity metrics like impressions or clicks alone.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <item.icon size={22} style={{ color: "#A855F7" }} />
              </div>
              <h3
                className="text-sm font-semibold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Credential strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 py-5 px-6 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          {[
            "AI-Powered Marketing",
            "Houston & Sugar Land Specialists",
            "U.S. National Coverage",
            "Dedicated Account Management",
            "No Long-Term Lock-In",
          ].map((cred) => (
            <div key={cred} className="flex items-center gap-2">
              <CheckCircle size={15} style={{ color: "#7C3AED" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
              >
                {cred}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" id="faq" withDivider>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
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
              Your Questions, Answered
            </h2>
            <p
              className="text-base"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Common questions from professional service firm leaders considering digital marketing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: openFaq === index ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.4)" : "rgba(124,58,237,0.2)"}`,
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className="text-sm sm:text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "#A855F7",
                      flexShrink: 0,
                      transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-5 pb-5"
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
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE BLOCK ── */}
      <Section background="elevated" spacing="lg" id="local-relevance" withDivider>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/18441165/pexels-photo-18441165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Houston Texas skyline representing local professional services market"
                className="w-full h-64 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <MapPin size={16} style={{ color: "#A855F7" }} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Houston & Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Serving Houston &amp; Sugar Land
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Local Search Dominance for Texas Professional Firms
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Professional service firms in Houston and Sugar Land, Texas operate in competitive
              local markets where appearing prominently in Google search results and Google Maps can
              be the difference between consistent new client acquisition and stagnation. Echo5
              Digital's local SEO, Google Business Profile management, and Houston-targeted content
              and ad campaigns help professional service providers build credibility and visibility
              with their ideal local client base.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "Houston-targeted SEO and Google Ads campaigns",
                "Google Business Profile optimization for local visibility",
                "Sugar Land and greater Houston area local citation building",
                "Locally relevant content that resonates with Texas businesses",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#7C3AED", flexShrink: 0 }} />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* NAP — real HTML text, never in an image */}
            <address
              className="not-italic flex flex-col gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <a
                href="tel:713-489-7004"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.6)" }}
              >
                <Phone size={15} style={{ color: "#7C3AED" }} />
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.6)" }}
              >
                <Mail size={15} style={{ color: "#7C3AED" }} />
                hello@echo5digital.com
              </a>
              <span
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "rgba(229,231,235,0.6)" }}
              >
                <MapPin size={15} style={{ color: "#7C3AED" }} />
                Houston / Sugar Land, Texas
              </span>
            </address>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section background="gradient" spacing="xl" id="final-cta" withDivider>
        {/* Background orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Ready to Grow?
          </p>
          <h2
            className="text-3xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            Book Your Free Strategy Call With Echo5 Digital
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Whether you're an accountant, financial advisor, consultant, or insurance agency leader,
            we'll show you exactly how to build a consistent digital client acquisition engine — no
            hype, no cookie-cutter plans, just a clear strategy built around your firm's goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 36px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Strategy Call
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:hello@echo5digital.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Mail size={16} />
              Email Us Directly
            </a>
          </div>
          <p
            className="text-xs mt-6"
            style={{ color: "rgba(229,231,235,0.35)", fontFamily: "Inter, sans-serif" }}
          >
            No commitment required. Typical response within 24 hours.
          </p>
        </div>
      </Section>
    </main>
  );
}