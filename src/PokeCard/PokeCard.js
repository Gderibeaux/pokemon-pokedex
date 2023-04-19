import React from "react";
import "./PokeCard.css";
import {Link} from "react-router-dom"

const PokeCard = ({ name, img, id }) => {
    return (
      <Link className="pokeCard">
        <h3>{name}</h3>
        <img src={img} alt={name} />
      </Link>
    );
  };

export default PokeCard;