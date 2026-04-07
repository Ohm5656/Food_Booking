import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Calendar, Users, Clock, Plus, Minus, Check, CreditCard, ChevronRight, Tag, AlertCircle } from "lucide-react";
import { clsx } from "clsx";
import { format, addDays } from "date-fns";
import { toast } from "sonner";

export default function BookingFlow() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState("18:00");
  const [pax, setPax] = useState({ adults: 2, kids: 0 });
  const [zone, setZone] = useState("ไม่ระบุ");
  
  const [packageId, setPackageId] = useState<number | null>(null);
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "", requests: [] as string[] });
  
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const dates = Array.from({ length: 7 }).map((_, i) => addDays(new Date(), i));
  const timeSlots = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
  const zones = ["ใกล้หน้าต่าง", "โซนเงียบ", "ครอบครัว", "ไม่ระบุ"];
  const packages = [
    { 
      id: 1, 
      name: "Standard Buffet", 
      price: 1890, 
      desc: "Seafood & International Buffet", 
      popular: false,
      image: "https://images.unsplash.com/photo-1551463682-189bf47449d0?q=80&w=600",
      menus: ["ซีฟู้ดออนไอซ์ (หอยนางรม, กุ้งแม่น้ำ)", "ซูชิและซาชิมิพรีเมียม", "สเต็กเนื้อออสเตรเลีย", "ของหวานและไอศกรีมโฮมเมด"]
    },
    { 
      id: 2, 
      name: "Premium Free Flow", 
      price: 2590, 
      desc: "Buffet + Free Flow Beverages", 
      popular: true,
      image: "https://images.unsplash.com/photo-1628642551066-11f79288a424?q=80&w=600",
      menus: ["รวมทุกเมนูจาก Standard Buffet", "บุฟเฟ่ต์เครื่องดื่มแอลกอฮอล์", "ค็อกเทลพิเศษจากบาร์เทนเดอร์", "สปาร์คกลิ้งไวน์เสิร์ฟไม่อั้น"]
    },
    { 
      id: 3, 
      name: "Wagyu & Lobster Grand", 
      price: 3290, 
      desc: "Ultimate Luxury Experience", 
      popular: false,
      image: "https://images.unsplash.com/photo-1728042359879-f5d2c233a07c?q=80&w=600",
      menus: ["เนื้อวากิว A5 ย่างเตาถ่าน", "แคนาเดียนล็อบสเตอร์ (คนละ 1 ตัว)", "เป็ดปักกิ่งและฟัวกราส์", "ไวน์พรีเมียม 1 แก้ว"]
    },
    { 
      id: 4, 
      name: "Family Bundle Rate", 
      price: 1490, 
      desc: "Special deal for minimum 4 pax", 
      popular: false,
      image: "https://images.unsplash.com/photo-1588075592639-14e36e061352?q=80&w=600",
      menus: ["ราคาพิเศษเมื่อมา 4 ท่านขึ้นไป", "รับฟรี เป็ดปักกิ่ง 1 ตัว", "เค้กวันเกิด (กรณีแจ้งล่วงหน้า)", "ถ่ายภาพครอบครัวพร้อมกรอบรูป"]
    }
  ];
  const specialRequests = ["เค้กวันเกิด", "เด็กเล็ก", "ผู้สูงอายุ", "เก้าอี้เด็ก", "แพ้อาหาร"];

  const nextStep = () => setStep((s) => Math.min(4, s + 1));
  const prevStep = () => {
    if (step === 1) navigate(-1);
    else setStep((s) => Math.max(1, s - 1));
  };

  const handleCheckout = () => {
    toast.success("กำลังดำเนินการชำระเงิน...");
    setTimeout(() => {
      navigate("/customer/success");
    }, 1500);
  };

  const calculateTotal = () => {
    if (!packageId) return 0;
    const pkg = packages.find(p => p.id === packageId)!;
    const subtotal = (pax.adults * pkg.price) + (pax.kids * (pkg.price / 2));
    return subtotal - discount;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121A2F] flex flex-col">
      {/* App Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 h-14 flex items-center justify-between shadow-sm">
        <button onClick={prevStep} className="p-2 -ml-2 rounded-full hover:bg-slate-50 text-slate-700">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="font-semibold text-sm text-[#0F1C36]">
          {step === 1 ? "เลือกเวลาและจำนวนคน" : step === 2 ? "เลือกแพ็กเกจ" : step === 3 ? "ข้อมูลผู้จอง" : "ชำระเงิน"}
        </div>
        <div className="w-9" /> {/* Spacer */}
      </header>

      {/* Step Indicator */}
      <div className="bg-white px-5 py-4 border-b border-slate-100 flex justify-between items-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center relative z-10">
            <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mb-1 transition-colors duration-300", 
              step >= i ? "bg-[#0F1C36] text-white shadow-md shadow-[#0F1C36]/20" : "bg-slate-100 text-slate-400"
            )}>
              {step > i ? <Check className="w-4 h-4" /> : i}
            </div>
            <span className={clsx("text-[10px]", step >= i ? "text-[#0F1C36] font-medium" : "text-slate-400 font-light")}>
              {i === 1 ? "วันเวลา" : i === 2 ? "แพ็กเกจ" : i === 3 ? "ข้อมูล" : "ชำระเงิน"}
            </span>
          </div>
        ))}
        {/* Progress Bar Background */}
        <div className="absolute left-9 right-9 top-[90px] h-0.5 bg-slate-100 -z-0">
           <motion.div 
             className="h-full bg-[#0F1C36]" 
             initial={{ width: "0%" }}
             animate={{ width: `${((step - 1) / 3) * 100}%` }}
             transition={{ duration: 0.3 }}
           />
        </div>
      </div>

      <main className="flex-1 overflow-y-auto overflow-x-hidden pb-32">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: DATE & TIME */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-5 py-6 space-y-8"
            >
              {/* Date */}
              <section>
                <h3 className="text-base font-semibold text-[#0F1C36] mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#C5A880]" /> เลือกวันที่
                </h3>
                <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
                  {dates.map((d, i) => (
                    <button 
                      key={i}
                      onClick={() => setDate(d)}
                      className={clsx(
                        "flex-none w-16 h-20 rounded-2xl flex flex-col items-center justify-center border transition-all",
                        date.toDateString() === d.toDateString() 
                          ? "bg-[#0F1C36] border-[#0F1C36] text-white shadow-lg shadow-[#0F1C36]/20" 
                          : "bg-white border-slate-200 text-slate-600"
                      )}
                    >
                      <span className="text-xs font-light mb-1">{format(d, 'EEE')}</span>
                      <span className="text-xl font-semibold">{format(d, 'd')}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Time */}
              <section>
                <h3 className="text-base font-semibold text-[#0F1C36] mb-4 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#C5A880]" /> เลือกรอบเวลา (Dinner)
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={clsx(
                        "py-3 rounded-xl border text-sm font-medium transition-all",
                        time === t 
                          ? "bg-[#C5A880]/10 border-[#C5A880] text-[#0F1C36]" 
                          : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </section>

              {/* Party Size */}
              <section>
                <h3 className="text-base font-semibold text-[#0F1C36] mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#C5A880]" /> จำนวนผู้เข้าทาน
                </h3>
                <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#0F1C36]">ผู้ใหญ่</p>
                      <p className="text-xs text-slate-500 font-light">อายุ 12 ปีขึ้นไป</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button onClick={() => setPax(p => ({...p, adults: Math.max(1, p.adults - 1)}))} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-4 text-center font-semibold text-lg">{pax.adults}</span>
                      <button onClick={() => setPax(p => ({...p, adults: p.adults + 1}))} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#0F1C36]">เด็ก</p>
                      <p className="text-xs text-slate-500 font-light">อายุ 4-11 ปี (ครึ่งราคา)</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button onClick={() => setPax(p => ({...p, kids: Math.max(0, p.kids - 1)}))} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-4 text-center font-semibold text-lg">{pax.kids}</span>
                      <button onClick={() => setPax(p => ({...p, kids: p.kids + 1}))} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Zone */}
              <section>
                <h3 className="text-base font-semibold text-[#0F1C36] mb-4">ความต้องการโซนที่นั่ง (หากมี)</h3>
                <div className="flex flex-wrap gap-2">
                  {zones.map(z => (
                    <button
                      key={z}
                      onClick={() => setZone(z)}
                      className={clsx(
                        "px-4 py-2 rounded-full text-xs font-medium border transition-all",
                        zone === z ? "bg-[#0F1C36] text-white border-[#0F1C36]" : "bg-white text-slate-600 border-slate-200"
                      )}
                    >
                      {z}
                    </button>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* STEP 2: PACKAGES */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-5 py-6 space-y-5"
            >
              <div>
                <h2 className="text-xl font-semibold text-[#0F1C36]">เลือกแพ็กเกจเมนู</h2>
                <p className="text-sm text-slate-500 font-light mt-1">แต่ละแพ็กเกจรวมรายการอาหารและเครื่องดื่มที่แตกต่างกัน</p>
              </div>
              
              {packages.map(pkg => (
                <div 
                  key={pkg.id} 
                  onClick={() => {
                    if (pkg.id === 4 && pax.adults + pax.kids < 4) {
                      toast.error("แพ็กเกจนี้สำหรับ 4 ท่านขึ้นไป");
                      return;
                    }
                    setPackageId(pkg.id);
                  }}
                  className={clsx(
                    "relative rounded-3xl border-2 cursor-pointer transition-all overflow-hidden flex flex-col",
                    packageId === pkg.id 
                      ? "border-[#0F1C36] bg-[#0F1C36]/5 shadow-lg shadow-[#0F1C36]/10" 
                      : "border-slate-100 bg-white hover:border-slate-200 shadow-sm",
                    (pkg.id === 4 && pax.adults + pax.kids < 4) && "opacity-60 grayscale-[50%]"
                  )}
                >
                  <div className="h-32 w-full relative">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${pkg.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {pkg.popular && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-[#C5A880] to-[#E5D3B3] text-[#0F1C36] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                        Recommended
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-[#0F1C36] leading-tight">{pkg.name}</h3>
                        <p className="text-xs text-slate-500 font-light mt-0.5">{pkg.desc}</p>
                      </div>
                      <div className={clsx(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-2 mt-1",
                        packageId === pkg.id ? "border-[#0F1C36] bg-[#0F1C36]" : "border-slate-300"
                      )}>
                        {packageId === pkg.id && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </div>
                    
                    <ul className="mt-3 mb-4 space-y-1.5 flex-1">
                      {pkg.menus.map((menu, idx) => (
                        <li key={idx} className="text-xs text-slate-600 font-light flex items-start">
                          <span className="text-[#C5A880] mr-2 mt-0.5 text-[10px]">●</span> {menu}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-between items-end border-t border-slate-100 pt-4 mt-auto">
                      {(pkg.id === 4 && pax.adults + pax.kids < 4) ? (
                        <p className="text-xs text-rose-500 font-medium">ต้องมา 4 ท่านขึ้นไป</p>
                      ) : (
                        <p className="text-xs text-slate-400 font-light">ราคาต่อท่าน</p>
                      )}
                      <p className="font-bold text-[#C5A880] text-xl">฿{pkg.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* STEP 3: CUSTOMER INFO */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-5 py-6 space-y-6"
            >
              <h2 className="text-xl font-semibold text-[#0F1C36] mb-6">ข้อมูลผู้จอง</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">ชื่อ-นามสกุล</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0F1C36] focus:ring-1 focus:ring-[#0F1C36] transition-all"
                    placeholder="ภาษาไทย หรือ ภาษาอังกฤษ"
                    value={customer.name}
                    onChange={(e) => setCustomer({...customer, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">เบอร์โทรศัพท์</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0F1C36] focus:ring-1 focus:ring-[#0F1C36] transition-all"
                    placeholder="08X-XXX-XXXX"
                    value={customer.phone}
                    onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">อีเมล</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0F1C36] focus:ring-1 focus:ring-[#0F1C36] transition-all"
                    placeholder="example@mail.com"
                    value={customer.email}
                    onChange={(e) => setCustomer({...customer, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-3">คำขอพิเศษ (Special Requests)</label>
                <div className="flex flex-wrap gap-2">
                  {specialRequests.map(req => (
                    <button
                      key={req}
                      onClick={() => {
                        setCustomer(prev => ({
                          ...prev, 
                          requests: prev.requests.includes(req) 
                            ? prev.requests.filter(r => r !== req) 
                            : [...prev.requests, req]
                        }))
                      }}
                      className={clsx(
                        "px-4 py-2 rounded-full text-xs font-medium border transition-all",
                        customer.requests.includes(req) 
                          ? "bg-[#C5A880]/10 text-[#0F1C36] border-[#C5A880]" 
                          : "bg-white text-slate-600 border-slate-200"
                      )}
                    >
                      {req}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: CHECKOUT */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-5 py-6 space-y-6"
            >
              {/* Order Summary Card */}
              <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
                <h3 className="font-semibold text-lg text-[#0F1C36] border-b border-slate-100 pb-4 mb-4">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-light">วันที่และเวลา</span>
                    <span className="font-medium text-[#0F1C36]">{format(date, 'dd MMM yyyy')}, {time} น.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-light">จำนวนลูกค้า</span>
                    <span className="font-medium text-[#0F1C36]">{pax.adults} ผู้ใหญ่ {pax.kids > 0 ? `, ${pax.kids} เด็ก` : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-light">แพ็กเกจ</span>
                    <span className="font-medium text-[#0F1C36]">{packages.find(p => p.id === packageId)?.name}</span>
                  </div>
                  {zone !== "ไม่ระบุ" && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-light">โซน</span>
                      <span className="font-medium text-[#0F1C36]">{zone}</span>
                    </div>
                  )}
                </div>
                
                {/* Promo Code */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex space-x-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="กรอกโค้ดส่วนลด" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:border-[#0F1C36]"
                      />
                    </div>
                    <button 
                      onClick={() => {
                        if (promoCode) { toast.success("ใช้โค้ดส่วนลดสำเร็จ"); setDiscount(500); }
                      }}
                      className="bg-[#0F1C36] text-white px-4 py-2.5 rounded-xl text-sm font-medium"
                    >
                      ใช้โค้ด
                    </button>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-light">ยอดรวม</span>
                    <span className="font-medium text-[#0F1C36]">฿{(calculateTotal() + discount).toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-emerald-600">
                      <span className="font-light">ส่วนลด ({promoCode})</span>
                      <span className="font-medium">- ฿{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-semibold text-[#0F1C36] pt-2 border-t border-slate-100 mt-2">
                    <span>ยอดสุทธิ</span>
                    <span>฿{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <h3 className="font-medium text-[#0F1C36]">ช่องทางชำระเงิน</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border-2 border-[#0F1C36] rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm shadow-[#0F1C36]/5">
                    <div className="w-8 h-8 rounded-full bg-[#0F1C36]/10 flex items-center justify-center mb-2">
                      <CreditCard className="w-4 h-4 text-[#0F1C36]" />
                    </div>
                    <span className="text-sm font-medium text-[#0F1C36]">บัตรเครดิต/เดบิต</span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-slate-300">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                      <span className="font-bold text-slate-600 text-xs">QR</span>
                    </div>
                    <span className="text-sm font-medium text-slate-600">QR Payment</span>
                  </div>
                </div>
                <div className="flex items-start mt-4 bg-amber-50 p-3 rounded-xl border border-amber-100">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-xs text-amber-800 font-light leading-relaxed">กรุณาชำระเงินเต็มจำนวนเพื่อยืนยันการจอง หากต้องการยกเลิก ต้องแจ้งล่วงหน้าอย่างน้อย 48 ชั่วโมง</p>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-50">
        {step < 4 ? (
          <button 
            onClick={nextStep}
            disabled={step === 2 && !packageId}
            className={clsx(
              "w-full font-medium py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all shadow-lg",
              (step === 2 && !packageId) 
                ? "bg-slate-200 text-slate-400 shadow-none" 
                : "bg-[#0F1C36] text-white shadow-[#0F1C36]/20 hover:bg-[#0F1C36]/90"
            )}
          >
            <span>ดำเนินการต่อ</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <button 
            onClick={handleCheckout}
            disabled={!customer.name || !customer.phone}
            className={clsx(
              "w-full font-medium py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all shadow-lg",
              (!customer.name || !customer.phone)
                ? "bg-slate-200 text-slate-400 shadow-none" 
                : "bg-gradient-to-r from-[#C5A880] to-[#E5D3B3] text-[#0F1C36] shadow-[#C5A880]/30"
            )}
          >
            <span>ชำระเงิน {calculateTotal() > 0 ? `฿${calculateTotal().toLocaleString()}` : ''}</span>
          </button>
        )}
      </div>
    </div>
  );
}
