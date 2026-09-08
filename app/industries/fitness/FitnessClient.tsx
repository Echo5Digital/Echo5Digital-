"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "./Reveal";
import {
  Dumbbell,
  Search,
  Share2,
  Megaphone,
  Palette,
  MapPin,
  Wrench,
  Link2,
  RefreshCw,
  TrendingUp,
  Users,
  Smartphone,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Flame,
  Activity,
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

const coreServices = [
  { icon: Search, title: "Targeted Keyword Research & SEO", desc: "Rank for the exact terms people search when looking for a gym, studio, or trainer near them." },
  { icon: Palette, title: "Content Optimization & Social Media", desc: "On-brand content and community management that keeps your members engaged and attracts new ones." },
  { icon: Share2, title: "Social Media Marketing", desc: "Instagram, TikTok, and Facebook strategies built around transformation stories and class energy." },
  { icon: Megaphone, title: "Google Ads & PPC Campaigns", desc: "High-intent paid campaigns that convert searchers into trial memberships and bookings." },
  { icon: Dumbbell, title: "Branding & Web Development", desc: "A fast, conversion-focused website and brand identity that matches your gym's energy." },
  { icon: MapPin, title: "Local SEO Strategies", desc: "Dominate the map pack for 'gym near me' and 'personal trainer near me' searches." },
  { icon: Wrench, title: "Technical SEO", desc: "Site speed, mobile responsiveness, and structure fixes so nothing blocks your rankings." },
  { icon: Link2, title: "Link Building & Authority", desc: "Earn citations and backlinks that build long-term domain authority in the fitness space." },
  { icon: RefreshCw, title: "Continuous Monitoring", desc: "Ongoing performance tracking and optimization so results keep compounding month over month." },
];

const industryStudies = [
  {
    number: "01",
    title: "Fitness Industry Growth Report",
    stat: "2.6%",
    detail: "Projected annual growth rate for the global fitness industry, creating sustained demand for gyms and studios that show up online.",
    source: "IBISWorld",
  },
  {
    number: "02",
    title: "Impact of Social Media on Fitness Trends",
    stat: "71%",
    detail: "Of consumers are more likely to recommend a brand after a positive social media experience with it.",
    source: "Sprout Social",
  },
  {
    number: "03",
    title: "Local Search Behavior Statistics",
    stat: "76%",
    detail: "Of people who search for something nearby on their smartphone visit a related business within a day.",
    source: "Google",
  },
  {
    number: "04",
    title: "Importance of Mobile Optimization",
    stat: "57%",
    detail: "Of all online traffic now comes from mobile devices — a gym website that isn't mobile-first is losing members.",
    source: "BrightEdge",
  },
];

export default function FitnessClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="Group fitness class training with energy at a modern gym"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,15,30,0.35) 0%, rgba(10,15,30,0.6) 55%, #0A0F1E 100%)" }} />
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
              <Flame size={14} style={{ color: "#A855F7" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4A0FA" }}>
                Fitness & Gym Marketing
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-[1.05]"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Fitness SEO &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Gym SEO
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(229,231,235,0.75)" }}>
              Proven SEO and digital marketing tactics built to fill classes, grow memberships,
              and keep your gym top-of-mind in a crowded fitness market.
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

      {/* ═══════════════════════ INTRODUCTION ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
                Built for the Fitness Industry
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Fitness &amp; Wellness SEO and Digital Marketing Strategies
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                The fitness industry is more competitive than ever — new boutique studios,
                national chains, and app-based competitors are all fighting for the same
                local audience. A strong online presence isn't optional anymore; it's the
                difference between a full class schedule and empty equipment.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                Echo5 Digital delivers a complete growth stack for gyms, studios, and
                trainers — SEO, social media, Google Ads, branding, and web development —
                all working together under one strategy.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Personal trainer coaching a client through a strength session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ WHY DIGITAL MARKETING MATTERS ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal variant="zoom">
            <Activity size={36} style={{ color: "#A855F7", margin: "0 auto 1.5rem" }} />
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Why Digital Marketing Is Essential for Fitness &amp; Wellness Brands
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
              Consumer behavior in fitness has shifted entirely online — people research
              classes, read reviews, and compare studios on their phones before ever
              walking through your door. Brands that don't show up in that research phase
              simply don't get considered, no matter how good their facility is.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ GOOGLE ADS SPOTLIGHT ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left" className="order-2 lg:order-1">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Analytics dashboard showing ad campaign performance on a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute bottom-5 left-5 px-5 py-3 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 24px rgba(124,58,237,0.6)" }}
              >
                <p className="text-lg font-black text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Immediate Traffic
                </p>
                <p className="text-xs font-semibold" style={{ color: "#E9D5FF" }}>
                  From Day One
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1} className="order-1 lg:order-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
                Paid Media
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Driving Immediate Traffic With Google Ads
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                SEO builds compounding, long-term visibility — but Google Ads gets your
                gym in front of ready-to-join prospects right now. We build campaigns
                around high-intent searches like "gym near me" and "personal trainer
                [city]" so your ad spend converts into trial memberships, not clicks.
              </p>
              <ul className="space-y-3">
                {[
                  "Hyper-local geo-targeting around your facility",
                  "Landing pages built for trial sign-ups and class bookings",
                  "Continuous bid and budget optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: "#A855F7" }} className="shrink-0 mt-0.5" />
                    <span className="text-sm" style={{ color: "rgba(229,231,235,0.7)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ CORE SERVICES ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Everything Your Gym Needs to Grow
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
              A complete marketing stack built specifically around how fitness
              businesses attract, convert, and retain members.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} variant="up" delay={(i % 3) * 0.08}>
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
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(229,231,235,0.6)" }}>
                      {service.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PHOTO BAND ═══════════════════════ */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[
          { src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Group fitness class" },
          { src: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Marketing analytics for a gym brand" },
          { src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Weightlifting training session" },
          { src: "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Yoga and wellness studio session" },
        ].map((img, i) => (
          <Reveal key={img.alt} variant="zoom" delay={i * 0.06} className="relative aspect-square overflow-hidden">
            <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 60%)" }} />
          </Reveal>
        ))}
      </section>

      {/* ═══════════════════════ INDUSTRY STUDIES ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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

      {/* ═══════════════════════ TESTIMONIAL / SOCIAL PROOF STRIP ═══════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
            alt="Athlete mid-lift in a strength training gym"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.65) 0%, rgba(17,13,46,0.55) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal variant="zoom">
            <Users size={32} style={{ color: "#A855F7", margin: "0 auto 1.25rem" }} />
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6" style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}>
              "Gyms and studios don't need more content — they need the right content,
              shown to the right people, at the moment they're deciding where to join."
            </p>
          </Reveal>
          <Reveal variant="up" delay={0.2}>
            <p className="text-sm font-semibold" style={{ color: "#A855F7" }}>
              Echo5 Digital — Fitness Marketing Team
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
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

      {/* ═══════════════════════ CTA / CONTACT ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal variant="left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Ready to Fill Your Classes &amp; Grow Memberships?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
                Book a free strategy session and we'll show you exactly how a
                fitness-specific SEO and marketing plan can bring more members
                through your doors.
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
              heading="Book Your Free Strategy Session"
              subheading="Tell us about your gym or studio. We'll respond within 24 hours."
              submitLabel="Request Free Strategy Session"
              showAppointmentNote
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
