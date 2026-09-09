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
            Building and managing a pay per click (PPC) campaign for your website is not a simple process. Employing the right techniques and proper planning is essential for running a successful PPC campaign. Even if you are planning for an in-house PPC management, there are plenty of things that need attention. For example, not only will you need to choose relevant keywords, you will also need to write compelling ad copies, create targeted ad groups, landing page optimization, destination URLs, bidding the right keywords, conversion tracking and more.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            <strong style={{ color: "#fff" }}>By hiring a professional PPC consultant to manage your website&apos;s PPC campaign, you can be sure that the job is done professionally.</strong>
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Following are the benefits of hiring a professional <em style={{ color: "#A855F7" }}>PPC management Houston</em>, TX
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
            Takes the entire responsibility of managing the campaign
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            When hiring a professional PPC consultant, you can be relieved of day-to-day PPC campaign management because experts who are skilled, learned and experienced, will take care of it. <strong style={{ color: "#fff" }}>Consultants know their responsibilities and will focus on optimizing your PPC campaign and extract the maximum value</strong>.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Comes with industry exposure, knowledge, experience and expertise PPC consultants will be aware of the latest developments in the industry. So you don&apos;t have to spend time learning PPC or get updated with the industry trends. Since there are always changes in the industry, professional PPC consultants make sure that they dedicate their time to learn about the various developments.
          </p>

          <div className="not-prose rounded-2xl overflow-hidden mt-10 mb-8" style={{ border: "1px solid rgba(124,58,237,0.2)" }}>
            <img src="/pcc_blog002.jpg" alt="Illustration representing PPC budget control" className="w-full h-auto object-cover" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Ability to control budgets
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            It is tough for an SMB owner to take time for PPC while running their business. Whether it is a small, medium or a large business, they have their limitations and fixed budget that is allocated for their marketing and advertising needs. Based on the requirements and budget of a business, professional PPC consultants should have the ability to deliver results in a given budget by choosing the options that best fit the objectives of business while maintaining and advancing quality service.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Less likely to commit mistakes
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Their talent for this area, their specialization or focus and the time they allocate to their field prevent them from making mistakes. If the person has experience or works in an organization, it further reduces the chances of making mistakes. All these work out for an SMB that hires an outside consultant for PPC. PPC experts specialize in learning a lot in this area. As they develop their knowledge, they learn about mistakes that they should avoid.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Better results
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Their talent for this area, their specialization or focus and the time they allocate to their field prevent them from making mistakes. If the person has experience or works in an organization, it further reduces the chances of making mistakes. All these work out for an SMB that hires an outside consultant for PPC. PPC experts specialize in learning a lot in this area. As they develop their knowledge, they learn about mistakes that they should avoid.
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 mt-16 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}>
            Possess tools to measure and evaluate PPC campaigns
          </h2>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            Professional PPC consultants have useful tools to better manage PPC success. They have tools (these tools are expensive) that allow them to measure the behavior of your website&apos;s visitors such as where they are coming from, how much time they spend on a particular page, which page they have landed on and much more. Consultants will also determine the total sales revenue generated from the campaign. There are dozens of PPC software companies that work hard and smart to enable businesses to get better with PPC. They allow for easier monitoring, more information, and better information and expand the capabilities of the PPC expert. However, there are several tools that need to be analyzed to assess the best tools. Plus, the tools themselves come at a cost.
          </p>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: "#D1D5DB" }}>
            A <em style={{ color: "#A855F7" }}>PPC consultant in Houston</em>, TX can share the cost of the tool across various clients and make it cost-effective. While someone doing it in-house may be at a disadvantage. Vis-a-vis cost of the tool as % of the total cost of doing PPC management.
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
