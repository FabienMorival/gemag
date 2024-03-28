import { Link } from 'react-router-dom';
import './Home.scss';
import articles from '../articles.json';

import Associations from './Associations';
import Carousel from './Carousel';
import Event from './Event';
import Paragraph from '../other/text/Paragraph';


/**
 * Page d'accueil du site
 */
export default function Home() {
  return (
    <div className="home-page">

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>

      <Link to="/engagements">
        <img className="asso-link" src="/images/assos.png"/>
      </Link>

      <Carousel articles={articles}/>

      {/*<Associations/>*/}

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