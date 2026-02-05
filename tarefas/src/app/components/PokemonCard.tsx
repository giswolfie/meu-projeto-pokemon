"use client";

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {

  const id = url.split("/")[6];
  
  // URL das imagens dos Pokémons
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col items-center p-6">
      
        {/* Imagem do Pokémon*/}
      <div className="bg-gray-100 rounded-full p-4 mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className= "w-32 h-32 object-contain"
          loading= "lazy"
        />
      </div>

      
      <h2 className="text-xl font-bold text-gray-800 capitalize mb-2">
        {name}
      </h2>
      
      {/*botao de detalhes*/}
      <span className="text-gray-400 text-sm font-mono">
        #{id.padStart(3, '0')}
      </span>

      {/* link para a página de detalhes do Pokémon */}
      <a 
        href={`/vitrine/${id}`} 
        className="mt-4 w-full text-center bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
      >
        Detalhes
      </a>
    </div>
  );
}
        