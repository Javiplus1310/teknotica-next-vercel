import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyRecaptcha(token: string): Promise<boolean> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`
    })
    
    const data = await response.json()
    
    return data.success && data.score >= 0.5
}

export async function POST(req: Request) {
    const { name, email, message, recaptchaToken } = await req.json()
    
    if (!recaptchaToken) {
        return NextResponse.json(
            { error: 'Token de reCAPTCHA requerido' },
            { status: 400 }
        )
    }
    
    const isHuman = await verifyRecaptcha(recaptchaToken)
    
    if (!isHuman) {
        return NextResponse.json(
            { error: 'Verificación de reCAPTCHA fallida. Intenta de nuevo.' },
            { status: 403 }
        )
    }
    
    try {
        await resend.emails.send({
            from: 'Teknotica <contacto@tecnotica.cl>',
            to: 'teknotica.contacto@gmail.com',
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <h2>Nuevo contacto desde tu página</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Correo del cliente:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error }, { status: 500 })
    }
}