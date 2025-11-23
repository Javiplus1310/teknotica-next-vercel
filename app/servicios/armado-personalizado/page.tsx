import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import WhatsAppButton from '@/app/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Armado Personalizado - Teknotica',
  description: 'Construcción de PCs según tu presupuesto y necesidades. Gaming, trabajo o estudios.',
}

export default function ArmadoPersonalizado() {
  return (
    <>
      <Nav />
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-100 light:to-white text-white dark:text-white light:text-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-white light:text-gray-900">
            Armado Personalizado
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">
            Construcción de PCs según tu presupuesto y necesidades de uso
          </p>
        </div>

        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-white dark:text-white light:text-gray-900">¿Qué incluye?</h2>
            <ul className="space-y-3 text-gray-300 dark:text-gray-300 light:text-gray-700">
              <li>✓ Selección de componentes optimizados para tu presupuesto.</li>
              <li>✓ Ensamblaje profesional con garantía.</li>
              <li>✓ Cable management ordenado.</li>
              <li>✓ Instalación de sistema operativo.</li>
              <li>✓ Testing completo de estabilidad.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Proceso</h2>
            <div className="space-y-4 text-gray-300">
              <p>1. <strong>Consulta inicial:</strong> Conversamos sobre tus necesidades y presupuesto.</p>
              <p>2. <strong>Cotización:</strong> Te presento opciones de componentes con precios.</p>
              <p>3. <strong>Compra:</strong> Una vez aprobado, se adquieren los componentes.</p>
              <p>4. <strong>Ensamblaje:</strong> Construcción profesional de tu PC.</p>
              <p>5. <strong>Entrega:</strong> Testing final y entrega de equipo.</p>
            </div>
          </section>

          {/* Botón de contacto */}
          <div className="text-center pt-8">
            <a 
              href="/#contacto" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Solicitar Cotización
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