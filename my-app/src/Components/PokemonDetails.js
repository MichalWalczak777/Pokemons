import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "axios";

const PokemonDetails = ({addToFavourites, isFavourite, removeFromFavourites}) => {

    const {name, index} = useParams();
    let imageId = parseInt(index)+1; 
    let src = `https://pokeres.bastionbot.org/images/pokemon/${imageId}.png`;

    const [buttonText, setButtonText] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [abilities, setAbilities] = useState();
    const [experience, setExperience] = useState();
    const [stats, setStats] = useState();

    useEffect(()=>{
        console.log(isFavourite(name));
        const text = isFavourite(name) ? "Remove from favourites" : "Add to favourites";
        setButtonText(text);
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(resp => resp.data)
        .then(data => {
            setHeight(data.height/10);
            setWeight(data.weight/10);
            setAbilities(data.abilities);
            setExperience(data.base_experience);
            setStats(data.stats);
        })


        // axios.get(`https://pokeapi.co/api/v2/evolution-chain/${index}`)
        // .then(resp => console.log(resp.data.chain));


    },[])

    const handleOnClick = (name, index) => e => {
        buttonText==="Add to favourites" ? setButtonText("Remove from favourites") : setButtonText("Add to favourites");
        isFavourite(name) ? removeFromFavourites(name) : addToFavourites(name, index);
    }

    return (
        <div className="container pokemonDetails-container">
        {/* <li><Link to="/pokemons">Wróć</Link></li> */}
            <ul>
                <li><h2>{name}</h2></li>
                <li><span className="pokemonDetails-statName">height[m]:</span><span className="pokemonDetails-statValue"> {height}</span></li>
                <li><span className="pokemonDetails-statName">weight[kg]:</span> <span className="pokemonDetails-statValue">{weight}</span></li>
                
                {stats?.map(stat => 
                <li key={stat.stat.name}>
                    <span className="pokemonDetails-statName">{stat.stat.name}:</span> 
                    <span className="pokemonDetails-statValue">{stat.base_stat}</span></li>)}

                <li><span className="pokemonDetails-statName">experience gained:</span>
                <span className="pokemonDetails-statValue">{experience}</span></li>

                <li> <span className="pokemonDetails-statName">abilities:</span></li>

                {abilities?.map(ablt => <li key={ablt.ability.name}> 
                    <span className="pokemonDetails-statName"></span>
                    <span className="pokemonDetails-statValue">{ablt.ability.name}</span></li>)}

            </ul>
            
            <div className="pokemonDetails-dataWrapper">
                <img className="pokemonDetails-image" src={src} alt=""/>
                <button className="general-button pokemonDetails-button" onClick={handleOnClick(name, index)}> {buttonText}</button>
            </div>
        </div>
    )

}

export default PokemonDetails;