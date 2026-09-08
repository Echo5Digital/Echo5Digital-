"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  ShoppingCart,
  Search,
  Sparkles,
  Wrench,
  MapPin,
  UserCircle2,
  Link2,
  Share2,
  Megaphone,
  LayoutTemplate,
  Store,
  Package,
  Boxes,
  Palette,
  Code2,
  Award,
  ShieldCheck,
  CreditCard,
  Monitor,
  Brain,
  TrendingUp,
  Headset,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
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
  { icon: Search, title: "AI-Driven Keyword Research", desc: "Uncovering high-intent, product-level search terms that connect shoppers to exactly what they're ready to buy." },
  { icon: Sparkles, title: "Content Optimization With AI", desc: "Product descriptions, category pages, and buying guides optimized for both search engines and conversion." },
  { icon: Wrench, title: "Technical SEO for E-commerce Sites", desc: "Site speed, crawlability, structured data, and faceted navigation fixes built for large product catalogs." },
  { icon: MapPin, title: "Local SEO for Retail Businesses", desc: "Google Business Profile and local citation management for retailers with physical storefronts." },
  { icon: UserCircle2, title: "AI-Powered Personalization", desc: "Dynamic product recommendations and tailored on-site experiences that lift average order value." },
  { icon: Link2, title: "Advanced Link Building Strategies", desc: "Earning authoritative backlinks that build domain trust across competitive retail categories." },
  { icon: Share2, title: "Social Media Integration", desc: "Shoppable posts and social commerce strategies that turn followers into customers." },
  { icon: Megaphone, title: "Google Ads & PPC Campaigns", desc: "Shopping campaigns and paid search built around ROAS, not just clicks." },
  { icon: LayoutTemplate, title: "AI-Enhanced Web Development & UX", desc: "Fast, conversion-focused storefronts with UX informed by real shopper behavior data." },
];

const platforms = [
  { number: "01", icon: Store, name: "Shopify" },
  { number: "02", icon: Boxes, name: "WooCommerce" },
  { number: "03", icon: Package, name: "Magento" },
  { number: "04", icon: ShoppingCart, name: "BigCommerce" },
  { number: "05", icon: Code2, name: "Custom E-commerce Solutions" },
];

const processSteps = [
  { icon: Palette, title: "Design", desc: "Conversion-focused storefront design tailored to your brand and product catalog." },
  { icon: Code2, title: "Coding", desc: "Clean, fast, scalable development on your platform of choice." },
  { icon: Award, title: "Branding", desc: "Cohesive visual identity across your storefront, ads, and social presence." },
  { icon: Search, title: "SEO", desc: "Technical and content SEO built into the foundation, not bolted on after launch." },
];

