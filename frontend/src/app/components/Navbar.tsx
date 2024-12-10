"use client"; // Activation du mode client (Next.js)
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full text-background font-anonymous-pro z-10 relative">
      <div className="container-header w-[98%] mx-auto flex justify-between items-center py-4">
        {/* Logo + Lien Roomify */}
        <div className="flex items-center gap-2">
          <Image
            src="/img/logo_roomify.webp"
            alt="Roomify Logo"
            width={50}
            height={50}
            priority
          />
          <Link
            href="/"
            className="text-2xl text-background font-bold tracking-wide"
          >
            ROOMIFY
          </Link>
        </div>

        {/* Liens principaux */}
        <ul className="hidden md:flex gap-8 text-2xl font-bold">
          <li>
            <Link
              href="/"
              className="text-white hover:text-primary transition"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/find" className=" text-white hover:text-primary transition">
              Rechercher
            </Link>
          </li>
          <li>
            <Link href="/about_us" className="text-white hover:text-primary transition">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-primary transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Bouton Connexion */}
        <button className="hidden md:block button-primary px-6 py-2 rounded-md font-bold">
          Sign In
        </button>

        {/* Icône Burger (Mobile) */}
        <button className="md:hidden">
          <span className="material-icons text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
}
