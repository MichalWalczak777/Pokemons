import React, {useState, useEffect} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink
  } from 'react-router-dom';

const Pokemon = ({name, imageUrl, index}) => {
    
    return (
        <div className="Pokemon-wrapper">

            <h2 className="pokemon-header">{name}</h2>
            <img className="Pokemon-image" src={imageUrl}/>
            <Link to={"/pokemons/" + index + "/" + name}>
                <button className="general-button pokemon-button">See more</button>
            </Link>
        </div>
    )
}

export default Pokemon;