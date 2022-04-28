import imgJarvis1 from "@assets/jarvis-rond.png";
import imgJarvis2 from "@assets/jarvis-centre.png";
import imgJarvis3 from "@assets/jarvis-jarvis.png";
import imgJarvis4 from "@assets/jarvisFD.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import SJarvis from "./style";
import Modal from "./Modal";
import Cards from "../Cards";

export default function Jarvis() {
  const [active, setActive] = useState("jarvisNav");
  const [popCard, setPopCard] = useState({});
  const [filterValue, setFilterValue] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // const { name, id, images, powerstats, appearance, biography } = props;

  // Brings up the Jarvis search bar
  const toggleJarvis = () => {
    if (active === "jarvisNav") {
      setActive("jarvisNav jarvisActive ");
    } else setActive("jarvisNav");
  };

  // Single API call with filter linked with the searchBar
  const search = () => {
    axios.get(`http://localhost:5000/heroes`).then(({ data }) => {
      const myHeros = data.filter((hero) => {
        return hero.name.includes(filterValue);
      });
      setPopCard(myHeros[0]);
    });
  };
  // Display the suggestion in the search bar
  const onSearch = (searchTerm) => {
    setFilterValue(searchTerm);
  };

  // API call to display suggestions
  useEffect(() => {
    if (!filterValue) return;
    axios
      .get(`http://localhost:5000/heroes?q=${filterValue}`)
      .then(({ data }) => {
        setResults(data);
      });
  }, [filterValue]);

  return (
    <SJarvis>
      {popCard?.name && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Cards data={popCard} />
        </Modal>
      )}
      <div className="block">
        <img src={imgJarvis1} alt="jarvis1" className="img1" />
        <button
          type="button"
          onMouseOver={() => toggleJarvis(false)}
          onFocus={() => {}}
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
          <section
            className="section-suggestions"
            style={{ backgroundImage: `url(${imgJarvis4})` }}
          >
            <ul>
              {results
                .filter((result) => {
                  const searchTerm = filterValue.toLowerCase();
                  const fullName = result.name.toLowerCase();
                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .map((result) => {
                  return (
                    <button
                      key={result.id}
                      type="button"
                      onClick={() => onSearch(result.name)}
                    >
                      <li>{result.name}</li>
                    </button>
                  );
                })}
            </ul>
          </section>
        </div>
      </div>
    </SJarvis>
  );
}
