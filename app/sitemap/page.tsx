import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { LucideProps } from "lucide-react";
import {
  Home,
  Cpu,
  Wrench,
  Building2,
  Shield,
  Globe,
  Search,
  Share2,
  Zap,
  Megaphone,
  Code2,
  Settings,
  ChevronRight,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export const metadata: Metadata = {
  title: "Sitemap | Echo5 Digital – All Pages",
  description:
    "Browse the complete sitemap for Echo5 Digital. Find all service pages, industry marketing pages, AI marketing tools, blog, and more in one place.",
  alternates: {
    canonical: "/sitemap",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Sitemap", href: "/sitemap" },
];

interface SitemapLink {
  label: string;
  href: string;
  description?: string;
}

interface SitemapGroup {
  title: string;
  links: SitemapLink[];
}

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

const mainPages: SitemapLink[] = [
  { label: "Home", href: "/", description: "Echo5 Digital homepage" },
  { label: "Solutions", href: "/solutions", description: "All services and digital solutions" },
  { label: "Pricing", href: "/pricing", description: "Transparent pricing plans" },
  { label: "About Us", href: "/about-us", description: "Our story and mission" },
  { label: "Team", href: "/team", description: "Meet our expert team" },
  { label: "Results", href: "/results", description: "Client success stories and case studies" },
  { label: "Contact", href: "/contact", description: "Get in touch with us" },
  { label: "Blog", href: "/blog", description: "Marketing insights and digital strategy tips" },
];

const aiMarketingPages: SitemapLink[] = [
  { label: "AI Marketing Employee", href: "/ai-marketing-employee", description: "Overview of our AI Marketing Employee platform" },
  { label: "SEO / AEO AI Employee", href: "/ai-marketing-employee/seo-aeo", description: "AI-powered SEO and Answer Engine Optimization" },
  { label: "Social Media AI Employee", href: "/ai-marketing-employee/social-media", description: "AI-driven social media management" },
  { label: "Google Ads AI Employee", href: "/ai-marketing-employee/google-ads", description: "Intelligent Google Ads campaign management" },
  { label: "Content AI Employee", href: "/ai-marketing-employee/content", description: "AI-generated content strategy and creation" },
  { label: "Website Growth AI Employee", href: "/ai-marketing-employee/website-growth", description: "AI tools for website conversion and growth" },
  { label: "Super Growth AI Employee", href: "/ai-marketing-employee/super-growth", description: "Full-stack AI growth package" },
];

const serviceGroups: SitemapGroup[] = [
  {
    title: "SEO & Content",
    links: [
      { label: "SEO Services", href: "/services/seo", description: "Search Engine Optimization" },
      { label: "AEO & GEO", href: "/services/aeo-geo", description: "Answer Engine & Generative Engine Optimization" },
      { label: "Local SEO", href: "/services/local-seo", description: "Local search visibility" },
      { label: "Content Marketing", href: "/services/content-marketing", description: "Strategic content creation" },
    ],
  },
  {
    title: "Paid Ads",
    links: [
      { label: "Google Ads", href: "/services/google-ads", description: "PPC and Google advertising" },
      { label: "Meta Ads", href: "/services/meta-ads", description: "Facebook and Instagram advertising" },
      { label: "Remarketing", href: "/services/remarketing", description: "Retargeting campaigns" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { label: "Social Media Marketing", href: "/services/social-media-marketing", description: "Full-service social media management" },
      { label: "Social Media Strategy", href: "/services/social-media-strategy", description: "Custom social strategy and planning" },
    ],
  },
  {
    title: "Web & Development",
    links: [
      { label: "Web Design", href: "/services/web-design", description: "Custom website design" },
      { label: "Web Development", href: "/services/web-development", description: "Full-stack web development" },
      { label: "Custom Programming", href: "/services/custom-programming", description: "Bespoke software solutions" },
      { label: "eCommerce Development", href: "/services/ecommerce-development", description: "Online store development" },
    ],
  },
  {
    title: "Automation & Reporting",
    links: [
      { label: "CRM Automation", href: "/services/crm-automation", description: "CRM setup and workflow automation" },
      { label: "Marketing Automation", href: "/services/marketing-automation", description: "Automated marketing workflows" },
      { label: "Analytics & Reporting", href: "/services/analytics-reporting", description: "Data-driven performance reporting" },
    ],
  },
];

const industryPages: SitemapLink[] = [
  { label: "Dental Marketing", href: "/industries/dental-marketing", description: "Digital marketing for dental practices" },
  { label: "Healthcare Marketing", href: "/industries/healthcare-marketing", description: "Marketing for healthcare providers" },
  { label: "Med Spa Marketing", href: "/industries/med-spa-marketing", description: "Growth solutions for med spas" },
  { label: "Real Estate Marketing", href: "/industries/real-estate-marketing", description: "Digital marketing for real estate" },
  { label: "Restaurant Marketing", href: "/industries/restaurant-marketing", description: "Online marketing for restaurants" },
  { label: "E-commerce Marketing", href: "/industries/ecommerce-marketing", description: "Marketing for online stores" },
  { label: "Home Services Marketing", href: "/industries/home-services-marketing", description: "Marketing for home service companies" },
  { label: "Financial Services Marketing", href: "/industries/financial-services-marketing", description: "Marketing for finance and fintech" },
  { label: "Roofing Marketing", href: "/industries/roofing-marketing", description: "Digital marketing for roofing companies" },
  { label: "HVAC Marketing", href: "/industries/hvac-marketing", description: "Marketing for HVAC businesses" },
  { label: "Legal & Law Firm Marketing", href: "/industries/law-firm-marketing", description: "Marketing solutions for law firms" },
];

const legalPages: SitemapLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy", description: "How we collect, use, and protect your data" },
  { label: "Terms of Service", href: "/terms-of-service", description: "Terms governing the use of Echo5 Digital services" },
  { label: "Sitemap", href: "/sitemap", description: "Complete list of all pages on Echo5 Digital" },
];

function SitemapLinkItem({ link }: { link: SitemapLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className="sitemap-link-item group flex items-start gap-3 p-3 rounded-xl transition-all duration-200"
        style={{
          border: "1px solid transparent",
        }}
      >
        <ChevronRight
          size={15}
          className="mt-0.5 flex-shrink-0 transition-colors duration-200"
          style={{ color: "#7C3AED" }}
          aria-hidden="true"
        />
        <span className="flex flex-col gap-0.5">
          <span
            className="text-sm font-medium transition-colors duration-200 group-hover:text-purple-400"
            style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif" }}
          >
            {link.label}
          </span>
          {link.description && (
            <span
              className="text-xs leading-relaxed"
              style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}
            >
              {link.description}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
}

function SitemapCard({
  title,
  icon: Icon,
  links,
}: {
  title: string;
  icon: LucideIcon;
  links: SitemapLink[];
  accentColor?: string;
}) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(124,58,237,0.2)",
      }}
    >
      {/* Card header */}
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{
          borderBottom: "1px solid rgba(124,58,237,0.15)",
          background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)",
        }}
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, rgba(124,58,237,0.35), rgba(168,85,247,0.2))`,
            border: "1px solid rgba(168,85,247,0.3)",
          }}
        >
          <Icon size={16} style={{ color: "#A855F7" }} aria-hidden="true" />
        </div>
        <h3
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
        >
          {title}
        </h3>
        <span
          className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(124,58,237,0.2)",
            color: "#A855F7",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          {links.length}
        </span>
      </div>
      {/* Link list */}
      <nav aria-label={`${title} pages`}>
        <ul className="px-2 py-2 flex flex-col gap-0.5">
          {links.map((link) => (
            <SitemapLinkItem key={link.href} link={link} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default function SitemapPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sitemap | Echo5 Digital – All Pages",
    description:
      "Browse the complete sitemap for Echo5 Digital. Find all service pages, industry marketing pages, AI marketing tools, blog, and more in one place.",
    url: "https://echo5digital.com/sitemap",
    publisher: {
      "@type": "Organization",
      name: "Echo5 Digital",
      url: "https://echo5digital.com",
      email: "hello@echo5digital.com",
      telephone: "713-489-7004",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
  };

  const iconMap: Record<string, LucideIcon> = {
    "SEO & Content": Search,
    "Paid Ads": Megaphone,
    "Social Media": Share2,
    "Web & Development": Code2,
    "Automation & Reporting": Settings,
  };

  return (
    <>
      <style>{`
        .sitemap-link-item:hover {
          background-color: rgba(124,58,237,0.1) !important;
          border-color: rgba(168,85,247,0.4) !important;
          box-shadow: 0 4px 20px rgba(124,58,237,0.2);
        }
        .sitemap-link-item-alt:hover {
          background-color: rgba(124,58,237,0.12) !important;
          border-color: rgba(168,85,247,0.45) !important;
          box-shadow: 0 4px 20px rgba(124,58,237,0.25);
        }
        .sitemap-cta-link:hover {
          filter: brightness(1.15);
          box-shadow: 0 0 32px rgba(124,58,237,0.75), 0 6px 20px rgba(124,58,237,0.4);
          transform: translateY(-2px);
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <Header />

      <main style={{ backgroundColor: "#0A0F1E", minHeight: "100vh" }}>
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Page Header */}
        <Section background="gradient" spacing="md" maxWidth="xl" centered>
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(ellipse, #7C3AED 0%, #A855F7 40%, transparent 70%)",
            }}
          />

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <Globe size={14} style={{ color: "#A855F7" }} aria-hidden="true" />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#A855F7", fontFamily: "Inter, sans-serif" }}
              >
                Site Navigation
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
            >
              Echo5 Digital{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sitemap
              </span>
            </h1>

            <p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif", lineHeight: "1.75" }}
            >
              A complete directory of every page on our site — from AI marketing tools and services
              to industry-specific solutions and resources.
            </p>

            {/* Stats bar */}
            <div
              className="mt-8 inline-flex flex-wrap justify-center gap-6 sm:gap-10 px-6 py-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {[
                { value: mainPages.length, label: "Main Pages" },
                { value: aiMarketingPages.length, label: "AI Pages" },
                { value: serviceGroups.reduce((a, g) => a + g.links.length, 0), label: "Service Pages" },
                { value: industryPages.length, label: "Industry Pages" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(229,231,235,0.5)", fontFamily: "Inter, sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Main Pages */}
        <Section background="default" spacing="sm" maxWidth="xl" withDivider>
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
            >
              <Home size={18} style={{ color: "#A855F7" }} aria-hidden="true" />
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Main Pages
              </h2>
              <p className="text-sm" style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}>
                Core navigation pages for Echo5 Digital
              </p>
            </div>
          </div>

          <nav aria-label="Main pages">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {mainPages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="sitemap-link-item group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <ChevronRight size={14} style={{ color: "#7C3AED" }} className="flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div
                        className="text-sm font-semibold transition-colors duration-200 group-hover:text-purple-400"
                        style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
                      >
                        {link.label}
                      </div>
                      {link.description && (
                        <div
                          className="text-xs mt-0.5"
                          style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                        >
                          {link.description}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Section>

        {/* AI Marketing Employee Pages */}
        <Section background="elevated" spacing="sm" maxWidth="xl" withDivider>
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
            >
              <Cpu size={18} style={{ color: "#A855F7" }} aria-hidden="true" />
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                AI Marketing Employee Pages
              </h2>
              <p className="text-sm" style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}>
                Our AI-powered marketing platform and specialist sub-pages
              </p>
            </div>
          </div>

          <nav aria-label="AI Marketing Employee pages">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {aiMarketingPages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="sitemap-link-item-alt group flex items-start gap-3 px-4 py-4 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(124,58,237,0.06)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <Zap
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#A855F7" }}
                      aria-hidden="true"
                    />
                    <div>
                      <div
                        className="text-sm font-semibold transition-colors duration-200 group-hover:text-purple-400"
                        style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
                      >
                        {link.label}
                      </div>
                      {link.description && (
                        <div
                          className="text-xs mt-0.5 leading-relaxed"
                          style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                        >
                          {link.description}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Section>

        {/* Services Pages */}
        <Section background="default" spacing="sm" maxWidth="xl" withDivider>
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
            >
              <Wrench size={18} style={{ color: "#A855F7" }} aria-hidden="true" />
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Services Pages
              </h2>
              <p className="text-sm" style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}>
                Full-service digital marketing, advertising, and development offerings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceGroups.map((group) => {
              const GroupIcon: LucideIcon = iconMap[group.title] ?? Wrench;
              return (
                <SitemapCard
                  key={group.title}
                  title={group.title}
                  icon={GroupIcon}
                  links={group.links}
                />
              );
            })}
          </div>
        </Section>

        {/* Industries Pages */}
        <Section background="elevated" spacing="sm" maxWidth="xl" withDivider>
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
            >
              <Building2 size={18} style={{ color: "#A855F7" }} aria-hidden="true" />
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Industries Pages
              </h2>
              <p className="text-sm" style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}>
                Tailored marketing strategies for specific industries
              </p>
            </div>
          </div>

          <nav aria-label="Industry pages">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {industryPages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="sitemap-link-item group flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(124,58,237,0.18)",
                    }}
                  >
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#7C3AED" }} aria-hidden="true" />
                    <div>
                      <div
                        className="text-sm font-semibold transition-colors duration-200 group-hover:text-purple-400"
                        style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
                      >
                        {link.label}
                      </div>
                      {link.description && (
                        <div
                          className="text-xs mt-0.5 leading-relaxed"
                          style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                        >
                          {link.description}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Section>

        {/* Legal and Utility Pages */}
        <Section background="default" spacing="sm" maxWidth="xl" withDivider>
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
            >
              <Shield size={18} style={{ color: "#A855F7" }} aria-hidden="true" />
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Legal & Utility Pages
              </h2>
              <p className="text-sm" style={{ color: "rgba(229,231,235,0.45)", fontFamily: "Inter, sans-serif" }}>
                Important legal documents and site utilities
              </p>
            </div>
          </div>

          <nav aria-label="Legal and utility pages">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {legalPages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="sitemap-link-item group flex flex-col gap-2 px-5 py-4 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <span
                      className="text-sm font-semibold transition-colors duration-200 group-hover:text-purple-400"
                      style={{ fontFamily: "Inter, sans-serif", color: "#E5E7EB" }}
                    >
                      {link.label}
                    </span>
                    {link.description && (
                      <span
                        className="text-xs leading-relaxed"
                        style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
                      >
                        {link.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Section>

        {/* CTA Section */}
        <Section background="gradient" spacing="md" maxWidth="xl" centered withDivider>
          <div
            className="relative rounded-2xl overflow-hidden px-6 py-12 sm:py-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at center, rgba(124,58,237,0.3) 0%, transparent 65%)",
              }}
            />
            <div className="relative z-10">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
              >
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p
                className="text-base mb-8 max-w-xl mx-auto"
                style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
              >
                Our team is ready to help. Reach out and let&apos;s talk about your marketing
                and growth goals.
              </p>
              <Link
                href="/contact"
                className="sitemap-cta-link inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.55), 0 4px 14px rgba(124,58,237,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Contact Echo5 Digital
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}