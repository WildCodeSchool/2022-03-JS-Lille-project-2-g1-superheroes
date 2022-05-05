import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
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
          <Link to="/">
            <img
              className="logo"
              src={dataUnivers[univers].logo}
              alt={univers}
            />
          </Link>
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
              if (choiceRace === "false") {
                return (
                  hero.powerstats.strength >= valueStrengh &&
                  hero.powerstats.speed >= valueSpeed &&
                  hero.powerstats.power >= valuePower &&
                  hero.appearance.race
                );
              }
              if (choiceRace === false) {
                return (
                  hero.powerstats.strength >= valueStrengh &&
                  hero.powerstats.speed >= valueSpeed &&
                  hero.powerstats.power >= valuePower &&
                  hero.appearance.race
                );
              }

              return (
                hero.powerstats.strength >= valueStrengh &&
                hero.powerstats.speed >= valueSpeed &&
                hero.powerstats.power >= valuePower &&
                hero.appearance.race === choiceRace
              );
            })

            .slice(0, 24)
            .map((hero) => {
              return <Card key={hero.id} data={hero} />;
            })}
        </section>
      </div>
    </SUniver>
  );
}
