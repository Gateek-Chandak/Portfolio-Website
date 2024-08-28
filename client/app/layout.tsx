import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

const bodoni = Bodoni_Moda({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gateek Chandak",
  description: "my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodoni.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
