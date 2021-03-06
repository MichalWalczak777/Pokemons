import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import PokemonPrinter from "./PokemonPrinter";

const Pokemons = ({pokemonData, filteredSearch, clear}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(9);

    useEffect (()=> {
        return () => {
            clear();
        };
    },[])

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    console.log(pokemonData);
    const currentPokemons = pokemonData?.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginate = pageNumber =>{
        setCurrentPage(pageNumber.selected+1);
    }

    return (
        <div className ="container pokemons-container">
            <input className="pokemons-search" placeholder="Type to search" onChange={filteredSearch}/>
            <div className ="pokemons-wrapper">
                <PokemonPrinter pokemons ={currentPokemons}/>
            </div>
            <Pagination pokemonsTotal={pokemonData.length} pokemonsPerPage={pokemonsPerPage} paginate={paginate}/>
        </div>
    )
}

export default Pokemons;
