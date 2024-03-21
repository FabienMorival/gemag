import { Link } from 'react-router-dom';
import './Video.scss';

import Title from '../MiniTitle';

export default function Video(props) {
  return (
      
    <div className="video">
      { props.title ? <Title>{props.title}</Title> : "" }
      <div className="video-wrapper">
        <video controls>
          <source src={props.src}/>
        </video>
      </div>
    </div>
  );
}