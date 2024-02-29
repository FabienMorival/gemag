import { Link } from 'react-router-dom';
import './Home.scss';

/**
 * Page d'accueil du site
 */
export default function Home() {
  return (
    <div className="home-page">

      {/* Liste des liens - architecture temporaire */}
      <ul>
        <li><Link to="/associations">Associations</Link></li>
        <li><Link to="/astronomie">Astronomie</Link></li>
        <li><Link to="/sport">Sport</Link></li>
        <li><Link to="/cuisine">Cuisine</Link></li>
        <li><Link to="/habillage">Habillage</Link></li>
        <li><Link to="/dessalement">Déssalement</Link></li>
      </ul>

    </div>
  );
}