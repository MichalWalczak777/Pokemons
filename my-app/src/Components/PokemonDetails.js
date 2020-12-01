import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';

const PokemonDetails = ({addToFavourites}) => {

    const {name, index} = useParams();
    let imageId = parseInt(index)+1; 
    let src = `https://pokeres.bastionbot.org/images/pokemon/${imageId}.png`;

    const [addToFavouritesButtonText, setAddToFavouritesButtonText] = useState("Lubię to");

    const handleClick = (name,index) => e => {
        addToFavouritesButtonText ==="Lubię to" ? setAddToFavouritesButtonText("Nie lubię") : setAddToFavouritesButtonText("Lubię to");
        addToFavourites(name, index);
    }

    return (
        <div className="container pokemonDetails-container">
            <h2>{name}</h2>
            <img className="pokemonDetails-image" src={src} alt=""/>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
            <button onClick={handleClick(name, index)}> {addToFavouritesButtonText}</button>
            <Link to="/pokemons">Wróć</Link>
        </div>
    )

}

export default PokemonDetails;