'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  route: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', route: '/' },
  { label: 'AI Marketing Employee', route: '/ai-marketing-employee' },
  { label: 'Services', route: '/solutions' },
  { label: 'Industries', route: '/industries' },
  { label: 'Pricing', route: '/pricing' },
  { label: 'Work', route: '/results' },
  { label: 'Insights', route: '/blog' },
  { label: 'About', route: '/about-us' },
  { label: 'Contact', route: '/contact' },
];

export default function HomeHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (route: string) => pathname === route;

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .e5h-nav-link {
          font-family: Inter, sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #4B5563;
          text-decoration: none;
          padding: 0.4rem 0.15rem;
          position: relative;
          transition: color 0.2s ease;
        }
        .e5h-nav-link:hover {
          color: #4F32D9;
        }
        .e5h-nav-link.active {
          color: #4F32D9;
          font-weight: 600;
        }

        .e5h-cta-btn {
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          color: #ffffff;
          text-decoration: none;
          padding: 0.65rem 1.4rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #6B4EF0, #8B5CF6);
          box-shadow: 0 4px 16px rgba(107,78,240,0.35);
          transition: filter 0.2s ease, transform 0.15s ease;
          white-space: nowrap;
          display: inline-block;
        }
        .e5h-cta-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .e5h-icon-btn {
          background: transparent;
          border: none;
          color: #1F2340;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }

        .e5h-mobile-link {
          font-family: Space Grotesk, sans-serif;
          font-weight: 500;
          font-size: 1.3rem;
          color: #1F2340;
          text-decoration: none;
          padding: 0.9rem 0;
          display: block;
          border-bottom: 1px solid rgba(107,78,240,0.1);
        }
        .e5h-mobile-link.active {
          color: #4F32D9;
          font-weight: 700;
        }

        .e5h-desktop-nav {
          display: none;
        }
        .e5h-cta-desktop {
          display: none;
        }
        @media (min-width: 900px) {
          .e5h-desktop-nav {
            display: flex;
          }
          .e5h-cta-desktop {
            display: inline-block;
          }
          .e5h-hamburger {
            display: none;
          }
        }
      `}</style>

      <header
        style={{
          backgroundColor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '0.02em',
                color: '#1F2340',
                lineHeight: 1,
              }}
            >
              ECHO<span style={{ color: '#6B4EF0' }}>5</span>
              <div
                style={{
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  color: '#6B7280',
                  marginTop: '2px',
                }}
              >
                DIGITAL
              </div>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="e5h-desktop-nav" style={{ alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className={`e5h-nav-link${isActive(link.route) ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link href="/contact" className="e5h-cta-btn e5h-cta-desktop">
              Let&apos;s Talk →
            </Link>
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="e5h-icon-btn e5h-hamburger"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
          backgroundColor: '#ffffff',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '90px',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflowY: 'auto',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className={`e5h-mobile-link${isActive(link.route) ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/contact" className="e5h-cta-btn" style={{ display: 'block', textAlign: 'center' }}>
              Let&apos;s Talk →
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
