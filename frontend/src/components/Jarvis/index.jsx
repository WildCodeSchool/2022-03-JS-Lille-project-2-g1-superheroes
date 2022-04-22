import imgJarvis1 from "@assets/jarvis-rond.png";
import imgJarvis2 from "@assets/jarvis-centre.png";
import imgJarvis3 from "@assets/jarvis-jarvis.png";
import imgJarvis4 from "@assets/jarvisFD.jpeg";
import { useState } from "react";
import axios from "axios";
import SJarvis from "./style";
import Modal from "./Modal";

export default function Jarvis() {
  const [active, setActive] = useState("jarvisNav");
  const [popCard, setPopCard] = useState({});
  const [filterValue, setFilterValue] = useState("");

  const toggleJarvis = () => {
    if (active === "jarvisNav") {
      setActive("jarvisNav jarvisActive ");
    } else setActive("jarvisNav");
  };
  const [isOpen, setIsOpen] = useState(false);

  const search = () => {
    axios.get(`http://localhost:5000/heroes`).then(({ data }) => {
      // insert your filter here <3
      const myHeros = data.filter((hero) => {
        return hero.name.includes(filterValue);
      });
      setPopCard(myHeros[0]);
    });
  };

  return (
    <SJarvis>
      {popCard?.name && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {popCard.name}
        </Modal>
      )}
      <div className="block">
        <img src={imgJarvis1} alt="jarvis1" className="img1" />
        <button
          type="button"
          // onFocus à configurer, à enlever en attendant
          onFocus=""
          onMouseOver={() => toggleJarvis(false)}
          onClick={() => {
            setIsOpen(true);
            search();
          }}
        >
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
            value={filterValue}
            type="search"
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
            placeholder="Votre recherche"
          />
        </div>
      </div>
    </SJarvis>
  );
}
