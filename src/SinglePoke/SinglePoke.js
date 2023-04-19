import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./SinglePoke.css";

class SinglePoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: null,
      error: "",
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("new data", data);
        this.setState({ single: data });
      })
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      });
  }

  render() {
    const { single, error } = this.state;
    let whatToRender;
    if (single) {
      whatToRender = (
        <div className="backdrop">
          <div className="information">
            <h3>{single.name}</h3>
            <img
              src={single.sprites.front_default}
              alt={single.name}
              width="150"
              height="150"
            />
            <p>
              Height: {single.height} | Weight: {single.weight}
            </p>
            <p>Type:</p>
            <ul>
              {single.types.map((type) => (
                <li key={type.slot}>{type.type.name}</li>
              ))}
            </ul>
            <Link to="/pokemon-pokedex/">
                <button>Go Home</button>
            </Link>
          </div>
        </div>
      );
    } else if (error) {
      whatToRender = <p className="Error">{error}</p>;
    } else {
      whatToRender = <p>Loading...</p>;
    }

    return <>{whatToRender}</>;
  }
}

export default SinglePoke;