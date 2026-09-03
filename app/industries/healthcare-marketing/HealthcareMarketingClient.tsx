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
  Globe,
  TrendingUp,
  Shield,
  Bot,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Zap,
  Heart,
  FileText,
  BarChart3,
  Phone,
  Mail,
  Clock,
  Award,
  Eye,
  Sparkles,
  AlertCircle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FAQItem[];
}

export default function HealthcareMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6812510/pexels-photo-6812510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Modern healthcare clinic environment representing digital marketing for medical practices"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(17,13,46,0.85) 50%, rgba(10,15,30,0.95) 100%)",
            }}
          />
        </div>

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #A855F7, transparent)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Heart size={14} className="text-purple-400" />
            <span
              className="text-sm font-medium text-purple-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Healthcare Marketing Agency
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            AI-Powered Digital Marketing{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for Healthcare Providers
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Help patients find your practice first. Echo5 Digital delivers done-for-you healthcare
            marketing — Local SEO, Google Ads, reputation management, and sensitive content
            creation — all powered by AI with human oversight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_32px_rgba(124,58,237,0.75)]"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={18} />
              Book a Healthcare Marketing Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-purple-300 text-base border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore Services
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Healthcare Clients Served", value: "50+" },
              { label: "Avg. Local Ranking Lift", value: "Top 3" },
              { label: "AI + Human Reviewed Content", value: "100%" },
              { label: "Markets Served", value: "National" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={18} className="text-white" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-lg sm:text-xl font-bold text-white mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                What is Healthcare Digital Marketing?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Healthcare digital marketing helps medical practices, clinics, and healthcare providers
                attract patients through Local SEO, paid advertising, content marketing, and online
                reputation management. Echo5 Digital delivers AI-powered, done-for-you healthcare
                marketing services with human oversight to ensure sensitive and accurate content output.
                The agency supports healthcare providers in competing for local search visibility and
                building patient trust online. Echo5 Digital serves healthcare clients in Houston,
                Sugar Land, Texas and nationally across the U.S.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── HEALTHCARE MARKETING CHALLENGES ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Landscape
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            The Unique Challenges of Healthcare Marketing
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Healthcare marketing isn't like other industries. Attracting patients online requires
            navigating trust, sensitivity, competition, and reputation simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: "Patient Trust Requirements",
              description:
                "Patients research providers extensively before booking. Building credibility through accurate, empathetic content and strong reviews is non-negotiable.",
            },
            {
              icon: AlertCircle,
              title: "Sensitive Content Standards",
              description:
                "Healthcare content must be accurate, compassionate, and carefully worded. Misleading claims can erode patient trust and damage your reputation.",
            },
            {
              icon: MapPin,
              title: "Local Search Competition",
              description:
                "Clinics, specialists, and hospitals are all competing for the same local search queries. Winning in the Google Map Pack requires a dedicated Local SEO strategy.",
            },
            {
              icon: Star,
              title: "Online Reviews Matter",
              description:
                "A majority of patients read online reviews before choosing a provider. Managing and generating reviews is critical to attracting new patients consistently.",
            },
          ].map((challenge) => (
            <div
              key={challenge.title}
              className="rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <challenge.icon size={22} className="text-purple-400" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {challenge.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HEALTHCARE MARKETING SERVICES ── */}
      <Section id="services" background="gradient" spacing="lg" withDivider maxWidth="2xl">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            What We Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Healthcare Marketing Services
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A full suite of digital marketing services tailored specifically for medical practices,
            clinics, specialists, and healthcare organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={Search}
            title="Local SEO for Healthcare"
            description="Dominate local search results for patient queries like 'urgent care near me' or 'family doctor in Houston'. We optimize your website, citations, and content for maximum local visibility."
            variant="service"
            badge="Core Service"
          />
          <Card
            icon={Bot}
            title="AEO & GEO for Health Queries"
            description="Answer Engine Optimization and Generative Engine Optimization ensures your practice appears in AI-driven search results and featured snippets for health-related questions."
            variant="service"
            badge="AI-Powered"
          />
          <Card
            icon={TrendingUp}
            title="Google Ads Management"
            description="Targeted pay-per-click campaigns designed to reach patients actively searching for your services. We manage bidding, ad copy, landing pages, and conversion tracking."
            variant="service"
          />
          <Card
            icon={MapPin}
            title="Google Business Profile"
            description="Fully optimize and actively manage your Google Business Profile to rank in the Map Pack, improve patient trust signals, and convert profile views into booked appointments."
            variant="service"
            badge="High Impact"
          />
          <Card
            icon={FileText}
            title="Healthcare Content Marketing"
            description="Patient-friendly blog posts, service pages, and educational content that build authority, answer common questions, and attract organic traffic from health-conscious searchers."
            variant="service"
          />
          <Card
            icon={Star}
            title="Reputation Management"
            description="Systematic review generation, monitoring, and response strategies that protect your online reputation and build the patient trust signals needed to convert new leads."
            variant="service"
          />
          <Card
            icon={Globe}
            title="Social Media Marketing"
            description="Consistent, sensitive, and engaging social media content that positions your practice as a trusted community health resource across Facebook, Instagram, and beyond."
            variant="service"
          />
          <Card
            icon={Users}
            title="Healthcare Web Design"
            description="HIPAA-informed website design that prioritizes patient experience, accessibility, fast load times, and conversion optimization to turn visitors into booked patients."
            variant="service"
          />
          <Card
            icon={BarChart3}
            title="Reporting & Analytics"
            description="Transparent monthly reporting on traffic, rankings, leads, and ad performance so you always know exactly what your marketing investment is producing."
            variant="service"
          />
        </div>
      </Section>

      {/* ── AI MARKETING EMPLOYEE FOR HEALTHCARE ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our Model
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              The AI Marketing Employee for Healthcare Practices
            </h2>
            <p
              className="text-gray-300 text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's signature done-for-you AI Marketing Employee model is purpose-built for
              consistent, scalable marketing execution — without requiring your in-house team to manage it.
              For healthcare practices, this means your marketing runs continuously in the background
              while your team focuses on patient care.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: Bot,
                  title: "AI-Driven Content Production",
                  desc: "Our AI systems produce healthcare content at scale — blog posts, social updates, ad copy — consistently and on schedule.",
                },
                {
                  icon: Eye,
                  title: "Human Team Review",
                  desc: "Every piece of content is reviewed by our human team before publication to ensure accuracy, sensitivity, and brand alignment.",
                },
                {
                  icon: Zap,
                  title: "Always-On Execution",
                  desc: "Campaigns, content, and optimization tasks run continuously — no gaps, no downtime, no missed opportunities.",
                },
                {
                  icon: BarChart3,
                  title: "Clear Performance Reporting",
                  desc: "Regular reports keep your practice informed without requiring you to manage day-to-day marketing operations.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <item.icon size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/ai-marketing-employee"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Bot size={16} />
                Learn About the AI Marketing Employee
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="AI-powered marketing dashboard showing healthcare practice performance metrics"
              className="w-full h-full object-cover rounded-2xl"
              style={{ minHeight: "400px" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* ── CONTENT SENSITIVITY & COMPLIANCE AWARENESS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div
          className="rounded-2xl p-8 sm:p-10 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.04) 100%)",
            borderColor: "rgba(124,58,237,0.25)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  <Shield size={18} className="text-white" />
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-purple-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Content Sensitivity
                </p>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
              >
                Thoughtful Content for Healthcare Communication
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                Healthcare communication requires a higher standard of care than most industries.
                Echo5 Digital approaches all content creation with a sensitivity-first mindset — we
                understand that inaccurate or poorly worded content can impact patient decisions and
                your practice's reputation.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong className="text-gray-300">Important note:</strong> Echo5 Digital does not
                provide legal compliance guarantees. While we approach healthcare content creation
                with care for accuracy and communication standards, we strongly encourage all
                healthcare clients to have clinical staff and qualified advisors review medical
                claims and patient-facing content before publication.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle,
                  title: "Accuracy-First Content Creation",
                  desc: "We research claims carefully and write content that accurately represents your services without exaggeration.",
                },
                {
                  icon: Eye,
                  title: "Human Review Before Publication",
                  desc: "All AI-generated healthcare content is reviewed by a human team member before going live.",
                },
                {
                  icon: Users,
                  title: "Collaborative Client Review",
                  desc: "We encourage healthcare clients to have their clinical teams review all patient-facing medical content.",
                },
                {
                  icon: Heart,
                  title: "Empathetic Tone & Voice",
                  desc: "Content is written with empathy, clarity, and patient-first communication in mind at all times.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p
                      className="text-sm font-semibold text-white mb-0.5"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="elevated" spacing="lg" withDivider centered>
        <p
          className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          The Process
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
        >
          How It Works for Healthcare Clients
        </h2>
        <p
          className="text-gray-400 max-w-2xl mx-auto text-base mb-14"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          From your first conversation to ongoing reporting, here's how Echo5 Digital onboards and
          executes for healthcare practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {[
            {
              step: "01",
              icon: Users,
              title: "Discovery Call",
              desc: "We learn about your practice, specialty, service area, patient demographics, and marketing goals in a focused strategy session.",
            },
            {
              step: "02",
              icon: FileText,
              title: "Strategy & Setup",
              desc: "We build a custom healthcare marketing plan — covering Local SEO, content, ads, and reputation management — tailored to your market.",
            },
            {
              step: "03",
              icon: Zap,
              title: "Content & Campaign Launch",
              desc: "Our AI-powered systems begin executing: publishing content, launching ad campaigns, optimizing your Google Business Profile, and more.",
            },
            {
              step: "04",
              icon: BarChart3,
              title: "Reporting & Optimization",
              desc: "Monthly performance reports and ongoing optimizations ensure your marketing improves over time and continues delivering patient leads.",
            },
          ].map((step, index) => (
            <div key={step.step} className="relative">
              {index < 3 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px -ml-4"
                  style={{
                    background: "linear-gradient(90deg, rgba(124,58,237,0.5), transparent)",
                    width: "calc(100% - 3rem)",
                  }}
                />
              )}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <step.icon size={18} className="text-purple-400" />
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── RESULTS SECTION ── */}
      <Section background="gradient" spacing="lg" withDivider centered>
        <p
          className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Illustrative Results
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
        >
          What Healthcare Clients Can Expect
        </h2>
        <p
          className="text-gray-400 max-w-2xl mx-auto text-sm mb-2"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          The indicators below are illustrative of the types of results our healthcare marketing
          services are designed to drive. Individual results vary by market, specialty, and engagement scope.
        </p>
        <p
          className="text-purple-400/60 text-xs max-w-xl mx-auto mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          * Results are illustrative per project guidelines and represent the categories of improvement our services target, not guaranteed outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              metric: "Local Visibility",
              label: "Improved Google Map Pack rankings for core patient search queries",
              color: "#7C3AED",
            },
            {
              icon: Star,
              metric: "Review Growth",
              label: "Increased volume and quality of patient reviews on Google and Healthgrades",
              color: "#A855F7",
            },
            {
              icon: TrendingUp,
              metric: "Organic Traffic",
              label: "Higher search traffic to service and condition-specific pages over time",
              color: "#7C3AED",
            },
            {
              icon: Users,
              metric: "Patient Inquiries",
              label: "More qualified appointment requests and contact form submissions",
              color: "#A855F7",
            },
          ].map((result) => (
            <div
              key={result.metric}
              className="rounded-xl p-6 border text-left"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `rgba(124,58,237,0.15)`,
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <result.icon size={22} className="text-purple-400" />
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {result.metric}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="default" spacing="md" withDivider>
        <div
          className="rounded-2xl p-8 border flex flex-col lg:flex-row gap-8 items-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
            borderColor: "rgba(124,58,237,0.25)",
          }}
        >
          <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-2">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <MapPin size={24} className="text-white" />
            </div>
            <p
              className="text-xs font-semibold uppercase tracking-widest text-purple-400 text-center lg:text-left"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Serving the Area
            </p>
          </div>
          <div>
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Healthcare Marketing in Houston & Sugar Land, Texas
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Houston and Sugar Land, Texas are major healthcare markets with high competition among clinics,
              specialists, and medical practices. Echo5 Digital helps healthcare providers in the Houston area
              improve their local search rankings, manage patient-facing reviews, and run targeted Google Ads
              campaigns to reach patients actively searching for their services. We also serve healthcare
              organizations nationally across the U.S.
            </p>
            <div className="flex flex-wrap gap-4 mt-5">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-purple-400" />
                {/* Verified business phone */}
                <a
                  href="tel:7134897004"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  713-489-7004
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-purple-400" />
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  hello@echo5digital.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-purple-400" />
                <span className="text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                  Houston / Sugar Land, Texas
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="elevated" spacing="md" withDivider centered>
        <p
          className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Why Healthcare Providers Trust Echo5 Digital
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: Bot, label: "AI-Powered Execution" },
            { icon: Eye, label: "Human Content Review" },
            { icon: Award, label: "Healthcare Experience" },
            { icon: Shield, label: "Sensitivity-First Approach" },
            { icon: Clock, label: "Always-On Marketing" },
            { icon: Sparkles, label: "Transparent Reporting" },
          ].map((trust) => (
            <div key={trust.label} className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <trust.icon size={20} className="text-purple-400" />
              </div>
              <p
                className="text-xs text-center text-gray-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {trust.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="default" spacing="lg" withDivider maxWidth="lg">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Common Questions from Healthcare Clients
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-all duration-300"
              style={{
                borderColor: openFaq === index ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)",
                background: openFaq === index ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <span className="text-base font-semibold text-white pr-4">{item.question}</span>
                <span className="flex-shrink-0 text-purple-400">
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5">
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

      {/* ── CTA SECTION ── */}
      <Section background="gradient" spacing="xl" withDivider centered>
        <div
          className="rounded-3xl p-10 sm:p-14 border relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #7C3AED, transparent)" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Heart size={14} className="text-purple-400" />
              <span
                className="text-sm font-medium text-purple-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Free Strategy Call for Healthcare Providers
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Ready to Attract More Patients Online?
            </h2>
            <p
              className="text-gray-300 text-lg mb-10 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book a free healthcare marketing strategy call with Echo5 Digital. We'll audit your
              online presence, identify your biggest growth opportunities, and show you exactly how
              our AI-powered model can help your practice compete and grow.
            </p>

            <div className="max-w-2xl mx-auto text-left">
              <ContactForm
                heading="Book Your Free Healthcare Marketing Consultation"
                subheading="Tell us about your practice and goals. We'll follow up within 24 hours."
                submitLabel="Request My Free Strategy Call"
                showAppointmentNote={true}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}