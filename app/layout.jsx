import React from 'react'
import Nav from '@components/Nav'
import '@styles/global.css'

const RootLayout = ({children}) => {
  return (
    <html>
      <body>

        <Nav />
        {children}
      </body>
    </html>
  )
}

export default RootLayout