import { useEffect, useState } from 'react';
import MediaCard from './poke-components/CustomCard';
import './poke-styles/cardDiv.css';
import { PokeRadar } from './poke-components/PokeRadar';

function PokeApix() {
  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({ sprites: { other: { "official-artwork": {} } } });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentId]);

  const setPokemonId = (id) => {
    setCurrentId(id);
  }

  return (
    <div>
      <header className="App-header">
        {
          isLoading ? (
            <></>
          ) : (
            <div>
              <cardDiv class="cardDivS">
                <div>
                  <button class="button-prev" hidden={currentId <= 1} onClick={() => setPokemonId(currentId - 1)}> ˂ </button>
                </div>
                <div>
                  <MediaCard logo={pokemon.sprites.front_default} image2={pokemon.sprites.other['official-artwork'].front_default} name={pokemon.name} pokemon={pokemon} />
                  <PokeRadar pokemon={pokemon} />
                </div>
                <div>
                  <button class="button-next" hidden={currentId >= 151} onClick={() => setPokemonId(currentId + 1)}> ˃ </button>
                </div>
              </cardDiv>
            </div>
          )
        }
      </header>
    </div>
  );
}

export default PokeApix;
