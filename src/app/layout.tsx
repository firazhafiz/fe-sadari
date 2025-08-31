import type { Metadata } from "next";
import { Poppins, Delius } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delius",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SADARI 4LIFE - Tes Screening Hipertensi",
  description: "Tes screening hipertensi untuk kesehatan yang lebih baik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${delius.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
