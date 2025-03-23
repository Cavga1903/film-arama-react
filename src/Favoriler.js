import React, { useEffect, useState } from "react";

function Favoriler() {
  const [favoriler, setFavoriler] = useState([]);

  useEffect(() => {
    const veriler = localStorage.getItem("favoriler");
    if (veriler) {
      setFavoriler(JSON.parse(veriler));
    }
  }, []);

  const sil = (imdbID) => {
    const yeniFavoriler = favoriler.filter((film) => film.imdbID !== imdbID);
    setFavoriler(yeniFavoriler);
    localStorage.setItem("favoriler", JSON.stringify(yeniFavoriler));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">⭐ Favori Filmlerim</h2>
      {favoriler.length === 0 ? (
        <p>Henüz favori eklenmedi.</p>
      ) : (
        <ul className="space-y-2">
          {favoriler.map((film) => (
            <li
              key={film.imdbID}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                {film.Title} ({film.Year}) - IMDB: {film.imdb}
              </div>
              <button
                onClick={() => sil(film.imdbID)}
                className="text-red-600 hover:underline"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoriler;