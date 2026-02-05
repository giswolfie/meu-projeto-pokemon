"use client";
import Link from 'next/link';

export function Header() {
    return (
        <header className="bg-orange-300 p-4 mb-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <section
        className= "text-center max-w-3xl">
          <img src="https://res.cloudinary.com/nsnc/image/upload/v1624033721/logoPokepedia_copy_shxmfc.png" 
    alt="Logo PokéPédia" 
    className="w-32 md:w-40 mx-auto mb-0 transition-transform hover:scale-105"/>
    </section>
                </Link>
                

                <nav>
                    <ul className="flex gap-6 intens-center">
                        <li>
                            <Link href="/" className="text-bold text-black hover:underline">
                                Ínicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/vitrine" 
                            className="bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                Vitrine de Pokemons
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
