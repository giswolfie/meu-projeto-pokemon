import Link from "next/link";

export default function LandingHome(){
  return (
   <div 
      className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://e0.pxfuel.com/wallpapers/962/468/desktop-wallpaper-pokemon-firered-and-leafgreen-pokemon-fire-red.jpg')",
      }}
    >
    <div 
    className= "flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <section
        className= "text-center max-w-3xl">
          <img src="https://res.cloudinary.com/nsnc/image/upload/v1624033721/logoPokepedia_copy_shxmfc.png" 
    alt="Logo PokéPédia" 
    className="w-64 md:w-80 mx-auto mb-8 transition-transform hover:scale-105"/>

        <h1
          className= "text-4xl sm:text-5xl font-bold text-red-800 mb-6">
          Bem-vindo à PokePédia
        </h1>

        <div className="p-8 rounded-3xl text-white backdrop-blur-md bg-white/10 border border-white/20">
          <h2 className= 'text-2xl font-semibold text-gray-800 mb-4'>
            Sua fonte definitiva para saber tudo sobre os seus Pokémons!
          </h2>
          <p 
          className= "text-lg text-gray-700 mb-6">
            Explore uma enciclopédia completa de Pokémons, descubra suas habilidades, tipos e evoluções. 
            Navegue pela nossa vitrine especializada para encontrar seu Pokémon favorito!
          </p>
        </div>

        <div className= "mt-8">
          <Link 
            href="/vitrine"
            className= "bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Ir para a Vitrine de Pokémons
          </Link>
        </div>
      </section>
    </div>
    </div>
  );
}