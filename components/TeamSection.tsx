"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const MEMBERS = [
  {
    name: "Sarah Mitchell",
    role: "Head of AI Strategy",
    img: "/teams/brunette-businesswoman-posing.jpg",
  },
  {
    name: "James Okafor",
    role: "Senior SEO & AEO Specialist",
    img: "/teams/young-man-closing-jacket-blue-shirt-white-suit-jacket-looking-happy.jpg",
  },
  {
    name: "Priya Nair",
    role: "Paid Growth Manager",
    img: "/teams/young-lady-holding-orange-cup-tea-shirt-looking-confident-front-view.jpg",
  },
  {
    name: "Daniel Torres",
    role: "Content & Social Strategist",
    img: "/teams/young-man-closing-jacket-blue-shirt-white-suit-jacket-looking-happy.jpg",
  },
];

const INTERVAL = 3500;
const ARC_TEXT = "• MEET OUR TEAM • MEET OUR TEAM ";

export default function TeamSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % MEMBERS.length);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const member = MEMBERS[active];

  // Build SVG arc letters
  const chars = ARC_TEXT.split("");
  const radius = 108;
  const circumference = 2 * Math.PI * radius;
  const anglePerChar = 360 / chars.length;

  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-black leading-[1.04] tracking-tight text-[#09090f]"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                AI Does the Work.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Humans Hold the Wheel.                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base leading-relaxed max-w-md"
              style={{ color: "#6b6a8a" }}
            >
              Every AI system is monitored, guided, and upgraded by real experts.
              Our team reviews performance daily, approves strategy, and ensures
              your growth never stalls.
            </motion.p>

            {/* Name + role — animates with photo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-1"
              >
                <span
                  className="font-black text-xl"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#09090f" }}
                >
                  {member.name}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#a855f7" }}
                >
                  {member.role}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex items-center gap-2.5">
              {MEMBERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); startTimer(); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 28 : 8,
                    height: 8,
                    background: i === active ? "#a855f7" : "#d1d5db",
                  }}
                  aria-label={`View team member ${i + 1}`}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <a
                href="/about"
                className="inline-flex items-center gap-3 border border-[#09090f] text-[#09090f] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#09090f] hover:text-white transition-all duration-200"
              >
                Meet the full team
                <span className="text-base">→</span>
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo with arc ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Photo card */}
            <div className="relative w-full max-w-[340px] aspect-[340/420]">
              {/* Rotating arc text */}
              <div
                className="absolute z-20 pointer-events-none"
                style={{
                  bottom: "-14%",
                  right: "-16%",
                  width: "60%",
                  height: "60%",
                  minWidth: 140,
                  minHeight: 140,
                  animation: "spinSlow 12s linear infinite",
                }}
              >
                <svg viewBox="0 0 240 240" width="100%" height="100%">
                  <defs>
                    <path
                      id="arcPath"
                      d={`M 120,120 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
                    />
                  </defs>
                  <text
                    fontSize="10.5"
                    fontWeight="700"
                    letterSpacing="3"
                    fill="#09090f"
                    fontFamily="Space Grotesk, sans-serif"
                  >
                    <textPath href="#arcPath">{ARC_TEXT}</textPath>
                  </text>
                </svg>
              </div>

              {/* Photo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 340px"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
