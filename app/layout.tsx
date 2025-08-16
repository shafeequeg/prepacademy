// app/layout.tsx (server component)
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prepacademy.in"),
  keywords: [],
  title: {
    default: "Prepacademy",
    template: "%s | prepacademy",
  },
  icons: {
    icon: "/Headerlogo.png",
  },
  openGraph: {
    description:"India's leading online learning platform for NEET and JEE preparation",
    images: ['']
  },
  verification: {
    google: "ufNnIZZlzbbCtMIo5IJwcExN0J0lfSLcoDidQ5jbEpA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
