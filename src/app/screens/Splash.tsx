import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Utensils, Users, Building2 } from "lucide-react";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-[#0B1528] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1660120447916-123439b05c40?q=80&w=1080')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050B14] via-[#0B1528]/80 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#C5A880] to-[#E5D3B3] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-900/20">
            <Building2 className="w-8 h-8 text-[#0B1528]" />
          </div>
          <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">LUMIÈRE</h1>
          <p className="text-[#E5D3B3] text-sm font-light tracking-wide uppercase">Hotel Buffet Reservation System</p>
          <p className="text-slate-300 text-sm mt-3 font-light">ระบบจองบุฟเฟ่ต์และจัดสรรที่นั่งสำหรับโรงแรม</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[28px] shadow-2xl space-y-4">
          <button 
            onClick={() => navigate("/customer")}
            className="w-full text-left group flex items-center p-4 bg-white hover:bg-slate-50 border border-white transition-all rounded-2xl shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0F1C36] flex items-center justify-center text-[#E5D3B3] mr-4 group-hover:scale-105 transition-transform">
              <Utensils className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#0F1C36] text-lg">เข้าสำหรับลูกค้า</h3>
              <p className="text-xs text-slate-500 font-light mt-0.5">จองบุฟเฟ่ต์ ใช้โปรโมชัน ชำระเงิน</p>
            </div>
          </button>

          <button 
            onClick={() => navigate("/staff")}
            className="w-full text-left group flex items-center p-4 bg-[#0F1C36]/60 hover:bg-[#0F1C36]/80 border border-white/10 backdrop-blur-md transition-all rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mr-4 group-hover:scale-105 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white text-lg">เข้าสำหรับพนักงาน</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">สำหรับเจ้าหน้าที่โรงแรม</p>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
