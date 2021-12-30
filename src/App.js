import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import './App.css';
//
import Footer from './components/Footer/Footer';
import MainDiv from './components/Main/MainDiv';
import NavBar from './components/NavBar/NavBar.jsx';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import PricingList from './components/Pricing/Pricing';
//
import { pricingPlans } from './components/Pricing/pricingPlans';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="about" element={<AboutUs />} />
        <Route
          path="pricing"
          element={<PricingList pricingPlans={pricingPlans} />}
        />
        <Route path="contact" element={<Contact />} />
        <Route exact path="/" element={<MainDiv />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
