import imgJarvis1 from "@assets/jarvis-rond.png";
import imgJarvis2 from "@assets/jarvis-centre.png";
import imgJarvis3 from "@assets/jarvis-jarvis.png";
import imgJarvis4 from "@assets/jarvisFD.jpeg";
import { useState } from "react";
import SJarvis from "./style";

export default function Jarvis() {
  const [active, setActive] = useState("jarvisNav");
  const toggleJarvis = () => {
    if (active === "jarvisNav") {
      setActive("jarvisNav jarvisActive ");
    } else setActive("jarvisNav");
  };

  const [popcard, setPopCard] = useState("");

  return (
    <SJarvis>
      <div className="block">
        <img src={imgJarvis1} alt="jarvis1" className="img1" />
        <button type="button" onClick={toggleJarvis}>
          <img
            src={imgJarvis2}
            alt="toggleJarvis"
            type="submite"
            className="img2"
          />
        </button>
        <div
          className={active}
          style={{ backgroundImage: `url(${imgJarvis4})` }}
        >
          <img src={imgJarvis3} alt="jarvis3" className="img3" />
          <input
            name="myinput"
            type="text"
            onChange={(e) => setPopCard(e.target.value)}
            value={popcard}
            placeholder="Votre recherche"
          />
        </div>
      </div>
    </SJarvis>
  );
}
