import './Footer.scss';

/**
 * Footer - Contient les informations de bas de page
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="left">
      </div>
      <div className="right">
        <div className="footer-line"><a href="#">Conditions d'utilisation</a></div>
        <div className="footer-line">GEMA Montpellier - 2024</div>
      </div>
    </footer>
  );
}