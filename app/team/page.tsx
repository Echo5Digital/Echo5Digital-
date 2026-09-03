import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team | The People Behind Echo5 Digital's AI System",
  description:
    "Meet the human strategists and specialists at Echo5 Digital who oversee AI-powered marketing execution, ensuring every client campaign is strategic, accountable, and results-focused.",
  alternates: {
    canonical: "https://echo5digital.com/team",
  },
};

const faqData = [
  {
    question: "Does Echo5 Digital have a real human team or is it all AI?",
    answer:
      "Echo5 Digital has a real human team of strategists, marketers, and developers who oversee all AI-generated outputs and maintain direct client relationships. The AI system handles execution at scale; humans handle strategy and quality control.",
  },
  {
    question: "Where is the Echo5 Digital team based?",
    answer:
      "The core team is based in Houston and Sugar Land, Texas. Operations support is provided from Kochi, Kerala, India.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function TeamPage() {
  return (
    <>
      <style>{`
        .team-card:hover {
          border-color: rgba(168,85,247,0.5) !important;
          box-shadow: 0 8px 40px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.08);
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
        ]}
      />
      <main>
        {/* Quick Answer */}
        <Section background="elevated" spacing="sm" withDivider>
          <div
            className="rounded-2xl border px-6 py-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
              borderColor: "rgba(124,58,237,0.3)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Quick Answer
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
            >
              The Echo5 Digital team is composed of human strategists, marketers, and
              developers who oversee and guide the agency&apos;s agentic AI marketing
              system. Team members are based across Houston and Sugar Land, Texas, and
              Kochi, Kerala, India, enabling broad execution capacity with local strategic
              leadership. Every client engagement is managed by real people who review AI
              outputs, set strategy, and maintain direct communication with clients.
            </p>
          </div>
        </Section>

        {/* Hero */}
        <Section background="gradient" spacing="xl" centered>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(168,85,247,0.35)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#A855F7" }}
                />
                The Humans Behind the AI
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Strategy, Accountability &amp;{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Human Oversight
                </span>
              </h1>
              <p
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "rgba(229,231,235,0.72)", fontFamily: "Inter, sans-serif" }}
              >
                Behind Echo5 Digital&apos;s AI-powered marketing engine is a team of real
                people — strategists, marketers, and developers who ensure every client
                campaign is accountable, intentional, and results-driven.
              </p>
              <div className="mt-2">
                <img
                  src="https://images.pexels.com/photos/8204311/pexels-photo-8204311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Echo5 Digital team members collaborating around screens in a modern office"
                  className="rounded-2xl w-full max-w-3xl mx-auto object-cover"
                  style={{
                    maxHeight: "420px",
                    border: "1px solid rgba(124,58,237,0.3)",
                    boxShadow: "0 0 60px rgba(124,58,237,0.25)",
                  }}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Team Philosophy */}
        <Section background="default" spacing="lg" withDivider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Our Philosophy
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Human-in-the-Loop by Design
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                At Echo5 Digital, AI is the engine — our team is the driver. We operate a
                human-in-the-loop model where every AI-generated output passes through
                expert review before it reaches a client. Our team sets the strategy, defines
                the goals, and holds final approval on all deliverables.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                This means clients get the best of both worlds: the speed and scale of
                AI-driven execution, combined with the judgment and accountability of
                experienced human marketers. No black-box campaigns — every decision is
                explainable, every result is owned by a real person.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Strategy Setting",
                  desc: "Humans define campaign objectives, target audiences, and KPIs.",
                },
                {
                  label: "AI Output Review",
                  desc: "Every piece of AI-generated content is reviewed before publishing.",
                },
                {
                  label: "Client Communication",
                  desc: "All client-facing communication is handled directly by team members.",
                },
                {
                  label: "Quality Assurance",
                  desc: "Ongoing monitoring ensures deliverables meet brand and quality standards.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 p-5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(124,58,237,0.22)",
                  }}
                >
                  <div
                    className="w-8 h-1 rounded-full mb-1"
                    style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7)" }}
                  />
                  <h3
                    className="text-sm font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team Member Cards */}
        <Section background="elevated" spacing="lg" withDivider>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-2xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Our People
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Meet the Echo5 Digital Team
              </h2>
              <p
                className="text-base"
                style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
              >
                A distributed team of specialists united by one mission: delivering
                AI-powered marketing results that are always human-accountable.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Marketing Strategist",
                  role: "Lead Strategist",
                  expertise: "Campaign Architecture, AI Oversight, Client Strategy",
                  location: "Houston, TX",
                },
                {
                  name: "SEO & AEO Specialist",
                  role: "Search & AI Visibility",
                  expertise: "Technical SEO, Answer Engine Optimization, Content Strategy",
                  location: "Sugar Land, TX",
                },
                {
                  name: "Paid Media Manager",
                  role: "Google & Meta Ads",
                  expertise: "PPC Campaigns, Audience Targeting, ROAS Optimization",
                  location: "Houston, TX",
                },
                {
                  name: "Web Developer",
                  role: "Development Lead",
                  expertise: "Next.js, Custom Programming, CRM Integration",
                  location: "Kochi, Kerala",
                },
                {
                  name: "Content & Social Specialist",
                  role: "Content Operations",
                  expertise: "AI Content Review, Social Media, Brand Voice",
                  location: "Kochi, Kerala",
                },
                {
                  name: "Data & Analytics Lead",
                  role: "Performance Analytics",
                  expertise: "Campaign Analytics, Reporting, AI Performance Review",
                  location: "Sugar Land, TX",
                },
              ].map((member) => (
                <div
                  key={member.role}
                  className="team-card group flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(124,58,237,0.22)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                      color: "#A855F7",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-base font-semibold"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                    >
                      {member.role}
                    </p>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="font-medium" style={{ color: "rgba(229,231,235,0.8)" }}>
                      Expertise:
                    </span>{" "}
                    {member.expertise}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full w-fit"
                    style={{
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.25)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#A855F7" }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                    >
                      {member.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p
              className="text-xs text-center"
              style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
            >
              Role titles reflect functional specializations. Team composition may evolve as the agency scales.
            </p>
          </div>
        </Section>

        {/* How Team and AI Work Together */}
        <Section background="gradient" spacing="lg" withDivider>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-2xl mx-auto text-center">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                The Operating Model
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                How Our Team &amp; AI Work Together
              </h2>
              <p
                className="text-base"
                style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
              >
                Our daily workflow is a deliberate collaboration between human expertise and
                AI execution speed — with people always in control of the outcomes.
              </p>
            </div>
            <div className="relative">
              {/* Connector line desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-10 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(168,85,247,0.4) 80%, transparent)",
                  top: "2.5rem",
                }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Strategy Input",
                    desc: "Human strategists define campaign goals, audience segments, messaging frameworks, and success metrics.",
                    icon: "🧠",
                  },
                  {
                    step: "02",
                    title: "AI Execution",
                    desc: "The agentic AI system generates content, schedules campaigns, adjusts bids, and executes across channels at scale.",
                    icon: "⚡",
                  },
                  {
                    step: "03",
                    title: "Human Review",
                    desc: "Team members review AI outputs for quality, brand alignment, and strategic accuracy before anything goes live.",
                    icon: "🔍",
                  },
                  {
                    step: "04",
                    title: "Iterate & Improve",
                    desc: "Analysts review performance data, identify opportunities, and feed updated strategic direction back into the AI system.",
                    icon: "📊",
                  },
                ].map((step) => (
                  <div
                    key={step.step}
                    className="relative flex flex-col gap-4 p-6 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(124,58,237,0.22)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                          color: "#fff",
                          fontFamily: "Space Grotesk, sans-serif",
                          boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                        }}
                      >
                        {step.step}
                      </div>
                      <span className="text-2xl" role="img" aria-hidden="true">
                        {step.icon}
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
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Locations & Operational Structure */}
        <Section background="default" spacing="lg" withDivider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/18441165/pexels-photo-18441165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Houston, Texas skyline representing Echo5 Digital's headquarters location"
                className="rounded-2xl w-full object-cover"
                style={{
                  maxHeight: "340px",
                  border: "1px solid rgba(124,58,237,0.3)",
                  boxShadow: "0 0 40px rgba(124,58,237,0.2)",
                }}
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Where We Operate
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Local Leadership, Global Capacity
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital&apos;s distributed model is designed to combine the strategic
                advantages of local market knowledge with the operational scale of an
                international team.
              </p>
              <div className="flex flex-col gap-4">
                <div
                  className="flex gap-4 p-5 rounded-xl"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.25)",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    🏢
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      Headquarters — Houston &amp; Sugar Land, Texas
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                    >
                      Core strategic leadership, client management, and business development.
                      Genuine local presence serving the Houston metro market and beyond.
                    </p>
                  </div>
                </div>
                <div
                  className="flex gap-4 p-5 rounded-xl"
                  style={{
                    background: "rgba(168,85,247,0.06)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    🌏
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      Operations Support — Kochi, Kerala, India
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                    >
                      Extended execution capacity, development support, and content operations
                      — enabling broader throughput without compromising local strategic leadership.
                    </p>
                  </div>
                </div>
              </div>
              <p
                className="text-sm"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                This structure allows Echo5 Digital to serve Houston-area businesses with
                authentic local understanding while maintaining the operational scale to
                execute campaigns efficiently.
              </p>
            </div>
          </div>
        </Section>

        {/* Trust Bar */}
        <Section background="elevated" spacing="md" withDivider>
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="flex flex-col gap-2">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Why Trust Echo5 Digital
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Methodology-Driven. AI-Native. Human-Accountable.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
              {[
                { label: "AI-First Operations", icon: "🤖" },
                { label: "Agentic Campaign Execution", icon: "⚙️" },
                { label: "Human Quality Control", icon: "✅" },
                { label: "Houston Local Expertise", icon: "📍" },
                { label: "Full-Funnel Strategy", icon: "🎯" },
                { label: "Transparent Reporting", icon: "📈" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span
                    className="text-xs font-medium text-center leading-snug"
                    style={{ color: "rgba(229,231,235,0.8)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                "Google Ads Certified",
                "Meta Business Partner",
                "Next.js & React",
                "AI Content Systems",
                "CRM Automation",
                "Schema & Structured Data",
                "Local SEO",
                "AEO / GEO",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.28)",
                    color: "#A855F7",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Local Relevance */}
        <Section background="default" spacing="md" withDivider>
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.06) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              📍
            </div>
            <div className="flex flex-col gap-2">
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Serving Houston &amp; the Greater Texas Market
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital&apos;s core team is based in{" "}
                <strong style={{ color: "#E5E7EB" }}>Houston and Sugar Land, Texas</strong>,
                making it a genuine local agency for Houston metro businesses that prefer working
                with people who understand the regional market. The distributed team model with
                operations in{" "}
                <strong style={{ color: "#E5E7EB" }}>Kochi, Kerala, India</strong>, gives the
                agency extended capacity without sacrificing local leadership.
              </p>
              <address
                className="not-italic text-xs mt-1 flex flex-wrap gap-x-5 gap-y-1"
                style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
              >
                <span>Houston / Sugar Land, Texas</span>
                {/* phone: 713-489-7004 */}
                <a
                  href="tel:7134897004"
                  className="hover:text-purple-400 transition-colors"
                  style={{ color: "rgba(229,231,235,0.5)" }}
                >
                  713-489-7004
                </a>
                <a
                  href="mailto:hello@echo5digital.com"
                  className="hover:text-purple-400 transition-colors"
                  style={{ color: "rgba(229,231,235,0.5)" }}
                >
                  hello@echo5digital.com
                </a>
              </address>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section background="elevated" spacing="lg" withDivider>
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col gap-2 text-center">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                FAQ
              </p>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Common Questions About Our Team
              </h2>
            </div>
            <dl className="flex flex-col gap-4">
              {faqData.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(124,58,237,0.22)",
                  }}
                >
                  <dt
                    className="text-base font-semibold mb-3"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {item.question}
                  </dt>
                  <dd
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(229,231,235,0.68)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* CTA – Meet the Team in a Demo */}
        <Section background="gradient" spacing="lg" centered withDivider>
          <div className="flex flex-col gap-8 items-center max-w-2xl mx-auto">
            <div className="flex flex-col gap-3 text-center">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Ready to Connect?
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Meet the Team in a Strategy Demo
              </h2>
              <p
                className="text-base"
                style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                Book a free strategy call to speak directly with an Echo5 Digital team member.
                We&apos;ll walk you through our AI marketing system, show you how human oversight
                works in practice, and discuss what results look like for your business.
              </p>
            </div>
            <TeamClient />
          </div>
        </Section>
      </main>
      <Footer
        address="Houston / Sugar Land, Texas"
        phone="713-489-7004"
        email="hello@echo5digital.com"
      />
    </>
  );
}