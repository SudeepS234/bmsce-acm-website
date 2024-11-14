import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import './App.css';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (section) => {
    const sectionMap = {
      aboutACM: document.getElementById('aboutACM'),
      events: document.getElementById('events'),
      news: document.getElementById('acmglobal'),
      gallery: document.getElementById('gallery')
    };

    const sectionElement = sectionMap[section];
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection}/>
      <Homepage scrollToSection={scrollToSection}/>
      <Footer scrollToSection={scrollToSection}/>
    </div>
  );
}

export default App;
