
import React, { Component } from 'react';
import { fetchPokemon } from './apiCalls/apiCalls';
import Pokemon from './Pokemon/Pokemon'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch('https://pokemon-origins.gitlab.io/api/pokemons')
      .then(response => response.json())
      .then(data => {
        console.log('maybe data', data)
        this.setState({ pokemon: data })
      })
      .catch(error => {
        console.error(error.message);
        this.setState({ error: error.message });
      });
  }

  render() {
    const { pokemon, error } = this.state;
    return (
      <div className="App">
        <h1>Pokemon List</h1>
        <Route exact path="/Pokemon-Pokedex/" render={() => <Pokemon pokeData={pokemon} error={error} />}/>
      </div>
    );
  }
}

export default App;

