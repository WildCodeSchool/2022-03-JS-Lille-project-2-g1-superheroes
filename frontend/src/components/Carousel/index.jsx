import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dataUnivers from "@components/UniversData";
import SCarousel from "./style";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState(0);
  const { univers } = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/heroes").then(({ data }) => {
      setImages(data);
    });
  }, []);
  const prevSlide = () => {
    // déterminer si position est égal à 0 et si l'utilisateur a atteint le début du carrousel.
    const resetToVeryBack = position === 0;

    const index = resetToVeryBack ? images.length - 1 : position - 1;

    // assigner l'index logique à l'index de l'image courante qui sera utilisé dans la méthode de rendu
    setPosition(index);
  };

  const nextSlide = () => {
    // vérifier si nous devons recommencer à partir du premier index
    const resetIndex = position === images.length - 1;

    const index = resetIndex ? 0 : position + 1;

    // assigner l'index logique à l'index de l'image courante qui sera utilisé dans la méthode de rendu
    setPosition(index);
  };

  // créer un nouveau tableau avec 4 éléments à partir des images sources
  const activeImages = images.slice(position, position + 4);

  // vérifier la longueur du nouveau tableau (elle est inférieure à 4 lorsque l'index est à la fin du tableau des sources d'images)
  const imageSourcesToDisplay =
    activeImages.length < 4
      ? // si la longueur de imageSourcesToDisplay est inférieure à 4 images, ajoutez les images manquantes depuis le début du tableau original.
        [...activeImages, ...images.slice(0, 4 - activeImages.length)]
      : activeImages;

  return (
    <SCarousel bg={dataUnivers[univers].bg}>
      <div className="carousel-container">
        <button type="button" onClick={prevSlide}>
          ‹
        </button>
        {imageSourcesToDisplay
          .filter(({ biography }) => {
            const { publisher } = biography;
            return publisher === dataUnivers[univers].categ;
          })
          .map((image) => {
            return <img src={image.images.lg} alt="" />;
          })}
        <button type="button" onClick={nextSlide}>
          ›
        </button>
      </div>
    </SCarousel>
  );
}
