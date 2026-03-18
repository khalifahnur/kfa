import React from 'react'
import Header from '../Landing/Header'
import Footer from '../Landing/Footer'
import Program from './Program'

export default function Container() {
  return (
     <>
    <Header />
    <main className='pt-10'>
        <Program />
    </main>
    <Footer />
    </>
  )
}
