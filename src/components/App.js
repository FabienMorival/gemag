import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import './App.scss';

import Home from './home/Home';
import Astronomie from './article/astronomie/Astronomie';

/**
 * App - Contient la globalité de l'application
 */
export default function App() {
  return (
    <div className="app">
      { /* Système de routage des différents liens */ }
      <Router>
        <Nav/>
        <main>
          { /* Chaque route correspond à un lien et affiche la page associée */ }
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/astronomie" element={<Astronomie/>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}