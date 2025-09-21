import { useState } from 'react'
import { Element } from 'react-scroll'
import About from './components/About/About'
import Header from './components/Header/Header'
import AboutCounter from './components/AboutCounter/AboutCounter'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Element name="about">
        <About />
        <AboutCounter />
      </Element>

      <Element name="features">
        <Features />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Element name="reviews">
        <Reviews />
      </Element>

      <Footer />
    </>
  )
}

export default App
