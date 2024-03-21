import { Link } from 'react-router-dom';
import './Article.scss';

import Back from './Back';

/**
 * Affichage commun des articles
 * Ne modifier que ce qui est commun à tous les articles
 * @param article - Le nom de l'article
 * @param children - Le contenu html spécifique à l'article
 */
export default function Article({ article, children }) {
  return (
    <div className={"article article-" + article}>
      {
        /* Appelle le corps principal de chaque article */
        children
      }

      <Back/> {/* Lien de retour à l'accueil */}

    </div>
  );
}