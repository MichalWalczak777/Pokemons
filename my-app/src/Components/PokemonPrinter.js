import React, {useState, useEffect} from "react";
import Pokemon from "./Pokemon";


const PokemonPrinter = ({pokemons}) => {
    
    return (
        <>
        {pokemons?.map(pok => <Pokemon key={pok.name} name={pok.name} imageUrl={pok.imageUrl} index={pok.pokemonId}/>)}
        </>
    )
}

export default PokemonPrinter;