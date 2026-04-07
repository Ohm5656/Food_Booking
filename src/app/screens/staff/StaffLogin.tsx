import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Building2, User, Lock, ArrowRight } from "lucide-react";

export default function StaffLogin() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/staff/app");
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-sm">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 bg-[#1E293B] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-300">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#1E293B] tracking-tight">LUMIÈRE STAFF</h1>
          <p className="text-slate-500 text-sm font-light mt-1 uppercase tracking-widest">Management System</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-[24px] shadow-xl shadow-slate-200/50 p-8 border border-slate-100"
        >
          <div className="mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-lg font-semibold text-[#1E293B]">เข้าสู่ระบบพนักงาน</h2>
            <p className="text-xs text-slate-400 font-light mt-1">กรุณากรอกรหัสพนักงานและรหัสผ่าน</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Employee ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  required
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1E293B] focus:border-transparent transition-all"
                  placeholder="EMP-XXXX"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 ml-1 mr-1">
                <label className="block text-xs font-medium text-slate-500">Password</label>
                <a href="#" className="text-[10px] text-[#3B82F6] font-medium hover:underline">ลืมรหัสผ่าน?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1E293B] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#1E293B] text-white py-3.5 rounded-xl font-medium shadow-md shadow-[#1E293B]/20 hover:bg-[#0F172A] transition-colors group mt-4"
            >
              <span>เข้าสู่ระบบ</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
        
        <p className="text-center text-xs text-slate-400 mt-8 font-light">
          © 2026 Lumière Hotel Staff Portal
        </p>
      </div>
    </div>
  );
}
