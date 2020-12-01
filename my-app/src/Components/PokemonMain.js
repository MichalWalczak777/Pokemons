import React, {useState} from "react";


import Pokemons from "./Pokemons";
import Home from "./Home";
import PokemonDetails from "./PokemonDetails";
import Navigation from "./Navigation";
import Favourites from "./Favourites";


import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

const PokemonMain = () => {

  const [favouritePokemons, setFavouritePokemons] = useState([]);
  

  const addToFavourites = (name,index) => {
        let imageId = parseInt(index)+1;
        let src = `https://pokeres.bastionbot.org/images/pokemon/${imageId}.png`; 
        if (!favouritePokemons.some(e => e.name === name)) {
            setFavouritePokemons([...favouritePokemons, {pokemonId: index, name, imageUrl: src }]);
        }
  }


  return (
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

export default PokemonMain;


