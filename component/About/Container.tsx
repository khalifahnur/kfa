import React from 'react'
import AboutPage from './About'
import Header from '../Landing/Header'
import Footer from '../Landing/Footer'
import LocationGlobe from './Location'

export default function Container() {
  return (
     <div className='bg-[#FAF9F5]'>
    <Header />
    <main className='pt-10'>
        <AboutPage />
        <LocationGlobe />
    </main>
    <Footer />
    </div>
  )
}
