import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Shield,
  Database,
  Settings,
  Cookie,
  Users,
  Clock,
  UserCheck,
  Mail,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Echo5 Digital",
  description:
    "Read Echo5 Digital's privacy policy to understand how we collect, use, and protect your personal information when you visit our website or use our services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const lastUpdated = "June 1, 2025";
const effectiveDate = "June 1, 2025";

const sections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We collect information you voluntarily provide to us as well as certain data
          gathered automatically when you interact with our website. Specifically, we
          may collect:
        </p>
        <ul className="space-y-3">
          {[
            {
              label: "Contact Form & Lead Form Submissions",
              detail:
                "When you fill out any contact, inquiry, or lead-generation form on our website, we collect your name, email address, phone number, company name, and the content of your message.",
            },
            {
              label: "Demo & Booking Flow Data",
              detail:
                "If you schedule a discovery call or demo through our booking system, we collect scheduling preferences, contact information, and any project details you provide during that process.",
            },
            {
              label: "Analytics & Usage Data",
              detail:
                "We automatically collect data about how you interact with our site, including pages visited, time spent, referring URLs, browser type, device type, operating system, and approximate geographic location (city/region level).",
            },
            {
              label: "Cookie & Tracking Data",
              detail:
                "We collect data via cookies and similar technologies, including session identifiers, UTM parameters appended to URLs, and pixel events from advertising platforms.",
            },
            {
              label: "Technical Data",
              detail:
                "IP addresses (used in aggregate/anonymized form for analytics and security purposes), HTTP request logs, and error reports.",
            },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-3">
              <span
                className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#A855F7" }}
                aria-hidden="true"
              />
              <span style={{ color: "#9CA3AF" }}>
                <strong style={{ color: "#E5E7EB" }}>{label}:</strong> {detail}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    icon: Settings,
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-4">
          Echo5 Digital uses the information we collect for the following purposes:
        </p>
        <ul className="space-y-3">
          {[
            {
              label: "Responding to Inquiries",
              detail:
                "To reply to your contact form submissions, questions, and service requests in a timely manner.",
            },
            {
              label: "Delivering Services",
              detail:
                "To fulfill the digital marketing, web development, and custom programming services you engage us for.",
            },
            {
              label: "Relevant Communications",
              detail:
                "To send you marketing updates, service announcements, case studies, and newsletters where you have opted in or where we have a legitimate interest in doing so. You may unsubscribe at any time.",
            },
            {
              label: "Website Improvement",
              detail:
                "To analyze how visitors use our site, identify friction points, and improve the overall user experience, content quality, and conversion flows.",
            },
            {
              label: "Internal Analytics",
              detail:
                "To measure marketing campaign performance, track traffic sources, and make data-driven decisions about our products and services.",
            },
            {
              label: "Security & Fraud Prevention",
              detail:
                "To detect, investigate, and prevent fraudulent activity and security incidents.",
            },
            {
              label: "Legal Compliance",
              detail:
                "To comply with applicable laws, regulations, and legal processes.",
            },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-3">
              <span
                className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#A855F7" }}
                aria-hidden="true"
              />
              <span style={{ color: "#9CA3AF" }}>
                <strong style={{ color: "#E5E7EB" }}>{label}:</strong> {detail}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p className="mb-4" style={{ color: "#9CA3AF" }}>
          Our website uses cookies and similar tracking technologies to enhance your
          browsing experience, analyze site traffic, and support our marketing efforts.
        </p>
        <div className="space-y-5">
          {[
            {
              type: "Essential Cookies",
              desc: "Required for the website to function correctly. These cannot be disabled as they enable core functionality such as page navigation and form security.",
            },
            {
              type: "Analytics Cookies",
              desc: "We use Google Analytics (and similar tools) to collect aggregated, anonymized data about site usage — including page views, session duration, bounce rates, and traffic sources. This helps us understand how visitors interact with our site.",
            },
            {
              type: "Marketing & Advertising Pixels",
              desc: "We may use pixels and tags from platforms such as Google Ads and Meta (Facebook/Instagram) to measure the effectiveness of our advertising campaigns and to enable retargeting features.",
            },
            {
              type: "UTM Parameter Tracking",
              desc: "We capture UTM parameters (source, medium, campaign, term, content) appended to URLs to attribute website visits to specific marketing campaigns or referral sources.",
            },
            {
              type: "Preference Cookies",
              desc: "Used to remember your preferences and settings to provide a more personalized experience on return visits.",
            },
          ].map(({ type, desc }) => (
            <div
              key={type}
              className="rounded-xl p-4"
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <h4
                className="font-semibold mb-1.5"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                {type}
              </h4>
              <p className="text-sm" style={{ color: "#9CA3AF" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm" style={{ color: "#9CA3AF" }}>
          Most browsers allow you to control cookies through their settings. Disabling
          certain cookies may affect website functionality. For more information on
          managing cookies, visit{" "}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-white"
            style={{ color: "#A855F7" }}
          >
            allaboutcookies.org
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    icon: Users,
    title: "Data Sharing and Third Parties",
    content: (
      <>
        <div
          className="rounded-xl p-4 mb-6 flex gap-3 items-start"
          style={{
            background: "rgba(124,58,237,0.1)",
            border: "1px solid rgba(168,85,247,0.35)",
          }}
        >
          <Shield
            size={20}
            className="flex-shrink-0 mt-0.5"
            style={{ color: "#A855F7" }}
          />
          <p className="text-sm font-medium" style={{ color: "#E5E7EB" }}>
            Echo5 Digital does <strong>not</strong> sell, rent, or trade your personal
            information to third parties for their own marketing purposes.
          </p>
        </div>
        <p className="mb-4" style={{ color: "#9CA3AF" }}>
          We may share your data with trusted third-party service providers who assist
          us in operating our website and delivering our services, strictly on a
          need-to-know basis and subject to appropriate data protection obligations.
          These providers may include:
        </p>
        <ul className="space-y-3 mb-5">
          {[
            "Email and CRM platforms (e.g., for managing contact and communication workflows)",
            "Web analytics providers (e.g., Google Analytics)",
            "Advertising and retargeting platforms (e.g., Google Ads, Meta Ads)",
            "Calendar and scheduling tools (for demo and booking flows)",
            "Cloud hosting and infrastructure providers",
            "Payment processors (for billing, where applicable)",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#A855F7" }}
                aria-hidden="true"
              />
              <span className="text-sm" style={{ color: "#9CA3AF" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm" style={{ color: "#9CA3AF" }}>
          We may also disclose information where required by law, to protect the rights
          or safety of Echo5 Digital or others, or in connection with a business
          transfer or acquisition.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    icon: Clock,
    title: "Data Retention",
    content: (
      <>
        <p className="mb-4" style={{ color: "#9CA3AF" }}>
          We retain personal data only for as long as necessary to fulfill the purposes
          described in this policy, unless a longer retention period is required or
          permitted by law. The criteria we use to determine retention periods include:
        </p>
        <ul className="space-y-3 mb-5">
          {[
            {
              label: "Active Client Relationships",
              detail:
                "Data relating to active client engagements is retained for the duration of the relationship and a reasonable period thereafter for legal, accounting, and dispute resolution purposes.",
            },
            {
              label: "Inquiry & Lead Data",
              detail:
                "Contact form submissions and lead data from prospective clients are retained for up to 24 months from the date of last interaction, after which they are deleted or anonymized.",
            },
            {
              label: "Analytics Data",
              detail:
                "Aggregated and anonymized analytics data may be retained indefinitely for historical performance analysis. Raw session-level data is subject to the retention settings of our analytics platforms.",
            },
            {
              label: "Legal Obligations",
              detail:
                "Some data may be retained longer if required to comply with applicable legal, tax, or regulatory obligations.",
            },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-3">
              <span
                className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#A855F7" }}
                aria-hidden="true"
              />
              <span style={{ color: "#9CA3AF" }}>
                <strong style={{ color: "#E5E7EB" }}>{label}:</strong> {detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm" style={{ color: "#9CA3AF" }}>
          When data is no longer required, we delete or anonymize it in accordance
          with our internal data management procedures.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    content: (
      <>
        <p className="mb-4" style={{ color: "#9CA3AF" }}>
          Depending on your location, you may have the following rights regarding your
          personal data:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {[
            {
              right: "Access",
              desc: "Request a copy of the personal data we hold about you.",
            },
            {
              right: "Correction",
              desc: "Request that we correct inaccurate or incomplete data.",
            },
            {
              right: "Deletion",
              desc: "Request that we delete your personal data, subject to certain exceptions.",
            },
            {
              right: "Opt-Out of Communications",
              desc: "Unsubscribe from marketing emails at any time via the unsubscribe link in any email.",
            },
            {
              right: "Data Portability",
              desc: "Request a machine-readable copy of data you have provided to us.",
            },
            {
              right: "Restriction of Processing",
              desc: "Request that we limit how we use your data in certain circumstances.",
            },
          ].map(({ right, desc }) => (
            <div
              key={right}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <h4
                className="font-semibold mb-1 text-sm"
                style={{
                  color: "#A855F7",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {right}
              </h4>
              <p className="text-sm" style={{ color: "#9CA3AF" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm" style={{ color: "#9CA3AF" }}>
          To exercise any of these rights, please contact us using the details in the
          Contact Information section below. We will respond to your request within a
          reasonable timeframe and in accordance with applicable law. We may need to
          verify your identity before processing certain requests.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div
      style={{
        backgroundColor: "#0A0F1E",
        color: "#E5E7EB",
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Header />

      <main>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />

        {/* Page Header */}
        <Section background="gradient" spacing="md" maxWidth="xl" centered>
          {/* Decorative orb */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
              }}
            >
              <Shield size={14} style={{ color: "#A855F7" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Legal
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Privacy Policy
            </h1>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "#9CA3AF" }}>
              Echo5 Digital is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your personal information.
            </p>

            {/* Dates */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <Clock size={14} style={{ color: "#A855F7" }} />
                <span style={{ color: "#9CA3AF" }}>
                  <span style={{ color: "#E5E7EB" }} className="font-medium">
                    Effective Date:
                  </span>{" "}
                  {effectiveDate}
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <Clock size={14} style={{ color: "#A855F7" }} />
                <span style={{ color: "#9CA3AF" }}>
                  <span style={{ color: "#E5E7EB" }} className="font-medium">
                    Last Updated:
                  </span>{" "}
                  {lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* Introduction */}
        <Section background="default" spacing="sm" maxWidth="xl" withDivider>
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Shield size={20} style={{ color: "#A855F7" }} />
                </div>
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  Introduction
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#9CA3AF" }}>
                <p>
                  Echo5 Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is an
                  AI-powered digital marketing agency and web development company headquartered in
                  Houston / Sugar Land, Texas. We provide services including digital marketing,
                  search engine optimization, web design, web development, custom programming, and
                  related solutions.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, disclose, and protect
                  information about you when you visit our website, interact with our content, or
                  engage with our services. By using our website or submitting information to us,
                  you acknowledge the practices described in this policy.
                </p>
                <p>
                  This policy applies to all users of the Echo5 Digital website, including
                  prospective clients, current clients, and general visitors. It covers personal
                  information collected through our website&rsquo;s contact forms, lead forms, demo
                  booking flows, and any other points of interaction.
                </p>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please
                  contact us at{" "}
                  <a
                    href="mailto:hello@echo5digital.com"
                    className="underline underline-offset-2 transition-colors hover:text-white"
                    style={{ color: "#A855F7" }}
                  >
                    hello@echo5digital.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Main Policy Sections */}
        <Section background="default" spacing="md" maxWidth="xl">
          <div className="max-w-4xl mx-auto space-y-10">
            {sections.map(({ id, icon: Icon, title, content }) => (
              <div
                key={id}
                id={id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                {/* Section header bar */}
                <div
                  className="flex items-center gap-3 px-6 py-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                    borderBottom: "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  >
                    {title}
                  </h2>
                </div>

                {/* Section body */}
                <div className="px-6 py-6 text-sm leading-relaxed">
                  {content}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Information */}
        <Section background="elevated" spacing="md" maxWidth="xl" withDivider>
          <div className="max-w-4xl mx-auto">
            <div
              id="contact-information"
              className="rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{
                  borderBottom: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Mail size={18} style={{ color: "#A855F7" }} strokeWidth={1.8} />
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                >
                  Contact Information
                </h2>
              </div>

              {/* Body */}
              <div className="px-6 py-6">
                <p className="text-sm mb-6 leading-relaxed" style={{ color: "#9CA3AF" }}>
                  If you have any questions, concerns, or requests regarding this Privacy
                  Policy or your personal data, please contact Echo5 Digital using the
                  details below. We aim to respond to all privacy-related inquiries within
                  5 business days.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div
                    className="flex items-start gap-4 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(124,58,237,0.2)",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      <Mail size={16} style={{ color: "#A855F7" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: "#6B7280", fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        Email
                      </p>
                      {/* hello@echo5digital.com */}
                      <a
                        href="mailto:hello@echo5digital.com"
                        className="text-sm font-medium transition-colors hover:text-white"
                        style={{ color: "#A855F7" }}
                      >
                        hello@echo5digital.com
                      </a>
                      <p className="text-xs mt-1" style={{ color: "#6B7280" }}>
                        For all privacy-related inquiries
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    className="flex items-start gap-4 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(124,58,237,0.2)",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      <Phone size={16} style={{ color: "#A855F7" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: "#6B7280", fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        Phone
                      </p>
                      {/* 713-489-7004 */}
                      <a
                        href="tel:7134897004"
                        className="text-sm font-medium transition-colors hover:text-white"
                        style={{ color: "#A855F7" }}
                      >
                        713-489-7004
                      </a>
                      <p className="text-xs mt-1" style={{ color: "#6B7280" }}>
                        Houston / Sugar Land, Texas
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs mt-6 leading-relaxed" style={{ color: "#6B7280" }}>
                  <strong style={{ color: "#9CA3AF" }}>Notice to users in the EU/EEA:</strong>{" "}
                  If you are located in the European Union or European Economic Area and believe
                  your data protection rights have been violated, you may also lodge a complaint
                  with your local supervisory authority.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Policy update note */}
        <Section background="default" spacing="sm" maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-xl px-6 py-4 flex gap-3 items-start"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(124,58,237,0.15)",
              }}
            >
              <Shield
                size={16}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#6B7280" }}
              />
              <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                <strong style={{ color: "#9CA3AF" }}>Policy Updates:</strong> Echo5
                Digital reserves the right to update this Privacy Policy from time to
                time to reflect changes in our practices, technology, legal requirements,
                or other factors. When we make material changes, we will update the
                &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to
                review this policy periodically. Continued use of our website after any
                changes constitutes your acceptance of the updated policy.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </div>
  );
}