function fetchPokemon(limit) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      const pokemonPromises = results.map(pokemon => {
        return fetch(pokemon.url).then(response => response.json());
      });
      return Promise.all(pokemonPromises);
    });
}

 const fetchPokemonById = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
export { fetchPokemon, fetchPokemonById}