// aqui manejo las peticiones
import axios from "axios";

const getAllPokemons = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    const request = await axios.get(URL)
    return request;

}

export default getAllPokemons;