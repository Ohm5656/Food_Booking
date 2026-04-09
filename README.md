# LUMIERE Booking

LUMIERE Booking is a mobile-first hotel buffet reservation and seating management web app prototype. The experience is clearly split into two user sides:

- Customer side for browsing restaurants, selecting packages, booking time slots, entering guest details, and completing payment
- Staff side for monitoring reservations, assigning tables, checking in guests, and tracking table status

This project is a `frontend prototype` focused on UI/UX and user flow. It is not connected to a real backend yet.

## Features

### Customer Flow

- Splash screen for role selection
- Customer landing page with hero section, service highlights, and restaurant listings
- Restaurant detail page
- Multi-step booking flow
  - Select date and time
  - Select party size
  - Choose a package
  - Enter customer information
  - Apply a promo code
  - Complete payment
- Booking success page

### Staff Flow

- Staff login page
- Dashboard for current shift overview
- Reservation list
- Seating and table status management page
- Check-in page
- More/settings page

## Tech Stack

- `React 18`
- `React Router 7`
- `Vite 6`
- `Tailwind CSS 4`
- `motion`
- `Lucide React`
- `Sonner`
- `date-fns`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open the URL shown by Vite in the terminal, for example `http://localhost:5173`.

### 3. Build for production

```bash
npm run build
```

Note: `npm run build` was tested and completes successfully in this project.

## Available Routes

### Public / Entry

- `/` role selection screen

### Customer

- `/customer` customer landing page
- `/customer/restaurant/:id` restaurant detail page
- `/customer/booking/:id` booking flow
- `/customer/success` booking success page

### Staff

- `/staff` staff login page
- `/staff/app` staff dashboard
- `/staff/app/bookings` reservation list
- `/staff/app/seating` seating management
- `/staff/app/checkin` guest check-in
- `/staff/app/more` additional menu/settings

## Project Structure

```text
src/
  app/
    App.tsx
    routes.tsx
    screens/
      customer/
      staff/
    components/
      figma/
      ui/
  styles/
  imports/
    pasted_text/
guidelines/
index.html
vite.config.ts
```

## Notes

- Many screens use mock data stored directly inside components to demonstrate the flow
- There is currently no real backend, database, authentication, or payment gateway integration
- The project uses the `Prompt` font from Google Fonts
- Several visual assets reference images from `Unsplash`

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates the production build

## Attribution

Additional attribution details are available in [ATTRIBUTIONS.md](./ATTRIBUTIONS.md)
