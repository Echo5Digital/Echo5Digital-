"use client";

import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Phone,
  Mail,
  Smartphone,
  Trophy,
  Database,
  Rocket,
} from "lucide-react";

export default function HealthcareMarketingClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6812510/pexels-photo-6812510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Modern healthcare clinic environment representing digital marketing for medical practices"
            className="w-full h-full object-cover opacity-60"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,15,30,0.75) 0%, rgba(17,13,46,0.6) 50%, rgba(10,15,30,0.85) 100%)",
            }}
          />
        </div>

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #A855F7, transparent)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Heart size={14} className="text-purple-400" />
            <span
              className="text-sm font-medium text-purple-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Hospitals and Healthcare SEO Company
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Healthcare SEO{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & SEO for Hospitals
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our services include SEO for hospitals, ensuring they attract more patients and enhance
            their visibility in a competitive healthcare market. 58% of internet users search for
            information on specific medical treatments — make sure they find you first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_32px_rgba(124,58,237,0.75)]"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 24px rgba(124,58,237,0.55)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Zap size={18} />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BLOCK ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              <Zap size={18} className="text-white" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Answer
              </p>
              <h2
                className="text-lg sm:text-xl font-bold text-white mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Hospitals and Healthcare SEO Company
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Our services include SEO for hospitals, ensuring they attract more patients and
                enhance their visibility in a competitive healthcare market.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ESTABLISH TRUST AND CREDIBILITY ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <Trophy size={26} className="text-purple-400" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Establish Trust and Credibility
            </h2>
            <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Over 65% of people choose service providers with a strong online presence. A robust SEO
              campaign enhances your brand presence across all digital platforms, establishing trust
              and credibility.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <p
              className="text-5xl sm:text-6xl font-bold mb-2"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              65%
            </p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              of people choose service providers with a strong online presence
            </p>
          </div>
        </div>
      </Section>

      {/* ── ENHANCE ACCESSIBILITY ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <p
              className="text-5xl sm:text-6xl font-bold mb-2"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              70%
            </p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              of patients use mobile devices to search for hospitals or schedule appointments
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <Smartphone size={26} className="text-purple-400" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Enhance Accessibility
            </h2>
            <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              70% of patients use mobile devices to search for hospitals or schedule appointments. SEO
              improves your site's performance, ensuring mobile responsiveness and enhancing
              accessibility for all users.
            </p>
          </div>
        </div>
      </Section>

      {/* ── BRING VALUABLE VISITORS ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <TrendingUp size={26} className="text-purple-400" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Bring Valuable Visitors
            </h2>
            <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              SEO is the most effective way to generate qualified leads for your healthcare
              organization. A targeted SEO campaign can boost your leads by up to 50% or more.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <p
              className="text-5xl sm:text-6xl font-bold mb-2"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              50%+
            </p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              boost in leads from a targeted SEO campaign
            </p>
          </div>
        </div>
      </Section>

      {/* ── LEVERAGE SEO TO BEAT YOUR COMPETITION ── */}
      <Section background="elevated" spacing="lg" withDivider>
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <Shield size={26} className="text-purple-400" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Leverage SEO to Beat Your Competition
          </h2>
          <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Hospitals and healthcare providers that adopt SEO gain a decisive edge over competitors
            still relying on traditional marketing alone — showing up first when patients search for
            the care they need.
          </p>
        </div>
      </Section>

      {/* ── OBTAIN IMPORTANT DATA ── */}
      <Section background="default" spacing="lg" withDivider>
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))",
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <Database size={26} className="text-purple-400" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            Obtain Important Data
          </h2>
          <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            SEO analytics give your organization ongoing visibility into patient search behavior,
            traffic sources, and conversion patterns — data-driven insight that continuously improves
            your services and outreach.
          </p>
        </div>
      </Section>

      {/* ── GET STARTED TODAY ── */}
      <Section background="gradient" spacing="xl" withDivider centered>
        <div
          className="rounded-3xl p-10 sm:p-14 border relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #7C3AED, transparent)" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Rocket size={14} className="text-purple-400" />
              <span
                className="text-sm font-medium text-purple-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get Started Today
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
            >
              Ready to Attract More Patients Online?
            </h2>
            <p
              className="text-gray-300 text-lg mb-10 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get in touch with Echo5 Digital today and discover how our healthcare SEO services can
              boost your hospital's visibility, credibility, and patient appointments.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="tel:7134897004"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={16} className="text-purple-400" />
                713-489-7004
              </a>
              <a
                href="mailto:hello@echo5digital.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Mail size={16} className="text-purple-400" />
                hello@echo5digital.com
              </a>
              <span className="flex items-center gap-2 text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                <MapPin size={16} className="text-purple-400" />
                Houston / Sugar Land, Texas
              </span>
            </div>

            <div className="max-w-2xl mx-auto text-left">
              <ContactForm
                heading="Get in Touch"
                subheading="Tell us about your hospital or practice and goals. We'll follow up within 24 hours."
                submitLabel="Get in Touch"
                showAppointmentNote={true}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
