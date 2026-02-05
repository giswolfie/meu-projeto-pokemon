import { PokemonsList } from "../components/PokemonsList";

export default function VitrinePage() {
    return (
       <main className="min-h-screen bg-gray-50 pt-8">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-7">
        <h1>PokePédia</h1>
        <p className="text-lg text-gray-600"> Explore o mundo dos Pokemons!</p>
      </h1>
      <div className="container mx-auto px-4">
        <PokemonsList />
      </div>
    </main>
    );
}   