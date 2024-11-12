import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
