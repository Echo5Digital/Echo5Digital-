import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...rest
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold transition-all duration-200 ease-in-out
    rounded-full cursor-pointer select-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500
    disabled:opacity-50 disabled:cursor-not-allowed
    font-[Inter]
  `;

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary: `
      bg-[#7C3AED] text-white
      shadow-[0_0_16px_4px_rgba(124,58,237,0.5)]
      hover:brightness-110 hover:shadow-[0_0_24px_6px_rgba(168,85,247,0.6)]
      active:brightness-95
      focus-visible:ring-offset-[#0A0F1E]
    `,
    secondary: `
      bg-[#A855F7] text-white
      shadow-[0_0_16px_4px_rgba(168,85,247,0.45)]
      hover:brightness-110 hover:shadow-[0_0_24px_6px_rgba(168,85,247,0.65)]
      active:brightness-95
      focus-visible:ring-offset-[#0A0F1E]
    `,
    outline: `
      bg-transparent text-[#A855F7]
      border-2 border-[#7C3AED]
      shadow-[0_0_10px_2px_rgba(124,58,237,0.25)]
      hover:bg-[#7C3AED]/10
      hover:shadow-[0_0_18px_4px_rgba(124,58,237,0.45)]
      hover:text-white
      active:bg-[#7C3AED]/20
      focus-visible:ring-offset-[#0A0F1E]
    `,
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const spinnerColor =
    variant === "outline" ? "border-[#A855F7]" : "border-white";

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${widthStyle}
        ${className}
      `}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <span
            className={`
              inline-block w-4 h-4 rounded-full border-2 border-t-transparent
              animate-spin ${spinnerColor}
            `}
            aria-hidden="true"
          />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="flex items-center shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <span>{children}</span>
          {rightIcon && (
            <span className="flex items-center shrink-0" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;