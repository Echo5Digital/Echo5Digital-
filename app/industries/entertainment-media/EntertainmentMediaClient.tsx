"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { WordStagger, TiltCard, CountUp, ParallaxImage } from "@/components/ScrollFX";
import {
  Clapperboard,
  Search,
  FileText,
  Wrench,
  MapPin,
  Link2,
  BarChart3,
  Film,
  Tv,
  Mic,
  Radio,
  Music,
  Newspaper,
  Ticket,
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
    title: "Audience-Centric Keyword Research",
    desc: "Different entertainment and media audiences search in different ways. We conduct in-depth keyword research to identify the terms that resonate with your audience, from trending entertainment keywords to local SEO strategies for media companies.",
  },
  {
    icon: FileText,
    title: "Content Optimization",
    desc: "High-quality content is what keeps audiences engaged. We optimize your video descriptions, blog posts, and on-site content to achieve higher search engine rankings and increase audience engagement.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Entertainment Venues",
    desc: "We ensure entertainment venues, events, and local media outlets appear in relevant local search results, helping drive foot traffic and engagement from audiences searching nearby.",
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    desc: "We optimize your site for speed, mobile-friendliness, and secure browsing — enhancing the user experience for every visitor who lands on your pages.",
  },
  {
    icon: Link2,
    title: "Link Building",
    desc: "We develop robust backlink profiles from reputable entertainment and media sources to enhance your online credibility and authority.",
  },
  {
    icon: BarChart3,
    title: "Ongoing Analytics",
    desc: "Continuous monitoring and strategy adjustments based on real performance data and trends, so your SEO strategy keeps pace with your audience.",
  },
];

