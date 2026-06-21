// ==========================================
// SIDEBAR
// ==========================================
//
// Purpose:
// Main desktop navigation.
//
// ==========================================

export default function Sidebar() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Local Growth OS</h2>

      <nav className="mt-8 space-y-2">
        <a href="#" className="block rounded-lg px-3 py-2 hover:bg-slate-100">
          Dashboard
        </a>

        <a href="#" className="block rounded-lg px-3 py-2 hover:bg-slate-100">
          Leads
        </a>

        <a href="#" className="block rounded-lg px-3 py-2 hover:bg-slate-100">
          Settings
        </a>
      </nav>
    </div>
  );
}
