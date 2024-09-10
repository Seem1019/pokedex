import { useState, useEffect } from 'react';
import { fetchPokemonList } from '../services/pokemonService';
import { Pokemon } from '../types/pokemonTypes';

export const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      try {
        const newPokemon = await fetchPokemonList(page * 30);
        setPokemonList(prev => [...prev, ...newPokemon]);
      } catch (err) {
        setError('Error to load the Pokemon info.');
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [page]);

  return { pokemonList, loading, error, setPage };
};