const mediaTypes = [
  {
    number: "01",
    icon: Film,
    title: "Production Companies",
    desc: "Production companies need visibility for their catalog of films, shows, and projects. We optimize for the searches decision-makers and audiences use to discover and evaluate your work.",
    image: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "02",
    icon: Tv,
    title: "TV & Streaming Networks",
    desc: "TV and streaming brands compete for attention in a crowded content landscape. We focus on content optimization and technical SEO to keep your shows and channels discoverable.",
    image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "03",
    icon: Mic,
    title: "Podcast Networks",
    desc: "Podcast networks rely on discoverability across search and platforms. We optimize show notes, episode pages, and site structure to help new listeners find your content.",
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "04",
    icon: Radio,
    title: "Radio & Broadcast Media",
    desc: "Radio and broadcast outlets depend heavily on local audiences. We prioritize local SEO and citation building to keep your station top of mind in your market.",
    image: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "05",
    icon: Music,
    title: "Music & Artist Brands",
    desc: "Artists and music brands need to rank for their name, releases, and tour dates. We build SEO strategies around releases, press coverage, and fan search behavior.",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "06",
    icon: Newspaper,
    title: "Media Agencies & Publishers",
    desc: "Media agencies and publishers compete on speed and authority. We combine technical SEO and link building to strengthen rankings for fast-moving editorial content.",
    image: "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "07",
    icon: Ticket,
    title: "Entertainment Venues & Events",
    desc: "Venues and event organizers need to convert local search interest into ticket sales. We optimize event pages and local listings to drive foot traffic and bookings.",
    image: "https://images.pexels.com/photos/258865/pexels-photo-258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "08",
    icon: Clapperboard,
    title: "Content Creators",
    desc: "Independent content creators need to stand out across search and social. We tailor keyword and content strategies to your niche audience and growth goals.",
    image: "https://images.pexels.com/photos/3945318/pexels-photo-3945318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
];

const industryStudies = [
  {
    number: "01",
    title: "Video's Share of Internet Traffic",
    stat: 80,
    detail: "Of all internet traffic is projected to be video content, underscoring the need for strong video and content optimization.",
    source: "Industry Research",
  },
  {
    number: "02",
    title: "Local Search Behavior in Media",
    stat: 46,
    detail: "Of all Google searches are seeking local information, making local SEO critical for venues, events, and local media outlets.",
    source: "Google",
  },
  {
    number: "03",
    title: "Mobile-Friendly Sites Drive Contact",
    stat: 61,
    detail: "Of mobile users are more likely to contact a local business if it has a mobile-friendly site, making technical SEO essential.",
    source: "Google",
  },
  {
    number: "04",
    title: "Search-Driven Discovery",
    stat: 93,
    detail: "Of online experiences begin with a search engine, highlighting how critical SEO is for entertainment and media discoverability.",
    source: "Higher Education Marketing",
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
    label: "Education SEO",
    href: "/industries/education",
    image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            Types of Entertainment &amp; Media Brands We Support
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
            Every media brand has a different audience, a different search behavior, and a different path to engagement.
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
                {mediaTypes.map((item, i) => (
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
                    {mediaTypes[activeIndex].number} / 08
                  </span>
                  <h3 className="text-2xl font-black mt-1" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F5F3FF" }}>
                    {mediaTypes[activeIndex].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling text column */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {mediaTypes.map((item, i) => {
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

export default function EntertainmentMediaClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroImageScale = useTransform(heroScroll, [0, 1], [1.05, 1.2]);

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="absolute inset-0">
          <motion.div className="absolute inset-0" style={{ y: heroImageY, scale: heroImageScale }}>
            <Image
              src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
              alt="Film production crew operating a camera on set"
              fill
              priority
              className="object-cover opacity-50"
            />
          </motion.div>
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
              <Clapperboard size={14} style={{ color: "#A855F7" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4A0FA" }}>
                SEO for Entertainment Companies &amp; Media
              </span>
            </div>
          </Reveal>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-[1.05]"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
          >
            <WordStagger text="Entertainment & Media SEO Built to" delay={0.1} />{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <WordStagger text="Boost Visibility" delay={0.5} className="inline" />
            </span>
          </h1>

          <Reveal variant="up" delay={0.2}>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(229,231,235,0.75)" }}>
              We provide specialized SEO services for entertainment
              and media brands across the USA, India, and beyond, helping
              production companies, media agencies, and content creators
              boost their online visibility with proven, audience-focused
              strategies.
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
                Reach Wider Audiences
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                A Strong Online Presence Wins the Audience
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                In today's crowded entertainment and media landscape,
                capturing audience attention requires a strong online
                presence. Viewers, listeners, and fans are searching for
                content, events, and brands long before they ever press play
                or buy a ticket.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                At Echo5 Digital, we specialize in Entertainment and Media
                SEO, using targeted, international strategies to enhance
                your brand's discoverability, grow audience engagement, and
                build your reputation across the industry.
              </p>
            </div>
          </Reveal>
          <ParallaxImage
            src="https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
            alt="Media team reviewing content on studio monitors"
            className="rounded-3xl aspect-[4/3]"
            style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
          />
        </div>
      </section>

      {/* ═══════════════════════ WHY SEO IS ESSENTIAL ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal variant="zoom">
            <Clapperboard size={36} style={{ color: "#A855F7", margin: "0 auto 1.5rem" }} />
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Why SEO Is Essential for Entertainment &amp; Media Brands
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
              The entertainment and media industry is highly competitive,
              with countless brands, creators, and productions vying for the
              same audience attention. To stand out and stay relevant, your
              brand needs to be easily discoverable online — ensuring your
              content is the top choice for audiences searching for
              entertainment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ STRATEGY (cards) ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Our Strategy
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Entertainment &amp; Media SEO Strategy
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
              A full-funnel approach built around how audiences actually discover, watch, and engage with content.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyPillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <TiltCard key={item.title} index={i} className="h-full">
                  <div
                    className="h-full p-6 rounded-2xl"
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
                </TiltCard>
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
              Ready to Enhance Your Online Presence?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
              Contact us now to learn how our specialized SEO services can help your entertainment and media brand thrive.
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

      {/* ═══════════════════════ TYPES OF MEDIA BRANDS — STICKY IMAGE + SCROLL ═══════════════════════ */}
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
                  <CountUp
                    target={item.stat}
                    suffix="%"
                    className="block text-4xl font-black my-3"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  />
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
                Ready to Boost Visibility and Grow Your Audience?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
                Book a free consultation and we'll show you exactly how an
                entertainment and media-specific SEO strategy can build
                credibility and attract more of the right audience.
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
              subheading="Tell us about your brand and goals. We'll respond within 24 hours."
              submitLabel="Request Free Consultation"
              showAppointmentNote
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
