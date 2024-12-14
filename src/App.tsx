import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pioneers } from './components/Pioneers';
import { Careers } from './components/Careers';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Pioneers />
      <Careers />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;