"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ─── constants ────────────────────────────────────────────────────────────────
const LOGO_SIZE = 1100;
const SAMPLE_STEP = 4;
const MOUSE_RADIUS = 70;
const REPEL_STRENGTH = 6;
const SPRING = 0.08;
const FRICTION = 0.85;
const ASSEMBLE_DURATION = 1400; // ms — how long the particles take to fly into place
const LOGO_DISPLAY_SIZE = 1000; // rendered size (px) of the assembled logo on screen

function clamp01(v: number) { return Math.max(0, Math.min(1, v)); }

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type Particle = {
  homeX: number; homeY: number;
  startX: number; startY: number;
  x: number; y: number;
  vx: number; vy: number;
  color: string;
  baseSize: number;
};

// ─── client logos for the trust marquee ──────────────────────────────────────
const LOGOS = [
  { src: "/trust/bb_logo_.png", alt: "BB Logo" },
  { src: "/trust/logo_foster_care-1.png", alt: "Foster Care Logo" },
  { src: "/trust/sr_logo.png", alt: "SR Logo" },
  { src: "/trust/vipgts-connection-logo.png", alt: "VIP GTS Connection Logo" },
];
const ALL_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

export default function TrustedByShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const modeRef = useRef<"assembling" | "home">("assembling");
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const [hasStarted, setHasStarted] = useState(false);

  const buildParticles = useCallback(() => {
    const img = logoImgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;
    const off = document.createElement("canvas");
    off.width = LOGO_SIZE;
    off.height = LOGO_SIZE;
    const offCtx = off.getContext("2d")!;
    offCtx.drawImage(img, 0, 0, LOGO_SIZE, LOGO_SIZE);
    const data = offCtx.getImageData(0, 0, LOGO_SIZE, LOGO_SIZE).data;

    // scale the sampled logo grid down to the on-screen display size —
    // shrink to fit the canvas height (minus margin) so it never clips top/bottom
    const displaySize = Math.min(LOGO_DISPLAY_SIZE, canvas.height - 80);
    const scale = displaySize / LOGO_SIZE;

    // logo sits in the right half of the canvas, vertically centered
    const logoCenterX = Math.min(canvas.width * 0.74, canvas.width - displaySize / 2 - 40);
    const logoCenterY = canvas.height / 2;
    const ox = logoCenterX - displaySize / 2;
    const oy = logoCenterY - displaySize / 2;
    const cx = logoCenterX, cy = logoCenterY;

    const list: Particle[] = [];

    for (let y = 0; y < LOGO_SIZE; y += SAMPLE_STEP) {
      for (let x = 0; x < LOGO_SIZE; x += SAMPLE_STEP) {
        const i = (y * LOGO_SIZE + x) * 4;
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        if (a < 100) continue;
        if (r > 240 && g > 240 && b > 240) continue;

        const isDark = r < 90 && g < 90 && b < 90;
        const color = isDark ? "rgb(235,235,240)" : `rgb(${r},${g},${b})`;

        const homeX = ox + x * scale;
        const homeY = oy + y * scale;
        const angle = Math.atan2(homeY - cy, homeX - cx) + (Math.random() - 0.5) * 0.6;
        const dist = 260 + Math.random() * 340;

        list.push({
          homeX, homeY,
          startX: cx + Math.cos(angle) * dist,
          startY: cy + Math.sin(angle) * dist,
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          vx: 0, vy: 0,
          color,
          baseSize: 3,
        });
      }
    }
    particlesRef.current = list;
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/e5-logo.png";
    img.onload = () => {
      logoImgRef.current = img;
    };
  }, []);

  const drawParticles = useCallback((now: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let assembleT = 1;
    if (modeRef.current === "assembling") {
      const elapsed = now - startTimeRef.current;
      assembleT = clamp01(elapsed / ASSEMBLE_DURATION);
      if (assembleT >= 1) modeRef.current = "home";
    }
    const eased = easeInOutCubic(assembleT);

    for (const p of particlesRef.current) {
      if (modeRef.current === "assembling") {
        p.x = p.startX + (p.homeX - p.startX) * eased;
        p.y = p.startY + (p.homeY - p.startY) * eased;
      } else {
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * REPEL_STRENGTH;
          p.vy += Math.sin(angle) * force * REPEL_STRENGTH;
        }
        p.vx += (p.homeX - p.x) * SPRING;
        p.vy += (p.homeY - p.y) * SPRING;
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;
      }

      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.baseSize, p.baseSize);
    }
  }, []);

  const startAnimation = useCallback(() => {
    buildParticles();
    modeRef.current = "assembling";
    startTimeRef.current = performance.now();

    function render(now: number) {
      drawParticles(now);
      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);
  }, [buildParticles, drawParticles]);

  // Resize canvas to its container
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = sectionRef.current;
    if (!canvas || !container) return;

    function resizeCanvas() {
      if (!canvas || !container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Auto-play once when scrolled into view
  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          if (window.matchMedia("(max-width: 900px)").matches) {
            setHasStarted(true);
            observer.disconnect();
            return;
          }
          setHasStarted(true);
          // wait for the logo image + canvas sizing to be ready
          const tryStart = () => {
            if (logoImgRef.current && canvasRef.current?.width) {
              startAnimation();
            } else {
              requestAnimationFrame(tryStart);
            }
          };
          tryStart();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [hasStarted, startAnimation]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function onMove(e: MouseEvent) {
      const rect = (canvas as HTMLCanvasElement).getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="tbs-section"
      style={{
        position: "relative",
        width: "100%",
        background: "#05060a",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 60% 50% at 25% 30%, rgba(168,85,247,0.10), transparent 60%),
          radial-gradient(ellipse 50% 40% at 80% 75%, rgba(168,85,247,0.07), transparent 60%)
        `,
      }} />

      <canvas
        ref={canvasRef}
        className="tbs-canvas"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          zIndex: 1, cursor: "default",
        }}
      />

      <div className="tbs-content">
        <h2 className="tbs-heading">
          Trusted by Growing Brands
        </h2>

        <div style={{ width: "min(420px, 90%)" }}>
          <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
            <div style={{ pointerEvents: "none", position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 10, background: "linear-gradient(to right, #05060a, transparent)" }} />
            <div style={{ pointerEvents: "none", position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 10, background: "linear-gradient(to left, #05060a, transparent)" }} />
            <motion.div
              style={{ display: "flex", alignItems: "center", gap: 64, width: "max-content" }}
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {ALL_LOGOS.map((logo, i) => (
                <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: 48, padding: "0 16px" }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={130}
                    height={44}
                    style={{ maxHeight: 40, width: "auto", objectFit: "contain", opacity: 0.45, filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tbs-section {
          min-height: min(1100px, 100vh);
        }
        .tbs-content {
          position: absolute;
          z-index: 2;
          left: 80px;
          top: 50%;
          right: 28%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .tbs-heading {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.04;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0 0 40px;
          font-family: "Space Grotesk", sans-serif;
        }

        @media (max-width: 900px) {
          .tbs-section {
            min-height: 0;
          }
          .tbs-canvas { display: none; }
          .tbs-content {
            position: static;
            left: auto;
            right: auto;
            top: auto;
            transform: none;
            padding: 32px 24px 64px;
            align-items: center;
            text-align: center;
          }
          .tbs-heading {
            font-size: clamp(1.3rem, 5.5vw, 2rem);
            margin-bottom: 28px;
          }
        }

        @media (max-width: 480px) {
          .tbs-content { padding: 40px 16px 56px; }
        }
      `}</style>
    </div>
  );
}
