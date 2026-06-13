import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export const metadata: Metadata = {
  title: "Professional Ramos Health Care — Estética & Bienestar en Hialeah",
  description:
    "Clínica dirigida por Ana Gloria Ramos, Médica Estética Certificada en Hialeah, FL. Terapia IV, medicina estética (bótox, rellenos, faciales, PRP, láser), control de peso y manejo del dolor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        <main id="top">{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
