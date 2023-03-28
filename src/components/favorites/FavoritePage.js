import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'bootstrap';
import PokemonList from './Grid';


function FavoritePage({ favorites }) {
  return (
    <div>
      <h2>Favorite</h2>
      <button onClick={() => console.log(favorites)}>
        F
      </button>
      <PokemonList pokemonList={favorites} />
    </div>
  )
}

FavoritePage.propTypes = {
  favorites: PropTypes.array
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps)(FavoritePage);