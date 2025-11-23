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
  title: "Teknotica - Armado de PCs Personalizadas en Santiago",
  description: "Armado profesional de PCs a medida en Santiago, Chile. Asesoría en componentes, optimización y testing. Tu setup ideal para gaming, trabajo o estudios.",
  keywords: ["armado de pc", "pc gamer", "computadores", "santiago", "chile", "gaming pc", "pc personalizado"],
  authors: [{ name: "Teknotica" }],
  openGraph: {
    title: "Teknotica - Armado de PCs Personalizadas",
    description: "Armado profesional de PCs a medida. Tu setup ideal.",
    url: "https://www.teknotica.cl",
    siteName: "Teknotica",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}