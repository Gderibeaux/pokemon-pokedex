import React from 'react'
import "./TypesAdvantage.css"

const types = [
    { name: "Normal", effectiveness: ["None"], weaknesses: ["Fighting"]},
    { name: "Fire", effectiveness: ["Grass", "Ice", "Bug", "Steel"], weaknesses: ["Ground", "Water", "Rock"]},
    { name: "Water", effectiveness: ["Fire", "Ground", "Rock"], weaknesses: ["Grass", "Electric"]},
    { name: "Electric", effectiveness: ["Water", "Flying"], weaknesses: ["Ground"]},
    { name: "Grass", effectiveness: ["Water", "Ground", "Rock", "Dragon"], weaknesses: ["Flying", "Poison", "Bug", "Fire", "Ice"]},
    { name: "Ice", effectiveness: ["Grass", "Ground", "Flying", "Dragon"], weaknesses: ["Fighting", "Rock", "Steel", "Fire"]},
    { name: "Fighting", effectiveness: ["Normal", "Ice", "Rock", "Dark", "Steel"], weaknesses: ["Flying", "Psychic", "Fairy"]},
    { name: "Poison", effectiveness: ["Grass", "Fairy"], weaknesses: ["Ground", "Psychic"]},
    { name: "Ground", effectiveness: ["Fire", "Electric", "Poison", "Rock", "Steel"], weaknesses: ["Water", "Grass", "Ice"]},
    { name: "Flying", effectiveness: ["Grass", "Fighting", "Bug"], weaknesses: ["Rock", "Electric", "Ice"]},
    { name: "Psychic", effectiveness: ["Fighting", "Poison"], weaknesses: ["Bug", "Ghost", "Dark"]},
    { name: "Bug", effectiveness: ["Grass", "Psychic", "Dark"], weaknesses: ["Flying", "Rock", "Fire"]},
    { name: "Rock", effectiveness: ["Fire", "Ice", "Flying", "Bug"], weaknesses: ["Fighting", "Ground", "Water", "Grass", "Steel"]},
    { name: "Ghost", effectiveness: ["Psychic", "Ghost"], weaknesses: ["Dark", "Ghost"]},
    { name: "Dragon", effectiveness: ["Dragon"], weaknesses: ["Ice", "Dragon", "Fairy"]},
    { name: "Dark", effectiveness: ["Psychic", "Ghost"], weaknesses: ["Fighting", "Bug", "Fairy"]},
    { name: "Steel", effectiveness: ["Ice", "Rock", "Fairy"], weaknesses: ["Fire", "Fighting", "Ground"]},
    { name: "Fairy", effectiveness: ["Fighting", "Dragon", "Dark"], weaknesses: ["Poison", "Steel"]},
  ];
  
  function TypeChart() {
    return (
      <table className="custom-table">
        <thead>
          <tr>
            <th>Pokemon Type</th>
            <th>Strengths</th>
            <th>Vulnerabilities</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr key={type.name}>
              <td>{type.name}</td>
              <td>{type.effectiveness.join(", ")}</td>
              <td>{type.weaknesses.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default TypeChart;