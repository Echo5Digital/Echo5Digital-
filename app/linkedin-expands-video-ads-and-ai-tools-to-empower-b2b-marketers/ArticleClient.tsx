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
        style={{ backgroundColor: "#0A0F1E", height: "500px", maxHeight: "60vh" }}
      >
        <img
          src="/blog_featr2-740x600.jpg"
          alt="Person holding a phone showing the LinkedIn app in front of the LinkedIn logo"
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
            LinkedIn Expands Video Ads and AI Tools to Empower B2B Marketers
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
            In a significant move to enhance B2B marketing capabilities, LinkedIn has rolled out expanded video advertising options and advanced AI tools. These updates are part of LinkedIn&apos;s ongoing efforts to provide robust marketing solutions, enabling businesses to connect more effectively with their target audiences.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Enhanced Video Advertising Capabilities
          </h2>
          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            The Power of Video
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Video content continues to dominate digital marketing, proving to be one of the most engaging and effective formats. Recognizing this trend, LinkedIn has expanded its video ad offerings, providing marketers with more options to create impactful campaigns.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            New Features for Video Ads
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>LinkedIn&apos;s updated video ad capabilities include:</strong>
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>Sponsored Content Videos:</strong> These allow businesses to promote their video content directly in the LinkedIn feed, reaching a broader audience.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>Video for LinkedIn Stories:</strong> Marketers can now leverage the Stories format to share short, engaging video content that appears at the top of the LinkedIn app.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>Enhanced Targeting Options:</strong> Improved targeting ensures that video ads reach the most relevant audiences, increasing the likelihood of engagement and conversion.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 mt-12 mb-8">
            {[
              { src: "/pcc_blog004.jpg", alt: "LinkedIn video advertising campaign illustration" },
              { src: "/pcc_blog005.jpg", alt: "LinkedIn AI-powered marketing tools illustration" },
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
            Advanced AI Tools in LinkedIn Accelerate
          </h2>
          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            What is LinkedIn Accelerate?
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            LinkedIn Accelerate is a suite of AI-driven tools designed to optimize B2B marketing efforts. With the latest updates, Accelerate now offers even more powerful features to help marketers create, manage, and analyze their campaigns.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <em>Key AI Enhancements</em>
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <em>The expanded AI capabilities in Accelerate include:</em>
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>AI-Powered Audience Insights:</strong> These insights help marketers understand their audience better, providing data-driven recommendations for campaign targeting.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>Automated Content Suggestions:</strong> Accelerate can now suggest content topics and formats based on current trends and audience preferences, ensuring that marketing messages resonate.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>Predictive Analytics:</strong> This feature uses AI to forecast campaign performance, allowing marketers to make data-informed decisions and adjust strategies in real-time.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Benefits for B2B Marketers
          </h2>
          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Increased Engagement and Conversions
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            The combination of expanded video ads and advanced AI tools offers numerous benefits for B2B marketers. Enhanced video options provide a dynamic way to capture attention, while AI-driven insights and automation streamline campaign management and improve targeting precision.
          </p>

          <div className="not-prose rounded-2xl overflow-hidden mt-10 mb-8" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
            <img
              src="/blog_featr1-1024x630.jpg"
              alt="B2B marketer reviewing LinkedIn campaign performance and analytics"
              className="w-full h-auto object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Efficient Campaign Management
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            AI tools in LinkedIn Accelerate simplify the campaign creation process, reducing the time and effort required to develop effective marketing strategies. Automated content suggestions and predictive analytics enable marketers to focus on creative and strategic tasks, rather than getting bogged down in data analysis.
          </p>

          <h3 className="text-2xl font-bold mb-3 mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Data-Driven Decision Making
          </h3>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            With access to comprehensive audience insights and performance forecasts, B2B marketers can make more informed decisions. This data-driven approach enhances the effectiveness of marketing campaigns, leading to better ROI and more meaningful connections with potential clients.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Conclusion
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            LinkedIn&apos;s{" "}
            <a
              href="https://searchengineland.com/linkedin-wire-program-accelerate-expands-442944"
              target="_blank"
              rel="noopener"
              style={{ color: "#A855F7" }}
            >
              <em>latest updates</em>
            </a>
            , featuring expanded video ads and enhanced AI tools in the Accelerate suite, represent a significant advancement for B2B marketers. These innovations provide the tools necessary to create compelling content, optimize campaign performance, and connect with the right audiences. As video continues to grow in importance and AI technology evolves, LinkedIn remains at the forefront, empowering businesses to achieve their marketing goals.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#E5E7EB" }}>
              Stay tuned for more updates and innovations from LinkedIn as they continue to enhance their platform, making it an indispensable tool for B2B marketing success.
            </strong>
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