const aiSolutions = [
  { icon: Brain, title: "AI-Driven Product Recommendations", desc: "Personalized cross-sell and upsell suggestions that increase average order value." },
  { icon: TrendingUp, title: "Dynamic Pricing Strategies", desc: "AI-informed pricing that responds to demand, competition, and inventory in real time." },
  { icon: Headset, title: "Automated Customer Support", desc: "AI chat and support automation that resolves common questions instantly, any hour." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Deep visibility into shopper behavior, funnel drop-off, and revenue attribution." },
];

const industryStudies = [
  {
    number: "01",
    title: "AI Growth in E-commerce",
    stat: "34.9%",
    detail: "Projected CAGR of the global AI in e-commerce market from 2021 to 2028.",
    source: "Grand View Research",
  },
  {
    number: "02",
    title: "SEO Impact on Traffic",
    stat: "53.3%",
    detail: "Of all website traffic comes from organic search — more than any other channel.",
    source: "BrightEdge",
  },
  {
    number: "03",
    title: "Local Search Behavior",
    stat: "76%",
    detail: "Of people who search for something nearby on their smartphone visit a related business within a day.",
    source: "Google",
  },
  {
    number: "04",
    title: "Personalization & Conversion",
    stat: "80%",
    detail: "Of consumers are more likely to make a purchase when brands offer personalized experiences.",
    source: "Epsilon",
  },
];

export default function EcommerceClient({ faqData }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="E-commerce warehouse with packages ready for shipment"
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
              <ShoppingCart size={14} style={{ color: "#A855F7" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C4A0FA" }}>
                E-commerce &amp; Retail Marketing
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-[1.05]"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB", letterSpacing: "-0.02em" }}
            >
              Ecommerce SEO Agency &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Retail SEO
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2}>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(229,231,235,0.75)" }}>
              Transform clicks into customers with advanced strategies that combine
              cutting-edge AI technology with proven digital marketing execution.
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
                Built for Online Retail
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Specialized E-commerce &amp; Retail SEO
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                Echo5 Digital specializes in e-commerce and retail SEO, combining
                cutting-edge AI technology with proven digital marketing strategies to
                help online stores grow revenue, not just traffic.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
                From keyword research to technical architecture, every part of our
                approach is built around how shoppers actually search, compare, and buy.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Online retailer managing product listings on a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ WHY SEO IS CRUCIAL ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal variant="zoom">
            <TrendingUp size={36} style={{ color: "#A855F7", margin: "0 auto 1.5rem" }} />
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              Why SEO Is Crucial for E-commerce
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(229,231,235,0.7)" }}>
              Online retail is more competitive than ever, and driving traffic is only
              half the battle — turning visitors into paying customers is what actually
              grows revenue. SEO is what makes your store visible to ready-to-buy
              shoppers, and conversion optimization is what turns that visibility into sales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ STRATEGY PILLARS ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Our Strategy
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              E-commerce &amp; Retail SEO Strategy
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(229,231,235,0.6)" }}>
              A complete, AI-enhanced strategy covering every layer of your online store's
              growth — from search visibility to checkout conversion.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyPillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} variant="up" delay={(i % 3) * 0.08}>
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

      {/* ═══════════════════════ PHOTO BAND ═══════════════════════ */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[
          { src: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Warehouse fulfillment for online orders" },
          { src: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Managing an online store dashboard" },
          { src: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Packaging products for retail shipment" },
          { src: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500", alt: "Customer browsing a retail product catalog on mobile" },
        ].map((img, i) => (
          <Reveal key={img.alt} variant="zoom" delay={i * 0.06} className="relative aspect-square overflow-hidden">
            <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 60%)" }} />
          </Reveal>
        ))}
      </section>

      {/* ═══════════════════════ PLATFORMS WE SPECIALIZE IN ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Platform Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              E-commerce Platforms We Specialize In
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <Reveal key={platform.name} variant="zoom" delay={i * 0.08}>
                  <div
                    className="h-full flex flex-col items-center text-center gap-3 p-6 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <span className="text-xs font-bold" style={{ color: "#A855F7" }}>{platform.number}</span>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
                    >
                      <Icon size={26} style={{ color: "#A855F7" }} />
                    </div>
                    <p className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                      {platform.name}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESS STEPS ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="up" className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
              From Design to Search-Ready, Start to Finish
            </h2>
          </Reveal>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-12 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5) 20%, rgba(168,85,247,0.5) 50%, rgba(124,58,237,0.5) 80%, transparent)" }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} variant="up" delay={i * 0.1} className="flex flex-col items-center text-center">
                    <div
                      className="relative w-24 h-24 rounded-2xl flex flex-col items-center justify-center mb-4 z-10"
                      style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))", border: "1px solid rgba(124,58,237,0.4)", boxShadow: "0 0 24px rgba(124,58,237,0.2)" }}
                    >
                      <span className="text-xs font-bold text-purple-500 mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        0{i + 1}
                      </span>
                      <Icon size={24} style={{ color: "#A855F7" }} />
                    </div>
                    <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(229,231,235,0.6)" }}>
                      {step.desc}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SPECIALIZED SERVICES ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0F1629" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal variant="left">
            <div
              className="h-full p-8 rounded-2xl"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 16px rgba(124,58,237,0.5)" }}
              >
                <ShoppingCart size={22} color="#fff" />
              </div>
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Custom Shopping Cart Development
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                A checkout experience built and optimized specifically for your product
                catalog and customer flow — not a generic template.
              </p>
              <ul className="space-y-2">
                {["Reduced cart abandonment", "Increased conversion rates", "Streamlined, frictionless checkout"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} style={{ color: "#A855F7" }} className="shrink-0 mt-0.5" />
                    <span className="text-sm" style={{ color: "rgba(229,231,235,0.7)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div
              className="h-full p-8 rounded-2xl"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", boxShadow: "0 0 16px rgba(124,58,237,0.5)" }}
              >
                <CreditCard size={22} color="#fff" />
              </div>
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Designing &amp; Integrating POS Systems
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(229,231,235,0.7)" }}>
                Point-of-sale integration that unifies your online and in-store operations
                so inventory, orders, and customer data stay in sync everywhere.
              </p>
              <ul className="space-y-2">
                {["Unified inventory across channels", "Consistent customer data", "Faster, simpler in-store checkout"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} style={{ color: "#A855F7" }} className="shrink-0 mt-0.5" />
                    <span className="text-sm" style={{ color: "rgba(229,231,235,0.7)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ AI-POWERED SOLUTIONS ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <Image
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=940"
                alt="Shopper using a mobile app with AI-personalized recommendations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
                AI-Powered Growth
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                AI-Powered E-commerce Solutions
              </h2>
              <div className="space-y-5">
                {aiSolutions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div
                        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}
                      >
                        <Icon size={18} style={{ color: "#A855F7" }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: "rgba(229,231,235,0.6)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
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

      {/* ═══════════════════════ CTA / CONTACT ═══════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #110D2E 50%, #0A0F1E 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal variant="left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A855F7" }}>
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
                Ready to Turn More Clicks Into Customers?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(229,231,235,0.7)" }}>
                Book a free consultation and we'll show you exactly how an AI-enhanced
                e-commerce SEO strategy can grow your store's revenue.
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
              subheading="Tell us about your store and goals. We'll respond within 24 hours."
              submitLabel="Request Free Consultation"
              showAppointmentNote
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
