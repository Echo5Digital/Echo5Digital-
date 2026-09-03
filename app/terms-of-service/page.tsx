import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FileText, Shield, Scale, Code2, RefreshCw, Mail, Phone, AlertTriangle, Lock, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Echo5 Digital",
  description:
    "Review Echo5 Digital's terms of service governing use of our website, digital marketing services, and client engagements. Questions? Contact us at hello@echo5digital.com.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  {
    id: "introduction",
    icon: FileText,
    title: "1. Introduction and Acceptance",
    content: [
      "Welcome to Echo5 Digital. By accessing or using our website (echo5digital.com) or any of our services, you agree to be bound by these Terms of Service ('Terms'). Please read them carefully before using our website or engaging our services.",
      "If you do not agree with any part of these Terms, you must discontinue use of our website and services immediately. Your continued use of the Echo5 Digital website following the posting of any changes to these Terms constitutes acceptance of those changes.",
      "These Terms apply to all visitors, users, and others who access or use our website or inquire about our services. They do not replace or supersede any separate written agreement you may have entered into with Echo5 Digital for specific service engagements.",
    ],
  },
  {
    id: "services",
    icon: Code2,
    title: "2. Services Description",
    content: [
      "Echo5 Digital is an AI-powered digital marketing agency providing a broad range of services including, but not limited to:",
      null, // signals a list
      "These services are provided to clients across Houston, Sugar Land, Texas, nationally throughout the United States, and with operational support from Kochi, Kerala, India. The specific scope, deliverables, timelines, and pricing of any service engagement are defined in separate client agreements.",
    ],
    list: [
      "Digital Marketing Strategy — SEO, AEO/GEO, Local SEO, Google Ads, Meta Ads, and Social Media Marketing",
      "Web Design and Development — custom websites, landing pages, and e-commerce solutions",
      "Custom Programming — bespoke software, automation tools, and API integrations",
      "CRM Automation and AI Marketing Solutions — including AI-powered marketing employee tools",
    ],
  },
  {
    id: "acceptable-use",
    icon: Shield,
    title: "3. Use of the Website",
    content: [
      "You agree to use the Echo5 Digital website only for lawful purposes and in a manner consistent with all applicable local, state, national, and international laws and regulations.",
    ],
    subsections: [
      {
        heading: "Prohibited Activities",
        items: [
          "Attempting to gain unauthorized access to any portion of the website or its related systems",
          "Transmitting any unsolicited or unauthorized advertising, promotional material, or spam",
          "Uploading or transmitting viruses, malware, or any other malicious code",
          "Scraping, data mining, or harvesting content from the website without prior written consent",
          "Impersonating Echo5 Digital, its employees, or other users",
          "Using the website in any way that could damage, disable, overburden, or impair it",
          "Engaging in any conduct that restricts or inhibits any other person's use or enjoyment of the website",
        ],
      },
      {
        heading: "Content Ownership",
        items: [
          "All content you submit through inquiry forms or communications remains your property; however, you grant Echo5 Digital a limited license to use such content solely for the purpose of responding to your inquiry or fulfilling the requested service.",
        ],
      },
    ],
  },
  {
    id: "client-agreements",
    icon: Users,
    title: "4. Client Agreements and Engagements",
    content: [
      "These Terms of Service govern your general use of the Echo5 Digital website and initial inquiry process. They do not constitute a service agreement for any specific project or engagement.",
      "All formal client engagements — including digital marketing campaigns, web development projects, custom programming work, and any other paid services — are governed exclusively by separate written agreements (such as Statements of Work, Service Agreements, or Master Service Agreements) entered into between you and Echo5 Digital.",
      "In the event of any conflict between these Terms and a separate client agreement, the terms of the specific client agreement shall control with respect to the subject matter of that agreement.",
    ],
  },
  {
    id: "disclaimer",
    icon: AlertTriangle,
    title: "5. Disclaimer of Warranties",
    content: [
      "THE ECHO5 DIGITAL WEBSITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES PROVIDED THROUGH IT ARE PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.",
      "Echo5 Digital expressly disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:",
    ],
    list: [
      "The website will be uninterrupted, timely, secure, or error-free",
      "The results obtained from using the website or services will be accurate, complete, or reliable",
      "Any specific business outcomes, rankings, traffic levels, or revenue increases will be achieved",
      "Errors in the website or its content will be corrected",
    ],
    contentAfterList: [
      "Any general information provided on this website, including case studies and examples, is for informational purposes only and does not constitute a guarantee of results for any specific client or situation.",
    ],
  },
  {
    id: "liability",
    icon: Scale,
    title: "6. Limitation of Liability",
    content: [
      "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ECHO5 DIGITAL, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF, OR INABILITY TO USE, THE ECHO5 DIGITAL WEBSITE OR SERVICES.",
      "This includes, without limitation, damages for loss of profits, loss of data, loss of goodwill, business interruption, or any other intangible losses, even if Echo5 Digital has been advised of the possibility of such damages.",
      "In no event shall Echo5 Digital's total aggregate liability to you for all claims arising out of or related to your use of the website exceed the amount paid by you, if any, to Echo5 Digital in the twelve (12) months preceding the claim.",
      "Some jurisdictions do not allow the exclusion or limitation of certain warranties or consequential damages, so some of the above limitations may not apply to you.",
    ],
  },
  {
    id: "intellectual-property",
    icon: Lock,
    title: "7. Intellectual Property",
    content: [
      "All content on the Echo5 Digital website — including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software — is the property of Echo5 Digital or its content suppliers and is protected by applicable intellectual property laws, including U.S. copyright law.",
      "The Echo5 Digital name, logo, taglines, and all related names, logos, product and service names, designs, and slogans are trademarks of Echo5 Digital. You may not use such marks without the prior written permission of Echo5 Digital.",
      "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without prior written consent from Echo5 Digital.",
      "Any proprietary AI systems, marketing frameworks, automation tools, and methodologies developed and used by Echo5 Digital in the delivery of its services remain the sole intellectual property of Echo5 Digital unless expressly transferred in writing under a separate agreement.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "8. Changes to These Terms",
    content: [
      "Echo5 Digital reserves the right to modify or replace these Terms of Service at any time at our sole discretion. We will make reasonable efforts to provide notice of material changes by updating the 'Last Updated' date at the top of this page.",
      "It is your responsibility to review these Terms periodically for changes. For significant changes, we may also provide more prominent notice, such as a notification on our website or via email to clients or registered users.",
      "Your continued use of the Echo5 Digital website after any changes to these Terms are posted constitutes your acceptance of the revised Terms.",
    ],
  },
];

