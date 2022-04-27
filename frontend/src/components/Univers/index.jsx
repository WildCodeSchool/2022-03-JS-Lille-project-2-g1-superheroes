import SUniver from "./style";
import data from "../UniversData/index";
import { useParams } from "react-router-dom";

export default function Univers() {
  const { univers } = useParams();
  return (
    <SUniver>
      <header>
        <div className="header_container">
          <div>
            <img className="logo" src={data[univers].logo} alt={univers} />
            <p className="details">{data[univers].details}</p>
          </div>
          <img className="image" src={data[univers].image} alt={univers} />
        </div>
      </header>

      <section className="carousel_container">CAROUSEL COMPONENT</section>
      <section className="filtre_container">FILTRE</section>
      <section className="card_container"> CARD</section>
    </SUniver>
  );
}
