import React, {useState, useEffect} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink
  } from 'react-router-dom';

const Pokemon = ({name, imageUrl}) => {
    
    return (
        <div className="Pokemon-wrapper">
            <Link to={"/pokemons/" + name}>
                <h2>{name}</h2>
                <img className="Pokemon-image" src={imageUrl}/>
            </Link>
        </div>
    )
}

export default Pokemon;