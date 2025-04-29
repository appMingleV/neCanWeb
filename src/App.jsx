import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
import './App.css'
// import TaxiSlider from './component/TaxiSlider'
import Home from './page/Home'
import Footer from './component/Footer'
import Service from './page/Service'
import { AboutUs } from './page/AboutUs'
import Contact from './page/Contact'
import PrivacyPolicy from './page/PrivacyPolicy'
import AccountDelete from './component/AccountDelete'
import ScrollToTop from './component/ScrollToTop'

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="account-delete" element={<AccountDelete />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
