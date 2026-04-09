import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  QrCode,
  CheckCircle,
  Clock,
  Users,
  MapPin,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { clsx } from "clsx";

export default function CheckIn() {
  const [searchQuery, setSearchQuery] = useState("");
  const [scanMode, setScanMode] = useState(false);

  const upcomingBookings = [
    {
      id: "LM-8429X",
      name: "K. Somchai Tanaka",
      time: "18:00",
      pax: 4,
      table: "T-05",
      status: "arriving",
      phone: "081-234-5678",
    },
    {
      id: "LM-8430Y",
      name: "K. Ann Wilson",
      time: "18:30",
      pax: 2,
      table: null,
      status: "pending",
      phone: "082-345-6789",
    },
    {
      id: "LM-8432A",
      name: "K. Manop Srisuk",
      time: "19:00",
      pax: 3,
      table: "T-12",
      status: "confirmed",
      phone: "083-456-7890",
    },
  ];

  const handleCheckIn = (bookingId: string) => {
    alert(`เช็กอิน ${bookingId} สำเร็จ!`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto pb-24 md:pb-8">
        {/* Header */}
        <header className="bg-white px-5 pt-4 pb-4 border-b border-slate-100 sticky top-0 z-40 shadow-sm md:rounded-b-3xl">
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">เช็กอินลูกค้า</h1>

          {/* Scan QR Mode Toggle */}
          <div className="flex gap-3 mb-4 md:mb-6">
            <button
              onClick={() => setScanMode(!scanMode)}
              className={clsx(
                "flex-1 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all flex items-center justify-center",
                scanMode
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              <QrCode className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              {scanMode ? "กำลังสแกน QR Code..." : "สแกน QR Code"}
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            <input
              type="text"
              placeholder="ค้นหาชื่อ, เบอร์โทร, Booking ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3 md:py-4 pl-10 md:pl-12 pr-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </header>

        {/* QR Scan View */}
      {scanMode && (
        <div className="p-4">
          <div className="bg-white rounded-3xl p-6 border-2 border-dashed border-blue-300 shadow-sm">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
              {/* Scanning Animation */}
              <motion.div
                animate={{ y: [-20, 300] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
              <QrCode className="w-24 h-24 text-blue-400 mb-4" />
              <p className="text-sm font-semibold text-slate-700">
                วางจุด QR Code ตรงนี้
              </p>
              <p className="text-xs text-slate-500 mt-2">
                QR Code จะถูกสแกนโดยอัตโนมัติ
              </p>
            </div>
            <button
              onClick={() => setScanMode(false)}
              className="w-full mt-4 py-3 rounded-xl bg-slate-100 text-slate-600 font-semibold hover:bg-slate-200 transition-colors"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      )}

      {/* Upcoming Bookings List */}
      {!scanMode && (
        <main className="p-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-700">
              การจองที่กำลังจะมาถึง
            </h2>
            <span className="text-xs font-medium text-slate-500">
              {upcomingBookings.length} รายการ
            </span>
          </div>

          {upcomingBookings.map((booking, i) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="font-mono font-bold text-slate-800 text-sm">
                    {booking.id}
                  </span>
                  <h3 className="font-semibold text-base text-slate-700 mt-1">
                    {booking.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{booking.phone}</p>
                </div>
                <div
                  className={clsx(
                    "px-3 py-1 rounded-lg text-xs font-bold",
                    booking.status === "arriving"
                      ? "bg-blue-50 text-blue-600"
                      : booking.status === "confirmed"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  )}
                >
                  {booking.status === "arriving"
                    ? "กำลังมาถึง"
                    : booking.status === "confirmed"
                    ? "ยืนยันแล้ว"
                    : "รอจัดโต๊ะ"}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4 bg-slate-50 p-3 rounded-xl">
                <div>
                  <p className="text-[10px] text-slate-500 font-medium mb-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> เวลา
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    {booking.time}
                  </p>
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <p className="text-[10px] text-slate-500 font-medium mb-1 flex items-center">
                    <Users className="w-3 h-3 mr-1" /> จำนวน
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    {booking.pax} ท่าน
                  </p>
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <p className="text-[10px] text-slate-500 font-medium mb-1 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> โต๊ะ
                  </p>
                  {booking.table ? (
                    <p className="text-sm font-semibold text-blue-600">
                      {booking.table}
                    </p>
                  ) : (
                    <p className="text-xs font-semibold text-amber-600 flex items-center">
                      รอจัด
                      <AlertCircle className="w-3 h-3 ml-1" />
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                {booking.table ? (
                  <button
                    onClick={() => handleCheckIn(booking.id)}
                    className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors flex items-center justify-center"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    เช็กอิน
                  </button>
                ) : (
                  <button className="flex-1 bg-amber-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-colors flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    จัดโต๊ะก่อน
                  </button>
                )}
                <button className="px-4 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </main>
      )}
      </div>
    </div>
  );
}
