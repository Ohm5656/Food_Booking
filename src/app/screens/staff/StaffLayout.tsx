import { Outlet, useNavigate, useLocation } from "react-router";
import { Home, CalendarDays, LayoutDashboard, QrCode, Menu } from "lucide-react";
import { clsx } from "clsx";

export default function StaffLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "หน้าแรก", path: "/staff/app", icon: Home },
    { label: "การจอง", path: "/staff/app/bookings", icon: CalendarDays },
    { label: "ผังโต๊ะ", path: "/staff/app/seating", icon: LayoutDashboard },
    { label: "เช็กอิน", path: "/staff/app/checkin", icon: QrCode },
    { label: "เพิ่มเติม", path: "/staff/app/more", icon: Menu },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
      {/* Desktop Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 fixed top-0 bottom-0 left-0 z-50">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="font-semibold tracking-wide text-lg text-[#0F1C36]">
            LUMIÈRE <span className="text-[#C5A880] text-sm ml-1">STAFF</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/staff/app" && location.pathname.startsWith(item.path));
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={clsx(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                  isActive ? "bg-blue-50 text-[#1E3A8A]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className={clsx("w-5 h-5", isActive ? "stroke-2" : "stroke-[1.5]")} />
                <span className={clsx("text-sm", isActive ? "font-semibold" : "font-medium")}>{item.label}</span>
              </button>
            );
          })}
        </div>
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">
              S
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Staff User</p>
              <p className="text-xs text-slate-500 truncate">Role: Manager</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto pb-24 md:pb-0 md:ml-64">
        <Outlet />
      </main>

      {/* Staff Bottom Navigation (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-3 flex justify-around items-center z-50 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] pb-safe">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/staff/app" && location.pathname.startsWith(item.path));
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={clsx(
                "flex flex-col items-center justify-center w-16 space-y-1 transition-all",
                isActive ? "text-[#1E3A8A]" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <div className={clsx("p-1.5 rounded-xl transition-all", isActive ? "bg-blue-50" : "")}>
                <item.icon className={clsx("w-5 h-5", isActive ? "stroke-2" : "stroke-[1.5]")} />
              </div>
              <span className={clsx("text-[10px]", isActive ? "font-semibold" : "font-medium")}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
