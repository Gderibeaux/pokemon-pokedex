import React, { Component } from 'react';
import Pokemon from './Pokemon/Pokemon'
import SinglePoke from './SinglePoke/SinglePoke'
import {Route, Switch} from 'react-router-dom'
import Header from './Header/Header'
import { fetchPokemon } from './apiCalls/apiCalls';
import Error from './Error/Error'
import TypeChart from './TypeAdvantage/TypeAdvantage';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      error: "",
    }
  }

  // componentDidMount() {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('maybe data', data)
  //       const results = data.results;
  //       const pokemonPromises = results.map(pokemon => {
  //         return fetch(pokemon.url).then(response => response.json());
  //       });
  //       Promise.all(pokemonPromises)
  //         .then(pokemonData => {
  //           this.setState({ pokemon: pokemonData })
  //         })
  //         .catch(error => {
  //           console.error(error.message);
  //           this.setState({ error: error.message });
  //         });
  //     })
  //     .catch(error => {
  //       console.error(error.message);
  //       this.setState({ error: error.message });
  //     });
  // }
  componentDidMount() {
    fetchPokemon(10)
      .then(pokemonData => {
        this.setState({ pokemon: pokemonData })
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
        <Header />
        <Switch>
          <Route exact path="/Pokemon-Pokedex/" render={() => <Pokemon pokeData={pokemon} error={error} />}/>
          <Route 
            exact path="/Pokemon-Pokedex/:id" 
            render={({match}) => {
              return <SinglePoke id={match.params.id}/>}}
              />
          <Route exact path="/Pokemon-Pokedex/advantages/1" render={()=> <TypeChart />} />
          <Route path="*" render={()=> <Error/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;