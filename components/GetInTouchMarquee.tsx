"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ROW = Array.from({ length: 8 }, () => "GET IN TOUCH");

export default function GetInTouchMarquee({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <Link
      href="/contact"
      aria-label="Get in touch — go to contact page"
      className="group relative block w-full overflow-hidden border-y"
      style={{
        borderColor: "rgba(124,58,237,0.2)",
        background: isLight ? "#ffffff" : "#0A0F1E",
      }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap py-6 md:py-8"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...ROW, ...ROW].map((label, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                isLight ? "group-hover:text-[#15172B]" : "group-hover:text-white"
              }`}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: isLight ? "rgba(21,23,43,0.35)" : "rgba(229,231,235,0.5)",
              }}
            >
              {label}
            </span>
            <span
              className="mx-6 md:mx-10 text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ color: "#7C3AED" }}
              aria-hidden="true"
            >
              _
            </span>
          </span>
        ))}
      </motion.div>
    </Link>
  );
}
