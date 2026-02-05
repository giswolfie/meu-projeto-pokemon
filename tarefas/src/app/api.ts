export interface PokemonBase {
    name: string;
    url: string;
}

export interface GetPokemonsDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBase[];
}

export interface PokemonDetail {
  id: number;
  weight: number;
  height: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };

  types: {
    type: {
      name: string;
    };
  }[];

  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}



export async function getPokemons(page: number = 1): Promise<PokemonBase[]> {
  const LIMIT = 10;
  const offset = (page - 1) * LIMIT;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
    const data: GetPokemonsDTO = await response.json();
    return data.results;
}

export async function getPokemonById(id: string): Promise<PokemonDetail> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
        throw new Error('Pokémon não encontrado');
    }
    const data = await response.json();
    return data;
}