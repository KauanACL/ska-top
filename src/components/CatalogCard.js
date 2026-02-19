'use client'

export default function CatalogCard({ catalog, onView, onDownload }) {
  return (
    <div className="group flex flex-col bg-dark2 border border-gold/15 cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0" />

      {/* Logo area */}
      <div
        className="relative z-10 w-full h-52 bg-dark3 flex items-center justify-center p-6 overflow-hidden"
        onClick={() => onView(catalog)}
      >
        {catalog.logo ? (
          <img
            src={catalog.logo}
            alt={catalog.title}
            className="max-w-full max-h-full object-contain transition-all duration-400 group-hover:scale-105"
            style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }}
          />
        ) : (
          <span className="font-playfair text-6xl font-black gold-gradient-text opacity-40 group-hover:opacity-80 transition-opacity duration-400">
            {catalog.title[0]}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative z-10 flex flex-col flex-1 p-6 pt-5">
        <h3
          className="font-playfair text-xl font-bold text-cream mb-6"
          onClick={() => onView(catalog)}
        >
          {catalog.title}
        </h3>

        {/* Buttons - always at bottom */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={() => onView(catalog)}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 font-cormorant text-xs tracking-widest uppercase font-semibold gold-gradient-bg text-dark hover:brightness-110 transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            Visualizar
          </button>

          <button
            onClick={() => onDownload(catalog)}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 font-cormorant text-xs tracking-widest uppercase text-gold border border-gold/40 hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            Baixar
          </button>
        </div>
      </div>
    </div>
  )
}
