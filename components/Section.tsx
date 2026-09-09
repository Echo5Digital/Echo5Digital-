import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "elevated" | "gradient" | "transparent" | "lavender";
  spacing?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  centered?: boolean;
  withDivider?: boolean;
  as?: React.ElementType;
}

const backgroundStyles: Record<string, string> = {
  default: "bg-[#0A0F1E]",
  elevated: "bg-[#0F1629]",
  gradient:
    "bg-gradient-to-br from-[#0A0F1E] via-[#110D2E] to-[#0A0F1E]",
  transparent: "bg-transparent",
  lavender: "bg-gradient-to-br from-white via-[#F1EDFB] to-[#E9E1FA]",
};

const spacingStyles: Record<string, string> = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-20",
  lg: "py-16 md:py-28",
  xl: "py-20 md:py-36",
};

const maxWidthStyles: Record<string, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  "3xl": "max-w-[1800px]",
  full: "max-w-full",
};

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
  background = "default",
  spacing = "lg",
  maxWidth = "xl",
  centered = false,
  withDivider = false,
  as: Tag = "section",
}) => {
  return (
    <Tag
      id={id}
      className={[
        "relative w-full overflow-hidden",
        backgroundStyles[background],
        spacingStyles[spacing],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Optional top border divider */}
      {withDivider && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />
      )}

      {/* Subtle ambient glow for gradient sections */}
      {background === "gradient" && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #7C3AED 0%, #A855F7 40%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #A855F7 0%, #7C3AED 50%, transparent 70%)",
            }}
          />
        </>
      )}

      {/* Inner container */}
      <div
        className={[
          "relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8",
          maxWidthStyles[maxWidth],
          centered ? "text-center" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>

      {/* Optional bottom border divider */}
      {withDivider && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />
      )}
    </Tag>
  );
};

export default Section;