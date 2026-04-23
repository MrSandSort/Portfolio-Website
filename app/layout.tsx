import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sandesh Paudel - Software Engineer",
  description:
    "A modern personal portfolio for a software engineer focused on backend systems, academic tutoring, and high-quality product execution."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} min-h-screen bg-background font-body text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#content" className="skip-link">
            Skip to content
          </a>
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-90" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-60 dark:opacity-30" />
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
