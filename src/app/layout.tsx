// 
// Root Layout
// 

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  variable: "--font-roboto" 
});

export const metadata: Metadata = {
  title: "Ailaysa Tiger | Translation Dashboard",
  description: "A professional translation management dashboard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} h-full antialiased`}>
      <body className="h-full">{children}</body>
    </html>
  );
}