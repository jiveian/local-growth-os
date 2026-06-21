// ==========================================
// IMPORTS
// ==========================================

import { ReactNode } from "react";

// ==========================================
// TYPES
// ==========================================

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

// ==========================================
// COMPONENT
// ==========================================
//
// Purpose:
// Standard page header used throughout
// the application.
//
// Examples:
// Dashboard
// Leads
// Settings
//
// ==========================================

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div
      className="
        border-b
        border-slate-200
        bg-white
        px-6
        py-5
      "
    >
      <div className="flex items-center justify-between">
        <div>
          {/* Page Title */}
          <h1 className="text-2xl font-bold">{title}</h1>

          {/* Optional Description */}
          {description && (
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          )}
        </div>

        {/* Optional Action Buttons */}
        {actions}
      </div>
    </div>
  );
}
