'use client'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false)
    
    // Reemplaza este número con tu número de WhatsApp (formato internacional sin + ni espacios)
    const phoneNumber = '56978291929' // Ejemplo: 56912345678 para Chile
    const message = encodeURIComponent('Hola! Me interesa armar una PC personalizada.')
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    
    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={28} />
            {isHovered && (
                <span className="hidden md:inline-block font-medium pr-2">
                    Escribenos
                </span>
            )}
        </a>
    )
}