"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag, User, Plus } from "lucide-react";
import Section from "@/components/Section";

const faqs = [
  {
    question: "How long does it take to see results from professional social media management?",
    answer:
      "Most businesses notice stronger engagement within the first 30 to 60 days, while a meaningful jump in overall brand visibility usually takes 3 to 6 months of consistent, professionally managed effort.",
  },
  {
    question: "What platforms should my Houston business focus on?",
    answer:
      "The right mix comes down to your audience and industry — a Houston social media management partner can review your specific market and point you toward the platforms most likely to move the needle for your goals.",
  },
  {
    question: "How much should I budget for social media management services?",
    answer:
      "Pricing depends on the scope of work and the size of your business. Most Houston companies budget somewhere in the $1,000–$5,000 monthly range for full-service social media management.",
  },
  {
    question: "Can I handle social media management in-house instead?",
    answer:
      "It's possible, but a professional agency brings specialized skills, better tooling, and dedicated hours that are hard to replicate internally — and the return usually makes the outside investment worthwhile.",
  },
  {
    question: "How do I choose the right social media agency in Houston?",
    answer:
      "Prioritize agencies with real local track records, case studies from businesses like yours, honest reporting, and a clear explanation of their strategy and what results to expect.",
  },
];

export default function ArticleClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main>
      {/* ── Article Header / Hero — full-bleed banner image ── */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#0A0F1E", height: "min(75vh, 700px)" }}>
        <img
          src="/Untitled-design-740x600.webp"
          alt="Woman using a tablet surrounded by social media engagement icons representing brand visibility"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,8,26,0) 0%, rgba(10,8,26,0) 55%, rgba(10,8,26,0.9) 100%)" }}
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
            How Social Media Management Companies Help Boost Brand Visibility?
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
              September 17, 2025
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
            Imagine running a genuinely good business — solid products, happy customers, a team that cares — and still watching competitors pull ahead online simply because they show up more often in the feed. It&apos;s one of the most common frustrations Houston business owners bring to us, and it rarely comes down to the quality of what they sell. It comes down to visibility.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            With billions of people scrolling social platforms every day, a brand that isn&apos;t actively and strategically present is, for practical purposes, invisible to a huge share of its potential customers.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Why Social Media Has Gotten Harder to Manage Alone
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            People now spend a significant chunk of every day on social platforms, and a lot of that time shapes real purchasing decisions — which brands feel trustworthy, which products are worth a second look, which businesses seem active and responsive.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The problem is that keeping up with all of it — fresh content, timely replies, shifting algorithms, and half a dozen platforms with different rules — is close to a full-time job on its own. That&apos;s exactly why so many business owners eventually hand this piece of the puzzle to a dedicated team rather than trying to bolt it onto an already full schedule.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            What a Social Media Management Company Actually Does
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A social media management partner in Houston does far more than schedule posts. The real value is in the strategy underneath: understanding who your audience is, what they respond to, and how each piece of content ladders up to a business goal — not just a like count.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            That typically covers audience research, content planning and production, day-to-day community management, and ongoing performance analysis, all working together instead of as disconnected tasks.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Building a Content Strategy That Actually Resonates
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Good social content starts with research, not guesswork. A management team studies what your specific audience engages with, then builds an editorial calendar around it — mixing promotional posts with genuinely useful or entertaining content so the brand doesn&apos;t come across as one long ad.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            That balance is what keeps followers around long enough to become customers, instead of scrolling past.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Playing Each Platform to Its Strengths
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Instagram, LinkedIn, and TikTok don&apos;t reward the same kind of content. Visual storytelling wins on one, professional networking drives another, and short-form creative video carries the third — and treating them identically is one of the fastest ways to underperform on all three.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A Houston-focused agency also brings local context to the table: which hashtags carry weight with a Houston audience, what times actually see the most local engagement, and how to make use of platform features like Stories or LinkedIn articles in a way that fits the brand.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Turning Followers Into a Real Community
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Visibility isn&apos;t only about how many people see a post — it&apos;s about whether they trust what they see. Professional social media managers spend real time replying to comments and messages and taking part in relevant conversations in your industry, not just publishing and moving on.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            When people notice a brand that actually engages, it reads as approachable and customer-focused — and that reputation compounds over time.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Letting the Data Drive the Strategy
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            One of the clearest advantages of working with a dedicated team is access to real analytics — reach, engagement rate, website traffic, and conversions — tracked consistently rather than checked occasionally.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            That ongoing analysis is what turns social media from a guessing game into a system: agencies can point to exactly which content format is working, which posting windows perform best, and which platform is actually delivering return for your specific business.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Extending Reach With Paid Social
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Organic reach alone has become much less reliable over the years, which is why most effective strategies now pair organic content with targeted paid campaigns that reach beyond your current follower base.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            With the right targeting — demographics, interests, behavior, and location — a Houston business can put its budget directly in front of the local customers most likely to actually convert.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Protecting the Brand When Things Go Sideways
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Social platforms can turn on a business fast — a bad review, a viral complaint, an unexpected PR moment. Experienced agencies have processes ready for exactly this, monitoring brand mentions and responding to negative feedback quickly and professionally rather than letting it sit.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            That proactive stance protects the brand&apos;s reputation and shows customers the business actually cares about getting things right.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Why Local Market Knowledge Matters
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A Houston-based team brings something a national or generic agency often can&apos;t: familiarity with the local business environment, community events, and regional trends worth tapping into.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            That local lens opens doors — joining relevant community conversations, supporting local initiatives, and finding collaboration opportunities with other Houston businesses — all of which build a tighter connection with the audience you actually want to reach.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Measuring the Actual Return
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The real test of any social media program is whether it moves the business forward. That means tracking leads, website traffic growth, and sales that can genuinely be traced back to social efforts — not vanity metrics.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Done well, this data-driven approach shows you precisely how social investment converts into growth, and it&apos;s common for Houston businesses to see meaningful gains in awareness, inbound inquiries, and sales once a professional strategy is in place.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Frequently Asked Questions
          </h2>

          <div className="not-prose flex flex-col gap-3 mb-6">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className="rounded-lg overflow-hidden"
                  style={{ background: "#120E1E", border: "1px solid rgba(229,231,235,0.25)" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 text-left px-5 py-4"
                    aria-expanded={isOpen}
                  >
                    <Plus
                      size={16}
                      style={{
                        color: "rgba(229,231,235,0.5)",
                        flexShrink: 0,
                        transition: "transform 0.2s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    />
                    <span
                      className="font-semibold text-base sm:text-lg"
                      style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
                    >
                      {faq.question}
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      className="px-5 pb-5 pl-12 leading-relaxed text-base"
                      style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

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
