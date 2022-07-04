import { Pokemon } from '../components';

export interface PokemonData {
  name: string;
  weight: number;
  awesome: boolean;
  terrifying: boolean;
  abilities: string[];
}

export const Pokemons: PokemonData[] = [
  {
    name: 'Charizard',
    weight: 80,
    awesome: true,
    terrifying: false,
    abilities: ['Blaze', 'Solar power', 'Tough claws', 'Drought'],
  },
  {
    name: 'Bulbasaur',
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ['Overgrow', 'Chlorophyll'],
  },
  {
    name: 'Mewtwo',
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ['Pressure', 'Unnerve', 'Steadfast', 'Insomnia'],
  },
  {
    name: 'Mega beedrill',
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ['Intimidate', 'Unnerve'],
  },
];
