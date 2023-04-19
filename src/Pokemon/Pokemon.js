import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./Pokemon.css";

const Pokemon = ({ pokeData, error }) => {
  const pokeCards = pokeData.map((pokemon) => {
    return (
      <PokeCard
        key={pokemon.id}
        // name={`https://pokemon-origins.gitlab.io/api/pokemons/EN/${pokemon.id}/`}
        img={`https://pokemon-origins.gitlab.io/api/images/pokemons/animated/${pokemon.id}.gif`}
      />
    );
  });

  return (
    <>
      <h1>PokeList</h1>
      {error && <div className="error">{error}</div>}
      <ul className="poke-list">{pokeCards}</ul>
    </>
    )
};

export default Pokemon;
