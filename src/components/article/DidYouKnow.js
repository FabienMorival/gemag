import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DidYouKnow.scss';
import articles from '../articles.json';

import Paragraph from '../other/text/Paragraph';

export default function DidYouKnow(props) {

  var [article, setArticle] = useState(articles.filter(article => article.nom !== props.current)[Math.floor(Math.random() * (articles.length-1))])

  return (
    <div className={"did-you-know" + (props.visible ? " visible" : "")}>
      <Link to={article.link} className="dyk-link">
        <div className="dyk-box">
          <img src={"/images/" + article.img} className="dyk-background"/>
          <div className="dyk-content">
            <Paragraph centered title="Le saviez-vous ?">{article.dyk}</Paragraph>
          </div>
        </div>
      </Link>
    </div>
  );
}