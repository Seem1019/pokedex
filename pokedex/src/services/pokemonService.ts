import { Pokemon } from '../types/pokemonTypes';

export const fetchPokemonList = async (offset: number = 0, limit: number = 30): Promise<Pokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  
  const pokemonDetails = await Promise.all(data.results.map(async (pokemon: { name: string }) => {
    const detailsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    return await detailsResponse.json();
  }));

  return pokemonDetails;
};
