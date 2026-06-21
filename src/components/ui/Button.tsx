// ==========================================
// IMPORTS
// ==========================================

import { ButtonHTMLAttributes } from "react";

// ==========================================
// TYPES
// ==========================================

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

// ==========================================
// CONSTANTS
// ==========================================

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#2ED3FF] text-[#010D25] hover:brightness-95",

  secondary: "bg-[#053D57] text-white hover:brightness-110",

  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",

  danger: "bg-[#EF4444] text-white hover:brightness-110",
};

// ==========================================
// COMPONENT
// ==========================================

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-4
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[#2ED3FF]
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
        `}
      {...props}
    >
      {children}
    </button>
  );
}
