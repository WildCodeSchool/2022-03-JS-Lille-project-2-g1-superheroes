import { Routes, Route } from "react-router-dom";
import SGlobal from "./style";
import Footer from "./components/Footer/Footer";
import LegalNotice from "./components/LegalNotice/LegalNotice";


function App() {
  return (
   
    <SGlobal className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
            <Route path="/legalnotice" element={<LegalNotice />} />
             </Routes>
      <Footer />
    </SGlobal>
  );
}

export default App;
