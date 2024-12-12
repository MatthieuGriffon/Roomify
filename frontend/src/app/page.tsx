// Home.tsx
import Image from "next/image";
import { SectionSearch } from "./components/SectionSearch";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden -mt-[6rem]">
      {/* Image de Fond */}
      <div className="relative w-full h-[52vh] rounded-xl smartphone:h-[70vh]">
        <Image
          src="/img/header.webp"
          alt="Roomify Background"
          fill
          className="object-cover rounded-xl"
          priority
        />

        {/* Voile Noir Semi-Transparent */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

        {/* Slogan */}
        <div className="absolute top-[7.2rem] left-3 transform z-10 smartphone:(absolute top-[8rem] left-3 w-full text-xs)">
          <h2 className="text-2xl font-bold text-white drop-shadow-md">
            L&apos;évasion commence ici
          </h2>
        </div>
        <SectionSearch />
      </div>
    </div>
  );
}
