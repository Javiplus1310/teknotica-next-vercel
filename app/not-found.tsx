import Link from 'next/link'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-2xl">
          <h1 className="text-9xl font-extrabold text-indigo-500 mb-4">404</h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Página no encontrada
          </h2>
          
          <p className="text-gray-400 text-lg mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <Home size={20} />
              Volver al Inicio
            </Link>
            
            <Link 
              href="/#servicios"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <Search size={20} />
              Ver Servicios
            </Link>
          </div>
          
          <div className="mt-12 text-gray-600">
            <p className="text-sm">
              ¿Necesitas ayuda? <Link href="/#contacto" className="text-indigo-400 hover:text-indigo-300">Contáctanos</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}