export default function TermsOfServicePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <main style={{ backgroundColor: "#0A0F1E", minHeight: "100vh" }}>
      <style>{`
        .tos-toc-link:hover {
          color: #A855F7 !important;
          background-color: rgba(124,58,237,0.1);
        }
        .tos-contact-link:hover {
          color: #A855F7 !important;
        }
        .tos-backtotop-link:hover {
          color: #E5E7EB !important;
        }
      `}</style>
      <Header />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <Section background="gradient" spacing="md" maxWidth="xl" centered>
        <div className="relative">
          {/* Decorative glow */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 0 32px rgba(124,58,237,0.3)",
              }}
            >
              <FileText size={32} style={{ color: "#A855F7" }} />
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#E5E7EB",
                letterSpacing: "-0.02em",
              }}
            >
              Terms of{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Service
              </span>
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(229,231,235,0.65)",
              }}
            >
              Please read these terms carefully before using the Echo5 Digital
              website or engaging our services.
            </p>
            {/* Effective / Last Updated Date */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mt-2"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <span
                className="text-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(229,231,235,0.55)",
                }}
              >
                Effective Date:
              </span>
              <span
                className="text-sm font-semibold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#A855F7",
                }}
              >
                January 1, 2025
              </span>
              <span
                className="w-px h-4"
                style={{ backgroundColor: "rgba(124,58,237,0.4)" }}
                aria-hidden="true"
              />
              <span
                className="text-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(229,231,235,0.55)",
                }}
              >
                Last Updated:
              </span>
              <span
                className="text-sm font-semibold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#A855F7",
                }}
              >
                July 1, 2025
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="default" spacing="md" maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sticky Table of Contents (desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div
              className="sticky top-24 rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h2
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#A855F7",
                }}
              >
                Contents
              </h2>
              <nav aria-label="Table of contents">
                <ol className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="tos-toc-link block text-sm py-1.5 px-2 rounded-lg transition-all duration-200"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "rgba(229,231,235,0.6)",
                          textDecoration: "none",
                        }}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact"
                      className="tos-toc-link block text-sm py-1.5 px-2 rounded-lg transition-all duration-200"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(229,231,235,0.6)",
                        textDecoration: "none",
                      }}
                    >
                      9. Contact Information
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </aside>

          {/* Terms Sections */}
          <div className="lg:col-span-3 space-y-8">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="rounded-2xl p-7 md:p-8"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      <Icon size={18} style={{ color: "#A855F7" }} />
                    </div>
                    <h2
                      className="text-xl md:text-2xl font-bold"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#E5E7EB",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-4 ml-0 md:ml-14">
                    {sec.content.map((para, i) => {
                      if (para === null) return null;
                      return (
                        <p
                          key={i}
                          className="text-sm md:text-base leading-relaxed"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            color: "rgba(229,231,235,0.7)",
                          }}
                        >
                          {para}
                        </p>
                      );
                    })}

                    {sec.list && (
                      <ul className="space-y-2 mt-2">
                        {sec.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm md:text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              color: "rgba(229,231,235,0.7)",
                            }}
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: "#A855F7" }}
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.contentAfterList &&
                      sec.contentAfterList.map((para, i) => (
                        <p
                          key={`after-${i}`}
                          className="text-sm md:text-base leading-relaxed"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            color: "rgba(229,231,235,0.7)",
                          }}
                        >
                          {para}
                        </p>
                      ))}

                    {sec.subsections &&
                      sec.subsections.map((sub, si) => (
                        <div key={si} className="mt-4">
                          <h3
                            className="text-base font-semibold mb-3"
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              color: "#E5E7EB",
                            }}
                          >
                            {sub.heading}
                          </h3>
                          <ul className="space-y-2">
                            {sub.items.map((item, ii) => (
                              <li
                                key={ii}
                                className="flex items-start gap-3 text-sm md:text-base"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  color: "rgba(229,231,235,0.7)",
                                }}
                              >
                                <span
                                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ backgroundColor: "#A855F7" }}
                                  aria-hidden="true"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </article>
              );
            })}

            {/* Contact Information Section */}
            <article
              id="contact"
              className="rounded-2xl p-7 md:p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.07) 100%)",
                border: "1px solid rgba(124,58,237,0.35)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 40px rgba(124,58,237,0.1)",
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 mt-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(168,85,247,0.25))",
                    border: "1px solid rgba(168,85,247,0.5)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.3)",
                  }}
                >
                  <Mail size={18} style={{ color: "#A855F7" }} />
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#E5E7EB",
                    letterSpacing: "-0.01em",
                  }}
                >
                  9. Contact Information
                </h2>
              </div>

              <div className="ml-0 md:ml-14 space-y-4">
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(229,231,235,0.7)",
                  }}
                >
                  If you have any questions, concerns, or requests regarding
                  these Terms of Service, please contact us using the
                  information below:
                </p>

                <div
                  className="rounded-xl p-5 space-y-4"
                  style={{
                    background: "rgba(10,15,30,0.5)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <p
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#E5E7EB",
                    }}
                  >
                    Echo5 Digital
                  </p>

                  <address className="not-italic space-y-3">
                    <a
                      href="mailto:hello@echo5digital.com"
                      className="tos-contact-link flex items-center gap-3 text-sm transition-colors duration-200"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(229,231,235,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      <Mail
                        size={16}
                        style={{ color: "#7C3AED", flexShrink: 0 }}
                      />
                      {/* Email address */}
                      hello@echo5digital.com
                    </a>

                    <a
                      href="tel:7134897004"
                      className="tos-contact-link flex items-center gap-3 text-sm transition-colors duration-200"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(229,231,235,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      <Phone
                        size={16}
                        style={{ color: "#7C3AED", flexShrink: 0 }}
                      />
                      {/* Phone number */}
                      713-489-7004
                    </a>
                  </address>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(229,231,235,0.55)",
                  }}
                >
                  You may also reach us through our{" "}
                  <Link
                    href="/contact"
                    style={{ color: "#A855F7", textDecoration: "underline" }}
                  >
                    contact page
                  </Link>
                  . We aim to respond to all inquiries within 1–2 business days.
                </p>
              </div>
            </article>

            {/* Back to top / related links */}
            <div
              className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(124,58,237,0.15)",
              }}
            >
              <p
                className="text-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(229,231,235,0.5)",
                }}
              >
                Also see our{" "}
                <Link
                  href="/privacy-policy"
                  style={{
                    color: "#A855F7",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <a
                href="#"
                className="tos-backtotop-link text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#A855F7",
                  textDecoration: "none",
                }}
              >
                ↑ Back to top
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </main>
  );
}