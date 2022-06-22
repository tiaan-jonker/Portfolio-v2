import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './Nav'
import NotFound from './pages/NotFound'
import Work from './Work'
import Bio from './Bio'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
