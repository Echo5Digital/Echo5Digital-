"use client";

import { useEffect, useRef, useState } from "react";
import GradientBtn from "@/components/ui/GradientBtn";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  { name: "Healthcare", path: "M12 4v16M4 12h16", strokeWidth: 2 },
  { name: "Legal", path: "M12 3v18M6 7l-3 6a3 3 0 006 0l-3-6zM18 7l-3 6a3 3 0 006 0l-3-6zM4 7h16M8 21h8", strokeWidth: 1.4 },
  { name: "Real Estate", path: "M3 11l9-7 9 7M5 10v10h14V10", strokeWidth: 1.6 },
  { name: "Dental", path: "M12 4c-2 0-3 1.5-4 1.5S6 4 4.5 4C3 4 2 6 2 8c0 3 1 5 1.5 8 .3 1.7 1 3 2 3s1.5-2 1.8-4 .7-3 1.7-3 1.4 1 1.7 3 .8 4 1.8 4 1.7-1.3 2-3c.5-3 1.5-5 1.5-8 0-2-1-4-2.5-4-1.5 0-2 1.5-4 1.5z", strokeWidth: 1.3 },
  { name: "eCommerce", path: "M3 4h2l1.5 11h11L20 8H6.5M9 20a1 1 0 100-2 1 1 0 000 2zM16 20a1 1 0 100-2 1 1 0 000 2z", strokeWidth: 1.5 },
  { name: "Finance", path: "M12 2v20M17 6.5c0-1.4-2-2.5-5-2.5s-5 1.3-5 3 2 2.5 5 3 5 1.3 5 3-2 3-5 3-5-1.1-5-2.5", strokeWidth: 1.6 },
  { name: "Automotive", path: "M3 16l1.5-5A2 2 0 016.4 9.5h11.2a2 2 0 011.9 1.5L21 16M3 16h18M3 16v3h2v-3M19 16v3h2v-3M6.5 19a1.5 1.5 0 103 0M14.5 19a1.5 1.5 0 103 0", strokeWidth: 1.4 },
  { name: "Education", path: "M2 8l10-4 10 4-10 4-10-4zM6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5", strokeWidth: 1.4 },
  { name: "Fitness", path: "M3 10v4M6 8v8M18 8v8M21 10v4M6 12h12", strokeWidth: 1.8 },
  { name: "Manufacturing", path: "M3 20V11l5 4v-4l5 4v-4l6-4.5V20H3z", strokeWidth: 1.4 },
  { name: "Travel", path: "M12 3l3 6 6 2-6 2-1 6-2-5-6-2 6-2 0-7z", strokeWidth: 1.3 },
  { name: "Restaurants", path: "M5 3v8M3 3v5a2 2 0 002 2M7 3v5a2 2 0 01-2 2M5 11v10M19 3c-2 0-3 2-3 5v3h3v9", strokeWidth: 1.3 },
];

const INDUSTRY_CONTENT: Record<string, string> = {
  Healthcare: "They read patient records, schedule visits and follow up on care — so your front desk doesn't have to.",
  Legal: "They draft documents, track deadlines and manage client intake — so your paralegals don't have to.",
  "Real Estate": "They qualify leads, schedule showings and follow up with buyers — so your agents don't have to.",
  Dental: "They confirm appointments, handle insurance claims and follow up with patients — so your front office doesn't have to.",
  eCommerce: "They answer order questions, process returns and follow up on carts — so your support team doesn't have to.",
  Finance: "They reconcile transactions, flag anomalies and prepare reports — so your analysts don't have to.",
  Automotive: "They schedule service visits, follow up on quotes and manage inventory — so your service desk doesn't have to.",
  Education: "They answer enrollment questions, schedule tours and follow up with families — so your admissions team doesn't have to.",
  Fitness: "They book classes, follow up on memberships and manage waitlists — so your front desk doesn't have to.",
  Manufacturing: "They track orders, flag delays and follow up with suppliers — so your ops team doesn't have to.",
  Travel: "They confirm bookings, handle changes and follow up with travelers — so your agents don't have to.",
  Restaurants: "They take reservations, manage waitlists and follow up on feedback — so your host stand doesn't have to.",
};

