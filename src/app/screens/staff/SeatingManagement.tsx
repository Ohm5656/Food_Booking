import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Clock, AlertCircle, ChevronDown, CheckCircle, RefreshCw, Box } from "lucide-react";
import { clsx } from "clsx";

export default function SeatingManagement() {
  const [view, setView] = useState<"map" | "list">("map");
  const [selectedTable, setSelectedTable] = useState<any>(null);

  const tables = [
    { id: "T-01", type: "circle", capacity: 2, status: "available", x: 10, y: 10, zone: "Window" },
    { id: "T-02", type: "circle", capacity: 2, status: "occupied", x: 30, y: 10, zone: "Window", booking: "K. Ann (LM-8430Y)" },
    { id: "T-03", type: "rect", capacity: 4, status: "reserved", x: 10, y: 30, zone: "Main", booking: "K. Somchai (LM-8429X)" },
    { id: "T-04", type: "rect", capacity: 4, status: "available", x: 40, y: 30, zone: "Main" },
    { id: "T-05", type: "rect", capacity: 6, status: "cleaning", x: 70, y: 20, zone: "Main", booking: "Done" },
    { id: "T-06", type: "circle", capacity: 2, status: "occupied", x: 20, y: 60, zone: "Quiet", booking: "K. John (LM-8431Z)" },
    { id: "T-07", type: "rect", capacity: 4, status: "available", x: 50, y: 60, zone: "Quiet" },
    { id: "T-08", type: "circle", capacity: 2, status: "reserved", x: 80, y: 60, zone: "Window", booking: "K. Jane (LM-8433B)" },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "available": return "bg-emerald-500 border-emerald-600 text-white shadow-emerald-500/30";
      case "reserved": return "bg-amber-400 border-amber-500 text-white shadow-amber-400/30";
      case "occupied": return "bg-rose-500 border-rose-600 text-white shadow-rose-500/30";
      case "cleaning": return "bg-slate-400 border-slate-500 text-white shadow-slate-400/30";
      default: return "bg-slate-200 border-slate-300 text-slate-600";
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "available": return "ว่าง";
      case "reserved": return "จองแล้ว (รอมาถึง)";
      case "occupied": return "กำลังใช้งาน";
      case "cleaning": return "กำลังทำความสะอาด";
      default: return "-";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 flex flex-col">
      {/* Header */}
      <header className="bg-white px-5 pt-safe pt-4 pb-3 border-b border-slate-100 sticky top-0 z-40 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">ผังที่นั่ง (Floor Plan)</h1>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setView("map")}
              className={clsx("px-3 py-1.5 text-xs font-semibold rounded-md transition-all", view === "map" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:bg-slate-200")}
            >
              แผนผัง
            </button>
            <button 
              onClick={() => setView("list")}
              className={clsx("px-3 py-1.5 text-xs font-semibold rounded-md transition-all", view === "list" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:bg-slate-200")}
            >
              รายการ
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <div className="flex items-center text-sm font-semibold text-slate-700">
            รอบ Dinner <span className="mx-2 text-slate-300">|</span> 17:30 - 22:30
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </div>

        {/* Legend */}
        <div className="flex justify-between mt-4 px-1">
          <div className="flex items-center text-[10px] font-medium text-slate-600"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-1.5 shadow-sm shadow-emerald-500/30" /> ว่าง</div>
          <div className="flex items-center text-[10px] font-medium text-slate-600"><div className="w-2.5 h-2.5 rounded-full bg-amber-400 mr-1.5 shadow-sm shadow-amber-400/30" /> จองแล้ว</div>
          <div className="flex items-center text-[10px] font-medium text-slate-600"><div className="w-2.5 h-2.5 rounded-full bg-rose-500 mr-1.5 shadow-sm shadow-rose-500/30" /> ใช้งาน</div>
          <div className="flex items-center text-[10px] font-medium text-slate-600"><div className="w-2.5 h-2.5 rounded-full bg-slate-400 mr-1.5 shadow-sm shadow-slate-400/30" /> ทำความสะอาด</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {view === "map" ? (
          <div className="flex-1 bg-[#F1F5F9] p-4 relative overflow-auto touch-pan-x touch-pan-y" style={{ minHeight: "400px" }}>
            <div className="w-[150%] h-[150%] sm:w-full sm:h-full relative border-2 border-dashed border-slate-200 rounded-3xl bg-white/50 backdrop-blur-sm">
              {/* Floor markers */}
              <div className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100/80 px-3 py-1 rounded-full backdrop-blur-md">Window Zone</div>
              <div className="absolute bottom-4 right-4 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100/80 px-3 py-1 rounded-full backdrop-blur-md">Quiet Zone</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black text-slate-200/50 uppercase tracking-[0.5em] select-none pointer-events-none">Main Dining</div>

              {tables.map((table) => (
                <button
                  key={table.id}
                  onClick={() => setSelectedTable(table)}
                  className={clsx(
                    "absolute flex flex-col items-center justify-center border-2 transition-all hover:scale-105 active:scale-95 shadow-lg",
                    getStatusColor(table.status),
                    table.type === "circle" ? "rounded-full w-14 h-14" : "rounded-2xl w-20 h-14",
                    selectedTable?.id === table.id ? "ring-4 ring-blue-500 ring-offset-2 ring-offset-[#F1F5F9] scale-105 z-10" : ""
                  )}
                  style={{ left: `${table.x}%`, top: `${table.y}%` }}
                >
                  <span className="font-bold text-sm tracking-tight">{table.id}</span>
                  <span className="text-[9px] font-medium opacity-90 flex items-center mt-0.5"><Users className="w-2.5 h-2.5 mr-0.5" />{table.capacity}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-3 flex-1 overflow-y-auto bg-[#F8FAFC]">
            {tables.map(table => (
              <div 
                key={table.id}
                onClick={() => setSelectedTable(table)}
                className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className={clsx(
                    "w-12 h-12 flex items-center justify-center font-bold text-sm border-2 shadow-sm",
                    getStatusColor(table.status),
                    table.type === "circle" ? "rounded-full" : "rounded-xl"
                  )}>
                    {table.id}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base">{table.id} <span className="text-xs font-medium text-slate-400 ml-1">({table.zone})</span></h3>
                    <p className="text-xs font-medium text-slate-500 flex items-center mt-1">
                      <Users className="w-3.5 h-3.5 mr-1" /> {table.capacity} Seats
                    </p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className={clsx(
                    "text-xs font-bold px-3 py-1 rounded-full border mb-1.5 shadow-sm",
                    table.status === 'available' ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                    table.status === 'reserved' ? "bg-amber-50 text-amber-600 border-amber-200" :
                    table.status === 'occupied' ? "bg-rose-50 text-rose-600 border-rose-200" :
                    "bg-slate-100 text-slate-600 border-slate-200"
                  )}>
                    {getStatusText(table.status)}
                  </span>
                  {table.booking && <span className="text-[10px] font-medium text-slate-500">{table.booking}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Sheet for Table Details */}
      <AnimatePresence>
        {selectedTable && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
              onClick={() => setSelectedTable(null)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pb-safe"
            >
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center">
                    โต๊ะ {selectedTable.id}
                    <span className="ml-3 text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md border border-slate-200">{selectedTable.zone}</span>
                  </h2>
                  <p className="text-sm font-medium text-slate-500 flex items-center mt-1.5"><Users className="w-4 h-4 mr-1.5 text-slate-400" /> รองรับ {selectedTable.capacity} ท่าน</p>
                </div>
                <div className={clsx(
                  "px-3 py-1.5 rounded-xl text-xs font-bold border shadow-sm",
                  selectedTable.status === 'available' ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                  selectedTable.status === 'reserved' ? "bg-amber-50 text-amber-600 border-amber-200" :
                  selectedTable.status === 'occupied' ? "bg-rose-50 text-rose-600 border-rose-200" :
                  "bg-slate-100 text-slate-600 border-slate-200"
                )}>
                  {getStatusText(selectedTable.status)}
                </div>
              </div>

              {selectedTable.booking && (
                <div className="bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-100 shadow-sm shadow-slate-100/50 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-300" />
                  <p className="text-xs font-semibold text-slate-400 mb-1 tracking-wide uppercase">Current Booking</p>
                  <p className="font-bold text-slate-800 text-base">{selectedTable.booking}</p>
                  <p className="text-xs font-medium text-slate-500 mt-1 flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> เช็กอินเมื่อ 17:45</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                {selectedTable.status === 'available' && (
                  <button className="col-span-2 bg-blue-600 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Box className="w-4 h-4 mr-2" /> จัดการจองลงโต๊ะนี้
                  </button>
                )}
                {selectedTable.status === 'reserved' && (
                  <button className="col-span-2 bg-emerald-500 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" /> เช็กอินลูกค้า
                  </button>
                )}
                {selectedTable.status === 'occupied' && (
                  <button className="col-span-2 bg-slate-800 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-colors flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 mr-2" /> แจ้งพนักงานทำความสะอาด
                  </button>
                )}
                {selectedTable.status === 'cleaning' && (
                  <button className="col-span-2 bg-emerald-500 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" /> ทำความสะอาดเสร็จสิ้น (ว่าง)
                  </button>
                )}
                
                <button className="col-span-2 py-3.5 rounded-2xl font-semibold bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center mt-2">
                  <AlertCircle className="w-4 h-4 mr-2" /> เปลี่ยนสถานะโต๊ะ...
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
