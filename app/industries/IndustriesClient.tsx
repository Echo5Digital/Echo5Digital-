"use client";

import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import {
  Stethoscope,
  Home,
  Scale,
  ShoppingCart,
  Car,
  Building2,
  Hammer,
  Dumbbell,
  Sparkles,
  MapPin,
  Brain,
  BarChart3,
  Shield,
  Users,
  Zap,
  TrendingUp,
  CheckCircle,
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
    label: "Home Services",
    icon: Home,
    href: "/industries/home-services",
    description: "Lead generation and local dominance for HVAC, plumbing, electrical, and more.",
    badge: "Local",
  },
  {
    label: "Roofing",
    icon: Building2,
    href: "/industries/roofing",
    description: "Seasonal campaign management and storm-response ad strategies for roofers.",
    badge: "Trades",
  },
  {
    label: "Construction",
    icon: Hammer,
    href: "/industries/construction",
    description: "Project pipeline growth and brand authority for general contractors.",
    badge: "Trades",
  },
  {
    label: "Fitness",
    icon: Dumbbell,
    href: "/industries/fitness",
    description: "Membership growth, class promotions, and social-first campaigns for gyms and studios.",
    badge: "Wellness",
  },
  {
    label: "Aesthetics",
    icon: Sparkles,
    href: "/industries/aesthetics",
    description: "Premium brand positioning and high-intent ad funnels for med spas and aesthetic clinics.",
    badge: "Beauty",
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

const trustSignals = [
  { value: "12+", label: "Industries Served" },
  { value: "AI-First", label: "Methodology" },
  { value: "Houston & National", label: "Service Coverage" },
  { value: "100%", label: "Strategy Customization" },
];

export default function IndustriesClient() {
  return (
    <main>
      {/* ── Hero ── */}
      <Section background="gradient" spacing="xl" centered id="hero">
        {/* Decorative glow blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(124,58,237,0.18)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Zap size={13} />
            AI-Powered Industry Specialists
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Marketing Built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Industry
            </span>
            , Not the Masses
          </h1>

          <p
            className="text-lg sm:text-xl max-w-2xl text-center leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.75)" }}
          >
            Echo5 Digital crafts AI-powered digital marketing strategies tailored to the
            specific buyer journeys, compliance requirements, and competitive realities of
            your industry. No generic playbooks — only precision growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="#industries-grid"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore Industries <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-white/10 active:scale-95"
              style={{
                border: "1px solid rgba(124,58,237,0.5)",
                color: "#E5E7EB",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative z-10 mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.2)" }}>
          <img
            src="https://images.pexels.com/photos/9480282/pexels-photo-9480282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Echo5 Digital team analyzing AI-driven marketing dashboards across multiple industries"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)",
            }}
          />
        </div>
      </Section>

      {/* ── Quick Answer Block ── */}
      <Section background="elevated" spacing="md" withDivider id="quick-answer">
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 0 40px rgba(124,58,237,0.08)",
          }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                border: "1px solid rgba(168,85,247,0.35)",
              }}
            >
              <Zap size={22} style={{ color: "#A855F7" }} />
            </div>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Quick Answer
            </p>
            <h2
              className="text-xl sm:text-2xl font-bold mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              What Industries Does Echo5 Digital Serve?
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.78)" }}
            >
              Echo5 Digital is an AI-powered digital marketing agency that serves small and
              mid-sized businesses across a wide range of industries, including{" "}
              <strong className="text-white">
                dental, healthcare, home services, roofing, construction, fitness, aesthetics,
                real estate, professional services, eCommerce, automotive, and law firms
              </strong>
              . Each industry receives a customized marketing strategy built on AI-driven SEO,
              paid ads, content, and web development. The agency serves clients in{" "}
              <strong className="text-white">Houston, Sugar Land, Texas</strong> and nationally
              across the U.S.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Industries Grid ── */}
      <Section background="default" spacing="lg" id="industries-grid">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            12 Verticals & Growing
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.label}
                href={industry.href}
                className="group relative flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
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
            );
          })}
        </div>
      </Section>

      {/* ── Why Industry-Specific Marketing Matters ── */}
      <Section background="elevated" spacing="lg" withDivider id="why-industry-specific">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Why It Matters
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Why Industry-Specific Marketing{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Outperforms Generic Campaigns
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.7)" }}
            >
              Generic digital marketing campaigns treat all businesses as if they operate in
              a vacuum. In reality, every industry has its own language, trust signals,
              regulatory guardrails, and conversion triggers. Applying a one-size-fits-all
              approach guarantees mediocre results at best — and wasted budget at worst.
            </p>

            <div className="flex flex-col gap-5">
              {whyPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))",
                        border: "1px solid rgba(168,85,247,0.25)",
                      }}
                    >
                      <Icon size={18} style={{ color: "#A855F7" }} />
                    </div>
                    <div>
                      <h3
                        className="text-base font-semibold mb-1"
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl opacity-40 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)",
                transform: "scale(0.85)",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/37685036/pexels-photo-37685036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Marketing strategist reviewing industry-tailored campaign performance data"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-5 -left-5 p-4 rounded-xl"
              style={{
                background: "rgba(10,15,30,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 30px rgba(124,58,237,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                className="text-2xl font-bold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                12+
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }}
              >
                Industry Verticals
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Our AI-Powered Approach ── */}
      <Section background="gradient" spacing="lg" id="ai-approach">
        <div className="text-center mb-12">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiApproachPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex flex-col p-6 rounded-2xl relative group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.22)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 40px rgba(124,58,237,0.28)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(168,85,247,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(124,58,237,0.22)";
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
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
            );
          })}
        </div>

        {/* Process visual */}
        <div className="mt-14 rounded-2xl overflow-hidden relative"
          style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 50px rgba(124,58,237,0.12)" }}>
          <img
            src="https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Echo5 Digital's AI-powered marketing automation workflow across industry verticals"
            className="w-full h-60 object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(to right, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.5) 50%, rgba(10,15,30,0.85) 100%)",
            }}
          >
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
          </div>
        </div>
      </Section>

      {/* ── Local Relevance ── */}
      <Section background="elevated" spacing="md" withDivider id="local-relevance">
        <div
          className="rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                border: "1px solid rgba(168,85,247,0.35)",
                boxShadow: "0 0 24px rgba(124,58,237,0.25)",
              }}
            >
              <MapPin size={28} style={{ color: "#A855F7" }} />
            </div>
          </div>
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Serving Houston &amp; Sugar Land, Texas
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.72)" }}
            >
              Houston and Sugar Land, Texas are home to a diverse business ecosystem spanning
              healthcare, home services, legal, real estate, and more. Echo5 Digital's
              industry-specific marketing programs are designed to help local businesses in
              these verticals compete effectively in their local markets and beyond.
            </p>
            <div className="flex flex-wrap gap-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <div className="flex items-center gap-2">
                <span style={{ color: "#A855F7" }}>📍</span>
                {/* NAP - verified facts only */}
                <span style={{ color: "rgba(229,231,235,0.75)" }}>Houston / Sugar Land, Texas</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#A855F7" }}>📞</span>
                <a
                  href="tel:7134897004"
                  style={{ color: "rgba(229,231,235,0.75)" }}
                  className="hover:text-white transition-colors"
                >
                  713-489-7004
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#A855F7" }}>✉️</span>
                <a
                  href="mailto:hello@echo5digital.com"
                  style={{ color: "rgba(229,231,235,0.75)" }}
                  className="hover:text-white transition-colors"
                >
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Trust Bar ── */}
      <Section background="default" spacing="md" id="trust-bar">
        <div className="text-center mb-10">
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
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="flex flex-col items-center justify-center p-6 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.22)",
              }}
            >
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
              <span
                className="text-xs uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.55)" }}
              >
                {signal.label}
              </span>
            </div>
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
          ].map((pill) => (
            <span
              key={pill}
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
          ))}
        </div>
      </Section>

      {/* ── CTA Section ── */}
      <Section background="gradient" spacing="xl" id="cta" withDivider>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Ready to Grow?
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Let&apos;s Build Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Industry-Specific
            </span>{" "}
            Growth Engine
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.65)" }}
          >
            Select your industry above or reach out directly. Our team will craft a
            tailored AI marketing strategy built around your specific vertical, goals, and market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Left: CTA options */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Browse by Industry
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.6)" }}
              >
                Explore tailored marketing programs built for your specific vertical.
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.slice(0, 6).map((ind) => (
                  <Link
                    key={ind.label}
                    href={ind.href}
                    className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:brightness-110"
                    style={{
                      background: "rgba(124,58,237,0.18)",
                      border: "1px solid rgba(168,85,247,0.28)",
                      color: "#C4B5FD",
                      fontFamily: "Inter, sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    {ind.label}
                  </Link>
                ))}
                {industries.slice(6).map((ind) => (
                  <Link
                    key={ind.label}
                    href={ind.href}
                    className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:brightness-110"
                    style={{
                      background: "rgba(124,58,237,0.18)",
                      border: "1px solid rgba(168,85,247,0.28)",
                      color: "#C4B5FD",
                      fontFamily: "Inter, sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    {ind.label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Prefer to Talk?
              </h3>
              <p
                className="text-sm mb-5"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(229,231,235,0.62)" }}
              >
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
                    boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                    fontFamily: "Inter, sans-serif",
                    textDecoration: "none",
                  }}
                >
                  Book a Free Strategy Call <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:7134897004"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white/10 active:scale-95"
                  style={{
                    border: "1px solid rgba(124,58,237,0.45)",
                    color: "#E5E7EB",
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

          {/* Right: Contact Form */}
          <div>
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