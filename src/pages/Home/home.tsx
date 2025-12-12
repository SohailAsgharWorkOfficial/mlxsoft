import React from 'react'
import Layout from "../../components/layout/layout"
import HeroSection from './components/HeroSection'
import WhatWeDo from './components/WhatWeDo'
import ConnectAudience from './components/ConnectAudience'
import LatestNewsSection from './components/latestnews'
import RecentWorkCarousel from './components/RecentWorkCarousel'
import GuaranteeSection from './components/GuaranteeSection'
import TestimonialsSection from './components/TestimonialsSection'


const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDo />
      <ConnectAudience />
      <RecentWorkCarousel />
      <GuaranteeSection />
      <TestimonialsSection />




      <LatestNewsSection />
      
      

      
      
    </Layout>
  )
}

export default Home
