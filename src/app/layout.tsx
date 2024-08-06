import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/utils";
import TailwindIndicator from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "Allen Nghayoui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, "bg-slate-950 text-white")}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
