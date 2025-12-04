
import Header from '../header'
import Footer from '../footer'
import Brands from '../Brands'
import LetsTalk from '../LetsTalk'  

import type { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-bg-white">
        {children}
      </main>
      <Brands />
      <LetsTalk />  
      
      <Footer />
    </>
  )
}

export default Layout
