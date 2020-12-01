import React, {useState, useEffect} from "react";
import Pokemon from "./Pokemon";


const PokemonPrinter = ({pokemons}) => {
    
    return (
        <>
        {pokemons?.map((el, i) => <Pokemon key={el.name} name={el.name} imageUrl={el.imageUrl} index={el.pokemonId}/>)}
        </>
    )
}

export default PokemonPrinter;