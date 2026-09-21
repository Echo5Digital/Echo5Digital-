'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

interface NavLink {
  label: string;
  route: string;
  children?: NavLink[];
}

interface HeaderProps {
  businessName?: string;
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaRoute?: string;
  logoSrc?: string;
}

const servicesSubLinks: NavLink[] = [
  { label: 'All Services', route: '/solutions' },
  { label: 'SEO', route: '/services/seo' },
  { label: 'AEO & GEO', route: '/services/aeo-geo' },
  { label: 'Google Ads', route: '/services/google-ads' },
  { label: 'Meta Ads', route: '/services/meta-ads' },
  { label: 'Social Media Marketing', route: '/services/social-media-marketing' },
  { label: 'Local SEO', route: '/services/local-seo' },
];

const industriesSubLinks: NavLink[] = [
  { label: 'All Industries', route: '/industries' },
  { label: 'Dental', route: '/industries/dental' },
  { label: 'Healthcare', route: '/industries/healthcare' },
  { label: 'Education SEO', route: '/industries/education' },
  { label: 'Financial Services SEO', route: '/industries/financial-services' },
  { label: 'Fashion & Apparel SEO', route: '/industries/fashion' },
  { label: 'Fitness', route: '/industries/fitness' },
  { label: 'Travel and Tourism SEO', route: '/industries/travel' },
  { label: 'Real Estate', route: '/industries/real-estate' },
  { label: 'Professional Services', route: '/industries/professional-services' },
  { label: 'eCommerce', route: '/industries/ecommerce' },
  { label: 'Automotive', route: '/industries/automotive' },
  { label: 'Law Firms', route: '/industries/law-firm-marketing' },
  { label: 'Entertainment and Media SEO', route: '/industries/entertainment-media' },
  { label: 'Manufacturing and Industrial SEO', route: '/industries/manufacturing-industrial' },
];

