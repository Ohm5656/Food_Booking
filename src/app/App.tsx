import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div style={{ fontFamily: "'Prompt', sans-serif" }} className="min-h-screen w-full bg-[#FAFAFA] text-slate-800 selection:bg-champagne/30">
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
