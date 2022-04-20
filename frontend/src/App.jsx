import { Routes, Route } from "react-router-dom";
import Card from "./components/Cards";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import LegalNotice from "./components/LegalNotice";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Card />

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
