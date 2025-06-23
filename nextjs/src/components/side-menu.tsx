"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useSettings } from "@/contexts/SettingsContext";

export function SideMenu() {
  const [open, setOpen] = React.useState(false);
  const settings = useSettings();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="flex items-center hover:opacity-70">
          <Menu className="h-8 w-8" />
          {/* <span className="text-sm font-medium">MENU</span> Removed */}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] border-none bg-black p-0"
        title="Navigation Menu"
        hideTitle
      >
        <div className="flex h-full flex-col px-6">
          <SheetHeader className="h-28 border-b border-white/10">
            <div className="flex h-full items-end justify-between pb-6">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center space-x-2 text-white hover:opacity-70"
              >
                <span className="text-xs font-small">CLOSE MENU</span>
                <X className="h-7 w-7" />
              </button>
            </div>
          </SheetHeader>
          <nav className="flex-1 py-8">
            <ul className="space-y-6 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/roster"
                  className="text-white/70 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  ROSTER
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${settings.email}`}
                  className="text-white/70 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
