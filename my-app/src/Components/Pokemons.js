import React, {useState, useEffect} from "react";
import axios from "axios";
import Pagination from "./Pagination";
import PokemonPrinter from "./PokemonPrinter";

const Pokemons = ({settingFavourites}) => {
    
    const pokemonsToDisplay = 151;

    const createImagesList = (pokemonsToDisplay) => {
        const pokeImages = [];
        for (let i = 0; i < pokemonsToDisplay; i++){
            pokeImages.push(`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`);
        }
        return pokeImages;
    }

    const [pokemonImages] = useState(createImagesList(pokemonsToDisplay));
    const [pokemonData, setPokemonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);


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

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemonData?.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginate = pageNumber =>{
        setCurrentPage(pageNumber.selected+1);
        console.log(currentPage);
    }

    return (
        <>
        <div className ="Pokemons-container">
            <PokemonPrinter pokemons ={currentPokemons}/>
        </div>
        <Pagination pokemonsTotal={pokemonData.length} pokemonsPerPage={pokemonsPerPage} paginate={paginate}/>
        </>
    )
}

export default Pokemons;
