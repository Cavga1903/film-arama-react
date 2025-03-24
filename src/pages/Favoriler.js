import { useEffect, useState } from "react";

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
      <h2 className="text-2xl font-bold mb-6 text-yellow-600">⭐ Favori Filmlerim</h2>

      {favoriler.length === 0 ? (
        <p>Henüz favori eklenmedi.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favoriler.map((film) => (
            <div
              key={film.imdbID}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={film.Poster}
                alt={film.Title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold">{film.Title}</h3>
                <p className="text-sm text-gray-600">📅 {film.Year}</p>
                <p className="text-sm text-gray-600">⭐ IMDB: {film.imdb}</p>
                <button
                  onClick={() => sil(film.imdbID)}
                  className="mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoriler;