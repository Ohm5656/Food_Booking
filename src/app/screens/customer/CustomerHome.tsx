import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarCheck,
  Star,
  Sparkles,
  CreditCard,
  Utensils,
  ChevronRight,
  Bell,
  User,
  X,
  Clock,
  Gift,
  Calendar,
  Settings,
  LogOut,
  FileText,
} from "lucide-react";
import { useState } from "react";

export default function CustomerHome() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      icon: <Gift className="w-5 h-5 text-[#C5A880]" />,
      title: "โปรโมชั่นพิเศษ!",
      desc: "รับส่วนลด 20% สำหรับการจองในวันธรรมดา",
      time: "10 นาทีที่แล้ว",
      unread: true,
    },
    {
      id: 2,
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      title: "การจองของคุณได้รับการยืนยัน",
      desc: "International Seafood Grand Buffet - 15 เมษายน 2026",
      time: "2 ชั่วโมงที่แล้ว",
      unread: true,
    },
    {
      id: 3,
      icon: <Clock className="w-5 h-5 text-slate-500" />,
      title: "เตือนความจำ",
      desc: "อย่าลืมมาทานบุฟเฟ่ต์พรุ่งนี้เวลา 18:00 น.",
      time: "1 วันที่แล้ว",
      unread: false,
    },
  ];

  const userMenuItems = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "การจองของฉัน",
      action: () => console.log("My Bookings"),
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "ประวัติการจอง",
      action: () => console.log("Booking History"),
    },
    {
      icon: <User className="w-5 h-5" />,
      label: "โปรไฟล์",
      action: () => console.log("Profile"),
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "ตั้งค่า",
      action: () => console.log("Settings"),
    },
    {
      icon: <LogOut className="w-5 h-5" />,
      label: "ออกจากระบบ",
      action: () => navigate("/staff/login"),
      danger: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121A2F]">
      {/* App Bar (Mobile) */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 h-16 flex items-center justify-between">
        <div className="font-semibold tracking-wide text-lg text-[#0F1C36]">
          LUMIÈRE
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowNotifications(true)}
            className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors relative"
            aria-label="การแจ้งเตือน"
          >
            <Bell className="w-5 h-5 text-slate-600" />
            {notifications.some((n) => n.unread) && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#C5A880] rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => setShowUserMenu(true)}
            className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors"
            aria-label="เมนู"
          >
            <User className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] max-h-[600px] flex items-end pb-12 px-5 bg-[#0F1C36]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551463682-189bf47449d0?q=80&w=1080')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C36] via-[#0F1C36]/50 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full text-white"
          >
            <p className="text-[#C5A880] text-sm uppercase tracking-widest font-medium mb-2">
              Luxury Buffet Experience
            </p>
            <h1 className="text-4xl font-bold leading-tight mb-4 text-[#FFFDF8]">
              สัมผัสประสบการณ์
              <br />
              บุฟเฟ่ต์ระดับพรีเมียม
            </h1>
            <p className="text-slate-300 font-light mb-8 text-sm max-w-sm leading-relaxed">
              ยกระดับมื้อพิเฉษของคุณด้วยวัตถุดิบชั้นเลิศที่คัดสรรมาอย่างพิถีพิถัน
              พร้อมบริการเหนือระดับ
            </p>
            <div className="flex gap-4 w-full max-w-md">
              <button
                onClick={() =>
                  navigate("/customer/restaurant/1")
                }
                className="flex-1 bg-gradient-to-r from-[#C5A880] to-[#E5D3B3] text-[#0F1C36] font-semibold py-4 rounded-2xl shadow-lg shadow-[#C5A880]/20 hover:scale-[1.02] transition-transform"
              >
                จองเลย
              </button>
              <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium py-4 rounded-2xl hover:bg-white/20 transition-all">
                ดูโปรโมชั่น
              </button>
            </div>
          </motion.div>
        </section>

        {/* Highlights */}
        <section className="px-5 py-10 bg-white">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Star className="text-[#C5A880]" />,
                title: "บุฟเฟ่ต์พรีเมียม",
                desc: "วัตถุดิบนำเข้า",
              },
              {
                icon: (
                  <CalendarCheck className="text-[#C5A880]" />
                ),
                title: "จองง่ายบนมือถือ",
                desc: "ตลอด 24 ชั่วโมง",
              },
              {
                icon: <CreditCard className="text-[#C5A880]" />,
                title: "ชำระเงินสะดวก",
                desc: "รองรับทุกช่องทาง",
              },
              {
                icon: <Sparkles className="text-[#C5A880]" />,
                title: "โปรโมชั่นพิเศษ",
                desc: "ส่วนลดมากมาย",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
                  {item.icon}
                </div>
                <h3 className="font-medium text-sm text-[#0F1C36]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Buffet Types */}
        <section className="px-5 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0F1C36]">
              Dining Experiences
            </h2>
            <button className="text-sm font-medium text-[#C5A880] flex items-center">
              ดูทั้งหมด{" "}
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "International Seafood Grand Buffet",
                subtitle: "มื้อเย็นสุดพิเศษกับซีฟู้ดพรีเมียม",
                price: "เริ่มต้น 1,890.-",
                img: "https://images.unsplash.com/photo-1551463682-189bf47449d0?q=80&w=800",
              },
              {
                id: 2,
                title: "Weekend Premium Lunch",
                subtitle: "พักผ่อนวันหยุดกับครอบครัว",
                price: "เริ่มต้น 1,290.-",
                img: "https://images.unsplash.com/photo-1769812343875-c40f9ec7f846?q=80&w=800",
              },
            ].map((buffet) => (
              <div
                key={buffet.id}
                onClick={() =>
                  navigate(`/customer/restaurant/${buffet.id}`)
                }
                className="group relative h-48 rounded-3xl overflow-hidden cursor-pointer shadow-sm"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${buffet.img}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C36]/90 via-[#0F1C36]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-semibold text-lg">
                    {buffet.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light mt-1">
                    {buffet.subtitle}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[#C5A880] font-medium text-sm">
                      {buffet.price}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-50">
        <button
          onClick={() => navigate("/customer/restaurant/1")}
          className="w-full bg-[#0F1C36] text-white font-medium py-4 rounded-2xl shadow-xl shadow-[#0F1C36]/20 flex items-center justify-center space-x-2"
        >
          <Utensils className="w-5 h-5" />
          <span>เริ่มจองตอนนี้</span>
        </button>
      </div>

      {/* Notifications Bottom Sheet */}
      <AnimatePresence>
        {showNotifications && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotifications(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[70] max-h-[80vh] overflow-hidden"
            >
              <div className="sticky top-0 bg-white border-b border-slate-100 px-5 py-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#0F1C36]">
                  การแจ้งเตือน
                </h3>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[calc(80vh-64px)] pb-6">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`px-5 py-4 border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                      notif.unread ? "bg-[#C5A880]/5" : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                        {notif.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-medium text-sm text-[#0F1C36]">
                            {notif.title}
                          </h4>
                          {notif.unread && (
                            <span className="w-2 h-2 bg-[#C5A880] rounded-full flex-shrink-0 mt-1"></span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {notif.desc}
                        </p>
                        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* User Menu Bottom Sheet */}
      <AnimatePresence>
        {showUserMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUserMenu(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[70] overflow-hidden"
            >
              <div className="sticky top-0 bg-white border-b border-slate-100 px-5 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#0F1C36]">
                    สวัสดี, คุณสมชาย
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    member@lumiere.com
                  </p>
                </div>
                <button
                  onClick={() => setShowUserMenu(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
              <div className="py-2 pb-6">
                {userMenuItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      item.action();
                      setShowUserMenu(false);
                    }}
                    className={`w-full px-5 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors ${
                      item.danger ? "text-red-600" : "text-[#0F1C36]"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.danger
                          ? "bg-red-50"
                          : "bg-slate-100"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-slate-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}