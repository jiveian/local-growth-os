// ==========================================
// IMPORTS
// ==========================================

import Card from "@/components/ui/Card";

// ==========================================
// TYPES
// ==========================================

type MetricCardProps = {
  label: string;
  value: number;
};

// ==========================================
// COMPONENT
// ==========================================
//
// Purpose:
// Displays a single dashboard metric.
//
// Examples:
// Total Leads
// Qualified Leads
// Customers
// Lost Leads
//
// ==========================================

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <Card className="w-full min-h-[120px]">
      <h2 className="text-sm font-medium text-slate-500">{label}</h2>

      <p className="mt-2 text-3xl font-bold">{value}</p>
    </Card>
  );
}
