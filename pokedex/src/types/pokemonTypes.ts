export interface Pokemon {
    id: number;
    name: string;
    types: PokemonType[];
    height: number;
    weight: number;
    abilities: Ability[];
    sprites: {
      front_default: string;
    };
  }
  
  export interface PokemonType {
    slot: number;
    type: {
      name: string;
    };
  }
  
  export interface Ability {
    ability: {
      name: string;
    };
  }
  