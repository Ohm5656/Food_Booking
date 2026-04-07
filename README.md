# Food Booking

Front-end prototype สําหรับระบบจองบุฟเฟต์โรงแรมในธีม `LUMIERE` พัฒนาด้วย Vite + React โดยแยกประสบการณ์ใช้งานออกเป็น 2 ฝั่งคือ ลูกค้าและพนักงาน เพื่อสาธิต flow การจองโต๊ะ การเลือกแพ็กเกจ การชําระเงิน และการจัดการที่นั่งภายในร้าน

## Overview

โปรเจกต์นี้เป็น single-page application ที่เน้นงาน UI/UX และการจําลองการใช้งานจริงของระบบจองบุฟเฟต์โรงแรม

- ฝั่งลูกค้าเริ่มจากหน้า splash, หน้าเลือกห้องอาหาร/โปรโมชัน, หน้ารายละเอียดร้าน, flow การจอง 4 ขั้นตอน และหน้าสําเร็จหลังชําระเงิน
- ฝั่งพนักงานมีหน้าเข้าสู่ระบบ, dashboard สรุปสถานะรอบบริการ, รายการ booking และหน้าจัดการผังโต๊ะ
- ข้อมูลในระบบเป็น mock data ภายในไฟล์ React component ยังไม่ได้เชื่อมต่อ backend หรือฐานข้อมูลจริง

## Features

### Customer flow

- หน้าแรกแบบ mobile-first พร้อมแยกทางเข้า `Customer` และ `Staff`
- หน้า customer home มี hero section, ไฮไลต์บริการ, promotion, notification sheet และเมนูผู้ใช้
- หน้ารายละเอียดร้านอาหารมีข้อมูลแพ็กเกจ, เมนูเด่น, โปรโมชัน และเงื่อนไขการจอง
- หน้า booking flow แบ่งเป็น 4 step:
  - เลือกวัน เวลา และจํานวนผู้ใช้บริการ
  - เลือกแพ็กเกจบุฟเฟต์
  - กรอกข้อมูลผู้จองและ special requests
  - สรุปรายการ, ใส่ promo code และจําลองการชําระเงิน
- หน้ายืนยันการจองแสดง booking ID และ QR code แบบ mock

### Staff flow

- หน้า login สําหรับพนักงาน
- Dashboard สรุป booking วันนี้, โต๊ะว่าง, ลูกค้าที่รอ check-in และงานด่วน
- หน้า booking list พร้อม search, filter pill และสถานะการชําระเงิน/การจัดโต๊ะ
- หน้า seating management มีทั้งมุมมอง floor plan และ list view พร้อม bottom sheet รายละเอียดโต๊ะ

## Tech Stack

- Vite 6
- React 18
- React Router 7
- Tailwind CSS 4
- Motion
- Lucide React
- Sonner
- Radix UI components บางส่วน

## Project Structure

```text
src/
  app/
    components/
    screens/
      customer/
      staff/
    App.tsx
    routes.tsx
  styles/
  main.tsx
```

## Routes

### Public / customer

- `/` หน้าเลือกบทบาทผู้ใช้งาน
- `/customer` หน้า customer home
- `/customer/restaurant/:id` หน้ารายละเอียดร้านอาหาร
- `/customer/booking/:id` flow การจอง
- `/customer/success` หน้าสําเร็จหลังจอง

### Staff

- `/staff` หน้า login พนักงาน
- `/staff/app` dashboard พนักงาน
- `/staff/app/bookings` รายการ booking
- `/staff/app/seating` หน้าจัดการผังโต๊ะ

## Getting Started

### Requirements

- Node.js 20+ แนะนําให้ใช้เวอร์ชัน LTS
- npm 10+

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build production

```bash
npm run build
```

## Notes

- โปรเจกต์นี้เป็น front-end prototype เพื่อสาธิตหน้าจอและ interaction
- การเข้าสู่ระบบ, การชําระเงิน, การค้นหา และการจัดโต๊ะยังเป็น mock behavior
- รูปภาพส่วนใหญ่ดึงจาก URL ภายนอกเพื่อใช้ประกอบงานออกแบบ

## Design Source

ต้นฉบับเริ่มจาก Figma code bundle และถูกปรับให้อยู่ในรูปแบบโปรเจกต์ React/Vite ภายใน repository นี้
