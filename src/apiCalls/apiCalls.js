// function fetchPokemon(){
//     return fetch ('https://pokeapi.co/api/v2/pokemon?limit=10').then(
//         (response) => {
//             if(response.ok){
//                 return response.json();
//             } else {
//                 throw new Error(`${response.status} ${response.statusText}`)
//             }
//         }
//     )
// }

const BASE_URL = 'https://pokeapi.co/api/v2';

 function fetchPokemon(limit) {
  return fetch(`${BASE_URL}/pokemon?limit=${limit}`)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      const pokemonPromises = results.map(pokemon => {
        return fetch(pokemon.url).then(response => response.json());
      });
      return Promise.all(pokemonPromises);
    });
}

// function fetchPokemonDetails(pokemonId) {
//     return fetch(`https://pokemon-origins.gitlab.io/api/pokemons/EN/${pokemonId}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to fetch Pokemon with id ${pokemonId}`);
//         }
//         return response.json();
//       });
//   }

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