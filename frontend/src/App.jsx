import { Routes, Route } from "react-router-dom";
import { StatsContext } from "@services/contexts/stats";
import HomePage from "./components/HomePage";
import SGlobal from "./style";
import LegalNotice from "./components/LegalNotice";
import Univers from "./components/Univers";
import Footer from "./components/Footer";

function App() {
  return (
    <StatsContext>
      <SGlobal className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:univers" element={<Univers />} />
          <Route path="/legalnotice" element={<LegalNotice />} />
        </Routes>
        <Footer />
      </SGlobal>
    </StatsContext>
  );
}
export default App;
