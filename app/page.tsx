import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="bg-gray-950 text-gray-200 min-h-screen">
      <Header />
      <Hero />
      <Services />
      <section id="contacto" className="py-20 px-6">
        <ContactForm />
      </section>
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} Teknotica — Armado de PCs profesionales
      </footer>
    </main>
  )
}