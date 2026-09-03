"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Calendar,
  ChevronDown,
  ChevronUp,
  Zap,
  Clock,
  CheckCircle,
} from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

interface FaqItem {
  question: string;
  answer: string;
}

interface ContactClientProps {
  faqData: FaqItem[];
}

export default function ContactClient({ faqData }: ContactClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <main>
      {/* ── Hero Section ── */}
      <Section background="gradient" spacing="lg" centered>
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#A855F7",
            }}
          >
            <Zap size={12} />
            AI-Powered Digital Marketing
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#E5E7EB] max-w-3xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Let&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Grow
            </span>{" "}
            Your Business Together
          </h1>

          <p
            className="text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our team is ready to discuss your growth goals. Whether you're a
            Houston local or a national brand, we're here to build your AI-powered
            digital engine.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <Clock size={15} style={{ color: "#A855F7" }} />
              <span>Fast response — usually within 24 hours</span>
            </div>
            <span className="hidden sm:inline text-[#4B5563]">·</span>
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <CheckCircle size={15} style={{ color: "#A855F7" }} />
              <span>Free discovery consultation</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Contact Details + Form ── */}
      <Section background="default" spacing="lg" maxWidth="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Details Block */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h2
                className="text-2xl font-bold text-[#E5E7EB] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get in Touch
              </h2>
              <p
                className="text-sm text-[#9CA3AF] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Reach us directly via phone, email, or the contact form. We look
                forward to hearing about your project.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:7134897004"
                className="group flex items-center gap-4 p-4 rounded-[0.75rem] transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(168,85,247,0.55)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(124,58,237,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(124,58,237,0.25)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.03)";
                }}
                aria-label="Call Echo5 Digital at 713-489-7004"
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-[0.75rem] shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Phone size={18} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <p
                    className="text-xs text-[#6B7280] uppercase tracking-wider font-medium mb-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Phone
                  </p>
                  <p
                    className="text-[#E5E7EB] font-semibold text-sm group-hover:text-[#A855F7] transition-colors"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    713-489-7004
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@echo5digital.com"
                className="group flex items-center gap-4 p-4 rounded-[0.75rem] transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(168,85,247,0.55)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(124,58,237,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(124,58,237,0.25)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.03)";
                }}
                aria-label="Email Echo5 Digital at hello@echo5digital.com"
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-[0.75rem] shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Mail size={18} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <p
                    className="text-xs text-[#6B7280] uppercase tracking-wider font-medium mb-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Email
                  </p>
                  <p
                    className="text-[#E5E7EB] font-semibold text-sm group-hover:text-[#A855F7] transition-colors break-all"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    hello@echo5digital.com
                  </p>
                </div>
              </a>

              {/* Primary Service Area */}
              <div
                className="flex items-center gap-4 p-4 rounded-[0.75rem]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-[0.75rem] shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <MapPin size={18} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <p
                    className="text-xs text-[#6B7280] uppercase tracking-wider font-medium mb-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Primary Location
                  </p>
                  <p
                    className="text-[#E5E7EB] font-semibold text-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Houston &amp; Sugar Land, Texas
                  </p>
                </div>
              </div>

              {/* National Service */}
              <div
                className="flex items-center gap-4 p-4 rounded-[0.75rem]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-[0.75rem] shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Globe size={18} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <p
                    className="text-xs text-[#6B7280] uppercase tracking-wider font-medium mb-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Also Serving
                  </p>
                  <p
                    className="text-[#E5E7EB] font-semibold text-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    National U.S. Clients
                  </p>
                </div>
              </div>
            </div>

            {/* Local Relevance Block */}
            <div
              className="p-5 rounded-[0.75rem]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <h3
                className="text-sm font-semibold text-[#E5E7EB] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Serving Greater Houston
              </h3>
              <p
                className="text-xs text-[#9CA3AF] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Echo5 Digital is based in Houston and Sugar Land, Texas. Local
                businesses across the greater Houston area are encouraged to reach
                out for a discovery call about AI-powered digital marketing
                services. Contact us at{" "}
                <a
                  href="tel:7134897004"
                  className="text-[#A855F7] hover:text-[#7C3AED] transition-colors underline underline-offset-2"
                >
                  713-489-7004
                </a>{" "}
                or{" "}
                <a
                  href="mailto:hello@echo5digital.com"
                  className="text-[#A855F7] hover:text-[#7C3AED] transition-colors underline underline-offset-2"
                >
                  hello@echo5digital.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Lead Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm
              heading="Send Us a Message"
              subheading="Tell us about your business and growth goals. We'll get back to you within 24 hours."
              submitLabel="Send Message"
              showAppointmentNote={true}
            />
          </div>
        </div>
      </Section>

      {/* ── Book a Demo CTA ── */}
      <Section background="elevated" spacing="md" withDivider>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image side */}
          <div className="w-full md:w-2/5 rounded-[0.75rem] overflow-hidden aspect-video relative">
            <img
              src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Echo5 Digital team on a discovery call with a client"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, #0F1629 100%)",
              }}
            />
          </div>

          {/* Text side */}
          <div className="w-full md:w-3/5 flex flex-col gap-5 md:pl-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest w-fit"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#A855F7",
              }}
            >
              <Calendar size={12} />
              Schedule a Demo
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-[#E5E7EB] leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Book a Free{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Discovery Call
              </span>
            </h2>

            <p
              className="text-[#9CA3AF] leading-relaxed max-w-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Skip the back-and-forth. Book a 30-minute discovery call directly on
              our calendar and let&apos;s talk strategy. We&apos;ll audit your
              current digital presence and show you how AI-powered marketing can
              accelerate your growth.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Free, no-obligation consultation",
                "AI marketing strategy tailored to your business",
                "Clear next steps — no sales pressure",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                  <CheckCircle size={15} style={{ color: "#A855F7" }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              {/* Primary: Book Demo */}
              <a
                href="https://calendly.com/echo5digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow:
                    "0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.filter =
                    "brightness(1.15)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 30px rgba(124,58,237,0.65), 0 6px 20px rgba(124,58,237,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.filter = "";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)";
                }}
              >
                <Calendar size={16} />
                Book a Free Call
              </a>

              {/* Secondary: Call directly */}
              <a
                href="tel:7134897004"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(124,58,237,0.6)",
                  color: "#A855F7",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(124,58,237,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#A855F7";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(124,58,237,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#A855F7";
                }}
              >
                <Phone size={16} />
                Call 713-489-7004
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Service Area Note ── */}
      <Section background="default" spacing="sm" maxWidth="xl" withDivider>
        <div
          className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-[0.75rem]"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.04) 100%)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-[0.75rem] shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <MapPin size={22} style={{ color: "#A855F7" }} />
          </div>

          <div>
            <h2
              className="text-lg font-bold text-[#E5E7EB] mb-1.5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Where We Operate
            </h2>
            <p
              className="text-sm text-[#9CA3AF] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#E5E7EB]">Primary Markets:</strong>{" "}
              Houston and Sugar Land, Texas — serving local businesses with
              hands-on, personalized AI-powered digital marketing.{" "}
              <strong className="text-[#E5E7EB]">National Clients:</strong>{" "}
              We work with brands across the United States, delivering the same
              results-driven approach remotely.{" "}
              <strong className="text-[#E5E7EB]">Operations Support:</strong>{" "}
              Our technology and creative operations are supported from Kochi,
              Kerala, India, enabling 24/7 productivity across time zones.
            </p>
          </div>
        </div>
      </Section>

      {/* ── FAQ Section ── */}
      <Section background="gradient" spacing="lg" maxWidth="xl" withDivider>
        <div className="flex flex-col items-center gap-10">
          {/* Heading */}
          <div className="text-center max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
            >
              Have Questions?
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#E5E7EB]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-3 text-[#9CA3AF] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Common questions about getting in touch and working with Echo5
              Digital.
            </p>
          </div>

          {/* Accordion */}
          <div className="w-full max-w-3xl flex flex-col gap-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-[0.75rem] overflow-hidden transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${openFaq === index ? "rgba(168,85,247,0.5)" : "rgba(124,58,237,0.2)"}`,
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className="font-semibold text-[#E5E7EB] text-sm sm:text-base leading-snug"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200"
                    style={{
                      background:
                        openFaq === index
                          ? "rgba(124,58,237,0.3)"
                          : "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      color: "#A855F7",
                    }}
                    aria-hidden="true"
                  >
                    {openFaq === index ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: openFaq === index ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <p
                    className="px-5 pb-5 text-sm text-[#9CA3AF] leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <p
            className="text-sm text-[#9CA3AF] text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Still have questions?{" "}
            <a
              href="mailto:hello@echo5digital.com"
              className="text-[#A855F7] hover:text-white transition-colors underline underline-offset-2"
            >
              Email us directly
            </a>{" "}
            or call{" "}
            <a
              href="tel:7134897004"
              className="text-[#A855F7] hover:text-white transition-colors underline underline-offset-2"
            >
              713-489-7004
            </a>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}