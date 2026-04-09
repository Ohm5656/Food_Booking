import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Bell, User, Clock, CheckCircle, AlertTriangle, Users, ClipboardList, RefreshCw, Box } from "lucide-react";
import { clsx } from "clsx";

export default function StaffDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "การจองวันนี้", value: 45, icon: ClipboardList, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "รอจัดโต๊ะ", value: 12, icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "รอเช็กอิน", value: 8, icon: Clock, color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "โต๊ะว่าง", value: 15, icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "กำลังใช้งาน", value: 24, icon: Users, color: "text-slate-600", bg: "bg-slate-100" },
    { label: "ทำความสะอาด", value: 3, icon: RefreshCw, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const quickActions = [
    { label: "จัดสรรที่นั่ง", icon: Box, path: "/staff/app/seating", color: "bg-indigo-600" },
    { label: "ค้นหา Booking", icon: ClipboardList, path: "/staff/app/bookings", color: "bg-blue-600" },
    { label: "เช็กอิน", icon: User, path: "/staff/app/checkin", color: "bg-emerald-600" },
    { label: "รับ Walk-in", icon: Users, path: "/staff/app/walkin", color: "bg-slate-700" },
  ];

  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-32">
      {/* Header */}
      <header className="bg-white px-5 py-4 flex items-center justify-between shadow-sm sticky top-0 z-40">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shadow-inner">
            <User className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-800">นพดล สุริยะ</h2>
            <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Shift: Dinner (16:00 - 00:00)</p>
          </div>
        </div>
        <button className="relative w-10 h-10 rounded-full hover:bg-slate-50 flex items-center justify-center transition-colors">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
        </button>
      </header>

      <main className="px-4 py-6 space-y-8 max-w-7xl mx-auto md:px-8 md:py-8">
        {/* Stats Grid */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800 text-sm md:text-lg">ภาพรวมรอบเวลาปัจจุบัน (17:30 - 22:30)</h3>
            <span className="text-[10px] md:text-sm bg-emerald-100 text-emerald-700 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium flex items-center shadow-sm">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 mr-1 md:mr-2 animate-pulse" /> Live
            </span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="bg-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:border-blue-100 transition-colors cursor-pointer hover:shadow-md"
              >
                <div className={clsx("w-8 h-8 md:w-12 md:h-12 rounded-full mb-2 md:mb-4 flex items-center justify-center shadow-inner", stat.bg)}>
                  <stat.icon className={clsx("w-4 h-4 md:w-6 md:h-6", stat.color)} />
                </div>
                <span className="text-xl md:text-3xl font-bold text-slate-800 mb-0.5 md:mb-2">{stat.value}</span>
                <span className="text-[10px] md:text-sm font-medium text-slate-500 leading-tight">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="font-semibold text-slate-800 text-sm md:text-lg mb-4 md:mb-6">การจัดการด่วน</h3>
          <div className="grid grid-cols-4 md:flex md:flex-wrap gap-3 md:gap-6">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center group md:w-32"
              >
                <div className={clsx("w-14 h-14 md:w-20 md:h-20 rounded-[20px] md:rounded-3xl shadow-sm flex items-center justify-center text-white mb-2 md:mb-4 transition-transform group-hover:scale-105 group-active:scale-95", action.color)}>
                  <action.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-[10px] md:text-sm font-medium text-slate-600 text-center">{action.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Urgent Tasks */}
        <section className="bg-white rounded-3xl p-5 md:p-8 border border-amber-100 shadow-sm shadow-amber-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 md:w-1.5 h-full bg-amber-400" />
          <h3 className="font-semibold text-slate-800 text-sm md:text-lg mb-4 md:mb-6 flex items-center">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-amber-500 mr-2 md:mr-3" /> งานที่ต้องจัดการด่วน
          </h3>
          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start justify-between group cursor-pointer hover:bg-slate-100 transition-colors">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-0.5">Booking LM-8429X (VIP)</p>
                <p className="text-xs text-slate-500 font-light">ลูกค้าแจ้งจะถึงใน 5 นาที (ยังไม่ได้จัดโต๊ะ)</p>
              </div>
              <button className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-medium text-slate-700 shadow-sm hover:border-slate-300">
                จัดโต๊ะ
              </button>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start justify-between group cursor-pointer hover:bg-slate-100 transition-colors">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-0.5">โต๊ะ T-14, T-15 Overdue</p>
                <p className="text-xs text-slate-500 font-light">ลูกค้าเกินเวลา 20 นาที / มีคิวรอ</p>
              </div>
              <button className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-medium text-slate-700 shadow-sm hover:border-slate-300">
                ตรวจสอบ
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
