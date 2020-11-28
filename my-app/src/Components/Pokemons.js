import React, {useState, useEffect} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const Pokemons = () => {
    
    const pokemonsToDisplay = 151;

    const createImagesList = (pokemonsToDisplay) => {
        const pokeImages = [];
        for (let i = 0; i < pokemonsToDisplay; i++){
            pokeImages.push(`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`);
        }
        return pokeImages;
    }

    const [pokemonImages, setPokemonImages] = useState(createImagesList(pokemonsToDisplay));
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
        })




    },[pokemonImages])



    return (
        <div class ="Pokemons-container">
            {pokemonData?.map(el => <Pokemon key={el.name} name={el.name} imageUrl={el.imageUrl}/>)}
        </div>
    )
}

export default Pokemons;
