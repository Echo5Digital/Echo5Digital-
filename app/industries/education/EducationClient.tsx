"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  GraduationCap,
  Search,
  FileText,
  Wrench,
  MapPin,
  MessageSquare,
  Share2,
  Palette,
  MousePointerClick,
  Sparkles,
  Wrench as ToolIcon,
  Cog,
  Building2,
  Home as HomeIcon,
  HardHat,
  Globe,
  School,
  Languages,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

const strategyPillars = [
  {
    icon: Search,
    title: "AI-Powered Keyword Research for Schools and Colleges",
    desc: "Different types of educational institutions attract different students, each with unique search behaviors. We use advanced AI tools to conduct in-depth keyword research, identifying the most relevant and student-focused terms for your institution.",
  },
  {
    icon: FileText,
    title: "Content Optimization for Educational Institutions",
    desc: "High-quality, informative content is crucial in the education sector, where trust and authority are key. We optimize your program pages, admissions information, blog posts, and student testimonials to ensure they rank highly in search engine results.",
  },
  {
    icon: Wrench,
    title: "Technical SEO for School Websites",
    desc: "A seamless user experience is critical in the education sector. Our technical SEO services include optimizing your site's structure, improving loading times, ensuring mobile responsiveness, and implementing AI-driven solutions to monitor performance.",
  },
  {
    icon: MapPin,
    title: "Local SEO: Connecting with Students in Your Area",
    desc: "Many students search for educational opportunities close to home. We focus heavily on local SEO, optimizing your Google My Business profile, building local citations, and using AI tools to analyze local search patterns.",
  },
  {
    icon: MousePointerClick,
    title: "Lead Generation for Educational Institutions",
    desc: "Generating high-quality student leads is essential for growing your enrollment numbers. We implement strategies including optimized inquiry forms, AI-driven chatbots, and targeted calls-to-action to convert prospects into applicants.",
  },
  {
    icon: Share2,
    title: "Social Media Strategies for Schools and Colleges",
    desc: "Social media is a powerful tool for building your institution's brand and showcasing student successes. We integrate your social strategy with SEO across Instagram, Facebook, and LinkedIn to reach prospective students and their families.",
  },
  {
    icon: Palette,
    title: "School Branding and Web Development",
    desc: "Your website is often the first impression prospective students have of your institution. Our web development and branding services focus on creating professional, modern, user-friendly sites that capture the essence of your school.",
  },
  {
    icon: Sparkles,
    title: "Google Ads and PPC Campaigns for Schools",
    desc: "To complement your organic SEO efforts, our Google Ads services help you capture immediate attention in the education market, using AI to optimize campaigns in real-time and maximize ROI.",
  },
  {
    icon: MessageSquare,
    title: "AI-Enhanced Student Engagement",
    desc: "Our AI-driven solutions include personalized program recommendations, automated inquiry responses, and dynamic content that adapts to student behavior — all designed to enhance satisfaction and drive enrollment growth.",
  },
];

