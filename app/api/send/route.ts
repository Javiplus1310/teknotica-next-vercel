import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { name, email, message } = await req.json()

    try {
        await resend.emails.send({
            from: 'Teknotica <onboarding@resend.dev>',
            to: 'javidx_13@hotmail.cl',
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <h2>Nuevo contacto desde tu página</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Correo:</strong> ${email}</p>
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