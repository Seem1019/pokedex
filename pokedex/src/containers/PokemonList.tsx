import React, { useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { usePokemonData } from '../hooks/usePokemonData';

const PokemonList: React.FC = () => {
  const { pokemonList, loading, error, setPage } = usePokemonData();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setPage]);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PokemonList;
