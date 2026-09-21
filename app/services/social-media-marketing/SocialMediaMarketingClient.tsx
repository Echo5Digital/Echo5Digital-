"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { DiagonalWipe, BlurIn, TiltCard } from "@/components/ScrollFX";
import { FocusPullHero, PrismReveal, LavenderField, MagnetPop } from "@/components/SolutionsFX";
import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  BarChart3,
  Users,
  Hash,
  Megaphone,
  Target,
  Layers,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  FileText,
  TrendingUp,
  Search,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

export default function SocialMediaMarketingClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeRelatedRow, setActiveRelatedRow] = useState<number | null>(null);
  const [hoveredWorkflowPanel, setHoveredWorkflowPanel] = useState<"ai" | "human" | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pulseRelatedRow = (index: number) => {
    setActiveRelatedRow(index);
    window.setTimeout(() => {
      setActiveRelatedRow((current) => (current === index ? null : current));
    }, 900);
  };

  return (
    <main>
      {/* ── HERO — full-bleed background image that racks into focus on load ── */}
      <FocusPullHero
        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
        className="min-h-screen flex items-center pt-[72px]"
      >
        {/* Ambient glow orb on top of the photo overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Bot size={16} className="text-purple-400" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-purple-400"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              AI-Powered Social Media Marketing
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em", color: "#E5E7EB" }}
          >
            <PrismReveal text="Done-for-You Social Media" />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #A855F7, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <PrismReveal text="That Grows Your Brand" delay={0.6} />
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(229,231,235,0.9)", fontFamily: "Inter, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Echo5 Digital's AI-powered, fully managed social media service handles your content
            strategy, creation, scheduling, and community engagement — so you can focus on running
            your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Book a Free Demo
            </Link>
            <Link
              href="#services"
              className="px-10 py-5 rounded-full font-semibold text-white text-lg border border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore Services →
            </Link>
          </div>

          {/* Scroll cue */}
          <motion.div
            aria-hidden="true"
            className="mt-20 w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-white/80"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </FocusPullHero>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="transparent" spacing="md" withDivider className="!bg-white">
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "#EEECFB",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-1"
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
                style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-lg sm:text-xl font-bold mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
              >
                What Is Social Media Marketing &amp; What Does Echo5 Digital Provide?
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
              >
                Social media marketing is the strategic creation, publishing, and management of content
                across social platforms to build brand awareness, engage audiences, and drive business
                growth. Echo5 Digital provides AI-powered, done-for-you social media marketing for
                small and mid-sized businesses in Houston, Sugar Land, Texas, and nationally across the
                U.S. Services include content strategy, AI-assisted post creation, scheduling, community
                engagement, and performance reporting. The fully managed model means business owners
                receive a complete social media presence without handling it themselves.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRUST BAR ── */}
      <Section background="default" spacing="sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Bot size={20} />, label: "AI-Powered Content" },
            { icon: <Shield size={20} />, label: "Done-for-You Model" },
            { icon: <Globe size={20} />, label: "U.S. & Local Coverage" },
            { icon: <Clock size={20} />, label: "Consistent Publishing" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-xl"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <span style={{ color: "#A855F7" }}>{item.icon}</span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT IS SOCIAL MEDIA MARKETING ── */}
      <Section background="transparent" spacing="lg" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="a" />
        <div className="relative z-10">
          <DiagonalWipe className="max-w-2xl mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              What Is It?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Social Media Marketing, Explained Simply
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Social media marketing encompasses three core disciplines that work together to build
              and sustain a brand's presence across social platforms.
            </p>
          </DiagonalWipe>

          <div className="space-y-20 lg:space-y-28">
            {[
              {
                number: "01",
                label: "Organic Content Strategy",
                desc: "Crafting and publishing valuable posts that speak to your audience's interests, questions, and needs — without paid promotion. Done consistently, this builds brand awareness, earns trust, and turns followers into customers.",
                image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                alt: "Analytics dashboard showing organic social content performance",
              },
              {
                number: "02",
                label: "Community Management",
                desc: "Actively engaging with your audience: responding to comments, answering DMs, acknowledging mentions, and participating in conversations that matter to your brand. It transforms a passive audience into an active community.",
                image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                alt: "Hand scrolling through a social media feed on a phone",
              },
              {
                number: "03",
                label: "Paid Social Advertising",
                desc: "For businesses looking to accelerate results, paid social integrates targeted advertising into the mix, amplifying content to precisely defined audiences and driving measurable lead generation and sales.",
                image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                alt: "Creative designer producing ad content at a desk",
              },
            ].map((item, i) => (
              <BlurIn key={item.number} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div style={{ direction: "ltr" }}>
                    <span
                      className="block text-6xl sm:text-7xl font-black mb-4"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.number}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ direction: "ltr" }}>
                    <TiltCard index={i}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full rounded-2xl object-cover"
                        style={{
                          height: "320px",
                          border: "1px solid rgba(124,58,237,0.15)",
                          boxShadow: "0 25px 60px -15px rgba(91,63,163,0.35)",
                        }}
                      />
                    </TiltCard>
                  </div>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICES BREAKDOWN ── */}
      <Section background="transparent" spacing="lg" id="services" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="c" />
        <div className="relative z-10 text-center mb-16">
          <DiagonalWipe>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Our Services
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Social Media Marketing Services Breakdown
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Every component of your social media presence, handled by our AI-augmented expert team.
            </p>
          </DiagonalWipe>
        </div>

        {/* Horizontal scroll rail — drag or scroll sideways through each service */}
        <div className="relative z-10">
          {/* Edge fade hints, signaling more cards off-screen */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute left-0 top-0 bottom-6 w-16 pointer-events-none z-10"
            style={{ background: "linear-gradient(90deg, #fff 0%, transparent 100%)" }}
          />
          <div
            aria-hidden="true"
            className="hidden sm:block absolute right-0 top-0 bottom-6 w-16 pointer-events-none z-10"
            style={{ background: "linear-gradient(270deg, #fff 0%, transparent 100%)" }}
          />

          <div
            className="smm-rail flex gap-5 overflow-x-auto pb-6 px-4 sm:px-[max(1rem,calc((100vw-1280px)/2))]"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {[
              {
                icon: Target,
                title: "Platform Strategy",
                description:
                  "We identify which social platforms best serve your industry, target audience, and business goals — then build a tailored strategy for each.",
                color: "#7C3AED",
              },
              {
                icon: Calendar,
                title: "Content Calendar Development",
                description:
                  "A structured monthly content calendar keeps your brand publishing consistently, with planned themes, campaigns, and key dates aligned to your goals.",
                color: "#A855F7",
              },
              {
                icon: Bot,
                title: "AI-Assisted Content Creation",
                description:
                  "Our agentic AI generates post drafts, captions, and content ideas at scale, reviewed and refined by our human creative team for brand accuracy.",
                color: "#6366F1",
              },
              {
                icon: Clock,
                title: "Post Scheduling",
                description:
                  "Posts are scheduled at optimal times for maximum reach and engagement on each platform, removing the daily burden from your team.",
                color: "#C026D3",
              },
              {
                icon: MessageCircle,
                title: "Community Engagement",
                description:
                  "We monitor comments, respond to messages, and engage with your audience to build real relationships and foster an active community around your brand.",
                color: "#DB2777",
              },
              {
                icon: Hash,
                title: "Hashtag Strategy",
                description:
                  "Data-driven hashtag research and strategy expands organic reach, improves discoverability, and connects your content with the right audiences.",
                color: "#4F46E5",
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description:
                  "Monthly performance reports cover reach, engagement, follower growth, and content insights — so you always know what's working and what's next.",
                color: "#9333EA",
              },
              {
                icon: Megaphone,
                title: "Paid Social Integration",
                description:
                  "Seamlessly integrate boosted posts and paid social campaigns alongside organic content for a unified, high-impact social media strategy.",
                color: "#7C3AED",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex-shrink-0 w-[260px] sm:w-[290px] rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{
                    scrollSnapAlign: "start",
                    background: "#fff",
                    border: "1px solid rgba(124,58,237,0.12)",
                    boxShadow: "0 15px 40px -20px rgba(91,63,163,0.25)",
                  }}
                >
                  {/* Colored icon panel */}
                  <div
                    className="relative h-32 flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}99)` }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px",
                      }}
                    />
                    <span
                      className="absolute top-3 left-4 text-xs font-bold"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
                    >
                      <Icon size={26} color="#fff" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      className="text-base font-bold mb-2 leading-snug"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll hint */}
          <p
            className="text-center text-xs mt-2 sm:hidden"
            style={{ color: "#9CA0B5", fontFamily: "Inter, sans-serif" }}
          >
            ← Swipe to explore →
          </p>
        </div>
        <style jsx>{`
          .smm-rail::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </Section>

      {/* ── AI WORKFLOW ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            How Our AI Works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Echo5 Digital's AI Social Media Management Workflow
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Our agentic AI system works continuously — while our human creative team ensures every piece of content reflects your brand with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              key: "ai" as const,
              icon: Bot,
              title: "What Our AI Does",
              items: [
                "Generates content ideas based on industry trends and audience behavior",
                "Drafts post captions, headlines, and hashtag sets at scale",
                "Schedules content for optimal publish times on each platform",
                "Monitors engagement metrics and flags performance anomalies",
                "Analyzes competitor content patterns and audience response data",
                "Surfaces insights for content calendar refinement each month",
              ],
              image: "/group-graphic-designers-working-computer-90kb.jpg",
              imageAlt: "Agentic AI system processing social media data",
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              iconGradient: "linear-gradient(135deg, #7C3AED, #A855F7)",
            },
            {
              key: "human" as const,
              icon: Users,
              title: "What Our Human Team Does",
              items: [
                "Reviews and refines all AI-generated content for tone, accuracy, and brand voice",
                "Provides creative direction, visual storytelling, and campaign concepting",
                "Ensures brand alignment across every post, caption, and response",
                "Manages community engagement with empathy and strategic intent",
                "Interprets analytics and delivers actionable monthly strategy reviews",
                "Serves as your dedicated point of contact for feedback and approvals",
              ],
              image: "/futuristic-business-scene-with-ultra-modern-ambiance-80kb.jpg",
              imageAlt: "Creative team reviewing content strategy together",
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.2)",
              iconGradient: "linear-gradient(135deg, #A855F7, #7C3AED)",
            },
          ].map((panel) => {
            const otherKey = panel.key === "ai" ? "human" : "ai";
            const isFlipped = hoveredWorkflowPanel === otherKey;
            const Icon = panel.icon;
            return (
              <div
                key={panel.key}
                onMouseEnter={() => setHoveredWorkflowPanel(panel.key)}
                onMouseLeave={() => setHoveredWorkflowPanel(null)}
                style={{ perspective: 1600 }}
              >
                <div
                  className="relative rounded-2xl transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transitionTimingFunction: "cubic-bezier(0.4, 0.1, 0.2, 1)",
                    minHeight: "480px",
                  }}
                >
                  {/* Front face — the text list */}
                  <div
                    className="absolute inset-0 rounded-2xl p-6 sm:p-8"
                    style={{
                      background: panel.background,
                      border: panel.border,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: panel.iconGradient }}
                      >
                        <Icon size={18} color="#fff" />
                      </div>
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                      >
                        {panel.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {panel.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                          <span
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Back face — image shown when the OTHER panel is hovered */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{
                      border: panel.border,
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={panel.image}
                      alt={panel.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, rgba(10,8,26,0.35) 0%, rgba(10,8,26,0.85) 100%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div
                        className="inline-flex w-10 h-10 rounded-lg items-center justify-center mb-3"
                        style={{ background: panel.iconGradient }}
                      >
                        <Icon size={18} color="#fff" />
                      </div>
                      <p
                        className="text-lg font-bold"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#fff" }}
                      >
                        {panel.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── PLATFORMS ── */}
      <Section background="transparent" spacing="lg" withDivider className="!bg-white">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
          >
            Platform Coverage
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
          >
            Social Platforms Echo5 Digital Manages
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
            Platform selection is tailored to each client's industry, audience, and goals — not every business needs every platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Facebook size={28} />,
              platform: "Facebook",
              color: "#1877F2",
              rationale:
                "The largest social network by active users, Facebook is essential for local business visibility, community building, event promotion, and targeted paid advertising through Meta's ad platform. Ideal for B2C businesses reaching broad demographics in Houston and beyond.",
            },
            {
              icon: <Instagram size={28} />,
              platform: "Instagram",
              color: "#E1306C",
              rationale:
                "Instagram's visual-first format makes it powerful for brand storytelling, product showcasing, and reaching younger, highly engaged audiences. Stories, Reels, and carousel posts give businesses diverse content formats to maintain a dynamic, consistent presence.",
            },
            {
              icon: <Linkedin size={28} />,
              platform: "LinkedIn",
              color: "#0A66C2",
              rationale:
                "LinkedIn is the premier platform for B2B marketing, professional service firms, and thought leadership. It connects businesses with decision-makers, builds industry authority, and drives high-quality lead generation for service-based companies.",
            },
          ].map((item, i) => (
            <TiltCard key={item.platform} index={i}>
              <div
                className="group rounded-2xl p-6 sm:p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#EEECFB",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 45px -18px ${item.color}70`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}55`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.15)";
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}40` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
                >
                  {item.platform}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                  {item.rationale}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            How It Works: From Onboarding to Results
          </h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 15%, rgba(168,85,247,0.4) 85%, transparent)",
              top: "2.5rem",
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                icon: <Search size={20} />,
                title: "Onboarding & Brand Audit",
                description:
                  "We learn your business, voice, goals, and competitive landscape. A thorough brand audit establishes baseline positioning and platform presence.",
              },
              {
                step: "02",
                icon: <FileText size={20} />,
                title: "Content Strategy",
                description:
                  "We develop a tailored content strategy covering platform selection, content pillars, posting frequency, and campaign themes aligned to your goals.",
              },
              {
                step: "03",
                icon: <Bot size={20} />,
                title: "AI Content Creation",
                description:
                  "Our agentic AI drafts posts, captions, and hashtag sets. The human team reviews, refines, and approves every piece before it's scheduled.",
              },
              {
                step: "04",
                icon: <Calendar size={20} />,
                title: "Publishing & Engagement",
                description:
                  "Content goes live on schedule. Our team monitors engagement, responds to comments, and manages your community in real time.",
              },
              {
                step: "05",
                icon: <TrendingUp size={20} />,
                title: "Monthly Performance Review",
                description:
                  "Each month, you receive a performance report with reach, engagement, and growth data, plus a strategic review and next-month plan.",
              },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center gap-4">
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.35)",
                  }}
                >
                  <span style={{ color: "#A855F7" }}>{step.icon}</span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(229,231,235,0.68)", fontFamily: "Inter, sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DONE-FOR-YOU POSITIONING ── */}
      <Section background="transparent" spacing="lg" withDivider className="relative !bg-white overflow-hidden">
        <LavenderField variant="b" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <BlurIn>
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)" }}
              />
              <TiltCard index={0}>
                <div
                  className="rounded-[1.75rem] overflow-hidden"
                  style={{
                    border: "6px solid #fff",
                    boxShadow: "0 25px 60px -15px rgba(91,63,163,0.4)",
                    transform: "rotate(-2deg)",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/15467755/pexels-photo-15467755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Business owner freed from social media management tasks by a professional done-for-you service"
                    className="w-full object-cover"
                    style={{ height: "380px" }}
                  />
                </div>
              </TiltCard>

              {/* Floating "on autopilot" chip */}
              <MagnetPop index={1} className="absolute -bottom-5 -right-4 sm:-right-8">
                <div
                  className="rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #F3F0FD)",
                    boxShadow: "0 18px 40px -12px rgba(91,63,163,0.35)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 0 18px rgba(124,58,237,0.5)",
                    }}
                  >
                    <Zap size={17} color="#fff" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}>
                      Fully Managed
                    </p>
                    <p className="text-xs" style={{ color: "#6B4EF0" }}>Zero effort from you</p>
                  </div>
                </div>
              </MagnetPop>
            </div>
          </BlurIn>

          <DiagonalWipe>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Fully Managed
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              You Focus on Your Business.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We Handle Social Media. Entirely.
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Most business owners know they need a consistent social media presence — but
              creating content, scheduling posts, responding to comments, and tracking results
              takes hours every week. Echo5 Digital's done-for-you model removes that burden
              completely.
            </p>

            {/* Before → After contrast list */}
            <div className="space-y-3 mb-8">
              {[
                "Scrambling to find post ideas",
                "Inconsistent publishing schedules",
                "Ignored comment sections",
                "Guessing what's working",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span
                    className="text-sm line-through flex-shrink-0 w-[46%] sm:w-[42%] text-right"
                    style={{ color: "#B9B2C9", fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                  <ArrowRight size={14} className="flex-shrink-0" style={{ color: "#7C3AED" }} />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}
                  >
                    Handled
                  </span>
                </div>
              ))}
              <div
                className="flex items-center gap-3 mt-4 p-4 rounded-xl"
                style={{ background: "#EEECFB" }}
              >
                <CheckCircle2 size={18} style={{ color: "#7C3AED", flexShrink: 0 }} />
                <span className="text-sm font-semibold" style={{ color: "#15172B", fontFamily: "Inter, sans-serif" }}>
                  Just a professional, growing social presence — on autopilot
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get Started Today <ArrowRight size={16} />
            </Link>
          </DiagonalWipe>
        </div>
      </Section>

      {/* ── LOCAL RELEVANCE ── */}
      <Section background="transparent" spacing="md" withDivider className="!bg-white">
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{
            background: "#EEECFB",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Globe size={22} color="#fff" />
            </div>
          </div>
          <div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B" }}
            >
              Serving Houston, Sugar Land &amp; Businesses Across the U.S.
            </h2>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}
            >
              Echo5 Digital's social media marketing services help Houston and Sugar Land businesses
              maintain a consistent, professional presence on social platforms and engage local
              audiences effectively. Businesses in the Houston metropolitan area can reach Echo5
              Digital to get started with done-for-you social media management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Verified phone from business facts */}
              <a
                href="tel:+17134897004"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
              >
                <span>📞</span>
                <span>713-489-7004</span>
              </a>
              <a
                href="mailto:sales@echo5digital.com"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}
              >
                <span>✉️</span>
                <span>sales@echo5digital.com</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INTERNAL LINKS ── */}
      <Section background="transparent" spacing="lg" withDivider className="relative !bg-white overflow-hidden">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-1/4 right-0 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B4EF0", fontFamily: "Space Grotesk, sans-serif" }}>
            Related Services
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#15172B", letterSpacing: "-0.02em" }}
          >
            Explore More Echo5 Digital Services
          </h2>
          <p className="mt-3 max-w-xl text-base" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
            Combine social media marketing with these services for a complete digital growth strategy.
          </p>
        </div>

        <div className="relative z-10">
          {[
            {
              href: "/services/meta-ads",
              title: "Meta Ads",
              desc: "Paid social advertising on Facebook and Instagram to amplify reach and drive conversions.",
              image: "https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              alt: "Close-up of a smartphone screen showing social media app icons",
            },
            {
              href: "/services/content-marketing",
              title: "Content Marketing",
              desc: "SEO-driven blog content, articles, and resources that attract and educate your ideal audience.",
              image: "https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              alt: "Notebook with handwritten SEO notes resting on a keyboard",
            },
            {
              href: "/services/google-ads",
              title: "Google Ads",
              desc: "Pay-per-click campaigns targeting high-intent searchers ready to take action.",
              image: "https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              alt: "Office workspace with computer monitors displaying charts and graphs",
            },
            {
              href: "/ai-marketing-employee",
              title: "AI Marketing Employee",
              desc: "A fully autonomous AI marketing employee managing campaigns, content, and reporting for your business.",
              image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              alt: "Woman interacting with a robotic arm holding a red flower",
            },
          ].map((link, idx) => (
            <DiagonalWipe
              key={link.title}
              delay={idx * 0.12}
              className="border-t border-[rgba(124,58,237,0.15)] last:border-b"
            >
              <Link
                href={link.href}
                className="group flex items-center gap-4 sm:gap-6 md:gap-10 py-6 md:py-8"
                onTouchStart={() => pulseRelatedRow(idx)}
              >
                <BlurIn delay={idx * 0.12 + 0.1} className="flex-shrink-0">
                  <div
                    className={`relative w-20 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 ${
                      activeRelatedRow === idx ? "-translate-y-2" : ""
                    }`}
                    style={{ boxShadow: "0 12px 32px rgba(91,63,163,0.25)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <img
                      src={link.image}
                      alt={link.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Diagonal light sweep on hover (desktop) / tap (mobile) */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none ${
                        activeRelatedRow === idx ? "translate-x-full" : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
                      }}
                    />
                  </div>
                </BlurIn>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`font-bold tracking-tight transition-colors duration-300 group-hover:text-transparent ${
                        activeRelatedRow === idx ? "text-transparent" : ""
                      }`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                        color: "#15172B",
                        backgroundImage: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      {link.title}
                    </h3>
                    <span
                      className={`hidden md:flex flex-shrink-0 items-center gap-2 text-sm font-medium opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${
                        activeRelatedRow === idx ? "opacity-100 translate-x-0" : ""
                      }`}
                      style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
                    >
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
                    {link.desc}
                  </p>
                </div>
              </Link>
            </DiagonalWipe>
          ))}
        </div>
      </Section>

      {/* ── FAQ ACCORDION ── */}
      <Section background="elevated" spacing="lg" withDivider id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-4 text-base"
              style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
            >
              Common questions about Echo5 Digital's social media marketing services.
            </p>
          </div>

          <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  border: "1px solid rgba(124,58,237,0.22)",
                  background: openFaq === i ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.02)",
                  transition: "background 0.2s ease",
                }}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    itemProp="name"
                  >
                    {item.question}
                  </span>
                  <span style={{ color: "#A855F7", flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-hidden={openFaq !== i}
                  style={{
                    maxHeight: openFaq === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="px-5 pb-5 pt-1 text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.78)", fontFamily: "Inter, sans-serif" }}
                    itemProp="text"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LEAD FORM CTA ── */}
      <Section
        id="contact"
        background="transparent"
        spacing="xl"
        maxWidth="3xl"
        withDivider
        className="!bg-[#EEECFB]"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="flex-1 lg:pt-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#6B4EF0", fontFamily: "Inter, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="font-black leading-[1.04] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#15172B" }}
            >
              Ready for a Done-for-You
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Social Media Presence?
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>
              Fill out the form and our team will respond within 24 hours to schedule your free
              social media strategy consultation with Echo5 Digital.
            </p>
            <div className="space-y-2 text-sm">
              <p style={{ color: "#5B5F73", fontFamily: "Inter, sans-serif" }}>Or reach us directly:</p>
              <a href="tel:+17134897004" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                📞 713-489-7004
              </a>
              <a href="mailto:sales@echo5digital.com" className="block" style={{ color: "#4F32D9", fontFamily: "Inter, sans-serif" }}>
                ✉️ sales@echo5digital.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full">
            <ContactForm
              heading="Book a Social Media Demo"
              subheading="Tell us about your business and social media goals. We'll respond within 24 hours with a tailored strategy overview."
              submitLabel="Send My Request"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}