"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";
import type React from "react";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return children;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Apply base padding-top for mobile, then override for md and up */}
      {/* Keep original py-12 and md:py-8 for bottom padding and fallback top padding if needed, then be specific */}
      <main className="flex-grow bg-white px-4 py-12 md:px-6 md:py-12 lg:px-8 pt-[124px] md:pt-[124px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
