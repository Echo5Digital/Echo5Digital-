"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";

/**
 * ScrambleText — headline decodes letter-by-letter from randomized characters into the
 * final text, like a terminal cipher resolving. Never used elsewhere on the site (which
 * relies on word-stagger / reveal-mask heading treatments).
 */
export function ScrambleText({
  text,
  className = "",
  style,
  duration = 900,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const [display, setDisplay] = useState(text.replace(/[^\s]/g, " "));
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now() + delay;
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, elapsed / duration);
      const revealCount = Math.floor(progress * text.length);

      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          out += " ";
        } else if (i < revealCount) {
          out += ch;
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setDisplay(out);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, duration, delay]);

  return (
    <span ref={ref} className={className} style={{ ...style, whiteSpace: "pre-wrap" }}>
      {display}
    </span>
  );
}

/**
 * FocusPullHero — full-bleed background image that opens heavily blurred and desaturated,
 * like an out-of-focus camera lens, then racks into sharp focus on load — a one-time
 * "focus pull" rather than a scroll-linked effect. Distinct from ParallaxHero (which drifts
 * with scroll position) and from every viewport-entry reveal used on the rest of the page.
 */
export function FocusPullHero({
  src,
  children,
  className = "",
  overlay = "linear-gradient(180deg, rgba(10,8,26,0.5) 0%, rgba(10,8,26,0.65) 55%, rgba(10,8,26,0.9) 100%)",
}: {
  src: string;
  children: ReactNode;
  className?: string;
  overlay?: string;
}) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFocused(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')` }}
        initial={{ filter: "blur(28px) saturate(0.3) brightness(0.8)", scale: 1.12 }}
        animate={
          focused
            ? { filter: "blur(0px) saturate(1) brightness(1)", scale: 1 }
            : {}
        }
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: overlay }} />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

/**
 * PrismReveal — each word of a heading splits into red/green/blue channel offsets that
 * converge back into crisp white/inherited color, like a lens chromatic-aberration effect
 * resolving. A different mechanism from ScrambleText's character decode.
 */
export function PrismReveal({
  text,
  className = "",
  style,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", position: "relative", marginRight: "0.28em" }}>
          <motion.span
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, color: "#FF3B6E", mixBlendMode: "screen" }}
            initial={{ x: -8, opacity: 0.8 }}
            animate={inView ? { x: 0, opacity: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + i * 0.09, ease: "easeOut" }}
          >
            {word}
          </motion.span>
          <motion.span
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, color: "#22D3EE", mixBlendMode: "screen" }}
            initial={{ x: 8, opacity: 0.8 }}
            animate={inView ? { x: 0, opacity: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + i * 0.09, ease: "easeOut" }}
          >
            {word}
          </motion.span>
          <motion.span
            style={{ position: "relative" }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + i * 0.09 + 0.1 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * ParallaxHero — full-bleed background image that slowly zooms/drifts as the page scrolls
 * past it, with the overlaid content fading and lifting away in sync. Distinct from the
 * static backgroundImage hero used on the homepage (no scroll-linked motion there) and from
 * every reveal used elsewhere on this page (this one is scroll-position-driven, not a
 * one-time viewport-entry animation).
 */
export function ParallaxHero({
  src,
  children,
  className = "",
  overlay = "linear-gradient(180deg, rgba(10,8,26,0.55) 0%, rgba(10,8,26,0.7) 55%, rgba(10,8,26,0.92) 100%)",
}: {
  src: string;
  children: ReactNode;
  className?: string;
  overlay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${src}')`,
          scale: bgScale,
          y: bgY,
        }}
      />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: overlay }} />
      <motion.div
        className="relative z-10 w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * InkReveal — content is masked behind a small colored dot that blooms outward into a full
 * radial reveal, like a drop of ink spreading. Pure clip-path + scale, so it stays crisp on
 * mobile widths (no 3D transforms to clip awkwardly on narrow cards).
 */
