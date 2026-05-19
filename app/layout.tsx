import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/components/page-transition";
import { I18nProvider } from "@/components/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VELORIS | Luxury Fragrances",
  description: "Discover VELORIS - modern luxury fragrances crafted with refined elegance. Contemporary scents for those who move with intention and grace.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
