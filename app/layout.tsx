import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SiteNavigation } from "@/components/layout/SiteNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Media Buddy | Your Growth. Our Mission.",
    template: "%s | The Media Buddy",
  },

  description:
    "The Media Buddy provides professional digital marketing, advertising, SEO, social media and web development solutions designed to help businesses grow online.",

  keywords: [
    "digital marketing agency",
    "SEO agency",
    "Google Ads",
    "Meta Ads",
    "social media marketing",
    "website development",
    "digital marketing",
    "The Media Buddy",
  ],

  authors: [
    {
      name: "The Media Buddy",
    },
  ],

  creator: "The Media Buddy",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "The Media Buddy",
    title: "The Media Buddy | Your Growth. Our Mission.",
    description:
      "Professional digital marketing and online growth solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <SiteNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
