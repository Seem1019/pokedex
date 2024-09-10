import React from 'react';
import { Pokemon } from '../types/pokemonTypes';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    const getPokemonTypeClass = () => {
        return pokemon.types.map(type => type.type.name).join(' ');
      };
  return (
    <div className={`pokemon-card ${getPokemonTypeClass()}`}>
      <img src={pokemon.sprites.front_default || 'placeholder.png'} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <div className="types">
        {pokemon.types.map((type) => (
          <span key={type.type.name} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
