import './globals.css'

export const metadata = {
  title: 'SKA Top Representações',
  description: 'Portfólio de marcas nacionais e internacionais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