const institutionTypes = [
  {
    number: "01",
    icon: ToolIcon,
    title: "Technical Schools",
    desc: "Technical schools require targeted SEO strategies that focus on attracting students interested in specific trades or certifications. We optimize your site to capture search traffic related to technical programs.",
    image: "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "02",
    icon: Building2,
    title: "Community Colleges",
    desc: "Community colleges offer a wide range of programs and need to reach a diverse student population. We focus on local SEO, content that highlights your programs, and optimized service pages.",
    image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "03",
    icon: Cog,
    title: "Engineering Colleges",
    desc: "Engineering colleges attract students seeking specialized education in fields like computer science, civil engineering, and mechanical engineering. We implement SEO strategies built around high-converting keywords.",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "04",
    icon: HomeIcon,
    title: "Private Schools",
    desc: "Private schools often emphasize their unique educational philosophies, small class sizes, and personalized attention. We help attract students by optimizing for local searches and valuable curriculum content.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "05",
    icon: HardHat,
    title: "Vocational Schools",
    desc: "Vocational schools offer hands-on training for specific careers. We tailor our SEO strategies to reach individuals seeking career-focused education, ensuring your school is a top choice for the workforce-bound.",
    image: "https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "06",
    icon: Globe,
    title: "Online Colleges",
    desc: "Online education is growing rapidly, and online colleges need to be highly visible to attract students from across the country or globally. We optimize for broad, location-agnostic keywords and site authority.",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "07",
    icon: School,
    title: "K-12 Schools",
    desc: "K-12 schools must appeal to parents seeking the best educational opportunities for their children. We focus on local SEO, content that builds trust, and pages that highlight academics and student support.",
    image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "08",
    icon: Languages,
    title: "Language Schools",
    desc: "Language schools attract students looking to learn new languages for personal or professional reasons. We optimize your site to rank for language-learning searches and highlight your teaching methods.",
    image: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
];

const industryStudies = [
  {
    number: "01",
    title: "The Role of SEO in Education Enrollment",
    stat: "93%",
    detail: "Of online experiences begin with a search engine, highlighting the importance of effective SEO strategies in attracting students.",
    source: "Higher Education Marketing",
  },
  {
    number: "02",
    title: "Impact of Social Media on Student Decisions",
    stat: "55%",
    detail: "Of students said that social media influenced their decision to apply to a college, underscoring the need for integrated social and SEO strategies.",
    source: "Ruffalo Noel Levitz",
  },
  {
    number: "03",
    title: "Local Search Behavior in Education",
    stat: "46%",
    detail: "Of all Google searches are seeking local information, making local SEO critical for institutions focusing on students in specific areas.",
    source: "Google",
  },
  {
    number: "04",
    title: "AI in Education Marketing",
    stat: "25%",
    detail: "Increase in student conversion rates possible with AI-driven personalization, making it a critical component of modern education marketing.",
    source: "EdTech Magazine",
  },
];

const relatedIndustries = [
  {
    label: "Real Estate SEO",
    href: "/industries/real-estate",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Law Firm SEO",
    href: "/industries/law-firm-marketing",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Healthcare & Hospital SEO",
    href: "/industries/healthcare",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

function StickyScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal variant="up" className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
            Who We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Types of Educational Institutions We Support
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
            Every institution type has a different student, a different search behavior, and a different path to enrollment.
          </p>
        </Reveal>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sticky image column */}
          <div className="hidden lg:block relative">
            <div className="sticky top-28">
              <div
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden"
                style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 30px 70px rgba(124,58,237,0.2)" }}
              >
                {institutionTypes.map((item, i) => (
                  <Image
                    key={item.title}
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-opacity duration-700"
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                    priority={i === 0}
                  />
                ))}
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,15,30,0.85) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-bold" style={{ color: "#C4A0FA" }}>
                    {institutionTypes[activeIndex].number} / 08
                  </span>
                  <h3 className="text-2xl font-black mt-1" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F5F3FF" }}>
                    {institutionTypes[activeIndex].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling text column */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {institutionTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollTrackedCard key={item.title} index={i} onActive={setActiveIndex}>
                  <div className="lg:hidden relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5" style={{ border: "1px solid rgba(124,58,237,0.25)" }}>
                    <Image src={item.image} alt={item.title} fill sizes="100vw" className="object-cover" />
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
                  >
                    <Icon size={20} style={{ color: "#A855F7" }} />
                  </div>
                  <span className="text-xs font-bold" style={{ color: "#A855F7" }}>{item.number}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.65)" }}>
                    {item.desc}
                  </p>
                </ScrollTrackedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollTrackedCard({
  children,
  index,
  onActive,
}: {
  children: React.ReactNode;
  index: number;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });

  return (
    <motion.div
      ref={ref}
      className="py-4"
      onViewportEnter={() => onActive(index)}
      viewport={{ margin: "-40% 0px -40% 0px" }}
      style={{
        opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.35, 1, 1, 0.35]),
      }}
    >
      {children}
    </motion.div>
  );
}

