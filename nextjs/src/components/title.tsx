"use client";
import { usePathname } from "next/navigation";

export function Title() {
  const pathname = usePathname();

  const PAGE_TITLES = {
    "/all": "Roster",
    "/artists": "Artists",
    "/producer-writers": "Producer & Writers",
    "/about": "About",
  };

  const getPageTitle = () => PAGE_TITLES[pathname] || "";

  const pageTitle = getPageTitle();

  return (
    <header className="container mx-auto flex max-w-7xl items-center justify-center px-4 pb-6 md:px-6 md:py-12 lg:px-8">
      {pageTitle && (
        <h1 className=" font-bold text-black text-xl md:text-4xl">
          {pageTitle.toUpperCase()}
        </h1>
      )}
    </header>
  );
}
