import { Outlet } from "react-router-dom";

import { Navbar } from "@/shared/components/navbar";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-75 ease-linear">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