export default function EducationClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="Teacher in front of a classroom whiteboard"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,15,30,0.4) 0%, rgba(10,15,30,0.65) 55%, #0A0F1E 100%)" }} />
        </div>
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)", filter: "blur(50px)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          <Reveal variant="zoom">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)" }}
            >
              <GraduationCap size={14} style={{ color: "#A855F7" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4A0FA" }}>
                SEO for Educational Institutions
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-[1.05]"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Education SEO Built to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Drive Enrollment
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(229,231,235,0.75)" }}>
              Whether you represent a technical school, college, engineering
              institute, or private school, we use targeted strategies and
              AI-driven tools to increase your institution's online visibility
              and build your reputation as a leader in education.
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-200 hover:brightness-110 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 28px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ OPENING VALUE PROP ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
                Attract Prospective Students
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                A Strong Online Presence Wins the Enrollment
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                In today's competitive education landscape, attracting
                prospective students requires a strong online presence.
                Potential students and their families are using search
                engines to find educational opportunities long before they
                ever visit a campus.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                At Echo5 Digital, we specialize in Education SEO, utilizing
                targeted strategies and AI-driven tools to increase your
                institution's online visibility, drive student enrollment,
                and build your reputation as a leader in education.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Teacher leading a classroom of students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ WHY SEO IS ESSENTIAL ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal variant="zoom">
            <GraduationCap size={36} style={{ color: "#A855F7", margin: "0 auto 1.5rem" }} />
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Why SEO Is Essential for Educational Institutions
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
              The education sector is highly competitive, with many schools
              and colleges competing for the attention of prospective
              students. To stand out and attract more enrollments, your
              institution needs to be easily discoverable online — ensuring
              your institution is the top choice for potential students
              seeking education.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ EDUCATION SEO STRATEGY (cards) ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Our Strategy
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Education SEO Strategy
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
              A full-funnel approach built around how students actually search, compare, and apply.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyPillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} variant="up" delay={(i % 3) * 0.06}>
                  <div
                    className="h-full p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
                    >
                      <Icon size={22} style={{ color: "#A855F7" }} />
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.6)" }}>
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA STRIP ═══════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Ready to Boost Enrollment?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
              Contact Echo5 Digital today to learn how our expert SEO and digital marketing strategies can help you grow your institution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-200 hover:brightness-110 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 28px rgba(124,58,237,0.6)" }}
            >
              Contact Echo5 Digital
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ TYPES OF INSTITUTIONS — STICKY IMAGE + SCROLL ═══════════════════════ */}
      <StickyScrollSection />

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal variant="up" className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              How It's Working
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="flex flex-col gap-3">
            {faqData.map((item, index) => (
              <Reveal key={index} variant="up" delay={index * 0.05}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: openFaq === index ? "1px solid rgba(168,85,247,0.45)" : "1px solid rgba(124,58,237,0.2)",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-base font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                      {item.question}
                    </span>
                    <span className="shrink-0" style={{ color: "#A855F7" }}>
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INDUSTRY STUDIES ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Why This Works
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Industry Studies &amp; Data Points
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryStudies.map((item, i) => (
              <Reveal key={item.number} variant="up" delay={i * 0.1}>
                <div
                  className="h-full p-6 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))", border: "1px solid rgba(124,58,237,0.25)" }}
                >
                  <span className="text-xs font-bold" style={{ color: "#A855F7" }}>{item.number}</span>
                  <p
                    className="text-4xl font-black my-3"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.stat}
                  </p>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(229,231,235,0.6)" }}>
                    {item.detail}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-wider font-semibold" style={{ color: "rgba(229,231,235,0.35)" }}>
                    {item.source}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ RELATED SERVICES ("OTHERS") — hover-swap image ═══════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "#FAFAFA" }}>
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0.12) 45%, transparent 75%)", filter: "blur(20px)" }}
        />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal variant="up">
              <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#7C3AED" }}>
                Others
              </p>
            </Reveal>
            <div className="flex flex-col gap-2">
              {relatedIndustries.map((industry, i) => (
                <Reveal key={industry.label} variant="left" delay={i * 0.08}>
                  <Link
                    href={industry.href}
                    className="group block"
                    onMouseEnter={() => setHoveredIndustry(i)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                    onFocus={() => setHoveredIndustry(i)}
                    onBlur={() => setHoveredIndustry(null)}
                  >
                    <h3
                      className="text-4xl sm:text-5xl font-black leading-[1.15] transition-colors duration-200"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#12101A" }}
                    >
                      <span className="group-hover:opacity-60 transition-opacity duration-200">
                        {industry.label}
                      </span>
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="zoom" delay={0.15}>
            <div
              className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-3xl overflow-hidden"
              style={{
                transform: "rotate(6deg)",
                boxShadow: "0 30px 70px rgba(124,58,237,0.25), 0 0 0 1px rgba(124,58,237,0.1)",
              }}
            >
              {relatedIndustries.map((industry, i) => (
                <Image
                  key={industry.label}
                  src={industry.image}
                  alt={industry.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover transition-opacity duration-500"
                  style={{ opacity: (hoveredIndustry ?? 0) === i ? 1 : 0 }}
                  priority={i === 0}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ CTA / CONTACT ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal variant="left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Ready to Boost Enrollment and Grow Your Institution?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
                Book a free consultation and we'll show you exactly how an
                education-specific SEO strategy can build trust and attract
                more of the right students.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:7134897004" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "rgba(229,231,235,0.7)" }}>
                  <Phone size={15} style={{ color: "#A855F7" }} />
                  713-489-7004
                </a>
                <a href="mailto:hello@echo5digital.com" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "rgba(229,231,235,0.7)" }}>
                  <Mail size={15} style={{ color: "#A855F7" }} />
                  hello@echo5digital.com
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <ContactForm
              heading="Book Your Free Consultation"
              subheading="Tell us about your institution and goals. We'll respond within 24 hours."
              submitLabel="Request Free Consultation"
              showAppointmentNote
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
