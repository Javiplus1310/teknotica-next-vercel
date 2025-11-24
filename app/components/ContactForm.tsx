'use client'
import { useState } from 'react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'

function ContactFormContent() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
    const { executeRecaptcha } = useGoogleReCaptcha()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!executeRecaptcha) {
            console.log('reCAPTCHA no está listo')
            return
        }
        
        setStatus('sending')
        
        try {
            // Obtener token de reCAPTCHA
            const token = await executeRecaptcha('contact_form')
            
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token  // Enviar token
                })
            })
            
            if (res.ok) {
                setStatus('sent')
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error()
            }
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
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
                type="email"
                name="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
                name="message"
                placeholder="Tu mensaje"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition disabled:opacity-50"
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            
            {status === 'sent' && (
                <p className="text-green-400 text-center">✅ ¡Mensaje enviado correctamente!</p>
            )}
            {status === 'error' && (
                <p className="text-red-400 text-center">❌ Error al enviar. Intenta de nuevo.</p>
            )}
            
            <p className="text-xs text-gray-500 text-center">
                Este sitio está protegido por reCAPTCHA y se aplican las{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="underline">
                    Políticas de Privacidad
                </a>{' '}
                y{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener" className="underline">
                    Términos de Servicio
                </a>{' '}
                de Google.
            </p>
        </form>
    )
}

export default function ContactForm() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey="6Le1TxYsAAAAAPQ-almNolX1e71Kldr4yPNwVUhT">
            <ContactFormContent />
        </GoogleReCaptchaProvider>
    )
}