export function InkReveal({
  children,
  className = "",
  style,
  delay = 0,
  origin = "50% 50%",
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  origin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative ${className}`} style={style}>
      <motion.div
        initial={{ clipPath: `circle(0% at ${origin})` }}
        animate={inView ? { clipPath: `circle(140% at ${origin})` } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          left: origin.split(" ")[0],
          top: origin.split(" ")[1],
          width: 14,
          height: 14,
          marginLeft: -7,
          marginTop: -7,
          background: "linear-gradient(135deg, #6B4EF0, #A855F7)",
        }}
        initial={{ scale: 0, opacity: 0.9 }}
        animate={inView ? { scale: [0, 3, 0], opacity: [0.9, 0.6, 0] } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay }}
      />
    </div>
  );
}

/**
 * MagnetPop — card springs in past full size and snaps back, like it's been pulled in by a
 * magnet, with a soft colored glow flash on arrival. Pure 2D (scale/y), safe at any width.
 */
export function MagnetPop({
  children,
  className = "",
  style,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const delay = (index % 8) * 0.07;

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.4, y: 22 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 15, delay }}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ boxShadow: "0 0 0 0 rgba(107,78,240,0.5)" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 0.9, 0], scale: [0.9, 1.05, 1.1] } : {}}
        transition={{ duration: 0.6, delay: delay + 0.18 }}
      />
      {children}
    </motion.div>
  );
}

/**
 * PeelCard — card's top-left corner peels open like a page turning, using a simple 2D
 * skew + origin-anchored scale (no rotateY/3D), so it reads correctly even on narrow
 * single-column mobile layouts.
 */
export function PeelCard({
  children,
  className = "",
  style,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const delay = (index % 6) * 0.09;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, transformOrigin: "top left" }}
      initial={{ opacity: 0, skewY: 6, scaleY: 0.85, y: 26 }}
      animate={inView ? { opacity: 1, skewY: 0, scaleY: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * GlowTrail — heading fades/rises in while a traveling light-glow sweeps once along an
 * underline in sync with scroll progress through the section (replaces a static bar-fill
 * with a moving highlight, distinct from anything else on the site).
 */
export function GlowTrail({
  children,
  className = "",
  trackColor = "rgba(107,78,240,0.15)",
  glowGradient = "linear-gradient(90deg, transparent, #A855F7, #6B4EF0, transparent)",
}: {
  children: ReactNode;
  className?: string;
  trackColor?: string;
  glowGradient?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 40%"],
  });
  const glowLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "100%"]);
  const trackOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="relative h-[3px] rounded-full mt-4 overflow-hidden"
        style={{ background: trackColor, opacity: trackOpacity }}
      >
        <motion.div
          className="absolute top-0 h-full rounded-full"
          style={{
            left: glowLeft,
            width: "18%",
            background: glowGradient,
            filter: "blur(0.5px)",
          }}
        />
      </motion.div>
    </div>
  );
}

/**
 * LavenderField — decorative backdrop for light sections: soft blurred color blobs plus a
 * faint dot-grid texture, so lavender sections read as designed rather than flat white.
 */
export function LavenderField({
  variant = "a",
}: {
  variant?: "a" | "b" | "c";
}) {
  const blobs = {
    a: [
      { top: "-8%", left: "-6%", size: 340, color: "rgba(139,92,246,0.16)" },
      { top: "55%", left: "88%", size: 300, color: "rgba(107,78,240,0.13)" },
    ],
    b: [
      { top: "70%", left: "-8%", size: 320, color: "rgba(168,85,247,0.14)" },
      { top: "-10%", left: "80%", size: 280, color: "rgba(139,92,246,0.15)" },
    ],
    c: [
      { top: "10%", left: "45%", size: 380, color: "rgba(107,78,240,0.1)" },
      { top: "80%", left: "10%", size: 260, color: "rgba(168,85,247,0.14)" },
    ],
  }[variant];

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(107,78,240,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: b.color,
          }}
        />
      ))}
    </div>
  );
}

/**
 * FloatDrift — continuous, gentle up/down drift (not scroll-gated) for floating badge
 * elements, giving the page passive motion distinct from About Us's static badges.
 */
export function FloatDrift({
  children,
  className = "",
  style,
  duration = 3.4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ShutterReveal — hero-only image reveal: two panels slide apart from the center like a
 * camera shutter opening, unveiling the photo beneath. Reserved for the banner so it never
 * repeats the circle/blinds/diagonal treatments used on the in-page photos.
 */
export function ShutterReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className={imgClassName}
        initial={{ scale: 1.15 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2"
        style={{ background: "#0A0F1E", transformOrigin: "left" }}
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2"
        style={{ background: "#0A0F1E", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}

/**
 * CircleReveal — image emerges from an expanding circular mask centered on the frame.
 */
export function CircleReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className={imgClassName}
        initial={{ clipPath: "circle(0% at 50% 50%)", scale: 1.2 }}
        animate={
          inView
            ? { clipPath: "circle(75% at 50% 50%)", scale: 1 }
            : {}
        }
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

/**
 * BlindsReveal — image reveals through vertical "blinds" slats opening left-to-right.
 */
export function BlindsReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  slats = 6,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  slats?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className={imgClassName} />
      <div className="absolute inset-0 flex">
        {Array.from({ length: slats }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1"
            style={{ background: "#F2EFFC", transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            animate={inView ? { scaleY: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.08 * i,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * TrackingReveal — text starts wide-tracked and faintly transparent, then gently contracts
 * to its normal letter-spacing while fading/sharpening into full opacity, like a lens
 * settling into focus on a title card. A calmer, single-motion alternative to the
 * word-by-word treatments used elsewhere (PrismReveal, FlipUpReveal, WordStagger,
 * ScrambleText) — the whole line moves together rather than staggering per word.
 */
export function TrackingReveal({
  text,
  className = "",
  style,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ ...style, display: "inline-block" }}
      initial={{ opacity: 0, letterSpacing: "0.35em", filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, letterSpacing: "-0.03em", filter: "blur(0px)" } : {}}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.span>
  );
}

/**
 * SwingIn — each word swings in from a steep Y-axis turn with a quick scale overshoot,
 * like a door panel snapping open toward the viewer. Snappier and more energetic than
 * TrackingReveal's slow single-line contraction, and a different axis/feel from
 * FlipUpReveal's bottom-edge rotateX flip.
 */
export function SwingIn({
  text,
  className = "",
  style,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ ...style, perspective: 700 }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", marginRight: "0.28em", transformStyle: "preserve-3d" }}>
          <motion.span
            style={{ display: "inline-block", transformOrigin: "50% 50%" }}
            initial={{ rotateY: 75, scale: 0.6, opacity: 0 }}
            animate={inView ? { rotateY: 0, scale: [0.6, 1.08, 1], opacity: 1 } : {}}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.08,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * SoftFadeUp — each word simply fades in while rising a short distance, no rotation,
 * scale, or blur tricks. The plainest, calmest word-stagger entrance on the site.
 */
export function SoftFadeUp({
  text,
  className = "",
  style,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + i * 0.07, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * FlipUpReveal — each word rotates up into place around its own bottom edge, like a
 * split-flap departure board resolving, with real perspective on the wrapper so the
 * rotation reads as 3D rather than a flat skew. Distinct from PrismReveal's color-channel
 * split and from ScrambleText's character decode — this is the only entrance effect on the
 * site built on a per-word rotateX flip.
 */
export function FlipUpReveal({
  text,
  className = "",
  style,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ ...style, perspective: 900 }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.span
            style={{ display: "inline-block", transformOrigin: "50% 100%" }}
            initial={{ rotateX: -100, opacity: 0, y: 24 }}
            animate={inView ? { rotateX: 0, opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * CurtainBadge — a pill badge whose contents are hidden behind a solid curtain that
 * splits down the middle and slides apart, unveiling the icon/label beneath. A reveal
 * mechanism reserved for small inline badges — distinct from every full-image reveal
 * (Shutter/Circle/Blinds/Diagonal) and from InkReveal's radial bloom.
 */
export function CurtainBadge({
  children,
  className = "",
  style,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      {children}
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2"
        style={{ background: "#0A0F1E", transformOrigin: "left" }}
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2"
        style={{ background: "#0A0F1E", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay }}
      />
    </div>
  );
}

/**
 * DiagonalSweep — image is uncovered by a single panel sweeping away on a steep diagonal.
 */
export function DiagonalSweep({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className={imgClassName} />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, #EEECFB 45%, #F7F5FD 55%)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 1, skewX: -14 }}
        animate={inView ? { scaleX: 0, skewX: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}
