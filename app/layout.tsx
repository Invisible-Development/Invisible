import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import moon from '../public/moon.png'
import bg from '../public/g.png'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-full">
      <head>
        <title>Midnight</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Midnight" />
        <link rel="icon" href="/moon.png" />

        <meta name="author" content="Collin" />
        <meta name="news_keywords" content="Midnight discord app" />

        <meta property="og:title" content="Midnight" />
        <meta property="og:site_name" content="Midnight" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="Midnight" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content="Midnight" />
        <meta name="twitter:description" content="Midnight" />
      </head>
      {/* <body className="isolate min-h-screen flex-col flex" style={{backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat'}}> */}
      <body className="bg-slate-900 isolate min-h-screen flex-col flex">

          <Nav />
            <main className="fff">{children}</main>
          <Footer />
        </body>
    </html>
  )
}
