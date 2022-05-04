import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Filtre from "../Filtre";
import Carousel from "../Carousel";
import SUniver from "./style";
import Card from "../Cards";
import dataUnivers from "../UniversData/index";

export default function Univers({ valueStrengh }) {
  const { univers } = useParams();
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/heroes").then(({ data }) => {
      setHeroes(data);
    });
  }, []);

  return (
    <SUniver bg={dataUnivers[univers].bg}>
      <div className="headerContainer">
        <div>
          <img className="logo" src={dataUnivers[univers].logo} alt={univers} />
          <p className="details">{dataUnivers[univers].details}</p>
          <section className="filtreMobile">FILTRE</section>
        </div>
        <img className="image" src={dataUnivers[univers].image} alt={univers} />
      </div>

      <section className="carouselContainer">
        <Carousel />
      </section>
      <div className="mainContainer">
        <section className="filtre">
          <Filtre />
        </section>
        <section className="card">
          {heroes
            .filter((hero) => {
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
            .filter((hero) => {
              return hero.powerstats.strength > valueStrengh;
            })
            .slice(0, 48)
            .map((hero) => {
              return <Card key={hero.id} data={hero} />;
            })}
        </section>
      </div>
    </SUniver>
  );
}
Univers.propTypes = {
  valueStrengh: PropTypes.number.isRequired,
};
