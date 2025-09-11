import type { Metadata } from "next";
import { Poppins, Delius } from "next/font/google";
import "./globals.css";
import { AnswerProvider } from "@/context/answerContext";

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
  icons: {
    icon: [{ url: "/assets/logo-sadari.png", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${delius.variable} antialiased`}>
      <head>
        <link rel="preload" href="/_next/static/css/93d5035d361ae225.css" as="style" />
        <link rel="preload" href="/hero-image.jpg" as="image" />
      </head>
      <body>
        <AnswerProvider>{children}</AnswerProvider>
      </body>
    </html>
  );
}
