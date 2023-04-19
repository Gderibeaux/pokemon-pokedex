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
    fetch('https://pokemon-origins.gitlab.io/api/pokemons')
      .then(response => response.json())
      .then(data => {
        console.log('maybe data', data)
        // Filter the data to only include the first 100 Pokemon
        const filteredData = data.slice(0, 100);
        this.setState({ pokemon: filteredData })
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

