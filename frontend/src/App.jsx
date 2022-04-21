import Card from "@components/Cards/Card";
import Logo from "@components/Logo";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer/Footer";
import LegalNotice from "./components/LegalNotice/LegalNotice";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Card />
      <Logo />
      <Routes>
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Carousel />
    </div>
  );
}

export default App;
