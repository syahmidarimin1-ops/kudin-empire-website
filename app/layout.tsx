import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kudin Empire",
  description: "Santan Segar Berkualiti Tinggi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white">
          <div className="grid grid-cols-3 items-center px-6 py-4">
            {/* MENU */}
            <button
              aria-label="Open menu"
              className="text-2xl font-bold"
            >
              ☰
            </button>

            {/* LOGO / BRAND */}
            <div className="text-center font-bold tracking-[0.25em]">
              KUDIN EMPIRE
            </div>

            {/* CTA */}
            <a
              href="/vendor/register"
              className="text-right font-medium text-black"
            >
              Create Vendor Account
            </a>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}
