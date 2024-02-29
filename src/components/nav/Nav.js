import './Nav.scss';

/**
 * Nav - Contient le panneau de navigation de l'application
 */
export default function Nav() {
  return (
    <nav className="nav"><ul>
      <li><a href="#Accueil">Accueil</a></li>
      <li><a href="#Apropos">À propos</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>
    </nav>
  );
}