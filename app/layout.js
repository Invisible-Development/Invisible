import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-purple-900">
        {children}
      </body>
    </html>
  )
}
