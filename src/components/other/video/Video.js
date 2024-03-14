import { Link } from 'react-router-dom';
import './Video.scss';

export default function Video(props) {
  return (
      
    <div className="video">
      <h1>{props.title}</h1>
      <video controls>
        <source src={props.src}/>
      </video>  
    </div>
  );
}