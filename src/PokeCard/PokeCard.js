// import React, {useState} from "react";
// import "./PokeCard.css"
// import {Link} from "react-router-dom"

// const PokeCard = ({ name, img, id }) => {
//   const [caught, setCaught] = useState(false);


//   const handleCaught = () => {
//     // event.preventDefault()
//     setCaught(!caught)
//   }

//   return (
//     <div className="pokeCard">
//     <Link to={`/pokemon-pokedex/${id}`}>
//       <h3>{name}</h3>
//       <img src={img} alt={name} />
//     </Link>
//           <button onClick={handleCaught}>
//         {caught ? "Need" : "Caught"}
//       </button>
//     </div>
//   )
// }

// export default PokeCard;

import React, { useState, useEffect } from "react";
import "./PokeCard.css";
import { Link } from "react-router-dom";

const PokeCard = ({ name, img, id }) => {
  const [caught, setCaught] = useState(false);

  useEffect(() => {
    const isCaught = localStorage.getItem(`caught-${id}`);
    if (isCaught === "true") {
      setCaught(true);
    }
  }, [id]);

  const handleCaught = () => {
    setCaught(!caught);
    localStorage.setItem(`caught-${id}`, !caught);
  };

  return (
    <div className="pokeCard">
      <Link to={`/pokemon-pokedex/${id}`}>
        <h3>{name}</h3>
        <img src={img} alt={name} />
      </Link>
      <button onClick={handleCaught}>{caught ? "Caught" : "Need"}</button>
    </div>
  );
};

export default PokeCard;