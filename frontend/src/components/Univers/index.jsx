import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import statsContext from "../../services/contexts/stats";
import Filtre from "../Filtre";
import Carousel from "../Carousel";
import SUniver from "./style";
import Card from "../Cards";
import dataUnivers from "../UniversData/index";

export default function Univers() {
  const { univers } = useParams();
  const [heroes, setHeroes] = useState([]);
  const { valueStrengh, valuePower, valueSpeed, choiceRace } =
    useContext(statsContext);

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
          <section className="filtreMobile">
            <Filtre />
          </section>
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
              if (choiceRace === false) {
                return hero.appearance.race;
              }
              return (
                (hero.powerstats.strength >= valueStrengh &&
                  hero.powerstats.speed >= valueSpeed &&
                  hero.powerstats.power >= valuePower &&
                  hero.appearance.race === choiceRace) ||
                (hero.powerstats.strength >= valueStrengh &&
                  hero.powerstats.speed >= valueSpeed &&
                  hero.powerstats.power >= valuePower)
              );
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
