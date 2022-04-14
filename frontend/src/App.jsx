
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LegalNotice from "./components/LegalNotice/LegalNotice";
import Contact from "./components/Contact/Contact";
import Home from "@pages/Home";
import Carousel from "@components/Carousel";

function App() {
  return (
    <div className="App">
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
