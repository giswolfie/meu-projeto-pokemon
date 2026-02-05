import type { Metadata } from 'next'
import { Header } from './components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'PokePédia',
  description: 'Uma enciclopédia completa de Pokémons.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className= "flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className= "flex-grow">
          {children}
        </main>
        
        <footer className= "bg-orange-300 text-black font-bold text-center p-4 mt-6">
          <p>© 2026 PokePédia. Todos os direitos reservados.</p>
        </footer>
      </body> 
    </html>
  )
}