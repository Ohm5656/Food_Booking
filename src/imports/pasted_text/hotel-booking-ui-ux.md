ช่วยออกแบบ Mobile-first Web App ภาษาไทย สำหรับ “ระบบจองห้องอาหารบุฟเฟ่ต์โรงแรม พร้อมระบบจัดสรรที่นั่งสำหรับพนักงาน” ให้เป็นงาน UI/UX ระดับพรีเมียม ดูเหมือนโปรดักต์จริง ไม่ใช่งานนักศึกษาแบบทั่วไป โดยต้องออกแบบให้ครบทั้งโปรเจกต์ในไฟล์เดียว และเชื่อม flow ของทุกหน้าถูกต้อง

เป้าหมายของระบบ:
- เป็น Web App ที่ใช้งานได้ดีบนมือถือเป็นหลัก
- มี 2 ส่วนการใช้งานชัดเจน คือ “ลูกค้า” และ “พนักงาน”
- หน้าแรกเมื่อเข้าแอป ให้เด้ง Role Selection Card เพื่อให้เลือก “เข้าสำหรับลูกค้า” หรือ “เข้าสำหรับพนักงาน”
- ฝั่งลูกค้าใช้สำหรับจองบุฟเฟ่ต์ เลือกวันเวลา เลือกแพ็กเกจ กรอกข้อมูล ใช้โปรโมชั่น ชำระเงิน และตรวจสอบการจอง
- ฝั่งพนักงานใช้สำหรับดูรายการจอง จัดสรรที่นั่งผ่านผังโต๊ะ เช็กอินลูกค้า และจัดการสถานะโต๊ะ
- ต้องดูเป็นระบบของโรงแรมระดับพรีเมียม ทันสมัย ใช้งานง่าย เป็นมิตร และพร้อมต่อยอดเป็นของจริง

ภาษาของระบบ:
- ใช้ภาษาไทยเป็นหลักทั้ง Web App
- เสริมภาษาอังกฤษในบางจุดเพื่อเพิ่มความพรีเมียม เช่น headline, section label, status, CTA บางคำ
- ตัวหนังสือไทยต้องอ่านง่าย ไม่เพี้ยน ไม่แน่น ไม่แข็งเกินไป
- mood ของฟอนต์ต้อง friendly, modern, premium
- แนะนำฟอนต์แนวไทยที่อ่านง่ายและดูเป็นมิตร เช่น Prompt / Noto Sans Thai / IBM Plex Sans Thai
- หัวข้อสามารถผสมอังกฤษให้ดูหรูขึ้นได้ เช่น “Luxury Buffet Experience”, “Booking Summary”, “Staff Dashboard”

ภาพรวมสไตล์:
- luxury modern hotel
- premium but friendly
- clean, elegant, warm, trustworthy
- mobile-first, smooth, modern app
- ไม่เอาแนวเกม ไม่เอาแนวไซไฟจัด ไม่เอาแนว corporate แข็งเกินไป
- เน้นความรู้สึก “โรงแรมหรูที่เข้าถึงง่าย”
- ใช้ spacing โปร่ง หายใจได้
- card โค้งมนสวย
- ปุ่มใหญ่ กดง่ายบนมือถือ
- ใช้ glassmorphism เบา ๆ ได้บางจุด แต่ต้องไม่เยอะ
- ใช้ soft shadow, soft gradient, premium depth
- ภาพรวมต้องดูแพงแต่ใช้งานจริง

โทนสี:
Customer side:
- Deep Navy
- Midnight Blue
- Ivory
- Warm White
- Champagne Gold
- Soft Bronze
- Emerald accent เล็กน้อยได้
Staff side:
- Navy
- Slate
- White
- Status colors ชัดเจน
  - เขียว = ว่าง / สำเร็จ
  - เหลือง = รอ / เหลือน้อย / reserve
  - แดง = occupied / issue / urgent
  - เทา = cleaning / disabled / inactive
- ทุกสีต้องดู premium ไม่สดแสบตา
- contrast ต้องอ่านง่ายบนมือถือ

แนวทาง layout:
- mobile-first iPhone style frame
- responsive behavior คิดเผื่อ tablet และ desktop แต่ดีไซน์หลักให้เป็น mobile app
- ฝั่งลูกค้าเน้น step-by-step flow
- ฝั่งพนักงานเน้น dashboard + bottom navigation + bottom sheet + quick actions
- ใช้ bottom sticky CTA ในหน้าสำคัญ
- ใช้ bottom navigation สำหรับฝั่งพนักงาน
- ใช้ component ซ้ำอย่างเป็นระบบ เช่น cards, status badges, bottom sheets, summary cards, CTA buttons

