'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: '¿Cuánto tiempo demora el armado de una PC?',
    answer: 'El tiempo de armado depende de la disponibilidad de los componentes. Una vez que tenemos todas las partes, el ensamblaje toma entre 2-3 días incluyendo instalación de sistema operativo (Windows 10 Pro) y testing completo.'
  },
  {
    question: '¿Ofrecen garantía en el servicio?',
    answer: 'Sí, todos nuestros servicios de armado incluyen garantía de ensamblaje. Además, cada componente mantiene su garantía de fábrica individual.'
  },
  {
    question: '¿Puedo llevar mis propios componentes?',
    answer: 'Por supuesto. Puedes traer tus propios componentes y nosotros nos encargamos del armado, configuración y testing. También ofrecemos asesoría si necesitas ayuda eligiendo las partes.'
  },
  {
    question: '¿Qué incluye el servicio de optimización?',
    answer: 'Incluye instalación limpia del sistema operativo Windows 10 y actualización de drivers, configuración de BIOS minima, tests de estabilidad (CPU, RAM, GPU), monitoreo de temperaturas e instalación de software esencial.'
  },
  {
    question: '¿Hacen upgrades de PCs existentes?',
    answer: 'Sí, ofrecemos servicios de upgrade. Podemos evaluar tu PC actual y recomendarte las mejores mejoras según tu presupuesto y necesidades.'
  },
  {
    question: '¿Trabajan con presupuestos ajustados?',
    answer: 'Sí, al ser una pyme estamos comenzando con armado de Pc´s gama entry, baja y media. Gradualmente iremos trabajando con presupuestos mas altos. Te ayudamos a encontrar el mejor balance entre rendimiento y precio para tus necesidades específicas.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-6 bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-700 transition"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-indigo-400 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-6 pb-6 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}