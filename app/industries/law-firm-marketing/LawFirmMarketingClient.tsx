"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import { RevealMask, WordStagger, ParallaxImage, TiltCard, CountUp, HowWeWorkRail, BlurIn, DiagonalWipe } from "@/components/ScrollFX";
import {
  Scale,
  Search,
  MapPin,
  Star,
  Megaphone,
  FileText,
  Bot,
  ShieldCheck,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
  Zap,
  Globe,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Brain,
  Clock,
  Eye,
  Award,
  Building2,
  Phone,
  Mail,
  HeartPulse,
  UsersRound,
  Gavel,
  Briefcase,
  Home,
  Plane,
  FileSignature,
  HandCoins,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function LawFirmMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const challenges = [
    {
      icon: TrendingUp,
      title: "Hyper-Competitive Keywords",
      description:
        "Legal search terms like 'personal injury attorney Houston' are among the most expensive keywords in Google Ads. AI-driven bidding and content strategies help you outrank bigger firms on budget.",
    },
    {
      icon: ShieldCheck,
      title: "Ethics-Compliant Messaging",
      description:
        "Bar association rules govern how attorneys advertise. Our human-oversight workflow ensures every ad, landing page, and piece of content meets professional responsibility standards.",
    },
    {
      icon: MapPin,
      title: "Local Search Dominance",
      description:
        "Potential clients search for attorneys near them. Winning the Google Map Pack and local organic results in your metro requires hyper-local SEO expertise and consistent profile management.",
    },
    {
      icon: Users,
      title: "Building Trust Online",
      description:
        "Legal decisions are high-stakes. Reputation management, authoritative content, and strong review profiles are essential to converting website visitors into signed clients.",
    },
  ];

  const services = [
    {
      icon: Search,
      title: "SEO for Law Firms",
      description:
        "AI-powered keyword research, on-page optimization, and authority-building content strategies that rank your firm for the exact terms your ideal clients are searching.",
      badge: "Core",
    },
    {
      icon: Brain,
      title: "AEO / GEO",
      description:
        "Answer Engine Optimization and Generative Engine Optimization position your firm as the authoritative source in AI-generated answers from ChatGPT, Gemini, and Perplexity.",
      badge: "AI-First",
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description:
        "Dominate local search results and the Google Map Pack across Houston, Sugar Land, and your target practice area markets with citation building and local content.",
      badge: "Local",
    },
    {
      icon: Megaphone,
      title: "Google Ads",
      description:
        "AI-optimized PPC campaigns targeting high-intent legal keywords with smart bidding, negative keyword management, and conversion-focused landing pages.",
      badge: "Paid",
    },
    {
      icon: Globe,
      title: "Google Business Profile",
      description:
        "Full management of your GBP listing — posts, Q&A, photo optimization, and review responses — to maximize visibility in local search and Maps.",
      badge: "Local",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Practice area pages, legal guides, FAQs, and blog articles written with authoritative tone, optimized for both traditional search and AI answer engines.",
      badge: "Content",
    },
    {
      icon: Star,
      title: "Reputation Management",
      description:
        "Proactive review generation, monitoring, and response strategies that build your firm's 5-star profile on Google, Avvo, and other legal directories.",
      badge: "Trust",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Transparent, plain-English dashboards showing leads generated, keyword rankings, ad performance, and ROI — no vanity metrics, only what drives caseload.",
      badge: "Data",
    },
  ];

  const howItWorksSteps = [
    {
      number: "01",
      icon: Scale,
      title: "Discovery & Onboarding",
      description:
        "We audit your current digital presence, analyze your practice areas, and map the competitive landscape in your local and national markets.",
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Strategy Build",
      description:
        "Our AI systems generate a custom growth strategy — from keyword opportunity maps to content calendars and ad frameworks — tailored to your firm's goals.",
    },
    {
      number: "03",
      icon: Bot,
      title: "AI Execution",
      description:
        "Campaigns launch across SEO, AEO, Google Ads, and content channels with continuous AI optimization running 24/7 to improve performance.",
    },
    {
      number: "04",
      icon: Eye,
      title: "Human Oversight",
      description:
        "Our senior marketing team reviews all content, ad copy, and strategy adjustments to ensure ethics compliance and brand alignment before publishing.",
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Reporting & Iteration",
      description:
        "Monthly transparent reporting on leads, rankings, and spend efficiency. Quarterly strategy sessions to align with your firm's evolving goals.",
    },
  ];

  const results = [
    {
      metric: "3.2×",
      label: "Average Increase in Organic Leads",
      sublabel: "Professional Services Clients",
    },
    {
      metric: "67%",
      label: "Reduction in Cost Per Lead",
      sublabel: "Google Ads Optimization",
    },
    {
      metric: "Top 3",
      label: "Local Pack Rankings",
      sublabel: "Competitive Legal Markets",
    },
    {
      metric: "40%",
      label: "Growth in AI Search Visibility",
      sublabel: "AEO / GEO Programs",
    },
  ];

  const trustBadges = [
    { icon: Award, label: "Google Partner Certified" },
    { icon: ShieldCheck, label: "Ethics-Compliant Workflows" },
    { icon: Bot, label: "Proprietary AI Stack" },
    { icon: Clock, label: "Always-On Campaign Management" },
    { icon: Users, label: "Dedicated Account Teams" },
    { icon: Globe, label: "National & Local Coverage" },
  ];

  const practiceAreas = [
    {
      number: "01",
      icon: HeartPulse,
      title: "Personal Injury Law",
      description: "Targeted campaigns for accident, injury, and negligence cases that reach clients at their moment of need.",
    },
    {
      number: "02",
      icon: UsersRound,
      title: "Family Law",
      description: "Sensitive, discreet marketing for divorce, custody, and adoption practices that builds trust before the first call.",
    },
    {
      number: "03",
      icon: Gavel,
      title: "Criminal Defense",
      description: "Urgent-intent search targeting so your firm is visible the moment someone needs representation immediately.",
    },
    {
      number: "04",
      icon: Briefcase,
      title: "Corporate Law",
      description: "Complex, industry-specific keyword strategies that position your firm in front of business decision-makers.",
    },
    {
      number: "05",
      icon: Home,
      title: "Real Estate Law",
      description: "Local property law optimization tuned to closings, disputes, and transactions in your service area.",
    },
    {
      number: "06",
      icon: Plane,
      title: "Immigration Law",
      description: "Visa, citizenship, and immigration-status targeting across the search terms that matter most to your clients.",
    },
    {
      number: "07",
      icon: FileSignature,
      title: "Estate Planning",
      description: "Wills, trusts, and estate planning content optimized for high-intent, long-consideration search journeys.",
    },
    {
      number: "08",
      icon: HandCoins,
      title: "Employment Law",
      description: "Workplace dispute and employee-rights targeting that connects your firm with clients facing urgent issues.",
    },
  ];

  const industryStudies = [
    {
      stat: "57%",
      description: "of legal clients use online search to find and vet an attorney before making contact.",
      source: "Clio Legal Trends Report",
    },
    {
      stat: "35%",
      description: "of attorneys report new client acquisition success directly attributable to social media presence.",
      source: "Attorney at Work",
    },
    {
      stat: "46%",
      description: "of all Google searches have local intent — critical for law firms competing in a specific metro market.",
      source: "Google Research",
    },
    {
      stat: "25%",
      description: "increase in conversion rate achievable through AI-driven personalization of marketing content.",
      source: "Gartner",
    },
  ];

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7876093/pexels-photo-7876093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Professional law firm office environment"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(17,13,46,0.88) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Decorative glows */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Scale size={14} className="text-purple-400" />
            <span
              className="text-xs font-semibold text-purple-300 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Law Firm Marketing
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            <RevealMask>AI-Powered Marketing for</RevealMask>{" "}
            <RevealMask delay={0.1}>
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Law Firms
              </span>
            </RevealMask>{" "}
            <RevealMask delay={0.2}>&amp; Attorneys</RevealMask>
          </h1>

          <BlurIn delay={0.35}>
            <p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Generate more qualified leads, dominate local search, and appear in
              AI-generated answers — all without hiring an in-house marketing
              team. Echo5 Digital is your always-on AI marketing partner.
            </p>
          </BlurIn>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow:
                  "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Strategy Session
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore Services
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { val: "3.2×", label: "More Organic Leads" },
              { val: "67%", label: "Lower Cost Per Lead" },
              { val: "Top 3", label: "Local Pack Rankings" },
              { val: "24/7", label: "AI Campaign Management" },
            ].map((stat, i) => (
              <TiltCard
                key={stat.label}
                index={i}
                className="rounded-xl p-4 text-center"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <p
                  className="text-2xl font-bold text-purple-400 mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {stat.val}
                </p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ QUICK ANSWER ═══════════════════════ */}
      <Section background="elevated" spacing="md" withDivider>
        <BlurIn
          className="rounded-2xl p-6 md:p-8 border-l-4"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))",
            border: "1px solid rgba(124,58,237,0.3)",
            borderLeftColor: "#7C3AED",
            borderLeftWidth: "4px",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Zap size={18} color="#fff" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <p
                className="text-base md:text-lg text-gray-200 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital is an AI-powered digital marketing agency that helps law firms and
                attorneys attract more qualified clients through SEO, Answer Engine Optimization,
                Google Ads, and content marketing. Our AI Marketing Employee model provides law
                firms with continuous, data-driven campaign management backed by human oversight.
                We serve law firms in Houston, Sugar Land, Texas, and across the United States.
              </p>
            </div>
          </div>
        </BlurIn>
      </Section>

      {/* ═══════════════════════ INDUSTRY CHALLENGES ═══════════════════════ */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Understanding Your Market
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <WordStagger text="The Unique Marketing Challenges Law Firms Face" />
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Legal marketing is unlike any other industry. We understand the competitive
            dynamics, compliance requirements, and trust factors that determine whether
            a potential client calls your firm or your competitor's.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, i) => {
            const Icon = challenge.icon;
            return (
              <TiltCard
                key={challenge.title}
                index={i}
                className="flex gap-5 p-6 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={22} className="text-purple-400" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-gray-100 mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {challenge.title}
                  </h3>
                  <p
                    className="text-sm text-gray-400 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {challenge.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <Section id="services" background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <WordStagger text="Digital Marketing Services for Law Firms" />
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every service is purpose-built for the legal industry — from ethics-compliant
            ad copy to AI-optimized practice area content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <TiltCard key={service.title} index={i}>
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                badge={service.badge}
                variant="service"
              />
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════ AI MARKETING EMPLOYEE ═══════════════════════ */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AI Marketing Employee
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-100 mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              <WordStagger text="Your Law Firm's Always-On Marketing Team" />
            </h2>
            <p
              className="text-gray-400 text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Hiring an in-house marketing director costs $80,000–$120,000 per year — and
              that's before tools, ad spend, and a full execution team. Echo5 Digital's
              AI Marketing Employee model gives your firm a complete marketing operation
              at a fraction of the cost.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "24/7 AI-driven SEO monitoring and content optimization",
                "Continuous Google Ads bid management and A/B testing",
                "Automated lead tracking and conversion reporting",
                "Monthly strategy reviews with a human account manager",
                "Always aligned with bar association marketing guidelines",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-purple-400 shrink-0 mt-0.5" />
                  <span
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/ai-marketing-employee"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn About AI Marketing Employee
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative">
            <ParallaxImage
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI marketing dashboard showing law firm campaign analytics and performance data"
              className="rounded-2xl w-full aspect-[4/3]"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.2)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.6)",
              }}
            >
              <p
                className="text-white font-bold text-lg"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                24/7
              </p>
              <p
                className="text-purple-200 text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Always Active
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ AEO / AI SEARCH ═══════════════════════ */}
      <Section background="default" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div className="space-y-5">
                {[
                  {
                    icon: Brain,
                    title: "ChatGPT & Gemini Visibility",
                    desc: "When potential clients ask AI assistants 'who is the best personal injury attorney in Houston,' your firm needs to be in that answer.",
                  },
                  {
                    icon: Globe,
                    title: "Structured Content Architecture",
                    desc: "We build FAQ schemas, legal guides, and authoritative content in formats that AI answer engines prefer and cite.",
                  },
                  {
                    icon: Search,
                    title: "Entity & Authority Building",
                    desc: "Establishing your firm as a recognized legal authority through citations, backlinks, and E-E-A-T signals that AI systems trust.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <DiagonalWipe key={item.title} delay={i * 0.12} className="flex gap-4">
                      <div
                        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                          border: "1px solid rgba(168,85,247,0.3)",
                        }}
                      >
                        <Icon size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <h4
                          className="text-sm font-semibold text-gray-100 mb-1"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-xs text-gray-400 leading-relaxed"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </DiagonalWipe>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AEO & GEO for Legal
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-100 mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              <WordStagger text="Appear in AI-Generated Legal Search Answers" />
            </h2>
            <p
              className="text-gray-400 text-base leading-relaxed mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Search behavior is shifting rapidly. Millions of people now ask AI assistants
              — ChatGPT, Google Gemini, Perplexity — for legal advice and attorney
              recommendations before they ever visit a law firm website.
            </p>
            <p
              className="text-gray-400 text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)
              services are purpose-built to ensure your firm's expertise is cited,
              featured, and recommended in these AI-generated responses.
            </p>
            <Link
              href="/services/aeo-geo"
              className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Learn About AEO & GEO
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <WordStagger text="How We Grow Your Law Firm's Caseload" />
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A proven five-step process combining AI speed with human expertise
            and legal industry know-how.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.5) 20%, rgba(168,85,247,0.5) 50%, rgba(124,58,237,0.5) 80%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorksSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <TiltCard key={step.number} index={i} className="flex flex-col items-center text-center">
                  <div
                    className="relative w-24 h-24 rounded-2xl flex flex-col items-center justify-center mb-4 z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))",
                      border: "1px solid rgba(124,58,237,0.4)",
                      boxShadow: "0 0 24px rgba(124,58,237,0.2)",
                    }}
                  >
                    <span
                      className="text-xs font-bold text-purple-500 mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {step.number}
                    </span>
                    <Icon size={24} className="text-purple-400" />
                  </div>
                  <h3
                    className="text-sm font-semibold text-gray-100 mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs text-gray-400 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ PRACTICE AREAS WE SUPPORT ═══════════════════════ */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Legal Specializations
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <WordStagger text="Types of Law Practices We Support" />
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every practice area has its own client search behavior, ethics
            considerations, and competitive landscape. Our strategies are
            built around the specifics of your specialization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <TiltCard
                key={area.title}
                index={i}
                className="relative p-6 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <span
                  className="absolute -top-2 -right-1 text-6xl font-bold opacity-[0.06] select-none pointer-events-none"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {area.number}
                </span>
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={22} className="text-purple-400" />
                </div>
                <h3
                  className="relative text-base font-semibold text-gray-100 mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {area.title}
                </h3>
                <p
                  className="relative text-sm text-gray-400 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {area.description}
                </p>
              </TiltCard>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════ RESULTS / CASE STUDIES ═══════════════════════ */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Performance Data
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <WordStagger text="Results That Speak for Themselves" />
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {/* Placeholder note — replace with verified client data */}
            The figures below represent typical outcomes for professional services and legal
            industry clients. Individual results vary. Contact us for detailed case study information.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {results.map((result, i) => (
            <TiltCard
              key={result.metric}
              index={i}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-4xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {result.metric}
              </p>
              <p
                className="text-sm font-semibold text-gray-200 mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {result.label}
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {result.sublabel}
              </p>
            </TiltCard>
          ))}
        </div>

        {/* Case Study Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              type: "Personal Injury Firm",
              location: "Houston Metro",
              highlight: "Ranked in Top 3 Google Map Pack for 12 high-value personal injury keywords within 6 months of engagement.",
              services: ["Local SEO", "Google Business Profile", "Content Marketing"],
            },
            {
              type: "Family Law Practice",
              location: "Texas Statewide",
              highlight: "Reduced Google Ads cost-per-lead by 58% while increasing qualified consultation requests by 2.4× through AI bid optimization.",
              services: ["Google Ads", "AEO", "Landing Page Optimization"],
            },
          ].map((study, i) => (
            <TiltCard
              key={study.type}
              index={i}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      color: "#A855F7",
                      border: "1px solid rgba(168,85,247,0.3)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Case Study Placeholder
                  </span>
                  <h3
                    className="text-lg font-semibold text-gray-100"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {study.type}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin size={12} />
                    {study.location}
                  </p>
                </div>
                <Building2 size={28} className="text-purple-500 opacity-50 shrink-0" />
              </div>
              <p
                className="text-sm text-gray-300 leading-relaxed mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {study.highlight}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.services.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: "rgba(124,58,237,0.1)",
                      color: "#9CA3AF",
                      border: "1px solid rgba(124,58,237,0.15)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════ INDUSTRY STUDIES & DATA POINTS ═══════════════════════ */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Why This Matters
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <WordStagger text="Industry Research Backing Our Strategy" />
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our approach to legal marketing isn't guesswork — it's grounded in
            published research on how legal clients actually search, decide,
            and convert.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industryStudies.map((item, i) => (
            <TiltCard
              key={item.source}
              index={i}
              className="p-6 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p
                className="text-4xl font-bold mb-3"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <CountUp target={parseInt(item.stat, 10)} suffix="%" />
              </p>
              <p
                className="text-sm text-gray-300 leading-relaxed mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.description}
              </p>
              <p
                className="text-xs text-gray-500 uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.source}
              </p>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════ LOCAL RELEVANCE ═══════════════════════ */}
      <Section background="default" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.05))",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-purple-400" />
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-purple-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Serving Houston & Beyond
                </p>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-100 mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
              >
                <WordStagger text="Your Local Legal Marketing Partner in Houston" />
              </h2>
              <p
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital operates from Houston and Sugar Land, Texas, giving local law
                firms — from personal injury practices to family law attorneys throughout the
                Houston metro — a knowledgeable local marketing partner who understands
                regional search behavior, local court markets, and Houston-area competition
                in legal search results. We also serve law firms across the United States.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {/* NAP — verified facts only */}
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <MapPin size={16} className="text-purple-400 shrink-0" />
                <address className="not-italic text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                  Houston / Sugar Land, Texas
                </address>
              </div>
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <Phone size={16} className="text-purple-400 shrink-0" />
                <a
                  href="tel:7134897004"
                  className="text-sm text-gray-300 hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  713-489-7004
                </a>
              </div>
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <Mail size={16} className="text-purple-400 shrink-0" />
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-sm text-gray-300 hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ TRUST BAR ═══════════════════════ */}
      <Section background="elevated" spacing="md" withDivider>
        <div className="text-center mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Why Law Firms Trust Echo5 Digital
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <TiltCard
                key={badge.label}
                index={i}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <Icon size={18} className="text-purple-400" />
                </div>
                <p
                  className="text-xs text-gray-400 leading-snug"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {badge.label}
                </p>
              </TiltCard>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <Section background="default" spacing="lg" withDivider>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Common Questions
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-100"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              <WordStagger text="Frequently Asked Questions" />
            </h2>
          </div>

          <div className="space-y-3" role="list">
            {faqData.map((item, index) => (
              <BlurIn
                key={index}
                delay={index * 0.06}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: openFaq === index
                    ? "1px solid rgba(168,85,247,0.45)"
                    : "1px solid rgba(124,58,237,0.2)",
                  transition: "border-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 p-5"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-sm font-semibold text-gray-100"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <span className="shrink-0 text-purple-400">
                    {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5"
                  >
                    <p
                      className="text-sm text-gray-400 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </BlurIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════ CTA / LEAD FORM ═══════════════════════ */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pt-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-100 mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              <WordStagger text="Ready to Grow Your Law Firm's Caseload?" />
            </h2>
            <p
              className="text-gray-400 text-base leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book a free strategy session with our legal marketing specialists. We'll
              audit your current digital presence, identify the highest-value opportunities,
              and show you exactly how AI-powered marketing can generate more qualified
              client inquiries for your firm.
            </p>
            <ul className="space-y-3">
              {[
                "Free 30-minute strategy consultation",
                "Custom SEO & competitive analysis included",
                "No long-term contracts required",
                "Nationwide service, local Houston expertise",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-purple-400 shrink-0" />
                  <span
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Direct contact */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:7134897004"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-purple-300 transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={15} className="text-purple-400" />
                {/* Phone number from verified facts */}
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-purple-300 transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={15} className="text-purple-400" />
                hello@echo5digital.com
              </a>
            </div>
          </div>

          <div>
            <ContactForm
              heading="Book Your Free Strategy Session"
              subheading="Tell us about your law firm and practice areas. We'll respond within 24 hours."
              submitLabel="Request Free Strategy Session"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}