import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
const Home = () => {
  return (
   <main>
    <Navigation/>
    <Hero/>
    <Services/>
    <Reviews/>
    <Footer/>
   </main>
  )
}

export default Home