// stagger positions evenly around the 26s loop, one every ~2.17s
const STAGGER = INDUSTRIES.map((_, i) => -(i * (26 / INDUSTRIES.length)));

export default function IndustriesWeGrow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoIndexRef = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isHovering) return;
      autoIndexRef.current = (autoIndexRef.current + 1) % INDUSTRIES.length;
      setActiveIndex(autoIndexRef.current);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const handleEnter = (i: number) => {
    setIsHovering(true);
    setActiveIndex(i);
  };
  const handleLeave = () => {
    setIsHovering(false);
    setActiveIndex(autoIndexRef.current);
  };

  const activeName = INDUSTRIES[activeIndex].name;

  return (
    <section className="ir-hero">
      <div className="ir-body-grid">
        <div className="ir-content">
          <span className="ir-badge"> Industries We Grow</span>
          <h1 className="ir-h1">
            Built for<br />
            <span className="ir-fade-text">{activeName}</span>.
          </h1>
          <p className="ir-sub ir-fade-text">{INDUSTRY_CONTENT[activeName]}</p>
          <GradientBtn href="/contact">
            Contact Us <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </GradientBtn>
        </div>

        <div className="ir-arc-stage">
          <div className="ir-ring-outer" />
          <div className="ir-ring-inner" />

          {INDUSTRIES.map((ind, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={ind.name}
                className="ir-traveler"
                style={{ animationDelay: `${STAGGER[i]}s`, animationPlayState: isHovering ? "paused" : "running" }}
              >
                <div className="ir-motion-tail" />
                <div className="ir-glow" />
                <div
                  className="ir-orbit"
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={handleLeave}
                  style={{
                    background: isActive ? "#a855f7" : "#6b21a8",
                    boxShadow: isActive
                      ? "0 0 0 4px rgba(168,85,247,0.35), 0 8px 18px rgba(0,0,0,0.28)"
                      : "0 6px 14px rgba(0,0,0,0.28)",
                    transform: isActive
                      ? "translate(-50%, -50%) scale(1.25)"
                      : "translate(-50%, -50%) scale(1)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d={ind.path} stroke="#fff" strokeWidth={ind.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .ir-hero {
          position: relative;
          width: 100%;
          background: #FAF9F6;
          overflow: hidden;
        }
        .ir-body-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 60px 0;
        }
        .ir-content { position: relative; z-index: 3; padding: 0 32px 0 400px; max-width: 1000px; }
        .ir-badge {
          display: inline-block; background: #F1E4FE; color: #7c3aed;
          font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          padding: 7px 16px; border-radius: 999px; margin-bottom: 20px;
        }
        .ir-h1 { font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 900; line-height: 1.04; color: #14141a; margin: 0; letter-spacing: -0.02em; font-family: "Space Grotesk", sans-serif; }
        .ir-sub { margin-top: 16px; font-size: 16px; color: #6b6b6b; line-height: 1.65; max-width: 380px; }
        .ir-fade-text { transition: opacity 0.3s ease; }
        .ir-content .gbtn-wrapper { margin-top: 26px; }

        .ir-arc-stage { position: relative; width: 100%; aspect-ratio: 924 / 683; z-index: 1; overflow: visible; }

        .ir-ring-outer {
          position: absolute; left: 24.5%; top: -2.81%; width: 233.5%; aspect-ratio: 1; border-radius: 50%;
          background: linear-gradient(135deg, #EFE1FE 0%, #C89CF7 55%, #A855F7 100%); z-index: 1;
        }
        .ir-ring-inner {
          position: absolute; left: 39.6%; top: 17.68%; width: 203.2%; aspect-ratio: 1; border-radius: 50%;
          background: #FAF9F6; z-index: 2;
        }

        .ir-traveler {
          position: absolute; width: 0; height: 0;
          animation: ir-travel-path 26s linear infinite, ir-travel-fade 26s linear infinite;
          z-index: 3;
        }
        .ir-motion-tail {
          position: absolute; top: 0; left: 0; transform: translate(-50%, -50%) rotate(35deg);
          width: 64px; height: 140px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(107,33,168,0.32), transparent 70%);
          filter: blur(14px); opacity: 0.55; pointer-events: none;
        }
        .ir-glow {
          position: absolute; top: 0; left: 0; transform: translate(-50%, -50%);
          width: 100px; height: 100px; border-radius: 50%;
          background: radial-gradient(circle, rgba(107,33,168,0.5) 0%, rgba(107,33,168,0.22) 42%, transparent 72%);
          filter: blur(18px); pointer-events: none;
        }
        .ir-orbit {
          position: absolute; top: 0; left: 0; transform: translate(-50%, -50%);
          width: 68px; height: 68px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .ir-orbit svg { width: 24px; height: 24px; }

        @keyframes ir-travel-path {
          0.0% { left: 185.68%; top: 20.21%; }
          2.5% { left: 179.6%; top: 16.84%; }
          5.0% { left: 173.38%; top: 13.97%; }
          7.5% { left: 167.04%; top: 11.61%; }
          10.0% { left: 160.6%; top: 9.77%; }
          12.5% { left: 154.1%; top: 8.46%; }
          15.0% { left: 147.55%; top: 7.68%; }
          17.5% { left: 140.98%; top: 7.44%; }
          20.0% { left: 134.41%; top: 7.73%; }
          22.5% { left: 127.86%; top: 8.55%; }
          25.0% { left: 121.37%; top: 9.91%; }
          27.5% { left: 114.94%; top: 11.79%; }
          30.0% { left: 108.61%; top: 14.2%; }
          32.5% { left: 102.4%; top: 17.11%; }
          35.0% { left: 96.33%; top: 20.53%; }
          37.5% { left: 90.42%; top: 24.43%; }
          40.0% { left: 84.7%; top: 28.8%; }
          42.5% { left: 79.18%; top: 33.64%; }
          45.0% { left: 73.89%; top: 38.91%; }
          47.5% { left: 68.84%; top: 44.61%; }
          50.0% { left: 64.05%; top: 50.71%; }
          52.5% { left: 59.54%; top: 57.18%; }
          55.0% { left: 55.33%; top: 64.01%; }
          57.5% { left: 51.43%; top: 71.17%; }
          60.0% { left: 47.86%; top: 78.64%; }
          62.5% { left: 44.63%; top: 86.38%; }
          65.0% { left: 41.74%; top: 94.38%; }
          67.5% { left: 39.22%; top: 102.59%; }
          70.0% { left: 37.06%; top: 110.99%; }
          72.5% { left: 35.29%; top: 119.55%; }
          75.0% { left: 33.9%; top: 128.25%; }
          77.5% { left: 32.89%; top: 137.04%; }
          80.0% { left: 32.28%; top: 145.89%; }
          82.5% { left: 32.07%; top: 154.78%; }
          85.0% { left: 32.25%; top: 163.67%; }
          87.5% { left: 32.82%; top: 172.53%; }
          90.0% { left: 33.79%; top: 181.33%; }
          92.5% { left: 35.15%; top: 190.03%; }
          95.0% { left: 36.89%; top: 198.61%; }
          97.5% { left: 39.02%; top: 207.03%; }
          100.0% { left: 41.51%; top: 215.26%; }
        }
        @keyframes ir-travel-fade {
          0% { opacity: 0; }
          30% { opacity: 0; }
          38% { opacity: 1; }
          62% { opacity: 1; }
          70% { opacity: 0; }
          100% { opacity: 0; }
        }

        @media (max-width: 900px) {
          .ir-body-grid { grid-template-columns: 1fr; padding: 40px 0; }
          .ir-content { padding: 0 24px; max-width: 100%; margin-bottom: 20px; }
          .ir-h1 { font-size: clamp(2rem, 8vw, 3rem); }
          .ir-sub { max-width: 100%; }
          .ir-arc-stage { max-width: 480px; margin: 0 auto; }
        }

        @media (max-width: 480px) {
          .ir-content { padding: 0 16px; }
          .ir-orbit { width: 52px; height: 52px; }
          .ir-orbit svg { width: 18px; height: 18px; }
          .ir-motion-tail { width: 48px; height: 100px; }
          .ir-glow { width: 76px; height: 76px; }
        }
      `}</style>
    </section>
  );
}
