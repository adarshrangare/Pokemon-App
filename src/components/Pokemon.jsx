import React, { useState,useEffect } from 'react'
import fetchingPokemonsList from '../APIs/fetchingPokemonsList'
import PokemonInfo from './PokemonInfo Modal/PokemonInfo';

const Pokemon = ({name,url,handleKnowMore}) => {
    const [pokemonDetails,setPokemonDetails] = useState({});
    useEffect(()=>{
        fetchingPokemonsList(url).then((data)=>{
            console.log(data);
            setPokemonDetails(data[0]);

        })
    },[]);
    const handleClick = () => {
      handleKnowMore(pokemonDetails);
    }

  return (
    <>
        <div className={pokemonDetails?.type + " pokemon-card"}>
                <div className="number">#{pokemonDetails?.id} </div>
                <img src={pokemonDetails?.image} alt={name} />
                <h3> {name.toUpperCase()} </h3>
                <small>Type: {pokemonDetails?.type}</small>
                <div className={"detail-wrapper"}>
                  <button className={pokemonDetails?.type} onClick={handleClick}>Know more...</button>
                  
                </div>
                
        </div>
    </>
  )
}

export default Pokemon