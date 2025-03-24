import { Routes, Route, Link } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Favoriler from "./pages/Favoriler";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">🎬 Film Arama</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Anasayfa</Link>
            <Link to="/favoriler" className="text-blue-500 hover:underline">Favorilerim</Link>
          </div>
        </div>

        {/* Sayfa içeriği */}
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/favoriler" element={<Favoriler />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;