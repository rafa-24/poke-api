import { useEffect, useState } from "react"
import getAllPokemons from "../services/getAllPokemons"
import Pokemon from "./Pokemon";

const PokemonList = () => {
    // utilizar state para el array de pokemon
    const [arrayPokemon, setArrayPokemon] = useState([]);
    // utilizar el effect
    useEffect(() => {
        //manejo la promesa 
        getAllPokemons()
            .then(response => {
                setArrayPokemon(response.data.results)
            })
            .catch(err => console.log(err))

    }, []);

    // mapear el array de pokemones y pasar un key
    const list = arrayPokemon.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />)


    return (
        <div>

            {list}

        </div>
    )
}

export default PokemonList