import React from 'react'
import Header from '../Landing/Header'
import Footer from '../Landing/Footer'
import ContactUs from './ContactUs'

export default function Container() {
  return (
    <>
    <Header />
    <main className='pt-10 pb-10'>
        <ContactUs />
    </main>
    <Footer />
    </>
  )
}
