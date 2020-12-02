import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import PokemonPrinter from "./PokemonPrinter";

const Pokemons = ({pokemonData}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    console.log(pokemonData);
    const currentPokemons = pokemonData?.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginate = pageNumber =>{
        setCurrentPage(pageNumber.selected+1);
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
