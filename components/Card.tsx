"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  variant?: "service" | "testimonial" | "blog";
  author?: string;
  authorRole?: string;
  authorAvatar?: string;
  date?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  imageAlt = "Card image",
  badge,
  ctaLabel,
  onCtaClick,
  variant = "service",
  author,
  authorRole,
  authorAvatar,
  date,
  className = "",
}) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(124,58,237,0.25)",
        borderRadius: "0.75rem",
        backdropFilter: "blur(12px)",
        boxShadow:
          "0 0 0 0 rgba(124,58,237,0), inset 0 1px 0 rgba(255,255,255,0.06)",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 40px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(168,85,247,0.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 0 0 rgba(124,58,237,0), inset 0 1px 0 rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(124,58,237,0.25)";
      }}
    >
      {/* Gradient accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,85,247,0.7), transparent)",
        }}
      />

      {/* Blog / Testimonial image */}
      {imageSrc && variant !== "service" && (
        <div className="relative overflow-hidden w-full h-48">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.9) 100%)",
            }}
          />
          {badge && (
            <span
              className="absolute top-3 left-3 text-xs font-semibold px-3 py-1"
              style={{
                backgroundColor: "rgba(124,58,237,0.85)",
                color: "#E5E7EB",
                borderRadius: "9999px",
                fontFamily: "Inter, sans-serif",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(168,85,247,0.4)",
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Service Icon Block */}
        {variant === "service" && (
          <div className="flex items-start justify-between gap-3">
            {Icon && (
              <div
                className="flex items-center justify-center w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                <Icon
                  size={22}
                  style={{ color: "#A855F7" }}
                  strokeWidth={1.8}
                />
              </div>
            )}
            {badge && (
              <span
                className="text-xs font-semibold px-3 py-1 self-start"
                style={{
                  backgroundColor: "rgba(124,58,237,0.2)",
                  color: "#A855F7",
                  borderRadius: "9999px",
                  fontFamily: "Inter, sans-serif",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Date for blog */}
        {variant === "blog" && date && (
          <span
            className="text-xs"
            style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            {date}
          </span>
        )}

        {/* Title */}
        <h3
          className="text-lg font-semibold leading-snug"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#E5E7EB",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "rgba(229,231,235,0.6)",
          }}
        >
          {description}
        </p>

        {/* Testimonial Author */}
        {variant === "testimonial" && author && (
          <div className="flex items-center gap-3 pt-2 mt-auto">
            {authorAvatar ? (
              <img
                src={authorAvatar}
                alt={`${author} avatar`}
                className="w-9 h-9 rounded-full object-cover"
                style={{ border: "2px solid rgba(168,85,247,0.4)" }}
              />
            ) : (
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #7C3AED, #A855F7)",
                  color: "#fff",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {author.charAt(0)}
              </div>
            )}
            <div>
              <p
                className="text-sm font-semibold"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#E5E7EB",
                }}
              >
                {author}
              </p>
              {authorRole && (
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(229,231,235,0.45)",
                  }}
                >
                  {authorRole}
                </p>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {ctaLabel && onCtaClick && (
          <button
            onClick={onCtaClick}
            className="mt-2 w-full py-2.5 px-6 text-sm font-semibold transition-all duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              color: "#ffffff",
              borderRadius: "9999px",
              border: "none",
              fontFamily: "Inter, sans-serif",
              boxShadow:
                "0 0 18px rgba(124,58,237,0.45), 0 4px 12px rgba(0,0,0,0.3)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.filter =
                "brightness(1.15)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 28px rgba(124,58,237,0.65), 0 4px 16px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.filter =
                "brightness(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 18px rgba(124,58,237,0.45), 0 4px 12px rgba(0,0,0,0.3)";
            }}
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;