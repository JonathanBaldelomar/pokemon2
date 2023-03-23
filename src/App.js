import './App.css';
import SignInComponent from './components/SignInComponent'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import FavoritePage from './components/favorites/FavoritePage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PokeApix from './components/pokemon/pokeapi';



function App() {
  return (
    <div className="App" >
      <main>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/favorite" element={<FavoritePage />}></Route>
          <Route path="/login" element={<SignInComponent />}></Route>
          <Route path="/pokedex" element={<PokeApix />}></Route>
        </Routes>
      </main>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
