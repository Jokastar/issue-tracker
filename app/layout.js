
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import AuthProvider from './auth/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <NavBar/>
          {children}
        </body> 
        </AuthProvider>
    </html>
  )
}
