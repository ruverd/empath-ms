import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import { Navbar } from "@/shared/components/navbar";

export const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-75 ease-linear">
      <Navbar />
      <div className="h-[calc(100vh-68px)] overflow-y-auto">
        <AnimatePresence mode="sync">
          <motion.main
            key={location.pathname}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
};