Animation / interaction concept:
- ปุ่มมี press effect นุ่ม ๆ
- card hover / tap scale เบา ๆ
- section reveal แบบ fade-up
- modal / bottom sheet slide-up smooth
- page transition แบบ slide/fade
- success feedback มี check animation
- payment loading ดู premium
- status change มี smooth color transition
- อย่าใส่ animation เยอะเกินจนรก
- ทุกอย่างต้องดู luxury, smooth, polished

ต้องออกแบบครบทุกหน้าต่อไปนี้:

========================
A) ROLE SELECTION / ENTRY
========================

1) Splash / Entry Screen
- พื้นหลังเป็นภาพห้องอาหารบุฟเฟ่ต์โรงแรมแบบพรีเมียม หรือภาพบรรยากาศหรูเบลอ ๆ
- โลโก้ระบบอยู่ด้านบน
- ชื่อระบบ เช่น “Hotel Buffet Reservation System”
- subtitle ภาษาไทย เช่น “ระบบจองบุฟเฟ่ต์และจัดสรรที่นั่งสำหรับโรงแรม”
- ตรงกลางมี Role Selection Card ใหญ่ สวย หรู
- มี 2 ปุ่มหลัก:
  1. เข้าสำหรับลูกค้า
     คำอธิบาย: จองบุฟเฟ่ต์ ใช้โปรโมชัน ชำระเงิน และตรวจสอบการจอง
  2. เข้าสำหรับพนักงาน
     คำอธิบาย: จัดสรรที่นั่ง ดูรายการจอง เช็กอินลูกค้า และจัดการสถานะโต๊ะ
- ใต้ปุ่มพนักงานมีข้อความเล็กว่า “สำหรับเจ้าหน้าที่โรงแรม”
- card ต้องดู premium, centered, mobile-friendly

========================
B) CUSTOMER APP
========================

2) Customer Landing Page
- hero section สวยมาก มีภาพอาหารหรือห้องอาหาร
- headline ไทยที่หรูและเข้าใจง่าย
- มีอังกฤษเสริม เช่น “Luxury Buffet Experience”
- ปุ่ม CTA หลัก “จองเลย”
- ปุ่มรอง “ดูโปรโมชั่น”
- มี section จุดเด่น 3-4 ข้อ
  - บุฟเฟ่ต์พรีเมียม
  - จองง่ายผ่านมือถือ
  - ชำระเงินสะดวก
  - โปรโมชั่นพิเศษ
- มีโปรโมชั่นเด่นเป็นการ์ดแนวนอน
- มี section รีวิวลูกค้า
- มี section ประเภทบุฟเฟ่ต์
- ปิดท้ายด้วย CTA ใหญ่ “เริ่มจองตอนนี้”
- visual ต้องหรู สะอาด ไม่รก

3) Restaurant Detail Page
- รูป cover ใหญ่
- gallery รูปอาหาร / บรรยากาศ / ที่นั่ง
- ชื่อห้องอาหาร
- ประเภทบุฟเฟ่ต์
- rating
- เวลาเปิด-ปิด
- ราคาเริ่มต้น
- คำอธิบายห้องอาหาร
- ไฮไลต์เมนู
- โปรโมชั่นที่ใช้ได้
- นโยบายการจอง/ยกเลิก
- sticky bottom CTA “เลือกวันและรอบเวลา”

4) Select Date / Time / Party Size
- step indicator ชัดเจน
- เลือกวันแบบ horizontal date selector
- เลือกรอบเวลา เช่น กลางวัน / เย็น / special slot
- แสดงสถานะรอบเวลา: ว่าง / เหลือน้อย / เต็ม
- เลือกจำนวนคนแบบปุ่ม + - และ quick chips
- เลือก preference ของโซน เช่น ใกล้หน้าต่าง / โซนเงียบ / ครอบครัว / ไม่ระบุ
- มี summary card ด้านล่าง
- ปุ่ม “ดำเนินการต่อ”

5) Package Selection Page
- มีแพ็กเกจผู้ใหญ่ / เด็ก / premium / weekend
- แต่ละการ์ดมีชื่อแพ็กเกจ ราคา สิ่งที่รวม เงื่อนไข
- มี badge “Popular” หรือ “Recommended”
- เมื่อเลือกแพ็กเกจ card ต้องเด่นขึ้น

6) Customer Info Form
- ชื่อผู้จอง
- เบอร์โทร
- อีเมล
- จำนวนผู้ใหญ่ / เด็ก
- special requests
  - เค้กวันเกิด
  - เด็กเล็ก
  - ผู้สูงอายุ
  - เก้าอี้เด็ก
  - แพ้อาหาร
