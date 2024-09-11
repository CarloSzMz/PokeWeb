import { PokemonSprites } from "./pokemonSprites";

export interface PokemonSimple {
  name: string;
  url: string;
  sprites: PokemonSprites;
}
export interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonSimple[];
  }

