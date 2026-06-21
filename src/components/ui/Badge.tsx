import { ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-slate-100 text-slate-700",

  success: "bg-green-100 text-green-700",

  warning: "bg-amber-100 text-amber-700",

  danger: "bg-red-100 text-red-700",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${variantClasses[variant]}
      `}
    >
      {children}
    </span>
  );
}
