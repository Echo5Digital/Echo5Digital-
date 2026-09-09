"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion";

/**
 * RevealMask — heading rises out from behind a wipe panel that slides off at a steep skew,
 * with a big overshoot spring so it feels punchy rather than a plain fade.
 */
export function RevealMask({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative inline-block overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "130%", rotate: 4 }}
        animate={inView ? { y: 0, rotate: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 1, skewX: -12 }}
        animate={inView ? { scaleX: 0, skewX: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: delay + 0.2 }}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "right",
          background: "linear-gradient(135deg, #6B4EF0, #8B5CF6)",
        }}
      />
    </div>
  );
}

/**
 * WordStagger — splits text into words and flies each one in from below with a per-word
 * delay and rotation, for a much more energetic heading reveal than a single fade.
 */
export function WordStagger({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", marginRight: "0.28em" }}>
          <motion.span
            className={wordClassName}
            style={{ display: "inline-block" }}
            initial={{ y: "120%", rotate: 8, opacity: 0 }}
            animate={inView ? { y: 0, rotate: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.06,
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
 * ParallaxImage — image drifts vertically at a different rate than scroll, wrapped in a
 * clip container so it never escapes its bounds. Also scales in slightly for extra depth.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  style,
  strength = 90,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.85, clipPath: "inset(0 0 100% 0)" }}
      animate={inView ? { opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale, width: "100%", height: "calc(100% + 160px)", objectFit: "cover", position: "absolute", top: -80, left: 0 }}
      />
    </motion.div>
  );
}

/**
 * TiltCard — card that flies in from a steep 3D rotation with overshoot, then responds to
 * pointer position with a pronounced tilt and a glow that follows the cursor.
 */
export function TiltCard({
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
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 16 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 16 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 18);
    rotateX.set(-py * 18);
    glowX.set((px + 0.5) * 100);
    glowY.set((py + 0.5) * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const isOdd = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ ...style, perspective: 1000 }}
      initial={{ opacity: 0, y: 70, scale: 0.8, rotateZ: isOdd ? -8 : 8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotateZ: 0 } : {}}
      transition={{ type: "spring", stiffness: 110, damping: 14, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d", position: "relative" }}>
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: useTransform(springX, (v) => Math.min(1, Math.abs(v) / 6)),
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]: number[]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, rgba(139,92,246,0.25), transparent 60%)`
            ),
          }}
        />
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * CountUp — animates a number from 0 to target once scrolled into view, with a scale pop.
 */
export function CountUp({
  target,
  suffix = "",
  duration = 1.6,
  className = "",
  style,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/**
 * ScrollProgressRail — a vertical line beside a stepped list that fills in sync with scroll
 * progress through the section, with a glowing dot that travels along it.
 */
export function ScrollProgressRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-0 bottom-0 left-0 w-px"
        style={{ background: "rgba(107,78,240,0.15)" }}
      >
        <motion.div
          style={{
            scaleY,
            transformOrigin: "top",
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #6B4EF0, #8B5CF6)",
          }}
        />
        <motion.div
          aria-hidden="true"
          style={{
            top: dotTop,
            position: "absolute",
            left: "50%",
            width: 10,
            height: 10,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: "#8B5CF6",
            boxShadow: "0 0 12px 4px rgba(139,92,246,0.6)",
          }}
        />
      </div>
      {children}
    </div>
  );
}

/**
 * HowWeWorkRail — wraps a horizontal 3-column step grid with a connector line that fills
 * left-to-right in sync with scroll progress through the section (desktop only), plus a
 * traveling glow dot.
 */
export function HowWeWorkRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const dotLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Desktop: horizontal rail spanning the row of cards */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
        style={{ background: "rgba(107,78,240,0.15)" }}
      >
        <motion.div
          style={{
            scaleX,
            transformOrigin: "left",
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #6B4EF0, #8B5CF6)",
          }}
        />
        <motion.div
          aria-hidden="true"
          style={{
            left: dotLeft,
            position: "absolute",
            top: "50%",
            width: 10,
            height: 10,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: "#8B5CF6",
            boxShadow: "0 0 14px 5px rgba(139,92,246,0.65)",
          }}
        />
      </div>

      {/* Mobile: vertical rail running behind the stacked cards, centered on the icon column */}
      <div
        aria-hidden="true"
        className="md:hidden absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px"
        style={{ background: "rgba(107,78,240,0.15)" }}
      >
        <motion.div
          style={{
            scaleY,
            transformOrigin: "top",
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #6B4EF0, #8B5CF6)",
          }}
        />
        <motion.div
          aria-hidden="true"
          style={{
            top: dotTop,
            position: "absolute",
            left: "50%",
            width: 10,
            height: 10,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: "#8B5CF6",
            boxShadow: "0 0 14px 5px rgba(139,92,246,0.65)",
          }}
        />
      </div>
      {children}
    </div>
  );
}

/**
 * BlurIn — blur + rise entrance, kept local to this page so it doesn't collide with the
 * fade/slide pattern already used sitewide.
 */
export function BlurIn({
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
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, filter: "blur(16px)", y: 32, scale: 0.96 }}
      animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * PinnedZoom — section that stays pinned full-viewport while its content scales up
 * dramatically as the user scrolls through it, then releases. A much bigger scroll-linked
 * effect than anything used elsewhere on the site.
 */
export function PinnedZoom({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <motion.div style={{ scale, opacity }}>{children}</motion.div>
    </div>
  );
}

/**
 * ImageBesideRow — one row of an ImageScrollList: image on one side, card content on the
 * other (sides alternate per row on desktop). The image slides in from its own outer edge
 * (left column slides in from the left, right column from the right) while the card content
 * fades/rises, both triggered as the row scrolls into view. No pinning/sticky — the row
 * scrolls normally with the rest of the page.
 */
function ImageBesideRow({
  item,
  index,
  renderCard,
  imageClassName,
}: {
  item: { image: string; name: string };
  index: number;
  renderCard: (item: any, index: number) => ReactNode;
  imageClassName: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reversed = index % 2 === 1;
  const imageFromX = reversed ? 120 : -120;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        className={`relative w-full aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden ${imageClassName}`}
        style={{
          border: "1px solid rgba(124,58,237,0.25)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
        initial={{ opacity: 0, x: imageFromX }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(10,15,30,0) 55%, rgba(10,15,30,0.45) 100%)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        {renderCard(item, index)}
      </motion.div>
    </div>
  );
}

/**
 * ImageScrollList — list of rows, each pairing an image with a card, alternating sides
 * on desktop and stacking image-above-card on mobile. Scrolls normally (no sticky/pin).
 */
export function StickyImageScrollList({
  items,
  renderCard,
  imageClassName = "",
}: {
  items: { image: string; name: string }[];
  renderCard: (item: any, index: number) => ReactNode;
  imageClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-10 lg:gap-16">
      {items.map((item, i) => (
        <ImageBesideRow key={item.name} item={item} index={i} renderCard={renderCard} imageClassName={imageClassName} />
      ))}
    </div>
  );
}

/**
 * MarqueeReveal — a horizontal auto-scrolling strip whose speed reacts to page scroll
 * velocity, giving a "living" background element distinct from static grids.
 */
export function DiagonalWipe({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -60, skewX: 6 }}
      animate={inView ? { opacity: 1, x: 0, skewX: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
