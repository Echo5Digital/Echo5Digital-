"use client";

import Link from "next/link";
import { Home, Layers, DollarSign, Mail, Phone, ArrowRight, Zap, AlertTriangle } from "lucide-react";
import Section from "@/components/Section";

const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    description: "Return to our main page",
  },
  {
    label: "Services",
    href: "/solutions",
    icon: Layers,
    description: "Explore our AI marketing & web solutions",
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: DollarSign,
    description: "View transparent pricing plans",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    description: "Get in touch with our team",
  },
];

export default function NotFoundClient() {
  return (
    <>
      {/* ── 404 Hero ── */}
      <Section background="gradient" spacing="xl" centered>
        {/* Decorative ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 py-8">
          {/* Icon badge */}
          <div
            className="flex items-center justify-center w-20 h-20 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
              border: "1px solid rgba(168,85,247,0.35)",
              boxShadow: "0 0 40px rgba(124,58,237,0.3)",
            }}
          >
            <AlertTriangle
              size={40}
              style={{ color: "#A855F7" }}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>

          {/* 404 number */}
          <div className="relative select-none">
            <span
              className="block text-center font-bold leading-none"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(6rem, 20vw, 12rem)",
                background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #E5E7EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.04em",
                filter: "drop-shadow(0 0 40px rgba(124,58,237,0.5))",
              }}
            >
              404
            </span>
            {/* Subtle grid overlay on the number */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(168,85,247,0.4) 30px,rgba(168,85,247,0.4) 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(168,85,247,0.4) 30px,rgba(168,85,247,0.4) 31px)",
              }}
            />
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            Page Not Found
          </h1>

          {/* Subheading */}
          <p
            className="max-w-xl text-base sm:text-lg text-center leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(229,231,235,0.65)",
            }}
          >
            Oops — the page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back on track.
          </p>

          {/* Primary CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 mt-2"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow:
                "0 0 24px rgba(124,58,237,0.6), 0 4px 16px rgba(0,0,0,0.35)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Home size={18} aria-hidden="true" />
            Back to Homepage
          </Link>
        </div>
      </Section>

      {/* ── Helpful Navigation Links ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.25)",
              color: "#A855F7",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Zap size={12} aria-hidden="true" />
            Quick Navigation
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#E5E7EB",
              letterSpacing: "-0.02em",
            }}
          >
            Find What You&apos;re Looking For
          </h2>
          <p
            className="mt-3 text-sm sm:text-base max-w-md mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(229,231,235,0.55)",
            }}
          >
            Jump to any of these key sections to continue exploring Echo5 Digital.
          </p>
        </div>

        <nav aria-label="Key page navigation">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0">
            {navLinks.map(({ label, href, icon: Icon, description }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex flex-col gap-4 p-6 rounded-[0.75rem] transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(168,85,247,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 8px 32px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(124,58,237,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(124,58,237,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "inset 0 1px 0 rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: "#A855F7" }}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p
                      className="text-base font-semibold mb-1"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#E5E7EB",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(229,231,235,0.5)",
                      }}
                    >
                      {description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-xs font-medium transition-all duration-200 group-hover:gap-2"
                    style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
                  >
                    Go there
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      {/* ── Search or Contact Prompt ── */}
      <Section background="default" spacing="lg" centered withDivider>
        <div
          className="relative rounded-2xl p-8 sm:p-12 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          {/* Glow orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #A855F7 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Still Can&apos;t Find What You Need?
            </h2>

            <p
              className="text-sm sm:text-base leading-relaxed max-w-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(229,231,235,0.65)",
              }}
            >
              Our team is happy to help. Reach out via our contact page or give us
              a call — we&apos;ll point you in the right direction and answer any
              questions about our AI marketing, web design, or development services.
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-2">
              {/* Contact page CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto justify-center"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 20px rgba(124,58,237,0.55), 0 4px 12px rgba(0,0,0,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Mail size={16} aria-hidden="true" />
                Visit Contact Page
              </Link>

              {/* Phone CTA */}
              {/* Phone number: 713-489-7004 (verified business phone) */}
              <a
                href="tel:7134897004"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto justify-center"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(124,58,237,0.5)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                  boxShadow: "0 0 12px rgba(124,58,237,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(124,58,237,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(168,85,247,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 20px rgba(124,58,237,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(124,58,237,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 12px rgba(124,58,237,0.2)";
                }}
              >
                <Phone size={16} aria-hidden="true" />
                {/* Verified phone number */}
                713-489-7004
              </a>
            </div>

            {/* Email */}
            <p
              className="text-xs"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(229,231,235,0.4)",
              }}
            >
              Or email us at{" "}
              <a
                href="mailto:hello@echo5digital.com"
                className="underline underline-offset-2 transition-colors hover:text-white"
                style={{ color: "rgba(168,85,247,0.8)" }}
              >
                hello@echo5digital.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}