import ActiveSectionContextProvider from '@/context/active-section-context'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Asap, Anton } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'



const specFont = Asap({
  subsets: ['latin'],
  weight:'400',
  variable: "--font-specFont",
})


const inter = Inter({ 
  subsets: ['latin'],
  variable: "--font-inter",
})

const mid = Anton({
  subsets: ['latin'],
  weight:'400',
  variable: "--font-mid",
})

export const metadata: Metadata = {
  title: 'Michał Karsay Portfolio',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${specFont.variable} ${inter.variable} ${mid.variable} "!scroll-smooth"`}>
      <body 
        className={`${inter.className}  bg-[#10061a]  text-white-950 relative pt-28 sm:pt-36`}>
          

         
          
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        
        
      </body>
    </html>
  );
}
