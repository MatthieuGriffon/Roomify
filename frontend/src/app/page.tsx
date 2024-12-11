// Home.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden -mt-[6rem]  ">
      {/* Image de Fond */}
      <div className="relative w-full h-[42vh] rounded-xl">
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
          <div className="z-10 absolute flex-row mt-[8rem] ml-[1rem]">
            <h2 className="text-xl font-bold text-white">L&apos;évasion commmence ici</h2>
          </div>
          <div className="z-10 absolute bg-white mt-[10rem] ml-[1rem] w-[24rem] h-[13rem] rounded-xl p-2">
            <h1>test</h1>
            
          </div>
      </div>

      {/* Contenu Principal */}
      <div className="relative z-30 px-8 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Bienvenue sur Roomify</h1>
        <p className="text-muted mt-4">
          Trouvez et réservez votre séjour parfait dès maintenant.
        </p>
      </div>
    </div>
  );
}
