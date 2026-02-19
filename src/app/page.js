'use client'
import { useState } from 'react'
import catalogs from './data'
import CatalogCard from '../components/CatalogCard'
import Modal from '../components/Modal'

export default function Home() {
  const [activeCatalog, setActiveCatalog] = useState(null)

  function handleDownload(catalog) {
  const a = document.createElement('a')
  a.href = catalog.pdf
  a.download = catalog.filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

  return (
    <main>
      {/* ── HERO ── */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 py-16 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.13) 0%, transparent 70%)' }} />

        {/* Vertical line */}
        <div className="animate-line-grow w-px h-20 mb-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />

        {/* Tag */}
        <p className="animate-fade-up-1 text-[11px] tracking-[0.4em] text-gold uppercase mb-6 font-cormorant">
          Representações Especializadas em Bebidas Nacionais &amp; Importados
        </p>

        {/* Title */}
        <h1 className="animate-fade-up-2 font-playfair font-black leading-none tracking-tight mb-2"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          SKA Top
          <span className="block gold-gradient-text">Representações</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-3 font-cormorant italic text-muted mt-4 tracking-wide"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}>
          Portfólio de marcas nacionais e internacionais
        </p>

        {/* Gold divider */}
        <div className="animate-fade-in-4 w-28 h-px my-10 gold-gradient-line" />

        {/* Scroll hint */}
        <div className="animate-fade-in-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-[11px] tracking-[0.3em] uppercase font-cormorant">
          Explorar
          <span className="animate-scroll-pulse block w-px h-10"
            style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        </div>
      </header>

      {/* ── CATALOGS ── */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24 md:py-28">
        <p className="text-[11px] tracking-[0.4em] text-gold uppercase mb-4 font-cormorant">
          Nosso Portfólio
        </p>
        <h2 className="font-playfair font-bold text-cream mb-16 leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Catálogos &amp; Marcas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogs.map(catalog => (
            <CatalogCard
              key={catalog.id}
              catalog={catalog}
              onView={setActiveCatalog}
              onDownload={handleDownload}
            />
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <div className="bg-dark2 border-y border-gold/10">
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24 md:py-28">
          <p className="text-[11px] tracking-[0.4em] text-gold uppercase mb-4 font-cormorant">
            Fale Conosco
          </p>
          <h2 className="font-playfair font-bold text-cream mb-16 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Contato
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <ContactItem icon={phoneSvg} label="Telefone">
              <a href="tel:+5527992221222" className="text-cream hover:text-gold-light transition-colors duration-300">(27) 99222-1222</a>
              <a href="tel:+5527992575902" className="text-cream hover:text-gold-light transition-colors duration-300">(27) 99257-5902</a>
            </ContactItem>

            <ContactItem icon={whatsappSvg} label="WhatsApp">
              <a href="https://wa.me/5527992221222" target="_blank" rel="noreferrer" className="text-cream hover:text-gold-light transition-colors duration-300">(27) 99222-1222</a>
              <a href="https://wa.me/5527992575902" target="_blank" rel="noreferrer" className="text-cream hover:text-gold-light transition-colors duration-300">(27) 99257-5902</a>
            </ContactItem>

            <ContactItem icon={emailSvg} label="E-mail">
              <a href="mailto:sktoprepresentacoes@gmail.com" className="text-cream hover:text-gold-light transition-colors duration-300 break-all">
                sktoprepresentacoes@gmail.com
              </a>
            </ContactItem>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="text-center px-10 py-16 text-muted font-cormorant italic border-t border-gold/8">
        <div className="font-playfair text-2xl font-bold text-gold mb-3 not-italic">SKA Top</div>
        <p>© 2025 SKA Top Representações · Todos os direitos reservados</p>
      </footer>

      {/* ── MODAL ── */}
      {activeCatalog && (
        <Modal catalog={activeCatalog} onClose={() => setActiveCatalog(null)} />
      )}
    </main>
  )
}

function ContactItem({ icon, label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-12 h-12 flex items-center justify-center text-gold border border-gold/30">
        {icon}
      </div>
      <p className="text-[11px] tracking-[0.3em] text-gold uppercase font-cormorant">{label}</p>
      <div className="font-cormorant text-lg leading-8 flex flex-col">{children}</div>
    </div>
  )
}

const phoneSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)
const whatsappSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M11.99 2h-.01C6.472 2 2 6.472 2 11.99c0 1.99.584 3.849 1.59 5.405L2 22l4.747-1.565A9.955 9.955 0 0011.99 22C17.517 22 22 17.527 22 12S17.517 2 11.99 2z"/>
  </svg>
)
const emailSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)