- ด้านล่างมี booking summary

7) Promotion Page
- ช่องกรอก promo code
- ปุ่ม “ใช้โค้ด”
- รายการโปรโมชั่นที่ใช้ได้
- มี accordion เงื่อนไขโปร
- แสดงผลหลังใช้โปร เช่น ส่วนลด / ยอดสุทธิใหม่
- ดีไซน์คูปองต้องสวยและดูพรีเมียม

8) Checkout / Payment Page
- order summary card ครบถ้วน
- ห้องอาหาร / วันที่ / เวลา / จำนวนคน / แพ็กเกจ / โปร / ราคาสุทธิ
- payment methods:
  - QR Payment
  - PromptPay
  - Credit/Debit Card
  - ชำระเต็มจำนวน
  - มัดจำ
- checkbox ยอมรับเงื่อนไข
- sticky bottom area แสดงยอดรวม + ปุ่ม “ชำระเงิน”
- หน้าต้องดูน่าเชื่อถือ ปลอดภัย premium fintech-lite

9) Payment Success / Booking Confirmed
- success icon
- booking ID
- QR code
- รายละเอียดการจอง
- ปุ่ม:
  - ดูการจอง
  - ดาวน์โหลดใบยืนยัน
  - กลับหน้าแรก
- visual ต้องดูประทับใจ สะอาด ไม่เด็ก

10) My Booking / Search Booking
- ค้นหาด้วย booking code / เบอร์โทร / อีเมล
- แสดงรายการ booking เป็น cards
- มีสถานะ booking และสถานะชำระเงิน
- แสดงโต๊ะที่ได้รับเมื่อ assign แล้ว
- ปุ่ม ดูรายละเอียด / ยกเลิก / ติดต่อพนักงาน

11) Booking Detail Page
- สถานะจองเด่นด้านบน
- รายละเอียดลูกค้า
- วันเวลา
- จำนวนคน
- โต๊ะที่ได้รับ
- โปรโมชั่นที่ใช้
- ยอดที่ชำระ
- QR สำหรับเช็กอิน
- นโยบายและข้อมูลเพิ่มเติม

========================
C) STAFF APP
========================

12) Staff Login Page
- functional but premium
- โลโก้ระบบ
- ชื่อระบบ
- employee ID / username
- password
- ปุ่มเข้าสู่ระบบ
- ลิงก์ลืมรหัสผ่าน
- มีข้อความ “Staff Access”
- อ่านง่าย กดง่ายบนมือถือ

13) Staff Dashboard
- header มีชื่อพนักงาน กะงาน และปุ่มแจ้งเตือน
- quick stats cards:
  - การจองวันนี้
  - รอจัดโต๊ะ
  - รอเช็กอิน
  - โต๊ะว่าง
  - กำลังใช้งาน
  - ต้องทำความสะอาด
- quick action buttons:
  - จัดสรรที่นั่ง
  - ค้นหา booking
  - เช็กอิน
  - รับ walk-in
- section รอบเวลาถัดไป
- section งานด่วน / urgent tasks
- ใช้ bottom navigation 5 เมนู:
  - หน้าแรก
  - การจอง
  - ผังโต๊ะ
  - เช็กอิน
  - เพิ่มเติม

14) Bookings List Page
- search bar
- filter icon
- filter sheet แบบ slide up
- filter ตามวันที่ รอบเวลา สถานะจอง สถานะชำระเงิน การจัดโต๊ะ
- booking cards ต้องอ่านง่ายและ action ไว
- แต่ละ card มี:
  - Booking ID
  - ชื่อลูกค้า
  - จำนวนคน
  - เวลา
  - สถานะชำระเงิน
  - สถานะที่นั่ง
  - โต๊ะ
  - action buttons: ดูรายละเอียด / จัดที่นั่ง / เช็กอิน / ยกเลิก

15) Staff Booking Detail Page
- Booking ID
- ลูกค้า
- เบอร์โทร
- วันเวลา
- จำนวนคน
- โปรที่ใช้
- สถานะชำระเงิน
- special requests
- section โต๊ะที่ assign แล้ว
- ปุ่มเปลี่ยนโต๊ะ / จัดโต๊ะ / เช็กอิน / เพิ่มโน้ต / เปลี่ยนสถานะ

16) Seating Management Page
ต้องมี 2 โหมดในหน้าเดียวกัน:
A. Floor Map View
- แสดงผังโต๊ะแบบ visual
- โต๊ะเป็นวงกลมหรือบล็อก
- มีเลขโต๊ะ
- มีสีสถานะ
  - available
  - reserved
  - occupied
  - cleaning
  - blocked
