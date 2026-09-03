"use client";

import Link from "next/link";
import { CheckCircle, Clock, Phone, Mail, ArrowRight, LayoutGrid, DollarSign, BookOpen } from "lucide-react";
import Section from "@/components/Section";

export default function ThankYouClient() {
  return (
    <main style={{ backgroundColor: "#0A0F1E", minHeight: "100vh" }}>
      {/* ── Hero / Confirmation Message ── */}
      <Section background="gradient" spacing="xl" centered maxWidth="md">
        {/* Decorative glow orb */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Animated check icon */}
          <div
            className="flex items-center justify-center w-24 h-24 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
              border: "2px solid rgba(168,85,247,0.4)",
              boxShadow:
                "0 0 50px rgba(124,58,237,0.45), 0 0 100px rgba(124,58,237,0.2)",
            }}
          >
            <CheckCircle
              size={44}
              style={{ color: "#A855F7" }}
              strokeWidth={1.8}
            />
          </div>

          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#A855F7" }}
            />
            Request Received
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Thank{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              You!
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-lg"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(229,231,235,0.75)",
            }}
          >
            Your message has been successfully received. We appreciate you reaching out to Echo5 Digital and look forward to connecting with you.
          </p>

          {/* Divider */}
          <div
            className="w-24 h-px mt-2"
            style={{
              background:
                "linear-gradient(90deg, transparent, #7C3AED, #A855F7, transparent)",
            }}
          />
        </div>
      </Section>

      {/* ── Next Steps ── */}
      <Section background="elevated" spacing="lg" centered maxWidth="xl" withDivider>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              What Happens Next
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Your Next Steps
            </h2>
            <p
              className="text-base max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(229,231,235,0.6)",
              }}
            >
              Here's what you can expect from us over the next 24–48 hours.
            </p>
          </div>

          <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              {
                step: "01",
                icon: CheckCircle,
                title: "Submission Confirmed",
                body: "Your inquiry has landed safely in our inbox. Our team has been notified and is reviewing your details.",
              },
              {
                step: "02",
                icon: Clock,
                title: "We Review & Prepare",
                body: "A dedicated Echo5 Digital team member will review your project needs and prepare tailored recommendations for you.",
              },
              {
                step: "03",
                icon: Phone,
                title: "We Reach Out to You",
                body: "Expect a call or email from our team within 1 business day to confirm next steps, answer questions, and schedule your consultation.",
              },
            ].map(({ step, icon: Icon, title, body }, idx) => (
              <li
                key={idx}
                className="relative flex flex-col gap-4 p-6 rounded-[0.75rem]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Step number */}
                <span
                  className="text-5xl font-black leading-none select-none"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step}
                </span>

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(168,85,247,0.12))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={20} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                </div>

                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  {title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(229,231,235,0.58)",
                  }}
                >
                  {body}
                </p>

                {/* Connector arrow (hidden on last) */}
                {idx < 2 && (
                  <ArrowRight
                    size={16}
                    className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                    style={{ color: "#7C3AED" }}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── Contact Details ── */}
      <Section background="default" spacing="md" centered maxWidth="lg" withDivider>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Get in Touch Directly
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Prefer to Reach Us Now?
            </h2>
            <p
              className="text-base max-w-md"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(229,231,235,0.6)",
              }}
            >
              Can't wait? We're here. Contact us directly and we'll pick up right where your inquiry left off.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 w-full max-w-xl">
            {/* Phone */}
            <a
              href="tel:7134897004"
              className="flex-1 flex items-center gap-4 p-5 rounded-[0.75rem] transition-all duration-300 group"
              style={{
                backgroundColor: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.25)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(124,58,237,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 24px rgba(124,58,237,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(124,58,237,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(124,58,237,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <Phone size={20} style={{ color: "#A855F7" }} strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(229,231,235,0.45)",
                  }}
                >
                  Call Us
                </p>
                {/* Phone number — verified fact: 713-489-7004 */}
                <p
                  className="text-base font-semibold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                  }}
                >
                  713-489-7004
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@echo5digital.com"
              className="flex-1 flex items-center gap-4 p-5 rounded-[0.75rem] transition-all duration-300 group"
              style={{
                backgroundColor: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.25)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(124,58,237,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 24px rgba(124,58,237,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(124,58,237,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(124,58,237,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <Mail size={20} style={{ color: "#A855F7" }} strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(229,231,235,0.45)",
                  }}
                >
                  Email Us
                </p>
                {/* Email — verified fact: hello@echo5digital.com */}
                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                    wordBreak: "break-all",
                  }}
                >
                  hello@echo5digital.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </Section>

      {/* ── Explore More CTA ── */}
      <Section background="gradient" spacing="lg" centered maxWidth="xl" withDivider>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              While You Wait
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Explore Echo5 Digital
            </h2>
            <p
              className="text-base max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(229,231,235,0.6)",
              }}
            >
              Dive deeper into our solutions, pricing, and insights while our team prepares to connect with you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            {[
              {
                icon: LayoutGrid,
                label: "Solutions",
                href: "/solutions",
                description:
                  "Discover our full suite of AI-powered digital marketing and web development services.",
                cta: "View Solutions",
              },
              {
                icon: DollarSign,
                label: "Pricing",
                href: "/pricing",
                description:
                  "Transparent, flexible pricing plans built to fit businesses of every size and stage.",
                cta: "See Pricing",
              },
              {
                icon: BookOpen,
                label: "Blog",
                href: "/blog",
                description:
                  "Read our latest articles on AI marketing, SEO strategies, and digital growth trends.",
                cta: "Read the Blog",
              },
            ].map(({ icon: Icon, label, href, description, cta }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-4 p-6 rounded-[0.75rem] transition-all duration-300 no-underline"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(124,58,237,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(168,85,247,0.45)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 40px rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(168,85,247,0.7), transparent)",
                  }}
                />

                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(168,85,247,0.12))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Icon size={22} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(229,231,235,0.58)",
                    }}
                  >
                    {description}
                  </p>
                </div>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#A855F7",
                  }}
                >
                  {cta}
                  <ArrowRight size={15} strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>

          {/* Final CTA button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 mt-2"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow:
                "0 0 24px rgba(124,58,237,0.55), 0 4px 16px rgba(124,58,237,0.3)",
              fontFamily: "Inter, sans-serif",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter =
                "brightness(1.15)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 36px rgba(124,58,237,0.75), 0 6px 24px rgba(124,58,237,0.4)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter =
                "brightness(1)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 24px rgba(124,58,237,0.55), 0 4px 16px rgba(124,58,237,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Book a Free Strategy Call
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </Section>
    </main>
  );
}