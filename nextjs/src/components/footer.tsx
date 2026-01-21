"use client";

import Image from "next/image";
import { useSettings } from "@/contexts/SettingsContext";
import { urlFor } from "@/sanity/image";

export function Footer() {
  const settings = useSettings();
  const logoUrl = settings.logo6
    ? urlFor(settings.logo6).url()
    : "/logos/manifest-text-logo-white.svg";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-4 py-12 text-white lg:px-8 md:px-6">
      <div className="container mx-auto">
        {/* Parent flex container:
        - flex-col by default (below md) for stacking
        - md:flex-row above md for horizontal layout
        - items-center by default for horizontal centering of flex items on mobile (flex-col)
        - md:items-center above md for vertical centering of flex items (flex-row)
        - md:justify-between above md for equal horizontal spacing
    */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
          {/* 1. Logo and Copyright Block:
          - Always visible (no hidden class below md)
          - flex-col by default to stack logo and text
          - items-center by default to center contents horizontally on mobile
          - md:items-start above md to align contents to the left in its flex item space
          - mb-8 adds margin bottom on mobile to space it from the next item (which is hidden)
          - md:mb-0 removes the margin bottom above md
      */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:items-start">
            <Image src={logoUrl} alt="Manifest Music" width={160} height={40} />
            {/* Copyright text:
            - mt-2 for spacing from image
            - text-[10px] and leading-none are fine
            - text-gray-300 is fine
            - text-center by default to center the text block on mobile (within its items-center parent)
            - md:text-left above md to align text left
        */}
            <div className="mt-2 text-[10px] leading-none text-gray-300 text-center md:text-left">
              © {currentYear} {settings.name} All Rights Reserved.{" "}
              {/* Use © for copyright symbol, added space */}
            </div>
          </div>

          {/* 2. Services List Block:
          - hidden by default (below md)
          - md:flex above md to show as a flex item (using flex here as it contains just text, but md:block would also work)
          - flex-col and items-center inside *this* div to center the text block itself if it were to wrap
          - text-sm is fine
          - md:text-center above md to ensure the text is centered within its flex item space
      */}
          <div className="hidden md:flex flex-col items-center text-sm md:text-center">
            Music Publishing • Management • Records
          </div>

          {/* 3. Email Link Block:
          - hidden by default (below md)
          - md:flex above md to show as a flex item
          - flex-col and items-end inside *this* div to right-align the text block itself if it were to wrap
          - text-sm is fine
          - md:text-right above md to ensure the text is right-aligned within its flex item space
      */}
          <div className="hidden md:flex flex-col items-end text-sm md:text-right">
            <a href={`mailto:${settings.email}`} className="hover:underline">
              {settings.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
