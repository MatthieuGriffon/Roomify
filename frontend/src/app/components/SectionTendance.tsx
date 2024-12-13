"use client";
import { useState } from "react";

export function SectionTendance() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    console.log(`Filtrer par : ${country}`);
    // Ajoutez ici la logique de filtrage
  };

  return (
    <>
      <div className="justify-center text-black w-auto m-2 text-center">
        <h1 className="font-bold text-lg">Hôtels les plus tendances</h1>
        <h2 className="text-xs">
          Découvrez les hôtels les plus tendances du monde pour une expérience
          inoubliable.
        </h2>
      </div>

      <div className="flex justify-center gap-1 mt-4">
        {["France", "Japon", "Italie", "Australie"].map((country) => (
          <button
            key={country}
            onClick={() => handleCountryClick(country)}
            className={`px-2 py-2 rounded-lg font-semibold transition-all text-sm 
              ${
                selectedCountry === country
                  ? "bg-muted text-white"
                  : "bg-gray-200 text-black hover:bg-blue-500 hover:text-white"
              }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Exemple de résultat */}
      {selectedCountry && (
        <div className="mt-4 text-center font-bold text-blue-700">
          Hôtels tendances en {selectedCountry}
        </div>
      )}
    </>
  );
}