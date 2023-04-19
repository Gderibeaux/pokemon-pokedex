import React, { Component } from "react";
import "./SinglePoke.css";



  class SinglePoke extends Component {
    
    constructor() {
      super();
      this.state = {
        single: "",
        error: "",
      };
    }
    
    componentDidMount() {
      fetch(`https://pokemon-origins.gitlab.io/api/pokemons/EN/${this.props.id}`)
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      })
      .then((data) => {
        this.setState({ individual: data });
      })
    }

    render () {
       let whatToRender;
       if(this.state.single){
        whatToRender = 
          <div
          className="backdrop"
          >
          <div className="information">
            <h3>{this.state.single.name}</h3>
          </div>
        </div>
      } else if (this.state.error) {
        whatToRender = <p className="Error">{this.state.error}</p>
      } else {
        whatToRender = <p>Loading...</p>
      }

      return(
        <>
        {whatToRender}
        </>
      )
    }
}

export default SinglePoke;
