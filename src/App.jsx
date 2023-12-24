import React, { useState,useEffect } from "react";
import fetchingPokemonsList from "./APIs/fetchingPokemonsList";
import Pokemons from "./components/Pokemons";
import Heading from "./components/Heading";
const firstUrl =
  "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [url, setUrl] = useState(firstUrl);
  const [next, setNext] = useState("");

  useEffect(() => {
    console.log("use Effect...");
    fetchingPokemonsList(url)
      .then((data) => {
        setNext(data[0].next);
        setPokemons((prev) => {
          return [...prev, ...data[0].results];
        });
        setIsLoaded(true);
        console.log("fetched", pokemons);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(pokemons);
  }, [url]);

  return (
    <div id="parent">
        <Heading/>
      <div className="app-container">
        
        <div className="pokemon-container">
          <Pokemons pokemons={pokemons} />
          <button
          className="load-more"
            onClick={(e) => {
              console.log("clicked");
              setUrl((prev) => next);
            }}
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
