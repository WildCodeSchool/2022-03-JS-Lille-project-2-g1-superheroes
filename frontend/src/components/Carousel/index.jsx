import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dataUnivers from "../UniversData";
import SCarousel from "./style";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState(0);
  const { univers } = useParams();
  useEffect(() => {
    axios.get("http://localhost:5000/heroes").then(({ data }) => {
      setImages(
        data.filter(({ biography }) => {
          const { publisher } = biography;
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

          return publisher === dataUnivers[univers].categ;
        })
      );
    });
  }, []);
  const prevSlide = () => {
    if (position === 0) return;
    setPosition(position - 1);
  };
  const nextSlide = () => {
    if (position + 4 >= images.length) return;
    setPosition(position + 1);
  };
  return (
    <SCarousel bg={dataUnivers[univers].bg}>
      <div className="carouselContainer">
        <button type="button" onClick={prevSlide}>
          &lsaquo;
        </button>
        {images
          .filter((toto, idx) => idx >= position && idx < position + 4)
          .map((image) => {
            return (
              <img key={image.images.lg} src={image.images.lg} alt="carousel" />
            );
          })}
        <button type="button" onClick={nextSlide}>
          &rsaquo;
        </button>
      </div>
    </SCarousel>
  );
}
