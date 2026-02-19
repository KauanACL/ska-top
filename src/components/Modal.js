'use client'
import { useEffect } from 'react'

export default function Modal({ catalog, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleDownload() {
    const a = document.createElement('a')
    a.href = catalog.pdf
    a.download = catalog.filename
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  function handleNewTab() {
    window.open(catalog.pdf, '_blank')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="flex flex-col w-full max-w-4xl bg-dark2 border border-gold/25"
           style={{ height: '85vh' }}>

        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-gold/15 flex-wrap">
          <span className="font-playfair text-lg text-cream">{catalog.title}</span>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Abrir em nova aba */}
            <button
              onClick={handleNewTab}
              className="flex items-center gap-2 px-4 py-2 font-cormorant text-xs tracking-widest uppercase text-gold border border-gold/40 hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Abrir em nova aba
            </button>

            {/* Baixar */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 font-cormorant text-xs tracking-widest uppercase font-semibold gold-gradient-bg text-dark hover:brightness-110 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Baixar PDF
            </button>

            {/* Fechar */}
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center text-muted border border-white/10 hover:border-gold/40 hover:text-gold transition-all duration-200 bg-white/5 text-lg"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-[#111]">
          <iframe
            src={catalog.pdf}
            title={catalog.title}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  )
}
