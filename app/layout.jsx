'use client'
import { useState } from 'react'
import Nav from '@components/Nav'
import '@styles/global.css'
import SessionContext from '@components/SessionProvider'

const RootLayout = ({ children }) => {
  const [username, updateName] = useState('')
  return (
    <SessionContext.Provider value={{ username, updateName }}>
      <html>
      <Nav />
        <body className='mt-24'>
          {children}
        </body>
      </html>
    </SessionContext.Provider>
  )
}

export default RootLayout