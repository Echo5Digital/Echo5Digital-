"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "zoom" | "clip";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<RevealVariant, { hidden: React.CSSProperties; shown: React.CSSProperties }> = {
  up: {
    hidden: { opacity: 0, transform: "translateY(48px)" },
    shown: { opacity: 1, transform: "translateY(0)" },
  },
  left: {
    hidden: { opacity: 0, transform: "translateX(-56px)" },
    shown: { opacity: 1, transform: "translateX(0)" },
  },
  right: {
    hidden: { opacity: 0, transform: "translateX(56px)" },
    shown: { opacity: 1, transform: "translateX(0)" },
  },
  zoom: {
    hidden: { opacity: 0, transform: "scale(0.85)" },
    shown: { opacity: 1, transform: "scale(1)" },
  },
  clip: {
    hidden: { opacity: 1, clipPath: "inset(0 100% 0 0)" },
    shown: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
  },
};

// Plain IntersectionObserver + CSS transition reveal — deliberately not using
// the framer-motion ScrollFX system used elsewhere on the site, per request.
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  style,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;
  const { hidden, shown } = variantStyles[variant];

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...(visible ? shown : hidden),
        ...style,
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, clip-path 0.9s cubic-bezier(0.76,0,0.24,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
