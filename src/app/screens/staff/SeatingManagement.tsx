import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Clock,
  AlertCircle,
  ChevronDown,
  CheckCircle,
  RefreshCw,
  X,
  UserCheck,
  Utensils,
  MapPin,
} from "lucide-react";
import { clsx } from "clsx";

type TableStatus = "available" | "reserved" | "occupied" | "cleaning";

interface Table {
  id: number;
  capacity: number;
  status: TableStatus;
  booking?: {
    id: string;
    name: string;
    time: string;
    pax: number;
  };
}

export default function SeatingManagement() {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [timeSlot, setTimeSlot] = useState("dinner");

  // สร้างโต๊ะ 25 โต๊ะ (5x5 grid)
  const generateTables = (): Table[] => {
    const tables: Table[] = [];
    for (let i = 1; i <= 25; i++) {
      // กำหนดโต๊ะที่มีการจอง (ตามรูปที่ให้มา โต๊ะ 5 และ 14)
      if (i === 5) {
        tables.push({
          id: i,
          capacity: 4,
          status: "reserved",
          booking: {
            id: "LM-8429X",
            name: "K. Somchai",
            time: "18:00",
            pax: 4,
          },
        });
      } else if (i === 14) {
        tables.push({
          id: i,
          capacity: 4,
          status: "occupied",
          booking: {
            id: "LM-8431Z",
            name: "K. John Doe",
            time: "17:30",
            pax: 4,
          },
        });
      } else if (i === 9) {
        tables.push({
          id: i,
          capacity: 4,
          status: "cleaning",
        });
      } else if (i === 7 || i === 19) {
        tables.push({
          id: i,
          capacity: 4,
          status: "reserved",
          booking: {
            id: `LM-843${i}A`,
            name: `K. Guest ${i}`,
            time: "19:00",
            pax: 4,
          },
        });
      } else {
        tables.push({
          id: i,
          capacity: 4,
          status: "available",
        });
      }
    }
    return tables;
  };

  const [tables] = useState<Table[]>(generateTables());

  const getStatusColor = (status: TableStatus) => {
    switch (status) {
      case "available":
        return "bg-slate-300 hover:bg-slate-400";
      case "reserved":
        return "bg-[#F59E0B] hover:bg-[#D97706]";
      case "occupied":
        return "bg-[#F59E0B] hover:bg-[#D97706]";
      case "cleaning":
        return "bg-slate-400 hover:bg-slate-500";
    }
  };

  const getStatusText = (status: TableStatus) => {
    switch (status) {
      case "available":
        return "ว่าง";
      case "reserved":
        return "จองแล้ว";
      case "occupied":
        return "กำลังใช้งาน";
      case "cleaning":
        return "ทำความสะอาด";
    }
  };

  const getStatusBadgeColor = (status: TableStatus) => {
    switch (status) {
      case "available":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "reserved":
        return "bg-amber-50 text-amber-600 border-amber-200";
      case "occupied":
        return "bg-orange-50 text-orange-600 border-orange-200";
      case "cleaning":
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 flex flex-col">
      {/* Header */}
      <header className="bg-white px-5 pt-4 pb-4 border-b border-slate-100 sticky top-0 z-40 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            ผังที่นั่ง
          </h1>
          <button className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg flex items-center">
            <RefreshCw className="w-3.5 h-3.5 mr-1" />
            รีเฟรช
          </button>
        </div>

        <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-4">
          <div className="flex items-center text-sm font-semibold text-slate-700">
            รอบ Dinner{" "}
            <span className="mx-2 text-slate-300 font-normal">|</span>
            <span className="font-normal text-slate-500">17:30 - 22:30</span>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </div>

        {/* Legend */}
        <div className="flex justify-between px-1">
          <div className="flex items-center text-[10px] font-medium text-slate-600">
            <div className="w-3 h-3 rounded bg-slate-300 mr-1.5" /> ว่าง
          </div>
          <div className="flex items-center text-[10px] font-medium text-slate-600">
            <div className="w-3 h-3 rounded bg-[#F59E0B] mr-1.5" /> จอง/ใช้งาน
          </div>
          <div className="flex items-center text-[10px] font-medium text-slate-600">
            <div className="w-3 h-3 rounded bg-slate-400 mr-1.5" /> ทำความสะอาด
          </div>
        </div>
      </header>

      {/* Main Content - Table Grid */}
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-7xl mx-auto">
          {/* Grid Layout 5x5 (Mobile) / Responsive on Desktop */}
          <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6">
            {tables.map((table) => (
              <button
                key={table.id}
                onClick={() => setSelectedTable(table)}
                className={clsx(
                  "relative aspect-square rounded-xl transition-all shadow-md",
                  getStatusColor(table.status),
                  selectedTable?.id === table.id
                    ? "ring-4 ring-blue-500 ring-offset-2 scale-105"
                    : "hover:scale-105 active:scale-95"
                )}
              >
                {/* Chair Icons - Top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                  <div className="w-3 h-3 bg-white/80 rounded-sm" />
                  <div className="w-3 h-3 bg-white/80 rounded-sm" />
                </div>

                {/* Chair Icons - Bottom */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  <div className="w-3 h-3 bg-white/80 rounded-sm" />
                  <div className="w-3 h-3 bg-white/80 rounded-sm" />
                </div>

                {/* Chair Icons - Left */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                  <div className="w-3 h-3 bg-white/80 rounded-sm" />
                </div>

                {/* Chair Icons - Right */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                  <div className="w-3 h-3 bg-white/80 rounded-sm" />
                </div>

                {/* Table Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-white drop-shadow-md">
                    {table.id}
                  </span>
                  {table.booking && (
                    <div className="mt-1 flex flex-col items-center">
                      <div className="text-2xl">🧑‍🦱</div>
                      <span className="text-[8px] font-medium text-white/90 mt-0.5">
                        {table.booking.pax} PAX
                      </span>
                    </div>
                  )}
                </div>

                {/* Status Indicator */}
                {table.status !== "available" && (
                  <div className="absolute top-1 right-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {tables.filter((t) => t.status === "available").length}
              </div>
              <div className="text-[10px] font-medium text-slate-500 mt-1">
                ว่าง
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">
                {tables.filter((t) => t.status === "reserved").length}
              </div>
              <div className="text-[10px] font-medium text-slate-500 mt-1">
                จองแล้ว
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {tables.filter((t) => t.status === "occupied").length}
              </div>
              <div className="text-[10px] font-medium text-slate-500 mt-1">
                ใช้งาน
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-600">
                {tables.filter((t) => t.status === "cleaning").length}
              </div>
              <div className="text-[10px] font-medium text-slate-500 mt-1">
                ทำความสะอาด
              </div>
            </div>
          </div>
        </div>
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
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:w-full md:max-w-md bg-white rounded-t-[32px] md:rounded-3xl p-6 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pb-safe max-h-[80vh] overflow-auto"
            >
              <div className="md:hidden w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center">
                    โต๊ะ {selectedTable.id}
                    <span className="ml-3 text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      Main Hall
                    </span>
                  </h2>
                  <p className="text-sm font-medium text-slate-500 flex items-center mt-1.5">
                    <Users className="w-4 h-4 mr-1.5 text-slate-400" />{" "}
                    รองรับ {selectedTable.capacity} ท่าน
                  </p>
                </div>
                <div
                  className={clsx(
                    "px-3 py-1.5 rounded-xl text-xs font-bold border shadow-sm",
                    getStatusBadgeColor(selectedTable.status)
                  )}
                >
                  {getStatusText(selectedTable.status)}
                </div>
              </div>

              {selectedTable.booking && (
                <div className="bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5 p-4 rounded-2xl mb-6 border border-[#F59E0B]/20 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F59E0B]" />
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1 tracking-wide uppercase flex items-center">
                        <Utensils className="w-3 h-3 mr-1" />
                        Booking Details
                      </p>
                      <p className="font-mono font-bold text-slate-800 text-sm">
                        {selectedTable.booking.id}
                      </p>
                    </div>
                    <span className="text-2xl">🧑‍🦱</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        ชื่อลูกค้า
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {selectedTable.booking.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        เวลา
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {selectedTable.booking.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        จำนวน
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {selectedTable.booking.pax} ท่าน
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {selectedTable.status === "available" && (
                  <>
                    <button className="w-full bg-blue-600 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <UserCheck className="w-4 h-4 mr-2" /> จัดการจองลงโต๊ะนี้
                    </button>
                    <button className="w-full bg-emerald-600 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors flex items-center justify-center">
                      <Users className="w-4 h-4 mr-2" /> รับ Walk-in
                    </button>
                  </>
                )}
                {selectedTable.status === "reserved" && (
                  <button className="w-full bg-emerald-500 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" /> เช็กอินลูกค้า
                  </button>
                )}
                {selectedTable.status === "occupied" && (
                  <button className="w-full bg-slate-800 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-colors flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 mr-2" /> ลูกค้าเสร็จสิ้น →
                    ทำความสะอาด
                  </button>
                )}
                {selectedTable.status === "cleaning" && (
                  <button className="w-full bg-emerald-500 text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" />{" "}
                    ทำความสะอาดเสร็จสิ้น
                  </button>
                )}

                <button
                  onClick={() => setSelectedTable(null)}
                  className="w-full py-3.5 rounded-2xl font-semibold bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center"
                >
                  <X className="w-4 h-4 mr-2" /> ปิด
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
