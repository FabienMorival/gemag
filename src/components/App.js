import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import './App.scss';

// Import du package de routage
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des différentes pages de l'application
import Home from './home/Home';
import Associations from './article/associations/Associations';
import Sport from './article/sport/Sport';
import Cuisine from './article/cuisine/Cuisine';
import Habillage from './article/habillage/Habillage';
import Dessalement from './article/dessalement/Dessalement';
import Dessalementplus from './article/dessalement/Dessalement+';
import CGU from './cgu/CGU';

/**
 * App - Contient la globalité de l'application
 */
export default function App() {
  return (
    <div className="app"> {/* Balise contenant l'application */}
      <Router> {/* Système de routage des différents liens, permettant de passer d'une page à une autre */}

        <Nav/> {/* Panneau de navigation de haut de page, inchangé quelque soit la page */}
        
        <main> {/* Corps principal */}
        
            <Routes> {/* Chaque route correspond à un lien et affiche la page associée */}
              <Route path="/" element={<Home/>} /> {/* Vers la page d'accueil */}
              <Route path="/engagements" element={<Associations/>} /> {/* Vers l'article sur les associations */}
              <Route path="/sportouetudes" element={<Sport/>} /> {/* Vers l'article sur le sport */}
              <Route path="/restoscoupdecoeur" element={<Cuisine/>} /> {/* Vers l'article sur la cuisine */}
              <Route path="/habillage" element={<Habillage/>} /> {/* Vers l'article sur l'habillage */}
              <Route path="/delamerauverre" element={<Dessalement/>} /> {/* Vers l'article sur le déssalement */}
              <Route path="/delamerauverreplus" element={<Dessalementplus/>} /> {/* Vers les infos supplémentaires du déssalement */}
              <Route path="/conditions-dutilisation" element={<CGU/>} />
            </Routes>
        
        </main>

      <Footer/> {/* Panneau de bas de page, inchangé quelque soit la page */}
        
      </Router>
    </div>
  );
}