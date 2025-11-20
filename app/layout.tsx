import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import { StarBackground } from "@/components/star-background";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Murray",
  description: "Max Murray's personal website",
  icons: {
    icon: [
      {
        url: "https://github.com/maxmurr.png",
        sizes: "any",
      },
    ],
  },
  openGraph: {
    title: "Max Murray",
    description: "Max Murray's personal website",
    url: "https://maxmurr.com",
    type: "website",
    images: ["https://github.com/maxmurr.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Murray",
    description: "Max Murray's personal website",
    images: ["https://maxmurr.com/og-image.png"],
  },
  other: {
    "theme-color": "#252525",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StarBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
