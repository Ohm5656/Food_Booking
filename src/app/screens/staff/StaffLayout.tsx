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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <main className="flex-1 overflow-y-auto pb-24">
        <Outlet />
      </main>

      {/* Staff Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-3 flex justify-around items-center z-50 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] pb-safe">
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
