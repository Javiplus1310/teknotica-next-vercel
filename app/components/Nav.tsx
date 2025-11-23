'use client'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image"
import NextLink from 'next/link'
import { label } from 'framer-motion/client'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [serviciosOpen, setServiciosOpen] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === '/'
    
    useEffect(() => {
        // Verificar scroll inicial inmediatamente
        setScrolled(window.scrollY > 30)
        
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navItems = [
        { label: 'Inicio', to: 'hero', href: '/' },
        { label: 'Servicios', to: 'servicios' },
        { label: 'FAQ', to: 'faq' },
        { label: 'Contacto', to: 'contacto' },
    ]
    
    const serviciosSubmenu = [
        { label: 'Armado Personalizado', href: '/servicios/armado-personalizado' },
        { label: 'Asesoría en Componentes', href: '/servicios/asesoria-componentes' },
        { label: 'Optimización y Testing', href: '/servicios/optimizacion-testing' },
    ]
    
    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all ${
                scrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <NextLink href="/" className="flex items-center gap-3">
                    <Image
                        src="/favicon.ico"
                        alt="Teknotica Logo"
                        width={64}
                        height={64}
                        className="cursor-pointer"
                    />

                    <span className="text-xl font-bold text-gray-900 dark:text-white hidden lg:block">
                        Teknotica
                    </span>
                </NextLink>
                
                <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
                    {navItems.map((item) => (
                        item.label === 'Servicios' ? (
                            <div
                                key={item.to}
                                className="relative"
                                onMouseEnter={() => setServiciosOpen(true)}
                                onMouseLeave={() => setServiciosOpen(false)}
                            >
                                {isHome ? (
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="cursor-pointer hover:text-indigo-400 transition"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <NextLink
                                        href={`/#${item.to}`}
                                        className="hover:text-indigo-400 transition"
                                    >
                                        {item.label}
                                    </NextLink>
                                )}
                                
                                {serviciosOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2">
                                        {serviciosSubmenu.map((subItem) => (
                                            <NextLink
                                                key={subItem.href}
                                                href={subItem.href}
                                                className="block px-4 py-3 text-gray-300 hover:text-indigo-400 hover:bg-gray-800 transition"
                                            >
                                                {subItem.label}
                                            </NextLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            isHome ? (
                                <Link
                                    key={item.to}
                                    to={item.to || 'hero'}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="cursor-pointer hover:text-indigo-400 transition"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <NextLink
                                    key={item.to}
                                    href={item.href || `/#${item.to}`}
                                    className="hover:text-indigo-400 transition"
                                >
                                    {item.label}
                                </NextLink>
                            )
                        )
                    ))}
                </nav>
                
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-300 dark:text-gray-300 light:text-gray-900"
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>
            
            {menuOpen && (
                <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-4">
                    {navItems.map((item) => (
                        item.label === 'Servicios' ? (
                            <div key={item.to}>
                                {isHome ? (
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        onClick={() => {
                                            setMenuOpen(false)
                                            setServiciosOpen(false)
                                        }}
                                        className="block text-gray-300 hover:text-indigo-400 cursor-pointer"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <NextLink
                                        href={`/#${item.to}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-gray-300 hover:text-indigo-400"
                                    >
                                        {item.label}
                                    </NextLink>
                                )}
                                
                                <div className="ml-4 mt-2 space-y-2">
                                    {serviciosSubmenu.map((subItem) => (
                                        <NextLink
                                            key={subItem.href}
                                            href={subItem.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-gray-400 text-sm hover:text-indigo-400"
                                        >
                                            → {subItem.label}
                                        </NextLink>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            isHome ? (
                                <Link
                                    key={item.to}
                                    to={item.to || 'hero'}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-300 hover:text-indigo-400 cursor-pointer"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <NextLink
                                    key={item.to}
                                    href={item.href || `/#${item.to}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-300 hover:text-indigo-400"
                                >
                                    {item.label}
                                </NextLink>
                            )
                        )
                    ))}
                </div>
            )}
        </header>
    )
}