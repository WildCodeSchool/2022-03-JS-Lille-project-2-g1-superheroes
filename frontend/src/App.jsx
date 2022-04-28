import { Routes, Route } from "react-router-dom";
import HomePage from "@components/HomePage";
import SGlobal from "./style";
import LegalNotice from "./components/LegalNotice/LegalNotice";
import Univers from "./components/Univers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <SGlobal className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:univers" element={<Univers />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
