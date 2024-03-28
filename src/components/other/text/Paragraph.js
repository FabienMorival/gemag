import { Link } from 'react-router-dom';
import './Paragraph.scss';

import Title from '../MiniTitle';

export default function Paragraph(props) {
  return (
      
    <div id={props.title ? "paragraph-" + props.title : ""} className="paragraph">
      { props.title ? <Title>{props.title}</Title> : "" }
      <p className={ props.centered ? "centered" : "" }>{props.children}</p>
    </div>
  );
}