import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { CheckCircle2, Download, Home, FileText, QrCode } from "lucide-react";

export default function BookingSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F1C36] text-white flex flex-col items-center justify-center p-5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#C5A880]/20 to-transparent blur-3xl rounded-b-[100%]" />
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="w-full max-w-sm relative z-10"
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#C5A880] to-[#E5D3B3] flex items-center justify-center shadow-lg shadow-[#C5A880]/30 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <CheckCircle2 className="w-10 h-10 text-[#0F1C36]" />
            </motion.div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-wide mb-2">Booking Confirmed!</h1>
          <p className="text-slate-300 font-light text-sm">การจองและชำระเงินของคุณเสร็จสมบูรณ์</p>
        </div>

        {/* E-Ticket Card */}
        <div className="bg-white text-[#121A2F] rounded-3xl p-6 shadow-2xl relative mb-8">
          {/* Ticket Notches */}
          <div className="absolute left-0 top-1/2 -mt-4 w-4 h-8 bg-[#0F1C36] rounded-r-full" />
          <div className="absolute right-0 top-1/2 -mt-4 w-4 h-8 bg-[#0F1C36] rounded-l-full" />
          <div className="absolute left-6 right-6 top-1/2 border-t-2 border-dashed border-slate-200" />
          
          <div className="text-center pb-6">
            <p className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-1">Booking ID</p>
            <p className="text-2xl font-bold text-[#0F1C36] tracking-widest font-mono">LM-8429X</p>
          </div>

          <div className="pt-6 flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-4">
               {/* Mock QR */}
               <QrCode className="w-24 h-24 text-slate-800" />
            </div>
            <p className="text-[10px] text-slate-400 font-light text-center">โปรดแสดง QR Code นี้แก่พนักงาน<br/>เมื่อถึงร้านอาหาร</p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button 
            onClick={() => navigate("/customer")}
            className="w-full bg-white text-[#0F1C36] font-medium py-3.5 rounded-2xl flex items-center justify-center space-x-2 shadow-lg hover:bg-slate-50 transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>ดูรายละเอียดการจอง</span>
          </button>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium py-3.5 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-all">
              <Download className="w-5 h-5" />
              <span className="text-sm">บันทึกรูป</span>
            </button>
            <button 
              onClick={() => navigate("/customer")}
              className="flex-1 bg-transparent border border-white/20 text-white font-medium py-3.5 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white/5 transition-all"
            >
              <Home className="w-5 h-5" />
              <span className="text-sm">หน้าแรก</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
