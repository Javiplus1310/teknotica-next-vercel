import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import WhatsAppButton from '@/app/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Asesoria en Componentes - Teknotica',
  description: 'Te ayudo a elegir la mejor combinación de hardware por rendimiento/precio.',
}

export default function AsesoriaComponentes() {
  return (
    <>
      <Nav />
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Asesoría en Componentes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Te ayudo a elegir la mejor combinación de hardware por rendimiento/precio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">¿En qué te ayudo?</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Análisis de compatibilidad entre componentes.</li>
              <li>✓ Recomendaciones según tu uso (gaming, trabajo, edición).</li>
              <li>✓ Comparativas de rendimiento.</li>
              <li>✓ Optimización de presupuesto.</li>
              <li>✓ Identificación de cuellos de botella.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
            <div className="space-y-4 text-gray-300">
              <p>Puedes contactarme para recibir asesoría personalizada sobre qué componentes elegir para tu PC. Te ayudaré a encontrar el mejor balance entre rendimiento y precio según tus necesidades específicas.</p>
              <p>Ya sea que estés armando tu PC por primera vez o buscando actualizar componentes específicos, te guiaré en el proceso de selección.</p>
            </div>
          </section>

          <div className="text-center pt-8">
            <a 
              href="/#contacto" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Solicitar Asesoría
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