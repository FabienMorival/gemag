import './Nav.scss';

/**
 * Nav - Contient le panneau de navigation de l'application
 */
export default function Nav() {
  return (
      
    <nav className="nav">
      <img src="/image/Logo_Gema.png" alt="Logo Gema" className="logoGema" />
      <ul>
      <div className="menu"><a href="#Accueil">Accueil</a></div>
      <div className="menu"><a href="#Apropos">À propos</a></div>
      <div className="menu"><a href="#Contact">Contact</a></div>
    </ul>
    
    </nav>
  );
}