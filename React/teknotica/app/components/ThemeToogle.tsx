'use client'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true)
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
        
        // Verificar tema actual
        const savedTheme = localStorage.getItem('theme')
        const htmlClassList = document.documentElement.classList
        
        if (savedTheme === 'light') {
            htmlClassList.remove('dark')
            setIsDark(false)
        } else {
            htmlClassList.add('dark')
            setIsDark(true)
        }
    }, [])
    
    const toggleTheme = () => {
        const html = document.documentElement
        
        if (isDark) {
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDark(false)
            console.log('Cambiado a tema claro')
        } else {
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setIsDark(true)
            console.log('Cambiado a tema oscuro')
        }
    }
    
    // Evitar hydration mismatch
    if (!mounted) {
        return (
            <div className="p-2 w-9 h-9 rounded-lg bg-gray-800"></div>
        )
    }
    
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="Cambiar tema"
        >
            {isDark ? (
                <Sun size={20} className="text-yellow-500" />
            ) : (
                <Moon size={20} className="text-indigo-600" />
            )}
        </button>
    )
}