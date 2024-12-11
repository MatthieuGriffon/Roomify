// RootLayout.tsx
import type { Metadata } from "next";
import { Roboto_Mono, Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${robotoMono.variable} ${anonymousPro.variable} antialiased w-full`}
      >
        <div className="main-container w-[98%] m-auto mt-2 mb-1 p-1">
          {/* Navbar toujours visible */}
          <Navbar />

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
