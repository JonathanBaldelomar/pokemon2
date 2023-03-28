import './App.css';
import SignInComponent from './components/login/SignInComponent'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import FavoritePage from './components/favorites/FavoritePage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PokeApix from './components/pokemon/pokeapi';
import React, { useContext } from 'react';
import ThemeContext from './components/context/ThemeContext';


function App() {
  const data = useContext(ThemeContext);
  return (
    <div className="App" >
      <main className={data.theme}>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/favorite" element={<FavoritePage />}></Route>
          <Route path="/login" element={<SignInComponent />}></Route>
          <Route path="/pokedex" element={<PokeApix />}></Route>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
