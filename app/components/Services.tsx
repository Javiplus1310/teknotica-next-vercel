'use client'
import { motion } from 'framer-motion'
import { Cpu, Monitor, Wrench } from 'lucide-react'
import Link from 'next/link'

const services = [
    {
        icon: <Cpu className="w-10 h-10 text-indigo-500" />,
        title: 'Armado Personalizado',
        desc: 'Construcción de PCs según tu presupuesto y necesidades de uso.',
        href: '/servicios/armado-personalizado'
    },
    {
        icon: <Monitor className="w-10 h-10 text-indigo-500" />,
        title: 'Asesoría en Componentes',
        desc: 'Te ayudo a elegir la mejor combinación de hardware por rendimiento/precio.',
        href: '/servicios/asesoria-componentes'
    },
    {
        icon: <Wrench className="w-10 h-10 text-indigo-500" />,
        title: 'Optimización y Testing',
        desc: 'Configuración, instalación de sistema operativo y pruebas de estabilidad.',
        href: '/servicios/optimizacion-testing'
    }
]

export default function Services() {
    return (
        <section id="servicios" className="py-24 px-6 bg-gray-900">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            >
                Mis Servicios
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {services.map((s, i) => (
                    <Link key={i} href={s.href}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-indigo-600/30 transition cursor-pointer"
                        >
                            <div className="flex justify-center mb-4">{s.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
                            <p className="text-gray-400">{s.desc}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    )
}