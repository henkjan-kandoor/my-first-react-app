import './App.css';
import { Pokemon, Title } from './components';
import { Pokemons, PokemonData } from './models';

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Gonna catch 'em all" />
        {Pokemons.map((p: PokemonData) => (
          <Pokemon
            key={p.name}
            name={p.name}
            weight={p.weight}
            awesome={p.awesome}
            terrifying={p.terrifying}
            abilities={p.abilities}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
