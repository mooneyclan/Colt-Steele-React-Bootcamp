import React from "react";

export function Pokecard(props) { 
  return (
    <div className="pokecard">
      <h1>{props.name}</h1>
      <img src={props.image} alt="Pokemon"></img>
      <h2>Type: {props.type}</h2>
      <h2>EXP: {props.xp}</h2>
    </div>
  );
}