

export default async function fetchingPokemonsList(url){

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    return data;
}

// fetchingPokemons();