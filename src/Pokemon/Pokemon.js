import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./Pokemon.css";

const Pokemon = ({ pokeData, error }) => {
  const pokeCards = pokeData.map((pokemon) => {
    return (
      <PokeCard
        id={pokemon.id}
        key={pokemon.id}
        name={pokemon.name}
        img={pokemon.sprites.front_default}
      />
    );
  });

  return (
    <>
      <h1>PokeList</h1>
      {error && <div className="error">{error}</div>}
      <ul className="poke-list">{pokeCards}</ul>
    </>
  );
};

export default Pokemon;