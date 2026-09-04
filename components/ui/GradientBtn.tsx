import React from "react";
import Link from "next/link";

const LAYERS = [
  { delay: "0s", duration: "25s" },
  { delay: "0.15s", duration: "15.9s" },
  { delay: "0.53s", duration: "26.4s" },
  { delay: "0.45s", duration: "17.8s" },
  { delay: "1.6s", duration: "19.2s" },
  { delay: "1.6s", duration: "29.2s" },
  { delay: "1.6s", duration: "20.2s" },
];

interface GradientBtnProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

export default function GradientBtn({ href, children, className = "", external, "aria-label": ariaLabel }: GradientBtnProps) {
  const inner = (
    <>
      <div className="gbn-light" />
      {LAYERS.map((l, i) => (
        <div
          key={i}
          className="gbtn-layer"
          style={{ animationDelay: l.delay, animationDuration: l.duration }}
        />
      ))}
      <span className="gbtn-inner">{children}</span>
      <span className="gbtn-text">{children}</span>

      <style jsx global>{`
        .gbtn-wrapper {
          --rad: 100px;
          --color-wrapper-border: #fff;
          --color-btn-bg: #7c3aed;
          --color-btn-text: #000;
          --color-btn-text-shadow: #fff;
          --color-btn-inset-shadow: #4c1d95;
          --color-layer-a: #fff;
          --color-layer-b: #7c3aed;
          --color-overlay-text: #000;
          --color-overlay-glow: #fff;
          --color-overlay-shadow: #0004;
          --color-overlay-highlight: #fff5;

          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 2px solid var(--color-wrapper-border);
          border-radius: var(--rad);
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          filter: saturate(0.65) brightness(1.8);
          cursor: pointer;
          text-decoration: none;
          isolation: isolate;
        }

        .gbtn-inner {
          position: relative;
          z-index: -1;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border: none;
          border-radius: var(--rad);
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: 0.05rem;
          color: var(--color-btn-text);
          background-color: var(--color-btn-bg);
          box-shadow: inset 0 0 10px 9px var(--color-btn-inset-shadow);
          text-shadow: 0 1px 3px var(--color-btn-text-shadow);
          mix-blend-mode: color-dodge;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .gbtn-layer {
          position: absolute;
          pointer-events: none;
          left: -160px;
          width: 500%;
          aspect-ratio: 1;
          background: radial-gradient(
            ellipse at 65% 180%,
            var(--color-layer-a), var(--color-layer-b),
            var(--color-layer-a), var(--color-layer-b),
            var(--color-layer-a), var(--color-layer-b),
            var(--color-layer-a), var(--color-layer-b),
            var(--color-layer-a), var(--color-layer-b),
            var(--color-layer-a)
          );
          mix-blend-mode: difference;
          animation: gbtnRotate 8s linear infinite;
        }
        .gbtn-layer:last-of-type {
          mix-blend-mode: color-dodge;
        }

        .gbtn-text {
          position: absolute;
          pointer-events: none;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: var(--rad);
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: 0.05rem;
          color: var(--color-overlay-text);
          text-shadow: 0 0 4px var(--color-overlay-glow);
          box-shadow:
            inset 0 -4px 4px 0 var(--color-overlay-shadow),
            inset 0 4px 4px 0 var(--color-overlay-highlight);
          mix-blend-mode: multiply;
          transition: transform 0.3s ease;
        }

        .gbn-light {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          border-radius: 50px;
          width: 80%;
          height: 1.9rem;
          background-color: #fff5;
          filter: blur(5px);
          animation: gbtnPulse 3s ease-in-out infinite;
        }

        .gbtn-wrapper:hover .gbtn-text { transform: scale(1.06); }
        .gbtn-wrapper:hover .gbtn-inner { color: #0000; text-shadow: 0 0 0 #0000; }
        .gbtn-wrapper:active .gbtn-text { transform: scale(0.95); }
        .gbtn-wrapper:active .gbtn-inner { color: #0000; text-shadow: 0 0 0 #0000; }

        .gbtn-wrapper.aspect-square .gbtn-inner,
        .gbtn-wrapper.aspect-square .gbtn-text {
          padding: 11px 12px;
        }

        @keyframes gbtnRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gbtnPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </>
  );

  if (external) {
    return (
      <a href={href} className={`gbtn-wrapper ${className}`} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`gbtn-wrapper ${className}`} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
