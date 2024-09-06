export interface PokemonSimple{
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

  export interface PokemonSprites {
    front_default: string;
    back_default: string;
    [key: string]: string | null;
}