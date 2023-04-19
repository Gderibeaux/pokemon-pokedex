import React, { Component } from 'react';
import Pokemon from './Pokemon/Pokemon'
import SinglePoke from './SinglePoke/SinglePoke'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      error: "",
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => {
        console.log('maybe data', data)
        const results = data.results;
        const pokemonPromises = results.map(pokemon => {
          return fetch(pokemon.url).then(response => response.json());
        });
        Promise.all(pokemonPromises)
          .then(pokemonData => {
            this.setState({ pokemon: pokemonData })
          })
          .catch(error => {
            console.error(error.message);
            this.setState({ error: error.message });
          });
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
        <Switch>
        <Route exact path="/Pokemon-Pokedex/" render={() => <Pokemon pokeData={pokemon} error={error} />}/>
        <Route 
          exact path="/Pokemon-Pokedex/:id" 
          render={({match}) => {
            return <SinglePoke id={match.params.id}/>}}
            />
        </Switch>
      </div>
    );
  }
}

export default App;