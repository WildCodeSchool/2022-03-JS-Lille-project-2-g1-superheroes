import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CurrentStatsContextP = createContext();

export function CurrentStatsContext({ children }) {
  const [valueStrengh, setValueStrengh] = useState(0);
  const [valuePower, setValuePower] = useState(0);
  const [valueSpeed, setValueSpeed] = useState(0);
  return (
    <CurrentStatsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        valueStrengh,
        setValueStrengh,
        valuePower,
        setValuePower,
        valueSpeed,
        setValueSpeed,
      }}
    >
      {children}
    </CurrentStatsContext.Provider>
  );
}

CurrentStatsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CurrentStatsContextP;
