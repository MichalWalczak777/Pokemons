import React, {useState, useEffect} from "react";
import Pokemon from "./Pokemon";
import PokemonPrinter from "./PokemonPrinter";



const Favourites = ({favourites}) => {

    
    return (
        <div className="Pokemons-container">
        <PokemonPrinter pokemons ={favourites}/>
        </div>
    )
}

export default Favourites;