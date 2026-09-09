"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import { Search, ArrowRight, ChevronDown, ChevronUp, Mail, TrendingUp, Globe, Target, Share2, Bot } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Post {
  id: number;
  title: string;
  excerpt?: string;
  category: string;
  secondaryCategory?: string;
  date: string;
  readTime: string;
  slug: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqData: FaqItem[];
}

// ─── Static Data ─────────────────────────────────────────────────────────────

const allPosts: Post[] = [
  {
    id: 1,
    title: "How Social Media Management Companies Help Boost Brand Visibility?",
    category: "Digital Marketing",
    date: "September 17, 2025",
    readTime: "6 min read",
    slug: "how-social-media-management-companies-help-boost-brand-visibility",
    href: "/how-social-media-management-companies-help-boost-brand-visibility",
    imageSrc: "/Untitled-design-740x600.webp",
    imageAlt: "Woman using a tablet surrounded by social media engagement icons representing brand visibility",
    featured: true,
  },
  {
    id: 2,
    title: "Choosing a PPC Advertising Company in Houston: What to Look for Beyond Clicks and Impressions",
    category: "Digital Marketing",
    date: "August 20, 2025",
    readTime: "7 min read",
    slug: "choosing-a-ppc-advertising-company-in-houston",
    href: "/choosing-a-ppc-advertising-company-in-houston-what-to-look-for-beyond-clicks-and-impressions/",
    imageSrc: "/20250820_1450_PPC-Analysis-in-Houston_simple_compose_01k33cbjyrfev8hrr3ed5be3nb-740x600.webp",
    imageAlt: "Marketing team reviewing PPC campaign analytics including ROI, conversions, and growth charts",
  },
  {
    id: 3,
    title: "How AEO and GEO Trends Are Affecting Digital Marketing",
    category: "Digital Marketing",
    date: "September 26, 2025",
    readTime: "6 min read",
    slug: "aeo-geo-trends-digital-marketing",
    href: "/how-aeo-and-geo-trends-are-affecting-digital-marketing/",
    imageSrc: "/Untitled-design-1-740x600.webp",
    imageAlt: "Business professionals analyzing digital marketing data and trends",
  },
  {
    id: 4,
    title: "Why Your Industrial Company Needs an Effective Digital Marketing Strategy",
    category: "Digital Marketing",
    date: "July 24, 2025",
    readTime: "6 min read",
    slug: "why-your-industrial-company-needs-an-effective-digital-marketing-strategy",
    href: "/why-your-industrial-company-needs-an-effective-digital-marketing-strategy/",
    imageSrc: "/Futuristic-Factory-Insights-740x600.jpg",
    imageAlt: "Industrial professional analyzing digital marketing growth data on a laptop in a factory setting",
  },
  {
    id: 5,
    title: "How We Are Shaping Smarter Search with AEO and GEO in 2025",
    category: "Digital Marketing",
    date: "July 15, 2025",
    readTime: "6 min read",
    slug: "how-we-are-shaping-smarter-search-with-aeo-and-geo-in-2025",
    href: "/how-we-are-shaping-smarter-search-with-aeo-and-geo-in-2025/",
    imageSrc: "/20250715_1502_AI-Summarization-Dynamics_simple_compose_01k06pt16sehbrnrn63fee2y6h-Copy-740x600.jpg",
    imageAlt: "Futuristic interface showing AEO and GEO search results across ChatGPT, Google SGE, and Bing Copilot",
  },
  {
    id: 6,
    title: "How to Rank on ChatGPT: 7 Tips to Get Featured by AI",
    category: "Digital Marketing",
    date: "July 14, 2025",
    readTime: "6 min read",
    slug: "how-to-rank-on-chatgpt-7-tips-to-get-featured-by-ai",
    href: "/how-to-rank-on-chatgpt-7-tips-to-get-featured-by-ai/",
    imageSrc: "/7-ways-to-get-visibile-in-chatgpt-featured-image-740x600.jpg",
    imageAlt: "Silhouette of a person facing a glowing digital brain, representing AI visibility and ranking on ChatGPT",
  },
  {
    id: 7,
    title: "How to Build a High-Converting Business Website in 2025",
    excerpt:
      "A beautiful website that doesn't convert is a liability. Learn the web design principles, page structures, and performance benchmarks that turn visitors into leads.",
    category: "Web Development",
    date: "April 30, 2025",
    readTime: "7 min read",
    slug: "high-converting-business-website-2025",
    imageSrc: "https://images.pexels.com/photos/14553720/pexels-photo-14553720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Modern high-converting business website displayed on multiple devices",
  },
  {
    id: 8,
    title: "Generative Engine Optimization (GEO): Beyond SEO in the AI Age",
    excerpt:
      "As AI models become the primary interface for information discovery, GEO ensures your brand gets cited and recommended by generative AI engines like ChatGPT and Gemini.",
    category: "SEO",
    date: "April 22, 2025",
    readTime: "8 min read",
    slug: "generative-engine-optimization-geo",
    imageSrc: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Diagram showing how generative engine optimization works for brand visibility",
  },
  {
    id: 9,
    title: "Google Business Profile Optimization: The Sugar Land & Houston Playbook",
    excerpt:
      "Your Google Business Profile is your most powerful free local marketing tool. This step-by-step guide is tailored for businesses in Sugar Land, Houston, and greater Texas.",
    category: "Local Marketing",
    date: "April 15, 2025",
    readTime: "6 min read",
    slug: "google-business-profile-houston-sugar-land",
    imageSrc: "https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Google Business Profile listing for a local business in Houston Texas",
  },
  {
    id: 10,
    title: "LinkedIn Expands Video Ads and AI Tools to Empower B2B Marketers",
    category: "Digital Marketing",
    secondaryCategory: "SMM",
    date: "June 6, 2024",
    readTime: "5 min read",
    slug: "linkedin-expands-video-ads-and-ai-tools-to-empower-b2b-marketers",
    href: "/why-hire-a-professional-ppc-consultant-to-manage-your-websites-ppc-campaign/",
    imageSrc: "/blog_featr1-740x600.jpg",
    imageAlt: "Person holding a phone showing the LinkedIn app in front of the LinkedIn logo",
  },
  {
    id: 11,
    title: "Why Hire A Professional PPC Consultant to Manage Your Website's PPC Campaign?",
    category: "Digital Marketing",
    date: "June 6, 2024",
    readTime: "5 min read",
    slug: "why-hire-a-professional-ppc-consultant-to-manage-your-websites-ppc-campaign",
    href: "/why-hire-a-professional-ppc-consultant-to-manage-your-websites-ppc-campaign/",
    imageSrc: "/blog_featr2-740x600.jpg",
    imageAlt: "Illustration of a professional considering PPC campaign strategy with a large question mark",
  },
];

