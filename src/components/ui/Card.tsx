// ==========================================
// IMPORTS
// ==========================================

import { ReactNode } from "react";

// ==========================================
// TYPES
// ==========================================

type CardProps = {
  children: ReactNode;
  className?: string;
};

// ==========================================
// COMPONENT
// ==========================================
//
// Purpose:
// Reusable container for dashboard widgets,
// forms, metrics, and content blocks.
//
// ==========================================

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}
