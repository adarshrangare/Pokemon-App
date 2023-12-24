import React, { useState } from 'react'
import Pokemon from './Pokemon'
import './Pokemons.css'
import PokemonInfo from './PokemonInfo Modal/PokemonInfo'

const Pokemons = ({pokemons}) => {


  const [infoOpen, setInfoOpen] = useState(true);
  const [pokemonDetails,setPokemonDetails] = useState({})
  const handleKnowMore = (pokemonDetails) => {
    console.log(pokemonDetails)
    setInfoOpen(prev=>{
      return !prev
    })
    setPokemonDetails(pokemonDetails)
  }
  return (
    <div className='all-container'>
        {
            pokemons.map(pokemon=>(<Pokemon key={pokemon.id} {...pokemon} handleKnowMore={handleKnowMore} />))
        }
       { infoOpen && <PokemonInfo handleKnowMore={handleKnowMore} {...pokemonDetails} />}
    </div>
  )
}

export default Pokemons