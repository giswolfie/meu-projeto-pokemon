"use client";
import { getPokemons, PokemonBase } from '../api';
import { useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';

export function PokemonsList() {
    const [pokemons, setPokemon] = useState<PokemonBase[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        try {
          const data = await getPokemons(page);
          setPokemon(data);
        } catch (error) {
          console.error("Erro ao buscar pokémons:", error);
        } finally {
          setIsLoading(false);
        }
      }
      
      fetchData();
    }, [page]);
    return (
      <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center mb-4">
      <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
          >
            Anterior
          </button>

          <span className="font-bold text-black">Página {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
          >
            Próximo
          </button>
      </div>
      
      {isLoading ? (
        <p>Carregando pokémons...</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

