import React, {useState} from "react";

import "./scss/main.scss";
import Pokemons from "./Components/Pokemons";
import Home from "./Components/Home";
import PokemonDetails from "./Components/PokemonDetails";
import Navigation from "./Components/Navigation";
import PokemonPrinter from "./Components/PokemonPrinter";
import Favourites from "./Components/Favourites";


import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

const App = () => {

  const [favouritePokemons, setFavouritePokemons] = useState([]);
  

  const addToFavourites = (name,index) => e => {
    // debugger;
        let imageId = parseInt(index)+1;
        let src = `https://pokeres.bastionbot.org/images/pokemon/${imageId}.png`; 
        if (!favouritePokemons.some(e => e.name === name)) {
            setFavouritePokemons([...favouritePokemons, {pokemonId: index, name, imageUrl: src }]);
        }
  }


  return  (
          <HashRouter>
              <Navigation/>
              <Switch>
              <Route exact path="/" component={Home}/>
                <Route exact path="/pokemons" component={Pokemons}/>
                <Route exact path="/favourites" render={(props) => <Favourites {...props} favourites={favouritePokemons} />} />
                <Route exact path="/pokemons/:index/:name" render={(props) => <PokemonDetails {...props} addToFavourites={addToFavourites} />} />
              </Switch>
          </HashRouter>
          )
}

export default App;
