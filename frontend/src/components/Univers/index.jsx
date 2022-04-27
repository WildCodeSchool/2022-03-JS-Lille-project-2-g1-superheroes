import { useParams } from "react-router-dom";
import Carousel from "../Carousel";
import SUniver from "./style";
import data from "../UniversData/index";

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

      <section className="carousel_container">
        <Carousel />
      </section>
    </SUniver>
  );
}
