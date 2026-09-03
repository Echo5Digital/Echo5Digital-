"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import {
  Shield,
  Zap,
  RefreshCw,
  Activity,
  HardDrive,
  FileText,
  Bug,
  Eye,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  AlertTriangle,
  Search,
  Link2,
  ArrowRight,
  Layers,
  Users,
  BarChart2,
  Lock,
  Globe,
  Headphones,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

const includedItems = [
  {
    icon: RefreshCw,
    title: "Software & Plugin Updates",
    description:
      "Regular updates to your CMS, themes, and plugins to patch vulnerabilities and maintain compatibility.",
  },
  {
    icon: Shield,
    title: "Security Monitoring",
    description:
      "Continuous threat scanning, malware detection, and firewall management to protect your site and visitors.",
  },
  {
    icon: Activity,
    title: "Uptime Monitoring",
    description:
      "24/7 uptime tracking with immediate alerts so downtime is detected and resolved fast.",
  },
  {
    icon: Zap,
    title: "Performance Checks",
    description:
      "Regular speed audits, image optimization, and caching reviews to keep load times lightning-fast.",
  },
  {
    icon: BarChart2,
    title: "Core Web Vitals Monitoring",
    description:
      "Track LCP, FID, and CLS scores to maintain Google's performance benchmarks and protect SEO rankings.",
  },
  {
    icon: FileText,
    title: "Content Updates",
    description:
      "Scheduled content edits, page copy updates, and media refreshes as included in your plan.",
  },
  {
    icon: HardDrive,
    title: "Backup Management",
    description:
      "Automated, offsite backups performed regularly so your data is always recoverable.",
  },
  {
    icon: Bug,
    title: "Bug Fixes",
    description:
      "Proactive identification and resolution of functionality issues, broken links, and display errors.",
  },
];

const risks = [
  {
    icon: AlertTriangle,
    title: "Security Vulnerabilities",
    description:
      "Outdated software is the leading entry point for hackers. Unpatched CMS and plugins expose your site and customer data.",
  },
  {
    icon: Zap,
    title: "Performance Degradation",
    description:
      "Without ongoing optimization, sites slow down over time — hurting conversions, bounce rates, and user experience.",
  },
  {
    icon: Link2,
    title: "Broken Links & Errors",
    description:
      "404 errors and broken functionality erode trust and frustrate users, driving potential customers away.",
  },
  {
    icon: Search,
    title: "SEO Loss",
    description:
      "Poor Core Web Vitals, crawl errors, and site downtime directly reduce your search engine visibility.",
  },
];

const plans = [
  {
    name: "Essential",
    badge: "Starter",
    description:
      "Core maintenance for small sites that need to stay secure, updated, and online without constant attention.",
    features: [
      "Monthly software & plugin updates",
      "Security monitoring",
      "Uptime monitoring",
      "Monthly backups",
      "Bug fix allocation",
    ],
    cta: "View Pricing",
    href: "/pricing",
  },
  {
    name: "Growth",
    badge: "Most Popular",
    description:
      "Enhanced maintenance for growing businesses that need performance optimization and content support.",
    features: [
      "Everything in Essential",
      "Weekly updates & scans",
      "Core Web Vitals monitoring",
      "Performance optimization",
      "Content updates included",
      "Priority response",
    ],
    cta: "View Pricing",
    href: "/pricing",
    featured: true,
  },
  {
    name: "Enterprise",
    badge: "Full Service",
    description:
      "Comprehensive, high-frequency maintenance for high-traffic sites and businesses that need maximum uptime and support.",
    features: [
      "Everything in Growth",
      "Daily monitoring & scans",
      "Emergency response SLA",
      "Dedicated account manager",
      "Monthly strategy reviews",
      "Custom reporting",
    ],
    cta: "Contact Us",
    href: "/contact",
  },
];

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Onboarding & Site Audit",
    description:
      "We begin with a comprehensive audit of your existing site — assessing software versions, security posture, performance scores, and any outstanding issues.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Scheduled Maintenance",
    description:
      "Based on your plan, we perform recurring updates, security scans, backups, and performance checks on a defined schedule.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Continuous Monitoring",
    description:
      "Between scheduled tasks, our systems monitor uptime, security threats, and performance signals around the clock.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Issue Reporting & Communication",
    description:
      "You receive regular maintenance reports and have a clear channel to submit requests, ask questions, or flag urgent issues.",
  },
];

