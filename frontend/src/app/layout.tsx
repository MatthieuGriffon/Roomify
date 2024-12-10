import type { Metadata } from "next";
import { Roboto_Mono, Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular et Bold
  variable: "--font-roboto-mono",
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular et Bold
  variable: "--font-anonymous-pro",
});

export const metadata: Metadata = {
  title: "Roomify - Hotel Booking Platform",
  description: "Find and book your perfect stay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${anonymousPro.variable} antialiased w-full`}
      >
        {/* Conteneur principal */}
        <div className="main-container w-[98%] m-auto mt-2 mb-1 p-1">
          {/* Navbar */}

          {/* Conteneur de l'image */}
          <div className="relative w-full h-[25vh] rounded-lg overflow-hidden z-0">
            {/* Image de Fond */}
            <Image
              src="/img/header.webp"
              alt="Roomify Background"
              fill
              className="object-cover z-0"
              priority
            />

            {/* Voile Noir Semi-Transparent */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Navbar au-dessus */}
            <Navbar />
          </div>

          {/* Contenu principal */}
          <main className="mt-6">{children}</main>

          {/* Footer */}
          <footer className="py-4">
            <p className="text-center text-sm text-muted">
              © 2024 Roomify. Tous droits réservés.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
