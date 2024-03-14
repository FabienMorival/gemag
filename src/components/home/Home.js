import { Link } from 'react-router-dom';
import './Home.scss';

import Carousel from './Carousel';

const articles = [
  { name: "Associations", img: "associations.jpeg", link: "/associations" },
  { name: "Astronomie", img: "astronomie.jpeg", link: "/astronomie" },
  { name: "Sport", img: "sport.png", link: "/sport" },
  { name: "Cuisine", img: "cuisine.jpg", link: "/cuisine" },
  { name: "Habillage", img: "habillage.png", link: "/habillage" },
  { name: "Déssalement", img: "dessalement.jpg", link: "/dessalement" }
]

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