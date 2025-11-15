import React from 'react'
// import Navebar from './components/Navebar'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Services from './pages/Services'
// // import Team from './pages/Team'
// import Dashboard from './pages/Dashboard'
import { BrowserRouter,Routes,Router,Route } from 'react-router-dom'
// import Booking from './pages/Booking'
import About from './pages/About'
import Header from './components/Header'
import Hero from './pages/Hero'


const App = () => {
  return (
    <>
    <div className=''>
      {/* <Navebar /> */}
        <Header />
      {/* <div> */}

        {/* <Routes>/ */}
          {/* <Route path="/" element={<Home />} > */}
          {/* </Route> */}
          {/* <Route path="/brochure" element={<Brochure />} ></Route> */}
          {/* <Route path="/services" element={<Services />} ></Route>
          <Route path="/team" element={<Team />} ></Route>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
          <Route path="/booking" element={<Booking />} ></Route> */}
        {/* </Routes> */}
      {/* </div> */}
      <Hero />
      <About />
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
