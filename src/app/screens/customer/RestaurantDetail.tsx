import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Star, Clock, Info, Tag, Calendar, ChevronRight } from "lucide-react";

export default function RestaurantDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white text-[#121A2F] pb-28">
      {/* Header Image & Back Button */}
      <div className="relative h-72 sm:h-80 w-full bg-[#0F1C36]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551463682-189bf47449d0?q=80&w=1080')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-10 hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="absolute bottom-6 left-5 right-5 text-white z-10">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-[#C5A880] text-[#0F1C36] text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">Premium</span>
            <span className="flex items-center text-sm font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-sm">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-current mr-1" /> 4.9 (128)
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight">LUMIÈRE Grand Seafood</h1>
          <p className="text-slate-300 font-light mt-1">International Premium Buffet</p>
        </div>
      </div>

      <main className="px-5 py-6">
        {/* Quick Info */}
        <div className="flex justify-between items-center bg-[#FAFAFA] border border-slate-100 rounded-2xl p-4 mb-8">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-[#C5A880] mr-3" />
            <div>
              <p className="text-xs text-slate-500 font-light">เวลาเปิด-ปิด</p>
              <p className="text-sm font-medium text-[#0F1C36]">17:30 - 22:30 น.</p>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          <div>
            <p className="text-xs text-slate-500 font-light text-right">ราคาเริ่มต้น</p>
            <p className="text-sm font-medium text-[#0F1C36]">฿1,890 / ท่าน</p>
          </div>
        </div>

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0F1C36] mb-3">About Restaurant</h2>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            สัมผัสประสบการณ์การทานอาหารระดับพรีเมียมกับบุฟเฟ่ต์นานาชาติที่คัดสรรวัตถุดิบชั้นเลิศจากทั่วทุกมุมโลก 
            เพลิดเพลินกับล็อบสเตอร์สดใหม่ ซาชิมิเกรดพรีเมียม และเมนูพิเศษที่ปรุงโดยเชฟระดับมิชลิน 
            ในบรรยากาศหรูหราที่ออกแบบมาเพื่อมื้อพิเศษของคุณโดยเฉพาะ
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0F1C36] mb-4">ไฮไลต์เมนู</h2>
          <div className="flex overflow-x-auto space-x-3 pb-4 scrollbar-hide">
            {[
              { name: "Canadian Lobster", img: "https://images.unsplash.com/photo-1551463682-189bf47449d0?q=80&w=400" },
              { name: "Premium Sashimi", img: "https://images.unsplash.com/photo-1660120447916-123439b05c40?q=80&w=400" },
              { name: "Artisan Desserts", img: "https://images.unsplash.com/photo-1769812343875-c40f9ec7f846?q=80&w=400" }
            ].map((item, idx) => (
              <div key={idx} className="flex-none w-32 h-40 rounded-2xl overflow-hidden relative shadow-sm">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C36]/90 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium leading-tight">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages Preview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0F1C36] mb-4">แพ็กเกจของเรา</h2>
          <div className="space-y-4">
            {[
              { 
                name: "Standard Buffet", 
                price: "1,890", 
                desc: "Seafood & International Buffet",
                img: "https://images.unsplash.com/photo-1551463682-189bf47449d0?q=80&w=400"
              },
              { 
                name: "Premium Free Flow", 
                price: "2,590", 
                desc: "Buffet + Free Flow Beverages",
                img: "https://images.unsplash.com/photo-1628642551066-11f79288a424?q=80&w=400"
              },
              { 
                name: "Wagyu & Lobster Grand", 
                price: "3,290", 
                desc: "Ultimate Luxury Experience",
                img: "https://images.unsplash.com/photo-1728042359879-f5d2c233a07c?q=80&w=400"
              }
            ].map((pkg, idx) => (
              <div key={idx} className="flex items-center p-3 border border-slate-100 rounded-2xl shadow-sm bg-white">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${pkg.img}')` }} />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-sm text-[#0F1C36]">{pkg.name}</h3>
                  <p className="text-[10px] text-slate-500 font-light mt-0.5">{pkg.desc}</p>
                  <p className="text-[#C5A880] text-sm font-bold mt-1.5">฿{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promotions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0F1C36] mb-4 flex items-center">
            <Tag className="w-5 h-5 text-[#C5A880] mr-2" /> โปรโมชั่นพิเศษ
          </h2>
          <div className="bg-[#0F1C36] rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <h3 className="font-semibold text-[#C5A880] text-lg mb-1">Early Bird 20% OFF</h3>
            <p className="text-sm text-slate-300 font-light mb-3">เมื่อจองล่วงหน้า 7 วันขึ้นไป (จำกัด 20 สิทธิ์ต่อวัน)</p>
            <div className="text-xs font-mono bg-white/10 inline-block px-2 py-1 rounded border border-white/20">EARLY20</div>
          </div>
        </section>

        {/* Policies */}
        <section className="mb-8 border-t border-slate-100 pt-6">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-[#0F1C36] mb-1">นโยบายการจองและยกเลิก</h3>
              <ul className="text-xs text-slate-500 font-light space-y-2 list-disc pl-4">
                <li>กรุณาชำระเงินมัดจำ 50% หรือชำระเต็มจำนวนเพื่อยืนยันการจอง</li>
                <li>สามารถยกเลิกหรือเลื่อนวันได้ล่วงหน้า 48 ชั่วโมง โดยไม่เสียค่าธรรมเนียม</li>
                <li>ทางร้านขอสงวนสิทธิ์เก็บโต๊ะไว้ให้ 15 นาที หากมาช้าเกินกำหนด</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Sticky Bottom CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
      >
        <button 
          onClick={() => navigate(`/customer/booking/${id}`)}
          className="w-full bg-[#0F1C36] text-white font-medium py-4 rounded-2xl flex items-center justify-between px-6 shadow-xl shadow-[#0F1C36]/20 group"
        >
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-3 text-[#C5A880]" />
            <span className="text-lg">เลือกวันและรอบเวลา</span>
          </div>
          <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
}