- ด้านบนมี selector สำหรับรอบเวลาและโซน
- รองรับ pinch to zoom concept บนมือถือ
- แตะโต๊ะแล้วเปิด bottom sheet

B. Table List View
- แสดงรายการโต๊ะเป็น list cards
- โต๊ะเลข
- โซน
- ความจุ
- สถานะ
- booking ปัจจุบัน
- quick action

Bottom Sheet ของโต๊ะ:
- โต๊ะเลขอะไร
- รองรับกี่คน
- booking ไหนกำลังใช้งาน
- ชื่อลูกค้า
- เวลา
- ปุ่ม:
  - assign booking
  - change status
  - check-in
  - mark cleaning
  - free table

17) Assign Seating Page
- booking info card ติดด้านบน
- แสดง booking ที่กำลังจะจัดโต๊ะ
- จำนวนคน
- special request
- รอบเวลา
- section “Recommended Tables”
- แนะนำโต๊ะ 3 ตัวเลือก
- section รายการโต๊ะที่ใช้ได้
- filter ตามโซนและความจุ
- ปุ่ม Assign ชัดเจน
- หน้านี้ต้องดู smart และใช้งานเร็ว

18) Check-in Page
- ช่องค้นหา booking code
- ปุ่ม scan QR
- รายการลูกค้าที่ใกล้ถึงเวลา
- quick check-in cards
- เมื่อเปิด booking แล้วเห็น:
  - ลูกค้า
  - จำนวนคน
  - โต๊ะ
  - สถานะชำระเงิน
  - ปุ่มเช็กอิน
- หลังเช็กอินแล้วสถานะโต๊ะเปลี่ยนเป็น occupied

19) Walk-in Page
- พนักงานสร้าง booking ให้ลูกค้าที่ walk-in
- กรอกจำนวนคน
- เลือกรอบ
- เลือกแพ็กเกจ
- ใส่ชื่อ/เบอร์
- ใส่โปร
- ชำระเงิน
- assign โต๊ะ
- หน้านี้ต้องเป็น flow ที่เร็วกว่า customer flow

20) Notifications / Alerts Page
- booking ใหม่
- ยังไม่จัดโต๊ะ
- ลูกค้ามาถึงแล้ว
- payment issue
- โต๊ะ overdue
- โต๊ะต้อง cleaning
- แสดงเป็น list ที่อ่านง่าย มี priority และสีสถานะ

21) More / Settings Page
- โปรไฟล์พนักงาน
- เปลี่ยนภาษา
- เปลี่ยนธีม
- คู่มือใช้งาน
- ติดต่อแอดมิน
- ออกจากระบบ

========================
DESIGN SYSTEM
========================

สร้าง design system ให้ทั้งโปรเจกต์ด้วย:
- Typography scale ครบ
- Thai-friendly font hierarchy
- Buttons: primary / secondary / outline / ghost / destructive
- Inputs, dropdowns, date selector, chips, badges
- Cards หลายประเภท
- Status badges
- Bottom sheet component
- Sticky CTA bar
- Search bar
- Filter sheet
- Table status indicators
- Payment method selector
- Booking summary card
- Toast / success / error states
- Empty states / loading states / skeletons

========================
ICON / VISUAL DIRECTION
========================

- ใช้ icon style ที่ modern, rounded, premium
- ใช้ภาพอาหารและ interior ที่ดูหรู อบอุ่น น่ากิน
- ลูกเล่นภาพควรช่วยสร้างบรรยากาศโรงแรม
- อย่าใช้ภาพที่ดู stock จนเกินไป
- customer side ให้มี emotional luxury
- staff side ให้มี operational clarity

========================
IMPORTANT OUTPUT REQUIREMENTS
========================

- สร้างเป็น complete Figma screen set ทั้งโปรเจกต์
- แยก flow ลูกค้าและพนักงานชัดเจน
- จัดวาง artboards เป็นลำดับการใช้งานจริง
- ให้เห็นทั้ง splash, role selection, customer flow, staff flow, design system
- ทุกหน้าต้องดูเชื่อมกันเป็น product เดียว
- ใช้ภาษาไทยเป็นหลักจริง ๆ
- ไม่ใช้ตัวหนังสือมั่ว ไม่ใช้ lorem ipsum
- ใส่ข้อความ UI จริงที่พร้อมใช้เดโม
- ดีไซน์ให้ดูพร้อมนำเสนออาจารย์ ลูกค้า หรือกรรมการ
- ผลลัพธ์ต้องดู premium, polished, presentation-ready