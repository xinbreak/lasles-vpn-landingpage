import { useState } from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import AboutCounter from './components/AboutCounter/AboutCounter'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <AboutCounter />
    </>
  )
}

export default App
