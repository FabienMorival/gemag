import { Link } from 'react-router-dom';
import './ArticleTitle.scss';

export default function ArticleTitle(props) {
  return (
      
    <div className="article-title">
      <h1>{props.children}</h1>
    </div>
  );
}