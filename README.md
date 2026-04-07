# Food Booking

Front-end prototype for a hotel buffet reservation system under the `LUMIERE` theme, built with Vite + React. The app separates the experience into two main sides: customer and staff, covering table reservations, package selection, payment flow, and in-restaurant seating management.

## Overview

This project is a single-page application focused on UI/UX and realistic booking flow simulation for a hotel buffet reservation system.

- The customer side includes a splash screen, restaurant and promotion browsing, restaurant detail page, a 4-step booking flow, and a booking success screen.
- The staff side includes a login screen, service dashboard, booking list, and seating management interface.
- All data is currently mocked inside React components and is not connected to a real backend or database.

## Features

### Customer flow

- Mobile-first landing screen with separate entry points for `Customer` and `Staff`
- Customer home screen with hero section, service highlights, promotions, notification sheet, and user menu
- Restaurant detail screen with package previews, featured menu items, promotions, and booking policies
- 4-step booking flow:
  - Select date, time, and party size
  - Choose a buffet package
  - Enter customer information and special requests
  - Review order summary, apply promo code, and simulate payment
- Booking confirmation screen with mock booking ID and QR code

### Staff flow

- Staff login screen
- Dashboard showing booking summary, available tables, waiting check-ins, and urgent tasks
- Booking list with search, filter pills, payment status, and seating status
- Seating management screen with both floor plan view and list view, plus a bottom sheet for table details

## Tech Stack

- Vite 6
- React 18
- React Router 7
- Tailwind CSS 4
- Motion
- Lucide React
- Sonner
- Selected Radix UI components

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

- `/` role selection screen
- `/customer` customer home screen
- `/customer/restaurant/:id` restaurant detail page
- `/customer/booking/:id` booking flow
- `/customer/success` booking success page

### Staff

- `/staff` staff login screen
- `/staff/app` staff dashboard
- `/staff/app/bookings` booking list
- `/staff/app/seating` seating management

## Getting Started

### Requirements

- Node.js 20+ recommended
- npm 10+

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Notes

- This project is a front-end prototype built to demonstrate screens and interactions.
- Login, payment, search, and seating actions are currently mock behaviors.
- Most images are loaded from external URLs for design and presentation purposes.

## Design Source

This repository started from a Figma code bundle and was adapted into a React/Vite project structure.
