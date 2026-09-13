import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lavanya-praveenn-celebration.vercel.app"),
  title: "Lavanya & Praveenn ❤️ | Wedding Wishes & Digital Celebration",
  description: "Celebrate Lavanya & Praveenn with love, wishes, memories and blessings. Send your heartfelt wedding wishes and celebrate their magical journey.",
  keywords: ["Lavanya Praveenn Wedding", "Wedding Wishes", "Digital Guestbook", "Wedding Celebration", "Lavanya and Praveenn"],
  authors: [{ name: "Yashwanth Friends" }],
  openGraph: {
    title: "Lavanya & Praveenn ❤️ | Wedding Wishes",
    description: "Celebrate Lavanya & Praveenn with love, wishes, memories and blessings.",
    url: "https://lavanya-praveenn-celebration.vercel.app",
    siteName: "Lavanya & Praveenn Wedding Celebration",
    images: [
      {
        url: "/images/couple-main.jpg",
        width: 900,
        height: 1600,
        alt: "Lavanya & Praveenn Wedding Celebration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavanya & Praveenn ❤️ | Wedding Wishes",
    description: "Celebrate Lavanya & Praveenn with love, wishes, memories and blessings.",
    images: ["/images/couple-main.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#070709] text-[#FFFDF7] font-body antialiased min-h-screen relative overflow-x-hidden selection:bg-[#d4af3733] selection:text-[#f5e6ab]">
        {children}
      </body>
    </html>
  );
}
