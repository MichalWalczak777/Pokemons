import React, {useState, useEffect} from "react";
import axios from "axios";
import Pagination from "./Pagination";
import PokemonPrinter from "./PokemonPrinter";

const Pokemons = () => {
    
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
    const [pokemonsPerPage] = useState(30);


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

    const paginate = pageNumber => e =>{
        e.preventDefault();
        setCurrentPage(pageNumber);
    }

    return (
        <div className ="Pokemons-container">
            <PokemonPrinter pokemons ={currentPokemons}/>
            <Pagination pokemonsTotal={pokemonData.length} pokemonsPerPage={pokemonsPerPage} paginate={paginate}/>
        </div>
    )
}

export default Pokemons;
