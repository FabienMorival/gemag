import { Link } from 'react-router-dom';
import './Home.scss';
import articles from '../articles.json';

import Carousel from './Carousel';
import Event from './Event';


/**
 * Page d'accueil du site
 */
export default function Home() {
  return (
    <div className="home-page">

      
      <Carousel articles={articles}/>

      <Event
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        img="/images/cuisine.jpg"
        title="Evénement"
      />
      <Event
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        img="/images/cuisine.jpg"
        title="Evénement" reverse
      />
      <Event
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        img="/images/cuisine.jpg"
        title="Evénement"
      />
      <Event
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        img="/images/cuisine.jpg"
        title="Evénement" reverse
      />
    </div>
  );
}