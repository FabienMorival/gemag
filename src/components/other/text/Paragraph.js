import { Link } from 'react-router-dom';
import './Paragraph.scss';

export default function Paragraph(props) {
  return (
      
    <div className="paragraph">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}