import React from 'react'
import Navigation from './components/Navigation'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Prueba Técnica Frontend Centribal</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
