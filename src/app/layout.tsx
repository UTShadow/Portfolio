import ActiveSectionContextProvider from '@/context/active-section-context'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Asap, Anton, Londrina_Solid } from 'next/font/google'
import Header from '@/components/header'
import { Toaster } from "react-hot-toast";

const specFont = Asap({
  subsets: ['latin'],
  weight:'400',
  variable: "--font-specFont",
})

const introFont = Londrina_Solid({
  subsets: ['latin'],
  weight:'900',
  variable: "--font-introFont",
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
  description: 'Portfolio ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body 
        className={`${inter.className} ${specFont.variable} ${mid.variable} ${introFont.variable} bg-[#10061a]  text-white-950 relative pt-28 sm:pt-36`}>
 
          <ActiveSectionContextProvider>
            <Header />
            {children}
            
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        
      </body>
    </html>
  );
}
