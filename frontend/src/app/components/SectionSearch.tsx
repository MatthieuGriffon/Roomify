"use client"
import { useState } from "react";

export function SectionSearch() {
  const [roomCount, setRoomCount] = useState("");
  const [personCount, setPersonCount] = useState("");

  return (
    <>
      <div className="absolute flex-colum translate-y-[9.8rem] content-evenly flex-wrap m-1 h-auto w-auto bg-white p-2 w-[21rem] rounded-xl shadow-lg z-10">
        <div className="flex-col text-sm">
          <label>
            <span className="">Lieu</span>
          </label>
          <input
            type="text"
            placeholder="Où allez-vous ?"
            className="w-full p-2 border-2 border-gray-200 rounded-lg"
          />
          <label>
            <span className="">Arrivée</span>
            <input
              type="date"
              className="w-full p-2 border-2 border-gray-200 rounded-lg"
            />
          </label>
          <label>
            <span className="">Départ</span>
            <input
              type="date"
              className="w-full p-2 border-2 border-gray-200 rounded-lg"
            />
          </label>
          <div className="grid grid-cols-1 gap-1 tablet:grid-cols-2">
            {/* Sélection du Nombre de Chambres */}
            <label className="block">
              <span className="text-sm font-bold text-gray-700">
                Nombre de chambres
              </span>
              <select
                className="
            w-full p-3 border-2 border-gray-200 rounded-lg 
            text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          "
                value={roomCount}
                onChange={(e) => setRoomCount(e.target.value)}
              >
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                <option value="1">1 chambre</option>
                <option value="2">2 chambres</option>
                <option value="3">3 chambres</option>
                <option value="suite">Hotel-Suite</option>
                <option value="villa">Villa</option>
                <option value="cottages">Cottages</option>
              </select>
            </label>

            {/* Sélection du Nombre de Personnes */}
            <label className="block">
              <span className="text-sm font-bold text-gray-700">
                Nombre de personnes
              </span>
              <select
                className="
            w-full p-3 border-2 border-gray-200 rounded-lg 
            text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          "
                value={personCount}
                onChange={(e) => setPersonCount(e.target.value)}
              >
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="5">5 personnes et plus</option>
              </select>
            </label>
          </div>
          <div className="flex justify-center mt-5">
            <button className="w-full p-3 bg-secondary text-white rounded-lg hover:bg-muted">
              Rechercher
            </button>
            </div>
        </div>
      </div>
    </>
  );
}
