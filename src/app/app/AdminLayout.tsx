"use client";
// Layout components
import Footer from "@/app/app/components/footer/Footer";
import Navbar from "@/app/app/components/navbar";
import Sidebar from "@/app/app/components/sidebar";
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from "@/app/app/navigation";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import AppWrappers from "./AppWrappers";
import routes from "./routes";

export default function Admin({ children }: { children: React.ReactNode }) {
  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (isWindowAvailable()) document.documentElement.dir = "ltr";
  return (
    <AppWrappers>
      <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
        <Sidebar
          routes={routes}
          open={open}
          setOpen={setOpen}
          variant="admin"
        />
        {/* Navbar & Main Content */}
        <div className="h-full w-full font-dm dark:bg-stone-900">
          {/* Main Content */}
          <main
            className={`mx-2.5  flex-none transition-all dark:bg-stone-900 
              md:pr-2 xl:ml-[323px]`}
          >
            {/* Routes */}
            <div>
              <Navbar
                onOpenSidenav={() => setOpen(!open)}
                brandText={getActiveRoute(routes, pathname)}
                secondary={getActiveNavbar(routes, pathname)}
              />
              <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
                {children}
              </div>
              <div className="p-3">
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </AppWrappers>
  );
}
