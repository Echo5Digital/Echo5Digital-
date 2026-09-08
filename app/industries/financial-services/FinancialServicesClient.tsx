"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  Landmark,
  Search,
  FileText,
  Wrench,
  MapPin,
  Link2,
  Share2,
  MousePointerClick,
  BarChart3,
  Banknote,
  Users,
  TrendingUp,
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
    title: "Compliance-Focused Keyword Research",
    desc: "In the financial services industry, compliance is key. Our team conducts thorough keyword research, ensuring that the terms we target are compliant with industry regulations while effectively attracting your target audience — including financial advisor SEO and banking SEO strategies.",
  },
  {
    icon: FileText,
    title: "Content Marketing for Trust and Engagement",
    desc: "High-quality, compliant content is essential for building trust in the financial sector. We optimize your website's content, including blog posts, service pages, and educational resources, emphasizing transparency, expertise, and compliance.",
  },
  {
    icon: Wrench,
    title: "Technical SEO for Financial Services Websites",
    desc: "A secure, fast, and mobile-friendly website is crucial in the financial industry. Our technical SEO services focus on optimizing your site's architecture, ensuring data security, improving loading times, and enhancing mobile responsiveness.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Financial Institutions",
    desc: "For financial services that serve specific geographic areas, local SEO is critical. We optimize your Google My Business profile, build local citations, and encourage client reviews to help you attract clients in your target regions.",
  },
  {
    icon: Link2,
    title: "Link Building and Authority Building",
    desc: "Establishing your financial firm as a trusted authority is essential for SEO success. We build high-quality backlinks from reputable financial publications, industry directories, and educational resources.",
  },
  {
    icon: Share2,
    title: "Social Media Integration for Financial Services",
    desc: "Social media can play a significant role in building trust and engaging with clients. We help integrate your social media strategy with SEO across LinkedIn and Twitter, where financial professionals and clients are most active.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads and PPC Campaigns",
    desc: "To complement your organic SEO efforts, our Google Ads services help you capture immediate attention in the financial sector, targeting the right keywords and audience to drive qualified traffic and generate leads quickly.",
  },
  {
    icon: BarChart3,
    title: "Ongoing Analysis and Optimization",
    desc: "SEO in the financial industry is an ongoing process that requires continuous monitoring and adjustment. We track key metrics, assess the effectiveness of your strategy, and make data-driven adjustments to keep you competitive.",
  },
];

const institutionTypes = [
  {
    number: "01",
    icon: Landmark,
    title: "Banks",
    desc: "Retail and community banks need visibility for everyday banking searches while maintaining the compliance and trust signals regulators and customers expect. We build SEO programs around both.",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "02",
    icon: Banknote,
    title: "Credit Unions",
    desc: "Credit unions compete on community trust and member value. We focus on local SEO and content that highlights membership benefits, rates, and the personal service that sets you apart from big banks.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "03",
    icon: Users,
    title: "Financial Advisors",
    desc: "Prospective clients vet advisors carefully before ever picking up the phone. We build authority-driven content and local SEO that positions individual advisors and RIAs as the trustworthy, qualified choice.",
    image: "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Investment Firms",
    desc: "Investment firms and wealth managers need SEO built around long, high-consideration buying cycles. We target high-intent keywords and build the credibility content sophisticated investors expect.",
    image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
];

const industryStudies = [
  {
    number: "01",
    title: "Growth in Digital Banking",
    stat: "76%",
    detail: "Of banking customers now prefer online channels, according to a report by Deloitte showing rapidly increasing digital banking adoption.",
    source: "Deloitte",
  },
  {
    number: "02",
    title: "Importance of Trust in Financial Services",
    stat: "70%",
    detail: "Of consumers say trust in a brand is more important today than in the past, according to a study by Edelman.",
    source: "Edelman",
  },
  {
    number: "03",
    title: "Local Search Behavior in Financial Services",
    stat: "46%",
    detail: "Of all Google searches are seeking local information, making local SEO essential for financial institutions.",
    source: "Google",
  },
  {
    number: "04",
    title: "Impact of Content Marketing on Lead Generation",
    stat: "3x",
    detail: "As many leads are generated by content marketing compared to traditional outbound marketing, per the Content Marketing Institute.",
    source: "Content Marketing Institute",
  },
];

const relatedIndustries = [
  {
    label: "Dental SEO",
    href: "/industries/dental",
    image: "https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Healthcare SEO",
    href: "/industries/healthcare",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Professional Services SEO",
    href: "/industries/professional-services",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            Financial Institutions We Support
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
            Every institution type carries a different trust threshold, a different buyer, and a different path to conversion.
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
                    {institutionTypes[activeIndex].number} / 04
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

export default function FinancialServicesClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="Financial data and stock ticker display"
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
              <Landmark size={14} style={{ color: "#A855F7" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4A0FA" }}>
                SEO for Financial Services
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-[1.05]"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Build Trust and{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Drive Traffic
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(229,231,235,0.75)" }}>
              In the highly regulated and competitive financial services
              industry, building trust and ensuring a strong online presence
              are crucial for attracting and retaining clients. Echo5 Digital
              specializes in financial services SEO to help finance companies
              improve their online visibility and attract more clients.
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
                Trust Is the Product
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Where Trust and Reputation Are Paramount
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                Financial services firms — banks, credit unions, advisors, and
                investment firms — operate where trust and reputation are
                paramount. Potential clients search for reputable providers
                long before ever making contact.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                At Echo5 Digital, we specialize in SEO for financial services,
                offering tailored strategies that help your firm rank higher
                in search results, drive qualified traffic, and build
                credibility with your audience.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Financial team reviewing charts and reports"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ WHY SEO IS CRITICAL ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal variant="zoom">
            <Landmark size={36} style={{ color: "#A855F7", margin: "0 auto 1.5rem" }} />
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Why SEO Is Critical for Financial Services
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
              Banks, credit unions, advisors, and investment firms operate in
              a space where trust and reputation are paramount. Potential
              clients search for reputable providers, making SEO essential
              for discoverability and for positioning your firm as the
              credible choice before a prospect ever calls.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ FINANCIAL SERVICES SEO STRATEGY (cards) ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Our Strategy
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Financial Services SEO Strategy
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
              A compliance-aware approach built around how clients actually vet and choose a financial partner.
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
              Ready to Enhance Your Firm's Online Presence?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
              Contact Echo5 Digital today to learn how our compliance-focused SEO strategies can help you grow.
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

      {/* ═══════════════════════ FINANCIAL INSTITUTIONS — STICKY IMAGE + SCROLL ═══════════════════════ */}
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
                Ready to Build Trust and Grow?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
                Book a free consultation and we'll show you exactly how a
                compliance-focused SEO strategy can build credibility and
                attract more of the right clients.
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
              subheading="Tell us about your firm and goals. We'll respond within 24 hours."
              submitLabel="Request Free Consultation"
              showAppointmentNote
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
