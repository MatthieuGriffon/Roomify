import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export function SectionDiscover() {
  return (
    <>
      <div className=" justify-center text-black w-auto m-2">
        <h1 className="font-bold text-lg">Découvrez votre destination</h1>
        <h2 className="text-xs">
          Explorez notre gamme d&apos;hébérgement adaptés à toutes les
          préférences des voyageurs
        </h2>
      </div>
      <div className="flex-row w-auto justify-center">
        {/* Carte de type "Villas" */}
        <div className="flex flex-wrap justify-center">
          <div className="m-2">
            <div className=" w-64 h-64 p-1 rounded-lg">
              <h3 className="text-center text-black font-bold">Villas</h3>

              {/* Alignement horizontal de l'icône et du texte */}
              <div className="flex items-center gap-2 mt-1 text-muted font-bold justify-evenly">
                <FontAwesomeIcon icon={faHouse} />
                <h3>123 disponibles</h3>
                {/* Bouton cliquable avec icône */}
                <button className=" bg-muted text-black font-semibold px-4 py-2 rounded-lg hover:white hover:text-white transition-all">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="m-1">
                <Image
                  alt="Photo de villas avec piscine"
                  src="/img/villa01.webp"
                  width={700}
                  height={475}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carte de type "Hotels" */}
        <div className="flex flex-wrap justify-center">
          <div className="m-1">
            <div className=" w-64 h-64 p-1 rounded-lg">
              <h3 className="text-center text-black font-bold">Hôtels</h3>

              {/* Alignement horizontal de l'icône et du texte */}
              <div className="flex items-center gap-2 mt-1 text-muted font-bold justify-evenly">
                <FontAwesomeIcon icon={faHouse} />
                <h3>264 disponibles</h3>
                {/* Bouton cliquable avec icône */}
                <button className=" bg-muted text-black font-semibold px-4 py-2 rounded-lg hover:white hover:text-white transition-all">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="m-1">
                <Image
                  alt="Mountains"
                  src="/img/hotel01.webp"
                  width={700}
                  height={475}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carte de type "Appartements" */}
        <div className="flex flex-wrap justify-center">
          <div className="m-2">
            <div className=" w-64 h-64 p-1 rounded-lg">
              <h3 className="text-center text-black font-bold">Appartements</h3>

              {/* Alignement horizontal de l'icône et du texte */}
              <div className="flex items-center gap-2 mt-1 text-muted font-bold justify-evenly">
                <FontAwesomeIcon icon={faHouse} />
                <h3>450 disponibles</h3>
                {/* Bouton cliquable avec icône */}
                <button className=" bg-muted text-black font-semibold px-4 py-2 rounded-lg hover:white hover:text-white transition-all">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="m-1">
                <Image
                  alt="Appartements vue sur mer"
                  src="/img/appartement01.jpg"
                  width={700}
                  height={475}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carte de type "Cottages" */}
        <div className="flex flex-wrap justify-center">
          <div className="m-2">
            <div className=" w-64 h-64 p-1 rounded-lg">
              <h3 className="text-center text-black font-bold">Cottages</h3>
              {/* Alignement horizontal de l'icône et du texte */}
              <div className="flex items-center gap-2 mt-1 text-muted font-bold justify-evenly">
                <FontAwesomeIcon icon={faHouse} />
                <h3>83 disponibles</h3>
                {/* Bouton cliquable avec icône */}
                <button className=" bg-muted text-black font-semibold px-4 py-2 rounded-lg hover:white hover:text-white transition-all">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="m-1">
                <Image
                  alt="Maisons cottage dans les bois"
                  src="/img/cottage01.jpg"
                  width={700}
                  height={475}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
