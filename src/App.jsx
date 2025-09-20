import { useState } from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import AboutCounter from './components/AboutCounter/AboutCounter'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Reviews from './components/Reviews/Reviews'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <AboutCounter />
      <Features />
      <Pricing />
      <Testimonials />
      <Reviews />
    </>
  )
}

export default App
