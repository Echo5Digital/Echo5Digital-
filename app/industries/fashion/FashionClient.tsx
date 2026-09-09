"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  Shirt,
  Search,
  FileText,
  Wrench,
  ShoppingBag,
  MapPin,
  Share2,
  Palette,
  MousePointerClick,
  Sparkles,
  Store,
  Layers,
  Gem,
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
    desc: "Fashion trends change quickly. We use advanced AI tools to conduct in-depth keyword research, identifying the most relevant and trending terms in the fashion industry to ensure your site is optimized for high-value traffic and conversions.",
  },
  {
    icon: FileText,
    title: "Content Optimization for Fashion Brands",
    desc: "We optimize product descriptions, blog posts, lookbooks, and landing pages — focusing on storytelling, brand identity, and SEO best practices to create narratives that resonate with your audience.",
  },
  {
    icon: Wrench,
    title: "Technical SEO for Fashion Websites",
    desc: "Our technical SEO services include optimizing your site's architecture, improving loading times, ensuring mobile responsiveness, and implementing AI-driven solutions for continuous performance enhancement.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Integration",
    desc: "We provide comprehensive e-commerce SEO services across platforms like Shopify, WooCommerce, Magento, or a custom platform, with optimization built around sales conversion.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Fashion Stores",
    desc: "For brick-and-mortar retailers, we optimize your Google My Business profile, build local citations, and use AI tools to analyze local search patterns to drive foot traffic.",
  },
  {
    icon: Share2,
    title: "Social Media Integration for Fashion Brands",
    desc: "We integrate your social media strategy with SEO, using AI to optimize social media campaigns across Instagram, Pinterest, and TikTok — where fashion audiences discover new brands.",
  },
  {
    icon: Palette,
    title: "Fashion Branding and Web Development",
    desc: "We create visually stunning, user-friendly websites with custom designs and AI-enhanced user experiences that reflect your brand's essence.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads and PPC Campaigns",
    desc: "Our Google Ads services help you capture immediate attention in the fashion market, using AI optimization to maximize ROI and conversions.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Fashion Marketing",
    desc: "Our solutions include personalized product recommendations, dynamic pricing strategies, and automated customer support — all designed to enhance the shopping experience.",
  },
];

const brandTypes = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "E-commerce Fashion Brands",
    desc: "Online-first apparel brands need SEO built around product discovery, category pages, and checkout conversion across every platform — Shopify, WooCommerce, Magento, or custom.",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "02",
    icon: Store,
    title: "Boutique & Retail Stores",
    desc: "Brick-and-mortar boutiques depend on local discovery. We focus on Google My Business optimization, local citations, and content that drives foot traffic from nearby shoppers.",
    image: "https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "03",
    icon: Layers,
    title: "Emerging & Independent Labels",
    desc: "Independent designers need storytelling-driven content and lookbook optimization that builds brand identity fast, competing for attention against established names.",
    image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "04",
    icon: Gem,
    title: "Menswear & Accessories",
    desc: "Menswear and accessory brands convert on craftsmanship and detail. We build content and technical SEO that showcases quality and drives high-intent purchase searches.",
    image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
];

const industryStudies = [
  {
    number: "01",
    title: "The Growth of AI in E-commerce",
    stat: "34.9%",
    detail: "CAGR expected in the global AI in e-commerce market from 2021 to 2028, according to Grand View Research.",
    source: "Grand View Research",
  },
  {
    number: "02",
    title: "Impact of SEO on E-commerce Sales",
    stat: "53.3%",
    detail: "Of all website traffic comes from organic search, according to a report by BrightEdge.",
    source: "BrightEdge",
  },
  {
    number: "03",
    title: "Local Search Behavior for Retail",
    stat: "76%",
    detail: "Of people who search for something nearby on their smartphone visit a related business within a day.",
    source: "Google",
  },
  {
    number: "04",
    title: "Personalization and Conversion Rates",
    stat: "80%",
    detail: "Of consumers are more likely to make a purchase when brands offer personalized experiences.",
    source: "Epsilon",
  },
];

const relatedIndustries = [
  {
    label: "eCommerce SEO",
    href: "/industries/ecommerce",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Professional Services SEO",
    href: "/industries/professional-services",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Real Estate SEO",
    href: "/industries/real-estate",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            Fashion & Apparel Brands We Support
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
            Every brand type has a different customer, a different discovery path, and a different reason to convert.
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
                {brandTypes.map((item, i) => (
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
                    {brandTypes[activeIndex].number} / 04
                  </span>
                  <h3 className="text-2xl font-black mt-1" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F5F3FF" }}>
                    {brandTypes[activeIndex].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling text column */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {brandTypes.map((item, i) => {
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

export default function FashionClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="Fashion model in an editorial studio shoot"
            fill
            priority
            className="object-cover opacity-90 lg:hidden"
          />
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="Flat lay of a jacket, shoes, and accessories styled together"
            fill
            priority
            className="hidden lg:block object-cover opacity-90"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,15,30,0.15) 0%, rgba(10,15,30,0.35) 55%, #0A0F1E 100%)" }} />
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
              <Shirt size={14} style={{ color: "#A855F7" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4A0FA" }}>
                Fashion &amp; Apparel SEO
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-[1.05]"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Elevate Your Brand and{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Stand Out
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(229,231,235,0.75)" }}>
              In the ever-evolving world of fashion and apparel, standing out
              from the crowd is essential to building a successful brand. At
              Echo5 Digital, we specialize in Fashion and Apparel SEO,
              utilizing advanced strategies and AI-driven tools to boost your
              brand's visibility, drive traffic, and increase conversions in
              a highly competitive market.
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
                Visibility in a Crowded Market
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Why SEO Matters for Fashion
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                The fashion industry is one of the most competitive online
                markets, with trends changing rapidly and consumers
                constantly searching for the latest styles. To succeed, your
                fashion brand needs to be easily discoverable by your target
                audience.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                With countless competitors vying for the same audience, your
                online presence must be impeccable — built to capture demand
                the moment a shopper starts searching.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Menswear shirt and leather shoes styled on a table"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ FASHION SEO STRATEGY (cards) ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Our Strategy
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Fashion &amp; Apparel SEO Strategy
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
              A full-funnel approach built around how shoppers discover, compare, and buy fashion online and in store.
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
              Ready to Elevate Your Fashion Brand?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
              Contact Echo5 Digital today to learn how our expert SEO and digital marketing strategies can help you boost your online presence and increase sales.
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

      {/* ═══════════════════════ BRAND TYPES — STICKY IMAGE + SCROLL ═══════════════════════ */}
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
                Ready to Stand Out in a Competitive Market?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
                Book a free consultation and we'll show you exactly how a
                fashion-specific SEO strategy can boost your visibility and
                increase sales.
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
