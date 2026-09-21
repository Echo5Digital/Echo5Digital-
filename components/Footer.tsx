"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, Zap, Rocket, ArrowRight } from "lucide-react";

interface FooterLink {
  label: string;
  route: string;
}

interface FooterProps {
  businessName?: string;
  tagline?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: string;
  links?: FooterLink[];
  logoSrc?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

const defaultLinks: FooterLink[] = [
  { label: "Home", route: "/" },
  { label: "AI Marketing Employee", route: "/ai-marketing-employee" },
  { label: "Solutions", route: "/solutions" },
  { label: "Pricing", route: "/pricing" },
  { label: "Results", route: "/results" },
  { label: "Industries", route: "/industries" },
  { label: "SEO", route: "/services/seo" },
  { label: "AEO & GEO", route: "/services/aeo-geo" },
  { label: "Local SEO", route: "/services/local-seo" },
  { label: "Google Ads", route: "/services/google-ads" },
  { label: "Meta Ads", route: "/services/meta-ads" },
  { label: "Social Media Marketing", route: "/services/social-media-marketing" },
  { label: "Web Design", route: "/services/web-design" },
  { label: "Web Development", route: "/services/web-development" },
  { label: "Custom Programming", route: "/services/custom-programming" },
  { label: "CRM Automation", route: "/services/crm-automation" },
  { label: "Blog", route: "/blog" },
  { label: "About Us", route: "/about-us" },
  { label: "Our Team", route: "/team" },
  { label: "Contact", route: "/contact" },
  { label: "Privacy Policy", route: "/privacy-policy" },
  { label: "Terms of Service", route: "/terms-of-service" },
  { label: "Sitemap", route: "/sitemap" },
];

const columnConfig = [
  {
    heading: "Company",
    labels: ["Home", "About Us", "Our Team", "Results", "Blog", "Contact"],
  },
  {
    heading: "Solutions",
    labels: ["AI Marketing Employee", "Solutions", "Pricing", "Industries", "CRM Automation"],
  },
  {
    heading: "Marketing",
    labels: ["SEO", "AEO & GEO", "Local SEO", "Google Ads", "Meta Ads", "Social Media Marketing"],
  },
  {
    heading: "Development",
    labels: ["Web Design", "Web Development", "Custom Programming"],
  },
  {
    heading: "Legal",
    labels: ["Privacy Policy", "Terms of Service", "Sitemap"],
  },
];

export default function Footer({
  businessName = "Echo5 Digital",
  tagline = "AI-Powered Growth Engine",
  description = "We blend artificial intelligence with cutting-edge digital marketing, web development, and custom programming to accelerate your business growth.",
  email = "sales@echo5digital.com",
  phone = "+1 (800) 555-0199",
  address = "Los Angeles, CA, United States",
  links = defaultLinks,
  logoSrc = "/logo.png",
  socialLinks = {
    linkedin: "https://www.linkedin.com/company/echo5digital",
    instagram: "https://www.instagram.com/echo5.digital/",
    facebook: "https://www.facebook.com/echo5digitalventures/",
    youtube: "https://www.youtube.com/channel/UC4zr-6ArzhU2sVsOOEbQf1A",
  },
}: FooterProps) {
  const linkMap = new Map(links.map((l) => [l.label, l.route]));

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#0A0F1E", color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Ambient glow top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #7C3AED 30%, #A855F7 50%, #7C3AED 70%, transparent)",
        }}
      />

      {/* Background decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section: brand + links + CTA */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,3fr)_minmax(0,1.1fr)] gap-10 xl:gap-10 mb-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group w-fit">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={`${businessName} logo`}
                  style={{ height: "44px", width: "auto" }}
                />
              ) : (
                <>
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-lg"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 0 16px rgba(124,58,237,0.6)",
                    }}
                  >
                    <Zap size={18} color="#fff" strokeWidth={2.5} />
                  </div>
                  <span
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                    className="text-xl font-bold tracking-tight group-hover:text-white transition-colors"
                  >
                    {businessName}
                  </span>
                </>
              )}
            </Link>

            {/* Tagline */}
            <p
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#A855F7" }}
              className="text-sm font-semibold uppercase tracking-widest"
            >
              {tagline}
            </p>

            {/* Description */}
            <p style={{ color: "#9CA3AF" }} className="text-sm leading-relaxed max-w-xs">
              {description}
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mt-1">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm transition-colors hover:text-white group"
                style={{ color: "#9CA3AF" }}
              >
                <Mail
                  size={15}
                  style={{ color: "#7C3AED" }}
                  className="flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                {email}
              </a>
              <a
                href={`tel:+${phone.replace(/\D/g, "").replace(/^1?/, "1")}`}
                className="flex items-center gap-2 text-sm transition-colors hover:text-white group"
                style={{ color: "#9CA3AF" }}
              >
                <Phone
                  size={15}
                  style={{ color: "#7C3AED" }}
                  className="flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                {phone}
              </a>
              <span
                className="flex items-center gap-2 text-sm"
                style={{ color: "#9CA3AF" }}
              >
                <MapPin size={15} style={{ color: "#7C3AED" }} className="flex-shrink-0" />
                {address}
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.linkedin && (
                <SocialIcon href={socialLinks.linkedin} label="LinkedIn">
                  <Linkedin size={15} />
                </SocialIcon>
              )}
              {socialLinks.instagram && (
                <SocialIcon href={socialLinks.instagram} label="Instagram">
                  <Instagram size={15} />
                </SocialIcon>
              )}
              {socialLinks.facebook && (
                <SocialIcon href={socialLinks.facebook} label="Facebook">
                  <Facebook size={15} />
                </SocialIcon>
              )}
              {socialLinks.youtube && (
                <SocialIcon href={socialLinks.youtube} label="YouTube">
                  <Youtube size={15} />
                </SocialIcon>
              )}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10">
            {columnConfig.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h4
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                  className="text-sm font-semibold uppercase tracking-widest mb-1 relative pb-2"
                >
                  {col.heading}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-6"
                    style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7)" }}
                  />
                </h4>
                {col.labels.map((label) => {
                  const route = linkMap.get(label);
                  if (!route) return null;
                  return (
                    <Link
                      key={label}
                      href={route}
                      className="text-sm transition-colors duration-200 hover:text-white relative group w-fit"
                      style={{ color: "#9CA3AF" }}
                    >
                      <span className="relative">
                        {label}
                        <span
                          className="absolute -bottom-px left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                          style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7)" }}
                        />
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div
            className="flex flex-col gap-4 rounded-2xl p-6 h-fit"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.1) 100%)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 16px rgba(124,58,237,0.5)",
              }}
            >
              <Rocket size={18} color="#fff" />
            </div>
            <div>
              <p
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
                className="font-semibold text-base leading-snug"
              >
                Ready to grow with AI-powered marketing?
              </p>
              <p style={{ color: "#9CA3AF" }} className="text-sm mt-1.5 leading-relaxed">
                Let&apos;s build your digital growth engine together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 w-fit"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5), 0 4px 14px rgba(124,58,237,0.3)",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              Get Started Today
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 30%, rgba(168,85,247,0.4) 70%, transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ color: "#6B7280" }} className="text-xs text-center sm:text-left">
            © {currentYear}{" "}
            <a
              href="https://www.echo5digital.com/"
              style={{ color: "#A855F7" }}
              className="font-medium transition-colors duration-200 hover:text-white"
            >
              {businessName}
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((label) => {
              const route = linkMap.get(label);
              if (!route) return null;
              return (
                <Link
                  key={label}
                  href={route}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: "#6B7280" }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110"
      style={{
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(124,58,237,0.3)",
        color: "#A855F7",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.35)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 12px rgba(124,58,237,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.15)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
      }}
    >
      {children}
    </a>
  );
}