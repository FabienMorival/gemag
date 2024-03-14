import { Link } from 'react-router-dom';
import './Home.scss';
import articles from '../articles.json';

import Carousel from './Carousel';


/**
 * Page d'accueil du site
 */
export default function Home() {
  return (
    <div className="home-page">

      <Carousel articles={articles}/>

      <div className="footer-picture">
        <img src="/images/photo.png" alt="Photo de groupe"/>
      </div>
    </div>
  );
}