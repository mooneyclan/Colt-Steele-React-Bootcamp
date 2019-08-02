import React, { useEffect } from "react";
import styled from 'styled-components';
import { Pokecard } from './Pokecard';

const pokedata = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

export function Pokedex(props) {
  const renderPokecard = obj => {
    let imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${obj.id}.png`;

    return <Pokecard 
      id={obj.id}
      name={obj.name}
      type={obj.type}
      xp={obj.base_experience}
      image={imageURL}
    />;
  };

  return (
    <div className="pokedex"> 
       {pokedata.map(renderPokecard)}
    </div>
  );
}