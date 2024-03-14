import { Link } from 'react-router-dom';
import './Video.scss';

export default function Video(props) {
  return (
      
    <div className="video">
      <h2>{props.title}</h2>
      <div className="video-wrapper">
        <video controls>
          <source src={props.src}/>
        </video>
      </div>
    </div>
  );
}