const services = [
  { label: "SEO", href: "/services/seo", icon: TrendingUp },
  { label: "AEO & GEO", href: "/services/aeo-geo", icon: Search },
  { label: "Google Ads", href: "/services/google-ads", icon: Target },
  { label: "Social Media", href: "/services/social-media-marketing", icon: Share2 },
  { label: "Web Design", href: "/services/web-design", icon: Globe },
  { label: "AI Marketing", href: "/ai-marketing-employee", icon: Bot },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function BlogClient({ faqData }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts =
    activeCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <>
      {/* ── Blog Hero ── */}
      <Section background="gradient" spacing="xl" centered>
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, #A855F7 40%, transparent 70%)" }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              <Bot size={13} />
              Echo5 Digital Blog
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            AI Marketing Insights{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Strategies
            </span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ color: "rgba(229,231,235,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Expert guidance on SEO, AEO, Google Ads, social media, and AI-powered growth — written for
            small and mid-sized businesses ready to scale their digital presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#blog-grid"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(0,0,0,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Browse Articles <ArrowRight size={16} />
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-purple-900/30"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#E5E7EB",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Mail size={15} /> Subscribe to Newsletter
            </a>
          </div>
        </div>
      </Section>


      {/* ── Blog Post Grid ── */}
      <Section id="blog-grid" background="default" spacing="lg" withDivider>
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            {activeCategory === "all" ? "Latest Articles" : activeCategory}
          </h2>
          <span
            className="text-sm"
            style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}>
              No articles found in this category yet. Check back soon!
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(124,58,237,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Thumbnail */}
                  <Link
                    href={post.href ?? `/blog/${post.slug}`}
                    className="relative overflow-hidden h-44 block"
                    aria-label={post.title}
                  >
                    <img
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.9) 100%)" }}
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(124,58,237,0.85)",
                          color: "#E5E7EB",
                          fontFamily: "Inter, sans-serif",
                          backdropFilter: "blur(4px)",
                          border: "1px solid rgba(168,85,247,0.4)",
                        }}
                      >
                        {post.category}
                      </span>
                      {post.secondaryCategory && (
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(124,58,237,0.85)",
                            color: "#E5E7EB",
                            fontFamily: "Inter, sans-serif",
                            backdropFilter: "blur(4px)",
                            border: "1px solid rgba(168,85,247,0.4)",
                          }}
                        >
                          {post.secondaryCategory}
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <div
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                    >
                      <time dateTime={post.date}>{post.date}</time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3
                      className="text-base font-bold leading-snug"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p
                        className="text-sm leading-relaxed flex-1 line-clamp-3"
                        style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={post.href ?? `/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold mt-1 group/link"
                      style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More{" "}
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    boxShadow: "0 0 20px rgba(124,58,237,0.45)",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  Load More Articles <ArrowRight size={15} />
                </button>
              </div>
            )}
          </>
        )}
      </Section>

      {/* ── Newsletter Signup CTA ── */}
      <Section id="newsletter" background="elevated" spacing="lg" centered withDivider>
        <div
          className="relative overflow-hidden rounded-2xl p-8 md:p-12 mx-auto max-w-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.1) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 0 60px rgba(124,58,237,0.15)",
          }}
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
          />
          <div className="relative z-10">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                border: "1px solid rgba(168,85,247,0.4)",
              }}
            >
              <Mail size={26} style={{ color: "#A855F7" }} />
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Get AI Marketing Tips in Your Inbox
            </h2>
            <p
              className="text-sm leading-relaxed mb-8 max-w-md mx-auto"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Subscribe for expert insights on AI marketing, SEO, AEO, and digital growth strategies —
              delivered directly to you. No spam, unsubscribe anytime.
            </p>

            {subscribed ? (
              <div
                className="flex flex-col items-center gap-3 py-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.2)", boxShadow: "0 0 24px rgba(124,58,237,0.3)" }}
                >
                  <Mail size={22} style={{ color: "#A855F7" }} />
                </div>
                <p
                  className="text-lg font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  You're subscribed!
                </p>
                <p style={{ color: "rgba(229,231,235,0.55)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}>
                  Welcome aboard — expect expert AI marketing insights soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 justify-center"
                aria-label="Newsletter signup form"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className="flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(10,15,30,0.7)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    color: "#E5E7EB",
                    fontFamily: "Inter, sans-serif",
                    minWidth: 0,
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#A855F7";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 12px rgba(124,58,237,0.3)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(124,58,237,0.35)";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                    fontFamily: "Inter, sans-serif",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p
              className="mt-4 text-xs"
              style={{ color: "rgba(229,231,235,0.35)", fontFamily: "Inter, sans-serif" }}
            >
              Join business owners and marketers who read Echo5 Digital insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Related Services CTA ── */}
      <Section background="gradient" spacing="lg" withDivider>
        <div className="mb-8 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
          >
            Ready to Put These Strategies to Work?
          </h2>
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(229,231,235,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Explore our core services and let Echo5 Digital's AI-powered team implement the tactics you've
            been reading about — for your business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {services.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl text-center transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(124,58,237,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <Icon size={18} style={{ color: "#A855F7" }} aria-hidden="true" />
              </div>
              <span
                className="text-xs font-semibold"
                style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 28px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.3)",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Book a Free Strategy Call <ArrowRight size={17} />
          </Link>
          <p
            className="mt-3 text-xs"
            style={{ color: "rgba(229,231,235,0.35)", fontFamily: "Inter, sans-serif" }}
          >
            No commitment required. Talk to our team about your goals.
          </p>
        </div>
      </Section>

      {/* ── FAQ Section ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-sm"
              style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
            >
              Everything you need to know about the Echo5 Digital blog.
            </p>
          </div>

          <div className="flex flex-col gap-3" role="list">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  role="listitem"
                  className="rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    background: isOpen
                      ? "rgba(124,58,237,0.1)"
                      : "rgba(255,255,255,0.03)",
                    border: isOpen
                      ? "1px solid rgba(168,85,247,0.4)"
                      : "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span
                      className="font-semibold text-sm md:text-base"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    >
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={18} style={{ color: "#A855F7", flexShrink: 0 }} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={18} style={{ color: "rgba(229,231,235,0.4)", flexShrink: 0 }} aria-hidden="true" />
                    )}
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="px-6 pb-5"
                    >
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}