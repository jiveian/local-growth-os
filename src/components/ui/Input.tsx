// ==========================================
// IMPORTS
// ==========================================

import { InputHTMLAttributes } from "react";

// ==========================================
// TYPES
// ==========================================

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

// ==========================================
// COMPONENT
// ==========================================

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        className={`
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-2.5
          text-sm
          outline-none
          transition-all
          focus:border-[#2ED3FF]
          focus:ring-2
          focus:ring-[#2ED3FF]
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
