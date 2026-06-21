// ==========================================
// IMPORTS
// ==========================================

import MetricCard from "./MetricCard";

// ==========================================
// COMPONENT
// ==========================================

export default function MetricsGrid() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
        lg:grid-cols-4
      "
    >
      <MetricCard label="Total Leads" value={124} />

      <MetricCard label="Qualified Leads" value={48} />

      <MetricCard label="Customers" value={26} />

      <MetricCard label="Lost Leads" value={12} />
    </div>
  );
}
