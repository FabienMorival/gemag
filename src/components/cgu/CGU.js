import './CGU.scss';
import Title from '../article/ArticleTitle';

import Back from '../article/Back';

export default function CGU({ article, children }) {

  return (
    <div className="cgu-page">
      
      <Title>Conditions générales d'utilisation</Title>

      <Back/> {/* Lien de retour à l'accueil */}

    </div>
  );
}