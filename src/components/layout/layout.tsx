
import Header from '../header'
import Footer from '../footer'

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
      
      <Footer />
    </>
  )
}

export default Layout
