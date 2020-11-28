import React, {useState, useEffect} from "react";
import Pokemon from "./Pokemon";


const PokemonPrinter = ({pokemons}) => {
    
    return (
        <>
        {pokemons?.map(el => <Pokemon key={el.name} name={el.name} imageUrl={el.imageUrl}/>)}
        </>
    )
}

export default PokemonPrinter;