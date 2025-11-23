import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import WhatsAppButton from '@/app/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Asesoria en Componentes - Teknotica',
  description: 'Te ayudo a elegir la mejor combinación de hardware por rendimiento/precio.',
}

export default function OptimizacionTesting() {
  return (
    <>
      <Nav />
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Optimización y Testing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Configuración, instalación de sistema operativo y pruebas de estabilidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Servicios incluidos</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Instalación limpia de Windows 10 Pro.</li>
              <li>✓ Actualización de drivers.</li>
              <li>✓ Configuración de BIOS/UEFI minima.</li>
              <li>✓ Optimización de rendimiento.</li>
              <li>✓ Tests de estabilidad (CPU, RAM, GPU).</li>
              <li>✓ Monitoreo de temperaturas.</li>
              <li>✓ Instalación de software esencial.</li>
            </ul>
          </section>

          <div className="text-center pt-8">
            <a 
              href="/#contacto" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Solicitar Servicio
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <WhatsAppButton />
    </>
  );
}