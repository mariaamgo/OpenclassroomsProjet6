import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Error from '../../pages/Error'
import Home from '../../pages/Home'
import Accommodation from '../../pages/Accommodation'
import About from '../../pages/About'

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<About />} />
        <Route
          path="/accommodation/:accommodationId"
          element={<Accommodation />}
        />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter
