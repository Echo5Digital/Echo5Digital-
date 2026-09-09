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
          src="/20250715_1502_AI-Summarization-Dynamics_simple_compose_01k06pt16sehbrnrn63fee2y6h-Copy-740x600.jpg"
          alt="Futuristic interface showing AEO and GEO search results across ChatGPT, Google SGE, and Bing Copilot"
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
            How We Are Shaping Smarter Search with AEO and GEO in 2025
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
              July 15, 2025
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
            Search a question today and there's a good chance you never scroll past the first result — or click a website at all. The answer just shows up right in the results page. That shift is why traditional SEO on its own isn't enough anymore, and it's why we've spent the past several months rebuilding our approach around two ideas that matter most in 2025: Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            AEO is about matching how people actually search now — through voice, mobile, and AI tools — with content structured to surface directly in featured snippets, answer boxes, and voice results. The goal is to be the answer, even when nobody clicks through.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            GEO takes that a step further, preparing content for generative platforms like ChatGPT and Google's AI Overviews — tools that don't just rank pages, they synthesize them. Success here means being referenced and trusted inside an AI-generated response, which calls for content that's deep, well-structured, and semantically clear.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            We've rolled these strategies out across our own site, and this post walks through why we made the shift and what we actually changed.
          </p>

          <div className="not-prose rounded-2xl overflow-hidden mt-12 mb-8" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
            <img
              src="/AEO-GEO-flowchart-r8sjtlb8w841j468spooi2lqel00khdn84fg77t9jc.png"
              alt="Flowchart illustrating the AEO and GEO optimization process"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Why We Made the Shift
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Search engines have quietly turned into answer engines. Google, Bing, and AI assistants like ChatGPT now prioritize fast, contextual, direct answers over a list of blue links — and with more people searching by voice and on mobile, the old SEO playbook stopped being enough on its own.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The real wake-up call was watching how many visitors never reached our site because their question was already answered before they clicked anything. At the same time, intent-driven, AI-assisted search was quickly becoming the default way people find information. That left us with one question: how do we make sure we're both the answer and the experience? AEO and GEO are our response.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            What AEO Means for Us in 2025
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Answer Engine Optimization is about being discoverable inside the actual answer a user gets — a featured snippet, a "People Also Ask" box, a voice response — not just further down a results page.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            We started by mapping the questions our audience asks most often, then restructured content to answer them directly: tightly written FAQ sections, clear hierarchical headings, schema markup for added clarity, and formats built for voice and quick-answer surfaces.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The payoff has been showing up not just in standard rankings, but in the answer boxes that sit above the first organic result — prime visibility most competitors aren't optimizing for yet.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Building Out Our GEO Strategy
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Where AEO gets us into quick-answer results, GEO is about aligning with generative search experiences — being listed is no longer the finish line; being summarized and referenced by AI engines in a way that builds trust is.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            We rebuilt our content strategy with that in mind: long-form pieces balanced for both depth and clarity, context-rich sections written to be summarization-friendly, and structured data and semantic markup that help AI systems understand our expertise and represent it consistently across platforms.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The goal isn't just page one — it's showing up inside the answers people get from AI assistants, chatbots, and search previews.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Real Changes We've Made
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            To bring our AEO and GEO strategies to life, we've made real, measurable updates to our client's site. Some of them are shown below:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { src: "/GEO-of-smile-rite-1.png", alt: "GEO results screenshot for Smile Rite Dental" },
              { src: "/GEO-of-open-arms-initiative.webp", alt: "GEO results screenshot for Open Arms Initiative" },
              { src: "/AI-overview-of-Foster-care.png", alt: "AI Overview screenshot for Open Arms Foster Care" },
              { src: "/AI-overview-of-Revive.png", alt: "AI Overview screenshot for Revive Gym" },
            ].map((img) => (
              <div
                key={img.src}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(124,58,237,0.2)", aspectRatio: "4 / 3" }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Alongside that, we wrote in-depth content specifically built for AI summarization, implemented structured data with JSON-LD, improved mobile responsiveness and page load speed, and tightened internal linking to create a clearer content hierarchy. None of these are cosmetic — they're the foundation the rest of the strategy sits on.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            What This Means for You
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            For anyone visiting our site, this shift means faster discovery, more accurate answers, and content that matches your intent — whether you're searching in a browser or asking an AI assistant directly. The site is more responsive, more informative, and easier to navigate as a result.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            In short, our site is now built around how people actually search, instead of asking people to search the way an old site was built.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            What's Next
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Smarter search is a moving target, and we're not treating this as a finished project. Coming next: an AI-powered chat assistant for faster support, multilingual content to reach a broader audience, and dynamic, intent-aware FAQ modules that adjust to what visitors are actually asking.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The goal stays simple — make search feel seamless, intelligent, and genuinely useful, no matter how someone chooses to ask.
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
