import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LegalNotice from "./components/LegalNotice/LegalNotice";
import Contact from "./components/Contact/Contact";
import Marvel from "./components/Marvel";
import Starwars from "./components/Starwars";
import Manga from "./components/Manga";
import Dccomics from "./components/Dccomics";
import Autresheros from "./components/Autresheros";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/starwars" element={<Starwars />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/dccomics" element={<Dccomics />} />
        <Route path="/autresheros" element={<Autresheros />} />

        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
