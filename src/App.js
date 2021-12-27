import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
import './App.css';
//
import Footer from './components/Footer/Footer';
import MainDiv from './components/Main/MainDiv';
import PricingList from './components/Pricing';
import About from './components/AboutUs';
import Contact from './components/Contact';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/pricing">
            <PricingList />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <MainDiv />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
