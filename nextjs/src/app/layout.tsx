import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";
import SettingsProvider from "@/components/SettingsProvider";
import type React from "react";

export const metadata: Metadata = {
  title: "Manifest Music",
  description: "Music Publishing • Management • Records",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <SettingsProvider>
          <ClientLayout>{children}</ClientLayout>
        </SettingsProvider>
      </body>
    </html>
  );
}
