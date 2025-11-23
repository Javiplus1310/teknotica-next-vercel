'use client'

import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navItems = [
        { label: 'Inicio', to: 'hero' },
        { label: 'Servicios', to: 'servicios' },
        { label: 'Contacto', to: 'contacto' },
    ]

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all ${
                scrolled ? 'bg-gray-950/90 backdrop-blur border-b border-gray-800' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <Image
                    src="/favicon.ico"
                    alt="Teknotica Image"
                    width={64}
                    height={64}                
                />
                
                <nav className="hidden md:flex space-x-8 text-gray-300">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer hover:text-indigo-400 transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-300"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={() => setMenuOpen(false)}
                            className="block text-gray-300 hover:text-indigo-400 cursor-pointer"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}