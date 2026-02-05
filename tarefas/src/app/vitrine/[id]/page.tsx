import { getPokemonById, PokemonDetail } from "../../api";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PokemonDetailPage({ params }: PageProps) {
  const { id } = await params;

  const pokemon: PokemonDetail = await getPokemonById(id);

  // Imagem //
  const imageUrl = pokemon.sprites.other["official-artwork"].front_default;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Botão Voltar */}
      <div className="w-full max-w-4xl mb-8">
        <Link href="/vitrine" className="text-red-500 hover:text-red-400 px-4 font-bold flex items-center gap-2">
          ← Voltar para a Vitrine
        </Link>
      </div>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Lado Esquerdo: Imagem e tipos de pokemon */}
        <div className="flex flex-col items-center justify-center bg-white/5 rounded-2xl p-6">
          <img src={imageUrl} alt={pokemon.name} className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl" />
          <div className="flex gap-3 mt-6">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className="bg-yellow-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* Lado Direito: Informações e Stats */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold capitalize mb-2">{pokemon.name}</h1>
          <span className="text-gray-400 font-mono text-xl mb-8">#{String(id).padStart(3, '0')}</span>

          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2">Status Base</h3>
            {pokemon.stats.map((s) => (
              <div key={s.stat.name} className="flex flex-col">
                <div className="flex justify-between text-sm mb-1 uppercase">
                  <span>{s.stat.name}</span>
                  <span className="font-bold">{s.base_stat}</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-red-500 h-full transition-all duration-1000" 
                    style={{ width: `${(s.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 p-4 rounded-xl text-center">
              <p className="text-gray-400 text-xs uppercase">Peso</p>
              <p className="text-xl font-bold">{pokemon.weight / 10} kg</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl text-center">
              <p className="text-gray-400 text-xs uppercase">Altura</p>
              <p className="text-xl font-bold">{pokemon.height / 10} m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}