import './Footer.scss';
import { Link } from 'react-router-dom';

/**
 * Footer - Contient les informations de bas de page
 */
export default function Footer() {
  return (
    <div className="footer">

      <div className="footer-picture">
        <img src="/images/photo.png" alt="Photo de groupe"/>
      </div>
      <footer className="footer-bar">
        <div className="left">
        </div>
        <div className="right">
          <div className="footer-line"><Link to="/conditions-dutilisation">Conditions d'utilisation</Link></div>
          <div className="footer-line">GEMA Montpellier - 2024</div>
        </div>
      </footer>
    </div>
  );
}