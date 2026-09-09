"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, User } from "lucide-react";
import Section from "@/components/Section";

export default function ArticleClient() {
  return (
    <main>
      {/* ── Article Header / Hero — rounded background-image banner, content pushed down by padding ── */}
      <section
        className="relative mx-auto overflow-hidden"
        style={{
          backgroundColor: "#3B2E6B",
          width: "calc(100% - 40px)",
          maxWidth: "1800px",
          borderRadius: "30px",
          marginTop: "16px",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/blog_featr1-740x600.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "50% 50%",
          }}
        />
        <div aria-hidden="true" className="absolute inset-0" style={{ backgroundColor: "#000", opacity: 0.25 }} />

        <div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ paddingTop: "min(388px, 32vw)", paddingBottom: "72px" }}
        >
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
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#fff", letterSpacing: "-0.02em" }}
          >
            Why Hire A Professional PPC Consultant to Manage Your Website&apos;s PPC Campaign?
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
              June 6, 2024
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} style={{ color: "#C4A0FA" }} />
              5 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <Section spacing="md" background="default">
        <article className="max-w-5xl mx-auto prose-custom" style={{ fontFamily: "Inter, sans-serif", color: "#D1D5DB" }}>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Building and running a pay-per-click campaign for your website is a lot more involved than it looks from the outside. Doing it well takes deliberate strategy and real planning, and even a fully in-house effort still needs attention across a long list of moving parts — relevant keyword selection, compelling ad copy, well-organized ad groups, landing page optimization, destination URLs, competitive bidding, and conversion tracking, just to start.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Bringing in a professional PPC consultant to manage that campaign is how you make sure it's handled the way it should be. Here's what that actually gets you.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 mt-12 mb-8">
            {[
              { src: "/blog-s-1.webp", alt: "Illustration representing professional PPC campaign management" },
              { src: "/pcc_blog001.webp", alt: "Illustration representing PPC advertising strategy and results" },
            ].map((img) => (
              <div
                key={img.src}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(124,58,237,0.2)" }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            They Own the Day-to-Day
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            With a professional consultant handling the account, you're freed from the daily grind of campaign management. Someone skilled, trained, and experienced is watching it instead — and because managing PPC accounts is their actual job, they stay focused on squeezing the maximum value out of every dollar spent, rather than treating it as one task among many.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            They Bring Real Industry Depth
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A good PPC consultant is already tracking the platform changes and industry shifts that would otherwise eat up your own time. You don't have to become a PPC expert yourself — that's the job they've already dedicated themselves to, and they keep up with it as it evolves, which it constantly does.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            They Know How to Work Within a Budget
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Few small business owners have the bandwidth to manage PPC properly on top of running the business itself, and every business — small, medium, or large — is working within a fixed marketing budget. A skilled consultant works backward from that budget and your actual goals, choosing the options that fit both without sacrificing quality.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Fewer Costly Mistakes
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Specialization matters here. Someone whose full focus is PPC — especially with real experience or agency backing — is far less likely to make the kind of missteps that quietly drain a budget. That focus is exactly what an outside consultant brings to a business that would otherwise be learning PPC as they go.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Stronger Results Overall
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            That same specialization and dedicated attention is what tends to produce better outcomes. A consultant who lives in PPC accounts day after day builds a sharper instinct for what works — and just as importantly, what to avoid — than someone managing it as a side responsibility.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Access to Real Measurement Tools
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Professional PPC consultants have access to the tools that make campaign performance genuinely measurable — visitor behavior, time on page, landing pages, and total revenue attributable to the campaign. Good tools in this space aren't cheap, and there are dozens of platforms worth evaluating before landing on the right fit.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A consultant spreads that tooling cost across multiple clients, which makes it far more cost-effective than it would be for a single business running PPC entirely in-house, where the same tooling cost falls on one account instead of many.
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
