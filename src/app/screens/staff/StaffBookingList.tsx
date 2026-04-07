import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, Users, Clock, CheckCircle, Clock3, AlertTriangle, ChevronRight, X } from "lucide-react";
import { clsx } from "clsx";

export default function StaffBookingList() {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "ทั้งหมด" },
    { id: "pending", label: "รอจัดโต๊ะ" },
    { id: "arriving", label: "กำลังมาถึง" },
    { id: "checkedin", label: "เช็กอินแล้ว" },
  ];

  const bookings = [
    { id: "LM-8429X", name: "K. Somchai", pax: 4, time: "18:00", table: "T-14", status: "arriving", paid: true, type: "VIP" },
    { id: "LM-8430Y", name: "K. Ann", pax: 2, time: "18:30", table: null, status: "pending", paid: false, type: "Walk-in" },
    { id: "LM-8431Z", name: "K. John Doe", pax: 6, time: "17:30", table: "T-05, T-06", status: "checkedin", paid: true, type: "Online" },
    { id: "LM-8432A", name: "K. Manop", pax: 3, time: "19:00", table: null, status: "pending", paid: true, type: "Online" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <header className="bg-white px-5 pt-safe pt-4 pb-3 border-b border-slate-100 sticky top-0 z-40 shadow-[0_4px_10px_-10px_rgba(0,0,0,0.1)]">
        <h1 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">การจองทั้งหมด</h1>
        
        <div className="flex space-x-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="ค้นหาชื่อ, เบอร์โทร, Booking ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:font-light"
            />
          </div>
          <button 
            onClick={() => setShowFilter(true)}
            className="bg-white border border-slate-200 rounded-xl p-2.5 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex overflow-x-auto space-x-2 pb-1 scrollbar-hide">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={clsx(
                "flex-none px-4 py-1.5 rounded-full text-xs font-medium border transition-all",
                activeFilter === f.id 
                  ? "bg-slate-800 text-white border-slate-800 shadow-md shadow-slate-200" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      {/* List */}
      <main className="p-4 space-y-3">
        {bookings.map((b, i) => (
          <motion.div 
            key={b.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden group cursor-pointer hover:border-blue-200 hover:shadow-md transition-all"
          >
            {/* Status Line */}
            <div className={clsx(
              "absolute left-0 top-0 bottom-0 w-1",
              b.status === 'checkedin' ? "bg-emerald-500" : 
              b.status === 'arriving' ? "bg-blue-500" : "bg-amber-500"
            )} />
            
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-mono font-bold text-slate-800 text-sm tracking-wide">{b.id}</span>
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">{b.type}</span>
                </div>
                <h3 className="font-semibold text-base text-slate-700">{b.name}</h3>
              </div>
              <div className="text-right">
                <span className={clsx(
                  "inline-flex items-center text-[10px] font-medium px-2 py-1 rounded-md",
                  b.paid ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-rose-50 text-rose-600 border border-rose-100"
                )}>
                  {b.paid ? "ชำระแล้ว" : "ยังไม่ชำระ"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-medium mb-1 flex items-center"><Users className="w-3 h-3 mr-1" /> ลูกค้า</span>
                <span className="text-sm font-semibold text-slate-700">{b.pax} ท่าน</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-3">
                <span className="text-[10px] text-slate-400 font-medium mb-1 flex items-center"><Clock className="w-3 h-3 mr-1" /> เวลา</span>
                <span className="text-sm font-semibold text-slate-700">{b.time}</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-3">
                <span className="text-[10px] text-slate-400 font-medium mb-1">สถานะโต๊ะ</span>
                {b.table ? (
                  <span className="text-sm font-semibold text-blue-600">{b.table}</span>
                ) : (
                  <span className="text-xs font-semibold text-amber-600 flex items-center">รอจัดโต๊ะ <AlertTriangle className="w-3 h-3 ml-1" /></span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
              <div className="flex items-center text-xs font-medium">
                {b.status === 'checkedin' && <><CheckCircle className="w-4 h-4 text-emerald-500 mr-1.5" /> <span className="text-emerald-600">กำลังใช้งาน</span></>}
                {b.status === 'arriving' && <><Clock3 className="w-4 h-4 text-blue-500 mr-1.5" /> <span className="text-blue-600">กำลังมาถึง</span></>}
                {b.status === 'pending' && <><AlertTriangle className="w-4 h-4 text-amber-500 mr-1.5" /> <span className="text-amber-600">รอจัดสรรที่นั่ง</span></>}
              </div>
              <button className="flex items-center text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                {b.status === 'pending' ? 'จัดที่นั่ง' : 'ดูรายละเอียด'} <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Filter Bottom Sheet */}
      <AnimatePresence>
        {showFilter && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
              onClick={() => setShowFilter(false)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pb-safe"
            >
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-800">ตัวกรอง</h2>
                <button onClick={() => setShowFilter(false)} className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">สถานะการชำระเงิน</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:border-slate-800 hover:bg-slate-50 transition-colors">ทั้งหมด</button>
                    <button className="py-2.5 rounded-xl border-2 border-slate-800 bg-slate-800 text-white text-sm font-medium shadow-md shadow-slate-200">ชำระแล้ว</button>
                    <button className="py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:border-slate-800 hover:bg-slate-50 transition-colors">ยังไม่ชำระ</button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">รอบเวลา</h3>
                  <div className="flex flex-wrap gap-2">
                    {["17:30", "18:00", "18:30", "19:00", "19:30", "20:00"].map(t => (
                      <button key={t} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">{t}</button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setShowFilter(false)}
                  className="w-full bg-slate-800 text-white py-4 rounded-2xl font-semibold shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-colors mt-4"
                >
                  ใช้ตัวกรอง (4 รายการ)
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
