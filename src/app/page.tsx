import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/layout/PageHeader";

import Button from "@/components/ui/Button";
import MetricsGrid from "@/features/dashboard/components/MetricsGrid";

export default function HomePage() {
  return (
    <AppShell>
      <PageHeader
        title="Dashboard"
        description="Overview of your business activity."
        actions={<Button>Add Lead</Button>}
      />

      {/* ================================== */}
      {/* Dashboard Metrics */}
      {/* ================================== */}

      {/* Total Leads */}
      <div className="p-6">
        <MetricsGrid />
      </div>
    </AppShell>
  );
}
