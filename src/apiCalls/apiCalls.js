function fetchPokemon(){
    return fetch ('https://pokemon-origins.herokuapp.com/api/v1/pokemons/').then(
        (response) => {
            if(response.ok){
                return response.json();
            } else {
                throw new Error(`${response.status} ${response.statusText}`)
            }
        }
    )
}

function fetchPokemonDetails(pokemonId) {
    return fetch(`https://pokemon-origins.gitlab.io/api/pokemons/EN/${pokemonId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch Pokemon with id ${pokemonId}`);
        }
        return response.json();
      });
  }
export {fetchPokemon, fetchPokemonDetails}