const defaultNavLinks: NavLink[] = [
  { label: 'Home', route: '/' },
  { label: 'About Us', route: '/about-us' },
  { label: 'AI Marketing Employee', route: '/ai-marketing-employee' },
  { label: 'Services', route: '/solutions', children: servicesSubLinks },
  { label: 'Industries', route: '/industries', children: industriesSubLinks },
  { label: 'Pricing', route: '/pricing' },
  { label: 'Results', route: '/results' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' },
];

export default function Header({
  businessName = 'Echo5 Digital',
  navLinks = defaultNavLinks,
  ctaLabel = 'Book a Free Call',
  ctaRoute = '/contact',
  logoSrc = '/logo.png',
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileSubmenu(null);
    setOpenDesktopDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openDesktopDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktopDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDesktopDropdown]);

  const isActive = (route: string) => pathname === route;
  const isParentActive = (link: NavLink) =>
    isActive(link.route) || (link.children?.some((child) => isActive(child.route)) ?? false);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        .echo5-header-nav-link {
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          font-weight: 400;
          color: #E5E7EB;
          text-decoration: none;
          padding: 0.4rem 0.65rem;
          border-radius: 0.5rem;
          white-space: nowrap;
          position: relative;
          transition: color 0.2s ease, background-color 0.2s ease;
          background-color: transparent;
        }
        .echo5-header-nav-link:hover {
          color: #A855F7;
          background-color: rgba(124,58,237,0.08);
        }
        .echo5-header-nav-link.active {
          color: #A855F7;
          font-weight: 600;
          background-color: rgba(124,58,237,0.12);
        }

        .echo5-cta-btn {
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          color: #ffffff;
          text-decoration: none;
          padding: 0.55rem 1.25rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          box-shadow: 0 0 20px rgba(124,58,237,0.55), 0 2px 8px rgba(0,0,0,0.3);
          transition: filter 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
          white-space: nowrap;
          display: inline-block;
        }
        .echo5-cta-btn:hover {
          filter: brightness(1.15);
          box-shadow: 0 0 28px rgba(124,58,237,0.75), 0 4px 12px rgba(0,0,0,0.35);
          transform: translateY(-1px);
        }

        .echo5-hamburger-btn {
          background: rgba(124,58,237,0.15);
          border: 1px solid rgba(124,58,237,0.3);
          border-radius: 0.5rem;
          color: #E5E7EB;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          transition: background-color 0.2s ease;
          flex-shrink: 0;
        }
        .echo5-hamburger-btn:hover {
          background-color: rgba(124,58,237,0.3);
        }

        .echo5-mobile-link {
          font-family: Space Grotesk, sans-serif;
          font-weight: 500;
          font-size: 1.3rem;
          color: #E5E7EB;
          text-decoration: none;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: transparent;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .echo5-mobile-link:hover {
          color: #A855F7;
          background-color: rgba(124,58,237,0.08);
        }
        .echo5-mobile-link.active {
          color: #A855F7;
          font-weight: 700;
          background-color: rgba(124,58,237,0.15);
        }

        .echo5-mobile-parent-row {
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .echo5-mobile-parent-row .echo5-mobile-link {
          flex: 1;
          border-bottom: none;
        }
        .echo5-mobile-submenu-toggle {
          background: transparent;
          border: none;
          color: #E5E7EB;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .echo5-mobile-submenu-toggle:hover {
          color: #A855F7;
        }
        .echo5-mobile-submenu-toggle.open {
          transform: rotate(180deg);
          color: #A855F7;
        }

        .echo5-mobile-submenu {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
          background-color: rgba(124,58,237,0.05);
          border-radius: 0.5rem;
        }
        .echo5-mobile-submenu.open {
          max-height: 500px;
        }
        .echo5-mobile-sublink {
          font-family: Inter, sans-serif;
          font-weight: 500;
          font-size: 1rem;
          color: #C4C9D4;
          text-decoration: none;
          padding: 0.75rem 1rem 0.75rem 2rem;
          display: block;
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .echo5-mobile-sublink:hover {
          color: #A855F7;
          background-color: rgba(124,58,237,0.08);
        }
        .echo5-mobile-sublink.active {
          color: #A855F7;
          font-weight: 700;
        }

        .echo5-mobile-chip-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.5rem;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          padding: 0 0.25rem;
          transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
        }
        .echo5-mobile-chip-grid.open {
          max-height: 1200px;
          opacity: 1;
          padding: 0.75rem 0.25rem 1rem;
        }
        .echo5-mobile-chip {
          font-family: Inter, sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          line-height: 1.25;
          color: #C4C9D4;
          text-decoration: none;
          text-align: center;
          padding: 0.75rem 0.5rem;
          border-radius: 0.65rem;
          background-color: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.18);
          transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }
        .echo5-mobile-chip:hover {
          color: #A855F7;
          background-color: rgba(124,58,237,0.16);
          border-color: rgba(124,58,237,0.4);
        }
        .echo5-mobile-chip.active {
          color: #A855F7;
          font-weight: 700;
          background-color: rgba(124,58,237,0.2);
          border-color: #A855F7;
        }
        .echo5-mobile-chip.full-width {
          grid-column: 1 / -1;
        }

        .echo5-mobile-cta {
          font-family: Inter, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #ffffff;
          text-decoration: none;
          padding: 0.9rem 1.5rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          box-shadow: 0 0 24px rgba(124,58,237,0.6);
          display: block;
          text-align: center;
          transition: filter 0.2s ease;
        }
        .echo5-mobile-cta:hover {
          filter: brightness(1.15);
        }

        .echo5-nav-item {
          position: relative;
        }
        .echo5-nav-dropdown-trigger {
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          font-weight: 400;
          color: #E5E7EB;
          background: transparent;
          border: none;
          cursor: pointer;
          text-decoration: none;
          padding: 0.4rem 0.65rem;
          border-radius: 0.5rem;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .echo5-nav-dropdown-trigger:hover {
          color: #A855F7;
          background-color: rgba(124,58,237,0.08);
        }
        .echo5-nav-dropdown-trigger.active {
          color: #A855F7;
          font-weight: 600;
          background-color: rgba(124,58,237,0.12);
        }
        .echo5-nav-dropdown-trigger svg {
          transition: transform 0.2s ease;
        }
        .echo5-nav-dropdown-trigger svg.open {
          transform: rotate(180deg);
        }

        .echo5-nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          min-width: 240px;
          background-color: rgba(15,20,38,0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 0.75rem;
          box-shadow: 0 12px 32px rgba(0,0,0,0.45);
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          z-index: 1001;
        }
        .echo5-nav-dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .echo5-nav-dropdown-menu.wide {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          min-width: 480px;
        }
        .echo5-nav-dropdown-link {
          font-family: Inter, sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #E5E7EB;
          text-decoration: none;
          padding: 0.55rem 0.75rem;
          border-radius: 0.5rem;
          white-space: nowrap;
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .echo5-nav-dropdown-link:hover {
          color: #A855F7;
          background-color: rgba(124,58,237,0.1);
        }
        .echo5-nav-dropdown-link.active {
          color: #A855F7;
          font-weight: 700;
          background-color: rgba(124,58,237,0.15);
        }

        .desktop-nav {
          display: flex !important;
        }
        .echo5-hamburger-btn {
          display: flex !important;
        }
        @media (min-width: 1100px) {
          .echo5-hamburger-btn {
            display: none !important;
          }
          .echo5-cta-btn {
            display: inline-block !important;
          }
        }
        @media (max-width: 1099px) {
          .desktop-nav {
            display: none !important;
          }
          .echo5-cta-btn {
            display: none !important;
          }
        }
      `}</style>

      <header
        style={{
          backgroundColor: 'rgba(10,15,30,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.25)' : '1px solid transparent',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 4px 32px rgba(124,58,237,0.12)' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={`${businessName} logo`}
                style={{ height: '44px', width: 'auto' }}
              />
            ) : (
              <>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.5rem',
                    background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(124,58,237,0.6)',
                    flexShrink: 0,
                  }}
                >
                  <Zap size={20} color="#fff" fill="#fff" />
                </div>
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#E5E7EB',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {businessName.split('Digital')[0]}
                  <span style={{ color: '#A855F7' }}>Digital</span>
                </span>
              </>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav
            ref={navRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              flex: 1,
              justifyContent: 'center',
              padding: '0 1rem',
            }}
            className="desktop-nav"
          >
            {navLinks.slice(0, 8).map((link) =>
              link.children && link.children.length > 0 ? (
                <div className="echo5-nav-item" key={link.route}>
                  <button
                    type="button"
                    className={`echo5-nav-dropdown-trigger${isParentActive(link) ? ' active' : ''}`}
                    onClick={() =>
                      setOpenDesktopDropdown((prev) => (prev === link.route ? null : link.route))
                    }
                    aria-expanded={openDesktopDropdown === link.route}
                  >
                    {link.label}
                    <ChevronDown size={14} className={openDesktopDropdown === link.route ? 'open' : ''} />
                  </button>
                  <div
                    className={`echo5-nav-dropdown-menu${link.children.length > 8 ? ' wide' : ''}${
                      openDesktopDropdown === link.route ? ' open' : ''
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.route}
                        href={child.route}
                        className={`echo5-nav-dropdown-link${isActive(child.route) ? ' active' : ''}`}
                        onClick={() => setOpenDesktopDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.route}
                  href={link.route}
                  className={`echo5-header-nav-link${isActive(link.route) ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Link
              href={ctaRoute}
              className="echo5-cta-btn"
            >
              {ctaLabel}
            </Link>

            {/* Hamburger */}
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="echo5-hamburger-btn"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          backgroundColor: 'rgba(10,15,30,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '72px',
          overflowY: 'auto',
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-10%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '-15%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: '0.25rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {navLinks.map((link) =>
            link.children && link.children.length > 0 ? (
              <div key={link.route}>
                <div className="echo5-mobile-parent-row">
                  <Link
                    href={link.route}
                    className={`echo5-mobile-link${isParentActive(link) ? ' active' : ''}`}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={openMobileSubmenu === link.route ? `Collapse ${link.label} submenu` : `Expand ${link.label} submenu`}
                    aria-expanded={openMobileSubmenu === link.route}
                    className={`echo5-mobile-submenu-toggle${openMobileSubmenu === link.route ? ' open' : ''}`}
                    onClick={() =>
                      setOpenMobileSubmenu((prev) => (prev === link.route ? null : link.route))
                    }
                  >
                    <ChevronDown size={20} />
                  </button>
                </div>
                {link.children.length > 8 ? (
                  <div
                    className={`echo5-mobile-chip-grid${openMobileSubmenu === link.route ? ' open' : ''}`}
                  >
                    {link.children.map((child, index) => {
                      const isLastOdd =
                        link.children!.length % 2 !== 0 && index === link.children!.length - 1;
                      return (
                        <Link
                          key={child.route}
                          href={child.route}
                          className={`echo5-mobile-chip${isActive(child.route) ? ' active' : ''}${isLastOdd ? ' full-width' : ''}`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className={`echo5-mobile-submenu${openMobileSubmenu === link.route ? ' open' : ''}`}>
                    {link.children.map((child) => (
                      <Link
                        key={child.route}
                        href={child.route}
                        className={`echo5-mobile-sublink${isActive(child.route) ? ' active' : ''}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.route}
                href={link.route}
                className={`echo5-mobile-link${isActive(link.route) ? ' active' : ''}`}
              >
                {link.label}
                {isActive(link.route) && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#A855F7',
                      boxShadow: '0 0 8px #A855F7',
                    }}
                  />
                )}
              </Link>
            )
          )}

          <div style={{ marginTop: '1.5rem' }}>
            <Link
              href={ctaRoute}
              className="echo5-mobile-cta"
            >
              {ctaLabel}
            </Link>
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div style={{ height: '72px' }} />
    </>
  );
}