import { createBrowserRouter, Outlet } from "react-router";
import Splash from "./screens/Splash";
import CustomerHome from "./screens/customer/CustomerHome";
import RestaurantDetail from "./screens/customer/RestaurantDetail";
import BookingFlow from "./screens/customer/BookingFlow";
import BookingSuccess from "./screens/customer/BookingSuccess";
import StaffLogin from "./screens/staff/StaffLogin";
import StaffLayout from "./screens/staff/StaffLayout";
import StaffDashboard from "./screens/staff/StaffDashboard";
import StaffBookingList from "./screens/staff/StaffBookingList";
import SeatingManagement from "./screens/staff/SeatingManagement";
import CheckIn from "./screens/staff/CheckIn";
import More from "./screens/staff/More";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/customer",
    Component: () => <Outlet />,
    children: [
      { index: true, Component: CustomerHome },
      { path: "restaurant/:id", Component: RestaurantDetail },
      { path: "booking/:id", Component: BookingFlow },
      { path: "success", Component: BookingSuccess },
    ]
  },
  {
    path: "/staff",
    Component: () => <Outlet />,
    children: [
      { index: true, Component: StaffLogin },
      {
        path: "app",
        Component: StaffLayout,
        children: [
          { index: true, Component: StaffDashboard },
          { path: "bookings", Component: StaffBookingList },
          { path: "seating", Component: SeatingManagement },
          { path: "checkin", Component: CheckIn },
          { path: "more", Component: More },
        ]
      }
    ]
  }
]);