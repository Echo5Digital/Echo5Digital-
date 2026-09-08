"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  Plane,
  Search,
  FileText,
  Wrench,
  ShoppingBag,
  MapPin,
  Share2,
  Palette,
  MousePointerClick,
  Sparkles,
  Hotel,
  Landmark,
  Building2,
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
    title: "AI-Driven Keyword Research",
    desc: "The travel and tourism industry is constantly evolving, with seasonal trends, emerging destinations, and shifting traveler preferences. We use advanced AI tools to conduct in-depth keyword research, identifying the most relevant and profitable terms for your business.",
  },
  {
    icon: FileText,
    title: "Content Optimization for Travel and Tourism",
    desc: "We optimize your travel blogs, destination guides, service pages, and booking platforms to ensure they rank highly in search engine results. Our content strategies focus on storytelling, destination appeal, and SEO best practices.",
  },
  {
    icon: Wrench,
    title: "Technical SEO for Travel Websites",
    desc: "Our technical SEO services include optimizing your site's architecture, improving loading times, ensuring mobile responsiveness, and implementing AI-driven solutions to monitor and enhance site performance continuously.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Integration for Bookings",
    desc: "For travel businesses that offer online bookings, we provide comprehensive e-commerce SEO services — setting up secure payment systems, optimizing booking pages, and integrating AI-driven personalization to increase conversions.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Tourism Businesses",
    desc: "We optimize your Google My Business profile, build local citations, and use AI tools to analyze local search patterns, ensuring your business appears in local search results and reaches travelers interested in your destination.",
  },
  {
    icon: Share2,
    title: "Social Media Integration for Travel Brands",
    desc: "We integrate your social media strategy with SEO, using AI to optimize social media campaigns, analyze audience behavior, and drive targeted traffic to your site across Instagram, Pinterest, and YouTube.",
  },
  {
    icon: Palette,
    title: "Travel Branding and Web Development",
    desc: "Our web development and branding services focus on creating visually stunning, user-friendly websites that capture the essence of your brand and the destinations you promote.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads and PPC Campaigns",
    desc: "To complement your organic SEO efforts, we use AI to optimize PPC campaigns in real-time, ensuring your ads reach the right audience, maximize ROI, and drive bookings.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Travel Marketing",
    desc: "Our AI-driven solutions include personalized travel recommendations, dynamic pricing strategies, and automated customer support, all designed to enhance the traveler's experience and drive bookings.",
  },
];

const travelCategories = [
  {
    number: "01",
    icon: Plane,
    title: "Flights & Booking Platforms",
    desc: "Booking-driven travel businesses need SEO built around real-time search intent, secure payment flows, and conversion-optimized booking pages that turn browsers into confirmed travelers.",
    image: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "02",
    icon: Hotel,
    title: "Hotels & Resorts",
    desc: "Hospitality brands compete on experience and location. We build local SEO and destination content that puts your property in front of travelers planning their stay.",
    image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "03",
    icon: Building2,
    title: "Destinations & City Breaks",
    desc: "Destination marketing organizations and city-break operators need content that captures the appeal of a place and ranks for the broad, discovery-stage searches travelers start with.",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "04",
    icon: Landmark,
    title: "Tours & Cultural Experiences",
    desc: "Tour operators and experience providers convert on storytelling and trust. We build content and local SEO that showcases your offerings to travelers ready to book an experience.",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
];

const industryStudies = [
  {
    number: "01",
    title: "The Role of SEO in Travel and Tourism",
    stat: "67%",
    detail: "Of travelers start their journey with a search engine, highlighting the importance of effective SEO strategies in attracting global audiences and driving bookings.",
    source: "Phocuswright",
  },
  {
    number: "02",
    title: "Impact of Social Media on Travel Decisions",
    stat: "52%",
    detail: "Of travelers said social media influenced their travel plans, while 70% use social media to share their experiences.",
    source: "Expedia",
  },
  {
    number: "03",
    title: "Global Growth in Online Travel Bookings",
    stat: "$833B",
    detail: "Expected size of the global online travel booking market by 2023, emphasizing the importance of optimizing travel websites for global reach.",
    source: "Statista",
  },
  {
    number: "04",
    title: "AI in Travel Marketing",
    stat: "20%",
    detail: "Increase in engagement and conversion rates possible with AI-driven personalization in the travel industry.",
    source: "Skift",
  },
];

const relatedIndustries = [
  {
    label: "Education SEO",
    href: "/industries/education",
    image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Automotive SEO",
    href: "/industries/automotive",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Law Firm SEO",
    href: "/industries/law-firm-marketing",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Fitness & Wellness SEO",
    href: "/industries/fitness",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            Travel & Tourism Businesses We Support
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
            Every travel business has a different traveler, a different booking window, and a different reason to convert.
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
                {travelCategories.map((item, i) => (
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
                    {travelCategories[activeIndex].number} / 04
                  </span>
                  <h3 className="text-2xl font-black mt-1" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F5F3FF" }}>
                    {travelCategories[activeIndex].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling text column */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {travelCategories.map((item, i) => {
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

export default function TravelClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="Hot air balloons flying over a scenic valley at sunrise"
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
              <Plane size={14} style={{ color: "#A855F7" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4A0FA" }}>
                Travel &amp; Tourism SEO
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-[1.05]"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Attract Global Audiences with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Proven SEO
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(229,231,235,0.75)" }}>
              In the dynamic world of travel and tourism, reaching a global
              audience and converting interest into bookings is crucial for
              success. Echo5 Digital specializes in Travel and Tourism SEO,
              utilizing advanced strategies and AI-driven tools to enhance
              your online presence, attract global audiences, and increase
              bookings.
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
                Discoverable to Global Travelers
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Why SEO Matters for Travel Businesses
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                The travel and tourism industry is highly competitive, with
                countless businesses offering similar services and
                experiences. To stand out, your website needs to be easily
                discoverable by potential travelers, whether they're
                searching for destinations, hotels, tours, or travel
                services.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                SEO for travel agencies and tourism businesses is essential
                for improving your site's visibility in search engine
                results, optimizing user experience, and ensuring that your
                offerings reach the right audience at the right time.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Travel essentials including passport, camera, and sunglasses"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ TRAVEL & TOURISM SEO STRATEGY (cards) ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Our Strategy
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Travel &amp; Tourism SEO Strategy
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
              A full-funnel approach built around how travelers discover, plan, and book.
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
              Ready to Attract Global Audiences?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
              Contact Echo5 Digital today to learn how our expert SEO and digital marketing strategies can help you boost your online presence and grow your business.
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

      {/* ═══════════════════════ TRAVEL CATEGORIES — STICKY IMAGE + SCROLL ═══════════════════════ */}
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
                Ready to Grow Your Bookings?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
                Book a free consultation and we'll show you exactly how a
                travel-specific SEO strategy can boost your visibility and
                attract more global travelers.
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
              subheading="Tell us about your business and goals. We'll respond within 24 hours."
              submitLabel="Request Free Consultation"
              showAppointmentNote
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
