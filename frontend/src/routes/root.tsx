import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
}
