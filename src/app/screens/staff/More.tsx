import { useNavigate } from "react-router";
import {
  User,
  Settings,
  Bell,
  HelpCircle,
  FileText,
  BarChart3,
  LogOut,
  ChevronRight,
  Shield,
  Clock,
  Smartphone,
  Globe,
} from "lucide-react";
import { clsx } from "clsx";

export default function More() {
  const navigate = useNavigate();

  const profileInfo = {
    name: "นพดล สุริยะ",
    employeeId: "EMP-2024-089",
    role: "Floor Manager",
    shift: "Dinner (16:00 - 00:00)",
    avatar: null,
  };

  const menuSections = [
    {
      title: "บัญชีและการตั้งค่า",
      items: [
        {
          icon: User,
          label: "โปรไฟล์",
          description: "ข้อมูลส่วนตัวและการตั้งค่าบัญชี",
          action: () => console.log("Profile"),
        },
        {
          icon: Bell,
          label: "การแจ้งเตือน",
          description: "จัดการการแจ้งเตือนและเสียง",
          action: () => console.log("Notifications"),
        },
        {
          icon: Settings,
          label: "การตั้งค่า",
          description: "ตั้งค่าแอปพลิเคชัน",
          action: () => console.log("Settings"),
        },
      ],
    },
    {
      title: "รายงานและข้อมูล",
      items: [
        {
          icon: BarChart3,
          label: "รายงานประจำวัน",
          description: "สรุปยอดและสถิติ",
          action: () => console.log("Reports"),
        },
        {
          icon: Clock,
          label: "ประวัติกะทำงาน",
          description: "ดูประวัติการเข้างาน",
          action: () => console.log("Shift History"),
        },
        {
          icon: FileText,
          label: "เอกสารและคู่มือ",
          description: "SOP และ Guidelines",
          action: () => console.log("Documents"),
        },
      ],
    },
    {
      title: "ความช่วยเหลือ",
      items: [
        {
          icon: HelpCircle,
          label: "ศูนย์ช่วยเหลือ",
          description: "FAQ และติดต่อ IT Support",
          action: () => console.log("Help"),
        },
        {
          icon: Smartphone,
          label: "เกี่ยวกับแอป",
          description: "เวอร์ชัน 2.5.1 (Build 2024.04)",
          action: () => console.log("About"),
        },
        {
          icon: Globe,
          label: "ภาษา",
          description: "ไทย / English",
          action: () => console.log("Language"),
        },
      ],
    },
  ];

  const handleLogout = () => {
    if (confirm("คุณต้องการออกจากระบบหรือไม่?")) {
      navigate("/staff");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-800 to-slate-900 px-5 pt-6 pb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {profileInfo.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">
              {profileInfo.name}
            </h2>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              {profileInfo.employeeId}
            </p>
            <div className="flex items-center mt-2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-lg w-fit">
              <Shield className="w-3 h-3 text-emerald-400 mr-1.5" />
              <span className="text-[10px] font-medium text-white">
                {profileInfo.role}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-white/80 mr-2" />
              <span className="text-xs font-medium text-white/90">
                {profileInfo.shift}
              </span>
            </div>
            <span className="text-xs bg-emerald-500/90 text-white px-2 py-0.5 rounded-md font-medium flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse" />
              On Duty
            </span>
          </div>
        </div>
      </header>

      {/* Menu Sections */}
      <main className="px-4 py-6 space-y-6">
        {menuSections.map((section, idx) => (
          <section key={idx}>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-1">
              {section.title}
            </h3>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {section.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  onClick={item.action}
                  className={clsx(
                    "w-full flex items-center p-4 hover:bg-slate-50 transition-colors group",
                    itemIdx !== section.items.length - 1 &&
                      "border-b border-slate-100"
                  )}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <item.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1 ml-3 text-left">
                    <p className="font-semibold text-sm text-slate-800">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-white border border-red-200 rounded-2xl p-4 flex items-center justify-center text-red-600 font-semibold hover:bg-red-50 transition-colors shadow-sm"
        >
          <LogOut className="w-5 h-5 mr-2" />
          ออกจากระบบ
        </button>

        {/* Footer Info */}
        <div className="text-center py-4">
          <p className="text-xs text-slate-400 font-light">
            Lumière Staff Management System
          </p>
          <p className="text-xs text-slate-400 font-light mt-1">
            © 2026 Lumière Hotel. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
