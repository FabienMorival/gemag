import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Article.scss';

import Back from './Back';
import DidYouKnow from './DidYouKnow';

const dykDelay = 0;

/**
 * Affichage commun des articles
 * Ne modifier que ce qui est commun à tous les articles
 * @param article - Le nom de l'article
 * @param children - Le contenu html spécifique à l'article
 */
export default function Article({ article, children }) {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, dykDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={"article article-" + article}>
      {
        /* Appelle le corps principal de chaque article */
        children
      }

      <Back/> {/* Lien de retour à l'accueil */}

      <DidYouKnow visible={showPopup} current={article}/>

    </div>
  );
}