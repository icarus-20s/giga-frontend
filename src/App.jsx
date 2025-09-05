import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Contactus from './Contactus/Contactus'
import Products from './Products/Products'
import About from './About/About'
import Services from './Services/Services'
import Gallery from './Gallery/Gallery'
import Career from './Career/Career'
import Navbar from './Navbar/Navbar'
import GigaFooter from './GigaFooter/GigaFooter'

const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <GigaFooter />
    </>
  )
}

export default App
