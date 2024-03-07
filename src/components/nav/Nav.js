import { Link } from 'react-router-dom';
import './Nav.scss';

/**
 * Nav - Contient le panneau de navigation de l'application, ce qui reste en haut de l'application quelque soit la page
 */
export default function Nav() {
  return (
      
    <nav className="nav">

      {/* Image d'accueil du site */}
      <Link to="/" className="nav-home"> {/* Lien de retour vers l'accueil */}
        <div className="nav-icon"> {/* Conteneur de l'image */}
          <img src="/images/Logo_Gema.png" alt="Logo Gema" className="logo-gema"/> {/* Image du site */}
        </div>
      </Link>

      {/*<ul>
      <div className="menu"><a href="#Accueil">Accueil</a></div>
      <div className="menu"><a href="#Apropos">À propos</a></div>
      <div className="menu"><a href="#Contact">Contact</a></div>
      </ul>*/}
    
    </nav>
  );
}