// ==========================================
// IMPORTS
// ==========================================

import { ReactNode } from "react";

// ==========================================
// TYPES
// ==========================================

type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

// ==========================================
// COMPONENT
// ==========================================
//
// Purpose:
// Shared layout for authentication pages.
//
// Used By:
// - Register Page
// - Login Page
// - Forgot Password Page
//
// ==========================================

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-slate-50
        p-6
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
        "
      >
        {/* Brand */}
        <h1 className="text-2xl font-bold">Local Growth OS</h1>

        <h2 className="mt-4 text-xl font-semibold">{title}</h2>
        {/* Page Description */}
        <p className="mt-2 text-sm text-slate-500">{description}</p>

        {/* Page Content */}
        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}
