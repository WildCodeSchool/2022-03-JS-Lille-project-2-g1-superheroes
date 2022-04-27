import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SGlobal from "./style";
import Footer from "./components/Footer/Footer";
import LegalNotice from "./components/LegalNotice/LegalNotice";
import Contact from "./components/Contact/Contact";
import Univers from "@components/Univers";

function App() {
  return (
    <SGlobal className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:univers" element={<Univers />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
