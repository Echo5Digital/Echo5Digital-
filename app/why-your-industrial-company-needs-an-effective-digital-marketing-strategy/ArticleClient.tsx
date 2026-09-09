"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, User } from "lucide-react";
import Section from "@/components/Section";

export default function ArticleClient() {
  return (
    <main>
      {/* ── Article Header / Hero — full-bleed banner image with rounded corners ── */}
      <section
        className="relative w-full overflow-hidden rounded-3xl"
        style={{ backgroundColor: "#0A0F1E", height: "800px", maxHeight: "80vh" }}
      >
        <img
          src="/Futuristic-Factory-Insights-740x600.jpg"
          alt="Industrial professional analyzing digital marketing growth data on a laptop in a factory setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,8,26,0.15) 0%, rgba(10,8,26,0.35) 55%, rgba(10,8,26,0.85) 100%)" }}
        />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-2 mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Tag size={11} />
              Digital Marketing
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#fff", letterSpacing: "-0.02em", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
          >
            Why Your Industrial Company Needs an Effective Digital Marketing Strategy
          </h1>

          <div
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif" }}
          >
            <span className="flex items-center gap-1.5">
              <User size={14} style={{ color: "#C4A0FA" }} />
              shani
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} style={{ color: "#C4A0FA" }} />
              July 24, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} style={{ color: "#C4A0FA" }} />
              6 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <Section spacing="md" background="default">
        <article className="max-w-5xl mx-auto prose-custom" style={{ fontFamily: "Inter, sans-serif", color: "#D1D5DB" }}>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Ask someone to picture a "digital marketing success story" and they'll usually describe a sleek retail brand, a viral influencer campaign, or a slick e-commerce storefront. Manufacturing plants, fabrication shops, and logistics providers almost never make the list — and that gap is exactly where the opportunity lives.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Industrial businesses have just as much to gain from a deliberate digital strategy as any consumer brand. In a market where companies compete on efficiency, capability, and trust, showing up well online isn't a nice-to-have — it's a genuine competitive edge.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Having worked with industrial companies across the U.S. — including a number in the competitive Houston market — the pattern is consistent: the businesses that invest in digital outreach generate more qualified leads, land stronger partnerships, and build brand equity that compounds over time.
          </p>

          <div className="not-prose rounded-2xl overflow-hidden mt-12 mb-8" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
            <img
              src="/Digital-Strategy-Collaboration-r97w9ak2fvzk6wsh8pkeyh5rvijtcz3l9tmj6ugar4.jpg"
              alt="Team collaborating on a digital marketing strategy"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            The Digital Gap in the Industrial Sector
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            It's not that industrial companies lack sophistication — these are the businesses building the backbone of global infrastructure. It's that many still lean almost entirely on trade shows, referrals, and cold calling to drive growth.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            None of those channels are wrong, but none of them scale, and none of them match how buyers actually behave today. Engineers, procurement leads, and plant managers now research vendors on Google, check out capabilities on LinkedIn, and read case studies before a sales call ever happens. A company that isn't visible in that research phase is effectively invisible to the buyer.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Why Digital Marketing Matters for Industrial Firms
          </h2>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Your Buyers Are Already Online
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A large majority of the industrial buying journey now happens online before a rep is ever contacted — engineers searching specs, plant managers reading reviews, distributors comparing certifications. If your site doesn't surface for those searches, or isn't worth visiting when it does, you're losing business you'll never even hear about.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A Houston metal fabrication client is a good example: strong offline reputation, but a dated site with no real content strategy. After rebuilding the web presence and launching an SEO-driven content push around terms like local fabrication and welding services, inbound leads nearly doubled within six months — and came in better qualified than the cold-outreach leads they were used to.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Lead Generation That Never Clocks Out
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A well-built landing page keeps working after 5 PM. Search ads run through the weekend. LinkedIn content stays up around the clock. That always-on presence matters especially in industrial sales, where cycles are long and decisions are rarely made on impulse — a consistent digital footprint keeps your company top of mind for the entire length of that journey.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Trust Is Built Through Transparency
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Industrial buyers ask detailed questions — materials, tolerances, industries served, certifications. A static brochure site can't answer those. Project galleries, walkthrough videos, client testimonials, and technical blog content give buyers the transparency they're looking for, turning a sales pitch into demonstrated credibility.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            One HVAC systems integrator started a recurring blog covering maintenance issues, project management, and energy efficiency — and it became one of their strongest lead sources, simply because it positioned them as a knowledge source rather than just another vendor.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            What an Effective Strategy Actually Includes
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A real digital marketing strategy is more than a website and an occasional ad — it needs a deliberate, sustained plan built from a few core pieces.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            A Website Built to Convert
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Your site is your digital headquarters — it needs to work well on mobile, be built with search visibility in mind, and actually convert visitors through clear CTAs, quote request forms, and live chat. Showcase capabilities with real specificity: instead of "metal cutting," spell out laser, plasma, or waterjet.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Search Engine Optimization
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            SEO isn't reserved for tech startups — it's how you show up exactly when a buyer is searching for what you do. An experienced SEO partner can identify the high-value terms your ideal clients are actually typing and build content around them for lasting rankings.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Pay-Per-Click Advertising
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            While SEO builds over time, PPC delivers visibility fast. Platforms like Google Ads and LinkedIn Ads let you target decision-makers by job title, location, or company size — and pairing tightly targeted campaigns with dedicated service landing pages tends to produce the strongest lead flow.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Email Marketing and CRM
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Industrial sales run on relationships, and email keeps you present between calls — newsletters, project updates, maintenance reminders. Paired with a simple CRM, your team can track engagement, follow up efficiently, and spot re-engagement opportunities with minimal manual work.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Content Marketing and Video
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Technical buyers respond well to substantive content — spec sheets, instructional videos, virtual plant tours. Material like this builds trust and positions your company as the expert in the room, and it doesn't have to pull your team away from day-to-day operations if you bring in the right help to produce it.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Measuring the Return
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The honest question every industrial leader asks is whether digital marketing actually pays off — and it does, provided it's approached with consistency, testing, and a tight link to sales goals. The KPIs worth tracking include website traffic and bounce rate, landing page conversion rates, qualified leads generated per month, cost per lead compared to trade shows or cold outreach, and pipeline growth attributable to digital sources.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            With that data in place, marketing spend stops being a guess and starts tying directly to revenue outcomes you can adjust in real time.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Finding the Right Partner
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Not every agency understands this world. You want a team that knows the difference between MIG and TIG welding, can write content a plant manager will actually respect, and understands the pace of B2B technical sales. A partner with real industrial and manufacturing experience — and ideally local market knowledge — makes a measurable difference in how quickly a strategy gets traction.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            The Bottom Line
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The industrial sector isn't immune to digital disruption — it's already underway. Your competitors are online, your buyers are online, and every day your business isn't, you're leaving qualified opportunities on the table.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The good news is it's not too late to start. With a focused strategy, the right partner, and a commitment to the long game, digital marketing can become one of the highest-return investments an industrial company makes.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            So ask yourself: if your ideal client searched for your services right now, would they find you — or your competitor?
          </p>

          <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </Section>
    </main>
  );
}
