"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full text-background font-anonymous-pro z-10 relative m-[1rem">
      <div className="container-header w-full mx-auto flex justify-between items-center py-4">
        {/* Logo + Lien Roomify */}
        <div className="flex items-center gap-4 ml-2">
          <Image
            src="/img/logo_roomify.webp"
            alt="Roomify Logo"
            width={50}
            height={50}
            priority
          />
          <h1
            className="text-roomify text-background font-bold tracking-wide"
          >
            ROOMIFY
          </h1>
        </div>

        <div className="flex w-auto justify-evenly flex-wrap max-[700px]:w-40 p-2">
          {/* Section Burger */}
          <div className="tablet:hidden flex items-center px-5">
            <button
              className="text-white text-3xl px-3"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Menu Mobile (Affichage Conditionnel) */}
          {menuOpen && (
            <div className="absolute top-[4rem]  left-0 w-full h-100 bg-black/40 text-white z-50 text-decoration-none ">
              <ul className="flex flex-col items-center text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-decoration-none block text-white text-center transition-all duration-1000 relative hover:bg-muted hover:px-[1vw] hover:-mx-[25vw]"
                    style={{ textDecoration: "none" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find"
                    className="block text-white text-center transition-all duration-1000 relative no-underline hover:bg-muted hover:px-[1vw] hover:-mx-[25vw]"
                    style={{ textDecoration: "none" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Rechercher
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about_us"
                    className="block text-white text-center transition-all duration-1000 relative no-underline hover:bg-muted hover:px-[1vw] hover:-mx-[25vw]"
                    style={{ textDecoration: "none" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-white text-center transition-all duration-1000 relative no-underline hover:bg-muted hover:px-[1vw] hover:-mx-[25vw]"
                    style={{ textDecoration: "none" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Liens Principaux (Desktop) */}
          <ul className="hidden tablet:flex gap items-center ">
            <li>
              <Link
                href="/"
                className="
                    relative text-white text-xl font-semibold tracking-wide 
                    text-lg tablet:text-base laptopSmall:text-xl desktop:text-2xl
                    transition-all duration-300
                    hover:bg-muted hover:text-black 
                    px-2 py-1 rounded-lg
                    before:absolute before:bottom-0 before:left-0 
                    before:w-0 before:h-[2px] before:bg-primary 
                    before:transition-all before:duration-300 hover:before:w-0"
                style={{ textDecoration: "none" }}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/find"
                className="
                   relative text-white text-xl font-semibold tracking-wide 
                   text-lg tablet:text-base laptopSmall:text-xl desktop:text-2xl
                   transition-all duration-300
                   hover:bg-muted hover:text-black 
                   px-2 py-1 rounded-lg
                   before:absolute before:bottom-0 before:left-0 
                   before:w-0 before:h-[2px] before:bg-primary 
                   before:transition-all before:duration-300 hover:before:w-0"
                style={{ textDecoration: "none" }}
              >
                Rechercher
              </Link>
            </li>
            <li>
              <Link
                href="/about_us"
                className="
                 relative text-white text-xl font-semibold tracking-wide 
                 text-lg tablet:text-base laptopSmall:text-xl desktop:text-2xl
                 transition-all duration-300
                 hover:bg-muted hover:text-black 
                 px-2 py-1 rounded-lg
                 before:absolute before:bottom-0 before:left-0 
                 before:w-0 before:h-[2px] before:bg-primary 
                 before:transition-all before:duration-300 hover:before:w-0"
                style={{ textDecoration: "none" }}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="
                   relative text-white text-xl font-semibold tracking-wide 
                   text-lg tablet:text-base laptopSmall:text-xl desktop:text-2xl
                   transition-all duration-300
                   hover:bg-muted hover:text-black 
                   px-2 py-1 rounded-lg
                   before:absolute before:bottom-0 before:left-0 
                   before:w-0 before:h-[2px] before:bg-primary 
                   before:transition-all before:duration-300 hover:before:w-0"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Barre de Recherche (Desktop uniquement au-dessus de 1920px) */}
          <div className="hidden desktop:flex items-center gap-4 flex-auto max-w-lg mx-4">
            <div className="relative w-full">
              <input
                type="text"
                className="
                  w-full rounded-full border text-white 
                  border-neutral-200 px-4 py-2 
                  text-sm desktop:text-lg
                  placeholder:text-neutral-500 outline-none
                  focus:ring-2 focus:ring-primary focus:border-primary 
                  bg-black/50 dark:border-neutral-600 dark:placeholder:text-neutral-300"
                          placeholder="Trouver une destination"
                        />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Icône Connexion en dessous de 1229px */}
          <div className="laptopSmall:hidden flex items-center cursor-pointer gap-20">
            <FontAwesomeIcon icon={faUser} className="text-white w-6 h-6" />
          </div>

        </div>

        {/* Boutons Authentification (Desktop uniquement à partir de 1230px) */}
        <div className="hidden laptopSmall:flex">
          <button className="button text-sm tablet:text-base px-4 py-1 tablet:px-6 tablet:py-2 font-bold rounded-l-2xl border">
            S&apos;inscrire
          </button>

          <button className=" mr-2 button text-sm tablet:text-base px-4 py-1 tablet:px-6 tablet:py-2 font-bold rounded-r-2xl bg-white text-black border">
            Se connecter
          </button>
        </div>
      </div>
    </nav>
  );
}
