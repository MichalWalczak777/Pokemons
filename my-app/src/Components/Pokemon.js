import React, {useState, useEffect} from "react";

const Pokemon = ({name, imageUrl}) => {


    return (
        <div>
            <h2>{name}</h2>
            <img className="pokemonImage" src={imageUrl}/>
        </div>
    )
}

export default Pokemon;