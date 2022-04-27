import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../Carousel";
import SUniver from "./style";
import Card from "../Cards";
import dataUnivers from "../UniversData/index";

export default function Univers() {
  const { univers } = useParams();
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/heroes").then(({ data }) => {
      setHeroes(data);
    });
  }, []);

  return (
    <SUniver bg={dataUnivers[univers].bg}>
      <div className="header_container">
        <div>
          <img className="logo" src={dataUnivers[univers].logo} alt={univers} />
          <p className="details">{dataUnivers[univers].details}</p>
        </div>
        <img className="image" src={dataUnivers[univers].image} alt={univers} />
      </div>

      <section className="carousel_container">
        <Carousel />
      </section>
      <div className="main_container">
        <section className="filtre">FILTRE</section>
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
            .map((hero) => {
              return <Card data={hero} />;
            })}
        </section>
      </div>
    </SUniver>
  );
}
