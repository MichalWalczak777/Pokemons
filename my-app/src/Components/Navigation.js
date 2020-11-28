import React from "react";
import {
    Link
  } from 'react-router-dom';

const Pokemon = () => {
    
    return (
        <nav className="Navigation-nav">
            <ul className="Navigation-list">
                <li><Link to={"/Home"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/pokemons"}>Pokemons</Link></li>
                <li><Link to={"/pokemons"}>Favourites</Link></li>
            </ul>
        </nav>
    )
}

export default Pokemon;