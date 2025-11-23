import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Columna 1: Sobre Teknotica */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Teknotica</h3>
                        <p className="text-sm text-gray-500">
                            Armado de PCs personalizadas, confiables y a tu medida. 
                            Diseñamos tu setup ideal para trabajar, estudiar o jugar.
                        </p>
                    </div>
                    
                    {/* Columna 2: Enlaces rápidos */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/servicios/armado-personalizado" className="hover:text-indigo-400 transition">
                                    Armado Personalizado
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios/asesoria-componentes" className="hover:text-indigo-400 transition">
                                    Asesoría en Componentes
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios/optimizacion-testing" className="hover:text-indigo-400 transition">
                                    Optimización y Testing
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Columna 3: Contacto */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-indigo-500" />
                                <span>+56 9 7829 1929</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-indigo-500" />
                                <span>teknotica.contacto@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-indigo-500" />
                                <span>Santiago, Chile</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Línea divisoria */}
                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>© {currentYear} Teknotica — Armado de PCs profesionales. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}