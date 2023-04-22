import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import "./SinglePoke.css";
import { fetchPokemonById } from '../apiCalls/apiCalls';

class SinglePoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: null,
      error: "",
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.props;
      const data = await fetchPokemonById(id);
      this.setState({ single: data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { single, error } = this.state;
    const data = {
      labels: [
        "HP",
        "Attack",
        "Defense",
        "Sp. Attack",
        "Sp. Defense",
        "Speed",
      ],
      datasets: [
        {
          label: single && single.name,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "#ffffff",
          pointBackgroundColor: "rgba(255, 99, 132, 1)",
          pointBorderColor: "#ffffff",
          pointHoverBackgroundColor: "#ffffff",
          pointHoverBorderColor: "rgba(255, 99, 132, 1)",
          data: single
            ? [
                single.stats[0].base_stat,
                single.stats[1].base_stat,
                single.stats[2].base_stat,
                single.stats[3].base_stat,
                single.stats[4].base_stat,
                single.stats[5].base_stat,
              ]
            : [],
        },
      ],
    };
    const options = {
      scales: {
        r: {
          ticks: { beginAtZero: true },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    let whatToRender;
    if (single) {
      whatToRender = (
        <div className="backdrop">
          <div className="information">
            <h1>{single.name.toUpperCase()}</h1>
            <img className='single-img'
              src={single.sprites.front_default}
              alt={single.name}

            />
            <p>
              Height: {single.height}m | Weight: {single.weight}lbs
            </p>
            <p>Type:</p>
            <ul>
              {single.types.map((type) => (
                <li key={type.slot}>{type.type.name}</li>
              ))}
            </ul>
            <p>Abilities:</p>
            <ul>
              {single.abilities.map((ability) => (
                <li key={ability.slot}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="chart-container" >
          <Radar data={data} options={options} />
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