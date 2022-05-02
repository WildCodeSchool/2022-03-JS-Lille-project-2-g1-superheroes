import SFiltre from "./style";

function Filtre() {
  return (
    <SFiltre>
      <div>
        <label htmlFor="strengh">
          strengh
          <input type="range" min="10" max="100" step="10" />
        </label>

        <label htmlFor="power">
          power
          <input type="range" min="10" max="100" step="10" />
        </label>

        <label htmlFor="speed">
          speed
          <input type="range" min="10" max="100" step="10" />
        </label>

        <label htmlFor="Race">
          {" "}
          Race
          <select name="Race">
            <option value="Humain"> Humain</option>
            <option value="Massima">Massima</option>
            <option value="Chien">Chien</option>
          </select>
        </label>
      </div>
    </SFiltre>
  );
}

export default Filtre;
