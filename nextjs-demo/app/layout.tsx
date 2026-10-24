
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
  title: "Campus Notes",
  description: "A student resource hub for learning and revision.",
};


export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="site-body">
        <header className="site-header">
          Campus Notes
        </header>

        <main className="site-main">
          {children}
        </main>

        <footer className="site-footer">
          © 2026 Campus Notes. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

