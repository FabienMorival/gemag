import { Link } from 'react-router-dom';
import './Event.scss';

import Title from '../other/MiniTitle';
import Paragraph from '../other/text/Paragraph';
import Image from '../other/image/Image';

export default function Event(props) {

  var paragraph = <Paragraph>{props.text}</Paragraph>
  var image = <Image src={props.img} alt=""/>

  return (
    
    <div className="event quarter-section">
      <Title>{props.title}</Title> 
      {props.reverse ? <div>{image}{paragraph}</div> : <div>{paragraph}{image}</div>}
    </div>
  );
}