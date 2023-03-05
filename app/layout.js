import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body" className="isolate bg-slate-900">
        <Nav/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
