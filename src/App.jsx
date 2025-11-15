import React from 'react'
// import Navebar from './components/Navebar'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Services from './pages/Services'
// // import Team from './pages/Team'
// import Dashboard from './pages/Dashboard'
import { BrowserRouter,Routes,Router,Route } from 'react-router-dom'
// import Booking from './pages/Booking'

import Header from './components/Header'
import Hero from './pages/Hero'
import WhyChoose from './pages/WhyChoose'
import Pricing from './pages/Pricing'


const App = () => {
  return (
    <>
    <div className=''>
      <Header />
      <Hero />
      <WhyChoose/>
      <Pricing/>
      {/* <Services />
      <Team />
      <Booking />
      <Dashboard />
      <Footer /> */}
    </div>
    </>
  )
}

export default App
