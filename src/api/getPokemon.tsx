/* eslint-disable @typescript-eslint/no-explicit-any */
// https://pokeapi.co/api/v2/pokemon/ditto

import axios from "axios";
import { PokemonInfo } from "../types/types";
import { formatName } from "../utils/utils";

export async function getPokemon(name: string): Promise<PokemonInfo> {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (response.status !== 200) {
        throw new Error("Error get pokemon info")
        
    }
    const result = {
      name: response.data.name,
      id: response.data.id,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
        response.data.name.toLowerCase()
      )}.gif`,
    };

    return result;
}
