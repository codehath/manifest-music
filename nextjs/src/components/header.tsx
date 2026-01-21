"use client";

import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "@/components/side-menu";
import { useSettings } from "@/contexts/SettingsContext";
import { urlFor } from "@/sanity/image";

export function Header() {
  const settings = useSettings();

  const logoUrl = settings.logo1
    ? urlFor(settings.logo1).url()
    : "/logos/manifest-crown-logo-black.svg";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background px-4 py-6 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <Link href="/" className="flex items-center">
            <Image
              src={logoUrl}
              alt="Manifest Music Logo"
              width={112}
              height={48}
              className="scale-75 md:scale-100"
            />
          </Link>
          <SideMenu />
        </div>
      </div>
    </header>
  );
}
