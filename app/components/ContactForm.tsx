'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')
        try {
        const res = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            setStatus('sent')
            setFormData({ name: '', email: '', message: '' })
        } else throw new Error()
        } catch {
            setStatus('error')
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-8 bg-gray-900 rounded-2xl shadow-lg space-y-4"
        >
            <h2 className="text-2xl font-semibold text-white text-center">Contáctame</h2>
            <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                type="email"
                name="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
                name="message"
                placeholder="Tu mensaje"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition"
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            
            {status === 'sent' && (
                <p className="text-green-400 text-center">✅ ¡Mensaje enviado correctamente!</p>
            )}
            {status === 'error' && (
                <p className="text-red-400 text-center">❌ Error al enviar. Intenta de nuevo.</p>
            )}
        </form>
    )
}