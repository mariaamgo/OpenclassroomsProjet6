import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Error from '../Error'
import Home from '../../pages/Home'
import AccommodationListing from '../../pages/AccommodationListing'
import About from '../../pages/About'

function AppRouter() {
  return (
    <Router>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/accommodation_listing"
          element={<AccommodationListing />}
        />
        <Route path="/a_propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
