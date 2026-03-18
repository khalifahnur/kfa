import React from 'react'
import Header from '../Landing/Header'
import Footer from '../Landing/Footer'
import News from './News'

export default function Container() {
  return (
    <div className='bg-[#FAF9F5]'>
    <Header />
    <main>
        <News />
        </main>
        <Footer />
        </div>
  )
}
