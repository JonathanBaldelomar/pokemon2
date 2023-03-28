import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Link } from "react-router-dom";

function HomePage() {
  const data = useContext(ThemeContext);
  return (
    <div className={data.theme}>
      <h1>Home Page</h1>
      <p>Select what you would like to do</p>
    </div>
  )
}

export default HomePage;