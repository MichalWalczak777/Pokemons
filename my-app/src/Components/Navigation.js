import React from "react";
import {
    Link
  } from 'react-router-dom';

const Pokemon = () => {
    
    return (
        <nav className="navigation-nav">
            <ul className="navigation-list">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/pokemons"}>Pokemons</Link></li>
                <li><Link to={"/favourites"}>Favourites</Link></li>
            </ul>
        </nav>
    )
}

export default Pokemon;