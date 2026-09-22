"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GetInTouchMarquee({
  variant = "dark",
  text = "GET IN TOUCH",
  outlined = false,
  duration = 22,
}: {
  variant?: "dark" | "light";
  text?: string;
  outlined?: boolean;
  duration?: number;
}) {
  const isLight = variant === "light";
  const ROW = Array.from({ length: 8 }, () => text);
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
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...ROW, ...ROW].map((label, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                outlined
                  ? ""
                  : isLight
                  ? "group-hover:text-[#15172B]"
                  : "group-hover:text-white"
              }`}
              style={
                outlined
                  ? {
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "transparent",
                      WebkitTextStroke: isLight ? "1px rgba(21,23,43,0.45)" : "1px rgba(229,231,235,0.55)",
                    }
                  : {
                      fontFamily: "Space Grotesk, sans-serif",
                      color: isLight ? "rgba(21,23,43,0.35)" : "rgba(229,231,235,0.5)",
                    }
              }
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
