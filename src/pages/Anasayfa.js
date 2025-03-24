import { useState } from "react";
import axios from "axios";

function Anasayfa() {
  const [filmAdi, setFilmAdi] = useState("");
  const [sonuclar, setSonuclar] = useState([]);

  const ara = async () => {
    if (filmAdi.trim() === "") return;

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${filmAdi}`;

    try {
      const res = await axios.get(url);
      if (res.data.Search) {
        setSonuclar(res.data.Search);
      } else {
        setSonuclar([]);
      }
    } catch (err) {
      console.log("Hata:", err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={filmAdi}
          onChange={(e) => setFilmAdi(e.target.value)}
          placeholder="Film adı gir"
          className="border px-3 py-1 rounded"
        />
        <button
          onClick={ara}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Ara
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sonuclar.map((film) => (
          <div
            key={film.imdbID}
            className="bg-white shadow rounded overflow-hidden"
          >
            <img
              src={film.Poster}
              alt={film.Title}
              className="w-full h-72 object-cover"
            />
            <div className="p-3 space-y-1">
              <h3 className="font-bold text-lg">{film.Title}</h3>
              <p>📅 {film.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anasayfa;