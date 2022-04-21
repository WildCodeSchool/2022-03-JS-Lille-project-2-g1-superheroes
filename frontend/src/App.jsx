import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Cards";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer/Footer";
import LegalNotice from "./components/LegalNotice/LegalNotice";
import Contact from "./components/Contact/Contact";

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/heroes").then(({ data }) => {
      setHeroes(data.filter((d, idx) => idx < 50));
    });
  }, []);

  return (
    <div className="App">
      <div className="storageCard">
        {heroes.map((hero) => {
          return <Card {...hero} />;
        })}
      </div>

      <Routes>
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Carousel />
      <Footer />
    </div>
  );
}
export default App;
