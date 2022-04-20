import imgJarvis1 from "@assets/jarvis-rond.png";
import imgJarvis2 from "@assets/jarvis-centre.png";
import imgJarvis3 from "@assets/jarvis-jarvis.png";
import imgJarvis4 from "@assets/jarvisFD.jpeg";
import { useState } from "react";
import SJarvis from "./style";
import Modal from "./Modal";
import axios from "axios";

export default function Jarvis() {
    const [active, setActive] = useState("jarvisNav");
    const [popCard, setPopCard] = useState({});
    const toggleJarvis = () => {
    if (active === "jarvisNav") {
      setActive("jarvisNav jarvisActive ");
    } else setActive("jarvisNav");
  };

  const [isOpen, setIsOpen] = useState(false);

  //--------API--------//
  const getQuoteCard = () => {
    axios
    .get("http://localhost:5000/heroes")
    .then(({ data }) => {setPopCard(data[0]);
    });
  };

  const getFinalCard = (e) => {
      getQuoteCard();
  }


  return (
    <SJarvis>
        {<Modal open={isOpen} onClose={()=> setIsOpen(false)}>
            {popCard.name}
        </Modal>}
      <div className="block">
        <img src={imgJarvis1} alt="jarvis1" className="img1" />
        <button type="button" onMouseOver={()=> toggleJarvis(false)}
                            onClick={()=> setIsOpen(true)}>
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
            onBlur={(e) => getFinalCard(e.target.value)}
            placeholder="Votre recherche"
          />
        </div>
      </div>
    </SJarvis>
  );
}
