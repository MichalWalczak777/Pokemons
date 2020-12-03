import React, {useState, useEffect} from "react";
import axios from "axios";

import Pokemons from "./Pokemons";
import Home from "./Home";
import About from "./About";
import PokemonDetails from "./PokemonDetails";
import Navigation from "./Navigation";

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

const PokemonMain = () => {

  const pokemonsToDisplay = 800;

  const createImagesList = (pokemonList) => {
    const pokeImages = [];
    for (let i = 0; i < pokemonsToDisplay; i++){
        pokeImages.push(`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`);
    }
    return pokeImages;
}

const [favouritePokemons, setFavouritePokemons] = useState([]);
const [pokemonImages] = useState(createImagesList(pokemonsToDisplay));
const [pokemonData, setPokemonData] = useState([]);
const [filteredFavourites, setFilteredFavourites] = useState([]);
const [filteredData, setFilteredData] = useState([]);


    useEffect(()=>{
            
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsToDisplay}`)
        .then(resp => resp.data.results)        
        .then(results => {
            const newPokemonData = [];
            for (let i = 0; i < pokemonsToDisplay; i++){
                newPokemonData.push({name: results[i].name, imageUrl: pokemonImages[i], pokemonId: i});
            }
            setPokemonData(newPokemonData);
        })
    },[pokemonImages])

    useEffect(()=>{
          setFilteredFavourites(favouritePokemons);
          setFilteredData(pokemonData);
    },[favouritePokemons])

    useEffect(()=>{
      setFilteredData(pokemonData);
    },[pokemonData])


  const addToFavourites = (name,index) => {

        let imageId = parseInt(index)+1;
        let src = `https://pokeres.bastionbot.org/images/pokemon/${imageId}.png`; 
        setFavouritePokemons([...favouritePokemons, {pokemonId: index, name, imageUrl: src }]);
  }

  const removeFromFavourites = name => {

    setFavouritePokemons([...favouritePokemons.filter(pokemon => pokemon.name !== name)]);
}
console.log(favouritePokemons);


  const isFavourite = name => {
    return (favouritePokemons.some(pokemon => pokemon.name === name));
  }

    const filteredSearch = e => {
      setFilteredFavourites([...favouritePokemons.filter(pokemon => pokemon.name.startsWith(e.target.value))]);
      setFilteredData([...pokemonData.filter(pokemon => pokemon.name.startsWith(e.target.value))]);
    }

    const clear = () => {
      setFilteredFavourites(favouritePokemons);
      setFilteredData(pokemonData);
    }

  return (
        <HashRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/pokemons" render={(props) => <Pokemons {...props} pokemonData={filteredData} 
                                                                                      filteredSearch={filteredSearch}
                                                                                      clear={clear}/>} />
                <Route exact path="/favourites" render={(props) => <Pokemons {...props} pokemonData={filteredFavourites} 
                                                                                        filteredSearch={filteredSearch}
                                                                                        clear={clear}/>} />
                <Route exact path="/pokemons/:index/:name" render={(props) => <PokemonDetails {...props} 
                                                                                addToFavourites={addToFavourites} 
                                                                                removeFromFavourites = {removeFromFavourites} 
                                                                                isFavourite={isFavourite} />} />
            </Switch>
        </HashRouter>
        )
    }

export default PokemonMain;


