import type { Metadata } from "next";
import { Poppins, Delius } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const delius = Delius({
  variable: "--font-delius",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
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
    <html lang="en">
      <body className={`${poppins.variable} ${delius.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
