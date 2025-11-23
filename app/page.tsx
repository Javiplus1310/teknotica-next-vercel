import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-200 min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <section id="contacto" className="py-20 px-6 bg-gray-900">
        <ContactForm />
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}