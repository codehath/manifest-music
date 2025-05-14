"use client";

import { createContext, useContext } from "react";
import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@/sanity/image"; // ✅ Import from here

export interface Settings {
  name: string; // Company Name
  logo1?: SanityImageSource;
  logo2?: SanityImageSource;
  logo3?: SanityImageSource;
  logo4?: SanityImageSource;
  logo5?: SanityImageSource;
  logo6?: SanityImageSource;
  about: PortableTextBlock[];
  instagram?: string;
  email: string;
}

const SettingsContext = createContext<Settings | null>(null);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}

export default SettingsContext;
