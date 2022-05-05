import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import statsContext from "../../services/contexts/stats";
import SFiltre from "./style";
import dataUnivers from "../UniversData/index";

function Filtre() {
  const { univers } = useParams();
  const [heroes, setHeroes] = useState([]);
  const {
    valueStrengh,
    setValueStrengh,
    valuePower,
    setValuePower,
    valueSpeed,
    setValueSpeed,
    choiceRace,
    setChoiceRace,
    races,
    setRaces,
  } = useContext(statsContext);

  // console.log(valueStrengh);

  useEffect(() => {
    axios.get("http://localhost:5000/heroes").then(({ data }) => {
      setHeroes(
        data.filter((hero) => {
          const publisher = hero.biography.publisher || "";
          const categA = [
            "Marvel Comics",
            "DC Comics",
            "George Lucas",
            "Shueisha",
          ];
          if (dataUnivers[univers].categ === "autre") {
            return !categA.some((cat) => {
              return publisher === cat;
            });
          }
          return (
            publisher === dataUnivers[univers].categ ||
            publisher.toLowerCase().includes(dataUnivers[univers].categ)
          );
        })
      );
    });
  }, []);

  useEffect(() => {
    setRaces([...new Set(heroes.map((hero) => hero?.appearance?.race))]);
    // console.log(heroes.map((hero) => hero?.appearance?.race));
  }, [heroes]);

  return (
    <SFiltre
      valueStrengh={valueStrengh}
      valuePower={valuePower}
      valueSpeed={valueSpeed}
    >
      <div>
        <label htmlFor="strengh" className="strengh">
          Strength
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={valueStrengh}
            onChange={(e) => {
              setValueStrengh(e.target.value);
            }}
          />
        </label>

        <label htmlFor="power" className="power">
          Power
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={valuePower}
            onChange={(e) => {
              setValuePower(e.target.value);
            }}
          />
        </label>

        <label htmlFor="speed" className="speed">
          Speed
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={valueSpeed}
            onChange={(e) => {
              setValueSpeed(e.target.value);
            }}
          />
        </label>

        <label htmlFor="Race" className="race">
          Race
          <select
            name="Race"
            label="text"
            value={choiceRace}
            type="select"
            onChange={(e) => {
              setChoiceRace(e.target.value);
            }}
          >
            <option value={false}> Choix de la race</option>
            {races.map((curr) => {
              return (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              );
            })}{" "}
            ;
          </select>
        </label>
      </div>
    </SFiltre>
  );
}

export default Filtre;
