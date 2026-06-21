// ==========================================
// MOBILE BOTTOM NAVIGATION
// ==========================================
//
// Purpose:
// Primary navigation for mobile devices.
//
// Visible:
// Mobile Only
//
// Hidden:
// Tablet/Desktop
//
// ==========================================

export default function MobileBottomNav() {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-slate-200
        bg-white
        md:hidden
      "
    >
      <div className="grid grid-cols-3">
        <button className="p-4 text-sm font-medium">Dashboard</button>

        <button className="p-4 text-sm font-medium">Leads</button>

        <button className="p-4 text-sm font-medium">Settings</button>
      </div>
    </nav>
  );
}
