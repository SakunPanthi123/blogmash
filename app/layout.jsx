'use client'
import { useState } from 'react'
import Nav from '@components/Nav'
import '@styles/global.css'
import UpdateContext from '@components/UpdateProvider'

const RootLayout = ({ children }) => {
  const [update_query, updateQuery] = useState('')
  return (
    <UpdateContext.Provider value={{ update_query, updateQuery }}>
      <html>
        <body>
          <Nav />
          {children}
        </body>
      </html>
    </UpdateContext.Provider>
  )
}

export default RootLayout