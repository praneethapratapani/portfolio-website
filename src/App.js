import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import './App.scss';

function App() {
  const [menuOpen] = useState(false) //to make  menu active/inactive
  return (
    <div className='app'>
      <Header menuOpen={menuOpen}/>
      <div className='components'> 
        <Home />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};

export default App;
