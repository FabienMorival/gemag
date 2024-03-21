import { Link } from 'react-router-dom';
import './Image.scss';

import Title from '../MiniTitle';

export default function Image(props) {
  return (
      
    <div className="image">
      { props.title ? <Title>{props.title}</Title> : "" }
      <img src={props.src} alt="alt"/>
    </div>
  );
}