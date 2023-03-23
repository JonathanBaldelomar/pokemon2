import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function FavoritePage () {
  const data = useContext(ThemeContext); 
  return (
    <div className={data.theme}>
        <h2>Favorite</h2>
        <p>
            This is a favorite think.
        </p>
    </div>
  )
}

export default FavoritePage;