const trustIndicators = [
  {
    icon: Activity,
    stat: "99.9%",
    label: "Uptime Focus",
    description: "We monitor your site continuously to detect and address downtime immediately.",
  },
  {
    icon: Clock,
    stat: "< 24hr",
    label: "Response Commitment",
    description: "Standard issue responses within one business day; faster for plan-based priority clients.",
  },
  {
    icon: Globe,
    stat: "Houston-Based",
    label: "Local Team",
    description: "A Houston-area team that understands local market needs and responds to issues that affect your local search visibility.",
  },
  {
    icon: Lock,
    stat: "Proactive",
    label: "Security-First",
    description: "We don't wait for problems — continuous scanning and monitoring catch threats before they impact your business.",
  },
];

export default function WebsiteMaintenanceClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #A855F7 0%, #7C3AED 50%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{
              background: "rgba(124,58,237,0.12)",
              borderColor: "rgba(124,58,237,0.35)",
            }}
          >
            <Shield size={14} className="text-purple-400" />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Website Maintenance Services
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.03em",
            }}
          >
            Worry-Free Website Care,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Single Day
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Echo5 Digital keeps your website fast, secure, and always performing — so you can
            focus on running your business while we handle everything behind the scenes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get a Maintenance Plan
              <ArrowRight size={16} />
            </a>
            <a
              href="#what-is-included"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-purple-900/20"
              style={{
                border: "2px solid rgba(124,58,237,0.5)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See What&apos;s Included
            </a>
          </div>

          {/* Hero image */}
          <div className="mt-16 rounded-2xl overflow-hidden border max-w-4xl mx-auto"
            style={{ borderColor: "rgba(124,58,237,0.25)" }}
          >
            <img
              src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Website maintenance dashboard showing uptime, security, and performance metrics"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" maxWidth="2xl" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
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
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital offers ongoing website maintenance services for small and mid-sized
                businesses in Houston, Sugar Land, Texas, and nationally. Maintenance plans cover
                software updates, security monitoring, uptime tracking, performance optimization,
                content updates, and backup management — keeping your website fast, secure, and
                working for your business every day.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHY MAINTENANCE MATTERS ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Risk of Neglect
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            Why Website Maintenance Matters
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            A neglected website isn&apos;t just a liability — it&apos;s a revenue risk. Here&apos;s what happens
            when maintenance is skipped.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {risks.map((risk) => {
            const Icon = risk.icon;
            return (
              <div
                key={risk.title}
                className="rounded-2xl p-6 border flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={22} style={{ color: "#A855F7" }} />
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {risk.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {risk.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── WHAT'S INCLUDED ── */}
      <Section id="what-is-included" background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Deliverables
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            What&apos;s Included in Every Plan
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Comprehensive, ongoing care — no gaps, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {includedItems.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              variant="service"
            />
          ))}
        </div>
      </Section>

      {/* ── MAINTENANCE PLANS OVERVIEW ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Maintenance Packages
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            Choose Your Maintenance Plan
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Flexible tiers designed to fit small businesses, growing teams, and enterprise sites alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-7 border flex flex-col gap-5 transition-all duration-300"
              style={{
                background: plan.featured
                  ? "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(168,85,247,0.12) 100%)"
                  : "rgba(255,255,255,0.03)",
                borderColor: plan.featured
                  ? "rgba(168,85,247,0.6)"
                  : "rgba(124,58,237,0.22)",
                boxShadow: plan.featured
                  ? "0 0 40px rgba(124,58,237,0.2)"
                  : "none",
                position: "relative",
              }}
            >
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  {plan.badge}
                </div>
              )}
              {!plan.featured && (
                <span
                  className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "#A855F7",
                    border: "1px solid rgba(168,85,247,0.3)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {plan.badge}
                </span>
              )}

              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#A855F7" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: plan.featured
                    ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                    : "rgba(124,58,237,0.25)",
                  border: plan.featured ? "none" : "1px solid rgba(124,58,237,0.4)",
                  boxShadow: plan.featured
                    ? "0 0 20px rgba(124,58,237,0.45)"
                    : "none",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-sm"
          style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}
        >
          Full pricing details and plan comparison available on our{" "}
          <Link href="/pricing" className="text-purple-400 underline underline-offset-2 hover:text-purple-300 transition-colors">
            Pricing page
          </Link>
          .
        </p>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            How Maintenance Works
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            A simple, transparent workflow from day one to ongoing care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl p-6 border flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 -right-3 w-6 h-px"
                    style={{ background: "rgba(124,58,237,0.4)" }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold"
                    style={{ color: "#7C3AED", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#A855F7" }} />
                  </div>
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
            );
          })}
        </div>
      </Section>

      {/* ── INTEGRATION WITH WEB DESIGN & DEV ── */}
      <Section background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Integrated Services
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Built by Us, Maintained by Us
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Website maintenance is a natural extension of Echo5 Digital&apos;s web design and
              development services. When we build your site, we know every component — which means
              maintenance is faster, smarter, and more effective than handing it off to a third party
              who&apos;s learning your site from scratch.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: Layers,
                  text: "Deep familiarity with your site architecture and custom code",
                },
                {
                  icon: Zap,
                  text: "Faster issue resolution without time lost onboarding or discovery",
                },
                {
                  icon: TrendingUp,
                  text: "Ongoing performance improvements aligned with your business goals",
                },
                {
                  icon: Users,
                  text: "A single trusted team across design, development, and maintenance",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                      style={{
                        background: "rgba(124,58,237,0.2)",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      <Icon size={15} style={{ color: "#A855F7" }} />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/web-design"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Web Design Services
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
                style={{
                  border: "2px solid rgba(124,58,237,0.45)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Web Development Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(124,58,237,0.25)" }}
          >
            <img
              src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Web developer maintaining a client website with code on screen"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ── TRUST INDICATORS ── */}
      <Section background="elevated" spacing="lg" maxWidth="2xl" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Why Echo5 Digital
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            You Can Count On Us
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Credibility signals that matter — uptime focus, clear response commitments, and a local team that understands your market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustIndicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl p-6 border text-center flex flex-col items-center gap-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.22)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={22} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.stat}
                  </div>
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.label}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local relevance block */}
        <div
          className="rounded-2xl p-6 md:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(124,58,237,0.28)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.45)",
              }}
            >
              <Globe size={22} color="#fff" />
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston, Sugar Land &amp; Businesses Nationwide
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital provides website maintenance to businesses in Houston and Sugar Land, Texas
                who need their sites kept current, secure, and performant without managing it themselves.
                Local businesses benefit from a Houston-based team that understands their market and can
                respond quickly to site issues that could impact local search visibility and customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  style={{ color: "#A855F7" }}
                >
                  <span>hello@echo5digital.com</span>
                </a>
                <a
                  href="tel:7134897004"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  style={{ color: "#A855F7" }}
                >
                  <span>713-489-7004</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" maxWidth="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Everything you need to know about website maintenance with Echo5 Digital.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: openFaq === index
                  ? "rgba(168,85,247,0.5)"
                  : "rgba(124,58,237,0.22)",
                background: openFaq === index
                  ? "rgba(124,58,237,0.08)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
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
                <div
                  id={`faq-answer-${index}`}
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
      </Section>

      {/* ── CTA / LEAD FORM ── */}
      <Section id="get-started" background="gradient" spacing="lg" maxWidth="2xl" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side copy */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Stop Worrying About Your Website?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Let Echo5 Digital handle ongoing maintenance so your site stays fast, secure, and
              working for your business every day. Get in touch to discuss a plan or schedule a
              free site audit.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {[
                "Free initial site audit with every engagement",
                "Flexible plans for any site size or budget",
                "Maintenance available for sites we didn't build",
                "Houston-based team, serving businesses nationwide",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A855F7" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(229,231,235,0.75)", fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div
              className="rounded-2xl p-5 border flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Contact Us Directly
              </p>
              {/* Email */}
              <a
                href="mailto:hello@echo5digital.com"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                hello@echo5digital.com
              </a>
              {/* Phone */}
              <a
                href="tel:7134897004"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                713-489-7004
              </a>
              <span
                className="text-sm"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                Houston / Sugar Land, Texas
              </span>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <ContactForm
              heading="Request a Maintenance Plan"
              subheading="Tell us about your site and what support you need. We'll respond within 24 hours."
              submitLabel="Get My Maintenance Plan"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </>
  );
}