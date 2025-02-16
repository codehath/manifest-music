'use client';

import Image from "next/image";
import { useSettings } from "@/contexts/SettingsContext";
import { urlFor } from "@/sanity/image";

export function Footer() {
  const settings = useSettings();
  const logoUrl = settings.logo6 ? urlFor(settings.logo6).url() : "/logos/manifest-text-logo-white.svg";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-4 py-12 text-white md:px-6 lg:px-8">
      <div className="container mx-auto max-w-8xl">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="text-sm">
            <Image src={logoUrl} alt="Manifest Music" width={160} height={40} />
            <div className="mt-2 text-xs text-gray-300"> {currentYear} {settings.name} All Rights Reserved.</div>
          </div>
          <div className="text-sm">Music Publishing • Management • Creative Services</div>
          <div className="text-sm">
            <a href={`mailto:${settings.email}`} className="hover:underline">
              {settings.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
