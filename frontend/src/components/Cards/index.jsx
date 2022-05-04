import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SCard from "./Style";

function Card({
  data: { name, id, images, powerstats, appearance, biography },
}) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(images.sm);
  }, []);

  return (
    <SCard src={src}>
      <div className="card">
        <div className="header-card">
          <p className="id">{id}</p>
          <p className="name">{name}</p>
        </div>
        <div className="capacity">
          <div className="namePower">
            <ul>
              <li className="namepower">strengh</li>
              <li className="namepower">power</li>
              <li className="namepower">speed</li>
            </ul>
          </div>
          <div className="point">
            <ul>
              <li className="pointIntelligence">{powerstats.intelligence}</li>
              <li className="pointPower">{powerstats.power}</li>
              <li className="pointSpeed">{powerstats.speed}</li>
            </ul>
          </div>
        </div>
        <div className="identity">
          <p className="nameIdentity"> Full Name: {biography.fullName} </p>
          <p className="nameIdentity">Race: {appearance.race}</p>
        </div>
      </div>
    </SCard>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.shape().isRequired,
    powerstats: PropTypes.shape().isRequired,
    appearance: PropTypes.shape().isRequired,
    biography: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Card;
