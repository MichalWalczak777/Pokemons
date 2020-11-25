import React, {useState, useEffect} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const Pokemons = () => {
    
    const pokemonsToDisplay = 151;
    const pokemonImages = [];

    for (let i = 0; i < pokemonsToDisplay; i++){
        pokemonImages.push(`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`);
    }
    
    const [pokemonData, setPokemonData] = useState([]);


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsToDisplay}`)
        .then(resp => resp.data.results)        
        .then(results => {
            const newPokemonData = [];
            for (let i = 0; i < pokemonsToDisplay; i++){
                newPokemonData.push({name: results[i].name, imageUrl: pokemonImages[i]})
            }
            setPokemonData(newPokemonData);
            console.log(pokemonData);
        })




    },[])

    return (
        <>
            {pokemonData?.map(el => <Pokemon name={el.name} imageUrl={el.imageUrl}/>)}
        </>
    )
}

export default Pokemons;
