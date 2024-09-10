import React from 'react';
import PokemonList from './containers/PokemonList';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonList />
    </div>
  );
};

export default App;

