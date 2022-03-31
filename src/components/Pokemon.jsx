import { useEffect, useState } from "react";
import getPokemon from "../services/getPokemon";

const Pokemon = ({ name, url }) => {
    // usar useEffect
    const [pokemonImg, setPokemonImg] = useState('');
    useEffect(() => {
        getPokemon(url)
            .then(res => {
                setPokemonImg(res.data.sprites.front_default); // esto trae la imagen del pokemon

            })
            .catch(err => console.log(err))

    }, [url])

    return (
        <div>
            <img src={pokemonImg} alt="" />
            <h1>{name}</h1>

        </div>
    );
}


export default Pokemon