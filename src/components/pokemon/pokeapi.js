import { useEffect, useState } from 'react';
import MediaCard from './poke-components/CustomCard';
import './poke-styles/cardDiv.css';

function PokeApix() {
  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({sprites:{other:{"official-artwork":{}}}});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    fetch(`${pokeApiDomain}${currentId}`)
    .then(response => response.json())
    .then(pokemonData => {
      console.log(pokemonData);
      setCurrentId(pokemonData.id);
      setPokemon(pokemonData);
    })
    .catch(err => {
      console.log(err)})
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
              {/* Ability container */}
              {/* <div>
                <h3> Abilities </h3>
                <ul>{pokemon.abilities?.map(ab => {
                  return(
                    <li> {ab.ability.name} </li>
                  )
                }
                )}</ul>
              </div> */}
              {/* Types container */}
              {/* <div>
                <h3> Types </h3>
                <ul>{pokemon.types?.map(ty => {
                  return(
                    <li> {ty.type.name} </li>
                  )
                }
                )}</ul>
              </div> */}
              {/* Weakness container */}
                {/* <WeaknessF /> */}
              {/* <Areachart /> */}
              {/* Card Media */}
              <div>
                <cardDiv>
                  <div>
                    <button disabled={currentId <= 1} onClick={()=> setPokemonId(currentId -1)}> ˂ </button>
                  </div>
                  <div>
                    <MediaCard logo={pokemon.sprites.front_default} image2={pokemon.sprites.other['official-artwork'].front_default} name={pokemon.name} pokemon={pokemon}/>
                  </div>
                  <div>
                    <button disabled={currentId >= 151} onClick={()=> setPokemonId(currentId + 1)}> ˃ </button>
                  </div>
                </cardDiv>
                <div>
                  
                </div>
              </div>
              <div>
                {/* <testChart/> */}
              </div>
            </div>
          )
        }
      </header>
    </div>
  );
}

export default PokeApix;
