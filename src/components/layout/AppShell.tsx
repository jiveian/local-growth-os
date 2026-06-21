// ==========================================
// IMPORTS
// ==========================================

import { ReactNode } from "react";

// ==========================================
// TYPES
// ==========================================

type AppShellProps = {
  children: ReactNode;
};

// ==========================================
// COMPONENT
// ==========================================
//
// Purpose:
// Main application layout.
//
// Desktop:
// Sidebar + Content
//
// Mobile:
// Sidebar hidden for now.
// We'll add Bottom Navigation later.
//
// Usage:
//
// <AppShell>
//   Page Content
// </AppShell>
//
// ==========================================

import MobileBottomNav from "./MobileBottomNav";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        {/* ================================== */}
        {/* Desktop Sidebar */}
        {/* ================================== */}
        <aside
          className="
            hidden
            md:block
            w-64
            min-h-screen
            border-r
            border-slate-200
            bg-white
          "
        >
          <Sidebar />
        </aside>

        {/* ================================== */}
        {/* Main Content Area */}
        {/* ================================== */}
        {/* Mobile Navigation */}
        <MobileBottomNav />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
