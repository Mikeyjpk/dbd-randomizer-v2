

import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dbd Randomizer',
  description: 'Generate random builds for dbd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <ClientOnly>
            <div className='bg-neutral-950'>
              <Navbar />
              <div className='flex flex-row gap-0'>
                <Sidebar /> 
              <div className='h-full w-full'>
                {children}  
              </div>
              </div>
            </div>
          </ClientOnly>
        </Container>
      </body>
    </html>
  )
}
