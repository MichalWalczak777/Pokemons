import React from "react";
import {
    Link
  } from 'react-router-dom';

const Pokemon = () => {
    
    return (
        <nav className="navigation-nav">
            <div className="container navigation-container">
                <h2>POKEWEB</h2>
                <ul className="navigation-list">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/pokemons"}>Pokemons</Link></li>
                    <li><Link to={"/favourites"}>Favourites</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Pokemon;