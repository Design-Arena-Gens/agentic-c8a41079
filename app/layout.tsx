import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: "PulseWave Chat",
  description:
    "A powerful modern messaging experience tailored for Android inspiration."
};

export default function RootLayout({
  children
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-surface-50 text-surface-900">{children}</body>
    </html>
  );
}
