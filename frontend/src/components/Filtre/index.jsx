import { useState, useEffect } from "react";
import axios from "axios";
import SFiltre from "./style";

function Filtre() {
  const [valueStrengh, setValueStrengh] = useState(0);
  const [valuePower, setValuePower] = useState(0);
  const [valueSpeed, setValueSpeed] = useState(0);
  const [currRace, setCurrRace] = useState([]);
  const [choiceRace, setChoiceRace] = useState(null);
  // console.log(valueStrengh);

  useEffect(() => {
    axios.get("http://localhost:5000/heroes").then(({ data }) => {
      setCurrRace(data);
    });
  }, []);

  return (
    <SFiltre valueStrengh={valueStrengh}>
      <div>
        <label htmlFor="strengh">
          strengh
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

        <label htmlFor="power">
          power
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

        <label htmlFor="speed">
          speed
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

        <label htmlFor="Race">
          {" "}
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
            {" "}
            {currRace.map((curr) => {
              return (
                <option key={curr} value={curr}>
                  {curr.appearance.race}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </SFiltre>
  );
}

export default Filtre;
