import { createContext, useState } from "react";
import PropTypes from "prop-types";

const statsContext = createContext();
export default statsContext;

export function StatsContext({ children }) {
  const [valueStrengh, setValueStrengh] = useState(0);
  const [valuePower, setValuePower] = useState(0);
  const [valueSpeed, setValueSpeed] = useState(0);
  const [choiceRace, setChoiceRace] = useState(false);
  const [races, setRaces] = useState([]);
  return (
    <statsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
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
      }}
    >
      {children}
    </statsContext.Provider>
  );
}

StatsContext.propTypes = {
  children: PropTypes.node.isRequired,
};
